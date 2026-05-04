import { useState } from 'react'

function Hero() {

  const [showModal, setShowModal] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden 
    bg-gradient-to-br from-sky-950 via-sky-800 to-sky-500">

      {/* Background Glow Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-[140px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300 rounded-full blur-[160px] opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-8">

          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-sky-300/30 text-sky-200 text-sm backdrop-blur-md shadow-md">
            Professional Graphic Designer
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            MAHAK DEV
            <span className="block text-cyan-300 drop-shadow-lg">
              💎 DESIGNER
            </span>
          </h1>

          <p className="text-sky-100 text-lg leading-relaxed max-w-xl">
            I am a creative Graphic Designer focused on building clean, modern, and impactful visual designs.
          </p>

          <div className="flex flex-wrap gap-5">

            {/* ✅ UPDATED BUTTON */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-cyan-400 hover:bg-cyan-300 px-8 py-4 rounded-2xl text-black cursor-pointer font-semibold transition shadow-lg shadow-cyan-400/40"
            >
              View My Achievements.
            </button>

            <button className="border border-cyan-300 hover:bg-white/10 px-8 py-4 rounded-2xl text-white font-semibold cursor-pointer transition hover:scale-105">
              <a href="#contact">Hire Me</a>
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <div className="relative bg-cyan-400 border border-cyan-200 backdrop-blur-lg p-4 rounded-[40px] shadow-2xl">

            <img
              src="/hero.jpg"
              alt="Designer"
              className="rounded-[30px] w-full max-w-md object-cover transition duration-initial hover:scale-105 cursor-pointer"
            />

          </div>

        </div>

      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">

          {/* Glass Box */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-2xl">

            <div className="bg-sky-900/40 backdrop-blur-xl rounded-3xl p-4 relative">

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-white text-xl font-extrabold cursor-pointer transition hover:scale-105 rounded-full border-2 border-white  bg-black px-3 py-2"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src="/graphics.jpg"
                className="w-[350px] md:w-[500px] rounded-2xl"
              />

              <h2 className="text-center text-white mt-4 font-bold text-lg transition duration-200 hover:scale-110 cursor-pointer">
                My Achievements Preview
              </h2>

            </div>

          </div>

        </div>
      )}

    </section>
  )
}

export default Hero