import { useState, useEffect, useRef } from "react";

interface SkillTexts {
  [key: string]: string;
}

const TYPING_SPEED = 300;
const DELETING_SPEED = 100;
const PAUSE_TIME = 2000;

function Skills() {
  const [skillTexts, setSkillTexts] = useState<SkillTexts>({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);
  const [startAnimation, setStartAnimation] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Git", color: "text-red-500" },
    { name: "CSS", color: "text-red-300" },
    { name: "SASS", color: "text-gray-500" },
    { name: "HTML5", color: "text-green-400" },
    { name: "Next.js", color: "text-red-200" },
    { name: "React.js", color: "text-green-600" },
    { name: "Bootstrap", color: "text-gray-700" },
    { name: "JavaScript", color: "text-blue-700" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "Tailwind CSS", color: "text-pink-400" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      let timer = setTimeout(() => {
        handleTyping();
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [skillTexts, isDeleting, typingSpeed, startAnimation]);

  const handleTyping = () => {
    if (!startAnimation) return;

    const maxLength = Math.max(...skills.map((skill) => skill.name.length));

    if (!isDeleting) {
      setSkillTexts((prevTexts) => {
        const newTexts: SkillTexts = { ...prevTexts };
        skills.forEach((skill) => {
          if (
            !newTexts[skill.name] ||
            newTexts[skill.name].length < skill.name.length
          ) {
            newTexts[skill.name] = skill.name.substring(
              0,
              (newTexts[skill.name] || "").length + 1
            );
          }
        });
        return newTexts;
      });

      if (
        Object.values(skillTexts).every((text) => text.length === maxLength)
      ) {
        setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      }
    } else {
      setSkillTexts((prevTexts) => {
        const newTexts: SkillTexts = { ...prevTexts };
        skills.forEach((skill) => {
          if (newTexts[skill.name] && newTexts[skill.name].length > 0) {
            newTexts[skill.name] = skill.name.substring(
              0,
              newTexts[skill.name].length - 1
            );
          }
        });
        return newTexts;
      });

      if (Object.values(skillTexts).every((text) => text.length === 0)) {
        setIsDeleting(false);
      }
    }

    setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);
  };

  return (
    <div className="mt-8">
      <div className="text-center">
        <p className="text-xl">( # )</p>
        <p className="text-4xl mt-4">{"<Skills>"}</p>
        <p className="max-w-[700px] m-auto pt-4 font-mono">
          "Web development skills and technologies I've mastered and use in
          projects. These tools help me create modern and efficient web
          applications."
        </p>
      </div>
      <div ref={skillsRef}>
        <ul className="text-center text-3xl md:text-6xl">
          {skills.map((skill, index) => (
            <li key={index} className="mt-3">
              {"{_<"}
              <span className={skill.color}>
                {startAnimation ? skillTexts[skill.name] || "" : ""}
              </span>
              {">}"}
              <span id="cursor"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
