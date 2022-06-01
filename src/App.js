import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Steps from "./Components/Steps/Steps";
import Products from "./Components/Products/Products";
import Questions from "./Components/Questions/Questions";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="main">
        <Header />
        <About />
        <Steps />
        <Products />
        <Questions />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
