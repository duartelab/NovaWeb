# Diário de decisões

Uma entrada por sessão: problema, o que tentei, o que resolveu e por quê.

## 09/11/2026 — Recomeço (V2)
- **Problema:** o tema da primeira versão (chamados) era genérico e o protótipo já não combinava com o que eu queria.
- **Decisão:** refazer do zero com o tema PAUTA (agenda de compromissos), seguindo as imagens do Figma em `docs/prototipo-v2/`.
- **Fundo:** imagem desfocada de quatro cores, em WebP (6 KB), em vez de CSS complexo ou de uma imagem pesada.

## 14/11/2026 — Login: campos, botão e foco
- **Problema:** a centralização estava no `body` (flex), o que servia para o login mas ia atrapalhar o perfil e a consulta, que começam no topo da página. Também havia uma tentativa antiga de CSS com erros de seletor.
- **O que tentei:** ajustar o `body` para as três páginas ao mesmo tempo, mas o menu do perfil e a tabela da consulta ficavam no meio da tela.
- **Decisão:** apaguei a tentativa antiga e passei a centralização para uma classe, `.pagina-login`, só no `<body>` do `index.html`. O `body` ficou só com a base (margem, fonte, cor e fundo).
- **Por quê:** o mesmo arquivo de CSS atende três páginas com layouts diferentes; uma classe limita a regra ao login e deixa as outras páginas livres.
- **Foco:** campos e botão ganharam contorno de 2 px em azul-petróleo (`#0b5f6d`) no `:focus`, para quem navega pelo teclado.

## 15/11/2026 — Perfil, consulta e celular
- **O que fiz:** CSS do menu, do cartão, do perfil (identificação, formulário em grade 2×2 e lista de compromissos), da consulta (busca, contador e tabela com linhas alternadas) e do celular (`@media (max-width: 600px)`).
- **Decisão de seletor:** usei `body > header` e `body > main` para o menu e o conteúdo das páginas de dentro. Assim as regras não atingem o `<header>` do login, que está dentro de `.login`.
- **Decisão de layout:** `main` em grade (título à esquerda e frase à direita), duas colunas em flex no perfil (formulário maior e compromissos menor) e a tabela dentro de uma caixa com `overflow-x: auto`, para rolar só a tabela no celular.
- **Problema:** ao abrir o perfil no computador, a tela aparecia empilhada como no celular.
- **Causa:** fechei a chave do `@media` logo depois da primeira regra; as demais regras do celular ficaram fora dele e passaram a valer em todas as telas.
- **Solução:** removi essa chave e fechei o `@media` no fim do arquivo, depois da última regra do celular.
- **Outros erros da revisão:** `columns` no lugar de `color`; `a.focus` no lugar de `a:focus`; espaço em `th :first-child`; falta de vírgula em `minmax(0, 1fr)`; e a cor do placeholder do cartão, que voltei para cinza como no Figma.
- **O que aprendi:** o `body` do CSS é um seletor que aponta para o `<body>` do HTML, não um comando; e a ordem das regras e o fechamento das chaves mudam onde cada regra vale.
- **Conferência:** modo celular do navegador (F12) em 390 px, sem rolagem lateral na página.

