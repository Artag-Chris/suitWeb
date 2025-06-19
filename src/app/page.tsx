
import TechStack from "./components/effects/tech-stack";
import Contact from "./components/mainpage/contact";
import Hero from "./components/mainpage/hero";
import Services from "./components/mainpage/services";
import Team from "./components/mainpage/team";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-primary-dark text-text-primary">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Team />
      <Contact/>
      <Footer />
    </div>
  )
}
