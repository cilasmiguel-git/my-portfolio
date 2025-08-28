import img3 from '../../public/image.png';
import type { StaticImageData } from 'next/image';

type Project = {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageHint: string;
  link: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: 'Portfolio Pessoal',
    description: 'Meu portfolio pessoal para mostrar minhas habilidades e projetos. Desenvolvido com Next.js, TypeScript e Tailwind CSS para uma experiência de usuário moderna e responsiva.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=600x400',
    imageHint: 'developer portfolio',
    link: 'https://github.com/cilasmiguel-git/meu-portfolio',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Sistema de E-commerce',
    description: 'Uma plataforma de e-commerce completa com carrinho de compras, integração de pagamentos e painel de administração. Construído com React, Node.js e MongoDB.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=600x400',
    imageHint: 'online store',
    link: 'https://github.com/cilasmiguel-git/ecommerce-fullstack',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Educação Alternativa 360',
    description: 'Um aplicativo simples que mostra a previsão do tempo em tempo real para qualquer cidade, utilizando a API do OpenWeatherMap.',
    imageUrl: img3,
    imageHint: 'weather app',
    link: 'https://github.com/cilasmiguel-git/app-clima',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Rest'],
  },
  {
    title: 'Clone do Netflix',
    description: 'Um clone da interface do Netflix para praticar habilidades de frontend, com busca de filmes e exibição de trailers. Feito com React e a API do The Movie Database (TMDb).',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=600x400',
    imageHint: 'movie streaming',
    link: 'https://github.com/cilasmiguel-git/clone-netflix',
    tags: ['React', 'API', 'CSS'],
  },
  {
    title: 'API de Gerenciamento de Tarefas',
    description: 'Uma API RESTful para um aplicativo de lista de tarefas (To-Do), permitindo criar, ler, atualizar e deletar tarefas, com autenticação de usuário.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=600x400',
    imageHint: 'task management',
    link: 'https://github.com/cilasmiguel-git/api-tarefas',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
  },
  {
    title: 'Blog Pessoal',
    description: 'Uma plataforma de blog com painel de administração para criar e gerenciar posts. Desenvolvido com Next.js e Markdown para uma publicação de conteúdo simples e rápida.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=600x400',
    imageHint: 'personal blog',
    link: 'https://github.com/cilasmiguel-git/meu-blog',
    tags: ['Next.js', 'Markdown', 'React'],
  },
];
