/* eslint-disable react/no-unescaped-entities */
"use client";

import { images } from "@/app/assets/images";
import { Text, Title } from "@/app/components/elements";
import { SlugIcon } from "@/app/components/elements/SlugIcon";
import Image from "next/image";

export const data = [
  {
    title: "2018 - Now",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Estartando Devs</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.devs}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-scale-down bg-[#161616] !border-black dark:border-white"
          />
        </div>
        <Text>
          O projeto surge com a ideia inicial de ensinar programação à jovens e
          adolescentes do bairro de Guaratiba (zona oeste da cidade do Rio de
          Janeiro), como uma porta de conhecimento e possibilidade de atuação no
          mercado de trabalho. Diante de barreiras socioculturais e financeiras,
          muitos adolescentes limitam sua perspectiva de crescimento
          profissional.
        </Text>
        <Text>
          Iniciei como aluno e, atualmente atuo como mento e instrutor no
          projeto, onde ajudo os participantes a compreender e aplicar conceitos
          fundamentais de Frontend. Meu objetivo é proporcionar um aprendizado
          prático e eficaz, capacitando os participantes a se tornarem
          desenvolvedores competentes e confiantes.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "react",
                "redux",
                "angular",
                "vscode",
                "git",
                "mui",
                "amazonaws",
                "trello",
                "vercel",
                "github",
                "axios",
                "nodedotjs",
                "discord",
                "styledcomponents",
                "figma",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2024",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Love Monster</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.loveMonster}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover  !border-black dark:border-white"
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
                className="w-full h-full min-h-20 min-w-20 lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover !border-black dark:border-white"
              />
            ))}
          </div>
        </div>
        <Text>
          A Love Monster é uma empresa de renome no setor de games Web3. Nosso
          jogo, Love Monster: Arena of Legends, é uma experiência imersiva e
          gratuita de combate estratégico, ambientado em um mundo virtual
          vibrante. Os jogadores participam de batalhas por turnos utilizando
          uma ampla variedade de personagens e elementos. Nesse universo, os
          jogadores podem ganhar e trocar ativos e personagens exclusivos,
          aproveitando nosso inovador sistema de recompensas.
        </Text>
        <Text>
          Atuei como desenvolvedor front-end com foco principal nessa área, mas
          também contribuí significativamente no back-end, especialmente na
          criação de alguns RPCs. No front-end, adotei uma abordagem centrada no
          usuário durante o desenvolvimento de projetos como Dashboard, Mint and
          Claim NFT, Marketplace e Snowdex, sempre priorizando eficiência e
          consistência. Além disso, desenvolvi componentes reutilizáveis para
          garantir uma interface atraente, funcional e de fácil manutenção.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "react",
                "redux",
                "vscode",
                "git",
                "jest",
                "trello",
                "jira",
                "clickup",
                "mui",
                "github",
                "solana",
                "ethereum",
                "axios",
                "avalanche",
                "binance",
                "metamask",
                "nodedotjs",
                "discord",
                "styledcomponents",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Proz</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.proz}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover  !border-black dark:border-white"
          />
        </div>
        <Text>
          A Proz é uma renomada empresa brasileira no setor, educacional. Tive a
          oportunidade contribuindo para a experiência digital de milhares de
          usuários, desde alunos até professores. Utilizando a tecnologia React,
          foquei na criação de componentes reutilizáveis e na modularização da
          interface do usuário.
        </Text>
        <Text>
          Atuei como desenvolvedor, contribuindo para a experiência digital de
          alunos e professores utilizando a tecnologia React. Adotei uma
          abordagem centrada no desenvolvimento web, focando em eficiência e
          consistência. Além da criação de componentes reutilizáveis, integrei
          Styled Components para garantir uma interface atraente e de fácil
          manutenção. Também ampliei meu escopo ao implementar testes unitários,
          adotando práticas como TDD e BDD, fortalecendo a robustez das soluções
          e reforçando meu compromisso com a entrega de software de alta
          qualidade e confiabilidade. Estou entusiasmado para aplicar essas
          habilidades em desafios futuros.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "react",
                "redux",
                "vscode",
                "git",
                "jest",
                "jira",
                "mui",
                "axios",
                "github",
                "nodedotjs",
                "discord",
                "confluence",
                "styledcomponents",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Storm</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.storm}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover bg-[#f2f2f0] !border-black dark:border-white"
          />
        </div>
        <Text>
          A Storm é uma empresa brasileira de Software House e Outsourcing.
        </Text>
        <Text>
          Durante minha experiência na Storm, trabalhei em diversos tipos de
          produtos, o que me permitiu evoluir rapidamente tanto tecnicamente
          quanto profissionalmente. Assumi responsabilidades importantes,
          desenvolvendo soluções de alta qualidade e garantindo que todos os
          requisitos fossem atendidos.
        </Text>
        <Text>
          Além de aprimorar minhas habilidades técnicas, tive um grande
          crescimento em soft skills, aprendendo sobre comunicação eficaz,
          colaboração em equipe e senso de propriedade no desenvolvimento. Fui
          responsável por apresentar semanalmente as novas funcionalidades
          diretamente aos clientes, garantindo alinhamento, transparência e
          satisfação.
        </Text>
        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "react",
                "redux",
                "axios",
                "sass",
                "vscode",
                "git",
                "gitlab",
                "styledcomponents",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="flex flex-col gap-8">
        <Title>TechDog</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.conectEdu}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-scale-down bg-[#f2f2f0] !border-black dark:border-white"
          />
        </div>
        <Text>
          A TechDog Soluções é uma startup brasileira com foco em produtos
          inovadores para a indústria da educação. Tive a oportunidade de
          contribuir para a criação do ConectEdu, uma plataforma completa
          voltada à digitalização da educação, conectando alunos, professores e
          instituições em um ambiente integrado.
        </Text>
        <Text>
          O sistema trouxe melhorias significativas na gestão acadêmica e no
          acesso a conteúdos educacionais, abrangendo diversas funcionalidades
          que garantem uma experiência escolar mais eficiente e envolvente para
          os usuários.
        </Text>
        <Text>
          Atuei no desenvolvimento front-end, aplicando boas práticas para criar
          interfaces intuitivas e acessíveis. Também participei de decisões
          estratégicas que impactaram diretamente a experiência do usuário,
          assegurando uma navegação otimizada. O projeto gerou um impacto
          positivo na educação, facilitando o aprendizado e promovendo a
          colaboração digital entre alunos e professores.
        </Text>
        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "sass",
                "azure",
                "axios",
                "vscode",
                "github",
                "angular",
                "bootstrap",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Inforce</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.logoInforce}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-scale-down bg-[#02060f] !border-black dark:border-white"
          />
        </div>
        <Text>
          A Inforce é uma das principais empresas de tecnologia imobiliária no
          Brasil, liderando a transformação digital do segmento. Com um
          ecossistema robusto e moderno, integra negócios, tecnologia, marketing
          e processos de vendas, oferecendo soluções completas para o mercado
          imobiliário.
        </Text>
        <Text>
          Atuei como arquiteto de soluções e softwares, contribuindo para a
          concepção de novos recursos e soluções, além de manter um
          relacionamento próximo com clientes-chave da empresa. Minhas
          responsabilidades incluíam a priorização de atividades estratégicas
          para garantir a retenção e satisfação desses clientes.
        </Text>
        <Text>
          Fui responsável pelo processo de implementação e parametrização da
          plataforma, personalizando-a para atender às operações específicas de
          cada cliente. No desenvolvimento de soluções, atuei como full-stack
          developer, utilizando Angular no front-end e .NET Core no back-end.
        </Text>
        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "sass",
                "angular",
                "dotnet",
                "vscode",
                "github",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Ímpar</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.logoImpar}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-scale-down bg-white !border-black dark:border-white"
          />

          <div className="grid grid-cols-3 gap-4">
            {[images.logoVale, images.logoPetrobras, images.logoSicredi].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-full lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover !border-black dark:border-white"
                />
              )
            )}
          </div>
        </div>
        <Text>
          A Ímpar é uma empresa brasileira de tecnologia que iniciou suas
          atividades em 2011, focada em soluções Microsoft SharePoint. Desde
          então, evoluiu para se tornar um dos principais parceiros da Microsoft
          em soluções Microsoft 365 e Azure. Atualmente, a Ímpar se dedica a
          melhorar a experiência dos colaboradores por meio da transformação
          digital e cultural, visando gerar resultados positivos para os
          negócios de seus clientes.
        </Text>
        <Text>
          Atuei em uma empresa de tecnologia especializada em soluções Microsoft
          SharePoint, onde participei do desenvolvimento e manutenção de páginas
          estáticas e dinâmicas em ambientes SharePoint 2013, tanto em layouts
          Classic quanto Modern.
        </Text>
        <Text>
          Durante esse período, contribui para a entrega de soluções funcionais
          e otimizadas, sempre seguindo boas práticas de desenvolvimento
          front-end.
        </Text>
        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "javascript",
                "html5",
                "css3",
                "vscode",
                "jquery",
                "sharepoint",
                "teams",
                "azure",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
];

export const dataFreelance = [
  {
    title: "2024",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Visna Viki</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.visna}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-scale-down bg-white !border-black dark:border-white"
          />
        </div>
        <Text>
          A Visna Viki é uma plataforma especializada na gestão de projetos
          imobiliários, que integra funcionalidades essenciais como controle de
          prazos, cálculo de VGV (Valor Geral de Vendas) e gerenciamento
          financeiro. Com relatórios detalhados e exportáveis, a plataforma
          permite aos usuários monitorar fluxos de caixa e cenários de vendas de
          forma eficiente. Além disso, possibilita o cadastro de dados
          cadastrais, como terrenos e unidades, oferecendo uma visão clara e
          organizada dos empreendimentos.
        </Text>
        <Text>
          Como UI/UX Designer e Desenvolvedor Front-End na Visna Viki, fui
          responsável pelo design completo da interface, com foco em criar uma
          experiência intuitiva e fluida. Utilizei React para construir
          componentes modulares e escaláveis, assegurando uma interface de fácil
          manutenção. Também participei ativamente das decisões técnicas no
          back-end e da gestão da equipe utilizando Jira, organizando tarefas,
          distribuindo responsabilidades e colaborando diretamente com os
          clientes para alinhar as entregas às suas necessidades e expectativas.
          No que diz respeito ao CI/CD, inicialmente utilizei a Vercel pela sua
          praticidade e rapidez, mas após o período inicial, migrei para a AWS,
          buscando maior flexibilidade, controle e escalabilidade para a
          plataforma.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "react",
                "redux",
                "vscode",
                "git",
                "mui",
                "amazonaws",
                "jest",
                "jira",
                "vercel",
                "github",
                "axios",
                "nodedotjs",
                "discord",
                "styledcomponents",
                "figma",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020 - 2021",
    content: (
      <div className="flex flex-col gap-8">
        <Title>You Pluv</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.youpluv}
            alt="Startup template"
            className="w-full h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover !border-black dark:border-white"
          />
        </div>
        <Text>
          Este aplicativo móvel foi desenvolvido com o objetivo de otimizar a
          coleta de dados pluviométricos para a Defesa Civil do Rio de Janeiro,
          com foco na prevenção de desastres naturais. A plataforma permite que
          cidadãos comuniquem informações sobre chuvas e riscos em suas regiões,
          colaborando ativamente com a monitorização ambiental.
        </Text>
        <Text>
          Fui responsável pela implementação de diversas funcionalidades, como a
          criação de componentes para o registro de medições pluviométricas,
          incluindo a integração com geolocalização, proporcionando uma coleta
          de dados precisa e em tempo real.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "expo",
                "vscode",
                "git",
                "trello",
                "github",
                "axios",
                "discord",
                "formik",
                "google",
                "firebase",
                "styledcomponents",
                "figma",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
];

export const dataHackathons = [
  {
    title: "2022",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Turtle - 1º lugar HackingHelp</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.turtle01}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-cover  !border-black dark:border-white"
          />

          <div className="grid grid-cols-3 gap-4">
            {[images.turtle02, images.turtle03, images.turtle04].map(
              (src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-full min-h-20 min-w-20 lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover !border-black dark:border-white"
                />
              )
            )}
          </div>
        </div>
        <Text>
          O projeto Tartaruga tem como intuito unir tecnologia e natureza de
          forma simbiótica, trazendo a natureza para o mundo digital e levando a
          tecnologia para dentro da natureza. Essa união tem como base promover
          a preservação e criar uma interação entre humanos e animais marinhos.
          Com tecnologias de reconhecimento de imagem e mapeamento de
          geolocalização, estamos criando um aplicativo que irá permitir que
          qualquer pessoa possa identificar por meio de imagem, animais como
          tartarugas, sem que haja interferência em seu habitat, criando uma
          aproximação sustentável entre animais e pessoas.
        </Text>
        <Text>
          Para isso, utilizamos tecnologias de reconhecimento de imagem e
          mapeamento de geolocalização para criar um aplicativo inovador. A
          plataforma permite a identificação das tartarugas por meio de fotos,
          tornando o processo de catalogação acessível e sem impacto no meio
          ambiente. Além disso, uma das descobertas fascinantes que surgiram
          durante o projeto foi que o desenho encontrado na parte superior da
          cabeça das tartarugas é como uma digital única, com marcas exclusivas
          para cada indivíduo, o que nos permitiu criar um banco de dados único
          para cada tartaruga identificada.
        </Text>
        <Text>
          No desenvolvimento da aplicação, usamos React (Vite) como framework
          principal, Typescript para garantir tipagem estática e maior segurança
          no código, e Styled Components para gerenciar os estilos da interface.
          A automação de criação de componentes foi feita com Plop, e o código
          foi versionado via Git, enquanto os testes foram realizados com Jest
          para garantir a qualidade e confiabilidade da aplicação. Esse projeto
          representa a convergência entre inovação tecnológica e respeito à
          natureza, promovendo uma forma mais sustentável de interação com os
          animais marinhos.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "typescript",
                "react",
                "redux",
                "vscode",
                "git",
                "mui",
                "jest",
                "vercel",
                "github",
                "axios",
                "discord",
                "styledcomponents",
                "figma",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="flex flex-col gap-8">
        <Title>Area 51 - 2º lugar HackingHelp</Title>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src={images.area51}
            alt="Startup template"
            className="w-full min-h-[400px] h-auto lg:max-w-[920px] lg:max-h-[400px] border-2 rounded-2xl object-scale-down object-left bg-white !border-black dark:border-white"
          />
        </div>
        <Text>
          Desenvolvemos a solução "Onde Tem Leito?" com o objetivo de resolver
          um dos maiores desafios impostos pela crise causada pela pandemia de
          COVID-19: a dificuldade de pacientes e profissionais de emergência em
          localizar leitos disponíveis. A plataforma foi criada para fornecer
          informações em tempo real sobre a disponibilidade de leitos em
          hospitais, facilitando o acesso rápido e eficiente a essa informação
          crucial.
        </Text>
        <Text>
          Para isso, utilizamos a Google Maps API para integrar a localização
          dos hospitais, permitindo que os usuários visualizassem em um mapa
          interativo as unidades de saúde mais próximas, com informações sobre a
          disponibilidade de leitos. Além disso, adotamos diversas outras
          tecnologias para garantir a eficiência e a usabilidade da aplicação,
          como Material-UI para o design da interface, Styled-Components para o
          gerenciamento de estilos, React.js como framework principal, e Redux
          para o gerenciamento de estado global. O código-fonte foi versionado e
          gerido via GitHub, e a automação da criação de componentes foi feita
          utilizando o Plop.
        </Text>
        <Text>
          Essas tecnologias foram fundamentais para a criação de uma plataforma
          ágil, acessível e fácil de usar, que impactou positivamente na gestão
          da crise, ajudando a salvar vidas.
        </Text>

        <div className="flex flex-col w-full max-w-5xl gap-[10px] h-auto">
          <Text>Tecnologias:</Text>
          <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
            <SlugIcon
              slugs={[
                "html5",
                "css3",
                "javascript",
                "react",
                "redux",
                "vscode",
                "git",
                "mui",
                "github",
                "axios",
                "discord",
                "styledcomponents",
                "figma",
                "google",
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
];
