<script>
  import { fade } from "svelte/transition";

  const allSkills = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "Java",
          description: "My journey with Java started with coursework at UW, from introduction to programming to databases and building distributed systems. Using Java and Android Studio, I've also built an app that monitors HIV viral load. Additionally, as a CSE12x Teaching Assistant, I taught sections and helped students 1-on-1 with Java programming assignments during office hours.",
        },
        {
          name: "Python",
          description: "Python has been my go-to language as an undergraduate research assistant at the Posner Research Group, where I focused on processing experimental data and crafting computer vision and machine learning algorithms. My Python skills were instrumental in developing a mobile app for HIV viral load monitoring, and in enhancing a machine learning algorithm to boost HIV viral load quantification's dynamic range by 30x.",
        },
        {
          name: "JavaScript",
          description: "My experience with JavaScript and TypeScript spans personal projects, hackathons, and internships. Some projects I've built using these languages include Hardl, DubMaps, and Pantrio. With these languages, I've built front-end web components as well as back-end serverless infrastructure.",
        },
        {
          name: "TypeScript",
          description: "My experience with JavaScript and TypeScript spans personal projects, hackathons, and internships. Some projects I've built using these languages include Hardl, DubMaps, and Pantrio. With these languages, I've built front-end web components as well as back-end serverless infrastructure.",
        },
        {
          name: "C",
          description: "C programming has been central to my systems-level projects, including a dynamic memory allocator, filesystem indexer, and image processing pipelines for computer vision algorithms.",
        },
        {
          name: "C++",
          description: "Using C++, I built a file system web server utilizing Sockets.",
        },
        {
          name: "Go",
          description: "With Go, I built a scalable, microservice-based restaurant review service utilizing gRPC and protocol buffers. I incorporated systems design concepts including caching and sharding, and measured their effect on performance at different loads.",
        },
        {
          name: "SQL",
          description: "I've used SQL in personal projects and hackathons. I've built a flights reservation service using Microsoft SQL Server, and Pantrio's backend with Supabase and PostgreSQL.",
        },
      ],
    },
    {
      category: "Tools/Frameworks/Methodologies",
      skills: [
        {
          name: "React",
          description:
            "My first experience with React was making a Wordle clone called Hardl. Since then, I have used React in hackathon projects and during my internship at Xemelgo, where I worked on front-end web development.",
        },
        {
          name: "Amazon Web Services (AWS)",
          description:
            "I've worked with AWS as an engineer at Xemelgo, where I developed APIs for and optimized their sensor data ingestion pipeline. More specifically, I have experience with AWS Lambda, AWS IoT, step functions, and database services like DynamoDB and Amazon Neptune.",
        },
        {
          name: "Jest",
          description:
            "I've worked with Jest, a JavaScript testing library as an engineer at Xemelgo, writing front-end unit tests as well as back-end unit, acceptance, and end-to-end tests.",
        },
        {
          name: "REST APIs",
          description: "Supporting the back-end infrastructure for Xemelgo's sensor ingestion pipeline, I followed RESTful principles in building and designing APIs for testing and maintainence.",
        },
        {
          name: "Android Application Development",
          description: "I've built an android app to monitor HIV viral load, as well as an app which identifies flowers using the phone camera. I have experience using the Android Studio and Kivy frameworks.",
        },
        {
          name: "Git",
          description: "I use Git for personal projects, hackathons, and during my internship at Xemelgo.",
        },
        {
          name: "Agile Software Development",
          description: "At Xemelgo, I followed Agile Methodologies for software development.",
        },
        {
          name: "OpenCV",
          description: "My experience with OpenCV primarily comes from working as an undergraduate research assistant in the Posner Research Group. I used OpenCV to build computer vision and image processing pipelines.",
        },
        {
          name: "Numpy",
          description: "My experience with Numpy primarily comes from working as an undergraduate research assistant in the Posner Research Group. I used Numpy to help process multi-dimensional data.",
        },
        {
          name: "Pandas",
          description: "My experience with Pandas primarily comes from working as an undergraduate research assistant in the Posner Research Group. I used Pandas to organize complex experimental data.",
        },
        {
          name: "Kubernetes",
          description: "I used Kubernetes to orchestrate a scalable, microservice-based restaurant review service built in Go. Kubernetes was particularly useful in incorporating systems design concepts including caching and sharding.",
        },
      ],
    },
  ];
  let selectedSkill = {
    name: "",
    description: "",
  };

  let description = "Select a skill to see how I've worked with it!";

  const onClick = (skill) => {
    description = ""; // Fade out the current description
    setTimeout(() => {
      selectedSkill = skill;
      description = skill.description; // Fade in the new description
    }, 300); // timeout duration should match fade out duration
  };
</script>

<section
  class="py-10 px-4 text-center flex flex-col items-center w-full"
  id="skills"
>
  <h1 class="text-4xl font-bold mb-10">Skills</h1>
  <div class="w-full md:flex">
    <div class="flex-grow flex flex-col items-left px-4 w-full md:w-1/3">
      <!-- Skills go here -->
      {#each allSkills as category}
        <h2 class="text-left text-xl font-bold mb-2">
          {category.category}
        </h2>
        <div class="flex flex-wrap justify-start mb-5">
          {#each category.skills as skill}
            <button
              class="bg-gray-700 p-2 text-white inline-flex items-center space-x-2 rounded hover:border-none border-none transition-colors duration-300 mr-2 mb-2 {skill.name ===
              selectedSkill.name
                ? 'bg-gray-400'
                : 'hover:bg-gray-500'}"
              on:click={() => onClick(skill)}
            >
              <p>{skill.name}</p>
            </button>
          {/each}
        </div>
      {/each}
    </div>

    <div
      class="border-r-2 border-gray-400 h-auto my-5 invisible md:visible"
    ></div>

    <div
      class="border-t-2 border-gray-400 w-auto my-5 visible md:invisible"
    ></div>

    <div class="flex flex-row flex-grow px-10 w-full md:w-1/3 items-center">
      <!-- Description of selected skill goes here -->
      {#if description}
        <p
          class="text-left font-light"
          in:fade={{ duration: 300 }}
          out:fade={{ duration: 300 }}
        >
          {description}
        </p>
      {/if}
    </div>
  </div>
</section>
