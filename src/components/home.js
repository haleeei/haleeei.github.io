import pfp from '../assets/haleeei.png'
import resume from '../assets/Inzunza_Haley_2024_Resume.pdf'

import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";





function Home () {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[#22610B] text-[7rem] font-UnbuntoMono font-extrabold flex flex-col justify-center items-center gap-0">
        <p>Haley Khuu Inzunza</p>
        <div className='w-[90%] h-[5px] bg-[#22610B] rounded-full' />
      </div>
      <div className='flex flex-row items-center justify-center gap-10 mt-8'>
      <img src={pfp} className="w-[25%] hover:scale-105 transition" alt="Haley Icon" draggable={false}/>
      <div>
        <div className="text-3xl text-left leading-relaxed font-UnbuntoMono">
            Hi! I'm Haley Inzunza, a software developer. I recently
            <br/>
            graduated with a degree in Computer Science from UC Irvine,
            <br/>
            where I delved into  various technical domains like AI, Computer
            <br/>
            Vision, and Game Development. My technical skill set includes
            <br/>
            C++, Python, C, and Unreal Engine alongside several
            <br/>
            other languages and technologies. Passionate about creating
            <br/>
            innovative solutions, I  thrive on challenges and explore
            <br/>
            new technologies to push the boundaries of what’s possible.
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <a href="https://github.com/haleeei" target='_blank'>
              {/* <img src={github} alt="GitHub icon"/> */}
                <FiGithub size={80} className='text-black active:text-gray-600 hover:scale-105 transition '/ >
          </a>
          <a href="https://www.linkedin.com/in/haley-inzunza-76033914a/"  target='_blank'>
              {/* <img src={linkedIn} alt="Linkedin icon"/>*/}
                <FaLinkedin size={80} className='text-black active:text-gray-600 hover:scale-105 transition '/>
          </a>
          <a href={resume}  target='_blank'>
              {/* <img src={resume} alt="Resume icon"/> */}
                <HiOutlineNewspaper size={90} className='text-black active:text-gray-600 hover:scale-105 transition '/>
          </a>
        </div>
      </div>
      </div> 
      
    </div>
  );
}

export default Home;