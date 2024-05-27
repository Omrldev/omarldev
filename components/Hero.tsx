import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="#home"
      className="w-full bg-gray-50 h-screen border-blue-500 border-2"
    >
      <div className="border-red-500 border-2 flex-1 pt-20">
        <Image
          src="/assets/images/hero.png"
          alt="hero"
          width={280}
          height={150}
          className="bg-cover shadow-lg"
        />

        <div className="flex-center flex-col px-10 text-center">
          <h1 className="text-4xl font-bold">
            <span className="md:block">Front-End Next.js</span> Developer
          </h1>
          <p className="text-lg">
            <span className="lg:block text-xl">
              Hola! Soy Omar Ledesma, desarrollador Front-end Junior
            </span>{" "}
            establecido en Madrid, España. 📍
          </p>
        </div>

        <div className="flex-center gap-3 mt-11">
          <Link
            href={"https://www.linkedin.com/in/omar-ledesma-dev/"}
            target="_blank"
            className="hover:text-blue-500"
          >
            <CiLinkedin size={28} />
          </Link>

          <Link
            href={"https://github.com/Omrldev"}
            target="_blank"
            className="hover:text-blue-500 duration-700"
          >
            <FiGithub size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
