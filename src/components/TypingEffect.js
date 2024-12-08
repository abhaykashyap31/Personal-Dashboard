import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <div>
      <h1>
        <Typewriter
          words={['Hello, world!', 'Welcome to my portfolio!']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypingEffect;
