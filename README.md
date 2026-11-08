# Tríade Contabilidade — Site institucional

Site estático multipage, sem dependências de build.

## Páginas
- `index.html` — Início
- `sobre.html` — A Tríade e equipe
- `servicos.html` — Serviços
- `processo.html` — Como trabalhamos
- `orienta.html` — Artigos e páginas individuais
- `contato.html` — Contato
- `privacidade.html` — Privacidade provisória

## Visualizar
Abra `index.html` no navegador. Para testar com servidor local: `python -m http.server 8000` e acesse `http://localhost:8000`.

## Antes de publicar
1. Edite `assets/site.js`, objeto `CONFIG`, preenchendo WhatsApp (apenas números, com DDI 55), e-mail e profissionais.
2. A equipe já está configurada com Thalinês, Viviane e Lucas. Preencha os campos de cargo, formação, biografia e foto de cada pessoa quando disponíveis. Para adicionar profissionais, insira objetos no array `profissionais` com `nome`, `cargo`, `formacao`, `bio`, `foto`. Se o array estiver vazio, a seção exibe aviso honesto de equipe em preparação.
3. Revise textos, escopo dos serviços, credenciais e política de privacidade com os responsáveis.
4. Substitua o favicon provisório por versão vetorial autorizada do símbolo original, se disponível.
5. A logo fornecida é uma imagem raster com fundo verde, não um arquivo vetorial transparente. Ela foi preservada sem redesenho.
6. O formulário **não envia dados a servidores**: prepara uma mensagem para copiar ou enviar via canais configurados.
7. Para publicação comercial, avalie Cloudflare Pages ou outra hospedagem adequada.

## Hospedagem
Envie o conteúdo desta pasta para a raiz do projeto na hospedagem estática. Links relativos funcionam também em subpastas do GitHub Pages.

## Observações
Fontes são carregadas do Google Fonts e requerem conexão para aparecer; fontes locais de sistema são usadas como fallback. Os artigos são introdutórios e exigem revisão periódica.

## WhatsApp flutuante
O botão aparece em todas as páginas, com texto no hover e no foco pelo teclado. Configure `CONFIG.whatsapp` em `assets/site.js` para direcionar à empresa com a mensagem pronta. Sem número, abre o compartilhamento de mensagem no WhatsApp, sem destinatário definido.
