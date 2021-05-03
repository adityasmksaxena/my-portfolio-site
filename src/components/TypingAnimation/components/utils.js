import React, { Children } from "react";
// import shortid from 'shortid';

const voidHTMLElements = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

const flatten = arr => {
  return arr.reduce((acc, item) => {
    return acc.concat(
      Array.isArray(item) ? Children.toArray(flatten(item)) : Children.toArray(item)
    );
  }, []);
};

const removeUndefined = arr => {
  return arr.filter(node => {
    return node !== undefined;
  });
};

const isTypingComponent = struct => {
  return ["Backspace", "Delay", "Speed", "Reset"].some(sub => {
    return struct.type && struct.type.getName && struct.type.getName() === sub;
  });
};

export const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const gaussianRandomInRange = (min, max) => {
  let total = randomInRange(min, max);

  for (let i = 0; i < 5; i++) {
    total += randomInRange(min, max);
  }

  return Math.floor(total / 6);
};

export const randomize = (avg, randomPercentage = 0.2) => {
  return gaussianRandomInRange(avg + avg * randomPercentage, avg - avg * randomPercentage);
};

export const extractText = (...args) => {
  const traverse = node => {
    if (isTypingComponent(node)) {
      return node;
    }
    if (React.isValidElement(node)) {
      if (voidHTMLElements.indexOf(node.type) !== -1) {
        return "\n";
      }
      return Children.map(node.props.children, child => {
        return traverse(child);
      });
    }
    if (Array.isArray(node)) {
      return node.map(el => {
        return traverse(el);
      });
    }
    return String(node);
  };
  const text = traverse(...args);
  return Array.isArray(text) ? removeUndefined(flatten(text)) : removeUndefined([text]);
};

export const replaceTreeText = (tree, txt, cursor, hideCursor) => {
  const traverse = (node, text) => {
    if (text.length < 1) {
      return undefined;
    }

    if (isTypingComponent(node)) {
      return undefined;
    }
    if (React.isValidElement(node)) {
      if (voidHTMLElements.indexOf(node.type) !== -1) {
        if (text.length === 1) {
          return Children.toArray([
            text.shift() === "" ? undefined : node,
            hideCursor ? null : cursor,
          ]);
        }
        return text.shift() === "" ? undefined : node;
      }

      return React.createElement(
        node.type,
        {
          ...node.props,
          key: node.key || `Typing.${Math.random}`, // `Typing.${shortid.generate()}`,
        },
        removeUndefined(
          Children.toArray(node.props.children).map(child => {
            return traverse(child, text);
          })
        )
      );
    }
    if (Array.isArray(node)) {
      return removeUndefined(
        node.map(el => {
          return traverse(el, text);
        })
      );
    }
    return text.length === 1
      ? Children.toArray([text.shift(), hideCursor ? null : cursor])
      : text.shift() || "";
  };
  return traverse(tree, txt.slice());
};

export const getCircularReplacer = () => {
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      try {
        seen.add(value);
      } catch (e) {
        // The following will break MS Edge:
        // seen.add(window.location);
        // See:
        // https://github.com/Microsoft/ChakraCore/pull/3522
      }
    }
    return value;
  };
};
