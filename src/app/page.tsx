import About from "@/components/mainpage/About"
import CTA from "@/components/mainpage/CTA"
import Hero from "@/components/mainpage/Hero"
import Services from "@/components/mainpage/Services"
import Footer from "@/components/shared/Footer"


export default function Component() {
  return (
    <div className="min-h-screen bg-white text-black">
   

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services/>

      {/* About Section */}
      <About />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer/>
    </div>
  )
}
