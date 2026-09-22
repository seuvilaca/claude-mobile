import type { Chapter } from '../../engine/types';

export const franciscoDeAssis: Chapter = {
  id: 'francisco-de-assis',
  title: 'São Francisco de Assis: O Pobre de Cristo',
  saintId: 'francisco-de-assis',
  startSceneId: 'intro',
  scenes: {
    intro: {
      id: 'intro',
      speaker: 'Narrador',
      text:
        'Assis, Itália, início do século XIII. Francesco Bernardone é filho de um rico mercador de tecidos. Adora festas, poesia e sonha em tornar-se um grande cavaleiro.',
      backgroundTone: 'town',
      next: 'guerra',
    },
    guerra: {
      id: 'guerra',
      speaker: 'Narrador',
      text:
        'Quando estoura a guerra entre Assis e a vizinha Perúgia, Francesco parte para a batalha vestindo a melhor armadura que o dinheiro do pai pode comprar.',
      backgroundTone: 'forest',
      next: 'prisao',
    },
    prisao: {
      id: 'prisao',
      speaker: 'Narrador',
      text:
        'Assis é derrotada. Francesco é capturado e passa quase um ano preso em um cárcere de Perúgia, à espera de resgate. Ali, a febre e o silêncio começam a mudar algo dentro dele.',
      backgroundTone: 'night',
      next: 'convalescenca',
    },
    convalescenca: {
      id: 'convalescenca',
      speaker: 'Francesco',
      text:
        '"Voltei para casa, mas já não sou o mesmo. As festas já não me alegram. Sinto que algo — ou Alguém — me chama, e eu não sei ainda para onde."',
      backgroundTone: 'dawn',
      next: 'visao_damiao',
    },
    visao_damiao: {
      id: 'visao_damiao',
      speaker: 'Narrador',
      text:
        'Certo dia, orando diante do crucifixo na pequena e arruinada igreja de São Damião, Francesco ouve uma voz: "Francisco, vai e repara a minha casa, que como vês está em ruínas."',
      backgroundTone: 'chapel',
      choices: [
        {
          text: '"Assim farei, Senhor — custe o que custar."',
          next: 'pano_do_pai',
          virtueAward: 'coragem',
        },
        {
          text: 'Ficar em silêncio, meditando longamente sobre o chamado.',
          next: 'pano_do_pai',
          virtueAward: 'oracao',
        },
      ],
    },
    pano_do_pai: {
      id: 'pano_do_pai',
      speaker: 'Narrador',
      text:
        'Tomando o pedido ao pé da letra, Francesco vende panos da loja do pai e o próprio cavalo para ajudar o padre de São Damião a reconstruir a capela. Seu pai, Pietro, enfurece-se com o "desperdício".',
      backgroundTone: 'town',
      virtueAward: 'pobreza',
      next: 'diante_do_bispo',
    },
    diante_do_bispo: {
      id: 'diante_do_bispo',
      speaker: 'Pietro Bernardone',
      text:
        'Furioso, Pietro arrasta o filho diante do bispo de Assis, exigindo de volta cada moeda gasta. Diante de todos, Francesco decide como responder.',
      backgroundTone: 'town',
      choices: [
        {
          text: 'Devolver em silêncio tudo o que tem — até as roupas do corpo.',
          next: 'entre_leprosos',
          virtueAward: 'humildade',
        },
        {
          text: 'Declarar em voz alta: "De agora em diante, só direi: Pai nosso que estás nos céus!"',
          next: 'entre_leprosos',
          virtueAward: 'coragem',
        },
      ],
    },
    entre_leprosos: {
      id: 'entre_leprosos',
      speaker: 'Narrador',
      text:
        'Livre de tudo, Francesco vai morar entre os mais rejeitados de Assis: os leprosos, que antes lhe causavam repulsa. Um dia encontra um deles no caminho.',
      backgroundTone: 'forest',
      choices: [
        {
          text: 'Descer do cavalo e beijar as mãos do leproso.',
          next: 'primeiros_companheiros',
          virtueAward: 'caridade',
        },
        {
          text: 'Ajoelhar-se para lavar e cuidar de suas feridas.',
          next: 'primeiros_companheiros',
          virtueAward: 'caridade',
        },
      ],
    },
    primeiros_companheiros: {
      id: 'primeiros_companheiros',
      speaker: 'Narrador',
      text:
        'A simplicidade radiante de Francesco atrai os primeiros seguidores: Bernardo, um rico comerciante, e Egídio, um lavrador. Juntos, vivem do trabalho das mãos e da esmola, pregando paz e penitência pelas estradas.',
      backgroundTone: 'dawn',
      next: 'aprovacao_papa',
    },
    aprovacao_papa: {
      id: 'aprovacao_papa',
      speaker: 'Narrador',
      text:
        'Em Roma, o Papa Inocêncio III recebe o pequeno grupo maltrapilho. Diz-se que, na noite anterior, sonhara com um homem pobre sustentando a Basílica de Latrão prestes a desabar. Reconhece nele o próprio Francesco, e aprova a nova forma de vida.',
      backgroundTone: 'chapel',
      next: 'sermao_aves',
    },
    sermao_aves: {
      id: 'sermao_aves',
      speaker: 'Narrador',
      text:
        'Já conhecido por seu amor a toda a criação, Francesco para certo dia diante de um bando de pássaros à beira da estrada.',
      backgroundTone: 'forest',
      choices: [
        {
          text: '"Irmãs aves, louvai ao Criador que vos veste de penas e vos dá o céu para voar!"',
          next: 'presepio_greccio',
          virtueAward: 'oracao',
        },
        {
          text: 'Chamar seus companheiros para juntos contemplarem a bondade de Deus na criação.',
          next: 'presepio_greccio',
          virtueAward: 'humildade',
        },
      ],
    },
    presepio_greccio: {
      id: 'presepio_greccio',
      speaker: 'Narrador',
      text:
        'No Natal de 1223, na vila de Greccio, Francesco monta uma manjedoura com feno, um boi e um jumento diante da qual celebra a Missa. Nasce assim o primeiro presépio vivo da história, para que todos "vejam com os olhos do corpo" a pobreza do Menino Jesus.',
      backgroundTone: 'night',
      next: 'estigmas_alverne',
    },
    estigmas_alverne: {
      id: 'estigmas_alverne',
      speaker: 'Narrador',
      text:
        'Dois anos depois, em retiro no Monte Alverne, Francesco tem uma visão de Cristo crucificado. Ao final da oração, seu corpo traz as marcas dos cravos e da lança — os primeiros estigmas conhecidos na história da Igreja.',
      backgroundTone: 'night',
      choices: [
        {
          text: 'Aceitar a dor em silêncio, como sinal de união com Cristo sofredor.',
          next: 'cantico_sol',
          virtueAward: 'coragem',
        },
        {
          text: 'Oferecer o sofrimento em oração contínua, sem se queixar a ninguém.',
          next: 'cantico_sol',
          virtueAward: 'oracao',
        },
      ],
    },
    cantico_sol: {
      id: 'cantico_sol',
      speaker: 'Francesco',
      text:
        'Já quase cego e doente, Francesco compõe o Cântico das Criaturas: "Louvado sejas, meu Senhor, com todas as tuas criaturas, especialmente o meu irmão Sol... e por nossa irmã, a Lua e as estrelas."',
      backgroundTone: 'dawn',
      next: 'morte_transito',
    },
    morte_transito: {
      id: 'morte_transito',
      speaker: 'Narrador',
      text:
        'Em outubro de 1226, sentindo a morte se aproximar, Francesco pede para ser deitado nu sobre a terra, como veio ao mundo. Antes de partir, tem uma última coisa a fazer.',
      backgroundTone: 'night',
      choices: [
        {
          text: 'Perdoar, de coração, a todos que o feriram ou o decepcionaram.',
          next: 'final',
          virtueAward: 'perdao',
        },
        {
          text: 'Agradecer a Deus, um a um, por cada companheiro e cada dia vivido.',
          next: 'final',
          virtueAward: 'perdao',
        },
      ],
    },
    final: {
      id: 'final',
      speaker: 'Narrador',
      text:
        'Francesco morre cantando, acolhendo a morte como "irmã". Menos de dois anos depois, é canonizado. Ainda hoje, milhões o recordam como o santo da simplicidade, da paz e do amor por toda a criação de Deus.\n\nSua vida pergunta a cada um de nós: o que eu possuo, que na verdade me possui?',
      backgroundTone: 'dawn',
      isEnding: true,
    },
  },
};
