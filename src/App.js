import './app.css';
import code from "./Componets/video/code.mp4";
import {SectionOne} from "./Componets/SectionPrincipal/SectionOne"

export  default function app(){
  return (
    <div className='video-container'>
         <SectionOne />
      <div className='video-container__overlayer'>
        
      </div>
    <video
      autoPlay // Auto play, player automatico 
      loop // Ficar repetindo varias vezes 
      muted // Ficar mudo 
    >
      <source src={code} type="video/mp4"/>
    </video>
    </div>
  )
}
