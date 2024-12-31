import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import image from "./images/profile.jpg"

function App() {
  return (
    <>
    <div className="flex flex-col align-center items-center justify-center bg-stone-800 w-screen h-screen">
      <img src ={image} alt ="akash.jpg" className="h-40 w-40 rounded-full mb-4"/>
        <p className="text-center text-white text-2xl font-medium font-serif mb-4">AKASH KUMAR TIWARY</p>
        <p className="text-center text-white">Project & DSA Intern at Crio.Do</p>
        <p className="text-center text-gray-600">Birla Institue of Technology, Mesra (2022 - 2026)</p>
      <div className="mt-4">
      <a href="https://www.linkedin.com/in/akashkt10172/" target="_blank" rel="noopener noreferrer" className="px-4 text-white hover:text-gray-500">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://x.com/tweetsbyakash" target="_blank" rel="noopener noreferrer"  className="px-4 text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="mailto:1akashtiwary@gmail.com" target="_blank" rel="noopener noreferrer" className="px-4 text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <a href="https://www.facebook.com/updatesbyakash" target="_blank" rel="noopener noreferrer"  className="px-4 text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faFacebook}  size="2x" />
      </a>
      <a href="https://www.instagram.com/akashdidwhat/" target="_blank" rel="noopener noreferrer"  className="px-4 text-white hover:text-gray-500">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
      <div className="mt-16">
        <a href="https://codeforces.com/profile/green-eyeliner" target="_blank" rel="noopener noreferrer"  className="text-white text-xs underline border-r-2 px-2 hover:text-gray-500">Codeforces</a>
        <a href="https://www.codechef.com/users/sabse_femos" target="_blank" rel="noopener noreferrer"  className="text-white text-xs underline border-r-2 px-2 hover:text-gray-500">Codechef</a>
        <a href="https://drive.google.com/file/d/17Z53XcH0rzljo3CCyo0kxSyXlkikFI5Y/view?usp=sharing" target="_blank" rel="noopener noreferrer"  className="text-white text-xs underline border-r-2 px-2 hover:text-gray-500">Resume</a>
        <a href="https://leetcode.com/u/akash_kt/" target="_blank" rel="noopener noreferrer"  className="text-white text-xs underline border-r-2 px-2 hover:text-gray-500">Leetcode</a>
        <a href="https://github.com/AkashKT10172" target="_blank" rel="noopener noreferrer"  className="text-white text-xs underline px-2 hover:text-gray-500">Github</a>
      </div>
      <div className="flex items-center justify-center mt-20">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white hover:text-gray-500" />
        <span className="text-white text-md hover:text-gray-500">Ranchi, India</span>
      </div>
    </div>
    </>
  );
}

export default App;
