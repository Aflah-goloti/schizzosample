import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "./components/HomeSlider";
import ProjectShowcase1 from "./components/ProjectShowcase1";
import ProjectShowcase2 from "./components/ProjectShowcase2";
import Footer from "./components/Footer";
import Navbar from "./components/header";
import CareerPage from "./components/Career";
import TeamExperienceSection from "./components/TeamExperienceSection";
import ProjectList from "./components/ProjectSection";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HomeSlider />
      {/* <ProjectList /> */}
      {/* <ProjectShowcase1 /> */}
      <ProjectShowcase2 />
      <CareerPage />
      <TeamExperienceSection />
      <Footer />
    </div>
  );
}