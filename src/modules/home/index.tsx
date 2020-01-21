import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h2>Welcome to my portfolio site.</h2>
        <h3>Hi, My name is Aditya Saxena.</h3>
        <div style={{ minHeight: "60px" }}>
          <p style={{ float: "left" }}>This is me...</p>
          <img
            alt="My pic"
            src="https://drive.google.com/uc?id=0By6O0x-8azUxWHNoVnVwYkNSU2s"
          ></img>
        </div>
      </header>
      <p>I am a frontend engineer at Mindtickle building Call AI.</p>
      <p>
        Call AI is a sales enablement platform which delivers advanced analytics
        on sales reps online calls and meetings.
      </p>
      <p>
        On my day to day basis, I code in JavaScript building rich UI using
        React, GraphQL, etc. I know how to make UI high performant and
        efficient.
      </p>
      <p>
        I'm Passionate about building world class web applications. And also, I
        have prior knowledge of Java and a knack for competitive programming and
        general problem-solving.
      </p>
      <p>
        THIS SITE IS WORK IN PROGRESS, please visit -
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://adityasmksaxena.netlify.com/"
        >
          my existing portfolio site
        </a>
      </p>
    </div>
  );
};

export default Home;
