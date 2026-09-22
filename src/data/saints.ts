import type { Saint } from '../engine/types';

export const saints: Saint[] = [
  {
    id: 'francisco-de-assis',
    name: 'São Francisco de Assis',
    title: 'O Pobre de Assis',
    years: '1181 – 1226',
    summary:
      'Filho de um rico mercador, Francisco abandonou riqueza e conforto para viver o Evangelho na pobreza total.',
    status: 'available',
    accentColor: '#8C6B3F',
    chapterId: 'francisco-de-assis',
  },
  {
    id: 'terezinha-de-lisieux',
    name: 'Santa Teresinha do Menino Jesus',
    title: 'A Pequena Via',
    years: '1873 – 1897',
    summary: 'Uma carmelita que descobriu a santidade nos pequenos gestos do dia a dia.',
    status: 'comingSoon',
    accentColor: '#B98B9E',
  },
  {
    id: 'joao-bosco',
    name: 'São João Bosco',
    title: 'Pai e Mestre da Juventude',
    years: '1815 – 1888',
    summary: 'Dedicou a vida à educação e evangelização de jovens pobres e abandonados.',
    status: 'comingSoon',
    accentColor: '#4E7C6B',
  },
  {
    id: 'joana-darc',
    name: 'Santa Joana d’Arc',
    title: 'A Donzela de Orléans',
    years: '1412 – 1431',
    summary: 'Guiada por visões, liderou exércitos com fé inabalável em meio à guerra.',
    status: 'comingSoon',
    accentColor: '#6B7CA8',
  },
];

export function getSaintById(id: string): Saint | undefined {
  return saints.find((saint) => saint.id === id);
}
