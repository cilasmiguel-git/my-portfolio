import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';

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

export default function ProjectsPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-12">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </Button>
      </div>
      <h1 className="mb-12 text-center font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Todos os Projetos
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
       <footer className="w-full border-t border-border/50 pt-8 mt-16 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cilas Miguel. Todos os direitos reservados.</p>
        </footer>
    </main>
  );
}
