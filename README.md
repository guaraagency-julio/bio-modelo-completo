# Bio Modelo Completo — Guará Agency

Biosite premium e enxuto, planejado principalmente para smartphones. Modelo demonstrativo para apresentar site completo, uma prévia visual do portfólio e contato. Sofia Neri é fictícia, e os projetos e as fotografias são ilustrativos.

## Arquitetura de conteúdo

- Hero editorial: vídeo de fundo, retrato sobreposto, nome, especialidade e uma frase.
- CTA principal: conheça meu site completo. É a ação de maior destaque.
- Dois atalhos: portfólio e contato.
- Prévia visual: carrossel com miniaturas, navegação por toque e setas.
- Contato compacto: WhatsApp, Instagram e e-mail.

Removidos longos textos institucionais, seção sobre, lista de serviços, menu extenso e blocos redundantes de contato.

## Personalizar

Altere config.js para trocar identidade, fotos, vídeo, links externos e projetos. As URLs site e portfolio devem apontar para a landing page do cliente e a seção de portfólio. Deixe vazio enquanto for demonstração: o botão abrirá aviso, sem simular perfis reais.

O vídeo só começa a carregar quando a hero está visível; economia de dados e movimento reduzido mantêm a imagem de capa. Imagens da galeria são carregadas sob demanda. Em entregas comerciais, substitua os assets demonstrativos por arquivos autorizados e preferencialmente otimizados/hospedados pela própria marca.

Para usar PNG/WebP com transparência no retrato, adapte a máscara de .hero-portrait em styles.css.

## Integração com site principal

Coloque os quatro arquivos da aplicação (index.html, styles.css, config.js e app.js) na pasta /bio/ do site comercial. Os caminhos de arquivo são relativos, permitindo acessar em https://dominio.com.br/bio/.

## GitHub Pages

Publicação automática pela branch main com GitHub Actions, via .github/workflows/deploy.yml. Mantenha Source como GitHub Actions em Settings → Pages.

URL: https://guaraagency-julio.github.io/bio-modelo-completo/

Nenhuma alteração foi feita no repositório bio-modelo-simples.
