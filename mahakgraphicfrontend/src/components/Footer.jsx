import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const [active, setActive] = useState(null);

  const handleClick = (name) => {
    setActive(name);
    setTimeout(() => setActive(null), 250);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const itemClass = (name, base = "text-white/80") =>
    `${base} cursor-pointer transition duration-300 transform ${
      active === name ? "scale-110 text-white" : "hover:scale-105"
    }`;

  const headingClass = (name) =>
    ` text-cyan-300 font-semibold text-lg mb-4 cursor-pointer transition duration-300 transform ${
      active === name ? "scale-125 text-white" : "hover:scale-110"
    }`;

  return (
    <footer className="relative bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 py-16 px-6 md:px-10 text-white shadow-lg shadow-sky-900/40">

      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* BRAND */}
        <div>
          <h2
            onClick={() => handleClick("brand")}
            className={`text-2xl font-bold mb-4 cursor-pointer hover:scale-105 transition transform duration-300 ${
              active === "brand" ? "scale-125 text-white" : "text-sky-100"
            }`}
          >
            MAHAK DEV 
            <span className="block text-cyan-300 drop-shadow-lg">
                 💎 DESIGNER 
            </span>
          </h2>

          <p
            onClick={() => handleClick("brandText")}
            className={itemClass("brandText")}
          >
            A unique and creative web designer & developer. Helping brands stand out with modern UI/UX design.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3
            onClick={() => handleClick("links")}
            className={headingClass("links")}
          >
            Links
          </h3>

          <ul className="space-y-2">
            <li onClick={() => handleClick("home")} className={itemClass("home")}>
              Home
            </li>
            <li onClick={() => handleClick("about")} className={itemClass("about")}>
              About
            </li>
            <li onClick={() => handleClick("services")} className={itemClass("services")}>
              Services
            </li>
            <li onClick={() => handleClick("portfolio")} className={itemClass("portfolio")}>
              Portfolio
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3
            onClick={() => handleClick("cat")}
            className={headingClass("cat")}
          >
            Categories
          </h3>

          <ul className="space-y-2">
            <li onClick={() => handleClick("logos")} className={itemClass("logos")}>
              Logos
            </li>
            <li onClick={() => handleClick("posters")} className={itemClass("posters")}>
              Posters
            </li>
            <li onClick={() => handleClick("banners")} className={itemClass("banners")}>
              Banners
            </li>
            <li onClick={() => handleClick("templates")} className={itemClass("templates")}>
              Templates
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3
            onClick={() => handleClick("res")}
            className={headingClass("res")}
          >
            Resources
          </h3>

          <ul className="space-y-2">
            <li onClick={() => handleClick("blogs")} className={itemClass("blogs")}>
              Blogs
            </li>
            <li onClick={() => handleClick("faq")} className={itemClass("faq")}>
              FAQ
            </li>
            <li onClick={() => handleClick("privacy")} className={itemClass("privacy")}>
              Privacy Policy
            </li>
            <li onClick={() => handleClick("terms")} className={itemClass("terms")}>
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3
            onClick={() => handleClick("social")}
            className={headingClass("social")}
          >
            Follow Me
          </h3>

          <div className="flex gap-4 text-3xl mt-2"><a href="https://github.com/dream414/">
           <FaGithub onClick={() => handleClick("git")} className="cursor-pointer hover:scale-125 transition" /></a>
           <a href="https://www.linkedin.com/in/mahak-dev-ba7829386/">
           <FaLinkedin onClick={() => handleClick("link")} className="cursor-pointer hover:scale-125 transition" /></a>
          <a
  href="https://wa.me/923120016676"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => handleClick("wp")}
  className="cursor-pointer hover:scale-125 transition inline-block"
>
  <FaWhatsapp className="text-3xl text-white" />
</a>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="text-center text-white/60 mt-12 text-sm">
        © 2026 Mahak Dev Designer. All rights reserved.
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-sky-300 text-sky-950 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;