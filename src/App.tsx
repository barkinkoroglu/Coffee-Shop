import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Selection from "./components/Selection";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Selection />
      <Menu />
    </div>
  );
};

export default App;
