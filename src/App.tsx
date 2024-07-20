import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Portfolio from "./components/Portfolio";

function App() {
  console.log(document.body.clientHeight);

  return (
    <>
      <div className="p-8">
        <div className="flex flex-col absolute left-2 ">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <Header />
        <Hello />
        <AboutMe />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
