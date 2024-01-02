<!-- Navbar.svelte -->

<script>
  import { onMount } from 'svelte';

  let activeSection = 'header';

  onMount(() => {
    const handleScroll = () => {
      const sections = ['skills', 'projects', 'experience']; // Add other section IDs here
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition + 100) {
          activeSection = section;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      activeSection = section;
    }
  };
</script>

<nav class="fixed top-0 left-0 right-0 bg-neutral-900 text-white py-4 w-full max-w-96 mx-auto mt-3 rounded-full">
  <style>
    nav ul {
      display: flex;
      justify-content: center;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    nav li {
      padding: 0.1rem 0.5rem;
    }

    nav a {
      font-size: 16px; /* Set font size */
      position: relative;
      text-decoration: none;
      color: #bbb;
      transition: color 0.3s;
      padding: 5px; /* Padding for larger clickable area */
    }

    nav a.active, nav a:hover {
      color: white;
    }

    nav a::after {
      content: '';
      position: absolute;
      width: 100%; /* Make the pseudo-element as wide as the link */
      height: 1px; /* Thickness of underline */
      background: white; /* Color of underline */
      bottom: 0; /* Position at the bottom of the link */
      left: 0;
      opacity: 0; /* Start invisible */
      transform: scale(0, 1);
      transition: transform 0.3s, opacity 0.3s; /* Transition for scaling and fading */
    }

    nav a.active::after {
      opacity: 1; /* Fully visible when active or hovered */
      transform: scale(1, 1); /* Scale underline to full width */
    }
  </style>

  <ul>
    <li><a href="#" on:click|preventDefault={() => scrollToSection('header')} class:active={activeSection === 'header'}>About</a></li>
    <li><a href="#" on:click|preventDefault={() => scrollToSection('skills')} class:active={activeSection === 'skills'}>Skills</a></li>
    <li><a href="#" on:click|preventDefault={() => scrollToSection('projects')} class:active={activeSection === 'projects'}>Projects</a></li>
    <li><a href="#" on:click|preventDefault={() => scrollToSection('experience')} class:active={activeSection === 'experience'}>Experience</a></li>
  </ul>
</nav>
