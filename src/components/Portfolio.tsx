function Portfolio() {
  return (
    <div className="mt-8">
      <div className="text-center">
        <p className="text-xl">( ! )</p>
        <p className="text-4xl mt-4">{`<Portfolio>`}</p>
        <p className="max-w-[700px] m-auto pt-4 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel,
          autem a eum quas sit nobis voluptatum voluptates doloribus porro
          veniam eveniet, rem reprehenderit optio quidem dolorem minima odit
          illum.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-8">
        <div className="border border-gray-700 p-6">
          <a href="https://gba-project.vercel.app/" target="blank">
            <img src="/images/gba.jpg" alt="GBA image" />
            <div className="mt-2">Georgian Bartenders Association </div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex gap-4">
          <a href="https://zuratours.vercel.app/" target="blank">
            <img src="/images/tour.jpg" alt="tours image" />
            <div className="mt-2">zura tours</div>
          </a>
          <a href="https://social-notifications-ui.vercel.app/" target="blank">
            <img src="/images/notifications.jpg" alt="notifications image" />
            <div className="mt-2">Zura tours</div>
          </a>
        </div>
        <div className="border border-gray-700 p-6 flex gap-4">
          <a href="https://nexus-project-one.vercel.app/" target="blank">
            <img src="/images/nexus.jpg" alt="tours image" />
            <div className="mt-2">Nexus project</div>
          </a>
          <a href="https://rate-design.vercel.app/" target="blank">
            <img src="/images/rate.jpg" alt="notifications image" />
            <div className="mt-2">zura tours</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
