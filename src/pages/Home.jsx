import doctor from "../assets/deveshji.jpg";
import sweet from "../assets/swee.jpg";
import homo from "../assets/homo.jpg";
import homo2 from "../assets/homo2.jpg";
import homo3 from "../assets/homo3.jpg";

const Home = () => {
  return (
    <>
      <div className="h-[37rem] sm:h-screen flex flex-col sm:flex-row">
        {/* Left Section */}
        <div className="h-2/4 sm:h-full flex flex-col justify-center p-10 sm:px-20 bg-slate-500 sm:rounded-br-3xl">
          <h1 className="text-4xl sm:text-6xl text-black">
            DR.<span className="text-[#60cf80] font-bold">Devesh</span>Sharma
          </h1>
          <h2 className="text-xl sm:text-3xl text-black">
            A <span className="text-[#60cf80] font-bold">HomeoPath</span> who
            cares for you
          </h2>
          {/* Contact Button */}
          {/* Uncomment and adjust as needed */}
          {/* <div className="flex flex-row py-3">
            <button className="bg-[#60cf80] text-black px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#4f9e6f] hover:text-white text-sm sm:text-base">
              Contact Now
            </button>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="h-1/2 sm:h-full w-full sm:w-2/5 my-5 sm:my-0 py-10 sm:py-14 px-5 sm:px-10">
          <img
            src={doctor}
            alt="Dr. Devesh Jangid"
            className="rounded-xl border-2 bg-purple-400 h-[250px] sm:h-full w-[250px] sm:w-full mx-auto sm:mx-44"
          />
        </div>
      </div>
      <div className="text-5xl text-center mt-10">
        We Treated 5000+ People
      </div>
      <div className="text-center my-20 flex flex-wrap justify-center gap-10">
        
        <div className="mx-10 border-2 p-10 rounded-2xl ">
        <div className="ml-3 mb-3"> 
          <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/external-skin-internal-human-organs-victoruler-flat-victoruler.png" alt="hair"/>
        </div>
        <p>HAIR FALL</p>
        <p>TREATMENT</p>
        </div>
        
        <div className="mx-10 border-2 p-10 rounded-2xl">
        <div className="ml-3 mb-3">
          <img src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/external-ovary-internal-human-organs-victoruler-linear-colour-victoruler.png" alt="Pcos"/>
        </div>
        <p>PCOS</p>
        <p>TREATMENT</p>
        </div>
        
        <div className="mx-10 border-2 p-10 rounded-2xl">
        <div className="ml-3 mb-3">
          <img src="https://img.icons8.com/external-justicon-flat-justicon/64/external-kidney-human-organs-justicon-flat-justicon.png" alt="kidney"/>
        </div>
        <p>STONE</p>
        <p>TREATMENT</p>
        </div>
        
        <div className="mx-10 border-2 p-10 rounded-2xl">
        <div className="ml-3 mb-3">
          <img src="https://img.icons8.com/pastel-glyph/64/throat--v2.png" alt="THYROID"/>
        </div>
        <p>THYROID</p>
        <p>TREATMENT</p>
        </div>
        
        <div className="mx-10 border-2 p-10 rounded-2xl">
        <div className="ml-3 mb-3">     
          <img src="https://img.icons8.com/dotty/80/cleansing.png" alt="skin"/>
        </div>
        <p>SKIN CARE</p>
        <p>TREATMENT</p>
        </div>
        
        <div className="mx-10 border-2 p-10 rounded-2xl">
        <div className="ml-3 mb-3">
          <img src="https://img.icons8.com/external-fauzidea-flat-fauzidea/64/external-throat-pandemic-fauzidea-flat-fauzidea.png" alt=""/>
        </div>
        <p>TONSILS</p>
        <p>TREATMENT</p>
        </div>
        <div className="mx-10 border-2 p-10 rounded-2xl">
        <div className="ml-3 mb-3">
          <img src="https://img.icons8.com/color/48/headache.png" alt="headache" />
        </div>
        <p>MIGRAINE</p>
        <p>TREATMENT</p>
        </div>
      </div>

      {/* Hero Section: Why Homeopathy */}
      <div className=" min-h-screen min-w-screen bg-gray-100 py-10 sm:py-32 px-5 sm:px-[15rem]">
        <h3 className="min-w-screen text-2xl sm:text-4xl text-black font-bold mb-5 p-5 text-center bg-[#60cf80]">
          Why Choose Homeopathy?
        </h3>
        <ul className="flex flex-col flex-wrap list-none sm:px-32">
          <li className="text-lg sm:text-xl text-black mb-3 sm:flex sm:flex-row sm:gap-5 p-5">
            <span>
              <img src={sweet} alt="" className="h-52 rounded-lg border-2 border-spacing-5 border-black" />
            </span>
            <div className="sm:w-2/5">
              <p className="p-5 sm:p-10 text-center text-2xl">
              Homeopathy relies on the principle of like cures like and highly
              diluted substances
            </p>
            </div>
          </li>
          <li className="text-lg sm:text-xl text-black mb-3 sm:flex sm:flex-row-reverse  sm:gap-5 p-5">
            <span>
              <img src={homo} alt="" className="h-52 rounded-lg border-2 border-spacing-5 border-black" />
            </span>
            <div className="sm:w-3/4">
              <p className="p-5 sm:p-10 text-center text-2xl  ">
              Allopathy (conventional medicine) is evidence-based and undergoes
            rigorous scientific testing.
            </p>
            </div>
          </li>
          <li className="text-lg sm:text-xl text-black mb-3 sm:flex sm:flex-row sm:gap-5 p-5">
            <span>
              <img src={homo2} alt="" className="h-52 rounded-lg border-2 border-spacing-5 border-black" />
            </span>
            <div className="sm:w-2/5">
              <p className="p-5 sm:p-10 text-center text-2xl  ">
              Homeopathy lacks substantial scientific evidence supporting its
            efficacy.
            </p>
            </div>
          </li>
          <li className="text-lg sm:text-xl text-black mb-3 sm:flex sm:flex-row-reverse sm:gap-5 p-5">
            <span>
              <img src={homo3} alt="" className="h-52 rounded-lg border-2 border-spacing-5 border-black" />
            </span>
            <div className="sm:w-3/4">
              <p className="p-5 sm:p-10 text-center text-2xl  ">
              Allopathy treatments are often backed by extensive research and
            clinical trials.
            </p>
            </div>
          </li>
         
        </ul>
      </div>
    </>
  );
};

export default Home;
