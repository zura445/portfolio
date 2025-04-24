import portfolio from "../portfolio/portfolioData.json";

function Portfolio() {
  return (
    <div className="mt-8">
      <div className="text-center">
        <p className="text-xl">( ! )</p>
        <p className="text-4xl mt-4">{`<Portfolio>`}</p>
        <p className="max-w-[700px] m-auto pt-4 font-mono">
          "Welcome to my portfolio showcasing a diverse range of web development
          projects. From dynamic websites for local businesses to innovative web
          applications, each project demonstrates my skills in front-end
          development, user experience design, and quality assurance. Explore
          below to see how I bring ideas to life through code."
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-10 px-0 mt-8">
        {portfolio.map((item, index) => (
          <div
            className="border border-gray-700 p-6 flex items-center justify-center"
            key={index}
          >
            <a href={item.url} target="blank">
              <img className="max-h-[500px]" src={item.image} alt="" />
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
