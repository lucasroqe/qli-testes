import { CloudLightning, Bell, BarChart, Anchor } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <>
      <section className="py-16">
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
                  src="/qli-mate-app.jpg"
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
                Qli-Mate é uma plataforma desenvolvida pelo grupo Storm Access
                da Fatec Jacareí para promover a segurança e o bem-estar das
                comunidades ao redor do Lago de Furnas. Integrando dados de três
                estações meteorológicas, o app fornece informações climáticas
                confiáveis e alertas em tempo real sobre ventos extremos. Com
                visualizações intuitivas e notificações precisas, o Qli-Mate
                ajuda a prevenir acidentes náuticos e apoia atividades
                econômicas como turismo e pesca. Sua interface amigável e foco
                na prevenção fazem dele uma ferramenta essencial para os 34
                municípios da região.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Principais Funcionalidades
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                O Qli-Mate oferece ferramentas essenciais para monitoramento
                climático e segurança ao redor do Lago de Furnas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CloudLightning className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Monitoramento Climático</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Coleta de dados em tempo real de três estações meteorológicas
                  estrategicamente posicionadas ao redor do Lago de Furnas,
                  fornecendo informações meteorológicas precisas e oportunas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Bell className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Alertas em Tempo Real</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Notificações imediatas sobre condições climáticas perigosas,
                  ajudando a prevenir acidentes e garantindo a segurança de
                  navegantes e comunidades locais.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <BarChart className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Representação Visual de Dados</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dados meteorológicos complexos transformados em visualizações
                  intuitivas, facilitando a compreensão das condições atuais e
                  previsões pelos usuários.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Anchor className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Proteção Comunitária</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Apoio a 34 municípios ao redor do Lago de Furnas, protegendo
                  atividades econômicas como turismo e pesca por meio de maior
                  conscientização e segurança climática.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
