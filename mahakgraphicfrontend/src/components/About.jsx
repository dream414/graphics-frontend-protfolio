import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-10 overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100">

      {/* BACKGROUND */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-sky-300 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGE SIDE */}
        <div className="flex justify-center">

          <div className="relative w-[400px] h-[460px]">

            {/* 🔥 ONLY BORDER ANIMATION */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-900 via-sky-500 to-cyan-400"
            />

            {/* INNER WHITE GAP (BORDER THICKNESS CONTROL) */}
            <div className="absolute inset-[5px] rounded-[28px] z-10" />

            {/* IMAGE (STATIC) */}
            <div className="relative z-20 w-full h-full rounded-[28px] overflow-hidden">
              <img
                src="/about.png"
                alt="Graphic Designer"
                className="w-full h-full object-contain transition duration-initial hover:scale-110 cursor-pointer p-6"
              />
            </div>

          </div>

        </div>

        {/* CONTENT SIDE */}
        <div className="space-y-6">

          <div className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-sky-200 text-sky-800 text-sm shadow-sm">
            ✦ Professional Graphic Designer
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 leading-tight">
            Crafting Visual Experiences <br />
            That <span className="text-sky-600">Inspire & Convert</span>
          </h2>

          <div className="inline-block px-5 py-2 rounded-xl transition-all hover:scale-125 duration-300 cursor-pointer bg-gradient-to-r from-blue-900 via-sky-600 to-cyan-500 text-white font-semibold shadow-md">
            I'm MAHAK DEV 💎 DESIGNER
          </div>

          <div className="space-y-3 text-sky-700 leading-8 text-lg">
            <p>
              I am a passionate Graphic Designer with over 4 years of experience
              creating modern, clean, and impactful designs that help brands
              communicate their message clearly.
            </p>

            <p>
              My focus is on combining creativity with strategy — ensuring every
              design not only looks beautiful but also delivers real results.
            </p>
          </div>

          {/* SKILLS */}
          <div className="space-y-5 pt-4">
            {[
              { name: "Adobe Photoshop", value: 95 },
              { name: "Adobe Illustrator", value: 90 },
              { name: "InDesign", value: 85 },
              { name: "Canva", value: 99 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-semibold text-sky-800 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="w-full h-2 bg-white/60 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-900 via-sky-600 to-cyan-500"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;