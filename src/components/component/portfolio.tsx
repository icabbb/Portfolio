"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useEffect, useState } from "react"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Modal from 'react-modal';

const stacks = [
  {
    name: "Nextjs",
    logo: "/nextjs.svg",
  },
  {
    name: "Node.js",
    logo: "/nodej.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/postgresql.png",
  },
  {
    name: "Tailwind CSS",
    logo: "/tailwind.png",

  },
  {
    name: "Git",
    logo: "/git.png",
  },
  {
    name: "Python",
    logo: "/python.png",
  },
  {
    name: "HTML",
    logo: "/html5.svg",
  },
  {
    name: "CSS",
    logo: "/css.svg",
  }
];

const projects = [
  {
    name: "Project 1",
    link: "A brief description of the project.",
    image: "/mineral.png",
  },
  {
    name: "Project 2",
    description: "A brief description of the project.",
    image: "/placeholder.svg",
  },
  {
    name: "Project 3",
    description: "A brief description of the project.",
    image: "/placeholder.svg",
  },
]

export function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const comprobantesSection = document.getElementById('stacks');

      if (comprobantesSection) {
        const sectionTop = comprobantesSection.offsetTop;
        const sectionHeight = comprobantesSection.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const opacity = 1 - (scrollPosition - sectionTop) / sectionHeight;
          const imgElement = comprobantesSection.querySelector('img');
          if (imgElement) {
            imgElement.style.opacity = opacity.toString();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <main className="flex-1">
        <section
          className="flex flex-col items-center justify-center gap-4 px-4 py-12 md:py-24 lg:py-32 xl:py-48"
          id="hero"
        >
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Eduardo Cardoso M.</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Desarrollador de software.
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <Link href="https://github.com/icabbb">
              <AiFillGithub className="w-12 h-12 hover:scale-125 transition-transform duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/eduardo-cardoso-martinez-2a0318252/">
              <AiFillLinkedin className="w-12 h-12 hover:scale-125 transition-transform duration-300" />
            </Link>
          </div>

        </section>
        <section className="py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quien soy?</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Soy desarrollador de software con experiencia en tecnologías modernas. Me apasiona la inteligencia artificial y como esta se relaciona con la programación.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Todo lo que he aprendido ha sido de forma autodidacta, ademas de que siempre estoy en constante aprendizaje y buscando nuevas oportunidades. Me gusta trabajar en equipo y aprender de los demás como tambien que los demas aprendan de mi.
                </p>
              </div>
              <div>
                <img
                  alt="John Doe"
                  className="mx-auto rounded-lg object-cover"
                  height={500}
                  src="/profile.jpg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/fondos.webp')" }} id="stacks">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Tecnologias</div>
                <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl text-white">Con las cuales trabajo</h2>
              </div>
            </div>
            <div className="mt-10">
              <InfiniteMovingCards
                items={stacks}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Proyectos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">En los que me encuentro trabajando</h2>
              </div>
            </div>
            <div className="grid gap-6 md:gap-8 lg:grid-cols-3 mt-10">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="https://reservas-khaki.vercel.app/login">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Project 1"
                  className="rounded-lg object-cover w-full aspect-video group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/mineral.png"
                  width={400}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight text-center">Es una demo para una empresa de vuelos</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400 p-2">
                    Esta hecha con Nextjs y Tailwind CSS, ademas de Prisma con PostgreSQL y Next-Auth para la autenticación.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  alt="Project 2"
                  className="rounded-lg object-cover w-full aspect-video group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/Img 1.png"
                  width={400}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight text-center">SxllAcc</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400 p-2">
                    Este es un proyecto personal el cual esta en desarrollo y por lo tanto no es de codigo abierto, esta hecho con Nextjs, Tailwind CSS y Supabase para el tema de Auth y Base de datos.
                  </p>

                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="https://pelisecm.vercel.app/">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Project 2"
                  className="rounded-lg object-cover w-full aspect-video group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/pelis.png"
                  width={400}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight text-center">MoviesECM</h3>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400 p-2">
                    Este es una app de peliculas en la cual consulta a la api de The Movie Database, esta hecha con Nextjs y tailwindcss.
                  </p>
                </div>

              </div>
            </div>
          </div>


        </section>
      </main>
      <footer className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ECM . Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
