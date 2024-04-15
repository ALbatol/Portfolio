import Image from "next/image";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer"
import nextConfig from "../next.config.mjs"
export default function Home() {
  return (
    <div className=" bg-background w-full">
      <Navbar />

      <div className=" grid items-center justify-center w-full sm:mx-0 mx-2">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert sm:w-auto w-[95%]"
          src={`${nextConfig.basePath}/AlbaToLNoBg.png`}
          alt="logo"
          width={550}
          height={150}
          priority
        />
        <p className=" sm:-mt-3 -mt-2 font-semibold text-left text-[16px] text-main_text">
          Developer Product Engineering
        </p>
        <div className=" mt-5 sm:w-1/2 sm:px-0 px-[2%] sm:space-y-1 space-y-3 pointer-events-none">
          <p className=" text-left text-sub_text hidden">
            I have about more than tow years of experience in Front-end
            Developing. Including creating dynamic and responsive web and mobile
            applications. Highly skilled expertise includes working with
            Tailwind CSS frameworks, especially in Next.js, React.js, and React
            Native. Adept at transforming complex design concepts into
            user-friendly, visually appealing interfaces while optimizing
            performance and usability.
          </p>
        </div>
      </div>
      <div className="bg-primary pb-20  ">
        <div
          className="sm:mt-32 mt-20 pt-5 container sm:mx-auto mx-[2%]  "
          id="Skills"
        >
<p className="text-left xl:text-[100px] sm:text-[64px] text-[32px] text-background pointer-events-none ">
            Skills
          </p>
          <div className=" mt-5 flex justify-center">
            <Carousel />
          </div>
        </div>
      </div>

      <div
        className=" sm:mt-32 mt-20 container sm:mx-auto mx-[2%] "
        id="Work_Experience"
      >
<p className="text-left xl:text-[100px] sm:text-[64px] text-[32px] text-primary pointer-events-none ">
          Work Experience
        </p>
        <div className=" mt-5">
          <p className=" text-left sm:text-[22px] text-[16px] text-sub_text pointer-events-none font-oldstandard">
            I have been developing software programs Since March 2022, website's
            and sometimes Apps While working in Tamkeen Technology.
            <br />
            This is some of my work that I have had major role in it.
          </p>

          <div className=" mt-14 flex flex-col space-y-6 items-baseline">
            <div className=" sm:mt-0 mt-4 flex flex-row xl:justify-between justify-center xl:flex-nowrap flex-wrap-reverse items-center sm:gap-5 gap-y-48 ">
              <p className="xl:w-[18%] text-sub_text pointer-events-none font-oldstandard sm:text-[20px] text-[16px]">
                In Mnar, we undertook the development of the website from
                scratch. As the front-end team lead, my role extended beyond
                supervision to encompass active participation, including the
                development of approximately 74% of the code. The complexity of
                the website provided me with valuable skills and experiences.
                The was developed with NextJS and Tailwind CSS, which
                significantly enhanced the efficiency and ease of the process.
              </p>
              <div className="flex overflow-visible items-center justify-center bg-primary lg:ml-0 sm:ml-20 xl:w-[750px] xl:h-[750px] sm:w-[450px] sm:h-[450px] w-[270px] h-[270px] rounded-full">
                <a
                  className=" xl:min-w-[940px] md:min-w-[700px] sm:min-w-[600px] relative cursor-pointer lg:right-32 md:right-20 right-10 w-[250px] "
                  href={"https://mnar.sa/"}
                >
                  <Image src={`${nextConfig.basePath}/Mnar.png`} alt="Mnar" width={1400} height={580}
                  className="sm:flex hidden" />
                    <Image src={`${nextConfig.basePath}/MnarSM.png`} alt="Mnar" width={350} height={480}
                  className=" sm:hidden flex mt-32" />
                  
                </a>
              </div>
            </div>

            <div className="sm:pt-10 pt-40 flex flex-row justify-between xl:flex-nowrap flex-wrap items-center sm:gap-5 gap-y-20">
              <div className="flex overflow-visible items-center justify-center bg-primary xl:w-[650px] xl:h-[650px] sm:w-[520px] sm:h-[520px] w-[270px] h-[270px] sm:pb-0 pb-32 rounded-full">
                <a
                  href="https://stg-appointments-morajea.tamkeen.live/"
                  className=" cursor-pointer xl:min-w-[820px] sm:min-w-[700px] w-[88%] relative lg:left-44 md:left-20 left-10"
                >
                  <Image
                    src={`${nextConfig.basePath}/Morajea.png`}
                    alt="Morajea"
                    width={1200}
                    height={450}
                    className="sm:flex hidden"
                  />
                     <Image src={`${nextConfig.basePath}/MorajeaSM.png`} alt="Mnar" width={350} height={480}
                  className=" sm:hidden flex mt-14" />
                </a>
              </div>
              <p className="xl:w-1/4 text-sub_text pointer-events-none font-oldstandard sm:text-[20px] text-[16px]">
                For the Morajea website, a rebuild was necessary along with the
                addition of new features. I completed approximately 55% of the
                rebuild and implemented about 73% of the new features. The
                website was originally developed using React, JavaScript, and
                Tailwind CSS. However, due to the outdated version of React, the
                new features and changes implementation was challenging.
              </p>
            </div>

            <div className=" sm:pt-10 pt-14 flex flex-row xl:justify-between justify-center xl:flex-nowrap flex-wrap-reverse items-center xl:gap-5 sm:gap-y-20 gap-y-[265px] ">
              <p className="xl:w-[20%] text-sub_text pointer-events-none font-oldstandard sm:text-[20px] text-[16px]">
              The SAIP Visitors website required a rebuild for the middleware
                part, along with the incorporation of several additional
                features. The website was originally developed using NextJS and
                Tailwind CSS. I successfully reconstructed approximately 72% of
                the codebase while integrating the new features.
              </p>
              <div className="flex overflow-visible items-center justify-center bg-primary lg:ml-0 sm:ml-20 xl:w-[750px] xl:h-[750px] sm:w-[450px] sm:h-[450px] w-[270px] h-[270px] rounded-full">
                <a
                  className=" xl:min-w-[800px] md:min-w-[600px] sm:min-w-[500px] relative cursor-pointer sm:top-10 top-[70px] lg:right-32 md:right-20 right-10 w-[250px] "
                  href="https://visitors.saip.gov.sa/en/login"
                >
                  <Image src={`${nextConfig.basePath}/visitors.png`} alt="Visitors" width={1100} height={500}
                  className="sm:flex hidden" />
                    <Image src={`${nextConfig.basePath}/visitorsSM.png`} alt="Visitors" width={350} height={480}
                  className=" sm:hidden flex mt-32" />
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" sm:mt-32 mt-20 container sm:mx-auto mx-[2%]"
        id="Certificates"
      >
<p className="text-left xl:text-[100px] sm:text-[64px] text-[32px] text-primary pointer-events-none ">
          Certificates
        </p>

        <div className=" mt-10 flex flex-col justify-center items-center">
          <Image
            className=" sm:w-auto w-[90%]"
            src={`${nextConfig.basePath}/Cisco1.png`}
            alt="logo"
            width={700}
            height={450}
            priority
          />
          <p className=" mt-5 font-semibold text-[18px]">CCNA 200-301</p>
        </div>

        <div className=" mt-10 flex flex-col justify-center items-center">
          <Image
            className=" sm:w-auto w-[90%]"
            src={`${nextConfig.basePath}/PSM.png`}
            alt="logo"
            width={700}
            height={450}
            priority
          />
          <p className=" mt-5 font-semibold text-[18px]">PSM I Certificate</p>
        </div>
      </div>

      <div
        className=" sm:mt-32 mt-20 container sm:mx-auto mx-[2%]"
        id="Education"
      >
<p className="text-left xl:text-[100px] sm:text-[64px] text-[32px] text-primary pointer-events-none ">
          Education
        </p>
        <p className="sm:text-[22px] text-[16px] mt-4 text-left text-sub_text pointer-events-none sm:w-2/3 font-oldstandard">
          I studied my Bachelors in information technology at Qassim University.
          graduating with first class honors with a GPA of 4.00/5 as the first
          in my class as well as the group leader. I really enjoyed my studies
          and had a great time with my colleagues and instructors gaining
          knowledge, experience and collaboration skills
        </p>
      </div>

      <div
        className=" sm:-mt-[1050px] -mt-[300px]"
        id="Contact"
      >
        <div className="relative overflow-hidden items-center justify-center">

        <div className="flex items-center relative right-40 sm:top-[1200px] top-[500px] sm:border-[12px] border-[6px] border-primary bg-background sm:w-[150%] xl:w-[130%] xl:h-[2430px] sm:h-[1900px] w-[160%] h-[1000px] rounded-full">

<div className="grid xl:gap-y-12 gap-y-6 w-1/3 sm:-mt-[1050px] -mt-[500px] 2xl:ml-[400px] xl:ml-[250px] lg:ml-[400px] ml-[200px]">
<p className="text-left xl:text-[100px] sm:text-[64px] text-[32px] text-primary pointer-events-none ">
Contact
        </p>
        <div className=" lg:mt-20 mt-10 sm:text-[28px] text-[20px] flex gap-x-3 sm:justify-between text-main_text">
          <p>
            Email:
          </p>
          <a href="mailto:albatolaldossary@gmail.com" className="cursor-pointer text-sub_text hover:text-primary lg:w-[50%]">
          albatolaldossary@gmail.com
          </a>
        </div>
        <div className=" lg:mt-14 mt-10 sm:text-[28px] text-[20px] flex gap-x-4 sm:justify-between text-main_text">
          <p>
            phone:
          </p>
          <p className=" text-left text-sub_text lg:w-[50%]">
          +966 582040298
          </p>
        </div>
        <div className="lg:mt-14 mt-10 sm:text-[28px] text-[20px] flex gap-x-4 sm:justify-between text-main_text">
          <p>
          Linkedin
          </p>
          <a href="https://www.linkedin.com/in/albatol-aldossary-2699651a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="cursor-pointer lg:w-[50%] text-left text-main_text hover:text-primary underline">
          Albatol Aldossary
          </a>
        </div>
</div>

        </div>
        </div> 
      </div>
      {/* Footer */}
      <Footer/>

      <div className="fixed z-[51] bottom-2 right-2 bg-blue-100 text-blue-700 text-center font-bold rounded-full py-2 w-20">
        <span className=" block md:hidden ">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block desktopXL:hidden">2xl</span>
      </div>
    </div>
  );
}
