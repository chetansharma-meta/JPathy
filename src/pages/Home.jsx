import cat from '../pages/cat.jpg'



const Home = () => {

  return (
    // <div className='flex overflow-hidden flex-col'>
    //   <section className="bg-gray-100 py-8 h-screen">
    //     <div className="container m-auto p-4">
    //       <div className="">
    //         <h1 className="text-3xl font-bold text-gray-800">Introduction</h1>
    //         </div>
    //       <div>

    //       </div>

    //     </div>
    //   </section>
    //   <section className="bg-gray-200 py-8 h-screen">
    //     <div className="container mx-auto px-4">
    //       <h2 className="text-2xl font-bold text-gray-800 text-center">Google Map Location</h2>
    //       {/* Add your Google Map location component here */}
    //     </div>
    //   </section>
    // </div>
    <>
     <div className="h-screen flex flex-col sm:flex-row">
  <div className="sm:h-full flex flex-col justify-center px-11 sm:px-20 bg-slate-500">
    <h1 className="text-4xl sm:text-6xl text-black">
      DR.<span className="text-[#60cf80] font-bold">Devesh</span>Jangid
    </h1>
    <h2 className="text-lg sm:text-3xl text-black">
      A <span className="text-[#60cf80] font-bold">HomeoPath</span> who
      cares for you
    </h2>
    {/* <div className="flex flex-row py-3">
      <button className="bg-[#60cf80] text-black px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#4f9e6f] hover:text-white text-sm sm:text-base">
        Contact Now
      </button>
    </div> */}
  </div>
  <div className="h-1/2 sm:h-4/5 w-full sm:w-1/2 my-5 sm:my-20 py-10 sm:py-20 px-5 sm:px-10">
    <img
      src={cat}
      alt="Dr. Devesh Jangid"
      className="rounded-xl border-2 bg-purple-400 h-full w-full"
    />
  </div>
</div>

      {/* <div className="h-screen w-full">
        <div className="flex flex-col flex-wrap gap-20 p-20 justify-center">
          <div className="w-full text-black">
            <h1 className=" text-center text-5xl font-bold underline underline-offset-8">
              Best Picks
            </h1>
          </div>
          <div className="flex justify-center gap-20 flex-wrap">
            <div className="hover:scale-110 hover:transition-all">
                            <div>
                            </div>
                            <div className="h-10"> 
                                
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                            <div></div>

                        </div>

          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
