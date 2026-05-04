function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Client One",
      role: "Business Owner",
      text: "Amazing design work and very professional. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Client Two",
      role: "Startup Founder",
      text: "Very creative and modern design approach. Loved it!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      id: 3,
      name: "Client Three",
      role: "Brand Manager",
      text: "Delivered high quality work on time. Excellent designer!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    }
  ]

  return (
    <section  id="test" className="relative py-24 px-6 md:px-10 overflow-hidden
    bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300 rounded-full blur-[150px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-[160px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-900 mb-12">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/40 backdrop-blur-lg 
              rounded-2xl p-6 shadow-lg hover:scale-105 border-sky-700  border-4 cursor-pointer transition"
            >

              {/* Stars */}
              <div className="flex text-yellow-400 text-lg mb-3">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              {/* Text */}
              <p className="text-sky-800 leading-7 mb-6">
                "{item.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-sky-300"
                />

                <div>
                  <h4 className="text-sky-900 font-bold">
                    {item.name}
                  </h4>
                  <p className="text-sky-600 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials