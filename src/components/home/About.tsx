import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="/represaFurnas.jpg"
              alt="Foto do Logo"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300"
              priority
            />
          </div>
          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
            <Image
              src="/Qli-Mate App.jpg"
              alt="Foto do Logo"
              fill
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold">SOBRE O PROJETO</h2>
          <p className="text-justify">
            O Qli-Mate, desenvolvido pelo grupo Storm Access da Fatec Jacareí, é
            uma plataforma inovadora projetada para promover a segurança e o
            bem-estar das comunidades ao redor do Lago de Furnas. Tendo como
            base a integração de dados meteorológicos coletados por três
            estações localizadas estrategicamente, o aplicativo oferece uma
            solução robusta para monitoramento climático e prevenção de riscos
            associados a eventos de vento extremo. O principal objetivo do
            Qli-Mate é fornecer aos usuários informações meteorológicas
            detalhadas e confiáveis, apresentadas de maneira visual e acessível,
            além de emitir alertas de segurança em tempo real. A plataforma
            transforma dados complexos em gráficos intuitivos, permitindo que os
            usuários compreendam rapidamente as condições climáticas atuais e
            projeções futuras. Por meio de notificações claras e precisas, o
            aplicativo avisa a população local sobre riscos iminentes aos
            navegantes, como ventos fortes ou mudanças bruscas no clima, o que é
            essencial para reduzir o risco de acidentes, como naufrágios. Além
            de promover a segurança, o Qli-Mate contribui significativamente
            para o desenvolvimento tecnológico, protegendo comunidades e
            atividades econômicas dependentes do lago, como turismo e pesca. Com
            sua interface amigável e funcionalidades avançadas, o aplicativo se
            posiciona como uma ferramenta indispensável para os 34 municípios ao
            redor do Lago de Furnas, fortalecendo a capacidade de resposta da
            população a eventos climáticos extremos e representando um grande
            salto em inovação e utilidade social.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}