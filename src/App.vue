<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const downloadResume = () => {
  // Replace with your actual resume PDF path
  const resumeUrl = "/Tushar Ghosh Joy_resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Tushar_Ghosh_Joy_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div class="min-h-screen bg-base-200" data-theme="portfolio">
    <!-- Navigation -->
    <div class="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <label
            tabindex="0"
            class="btn btn-ghost lg:hidden"
            @click="toggleMobileMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            v-show="isMobileMenuOpen"
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#summary" @click="isMobileMenuOpen = false">Summary</a>
            </li>
            <li>
              <a href="#education" @click="isMobileMenuOpen = false"
                >Education</a
              >
            </li>
            <li>
              <a href="#experience" @click="isMobileMenuOpen = false"
                >Experience</a
              >
            </li>
            <li>
              <a href="#projects" @click="isMobileMenuOpen = false">Projects</a>
            </li>
            <li>
              <a href="#skills" @click="isMobileMenuOpen = false">Skills</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Tushar Ghosh Joy</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#summary">Summary</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero bg-base-100 py-12">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Tushar Ghosh Joy</h1>
          <p class="py-6 text-xl">Full Stack Software Engineer</p>
          <div class="flex justify-center gap-4">
            <a
              href="mailto:tusharghoshjoy@gmail.com"
              class="btn btn-ghost btn-sm"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              Email
            </a>
            <a href="tel:+8801329521150" class="btn btn-ghost btn-sm">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              Phone
            </a>
            <a
              href="https://linkedin.com/in/tusharghoshjoy"
              target="_blank"
              class="btn btn-ghost btn-sm"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/TusharJoy"
              target="_blank"
              class="btn btn-ghost btn-sm"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
          <button @click="downloadResume" class="btn btn-primary mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </div>

    <!-- Summary Section -->
    <section id="summary" class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">
          Professional Summary
        </h2>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <p class="mb-6">
              Experienced Full Stack Software Engineer with over 6 years of
              expertise in building scalable web applications and distributed
              systems. Specialized in modern JavaScript frameworks with a strong
              focus on Vue.js ecosystem and backend development using Node.js
              and Python.
            </p>
            <p class="mb-6">
              Proven track record in leading development teams, architecting
              solutions, and implementing best practices in software
              development. Demonstrated success in delivering high-impact
              projects for telecom industry and enterprise clients, with
              particular strength in:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul class="space-y-4">
                <li class="flex items-start gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Full-stack application development with Vue.js, Node.js,
                    and Python</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span>RESTful API design and implementation</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span>Cloud infrastructure and DevOps practices</span>
                </li>
              </ul>
              <ul class="space-y-4">
                <li class="flex items-start gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span>Team leadership and technical mentorship</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span>Automation and system optimization</span>
                </li>
                <li class="flex items-start gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span>Database design and ETL processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="bg-base-100 py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Education</h2>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">B.Sc in Computer Science and Engineering</h3>
            <p class="text-lg">Khulna University of Engineering & Technology</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <div class="badge badge-ghost">Khulna, Bangladesh</div>
              <div class="badge badge-ghost">February 2018</div>
              <div class="badge badge-primary">CGPA: 3.64</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div class="space-y-6">
          <!-- BITSTRAPPED -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 class="card-title">
                    Full Stack Software Engineer at BITSTRAPPED
                  </h3>
                  <p class="text-base-content/70">Toronto, ON, Remote</p>
                </div>
                <div class="badge badge-ghost">March 2022 - Present</div>
              </div>
              <ul class="space-y-3 mt-4">
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Conduct effective requirements gathering in client
                    meetings, ensuring clear communication and anticipation of
                    client needs</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Architect applications with sound engineering decisions,
                    employing VueJs(Nuxt) for frontend, NodeJS for REST APIs,
                    and Python for backend data services</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Foster a collaborative environment by leading code reviews,
                    adhering to GitFlow branching strategies, and effectively
                    communicating with the team</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- CEFALO AS -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 class="card-title">Software Engineer at CEFALO</h3>
                  <p class="text-base-content/70">Dhaka, Bangladesh</p>
                </div>
                <div class="badge badge-ghost">Jan 2020 - Feb 2022</div>
              </div>
              <ul class="space-y-3 mt-4">
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Successfully collaborated with a dynamic Norwegian team on
                    the development of a large-scale and highly scalable
                    product</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Led the development of RESTful APIs, skillfully extending
                    features using NodeJS, Express, and PostgreSQL</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Played a key role in improving features and resolving bugs
                    on the Single Page Application (SPA) frontend using VueJS
                    and Vuex</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- SIGMA SOLUTIONS -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 class="card-title">
                    Software Engineer at SIGMA SOLUTIONS
                  </h3>
                  <p class="text-base-content/70">Dhaka, Bangladesh</p>
                </div>
                <div class="badge badge-ghost">April 2018 - 2020</div>
              </div>
              <ul class="space-y-3 mt-4">
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Spearheaded the development of automation modules for
                    operations and maintenance of critical systems</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Developed and maintained internal Laravel packages for
                    system optimization</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Implemented innovative solutions including interactive and
                    notifier bots</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Built an omnichannel customer support system with real-time
                    ticketing</span
                  >
                </li>
                <li class="flex gap-2">
                  <div class="badge badge-primary badge-sm mt-1"></div>
                  <span
                    >Developed an ETL system for data accumulation into AWS
                    Redshift</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-base-100 py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- VUE3-DRAG-DROP -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">VUE3-DRAG-DROP</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-primary">Vue3</div>
                <div class="badge badge-primary">JavaScript</div>
              </div>
              <p class="mt-4">
                A drag and drop NPM package for data transferring via drag and
                drop into UI elements. Achieving over 100+ weekly downloads,
                this package provides an intuitive interface for handling drag
                and drop operations in Vue 3 applications.
              </p>
              <div class="card-actions justify-end mt-4">
                <a
                  href="https://github.com/TusharJoy/vue3-drag-drop"
                  target="_blank"
                  class="btn btn-ghost btn-sm"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- MOVIE APP -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">MOVIE APP</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-primary">Vue.js</div>
                <div class="badge badge-primary">themoviedb API</div>
                <div class="badge badge-primary">NPM</div>
              </div>
              <p class="mt-4">
                A web application that allows users to discover information
                about movies, including details like title, release date, cast,
                and more. Utilizes the Free Movie Database API for comprehensive
                movie data.
              </p>
              <div class="card-actions justify-end mt-4">
                <a
                  href="https://github.com/TusharJoy/movie-app"
                  target="_blank"
                  class="btn btn-ghost btn-sm"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <!-- FOOD DELIVERY APP -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">FOOD DELIVERY APP</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-primary">Laravel</div>
                <div class="badge badge-primary">Vue.js</div>
                <div class="badge badge-primary">MySQL</div>
                <div class="badge badge-primary">Vuex</div>
              </div>
              <p class="mt-4">
                A comprehensive frozen food subscription delivery system
                featuring subscription model integration with Authorize.Net.
                Managed complete development lifecycle including server
                deployment and maintenance.
              </p>
              <div class="card-actions justify-end mt-4"></div>
            </div>
          </div>

          <!-- DNA SEQUENCE VISUALIZATION -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">DNA-SEQUENCE-VISUALIZATION</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-primary">D3.js</div>
              </div>
              <p class="mt-4">
                An interactive tool using D3.js to visually analyze DNA
                sequences, emphasizing patterns associated with specific cancer
                types. Provides researchers with insightful data visualization
                capabilities for cancer detection.
              </p>
              <div class="card-actions justify-end mt-4">
                <a
                  href="https://github.com/TusharJoy/dna-sequence-visualization"
                  target="_blank"
                  class="btn btn-ghost btn-sm"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Languages</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-lg">PHP</div>
                <div class="badge badge-lg">Node.js</div>
                <div class="badge badge-lg">JavaScript</div>
                <div class="badge badge-lg">HTML</div>
                <div class="badge badge-lg">CSS</div>
                <div class="badge badge-lg">SQL</div>
                <div class="badge badge-lg">C++</div>
                <div class="badge badge-lg">GoLang</div>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Frameworks</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-lg">Laravel</div>
                <div class="badge badge-lg">Express.js</div>
                <div class="badge badge-lg">Vue.js</div>
                <div class="badge badge-lg">Nuxt</div>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Tools</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-lg">Git</div>
                <div class="badge badge-lg">Docker</div>
                <div class="badge badge-lg">Redis</div>
                <div class="badge badge-lg">IntelliJ</div>
                <div class="badge badge-lg">Vim</div>
                <div class="badge badge-lg">ClickUp</div>
                <div class="badge badge-lg">Slack</div>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">Cloud & DevOps</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge badge-lg">AWS</div>
                <div class="badge badge-lg">GCP</div>
                <div class="badge badge-lg">Azure</div>
                <div class="badge badge-lg">Docker</div>
                <div class="badge badge-lg">LaTeX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="footer footer-center p-10 bg-base-200 text-base-content rounded"
    >
      <div>
        <p>© 2024 Tushar Ghosh Joy. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
