import { useState, useRef, useEffect } from "react";
import jobsData from "../../src/jobsData.json";

interface Job {
  logo: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

function AboutMe() {
  const { jobs } = jobsData as { jobs: Job[] };
  const [showAll, setShowAll] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(
          showAll ? `${contentRef.current.scrollHeight + 20}px` : "0px"
        );
      }
    };

    const timeoutId = setTimeout(updateHeight, 0);

    window.addEventListener("resize", updateHeight);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateHeight);
    };
  }, [showAll]);

  const toggleJobsVisibility = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center text-3xl sm:text-4xl mt-8 text-gray-500">
        {"{ "}/{" }"}
      </div>
      <div className="flex justify-center text-4xl sm:text-5xl md:text-8xl mt-8 text-gray-500">
        {"<"}About_me{">"}
      </div>
      <p className="m-auto pt-8 max-w-[800px] text-sm sm:text-base text-gray-400 font-mono text-center">
        ...I'm a web developer with experience in Front-End and Software Quality
        Assurance. I strive to create innovative, high-quality products that
        meet modern standards, focusing on enhancing user experience and
        ensuring software quality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {jobs.slice(0, 2).map((job, index) => (
          <JobItem key={index} job={job} />
        ))}
      </div>

      {jobs.length > 2 && (
        <div
          style={{ height: contentHeight }}
          className="overflow-hidden transition-all duration-700 ease-in-out"
        >
          <div ref={contentRef} className="pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {jobs.slice(2).map((job, index) => (
                <JobItem key={index + 2} job={job} />
              ))}
            </div>
          </div>
        </div>
      )}

      {jobs.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleJobsVisibility}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none transition-all duration-300"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      )}
    </div>
  );
}

function JobItem({ job }: { job: Job }) {
  return (
    <div className="flex flex-col p-2 rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src={job.logo}
          alt={`${job.company}-logo`}
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
        />
        <div className="ml-3 sm:ml-4 text-gray-300 font-mono text-xs sm:text-sm">
          <p className="font-semibold">{job.title}</p>
          <p>{job.company}</p>
          <p className="text-gray-400">{job.duration}</p>
        </div>
      </div>
      <ul className="text-gray-300 list-none pl-0 font-mono space-y-2 text-xs sm:text-sm">
        {job.responsibilities.map((responsibility, respIndex) => (
          <li key={respIndex} className="flex items-start mb-2 last:mb-0">
            <span className="mr-2 flex-shrink-0 text-blue-400">•</span>
            <span className="flex-grow break-words">{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;
