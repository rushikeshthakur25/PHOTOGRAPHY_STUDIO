import About from "@/components/About";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSections from "@/components/HeroSections";
import Team from "@/components/Team";
import TestCards from "@/components/TestCards";
import Upcomingwebinar from "@/components/Upcomingwebinar";

export default function Home() {
  return (
          <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <HeroSections/>
            <FeaturedCourses/>
            <About/>
            <TestCards/>
            <Upcomingwebinar/>
            <Team/>
            <Footer/>
          </main>
    );
}
