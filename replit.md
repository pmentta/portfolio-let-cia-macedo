# Portfólio Profissional - Letícia Macedo Pinheiro

## Visão Geral
Website profissional de portfólio apresentando trajetória e trabalhos de Letícia Macedo Pinheiro, graduanda em Lazer e Turismo pela USP, especializada em turismo cultural, patrimônio e gestão de projetos.

## Status Atual
- **Fase:** Em desenvolvimento
- **Tipo:** Website estático multi-página
- **Linguagens:** HTML5, CSS3, JavaScript (Vanilla)
- **Servidor:** Python Simple HTTP Server na porta 5000

## Estrutura do Projeto

```
src/
├── index.html           # Página inicial com storytelling
├── projects.html        # Galeria de projetos
├── academic.html        # Publicações acadêmicas e produções
├── cv.html             # Currículo profissional
├── assets/             # PDFs e documentos
│   ├── CV_-_Leticia_*.md
│   ├── Profile_*.pdf
│   ├── Historico_Escolar_*.pdf
│   └── ETEC_certificado_*.pdf
├── styles/             # Arquivos CSS modulares
│   ├── base.css        # Variáveis, reset e tipografia
│   ├── layout.css      # Header, footer, grid, layout
│   ├── components.css  # Cards, buttons, modals, carousel
│   └── pages.css       # Estilos específicos de páginas
└── scripts/            # JavaScript
    └── main.js         # Interatividade (nav, modals, carousel)
```

## Arquitetura & Design

### CSS Modular
- **base.css**: Sistema de variáveis CSS (cores, tipografia, espaçamento), reset de estilos
- **layout.css**: Estrutura geral (header sticky, grid system, footer)
- **components.css**: Componentes reutilizáveis (cards, buttons, modals, carousel)
- **pages.css**: Estilos específicos por página

### Variáveis CSS
- Cores: primary (#2c3e50), secondary (#3498db), accent (#e74c3c)
- Tipografia: serif (Georgia) para títulos, sans-serif para corpo
- Espaçamento: sistema 8px base (xs=0.25, sm=0.5, md=1, lg=1.5, xl=2, 2xl=3, 3xl=4)
- Transições: fast (0.2s), normal (0.3s), slow (0.5s)

### Responsividade
- Mobile-first approach
- Breakpoints: 480px (celular), 768px (tablet)
- Grids adaptáveis com auto-fit

## Páginas

1. **index.html** - Página inicial
   - Hero section com apresentação
   - Seção "Sobre mim"
   - 3 projetos em destaque
   - Competências principais
   - Contato

2. **projects.html** - Galeria de projetos
   - Filtros (Todos, Profissionais, Culturais, Operacionais)
   - Grid de 6 projetos com detalhes
   - Modais com descrições expandidas

3. **academic.html** - Publicações acadêmicas
   - Pesquisa científica publicada
   - Apresentações em eventos
   - Certificações
   - Formação acadêmica
   - Downloads de documentos

4. **cv.html** - Currículo
   - Timeline de experiência profissional
   - Formação acadêmica
   - Competências organizadas por categorias
   - Links para PDFs completos

## Funcionalidades JavaScript

- **Navegação ativa**: Highlight do menu atual
- **Modais**: Detalhes de projetos em pop-ups
- **Filtros**: Filtragem de projetos por tipo
- **Carousels**: Galerias de imagens (preparado, ainda sem imagens)
- **Scroll suave**: Navegação interna com scroll behavior
- **Acessibilidade**: Navegação por teclado

## Conteúdo Base

Informações extraídas de:
- CV em Markdown
- Histórico escolar USP
- Perfil profissional (PDF)
- LinkedIn/Projetos

### Principais Projetos

1. **UNESCO Chapada do Araripe** - Patrimônio Mundial
2. **Bridge** - Startup (COO)
3. **TTW Group** - Operações de turismo de luxo
4. **Observatório de Turismo AMITESP**
5. **Pesquisa: Trabalho Infantil na Mídia**
6. **Semana de Lazer e Turismo USP**

## Próximas Etapas

- [ ] Adicionar imagens dos projetos e carousel
- [ ] Otimização de performance e SEO
- [ ] Testes de responsividade em múltiplos dispositivos
- [ ] Possível integração com formulário de contato
- [ ] Analytics
- [ ] Publicação/Deploy

## Notas Técnicas

- Sem dependências externas (CSS/JS puro)
- Cache-control headers para evitar cache em dev
- Arquivos estruturados para manutenção fácil
- Nomenclatura BEM em CSS para escalabilidade
- HTML semântico para acessibilidade
