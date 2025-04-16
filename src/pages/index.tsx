import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Nuraga Yusifli | Fullstack Developer</title>
        <meta
          name="description"
          content="Портфолио Nuraga Yusifli — опытного fullstack разработчика с фокусом на React, Next.js, TypeScript и современный UI."
        />
        <meta
          name="keywords"
          content="Nuraga Yusifli, fullstack developer, React, Next.js, TypeScript, portfolio"
        />
        <meta name="author" content="Nuraga Yusifli" />

        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nuraga Yusifli | Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Портфолио разработчика: React, Next.js, Node.js, TypeScript, SCSS. Современные веб-приложения и UI/UX дизайн."
        />
        <meta property="og:url" content="https://nuraga-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nuraga-portfolio.vercel.app/foto.jpeg"
        />
        <meta
          name="twitter:image"
          content="https://nuraga-portfolio.vercel.app/foto.jpeg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nuraga Yusifli | Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Портфолио разработчика: React, Next.js, Node.js, TypeScript, SCSS. Современные веб-приложения и UI/UX дизайн."
        />
        <meta
          property="og:image"
          content="https://nuraga-portfolio.vercel.app/foto.jpeg"
        />
        <meta
          name="twitter:image"
          content="https://nuraga-portfolio.vercel.app/foto.jpeg"
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>

      <footer>
        <Contact />
      </footer>

      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </div>
  );
}
