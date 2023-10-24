
import Contactus from "./components/Contactus";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Feedback />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
