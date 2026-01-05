import BubbleContainer from '../BubbleContainer'

export default function Education() {
  const educationData = [
    {
      degree: "Honors (Marketing)",
      department: "Marketing Department",
      institution: "Nandina Sheikh Anower Hossain College",
      status: "3rd Year Running"
    },
    {
      degree: "HSC",
      department: "",
      institution: "Sahid Ziaur Rahman Degree College",
      status: "2022"
    }
  ]

  return (
    <BubbleContainer 
      className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-6 transition-colors duration-300" 
      id="education"
      bubbleCount={4}
      bubbleColors={[
        'rgba(139, 92, 246, 0.06)',
        'rgba(59, 130, 246, 0.06)',
        'rgba(16, 185, 129, 0.06)',
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">My Academic Journey</p>
        </div>
        
        <div className="max-w-3xl mx-auto relative space-y-8 pl-4 sm:pl-0">
          <div className="absolute left-[27px] sm:left-6 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-14 sm:pl-16 group">
              <div className="absolute left-[21px] sm:left-[18px] top-6 w-3.5 h-3.5 rounded-full bg-gray-900 dark:bg-white border-2 border-white dark:border-gray-900 z-10 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                  {edu.department && (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{edu.department}</p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
                </div>
                <span className="self-start md:self-center inline-block px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-full whitespace-nowrap">
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BubbleContainer>
  )
}