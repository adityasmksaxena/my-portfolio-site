import React, { Component } from "react";
import PropTypes from "prop-types";

import { NOOP } from "../../../constants/index";

import Backspace from "./Backspace";
import Cursor from "./Cursor";
import Delay from "./Delay";
import Reset from "./Reset";
import Speed from "./Speed";

import { extractText, getCircularReplacer, randomize, replaceTreeText } from "./utils";

const { requestAnimationFrame } = window;

class Typing extends Component {
  state = {
    isFinished: false,
    text: [],
  };

  componentDidMount() {
    this.hasMounted = true;
    this.resetState().then(async () => {
      const { onStartedTyping } = this.props;
      await onStartedTyping();
      requestAnimationFrame(this.beginTyping);
    });
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (
      children !== undefined &&
      JSON.stringify(children, getCircularReplacer()) !==
        JSON.stringify(prevProps.children, getCircularReplacer())
    ) {
      this.resetState();
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  updateState = async state => {
    if (this.hasMounted) {
      return new Promise(resolve => {
        this.setState(state, resolve);
      });
    }
    return Promise.resolve();
  };

  resetState = async () => {
    const { children, startDelay, speed } = this.props;
    return this.updateState({
      toType: extractText(children),
      cursor: {
        lineNum: 0,
        charPos: 0,
        numToErase: 0,
        preEraseLineNum: 0,
        delay: startDelay,
        speed,
        step: "char",
      },
    });
  };

  beginTyping = async () => {
    const { cursor: stateCursor, toType, text } = this.state;
    const { onBeforeType, onAfterType, onFinishedTyping, loop } = this.props;
    const cursor = { ...stateCursor };
    if (toType.length > 0 || cursor.numToErase > 0) {
      await onBeforeType(text);
      await this.type();
      await onAfterType(text);
    } else {
      await onFinishedTyping();
      if (loop) {
        await this.resetState();
      } else {
        return this.updateState({ isFinished: true });
      }
    }
    if (this.hasMounted) {
      return this.beginTyping();
    }
    return Promise.resolve();
  };

  type = async () => {
    const { toType: stateToType, cursor: stateCursor } = this.state;
    const toType = [...stateToType];
    let cursor = { ...stateCursor };
    while (
      toType &&
      toType[0] &&
      toType[0].type &&
      toType[0].type.updateCursor &&
      cursor.numToErase < 1
    ) {
      cursor = toType[0].type.updateCursor(cursor, toType[0].props);
      toType.shift();
    }
    await this.updateState({ cursor, toType });
    return this.animateNextStep();
  };

  animateNextStep = async () => {
    return new Promise(resolve => {
      const { cursor: stateCursor } = this.state;
      setTimeout(async () => {
        const { cursor, toType } = this.state;
        await this.updateState({ cursor: { ...cursor, delay: 0 } });
        if (cursor.step === "char" && cursor.numToErase < 1) {
          if (toType.length > 0) {
            await this.typeCharacter();
          }
        } else {
          await this.erase();
        }
        resolve();
      }, stateCursor.delay);
    });
  };

  typeCharacter = async () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      const { toType: stateToType, text: stateText, cursor: stateCursor } = this.state;
      const toType = [...stateToType];
      const text = [...stateText];
      const cursor = { ...stateCursor };
      if (text.length - 1 < cursor.lineNum) {
        text[cursor.lineNum] = "";
      }
      text[cursor.lineNum] += toType[0][cursor.charPos];
      cursor.charPos += 1;
      if (toType[0].length - 1 < cursor.charPos) {
        cursor.lineNum += 1;
        cursor.charPos = 0;
        toType.shift();
      }
      try {
        await this.updateState({ cursor, text, toType });
      } catch (err) {
        reject(err);
      }
      setTimeout(resolve, randomize(cursor.speed));
    });
  };

  erase = async () => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      const { text: stateText, cursor: stateCursor } = this.state;
      const text = [...stateText];
      const cursor = { ...stateCursor };
      while (cursor.lineNum > text.length - 1 || cursor.charPos < 0) {
        cursor.lineNum -= 1;
        if (cursor.lineNum < 0) {
          break;
        }
        cursor.charPos = text[cursor.lineNum].length ? text[cursor.lineNum].length - 1 : 0;
      }
      if (cursor.step === "char" && cursor.lineNum >= 0) {
        text[cursor.lineNum] = text[cursor.lineNum].substr(0, text[cursor.lineNum].length - 1);
      } else if (cursor.numToErase > 0) {
        text[cursor.lineNum] = "";
      } else {
        text.length = 0;
      }
      cursor.charPos -= 1;
      cursor.numToErase -= 1;
      if (cursor.numToErase < 1) {
        cursor.lineNum = cursor.preEraseLineNum;
        cursor.charPos = 0;
        cursor.step = "char";
      }
      try {
        await this.updateState({ cursor, text });
      } catch (err) {
        reject(err);
      }
      setTimeout(resolve, randomize(cursor.speed));
    });
  };

  render() {
    const { children, className, element, cursorClassName, cursorElement, hideCursor } = this.props;
    const { isFinished, text } = this.state;
    const { cursor: propsCursor } = this.props;
    const cursor = propsCursor || <Cursor element={cursorElement} className={cursorClassName} />;
    const filled = replaceTreeText(children, text, cursor, isFinished || hideCursor);
    return element !== "" ? React.createElement(element, { className }, filled) : <>{filled}</>;
  }
}

Typing.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hideCursor: PropTypes.func,
  cursor: PropTypes.node,
  cursorClassName: PropTypes.string,
  cursorElement: PropTypes.string,
  speed: PropTypes.number,
  startDelay: PropTypes.number,
  loop: PropTypes.bool,
  onStartedTyping: PropTypes.func,
  onBeforeType: PropTypes.func,
  onAfterType: PropTypes.func,
  onFinishedTyping: PropTypes.func,
};

Typing.defaultProps = {
  className: "",
  hideCursor: undefined,
  cursor: undefined,
  cursorClassName: "",
  cursorElement: "",
  speed: 50,
  startDelay: 0,
  loop: false,
  element: "div",
  onStartedTyping: NOOP,
  onBeforeType: NOOP,
  onAfterType: NOOP,
  onFinishedTyping: NOOP,
};

Typing.Backspace = Backspace;
Typing.Reset = Reset;
Typing.Delay = Delay;
Typing.Speed = Speed;
Typing.Cursor = Cursor;

export default Typing;
