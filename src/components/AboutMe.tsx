import { useState } from "react";
import jobsData from "../../src/jobsData.json";

function AboutMe() {
  const { jobs } = jobsData;
  const [showAll, setShowAll] = useState(false);

  const visibleJobs = showAll ? jobs : jobs.slice(0, 2);

  const toggleJobsVisibility = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="flex justify-center text-4xl mt-8 text-gray-500">
        {"{ "}/{" }"}
      </div>
      <div className="flex justify-center text-8xl mt-8 text-gray-500">
        {"<"}About_me{">"}
      </div>
      <p className="m-auto pt-8 max-w-[800px] text-gray-400 font-mono	">
        ...Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        explicabo, repellat maxime, debitis quaerat impedit velit deleniti
        minima rerum quis ducimus sint tempore tenetur animi harum sed? Dolore,
        porro delectus.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 mt-8">
        {visibleJobs.map((job, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center mb-4">
              <img
                src={job.logo}
                alt={`${job.company}-logo`}
                className="rounded-full w-10 h-10"
              />
              <div className="ml-4 text-gray-400 font-mono	">
                <p>{job.title}</p>
                <p>{job.company}</p>
                <p>{job.duration}</p>
              </div>
            </div>
            <ul className="text-gray-400 list-disc pl-5 font-mono	">
              {job.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {jobs.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleJobsVisibility}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
