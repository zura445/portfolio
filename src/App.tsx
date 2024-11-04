import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  console.log(document.body.clientHeight);

  return (
    <>
      <div className="p-8 md:pl-12 pl-8">
        <Numbers />
        <Header />
        <Hello />
        <AboutMe />
        <Portfolio />
        <Education />
        <Skills />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
