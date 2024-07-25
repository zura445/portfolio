import React, { useState, useEffect } from "react";

const TYPING_SPEED = 150;
const DELETING_SPEED = 50;
const PAUSE_TIME = 1000;

function Hello() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  const fullText = "Front-End Developer";

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleTyping = () => {
    const shouldBeDeleting = isDeleting && text.length === 0;
    const shouldStartTyping = !isDeleting && text.length === fullText.length;

    if (shouldBeDeleting) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(PAUSE_TIME);
    } else if (shouldStartTyping) {
      setIsDeleting(true);
      setTypingSpeed(PAUSE_TIME);
    } else {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }
  };

  return (
    <div className="flex flex-col text-center mt-20">
      <p className="text-white">// HI, I'M ZURA TETRASHVILI ...</p>
      <h1 className="mt-4 text-orange-300">
        {'{" '}
        <span>{text}</span>
        <span id="cursor"></span>
        {' "}'}
      </h1>
      <div className="w-full h-[700px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-bottom mt-8"
          src="/images/code.jpg"
          alt="logo image"
        />
      </div>
    </div>
  );
}

export default Hello;
