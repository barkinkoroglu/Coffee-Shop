import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Header />
      <About />
      <Services />
    </div>
  );
};

export default App;
