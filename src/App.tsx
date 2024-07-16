import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <div className="p-8">
        <Header />
        <Hello />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
