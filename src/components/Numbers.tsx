import { useEffect, useState, useCallback } from "react";

function Numbers() {
  const [count, setCount] = useState<number[]>([]);

  const updateCount = useCallback(() => {
    const bodyHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const numbers = Math.floor(bodyHeight / 24 - 1);
    const newCount = Array.from({ length: numbers }, (_, index) => index + 1);
    setCount((prevCount) => {
      if (prevCount.length !== newCount.length) {
        return newCount;
      }
      return prevCount;
    });
  }, []);

  useEffect(() => {
    updateCount();

    window.addEventListener("resize", updateCount);

    const observer = new MutationObserver(updateCount);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      window.removeEventListener("resize", updateCount);
      observer.disconnect();
    };
  }, [updateCount]);

  return (
    <div className="flex flex-col absolute left-2 border-r-2 border-gray-700 pr-2">
      {count.map((num) => (
        <span key={num}>{num}</span>
      ))}
    </div>
  );
}

export default Numbers;
