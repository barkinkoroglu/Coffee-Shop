import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
