"use client";

import { images } from "@/app/assets/images";
import { Text } from "@/app/components/elements";
import Image from "next/image";

export const data = [
  {
    title: "2024",
    content: (
      <div>
        <Text className="mb-8">
          A Love Monster é uma empresa de renome no setor de games Web3. Nosso
          jogo, Love Monster: Arena of Legends, é uma experiência imersiva e
          gratuita de combate estratégico, ambientado em um mundo virtual
          vibrante. Os jogadores participam de batalhas por turnos utilizando
          uma ampla variedade de personagens e elementos. Nesse universo, os
          jogadores podem ganhar e trocar ativos e personagens exclusivos,
          aproveitando nosso inovador sistema de recompensas.
        </Text>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.loveMonster}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover border-white"
          />

          <div className="grid grid-cols-3 gap-4">
            {[
              images.marketplaceProject,
              images.mainWebsiteLovemonster,
              images.zombieCollectionLovemonster,
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full min-h-20 min-w-20 lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover border-white"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <Text className="mb-8">
          O projeto surge com a ideia inicial de ensinar programação à jovens e
          adolescentes do bairro de Guaratiba (zona oeste da cidade do Rio de
          Janeiro), como uma porta de conhecimento e possibilidade de atuação no
          mercado de trabalho. Diante de barreiras socioculturais e financeiras,
          muitos adolescentes limitam sua perspectiva de crescimento
          profissional.
        </Text>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.devs}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover border-white"
          />

          <div className="grid grid-cols-3 gap-4">
            {[images.devs, images.devs, images.devs].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover border-white"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <Text className="mb-8">
          A TechDog Soluções é uma startup brasileira com foco em produtos
          inovadores para a indústria da educação. Tive a oportunidade de
          contribuir para a criação do ConectEdu, uma plataforma completa
          voltada à digitalização da educação, conectando alunos, professores e
          instituições em um ambiente integrado.
        </Text>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.conectEdu}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover border-white"
          />

          <div className="grid grid-cols-3 gap-4">
            {[images.conectEdu, images.conectEdu, images.conectEdu].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-full lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover border-white"
                />
              )
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <Text className="mb-8">
          A Proz é uma renomada empresa brasileira no setor, educacional. Tive a
          oportunidade contribuindo para a experiência digital de milhares de
          usuários, desde alunos até professores. Utilizando a tecnologia React,
          foquei na criação de componentes reutilizáveis e na modularização da
          interface do usuário.
        </Text>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.proz}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover border-white"
          />

          <div className="grid grid-cols-3 gap-4">
            {[images.proz, images.proz, images.proz].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover border-white"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];
