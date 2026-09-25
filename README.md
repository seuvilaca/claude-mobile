# Vidas de Santos

Jogo mobile de aventura narrativa (React Native + Expo Router) sobre a vida
dos santos católicos. O jogador acompanha capítulos interativos, faz
escolhas que refletem virtudes cristãs e vai formando uma coleção de
virtudes conquistadas.

🎮 **Jogue no navegador:** https://seuvilaca.github.io/claude-mobile/

## Stack

- [Expo](https://expo.dev) (SDK 57) + React Native
- [Expo Router](https://docs.expo.dev/router/introduction/) para navegação
- TypeScript
- `@react-native-async-storage/async-storage` para persistência local de progresso

## Estrutura

```
src/
  app/                 # rotas (Expo Router)
    index.tsx           # tela inicial: mapa de santos
    chapter/[id].tsx     # tela de capítulo (motor de diálogo)
  components/          # UI: DialogueEngine, ChoiceButton, SaintCard, VirtueBadge
  data/
    saints.ts            # metadados dos santos
    virtues.ts            # virtudes colecionáveis
    chapters/             # grafos de cena de cada capítulo
  engine/               # tipos e motor de narrativa/estilo por cena
  state/                # progresso do jogador (AsyncStorage)
  theme/                # cores e espaçamento
```

## Capítulos disponíveis

- **São Carlo Acutis** — da fé precoce e do dom para a informática à
  catalogação dos milagres eucarísticos, ao diagnóstico de leucemia e à
  canonização em 2025 como o primeiro santo millennial.

Outros santos (São Francisco de Assis, Santa Teresinha, São João Bosco,
Santa Joana d'Arc) já estão listados na tela inicial como "Em breve" — basta
escrever um novo arquivo em `src/data/chapters/` e registrá-lo em
`src/data/chapters/index.ts` e `src/data/saints.ts`.

## Rodando o projeto

```bash
npm install
npm run web       # versão web
npm run ios       # requer macOS
npm run android
```

## Deploy

A versão web é publicada automaticamente no GitHub Pages
(`.github/workflows/deploy-pages.yml`) a cada push nas branches `main` ou
`claude/o-que-podemos-fazer-ysmwcc`: builda com `expo export -p web`, ajusta
o base path do Expo Router para `/claude-mobile/` e publica com
`actions/deploy-pages`.
