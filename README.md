# AD Santos — A Pioneira · Site 3D Interativo

Site oficial da **Igreja Evangélica Assembleia de Deus — Ministério de Santos** ("A Pioneira"),
a primeira Assembleia de Deus do Estado de São Paulo, fundada em **5 de maio de 1924** pelo
missionário sueco **Daniel Berg**.

Site totalmente **interativo, dinâmico e em 3D**: uma maquete procedural do templo que a
câmera atravessa conforme você rola a página, linha do tempo interativa com **mapa ao vivo**,
mapa de igrejas clicável, rádio **Fly 99 FM** ao vivo e muito conteúdo real.

---

## ▶ Como abrir

Sem build, sem dependências locais. Basta servir a pasta por HTTP (os módulos e a rádio
não funcionam bem via `file://`):

```bash
# na pasta "Default Project"
python -m http.server 8091
# depois abra:
#   http://localhost:8091/ad-ministerio-santos-3d/index.html
#   http://localhost:8091/ad-ministerio-santos-3d/igrejas.html
```

---

## 📁 Estrutura

```
ad-ministerio-santos-3d/
├── index.html      ← página principal (maquete 3D + todas as seções)
├── igrejas.html    ← página das igrejas & congregações (mapa + perfil completo)
├── css/
│   └── base.css    ← design system compartilhado (LEGILIDADE CORRIGIDA)
├── js/
│   ├── dados.js    ← ►► TODO O CONTEÚDO EDITÁVEL ◄◄ (texto, contatos, fotos, mapa)
│   └── shared.js   ← ícones, fotos com fallback, rádio, mapa Leaflet, utilitários
└── README.md
```

> **Onde editar?** Praticamente tudo está em **`js/dados.js`**. Você não precisa mexer no
> HTML para trocar textos, contatos, igrejas, eventos ou fotos.

---

## ✨ O que tem

### Página principal (`index.html`)
- **Maquete 3D do templo** (Three.js r128): pedra com relevo, telhado de telhas, vitrais
  com rosácea, portal em arco com arquivoltas, torre com sino e **cruz dourada**, bancos,
  púlpito, altar com mesa da ceia, lustres, pombas, partículas, céu procedural e feixes de luz.
  A câmera **entra pelo portal** e chega ao altar conforme você rola.
- **Legibilidade corrigida**: painéis com fundo opaco (gradiente 96–97%) + blur, contraste
  alto e sombras de texto — nada de letra "fantasma" sobre o fundo transparente.
- **Nossa trajetória**: linha do tempo interativa com **botões de época** (1924 → 2024),
  cartão dinâmico e **mapa Leaflet ao vivo** que acende os pontos da expansão e traça a rota.
- **Visite-nos**: mapa com a sede e as congregações — **clicar num ponto muda na hora**
  endereço, telefone, WhatsApp e e-mail.
- **Rádio Fly 99 FM 99.1** flutuante, com stream real e equalizador.
- **Líderes reais** + sucessão presidencial 1924→hoje, crenças, ministérios, cultos com
  **contagem regressiva**, eventos, obras sociais, testemunhos e versículos.
- **Paleta ao vivo** (troca as cores da maquete em tempo real) e **tour guiado**.

### Página das igrejas (`igrejas.html`)
- Mapa grande com todas as igrejas + **lista com busca e filtros** (Todas / Sede / Congregações).
- **Perfil completo** que troca ao clicar: foto, fundação, inauguração, capacidade,
  endereço, telefone, e-mail, WhatsApp, **história detalhada**, **pioneiros**,
  **sucessão de pastores**, **diretoria** e **ministérios** de cada casa.
- **Mapa da expansão** histórica pelo litoral (1924 → 1929 → 1934).

---

## 📌 Conteúdo: o que é REAL e o que é PLACEHOLDER

### ✔ Pesquisado e real (fontes públicas)
- **Fundação**: 5 de maio de 1924, missionário sueco **Daniel Berg**; primeiros cultos no
  bairro **Ponta da Praia** e nos lares de Vicente e Hermínia Lameira e Manoel Garcêz.
- **Endereço da sede**: Rua Dr. Manoel Tourinho, 351 — Macuco, Santos/SP — CEP 11015‑031.
- **Telefone**: (13) 3222‑0091 · **PIX**: 02.317.284/0001‑70 (Banco Santander).
- **Redes**: Instagram/Facebook **@adsantosapioneira** · YouTube "AD Santos — A Pioneira".
- **Sucessão**: John Sorhein (1926), Simon Lundgreen (1929), Pr. Clímaco Bueno Aza (1933/34),
  Pr. Francisco Gonzaga (1938), Pr. Bruno Skolimowski (1946), Pr. João Alves Corrêa (1962),
  Pr. Dr. Paulo Alves Corrêa (1993–) · Pastora **Eliane Corrêa** · **Dep. Paulo Corrêa Jr**.
- **Lei 16.067/2015** — "Dia da Pioneira" no Calendário Oficial de SP.
- **Nova sede**: prédio de 9 andares, 2 galerias, tanque batismal, **4.000 lugares** (1993).
- **Rádio Fly 99 FM 99.1** (Baixada Santista) — stream `audio/mpeg` verificado.
- **Congregações reais**: Campos Sales (São Vicente) e Mongaguá.

### ✎ Ajustar na igreja (editáveis em `js/dados.js`)
- **E-mail** da sede e das congregações (`email`) — hoje um endereço provisório.
- **Programação dos cultos** (`CULTOS`) — horários a confirmar com a liderança.
- **Telefones/WhatsApp das congregações** — hoje usam o da sede.
- **Fundação/inauguração das congregações** (`fundada`, `inauguracao`) —Datas a confirmar.
- **Nomes de pastores locais e diretoria das congregações** — hoje genéricos.

---

## 🖼 Fotos

As fotos vêm do **Wikimedia Commons** (licenças livres CC BY‑SA / domínio público) e são
**ilustrativas da denominação**. Cada `<img>` tem **fallback automático**: se a imagem não
carregar, entra uma **arte SVG** gerada com o nome da igreja — nunca aparece imagem quebrada.

Para usar fotos reais, basta preencher o campo `foto` em `js/dados.js` com o caminho/URL:

```js
foto: 'img/sede-1938.jpg'   // ou uma URL absoluta
```

---

## 🎨 Paletas

Seis paletas ao vivo na maquete (índice `PALETTES` em `js/dados.js`): Ouro da Pioneira,
Escarlate, Azul da Graça, Verde Esperança, Violeta Adoração e Rosa da Manhã. Adicione mais
objeto na lista e os botões aparecem sozinhos.

---

## ⚙️ Detalhes técnicos

- **Three.js r128** via CDN (cdnjs) com **fallback** automático para unpkg. Sem WebGL o site
  entra em **modo estático** (`no3d`) sem quebrar.
- **WebGL2** é usado quando disponível; texturas procedurais de até **2048 px** com *bump map*.
- **Leaflet 1.9.4** + OpenStreetMap para os mapas (sem chave de API).
- **Rádio**: `<audio>` com cache‑buster; tratamento de autoplay, erro e retentativa.
- **Acessibilidade**: navegação por teclado nas setas da linha do tempo, `aria-*`, foco visível,
  respeito a `prefers-reduced-motion`, contrastes altos.
- **Responsivo** de 360 px a 4K, com DPR limitado a 2 no mobile.
