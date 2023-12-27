import React, { useRef } from 'react';
import shot from "../assets/shot2.gif"
import "./Buttons.css"

const ThreeButtons = () => {
  const gifRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);

  const mostrarGif = (index) => {
    const gifRef = gifRefs.current[index].current;
    gifRef.style.display = "block";
    gifRef.classList.remove("animate-gif");
    void gifRef.offsetWidth; // Reinicia la animación
    gifRef.classList.add("animate-gif");
    setTimeout(() => {
      gifRef.style.display = "none";
    }, 1500);

  };
  const redirect = (divId) => {
    const div = document.getElementById(divId);
    div.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div className='buttonscotainer'>

      <div className="buttonsthree">
        <button className='buttongif' onClick={() => { mostrarGif(0); redirect('homego'); }}>Home</button>
        <button className='buttongif' onClick={() => { mostrarGif(1); redirect('proyectgo'); }}>Projects</button>
        <button className='buttongif' onClick={() => { mostrarGif(2); redirect('skillgo'); }}>Skills</button>
      </div>
      <div className="buttonsthreegifs">
      <img className='shotgif animate-gif'
        id='gifshot1'
        ref={gifRefs.current[0]}
        src={shot}
        alt="Gif de disparo"
      />
      <img className='shotgif animate-gif'
        id='gifshot2'
        ref={gifRefs.current[1]}
        src={shot}
        alt="Gif de disparo"
      />
      <img className='shotgif animate-gif'
        id='gifshot3'
        ref={gifRefs.current[2]}
        src={shot}
        alt="Gif de disparo"
      />
      </div>
    </div>
  );
};
export default ThreeButtons;
