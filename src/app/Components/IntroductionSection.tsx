"use client";

import Image from "next/image";
import { SocialMedias } from "./SocialMedias";
import { Trans, useTranslation } from "react-i18next";

export function IntroductionSection() {
  const { t } = useTranslation();

  return (
    <section className=" p-4 pb-8  w-full bg-zinc-950">
      <div className="flex justify-center">
        <div className="mr-10">
          <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-white">
            Mateus Amaral
          </h1>
          <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-white">
            <Trans t={t}>Desenvolvedor de software Pleno</Trans>
          </h2>

          <p className="text-lg font-normal leading-normal mt-0 mb-2 text-gray-500 w-60">
            <Trans t={t}>
              Estou sempre à procura de melhorar as minhas competências técnicas
              e contribuir para
            </Trans>
            <br />
            <Trans t={t}>
              a melhoria contínua do projeto. Se precisar de um programador
              confiável e experiente, estou disponível para trabalhar em
              conjunto.
            </Trans>
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
