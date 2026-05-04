import { useState } from "react"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa"

function Contact() {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    alert("Message Sent!")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }


  const borderStyle =
    "border-2 border-sky-900 transition-all duration-300 hover:scale-105"

  const cardStyle =
    "bg-white/40 backdrop-blur-lg rounded-2xl p-6 border-2 border-sky-900 transition-all duration-300 hover:scale-105 cursor-pointer"

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100"
    >
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-900">
          Contact Us
        </h2>
        <p className="text-sky-700 mt-3">
          Feel free to connect anytime
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT FORM */}
        <div className=" bg-gradient-to-b from-sky-700 via-sky-500 to-sky-300 rounded-2xl p-8 shadow-lg flex flex-col justify-center border-4 border-sky-900">

          <form  onSubmit={handleSubmit} className="space-y-5">

            <input
               name="name"
        value={formData.name}
        onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-4 rounded-xl bg-white/60 outline-none cursor-pointer ${borderStyle}`}
            />

            <input
                  name="email"
        value={formData.email}
        onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-4 rounded-xl bg-white/60 outline-none cursor-pointer ${borderStyle}`}
            />

            <input
             name="subject"
        value={formData.subject}
        onChange={handleChange}
              placeholder="Subject"
              className={`w-full p-4 rounded-xl bg-white/60 outline-none cursor-pointer ${borderStyle}`}
            />

            <textarea
              rows="6"
               name="message"
        value={formData.message}
        onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-4 rounded-xl bg-white/60 outline-none cursor-pointer ${borderStyle}`}
            />

            <button
              type="submit"
              className="w-full bg-sky-800 text-white font-semibold py-3 rounded-xl border-2 border-sky-900 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 flex flex-col justify-center">

          {/* INFO CARD */}
          <div className={cardStyle}>
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              Get In Touch
            </h3>
            <p className="text-sky-700">
              I am available for freelance design and development work.
              Let’s build something amazing together.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4">

            <div className={cardStyle}>
              <FaEnvelope className="text-sky-900 mb-1" />
              <span className="text-sky-800 font-bold">mahakdev201@gmail.com</span>
            </div>

            <div className={cardStyle}>
              <FaPhone className="text-sky-900 mb-1" />
              <span className="text-sky-800 font-bold">+92 312 0016676</span>
            </div>

            <div className={cardStyle}>
              <FaMapMarkerAlt className="text-sky-900 mb-1" />
              <span className="text-sky-800 font-bold"> Shikarpur, Sindh, Pakistan</span>
            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-6 border-2 border-sky-900 transition-all duration-300 hover:scale-105">

            <h3 className="font-bold text-sky-900 mb-4">
              Follow Me
            </h3>

            <div className="flex gap-5 text-2xl text-sky-900">

              <a href="https://github.com/dream414/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:scale-125 transition cursor-pointer" />
              </a>

              <a href="https://www.linkedin.com/in/mahak-dev-ba7829386/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:scale-125 transition cursor-pointer" />
              </a>

              <a href="https://wa.me/923120016676" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:scale-125 transition cursor-pointer" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact