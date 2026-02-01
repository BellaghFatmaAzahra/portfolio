import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Certifications from './components/Certifications.jsx'
import Education from './components/Education.jsx'
import Languages from './components/Languages.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        
        {/* Overlay bleu semi-transparent */}
        <div className="absolute inset-0 bg-blue-800/20 dark:bg-blue-900/30 pointer-events-none z-0"></div>

        {/* Contenu principal au-dessus de l'overlay */}
        <div className="relative z-10">
          <Header />

          {/* Container global responsive */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Languages />

            {/* Section Expérience (vide pour l’instant) */}
            <section id="experience" className="py-16"></section>

            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App
