import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { HomeIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="bg-[#122223] text-[#da9e63] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#da9e63]">
      <Head>
        <title>Atayev Portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>


      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer mt-10">
          <div className="flex justify-start ml-5 filter grayscale hover:grayscale-0">
            <HomeIcon
              className="h-10 w-10 rounded-full cursor-pointer animate-pulse "
            />
          </div>
        </footer>      
      </Link>
    </div>
  );
}
