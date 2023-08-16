import Link from "next/link";
import Image from "next/image";
import { url } from "inspector";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="from-lightgray background style= relative   z-10 overflow-hidden bg-gradient-to-r  via-transparent     to-[lightgray] pb-16  pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: url() }}
      >
        {/* <Image
          src="/images/hero/bg.png"
          fill
          alt="background"
          className="blur"
        /> */}
        <div className="columns-1">
          <div className="-mx-8 flex flex-wrap">
            <div className="w-1/2 px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-start"
                data-wow-delay=".2s"
              >
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
                <div className="w-1/3">
                  <Link
                    href="/signup"
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
      <div className="absolute left-0 top-1/2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="52"
          viewBox="0 0 22 52"
          fill="none"
        >
          <path
            d="M0.697266 201.242L3.60374 9.58332L21.1205 0.0172729L17.3966 245.244L0.697266 201.242Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
