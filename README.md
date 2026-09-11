# Viva La Vida

Portfólio de passeios de lancha no Rio de Janeiro e Niterói, feito com React, TypeScript e Vite.

## Rodar

- `npm install`
- `npm run dev`
- `npm run build` gera a versão de produção em `dist`.
- `npm run lint` verifica o código.

## Personalizar

- `src/App.tsx`: composição da página, textos editoriais e mapa `photos`.
- `src/App.css`: layout responsivo e identidade visual.
- `src/index.css`: tipografia e estilos globais.
- `src/config/site.ts`: nome e número de WhatsApp.
- `src/data/routes.ts`: roteiros e paradas.
- `src/data/plans.ts`: experiências e itens incluídos.
- `src/data/faq.ts`: perguntas e respostas.

Os componentes antigos de `src/sections` estão preservados como referência, mas não são usados pela nova página.

## Fotografias

As variantes `-800.webp` e `-1600.webp` são usadas pelo navegador conforme a largura e densidade da tela. Ao trocar as fotos, substitua também essas variantes para que o celular não continue exibindo as imagens ilustrativas antigas.

As fotos estão em `public/images`, servidas localmente. Substitua `rio.jpg`, `boat.jpg`, `coast.jpg` e `ocean.jpg` por fotos próprias, ou altere o mapa `photos`. Atualize também os textos alternativos. A imagem da embarcação é apenas uma referência ilustrativa, identificada na página. Consulte `IMAGE_CREDITS.md`.

## Contato e publicação

Configure `whatsappNumber` em `src/config/site.ts` com 55 + DDD + número. Enquanto houver o número de exemplo, o formulário mostra um aviso de canal em preparação. Após a configuração, abre o WhatsApp com roteiro, experiência, data opcional e quantidade de pessoas; não confirma uma reserva automaticamente.

Confirme capacidade, valores, duração, locais de embarque e políticas com o proprietário. Atualize domínio, canonical, dados estruturados e imagem social em `index.html` antes da publicação. A página não possui backend nem armazena os dados do formulário.

## Validação da reformulação

### Revisão mobile e paletas

Textos de leitura e campos em 16 px no celular, controles maiores, experiências em lista e formulário em uma coluna. Um atalho inferior leva ao planejamento depois da abertura e se esconde ao chegar à seção de contato ou ao rodapé. Respeita a área segura inferior do aparelho.

Abra `/paletas.html` para comparar a paleta original com areia quente, verde sálvia e azul profundo. As prévias diretas usam `/?paleta=areia`, `/?paleta=salvia` e `/?paleta=azul`. Sem esse parâmetro, o azul profundo (#142E38) é a identidade padrão. A paleta clara anterior pode ser vista em `/?paleta=original`. As cores estão nas variáveis CSS de `src/index.css`. A página comparativa é uma ferramenta de revisão, sem link na navegação dos visitantes.

As quatro paletas foram verificadas nas larguras 320, 360, 390, 430, 700, 768 e 1440 px em Chromium com emulação móvel. Também foram verificados o atalho contextual, fechamento do menu ao redimensionar, retorno de foco via Escape, comparação ao vivo e tamanho dos campos. Isso não substitui teste em aparelho físico com Safari.

Build TypeScript/Vite e lint aprovados. Fluxos verificados em navegador: abas com teclado, sincronização dos roteiros e experiências com o formulário, aviso de contato, perguntas frequentes e menu móvel. Layout verificado nas larguras 320, 390, 768 e 1440 px, sem rolagem horizontal. Prévias em `desktop-preview.png` e `mobile-preview.png`.


# vivalavida
