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
        <div className="border border-gray-700 p-6 flex items-center justify-center">
          <a href="https://gbabar.ge/" target="blank">
            <img
              src="/images/gba.jpg"
              alt="GBA image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Georgian Bartenders Association </div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://zuratours.vercel.app/" target="blank">
            <img
              src="/images/tour.jpg"
              alt="tours image"
              className="max-h-[500px]"
            />
            <div className="mt-2">zura tours</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://social-notifications-ui.vercel.app/" target="blank">
            <img
              src="/images/notifications.jpg"
              alt="notifications image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Notifications</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://nexus-project-one.vercel.app/" target="blank">
            <img
              src="/images/nexus.jpg"
              alt="tours image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Nexus project</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://rate-design.vercel.app/" target="blank">
            <img
              src="/images/rate.jpg"
              alt="notifications image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Rate-design</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://music-page-orpin.vercel.app/" target="blank">
            <img
              src="/images/music-page.jpg"
              alt="notifications image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Music page</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://accordion2-ashy.vercel.app/" target="blank">
            <img
              src="/images/FAQ.jpg"
              alt="FAQ image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Accordion</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex items-center justify-center gap-8">
          <a href="https://input-control.vercel.app/" target="blank">
            <img
              src="/images/input-control.jpg"
              alt="FAQ image"
              className="max-h-[500px]"
            />
            <div className="mt-2">Input control</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
