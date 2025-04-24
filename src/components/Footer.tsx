function Footer() {
  return (
    <div className="flex justify-center items-center mt-8">
      <a
        href="https://www.linkedin.com/in/zura-tetrashvili-728b5b203/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/linkedin.png"
          alt="LinkedIn"
          className="w-10 rounded"
        />
      </a>
      <a
        href="https://github.com/zura445"
        target="_blank"
        rel="noopener noreferrer"
        title="title"
      >
        <img
          src="/images/github.png"
          alt=""
          className="w-10 object-contain ml-10 rounded"
        />
      </a>
      <a href="tel:+995 597 000 540" className="ml-10">
        TEL: 597-000-540
      </a>
    </div>
  );
}

export default Footer;
