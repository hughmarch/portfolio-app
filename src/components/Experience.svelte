<script>
  const experiences = [
    {
      dates: "September 2021 - June 2025",
      company: "University of Washington",
      position: "B.S. Computer Science",
      description: "Undergraduate student. GPA: 3.83"
    },
    {
      dates: "September 2021 - December 2023",
      company: "Posner Research Group",
      position: "Undergraduate Research Assistant",
      description: "Joined an engineering research lab led by Dr. Jonathan Posner developing software for low-cost diagnostic tests."
    },
    {
      dates: "January 2023 - December 2023",
      company: "Paul G. Allen School of Computer Science & Engineering",
      position: "CSE12x Teaching Assistant",
      description: "Taught sections of 20 students twice a week, covering topics such as algorithms, recursion, backtracking, trees, and object-oriented programming. CSE121 (23wi, 23sp) CSE123 (23au)"
    },
    {
      dates: "June 2023 - September 2023",
      company: "Xemelgo",
      position: "Software Engineer Intern - Frontend Team",
      description: "Xemelgo is an Industry 4.0 startup: the Amazon Go for factories. Developed web features in React used directly by customers."
    },
    {
      dates: "October 2023 - Present",
      company: "Xemelgo",
      position: "Software Engineer Intern - IoT Backend Team",
      description: "Optimized and maintained sensor ingestion pipeline. Designed developer APIs and end-to-end tests."
    }
  ]
</script>

<section class="pt-20 px-4 w-full max-w-[800px] mx-auto" id="experience">
  <h2 class="text-4xl font-bold mb-10">Experience</h2>
  <!-- Timeline or sections displaying your experience -->

  <div class="text-left">
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      {#each experiences as experience, index}
        <li class="{index < experiences.length - 1 ? "mb-10" : ""} ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 font-normal leading-none text-gray-400 dark:text-gray-500">{experience.dates}</time>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{experience.company}</h3>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400">{experience.position}</p>
            <p class="text-lg font-light">{experience.description}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>
