# Vidas de Santos

Jogo mobile de aventura narrativa (React Native + Expo Router) sobre a vida
dos santos católicos. O jogador acompanha capítulos interativos, faz
escolhas que refletem virtudes cristãs e vai formando uma coleção de
virtudes conquistadas.

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

- **São Francisco de Assis** — da vida de riqueza à conversão radical, a
  pobreza, os leprosos, a aprovação da Ordem, o presépio de Greccio e os
  estigmas do Monte Alverne.

Outros santos (Santa Teresinha, São João Bosco, Santa Joana d'Arc) já estão
listados na tela inicial como "Em breve" — basta escrever um novo arquivo em
`src/data/chapters/` e registrá-lo em `src/data/chapters/index.ts` e
`src/data/saints.ts`.

## Rodando o projeto

```bash
npm install
npm run web       # versão web
npm run ios       # requer macOS
npm run android
```
