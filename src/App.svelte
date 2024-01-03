<script>
  import TailwindCss from "./lib/TailwindCSS.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Header from "./components/Header.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import Experience from "./components/Experience.svelte";
</script>

<TailwindCss />

<main>
  <Navbar />
  <Header />
  <Projects />
  <Skills />
  <Experience />
</main>
