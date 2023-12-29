import cat from "../pages/cat.jpg";

const Home = () => {
  return (
    <>
      <div className="h-[37rem] sm:h-screen flex flex-col sm:flex-row">
        {/* Left Section */}
        <div className="h-2/4 sm:h-full flex flex-col justify-center p-10 sm:px-20 bg-slate-500">
          <h1 className="text-4xl sm:text-6xl text-black">
            DR.<span className="text-[#60cf80] font-bold">Devesh</span>Jangid
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
        <div className="h-1/2 sm:h-4/5 w-full sm:w-1/2 my-5 sm:my-20 py-10 sm:py-20 px-5 sm:px-10">
          <img
            src={cat}
            alt="Dr. Devesh Jangid"
            className="rounded-xl border-2 bg-purple-400 h-[200px] sm:h-full w-[250px] sm:w-full mx-auto sm:mx-20"
          />
        </div>
      </div>

      <div className="h-screen ">
        <div className="flex flex-col p-5 sm:p-10">
          <div className="w-full text-black">
            <h1 className="text-center text-4xl md:text-5xl font-bold">
              Google Map Location
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <div className="aspect-w-16 aspect-h-9 pt-20">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.32420876362528!2d77.6997967338696!3d27.432271713879487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737702797e9af5%3A0x3cf85c1c0ac2996e!2sCMJX%2BWVV%2C%20Narsipuram%20Colony%2C%20Mathura%2C%20Uttar%20Pradesh%20281006!5e0!3m2!1sen!2sin!4v1703830076806!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg md:rounded-xl lg:rounded-2xl w-full h-96 md:h-80 lg:h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
