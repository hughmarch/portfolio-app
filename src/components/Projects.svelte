<script>
  const projects = [
    {
      title: "HIV Viral Load Monitoring Mobile App",
      skills: [
        "Java",
        "Android Studio",
        "CameraX",
        "Python",
        "Chaquopy",
        "OpenCV",
      ],
      description:
        "HIV viral load testing typically requires >$50,000 of lab equipment and trained personnel. With this app, it can be done on a smartphone.",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9202034/",
      image: "/hiv-app.png",
    },
    {
      title: "DubMaps",
      skills: ["React", "Google Cloud Platform", "Google Maps API", "Firebase"],
      description:
        "DubMaps finds wheelchair-accessible routes between UW campus buildings. Won Best Use of Google Cloud from over 100 hackathon teams.",
      link: "https://devpost.com/software/dubmaps-bdn3sh",
      image: "/dubmaps.jpg",
    },
    {
      title: "Hardl",
      skills: ["React", "TypeScript"],
      description:
        "A more challenging Wordle spinoff: you only know how many yellow and green letters there are.",
      link: "https://hardl.net",
      image: "/hardl.png",
    },
    {
      title: "Pantrio",
      skills: ["React", "SQL", "Python", "Supabase"],
      description:
        "Pantrio combines you and your friends' pantries to find recipes to make together! Submitted to TreeHacks 2023",
      link: "https://devpost.com/software/pantrio",
      image: "/pantrio.png",
    },
    {
      title: "Nucleation Site Analysis for HIV Viral Load Monitoring",
      skills: ["Python", "OpenCV", "Pandas", "Matplotlib", "Numpy"],
      description:
        "A deep-dive into nucleation site analysis to more accurately measure HIV viral load.",
      link: "https://hughmarch-ansa-cv-streamlit-app-hqace0.streamlit.app",
      image: "/ansa.png",
    },
    {
      title: "Machine Learning for Quantifying HIV Viral Load",
      skills: [
        "Python",
        "OpenCV",
        "scikit-image",
        "scikit-learn",
        "Matplotlib",
        "Numpy",
      ],
      description:
        "Using machine learning to increase the quantifiable range of HIV viral load severities by 30x.",
      link: "https://colab.research.google.com/drive/1x5IYdi3CRbS3qEQpiIZJ0Q8eccNKYDqw?usp=sharing",
      image: "/ml-ansa.png",
    },
  ];
</script>

<section class="pt-20 px-4" id="projects">
  <h2 class="text-4xl font-bold mb-10">Projects</h2>
  <!-- Grid container for cards -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[2rem] gap-y-[4rem] justify-items-center"
  >
    {#each projects as project}
      <a
        href={project.link}
        class="max-w-sm bg-white rounded-3xl dark:bg-neutral-800 border border-neutral-600 cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:border-neutral-500 hover:bg-neutral-600"
      >
        <img
          class="rounded-t-3xl aspect-[3/2] object-cover"
          src={project.image}
          alt={project.image}
        />
        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {project.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</section>
