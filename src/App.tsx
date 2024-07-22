import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  console.log(document.body.clientHeight);

  return (
    <>
      <div className="p-8 pl-12">
        <div className="flex flex-col absolute left-2 border-r-2 border-gray-700 pr-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <Header />
        <Hello />
        <AboutMe />
        <Portfolio />
        <Skills />
      </div>
    </>
  );
}

export default App;
