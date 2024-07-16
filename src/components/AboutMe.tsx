function AboutMe() {
  return (
    <div>
      <div className="flex justify-center text-4xl mt-8">
        {"{ "}/{" }"}
      </div>
      <div className="flex justify-center text-8xl mt-8">
        {"<"}About_me{">"}
      </div>
      <p className="m-auto pt-8 max-w-[800px]">
        ...Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        explicabo, repellat maxime, debitis quaerat impedit velit deleniti
        minima rerum quis ducimus sint tempore tenetur animi harum sed? Dolore,
        porro delectus.
      </p>
      <div className="grid grid-cols-2 px-10 mt-8">
        <div className="flex items-center">
          <img
            src="/images/tnet-logo.png"
            alt="tnet-logo"
            className="rounded-full w-10 h-10"
          />
          <p className="ml-4">Front-End Developer at Vendoo.ge</p>
        </div>
        <p>gexdghjmkl</p>
        <p>htghbjnmk,lj</p>
      </div>
    </div>
  );
}

export default AboutMe;
