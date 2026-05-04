import { FaPaintBrush, FaImage, FaThLarge, FaShareAlt, FaIdCard } from 'react-icons/fa'

const services = [
  {
    title: 'Logo Design',
    desc: 'Unique & creative logos for your brand',
    icon: <FaPaintBrush />
  },
  {
    title: 'Poster Design',
    desc: 'Eye-catching posters for any purpose',
    icon: <FaImage />
  },
  {
    title: 'Banner Design',
    desc: 'Web & print banners that stand out',
    icon: <FaThLarge />
  },
  {
    title: 'Social Media Design',
    desc: 'Creative posts for all social platforms',
    icon: <FaShareAlt />
  },
  {
    title: 'Brand Identity',
    desc: 'Complete brand identity solutions',
    icon: <FaIdCard />
  }
]

function Services() {
  return (
    <section  id="services" className="relative py-24 px-6 md:px-10 overflow-hidden
    bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100">

      {/* Soft Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-[160px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-900 mb-14">
          Services I Offer
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/40 backdrop-blur-lg hover:border-4 hover:border-sky-700 p-6 rounded-2xl text-center 
              shadow-lg shadow-sky-200 hover:scale-110 hover:bg-white/40 transition duration-300"
            >

              {/* Icon */}
              <div className="text-3xl text-sky-600 flex justify-center mb-3 hover:scale-110 group-hover:text-cyan-600 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-sky-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-sky-700 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services