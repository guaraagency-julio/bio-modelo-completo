# Bio Modelo Completo — Guará Agency

Modelo demonstrativo de biosite editorial para profissionais e pequenos negócios. Sofia Neri é uma persona fictícia. Imagens e vídeos são referências visuais, e os quatro trabalhos exibidos são conceitos de demonstração, sem atribuição de autoria real à personagem.

## Recursos

Hero com vídeo em autoplay silencioso, imagem de retrato em sobreposição e máscara gradual; botões de acesso rápido; apresentação; portfólio em carrossel com navegação e rolagem por toque; acordeão de serviços; menu responsivo; botão de compartilhar; barra de progresso; animações com IntersectionObserver e respeito à preferência por movimento reduzido.

## Personalização

Edite config.js para trocar nome, retrato, vídeo, imagem de fallback, projetos e URLs do site, WhatsApp e e-mail. Enquanto URLs externas estiverem vazias, os botões exibem aviso de demonstração. Altere textos e serviços em index.html. Edite as variáveis de cores em :root de styles.css.

Os retratos atuais são fotografias ilustrativas. Para obter recorte perfeito no hero, substitua o retrato por PNG/WebP com transparência e, em styles.css, remova ou ajuste a regra mask-image de .hero-person. O efeito atual usa máscara suave como solução estática inicial.

## GitHub Pages com Actions

Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**. O arquivo `.github/workflows/deploy.yml` publica automaticamente os arquivos estáticos a cada push na branch main e aceita disparo manual pela aba Actions.

URL: https://guaraagency-julio.github.io/bio-modelo-completo/

## Incorporar em um site no mesmo domínio

Copie index.html, styles.css, config.js e app.js para a pasta /bio/ da landing page principal. Os caminhos de assets são relativos. Assim, a URL fica dominio-do-cliente.com.br/bio/.

Este modelo usa HTML/CSS/JavaScript puro, sem etapa de build, sem API, sem rastreamento e sem servidor. O vídeo remoto é do Pexels; imagens remotas são da Unsplash. Para entrega comercial, use arquivos próprios/hospedados pelo cliente e valide autorizações de uso.
