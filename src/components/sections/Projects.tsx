import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Green Nest: Eco-Friendly Marketplace",
      description: "A sustainable e-commerce platform connecting eco-conscious consumers with environmentally friendly products. Features product filtering, secure checkout, and carbon footprint tracking for each purchase.",
      image: "/greenNest.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express.js"],
      liveUrl: "https://green-nest24.netlify.app/",
      githubUrl: "https://github.com/MahialamDev/GreenNest"
    },
    {
      title: "PayBill Online: Digital Payment Solution",
      description: "A comprehensive bill payment platform that allows users to pay utilities, mobile bills, and other services online. Features secure payment processing, transaction history, and automated reminders.",
      image: "/payBills.png",
      technologies: ["Vue.js", "Firebase", "Payment Gateway", "PWA", "Vuetify", "Cloud Functions"],
      liveUrl: "https://pay-bill-online.netlify.app/",
      githubUrl: "https://github.com/MahialamDev/Utility-Bill-Management-System-Client"
    },
    {
      title: "StyleDecor: Interior Design Platform",
      description: "A modern interior design showcase platform featuring room visualization, design inspiration gallery, and consultation booking system. Built with responsive design and smooth animations.",
      image: "/styleDecor.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design", "Firebase Hosting"],
      liveUrl: "https://styledecor-2025.web.app/",
      githubUrl: "https://github.com/MahialamDev/StyleDecor-client"
    }
  ]

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">Recent Projects</p>
        </div>
        
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 md:grid md:grid-cols-2 hover:shadow-xl transition-all duration-300">
              <div className="h-64 md:h-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-tr from-gray-900/20 to-transparent z-10"></div>
                <Image
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  src={project.image}
                  width={600}
                  height={400}
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}