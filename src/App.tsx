import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Numbers from "./components/Numbers";

function App() {
  console.log(document.body.clientHeight);

  return (
    <>
      <div className="p-8 pl-12">
        <Numbers />
        <Header />
        <Hello />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Contacts />
      </div>
    </>
  );
}

export default App;
