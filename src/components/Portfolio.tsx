function Portfolio() {
  return (
    <div className="mt-8">
      <div className="flex flex-col justify-center items-center">
        <p className=" text-3xl">( ! )</p>
        <p className="text-4xl mt-4">{"<Portfolio>"}</p>
        <p className="max-w-[700px] text-center mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
          laboriosam laudantium atque recusandae distinctio, est et quidem
        </p>
      </div>
      <div className="font-mono grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-10">
        <div className="w-11/12 h-[400px]">
          <a
            href="https://gba-project.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/gba.jpg"
              alt="GBA image"
              className="w-full h-full object-contain"
            />
            <p className="mt-4">Georgian Bartenders Association</p>
          </a>
        </div>
        <div className="w-11/12 h-[400px]">
          <a
            href="https://zuratours.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/tour.jpg"
              alt="GBA image"
              className="w-full h-full object-contain"
            />
            <p className="mt-4">Small travel company</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
