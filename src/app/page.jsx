import Image from "next/image";
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";
import Dynamic from "./components/Dynamic.jsx";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar />
      <Dynamic />
      <Footer />
    </div>
  );
}
