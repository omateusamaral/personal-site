"use client";

import Image from "next/image";
import { SocialMedias } from "./SocialMedias";

export function IntroductionSection() {
  return (
    <section className=" p-4 pb-8  w-full bg-zinc-950">
      <div className="flex justify-center">
        <div className="mr-10">
          <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-white">
            Mateus Amaral
          </h1>
          <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-white">
            Software engineer at{" "}
            <a
              href="https://opencircle.com.br/"
              className="font-medium text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Circle
            </a>
          </h2>

          <p className="text-lg font-normal leading-normal mt-0 mb-2 text-gray-500 w-60">
            I am always looking to improve my technical skills and contribute to
            <br />
            the continuous improvement of the project. If you need a reliable
            and experienced developer, I am available to work together.
          </p>
          <div className="lg:flex flex-grow  justify-start">
            <SocialMedias />
          </div>
        </div>
        <div>
          <Image
            className="rounded sm:hidden md:block"
            src="/me2.jpeg"
            width={400}
            height={300}
            style={{
              borderTopRightRadius: "20%",
              borderBottomRightRadius: "20%",
              borderBottomLeftRadius: "20%",
            }}
            alt="Extra large avatar"
          />
        </div>
      </div>
    </section>
  );
}
