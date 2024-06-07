import { Typography } from "@material-tailwind/react";
import React from "react";

const About = () => {

    const downloadCV = () => {
        const cvUrl = '/public/Shihab_Resume.pdf';
    
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Shihab-Resume.pdf';
    
        link.click();
    };
    
  return (
      <div className=" bg-white">
          
          <div className="h-screen">
        <div className="flex justify-center">
          <div className="container flex h-screen">
            <div className="w-6/12 flex justify-center  h-screen">
              <div>
                <h1 className="font-poppins font-black text-[160px] tracking-wider text-stroke text-transparent">
                  ABOUT
                </h1>
                <h2 className="font-montserrat font-extrabold text-5xl mt-[-140px] ">
                  Title
                </h2>
                <h3 className="font-poppins font-medium text-lg mt-11 after:content-[''] after:w-[660px] after:h-px after:absolute relative after:bottom-[-35px] after:left-0 after:bg-black after:opacity-30 duration-300 ">
                  Sub title
                </h3>
                <p className="font-poppins font-normal text-lg leading-7 mt-[80px] ">
                  des
                  <p className="mt-6">Sub Des</p>
                </p>
                <div className="mt-10">
                  <h1 className="font-montserrat font-bold text-3xl tracking-wide mb-4 after:content-[''] after:w-96 after:h-px after:absolute relative after:-bottom-3 after:left-0 after:opacity-30 after:bg-black">
                    My Development Skills:
                  </h1>
                  <div className="flex flex-wrap">
                    
                      <p className="font-montserrat font-bold text-lg mr-4 mt-2">
                        <span className="bg-secondary opacity-75 w-[10px] h-[10px] mt-[-20px] rounded-full inline-block mr-1.5"></span>
                        skills
                      </p>
                  </div>
                </div>
                <div className="mt-14">
                  
                    <a
                      onClick={downloadCV}
                      className="font-poppins font-bold text-2xl text-white bg-secondary py-5 rounded-[45px] px-9 hover:py-6 hover:px-10 hover:mt-4 hover:ml-[-7px] hover:shadow-2xl hover:text-[26px] duration-300"
                    >
                      downloadCV
                    </a>
                  
                </div>
              </div>
            </div>
            <div className="w-2/6 flex justify-end ml-2.5 items-center h-full">
              <img src="../../public/image/Shihab_IMG.png" />
            </div>
          </div>
        </div>
      </div>

      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2023 Material Tailwind
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default About;
