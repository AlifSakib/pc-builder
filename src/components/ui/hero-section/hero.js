import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Image from "next/image";
import hero_image from "../../../assets/hero/hero.jpg";

const features = [
  {
    name: "Unleash Your Creativity: Custom PC Building Made Easy",
    description:
      "At PC Build Genie, we believe that every computer is as unique as its user. Our mission is to empower you with the knowledge, tools, and resources to create a custom-built PC that perfectly aligns with your requirements. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Expert Guidance at Your Fingertips",
    description:
      "Building a PC can be both exciting and challenging, but fear not! Our team of expert tech enthusiasts has crafted an extensive collection of guides, tutorials, and in-depth articles to assist you at every step. ",
    icon: LockClosedIcon,
  },
  {
    name: "Explore a Vast Selection of Top-Tier Components",
    description:
      "At PC Build Genie, we curate a handpicked selection of the latest and most reliable PC components from leading manufacturers.",
    icon: ServerIcon,
  },
];

export default function Hero() {
  return (
    <header class="bg-white dark:bg-gray-900">
      <div class="container flex flex-col  py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
            <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          </div>

          <div class="max-w-lg lg:mx-12 lg:order-2">
            <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              The best Apple Watch apps
            </h1>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
              asperiores alias vero magnam recusandae adipisci ad vitae
              laudantium quod rem voluptatem eos accusantium cumque.
            </p>
            <div class="mt-6">
              <a
                href="#"
                class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
              >
                Download from App Store
              </a>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <Image
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src={hero_image}
            alt="apple watch photo"
          />
        </div>
      </div>
    </header>
  );
}
