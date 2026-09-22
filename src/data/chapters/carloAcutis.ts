import type { Chapter } from '../../engine/types';

export const carloAcutis: Chapter = {
  id: 'carlo-acutis',
  title: 'São Carlo Acutis: O Influencer de Deus',
  saintId: 'carlo-acutis',
  startSceneId: 'intro',
  scenes: {
    intro: {
      id: 'intro',
      speaker: 'Narrador',
      text:
        'Londres, 1991. Carlo Acutis nasce em uma família italiana e, ainda bebê, se muda com os pais para Milão. Ninguém imagina que aquele menino se tornará, décadas depois, o primeiro santo da geração da internet.',
      backgroundTone: 'town',
      next: 'fe_precoce',
    },
    fe_precoce: {
      id: 'fe_precoce',
      speaker: 'Narrador',
      text:
        'Diferente dos pais, que não praticavam muito a fé, Carlo, ainda criança, pede à babá para ser levado à missa todos os dias. Com o tempo, é ele quem começa a levar a própria família de volta à Igreja.',
      backgroundTone: 'chapel',
      next: 'primeira_comunhao',
    },
    primeira_comunhao: {
      id: 'primeira_comunhao',
      speaker: 'Carlo',
      text:
        '"A Eucaristia é a minha autoestrada para o céu." Aos 7 anos, Carlo recebe a Primeira Comunhão e, a partir daquele dia, nunca mais deixa de participar da missa diariamente.',
      backgroundTone: 'chapel',
      virtueAward: 'oracao',
      next: 'dom_dos_computadores',
    },
    dom_dos_computadores: {
      id: 'dom_dos_computadores',
      speaker: 'Narrador',
      text:
        'Curioso e autodidata, Carlo aprende sozinho a programar e criar sites ainda criança — um verdadeiro talento para a informática, algo raro em sua época. Ele decide como vai usar esse dom.',
      backgroundTone: 'town',
      choices: [
        {
          text: 'Criar sites e ajudar de graça as paróquias e grupos de catequese da região.',
          next: 'limite_das_telas',
          virtueAward: 'humildade',
        },
        {
          text: 'Editar vídeos e animações para ensinar a fé aos amigos de um jeito divertido.',
          next: 'limite_das_telas',
          virtueAward: 'caridade',
        },
      ],
    },
    limite_das_telas: {
      id: 'limite_das_telas',
      speaker: 'Carlo',
      text:
        'Apesar de amar tecnologia e videogames, Carlo impõe a si mesmo um limite rígido: no máximo uma hora por semana de tela para diversão. "As pessoas nascem originais, mas muitas morrem como fotocópias", costuma dizer aos amigos.',
      backgroundTone: 'town',
      next: 'amizade_com_pobres',
    },
    amizade_com_pobres: {
      id: 'amizade_com_pobres',
      speaker: 'Narrador',
      text:
        'Nas ruas de Milão, Carlo reconhece um morador de rua que vê todos os dias a caminho da escola. Também percebe um colega de classe sendo motivo de piada por causa de uma deficiência.',
      backgroundTone: 'town',
      choices: [
        {
          text: 'Usar sua mesada para comprar um saco de dormir e alimento para o morador de rua.',
          next: 'milagres_eucaristicos',
          virtueAward: 'caridade',
        },
        {
          text: 'Sentar-se ao lado do colega ridicularizado e defendê-lo publicamente dos colegas.',
          next: 'milagres_eucaristicos',
          virtueAward: 'caridade',
        },
      ],
    },
    milagres_eucaristicos: {
      id: 'milagres_eucaristicos',
      speaker: 'Narrador',
      text:
        'Já adolescente, Carlo tem uma ideia: usar seus conhecimentos de informática para catalogar, pesquisar e divulgar os milagres eucarísticos reconhecidos pela Igreja ao redor do mundo. Passa os últimos anos de vida montando um site e uma exposição itinerante sobre o tema.',
      backgroundTone: 'chapel',
      virtueAward: 'oracao',
      next: 'exposicao_mundo',
    },
    exposicao_mundo: {
      id: 'exposicao_mundo',
      speaker: 'Narrador',
      text:
        'A exposição que Carlo criou viajaria, nos anos seguintes, por milhares de paróquias em mais de 20 países — muito depois de sua morte, ainda ajudando pessoas a redescobrir a fé na Eucaristia.',
      backgroundTone: 'dawn',
      next: 'vida_normal',
    },
    vida_normal: {
      id: 'vida_normal',
      speaker: 'Narrador',
      text:
        'Apesar da fé intensa, Carlo é um adolescente como outro qualquer: gosta de videogames, futebol, música e do seu cachorro. Amigos o descrevem como alegre, engraçado e gente boa — nunca como alguém estranho ou distante.',
      backgroundTone: 'town',
      next: 'diagnostico',
    },
    diagnostico: {
      id: 'diagnostico',
      speaker: 'Narrador',
      text:
        'Em outubro de 2006, aos 15 anos, Carlo começa a se sentir mal. Em poucos dias, os médicos descobrem uma leucemia agressiva. A doença avança rápido, e ele é internado às pressas.',
      backgroundTone: 'hospital',
      next: 'oferta_do_sofrimento',
    },
    oferta_do_sofrimento: {
      id: 'oferta_do_sofrimento',
      speaker: 'Carlo',
      text:
        'Mesmo com dores e sabendo do que se passava, Carlo decide como vai viver os dias que lhe restam.',
      backgroundTone: 'hospital',
      choices: [
        {
          text: 'Oferecer o sofrimento com coragem, unindo a própria dor à cruz de Cristo.',
          next: 'oferta_quote',
          virtueAward: 'coragem',
        },
        {
          text: 'Entregar tudo a Deus em oração silenciosa e confiança total.',
          next: 'oferta_quote',
          virtueAward: 'oracao',
        },
      ],
    },
    oferta_quote: {
      id: 'oferta_quote',
      speaker: 'Carlo',
      text:
        '"Ofereço todo o sofrimento que vou sofrer pelo Senhor, o Papa e a Igreja, para não ir ao purgatório, mas ir direto para o céu." São as palavras que Carlo repete aos que o visitam no hospital.',
      backgroundTone: 'hospital',
      next: 'ultimos_dias',
    },
    ultimos_dias: {
      id: 'ultimos_dias',
      speaker: 'Narrador',
      text:
        'Nos últimos dias, é Carlo quem consola a própria família, e não o contrário. Sorri para os médicos e enfermeiros, agradece a cada visita e repete que a tristeza é olhar para si mesmo, e a felicidade é olhar para Deus.',
      backgroundTone: 'hospital',
      choices: [
        {
          text: 'Passar as últimas forças confortando a mãe e os irmãos, um a um.',
          next: 'morte',
          virtueAward: 'alegria',
        },
        {
          text: 'Manter o bom humor até o fim, arrancando sorrisos até da equipe do hospital.',
          next: 'morte',
          virtueAward: 'alegria',
        },
      ],
    },
    morte: {
      id: 'morte',
      speaker: 'Narrador',
      text:
        'Carlo morre em 12 de outubro de 2006, com apenas 15 anos. A pedido dele mesmo, é sepultado em Assis — a cidade de São Francisco, que ele admirava profundamente —, vestido como sempre gostava: jeans, tênis e um casaco esportivo.',
      backgroundTone: 'night',
      next: 'legado',
    },
    legado: {
      id: 'legado',
      speaker: 'Narrador',
      text:
        'Em 2020, o Papa Francisco o declara Beato. Em 7 de setembro de 2025, o Papa Leão XIV o canoniza: Carlo Acutis torna-se o primeiro santo nascido na geração da internet, lembrado como "o influencer de Deus". Seu corpo, preservado, é venerado até hoje em Assis por milhões de peregrinos, muitos deles jovens.',
      backgroundTone: 'dawn',
      next: 'reflexao',
    },
    reflexao: {
      id: 'reflexao',
      speaker: 'Narrador',
      text:
        'A vida curta de Carlo pergunta a cada um de nós: e você, o que vai fazer com o seu tempo, seu talento e sua tela?',
      backgroundTone: 'dawn',
      choices: [
        {
          text: 'Viver cada dia mais unido a Deus, como Carlo fazia na Eucaristia.',
          next: 'final',
          virtueAward: 'oracao',
        },
        {
          text: 'Usar meu tempo e meus talentos para o bem dos outros, não só de mim mesmo.',
          next: 'final',
          virtueAward: 'humildade',
        },
      ],
    },
    final: {
      id: 'final',
      speaker: 'Narrador',
      text:
        '"Todos nascem originais, mas muitos morrem como fotocópias." — São Carlo Acutis\n\nEm apenas 15 anos, Carlo mostrou que é possível ser plenamente jovem e plenamente santo ao mesmo tempo.',
      backgroundTone: 'dawn',
      isEnding: true,
    },
  },
};
