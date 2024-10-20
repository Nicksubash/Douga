import Image from "next/image";
import NewNavbar from "./components/navbar";
import HeroSection from "./components/hero";
export default function Home() {
  return (
    <>
    <div>
    <NewNavbar/>
    <HeroSection/>
    </div>
    </>
  );
}
