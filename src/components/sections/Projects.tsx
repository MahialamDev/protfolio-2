import Image from 'next/image'
import BubbleContainer from '../BubbleContainer'

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
    <BubbleContainer 
      className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-300" 
      id="projects"
      bubbleCount={5}
      bubbleColors={[
        'rgba(59, 130, 246, 0.06)',
        'rgba(139, 92, 246, 0.06)',
        'rgba(236, 72, 153, 0.06)',
        'rgba(245, 158, 11, 0.06)',
      ]}
    >
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
                    <i className="devicon-github-original"></i>
                    GitHub
                  </a>
                  <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <span className="material-icons text-sm">open_in_new</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BubbleContainer>
  )
}