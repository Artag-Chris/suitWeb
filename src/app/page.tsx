import { Contact } from "lucide-react";
import TechStack from "./components/effects/tech-stack";
import Hero from "./components/mainpage/hero";
import Services from "./components/mainpage/services";
import Team from "./components/mainpage/team";
import Footer from "./components/shared/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-primary-dark text-text-primary">
      <Hero />
      <TechStack />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
