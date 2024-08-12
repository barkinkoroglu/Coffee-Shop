import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Selection from "./components/Selection";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Comment from "./components/Comment";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Selection />
      <Menu />
      <Reservation />
      <Comment />
      <Articles />
      <Gallery />
    </div>
  );
};

export default App;
