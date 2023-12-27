import "./home.css";
import React, { useEffect, useState } from "react";
// import img2 from "../assets/paisajeciudad.png";
import img3 from "../assets/fabrica.png";
import viñeta1 from "../assets/viñeta1.png";
import astro from "../assets/astro.png";
import social from "../assets/people.png";
import corel from "../assets/corel.png";
import firebase from "../assets/firebase.png";
import typesript from "../assets/typescript.png";
import languajeimg from "../assets/translate.png";
import linkedin from "../assets/linkedin.png";
import ProyectCards from "../components/ProyectCards";
import Navbar from "../components/Header";
import Tools from "../components/Toolsrotate";

const Home = () => {
  const [distorted, setDistorted] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageChange = () => {
    const text = document.getElementById("text");
    if (isEnglish) {
      text.style.transform = "rotateY(0)";
      text.textContent =
        "Soy un desarrollador web junior con muchas ganas de aprender y un gran interés en el mundo de la programación y la tecnología. ¡Listo para enfrentar nuevos desafíos y crecer en esta apasionante industria!";
      setIsEnglish(false);
    } else {
      text.style.transform = "rotateY(360deg)";
      text.textContent =
        "I am a junior web developer eager to learn and highly interested in the realm of programming, technology, and everything in between. Ready to take on new challenges and grow in this exciting industry.";
      setIsEnglish(true);
    }
  };

  const handleLanguageChange2 = () => {
    const text = document.getElementById("text2");
    if (isEnglish) {
      text.style.transform = "rotateY(0)";
      text.textContent =
        "Descubre mi pasión por el diseño y desarrollo a medida que comparto mis proyectos más recientes.";
      setIsEnglish(false);
    } else {
      text.style.transform = "rotateY(360deg)";
      text.textContent =
        "Discover my passion for design and development as I share my most recent projects.";
      setIsEnglish(true);
    }
  };


    const handleLanguageChange3 = () => {
    const text = document.getElementById("text3");
    if (isEnglish) {
      text.style.transform = "rotateY(0)";
      text.textContent =
        "Destaco por mis habilidades sociales, siendo un colaborador proactivo y con experiencia en metodología Scrum. Además, de por mi capacidad de trabajo en equipo, paciencia, creatividad y habilidad para resolver problemas de manera efectiva.";
      setIsEnglish(false);
    } else {
      text.style.transform = "rotateY(360deg)";
      text.textContent =
        "I stand out for my strong social skills, being a proactive collaborator with extensive experience in Scrum methodology. Moreover, I am highly regarded for my teamwork abilities, patience, and effective problem-solving skills.";
      setIsEnglish(true);
    }
  };

      const handleLanguageChange4 = () => {
    const text = document.getElementById("text4");
    if (isEnglish) {
      text.style.transform = "rotateY(0)";
      text.textContent =
        "Disfruto descubriendo nuevas herramientas. Actualmente me estoy formando en TypeScript y me encantaría aprender Astro y Firebase.";
      setIsEnglish(false);
    } else {
      text.style.transform = "rotateY(360deg)";
      text.textContent =
        "I enjoy exploring new tools. Currently, I am honing my skills in TypeScript and would love to learn Astro and delve deeper into Firebase.";
      setIsEnglish(true);
    }
  };

      const handleLanguageChange5 = () => {
    const text = document.getElementById("text5");
    if (isEnglish) {
      text.style.transform = "rotateY(0)";
      text.textContent =
        "Mis habilidades técnicas incluyen conocimientos en JavaScript, CSS, HTML, MySQL, Node.js, React y Bootstrap. Conocimientos básicos de diseño gráfico con CorelDRAW y experiencia utilizando IA.";
      setIsEnglish(false);
    } else {
      text.style.transform = "rotateY(360deg)";
      text.textContent =
        "My technical skills include knowledge of JavaScript, CSS, HTML, MySQL, Node.js, React and Bootstrap. Basic knowledge of graphic design with CorelDRAW and experience using AI.";
      setIsEnglish(true);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imagePosition = imageRef.current.offsetTop;

      if (scrollPosition > imagePosition - window.innerHeight / 2) {
        setDistorted(true);
      } else {
        setDistorted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const imageRef = React.createRef();

  return (
    <div className="main">
      <Navbar />
      <div className="homecontainerbig">
        <div className="homemain">
          <h1 className="nombrehuno">Javier de la fuente</h1>
          {/* <div className="homecontainermiddle"> */}
          <img className="viñetauno" src={viñeta1} alt="" />
          <h2 className="nombreh2">Fullstack</h2>
          <h3 className="nombreh3">Developer</h3>
        </div>
        <div className="iconcontainer">
          <button
            className="languajebutton"
            id="button"
            onClick={handleLanguageChange}
          >
            <img
              className="languajeimg"
              onClick={handleLanguageChange}
              src={languajeimg}
              alt=""
            />
          </button>
          <p id="text" className="psection1">
            Soy un desarrollador web junior con muchas ganas de aprender y un
            gran interés en el mundo de la programación y la tecnología. ¡Listo
            para enfrentar nuevos desafíos y crecer en esta apasionante
            industria!
          </p>
        </div>
      </div>
      <div className="proyectcontainerbig" id="proyectgo">
        <div className="proyectcontainermiddle">
          <h1 className="hunoproyects">ProYEcTs</h1>

          <div className="proyectimgs">
            <img src="{img4}" alt="" />

            <img
              className={`img3 ${distorted ? "distorted" : ""}`}
              src={img3}
              alt=""
            />
          </div>
        </div>
        <div className="languajesection">
          <button
            className="languajebutton2"
            id="button"
            onClick={handleLanguageChange2}
          >
            <img
              className="languajeimg"
              onClick={handleLanguageChange2}
              src={languajeimg}
              alt=""
            />
          </button>
          <p id="text2" className="psection2">
            Descubre mi pasión por el diseño y desarrollo a medida que comparto
            mis proyectos más recientes.
          </p>
        </div>
        <ProyectCards />
      </div>
      <div className="skillcontainerbig" id="skillgo">
        <div className="skillcontainermiddle">
          <h1 className="hunoskills">Skills</h1>
        </div>
        <div className="toolblock">
          <div className="skilltool">
            <div className="skillblock">
              <h3 className="skillhtres">Social</h3>
              <p id="text3" className="psection3">
                Destaco por mis habilidades sociales, siendo un colaborador
                proactivo y con experiencia en metodología Scrum. Además, de por
                mi capacidad de trabajo en equipo, paciencia, creatividad y
                habilidad para resolver problemas de manera efectiva.
              </p>
              <img className="tools2" src={social} alt="" />
              <div className="blocklanguaje">
                <button
                  className="languajebutton"
                  id="button"
                  onClick={handleLanguageChange3}
                >
                  <img
                    className="languajeimg"
                    onClick={handleLanguageChange3}
                    src={languajeimg}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="skillblock2">
              <h3 className="skillhtres">NEXT</h3>
              <img src={astro} alt="" /> <img src={typesript} alt="" />{" "}
              <img src={firebase} alt="" />
              <p id="text4" className="psection3">
                Disfruto descubriendo nuevas herramientas. Actualmente me estoy
                formando en TypeScript y me encantaría aprender Astro y
                Firebase.
              </p>
              <div className="block2languaje">
                <button
                  className="languajebutton"
                  id="button"
                  onClick={handleLanguageChange4}
                >
                  <img
                    className="languajeimg"
                    onClick={handleLanguageChange4}
                    src={languajeimg}
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="skillblock3">
              <h3 className="skillhtres">tools</h3>
              <p id="text5" className="psection3">
                Mis habilidades técnicas incluyen conocimientos en JavaScript,
                CSS, HTML, MySQL, Node.js, React y Bootstrap. Conocimientos
                básicos de diseño gráfico con CorelDRAW y experiencia utilizando IA.
              </p>
              <img className="tools2" src={corel} alt="" />
              <div className="block3languaje">
                <button
                  className="languajebutton"
                  id="button"
                  onClick={handleLanguageChange5}
                >
                  <img
                    className="languajeimg"
                    onClick={handleLanguageChange5}
                    src={languajeimg}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="toolcomponent">
            <Tools />
          </div>
        </div>
      </div>
      <footer>
        <div className="iconblock">
          <a href="https://github.com/jvdelafuente?tab=repositories" target="__blank">
          <svg
            className="github"
            enableBackground="new 0 0 32 0"
            height="32px"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fill="#181616"
              fillRule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
          </a>
          <a href="https://www.linkedin.com/in/javiergarciadelafuente/" target="__blank"><img src={linkedin} alt="" className="linkedin" /></a>
        </div>
        <div className="iconblock2">
          <h4 className="footertext">delafuentejvr@gmail.com</h4>
          <h4 className="footertext">+34 624 83 71 85</h4>
        </div>
      </footer>
    </div>
  );
};

export default Home;
