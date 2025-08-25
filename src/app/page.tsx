import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';
import Profile from '../../public/d92f9ce9-f518-417c-ac33-ce935ba63f11.png'
import { TypingAnimation } from '@/components/ui/typing-animation';

const socialLinks = [
  { icon: Github, href: 'https://github.com/cilasmiguel-git', 'aria-label': 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/cilas-miguel-cola%C3%A7o-bezerra-0bb3981b6/', 'aria-label': 'LinkedIn' },
  { icon: WhatsappIcon, href: 'https://wa.me/5581986677867', 'aria-label': 'WhatsApp' },
  { icon: Mail, href: 'mailto:cilasmiguelcolacobp@gmail.com', 'aria-label': 'Email' },
];

const descriptionTexts = [
  "Estou estudando para AWS, inclusive para as certificações, e estou atrás de conseguir a Cloud Practitioner.",
  "Sou um desenvolvedor Full-Stack, então eu tenho boas habilidades tanto no frontend como no backend.",
  "Estou aberto para oportunidades de estágio, inclusive para vagas júnior, e realmente amo programar."
];

function ProjectCard({ title, description, imageUrl, imageHint, link, tags }: (typeof projects)[0]) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
      <CardHeader>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
        <CardTitle className="pt-4 font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="px-0">
          <Link href={link}>
            Ver Projeto <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="flex flex-col items-center justify-center space-y-8">
        <section
          className="animate-fade-in-up flex flex-col items-center text-center"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="relative mb-6 h-40 w-40 animate-float overflow-hidden rounded-full border-4 border-primary/50 shadow-2xl">
            <Image
              src={Profile}
              alt="Cilas Miguel"
              fill
              className="object-cover"
              data-ai-hint="professional photograph"
              priority
            />
          </div>
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Cilas Miguel
          </h1>
          <TypingAnimation texts={descriptionTexts} className="mt-4" />
        </section>

        <section
          id="projects"
          className="w-full animate-fade-in-up py-16"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="mb-12 text-center font-headline text-4xl font-bold">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/projects">
                Ver mais projetos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section
          id="contact"
          className="animate-fade-in-up w-full py-16"
          style={{ animationDelay: '0.5s' }}
        >
          <h2 className="mb-8 text-center font-headline text-4xl font-bold">
            Entre em Contato
          </h2>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <Button asChild key={social['aria-label']} variant="outline" size="icon" className="h-14 w-14 rounded-full border-2 hover:bg-accent">
                <Link href={social.href} aria-label={social['aria-label']} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-6 w-6" />
                </Link>
              </Button>
            ))}
          </div>
        </section>

        <footer className="w-full border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cilas Miguel. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
