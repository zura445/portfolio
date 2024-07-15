function Hello() {
  return (
    <div className="flex flex-col text-center mt-20">
      <p className="text-gray-400">// HI, I'M ZURA TETRASHVILI ...</p>
      <h1 className="mt-4">{`{" Front-End Developer "}`}</h1>
      <div className="w-full h-[700px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-bottom mt-8"
          src="/images/code.jpg"
          alt="logo image"
        />
      </div>
    </div>
  );
}

export default Hello;
