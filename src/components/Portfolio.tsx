import portfolioData from "../../src/portfolioData.json";

function Portfolio() {
  return (
    <div className="mt-8">
      {portfolioData.map((portfolio, index) => (
        <div key={index} className="">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl">( ! )</p>
            <p className="text-4xl mt-4">{"<Portfolio>"}</p>
            <p className="max-w-[700px] text-center mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              laboriosam laudantium atque recusandae distinctio, est et quidem
            </p>
          </div>
          <div className="font-mono grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-10">
            {portfolio.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="w-[95%] border">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={`${project.name} image`}
                    style={{ height: project.height }}
                    className="w-full object-contain"
                  />
                  <p className="mt-4">{project.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
