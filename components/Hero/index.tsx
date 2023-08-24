import Link from "next/link";
import Image from "next/image";
import { url } from "inspector";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="from-lightgray  style= relative   z-10 overflow-hidden bg-gradient-to-r  via-transparent     to-[lightgray] pb-16  pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          backgroundImage:
            "linear-gradient(250deg, rgba(9, 25, 62, 0.70)  0%, #062343 95%), url(/images/hero/bg.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="columns-1">
          <div className="-mx-8 flex flex-wrap">
            <div className=" w-full px-4 md:w-1/2 ">
              <div
                className="wow fadeInUp mx-8 max-w-[800px] text-start md:mx-auto"
                data-wow-delay=".2s"
              >
                <p className="mb-5 text-sm font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-sm md:leading-tight">
                  WELCOME TO COMPANY
                </p>

                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Cost-effective ICT
                </h1>

                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  solutions for your
                </h1>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  business!
                </h1>

                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color opacity-90 dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  We provide efficient and effective technology solutions that
                  help businesses achieve their objectives.
                </p>
                <div className="w-full md:w-1/4">
                  <Link
                    href="/#"
                    className="ease-in-up min-w-min  rounded-full bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    Discover more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute left-0 top-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="16"
          viewBox="0 0 13 16"
          fill="none"
        >
          <path
            d="M6.75384 15.673C7.96373 15.6669 9.145 15.2309 10.1486 14.4201C11.1522 13.6094 11.9331 12.4601 12.3929 11.1174C12.8526 9.77466 12.9706 8.29864 12.7319 6.87557C12.4932 5.45249 11.9085 4.14619 11.0516 3.12138C10.1947 2.09656 9.10402 1.39918 7.91714 1.11729C6.73027 0.835411 5.50041 0.981604 4.38273 1.53746C3.26504 2.09331 2.30961 3.03393 1.63702 4.24057C0.964426 5.44721 0.604812 6.86583 0.603519 8.31744C0.602657 9.28565 0.761279 10.2445 1.0703 11.1389C1.37932 12.0334 1.83261 12.8456 2.40415 13.5292C2.97569 14.2127 3.6542 14.754 4.40066 15.1219C5.14713 15.4898 5.94685 15.6771 6.75384 15.673Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
