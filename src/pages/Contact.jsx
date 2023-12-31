

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen ">
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
                 
                 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg md:rounded-xl lg:rounded-2xl w-full h-96 md:h-80 lg:h-96"
                ></iframe>
                </div>
            </div>
          </div>
        </div>
          <div className="bg-gray-200 p-10 text-center font-bold text-xl mt-12">
          <p className="p-5 text-5xl">Jangid Homeopathy,</p>
          <p className="w-screen ">Bansal Market, Narsipuram Colony, Mathura, Uttar Pradesh 281006</p>
          
          <p className="p-5">Contact: 5857252353</p>
          <p className="">E-mail: Jpathy@gmail.com</p>
          
          </div>
      </div>
    </div>
  )
}

export default Contact
