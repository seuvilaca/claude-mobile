import type { Virtue, VirtueId } from '../engine/types';

export const virtues: Record<VirtueId, Virtue> = {
  humildade: {
    id: 'humildade',
    name: 'Humildade',
    icon: '🕊️',
    description: 'Reconhecer que tudo o que temos vem de Deus.',
  },
  pobreza: {
    id: 'pobreza',
    name: 'Pobreza',
    icon: '🤍',
    description: 'Desapegar-se dos bens materiais para servir a Deus e ao próximo.',
  },
  caridade: {
    id: 'caridade',
    name: 'Caridade',
    icon: '❤️',
    description: 'Amar e servir aos mais necessitados.',
  },
  coragem: {
    id: 'coragem',
    name: 'Coragem',
    icon: '🔥',
    description: 'Seguir a vontade de Deus mesmo diante do medo ou da oposição.',
  },
  oracao: {
    id: 'oracao',
    name: 'Oração',
    icon: '🙏',
    description: 'Buscar a Deus em silêncio e confiança constante.',
  },
  perdao: {
    id: 'perdao',
    name: 'Perdão',
    icon: '✨',
    description: 'Perdoar como fomos perdoados.',
  },
};

export const virtueList = Object.values(virtues);
