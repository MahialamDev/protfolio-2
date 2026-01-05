export default function Footer() {
  const socialLinks = [
    { icon: "devicon-facebook-plain", href: "https://www.facebook.com/mahialam.rahat2/" },
    { icon: "devicon-linkedin-plain", href: "https://www.linkedin.com/in/mahialam-rahat/" },
    { icon: "devicon-twitter-original", href: "https://x.com/mahialam_rahat" }
  ]

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Md Mahi Alam</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">Full Stack Web Developer</span>
        </div>
        
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${social.icon} text-xl`}></i>
            </a>
          ))}
        </div>
        
        <div className="text-center md:text-right text-xs text-gray-500 dark:text-gray-400">
          <p>© 2023 Md Mahi Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}