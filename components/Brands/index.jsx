"use client";
import { Group, Text } from "@mantine/core";
import Image from "next/image";

const brandsData = [
  {
    id: 1,
    name: "Datalabs",
    href: "https://uideck.com",
    image: "/images/brands/image 2.png",
  },
  {
    id: 2,
    name: "Tera Technologies",
    href: "https://tailgrids.com",
    image: "/images/brands/5e2e24a45448698291edcbe0f2ff8f70 1.png",
  },
  {
    id: 3,
    name: "Tigo",
    href: "https://lineicons.com",
    image: "/images/brands/image 2 (1).png",
  },
];

const Brands = () => {
  return (
    <section className="pb-16 pt-16" style={{ backgroundColor: "#FBFBFB" }}>
      <Group position="center">
        <Text color="#101010" fw={500} fz={40}>
          Our <span style={{ color: "#1545B3" }}>Patners </span>
        </Text>
      </Group>
      <div className="container">
        <div className="-mx-1 flex flex-wrap">
          <div className="w-full px-1">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-between rounded-md bg-[#FBFBFB] px-8 py-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = (props) => {
  const { href, image, name } = props.brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-between py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image sizes="400" src={image} alt={name} fill />
      </a>
    </div>
  );
};
