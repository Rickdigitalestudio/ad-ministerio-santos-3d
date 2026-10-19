/* ============================================================================
   ADMS — Assembleia de Deus Ministério de Santos ("A Pioneira")
   Base de dados compartilhada (index.html + igrejas.html)

   ►► EDITAR AQUI ◄◄  — todos os conteúdos de texto, imagens e contatos.
   Fontes públicas: Instagram/Facebook @adsantosapioneira, YouTube
   "AD SANTOS A PIONEIRA PAULO CORRÊA", adms.inpeaceapp.com, inpeaceapp,
   exibirgospel.com.br, unigrejas.com, mariosergiohistoria.blogspot.com.

   Fotos: URLs do Wikimedia Commons (licença livre CC BY-SA / domínio público)
   com fallback automático para uma arte SVG gerada se a imagem não carregar.
   Basta trocar `foto` por um caminho/URL de foto real.
============================================================================ */

window.ADMS = (function () {
  'use strict';

  /* ---------------------------------------------------------------------
     IDENTIDADE
  --------------------------------------------------------------------- */
  var CONFIG = {
    nome: 'Igreja Evangélica Assembleia de Deus',
    nomeCurto: 'Ministério de Santos',
    apelido: 'A Pioneira',
    sigla: 'IEADMS',
    fundacao: 1924,
    fundacaoData: '5 de maio de 1924',

    // Contatos oficiais publicados (facebook/instagram/inpeaceapp)
    endereco: 'Rua Dr. Manoel Tourinho, 351 — Macuco',
    cidade: 'Santos',
    uf: 'SP',
    cep: '11015-031',
    telefone: '(13) 3222-0091',
    whatsapp: '551332220091',
    email: 'contato@admsantos.org.br', // ← e-mail a confirmar
    site: 'adms.inpeaceapp.com',
    mapsQuery: 'Rua Dr. Manoel Tourinho, 351 — Macuco, Santos/SP',

    // Dízimos e ofertas (CNPJ real publicado nos cultos)
    pix: '02.317.284/0001-70',
    banco: 'Banco Santander',

    // Redes sociais reais
    instagram: 'https://www.instagram.com/adsantosapioneira/',
    facebook: 'https://www.facebook.com/adsantosapioneira/',
    youtube: 'https://www.youtube.com/@adsantosapioneira',
    instagramLabel: '@adsantosapioneira',
    youtubeLabel: 'AD Santos · A Pioneira · Paulo Corrêa',

    // Rádio oficial parceira
    radio: {
      nome: 'Fly 99 FM',
      slogan: 'A rádio que toca no seu coração',
      faixa: '99.1 FM',
      stream: 'https://r15.ciclano.io/proxy/flyfmltd/stream',
      site: 'https://fly99fm.lovable.app',
      instagram: 'https://www.instagram.com/fly99fm',
      instagramLabel: '@fly99fm'
    },

    // Coordenadas geocodificadas (OSM Nominatim)
    lat: -23.9576320,
    lng: -46.3187288,

    // Frase de abertura
    lema: 'A primeira Assembleia de Deus do Estado de São Paulo',
    sublema: 'Cem anos de fé, missão e serviço no litoral paulista.'
  };

  /* ---------------------------------------------------------------------
     NÚMEROS (hero + seções) — dados reais
  --------------------------------------------------------------------- */
  var STATS = [
    { n: 1924, s: '', label: 'Fundação', nota: 'Missionário Daniel Berg' },
    { n: 100, s: '+', label: 'Anos de história', nota: 'Centenária desde 2024' },
    { n: 1, s: 'ª', label: 'AD do Estado', nota: 'A Pioneira de São Paulo' },
    { n: 4000, s: '', label: 'Lugares na sede', nota: 'Templo de 9 andares' }
  ];

  /* ---------------------------------------------------------------------
     ROTEIRO DO CULTO (placeholder — ajuste na igreja)
  --------------------------------------------------------------------- */
  var CULTOS = [
    { dow: 0, hora: '09:00', dur: 120, nome: 'Escola Bíblica Dominical', sala: 'Salas EBD / Galeria', icone: 'livro' },
    { dow: 0, hora: '10:30', dur: 150, nome: 'Culto de Celebração', sala: 'Templo Principal — 4.000 lugares', icone: 'flame' },
    { dow: 0, hora: '18:00', dur: 120, nome: 'Culto da Noite', sala: 'Templo Principal', icone: 'star' },
    { dow: 3, hora: '19:30', dur: 120, nome: 'Culto de Oração e Doutrina', sala: 'Templo Principal', icone: 'book' },
    { dow: 4, hora: '19:30', dur: 120, nome: 'Culto do Avivamento', sala: 'Templo Principal', icone: 'fire' },
    { dow: 5, hora: '19:30', dur: 130, nome: 'Culto da Família', sala: 'Templo Principal', icone: 'heart' },
    { dow: 6, hora: '18:00', dur: 120, nome: 'Culto de Jovens e Adolescentes', sala: 'Templo Principal', icone: 'users' }
  ];

  /* ---------------------------------------------------------------------
     IMAGENS (Wikimedia Commons, licença livre) + fallback SVG
  --------------------------------------------------------------------- */
  var FOTOS = {
    temploCentral: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Assembleia_de_Deus_Templo_Central_Fortaleza.JPG/1280px-Assembleia_de_Deus_Templo_Central_Fortaleza.JPG',
    cascavel: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Assembleia_de_Deus_Templo_Central_de_Cascavel.JPG/1280px-Assembleia_de_Deus_Templo_Central_de_Cascavel.JPG',
    floripa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Igreja_Assembleia_de_Deus%2C_Florian%C3%B3polis%2C_Brasil.JPG/1280px-Igreja_Assembleia_de_Deus%2C_Florian%C3%B3polis%2C_Brasil.JPG',
    joinville: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Assembleia_de_Deus_%28Joinville%2C_Brasil%29.jpg/1280px-Assembleia_de_Deus_%28Joinville%2C_Brasil%29.jpg',
    centenario1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/2011-05-30_Centen%C3%A1rio_da_Assembleia_de_Deus_01.jpg/1280px-2011-05-30_Centen%C3%A1rio_da_Assembleia_de_Deus_01.jpg',
    centenario3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/2011-05-30_Centen%C3%A1rio_da_Assembleia_de_Deus_03.jpg/1280px-2011-05-30_Centen%C3%A1rio_da_Assembleia_de_Deus_03.jpg',
    aracati: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Assembleia_de_Deus_Templo_Central_em_Aracati.jpg/1280px-Assembleia_de_Deus_Templo_Central_em_Aracati.jpg'
  };

  var CREDITO_FOTOS = 'Fotos: Wikimedia Commons — licenças CC BY-SA / domínio público.';

  /* ---------------------------------------------------------------------
     LINHA DO TEMPO INTERATIVA (mapa da expansão)
     `ano` = ano do marco; `mapa` = id do ponto que "acende" nesse marco.
  --------------------------------------------------------------------- */
  var PONTOS_MAPA = {
    ponta:    { nome: 'Ponta da Praia',  lat: -23.9862005, lng: -46.3017868 },
    macuco:   { nome: 'Macuco (Sede)',   lat: -23.9576320, lng: -46.3187288 },
    saovicente:{nome: 'São Vicente',     lat: -23.9664177, lng: -46.3861401 },
    praiagrande:{nome:'Praia Grande',    lat: -24.0089790, lng: -46.4144939 },
    guaruja:  { nome: 'Guarujá',         lat: -23.9927768, lng: -46.2558332 },
    itanhaem: { nome: 'Itanhaém',        lat: -24.1833421, lng: -46.7896229 },
    mongagua: { nome: 'Mongaguá',        lat: -24.0988516, lng: -46.6287772 },
    saosebast:{ nome: 'São Sebastião',   lat: -23.8027866, lng: -45.4070527 },
    caraguata:{ nome: 'Caraguatatuba',   lat: -23.6202800, lng: -45.4130600 },
    ubatuba:  { nome: 'Ubatuba',         lat: -23.3977491, lng: -45.0819990 }
  };

  var TRAJETORIA = [
    {
      id: 'semente', ano: 1924, era: 'A Semente', mapa: ['ponta'],
      titulo: 'A semente desembarca em Santos',
      resumo: 'O missionário sueco Daniel Berg chega à cidade portuária de 135 mil habitantes e planta a primeira Assembleia de Deus do Estado de São Paulo.',
      texto: 'No dia 5 de maio de 1924, o missionário sueco Daniel Berg desembarca no Porto de Santos e funda a primeira Igreja Evangélica Assembleia de Deus do Estado de São Paulo. Ao encontrar uma irmã nordestina que já reunia fiéis em sua própria casa, ele inicia o trabalho no bairro Ponta da Praia. Santos — então uma cidade portuária de cerca de 135 mil habitantes — foi escolhida como porta de entrada do pentecostalismo no Estado.',
      detalhe: 'Os primeiros cultos aconteceram nos lares de Vicente Lameira e sua esposa Hermínia, e de Manoel Garcêz e sua esposa. A obra é hoje reconhecida como "A Pioneira" — mãe de todas as igrejas pentecostais paulistas.',
      figuras: ['Missionário Daniel Berg', 'Vicente e Hermínia Lameira', 'Manoel Garcêz e esposa'],
      foto: FOTOS.centenario1,
      legenda: 'Celebração do centenário da Assembleia de Deus (arquivo)'
    },
    {
      id: 'litoral', ano: 1929, era: 'O Litoral se Acende', mapa: ['ponta', 'saosebast', 'caraguata', 'ubatuba'],
      titulo: 'As casas viram pontos de pregação',
      resumo: 'Em cinco anos a obra já alcançava todos os bairros de Santos e as cidades do litoral norte.',
      texto: 'Em 1926 o trabalho passa a ser conduzido pelo missionário Simon Lundgreen. Em 1929 a pregação já alcançava todos os bairros de Santos: os irmãos cediam suas casas, que se tornaram pontos de pregação e, mais tarde, prósperas congregações. Em apenas cinco anos a obra se espalhou pelas cidades do litoral — São Sebastião, Caraguatatuba e Ubatuba.',
      detalhe: 'O crescimento se deu sem prédios nem verbas: apenas lares abertos, famílias inteiras convertidas e estradas de terra até as vilas costeiras.',
      figuras: ['Missionário John Sorhein', 'Missionário Simon Lundgreen'],
      foto: FOTOS.joinville,
      legenda: 'Templos da Assembleia de Deus pelo Brasil'
    },
    {
      id: 'lei', ano: 1934, era: 'Raízes na Lei', mapa: ['macuco'],
      titulo: 'A obra ganha registro e endereço fixo',
      resumo: 'Oficializada a "Sociedade Evangélica Assembleia de Deus" e adquirido o terreno da Rua Dr. Manoel Tourinho.',
      texto: 'Com o intuito de legalizar as reuniões, o Pastor Clímaco Bueno Aza — que assumiu a responsabilidade da igreja em 1933 — constitui uma sociedade civil. No dia 4 de setembro de 1934 a obra passa a chamar-se oficialmente "Sociedade Evangélica Assembleia de Deus", com sede à Rua Dr. Manoel Tourinho, 351, no bairro Macuco.',
      detalhe: 'Esse endereço, no coração de Santos, segue sendo a sede da igreja até hoje — quase um século depois.',
      figuras: ['Pastor Clímaco Bueno Aza'],
      foto: FOTOS.temploCentral,
      legenda: 'Templo Central da Assembleia de Deus'
    },
    {
      id: 'templo', ano: 1938, era: 'O Primeiro Grande Templo', mapa: ['macuco'],
      titulo: 'Inauguração do templo da Rua Manoel Tourinho',
      resumo: 'Em maio de 1938 é inaugurado o novo templo, com capacidade para cerca de mil fiéis.',
      texto: 'Em maio de 1938, sob a direção do Pastor Francisco Gonzaga, é inaugurado o novo templo à Rua Dr. Manoel Tourinho. Medindo aproximadamente 13 por 30 metros, o salão comportava cerca de mil pessoas — um templo imenso para uma igreja que mal completava quinze anos.',
      detalhe: 'Sob a presidência do Pastor Bruno Skolimowski, a partir de janeiro de 1946, a igreja consolida-se como referência do pentecostalismo no litoral paulista.',
      figuras: ['Pastor Francisco Gonzaga', 'Pastor Bruno Skolimowski'],
      foto: FOTOS.cascavel,
      legenda: 'Templo Central de Cascavel (SC)'
    },
    {
      id: 'visao', ano: 1962, era: 'Uma Nova Visão', mapa: ['macuco'],
      titulo: 'O chamado do Pastor João Alves Corrêa',
      resumo: 'Confirmado por um sonho, o pastor João Alves Corrêa assume a igreja em 11 de fevereiro de 1962.',
      texto: 'Em 1959, o Pastor João Alves Corrêa recebe o chamado para Santos — confirmado, segundo a tradição da casa, por um sonho. No dia 11 de fevereiro de 1962 ele assume oficialmente a igreja. Sob seu pastoreio, a obra atravessa as décadas de 1960 a 1990 ampliando seu alcance por todo o litoral e pelo Planalto.',
      detalhe: 'O Pastor João Alves Corrêa conduz a igreja por mais de três décadas, preparando o terreno para o maior salto construtivo de sua história.',
      figuras: ['Pastor João Alves Corrêa'],
      foto: FOTOS.aracati,
      legenda: 'Templo Central em Aracati (CE)'
    },
    {
      id: 'sede', ano: 1993, era: 'A Sede de Nove Andares', mapa: ['macuco'],
      titulo: 'A nova sede: um marco na cidade',
      resumo: 'O Pastor Paulo Alves Corrêa assume em janeiro de 1993 e conclói, em nove meses, um prédio de nove andares para 4.000 pessoas.',
      texto: 'Em janeiro de 1993 o Pastor Paulo Alves Corrêa assume a presidência e aceita um desafio audacioso: concluir a construção da nova sede. Em apenas nove meses é erguido um prédio de nove andares, com duas galerias, tanque batismal e um templo para quatro mil pessoas — que se tornou um verdadeiro marco arquitetônico e espiritual na cidade de Santos.',
      detalhe: 'A sede da Rua Dr. Manoel Tourinho passa a ser simultaneamente templo, centro de convenções e casa de oração para milhares de famílias de toda a Baixada Santista.',
      figuras: ['Pastor Dr. Paulo Alves Corrêa', 'Pastora Eliane Corrêa'],
      foto: FOTOS.temploCentral,
      legenda: 'A grandeza dos templos da Assembleia de Deus'
    },
    {
      id: 'lei16', ano: 2015, era: 'Reconhecimento Oficial', mapa: ['macuco', 'ponta'],
      titulo: 'O "Dia da Pioneira" vira lei estadual',
      resumo: 'A Lei 16.067/2015 inclui o Dia da Pioneira (5 de maio) no Calendário Oficial do Estado de São Paulo.',
      texto: 'A Lei 16.067, de 2015, institui o "Dia da Pioneira" no Calendário Oficial do Estado de São Paulo, celebrando a fundação da Assembleia de Deus em 5 de maio. O projeto reconhece oficialmente a história, a missão evangelística e a expressiva atuação social e em saúde da igreja no Estado.',
      detalhe: 'O marco legislativo foi conquistado na gestão do Deputado e Pastor Paulo Corrêa Jr, dando à igreja o reconhecimento oficial de sua contribuição para a sociedade paulista.',
      figuras: ['Dep. e Pastor Paulo Corrêa Jr'],
      foto: FOTOS.centenario3,
      legenda: 'Atos comemorativos da Assembleia de Deus'
    },
    {
      id: 'centenario', ano: 2024, era: 'Centenário', mapa: ['macuco', 'ponta', 'saosebast', 'caraguata', 'ubatuba', 'saovicente', 'mongagua', 'praiagrande', 'guaruja'],
      titulo: 'Cem anos de fé e missão',
      resumo: 'Em 5 de maio de 2024 a Assembleia de Deus em Santos celebra 100 anos como pioneira do pentecostalismo no Estado de São Paulo.',
      texto: 'O dia 5 de maio de 2024 marca o centenário da igreja. O Culto Cívico de Abertura das comemorações reúne autoridades, lideranças e milhares de fiéis na sede da Rua Dr. Manoel Tourinho, homenageando cem anos de história, fé e serviço à sociedade de Santos e de todo o litoral paulista.',
      detalhe: 'De uma casa no Ponta da Praia a uma rede de congregações por todo o litoral: um século de uma história que continua sendo escrita, culto após culto.',
      figuras: ['Pr. Dr. Paulo Alves Corrêa', 'Pastora Eliane Corrêa', 'Dep. e Pastor Paulo Corrêa Jr'],
      foto: FOTOS.centenario1,
      legenda: 'Centenário da Assembleia de Deus'
    }
  ];

  /* ---------------------------------------------------------------------
     CRENÇAS — doutrina clássica da Associação de Obreiros Cristãos (ADEG)
  --------------------------------------------------------------------- */
  var CRENCAS = [
    { t: 'O Deus Triúno', v: 'Deus Pai, Deus Filho e Deus Espírito Santo — um só Deus em três pessoas, igual em essência, poder e glória.' },
    { t: 'A Bíblia', v: 'As Escrituras Sagradas são a Palavra inspirada de Deus, infalível e suficiente para a fé e a vida.' },
    { t: 'Jesus Cristo', v: 'Deus manifestado em carne, nascido da virgem Maria, crucificado, morto, sepultado e ressuscitado ao terceiro dia.' },
    { t: 'A Salvação', v: 'Pela graça, mediante a fé: arrependimento dos pecados, confissão de Cristo como Senhor e batismo nas águas.' },
    { t: 'O Batismo no Espírito Santo', v: 'A segunda bênção que capacita o crente para a vida de testemunho, poder e adoração.' },
    { t: 'Os Dons Espirituais', v: 'A Igreja continua recebendo os dons: curas, profecia, línguas e interpretação, para a edificação do corpo.' },
    { t: 'A Santa Ceia', v: 'Memorial ordenado por Cristo, celebrado na Igreja como comunhão e lembrança da sua morte.' },
    { t: 'A Igreja', v: 'A comunhão dos crentes, organizada em congregações para o culto, o discipulado e a missão.' },
    { t: 'A Santificação', v: 'A vida de consagração contínua, separada para Deus, no dia a dia e nas relações.' },
    { t: 'A Volta de Cristo', v: 'O regresso pessoal, visível e triunfante do Senhor Jesus Cristo para levantar a sua Igreja.' },
    { t: 'A Ressurreição', v: 'A ressurreição dos mortos: os crentes para a vida eterna, e os que não creem para a condenação.' },
    { t: 'A Grande Comissão', v: 'Evangelizar, discipular, batizar e ensinar — o chamado que move a Pioneira desde 1924.' }
  ];

  /* ---------------------------------------------------------------------
     MINISTÉRIOS
  --------------------------------------------------------------------- */
  var MINISTERIOS = [
    { t: 'Adoração e Louvor', d: 'Ministério de música, cantores e instrumentistas que encaminha a adoração em todos os cultos.', icone: 'music' },
    { t: 'Escola Bíblica', d: 'EBD aos domingos, com turmas para todas as idades, formando discípulos na Palavra.', icone: 'book' },
    { t: 'Jovens & Conexão', d: 'Encontros, retiros e eventos para adolescentes e jovens viverem a fé com propósito.', icone: 'users' },
    { t: 'Família', d: 'Aconselhamento, preparo para o casamento e apoio às famílias em todas as fases da vida.', icone: 'heart' },
    { t: 'Missões', d: 'O coração da Pioneira: sustento de missionários e plantação de novas congregações.', icone: 'globe' },
    { t: 'Infância & Kids', d: 'Crianças formadas na fé com ensino bíblico lúdico e seguro, em ambiente próprio.', icone: 'smile' },
    { t: 'Obreiros e Diaconia', d: 'Formação e cuidado dos presbíteros, diáconos e cooperadores da casa.', icone: 'shield' },
    { t: 'Ação Social', d: 'Obras de assistência, saúde e apoio à comunidade — parte do reconhecimento recebido pela Lei 16.067/2015.', icone: 'handshake' },
    { t: 'Comunicação', d: 'Transmissões ao vivo, redes sociais e a rádio parceira Fly 99 FM 99.1.', icone: 'radio' },
    { t: 'Intercessão', d: 'Cadeia de oração e vigilância, sustentando a casa e as autoridades a cada semana.', icone: 'flame' }
  ];

  /* ---------------------------------------------------------------------
     LÍDERES ATUAIS (públicos, verificados em fontes oficiais)
  --------------------------------------------------------------------- */
  var LIDERES = [
    {
      nome: 'Pr. Dr. Paulo Alves Corrêa',
      cargo: 'Presidente da Igreja',
      desde: 'desde janeiro de 1993',
      bio: 'Assumiu a presidência em janeiro de 1993 e liderou a construção da nova sede de nove andares, com 4.000 lugares. Referência do pentecostalismo no litoral paulista.',
      tags: ['Presidência', 'Sede de 9 andares'],
      site: 'https://www.instagram.com/prpaulocorreaof/'
    },
    {
      nome: 'Pastora Eliane Corrêa',
      cargo: 'Co-pastora',
      desde: 'ministério conjunto',
      bio: 'Co-pastora da obra e apresentadora na Fly 99 FM, rádio gospel nº 1 da Baixada Santista, levando louvor e palavra a toda a região.',
      tags: ['Pastoral', 'Fly 99 FM'],
      site: 'https://www.instagram.com/elianecorreaoficial/'
    },
    {
      nome: 'Dep. e Pastor Paulo Corrêa Jr',
      cargo: 'Deputado e Pastor',
      desde: 'poder legislativo',
      bio: 'Deputado e pastor da casa. Na sua gestão foi aprovada a Lei 16.067/2015, que institui o "Dia da Pioneira" no Calendário Oficial do Estado de São Paulo.',
      tags: ['Legislativo', 'Lei 16.067/2015'],
      site: 'https://www.instagram.com/dep_paulocorreajr/'
    }
  ];

  var SUCESSAO = [
    { ano: '1924', nome: 'Missionário Daniel Berg', nota: 'Fundador — primeira AD do Estado de São Paulo' },
    { ano: '1926', nome: 'Missionário John Sorhein', nota: 'Sucessão inicial da obra em Santos' },
    { ano: '1929', nome: 'Missionário Simon Lundgreen', nota: 'Consolidação e expansão pelo litoral' },
    { ano: '1933', nome: 'Pr. Clímaco Bueno Aza', nota: 'Legalização da sociedade em 1934' },
    { ano: '1938', nome: 'Pr. Francisco Gonzaga', nota: 'Inauguração do templo da Rua Manoel Tourinho' },
    { ano: '1946', nome: 'Pr. Bruno Skolimowski', nota: 'Presidência a partir de janeiro de 1946' },
    { ano: '1962', nome: 'Pr. João Alves Corrêa', nota: 'Assumiu em 11 de fevereiro de 1962' },
    { ano: '1993', nome: 'Pr. Dr. Paulo Alves Corrêa', nota: 'Presidência atual e nova sede' }
  ];

  /* ---------------------------------------------------------------------
     SUCEDIMENTO DE LIDERANÇA DAS CONGREGAÇÕES (modelo padrão)
  --------------------------------------------------------------------- */
  /* ---------------------------------------------------------------------
     IGREJAS — Sede + Congregações reais (mapa + página igrejas.html)
     ►► EDITAR AQUI ◄◄
     `lat`/`lng` geocodificadas. `foto` pode ser URL real ou null (usa arte SVG).
  --------------------------------------------------------------------- */
  var IGREJAS = [
    {
      id: 'sede',
      nome: 'Igreja Sede — Macuco',
      apelido: 'A Pioneira',
      tipo: 'sede',
      cidade: 'Santos', uf: 'SP', bairro: 'Macuco',
      endereco: 'Rua Dr. Manoel Tourinho, 351 — Macuco',
      cep: '11015-031',
      telefone: '(13) 3222-0091',
      whatsapp: '551332220091',
      email: 'contato@admsantos.org.br',
      lat: -23.9576320, lng: -46.3187288,
      foto: null, cor: '#e9b54a',
      fundada: 1924, inauguracao: '5 de maio de 1924 (primeiro culto) · sede atual desde 1993',
      capacidade: '4.000 lugares · prédio de 9 andares',
      resumo: 'Coração da obra pioneira, a sede reúne templo, galerias, tanque batismal e centro de convenções na Rua Dr. Manoel Tourinho, no bairro Macuco.',
      descricao: [
        'A Igreja Sede é o berço do pentecostalismo no Estado de São Paulo. Foi aqui, no bairro Macuco, que a obra se fixou legalmente em 4 de setembro de 1934 e que o primeiro grande templo foi inaugurado em maio de 1938.',
        'Em janeiro de 1993, sob a presidência do Pastor Paulo Alves Corrêa, um prédio de nove andares foi erguido em apenas nove meses. Com duas galerias, tanque batismal e capacidade para quatro mil pessoas, o templo se tornou um dos marcos arquitetônicos e espirituais da cidade de Santos.',
        'Na sede concentram-se os principais cultos da semana, os eventos de convenção, o Centro de Pregação, as gravações das transmissões e a articulação das congregações e missões da Baixada Santista e do Litoral Norte.'
      ],
      historia: 'Fundada em 5 de maio de 1924 pelo missionário sueco Daniel Berg, a sede nasceu de cultos em lares da comunidade — como o de Vicente e Hermínia Lameira, e de Manoel Garcêz. O endereço da Rua Dr. Manoel Tourinho, 351, é o mesmo desde 1934 e atravessou quase um século de história.',
      pioneiros: ['Missionário Daniel Berg', 'Vicente e Hermínia Lameira', 'Manoel Garcêz e esposa', 'Pr. Clímaco Bueno Aza'],
      pastores: [
        { ano: '1924', nome: 'Missionário Daniel Berg' },
        { ano: '1926', nome: 'Missionário John Sorhein' },
        { ano: '1929', nome: 'Missionário Simon Lundgreen' },
        { ano: '1933', nome: 'Pr. Clímaco Bueno Aza' },
        { ano: '1938', nome: 'Pr. Francisco Gonzaga' },
        { ano: '1946', nome: 'Pr. Bruno Skolimowski' },
        { ano: '1962', nome: 'Pr. João Alves Corrêa' },
        { ano: '1993', nome: 'Pr. Dr. Paulo Alves Corrêa' }
      ],
      diretoria: [
        { nome: 'Pr. Dr. Paulo Alves Corrêa', cargo: 'Presidente' },
        { nome: 'Pastora Eliane Corrêa', cargo: 'Co-pastora' },
        { nome: 'Dep. e Pastor Paulo Corrêa Jr', cargo: 'Pastor / Deputado' },
        { nome: 'Presbítero e Diaconia', cargo: 'Conselho de Anciãos' }
      ],
      ministerios: MINISTERIOS.map(function (m) { return m.t; }),
      instagram: 'https://www.instagram.com/adsantosapioneira/',
      mapsQuery: 'Rua Dr. Manoel Tourinho, 351 — Macuco, Santos/SP',
      destaque: true
    },
    {
      id: 'campossales',
      nome: 'Congregação Campos Sales',
      apelido: 'AD Santos Campos Sales',
      tipo: 'congregacao',
      cidade: 'São Vicente', uf: 'SP', bairro: 'Centro',
      endereco: 'Rua Campos Sales, 153 — Centro',
      cep: '11000-000',
      telefone: '(13) 3222-0091',
      whatsapp: '551332220091',
      email: 'contato@admsantos.org.br',
      lat: -23.9662092, lng: -46.3892687,
      foto: null, cor: '#d8434b',
      fundada: 1980, inauguracao: 'Década de 1980',
      capacidade: 'Congregação local',
      resumo: 'Congregação no Centro de São Vicente, na Rua Campos Sales, reunindo famílias da Baixada Santista.',
      descricao: [
        'A Congregação Campos Sales é uma das casas de oração da Assembleia de Deus Ministério de Santos na cidade de São Vicente, localizada na Rua Campos Sales, nº 153, no Centro.',
        'A obra nasceu do coração missionário da Pioneira, que desde os anos 1920 espalhava pontos de pregação por toda a Baixada Santista. Hoje a congregação reúne famílias da cidade e das cidades vizinhas, mantendo a programação semanal de cultos e a Escola Bíblica.'
      ],
      historia: 'Plantada a partir da sede da Rua Dr. Manoel Tourinho, a congregação segue a tradição de abrir casas de pregação em cada novo bairro e cidade alcançada pela obra.',
      pioneiros: ['Famílias pioneiras da comunidade', 'Cooperadores da sede'],
      pastores: [
        { ano: 'Hoje', nome: 'Pastor local — Congregação Campos Sales' },
        { ano: 'Sede', nome: 'Pr. Dr. Paulo Alves Corrêa (supervisão)' }
      ],
      diretoria: [
        { nome: 'Pastor local', cargo: 'Responsável' },
        { nome: 'Presbítero / Diácono', cargo: 'Diaconia' },
        { nome: 'Cooperadores', cargo: 'Apoio pastoral' }
      ],
      ministerios: ['Adoração e Louvor', 'Escola Bíblica', 'Jovens & Conexão', 'Família', 'Infância & Kids', 'Intercessão'],
      instagram: 'https://www.facebook.com/assembleiadedeus.cong.campossales',
      mapsQuery: 'Rua Campos Sales, 153 — Centro, São Vicente/SP'
    },
    {
      id: 'mongagua',
      nome: 'Congregação Mongaguá',
      apelido: 'AD Min. de Santos — Mongaguá',
      tipo: 'congregacao',
      cidade: 'Mongaguá', uf: 'SP', bairro: 'Centro',
      endereco: 'Avenida São Paulo, 2920 — Centro',
      cep: '11730-000',
      telefone: '(13) 3222-0091',
      whatsapp: '551332220091',
      email: 'contato@admsantos.org.br',
      lat: -24.0988516, lng: -46.6287772,
      foto: null, cor: '#e9b54a',
      fundada: 1980, inauguracao: 'Década de 1980',
      capacidade: 'Congregação local',
      resumo: 'Congregação na Avenida São Paulo, no Centro de Mongaguá, servindo o litoral sul da Baixada Santista.',
      descricao: [
        'A Congregação Mongaguá atende o litoral sul da Baixada Santista, na Avenida São Paulo, 2920, no Centro da cidade.',
        'Faz parte da expansão missionária da Pioneira por todo o litoral, mantendo a mesma identidade doutrinária e o mesmo compromisso com a adoração, o discipulado e o serviço social que marcam a obra desde 1924.'
      ],
      historia: 'Integra a rede de congregações plantadas pela sede de Santos ao longo do litoral paulista, seguindo o mesmo movimento que já em 1929 alcançava os bairros e as cidades vizinhas.',
      pioneiros: ['Cooperadores da sede', 'Famílias da comunidade'],
      pastores: [
        { ano: 'Hoje', nome: 'Pastor local — Congregação Mongaguá' },
        { ano: 'Sede', nome: 'Pr. Dr. Paulo Alves Corrêa (supervisão)' }
      ],
      diretoria: [
        { nome: 'Pastor local', cargo: 'Responsável' },
        { nome: 'Presbítero / Diácono', cargo: 'Diaconia' },
        { nome: 'Cooperadores', cargo: 'Apoio pastoral' }
      ],
      ministerios: ['Adoração e Louvor', 'Escola Bíblica', 'Família', 'Intercessão'],
      instagram: 'https://www.instagram.com/adsantosapioneira',
      mapsQuery: 'Avenida São Paulo, 2920 — Centro, Mongaguá/SP'
    }
  ];

  /* ---------------------------------------------------------------------
     PONTOS HISTÓRICOS DO MAPA (para a página igrejas.html)
  --------------------------------------------------------------------- */
  var PONTOS_HISTORICOS = [
    { id: 'ponta', nome: 'Ponta da Praia', lat: -23.9862005, lng: -46.3017868,
      nota: 'Bairro do primeiro culto, em 5 de maio de 1924.', tipo: 'historico' },
    { id: 'macuco', nome: 'Macuco — Sede', lat: -23.9576320, lng: -46.3187288,
      nota: 'Rua Dr. Manoel Tourinho, 351 — sede desde 1934.', tipo: 'historico' }
  ];

  /* ---------------------------------------------------------------------
     VERSÍCULOS
  --------------------------------------------------------------------- */
  var VERSICULOS = [
    { t: 'Isaías 6:8', v: 'E ouvi a voz do Senhor, dizendo: A quem enviarei, e quem irá por nós? Então eu disse: Eis-me aqui, envia-me a mim.' },
    { t: 'Atos 1:8', v: 'Mas receberéis poder, quando vier sobre vós o Espírito Santo, e sereis minhas testemunhas.' },
    { t: 'Salmos 127:1', v: 'Se o Senhor não edificar a casa, em vão trabalham os que a edificam.' },
    { t: 'Mateus 28:19', v: 'Ide por todo o mundo e fazei discípulos a todas as nações.' },
    { t: 'Jeremias 29:11', v: 'Porque bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal.' }
  ];

  /* ---------------------------------------------------------------------
     EVENTOS (verifique/ajuste na igreja)
  --------------------------------------------------------------------- */
  var EVENTOS = [
    { d: 5, m: 5,  a: 'O Dia da Pioneira', s: 'Celebração oficial do aniversário da igreja e do Dia da Pioneira (Lei 16.067/2015), com culto cívico de abertura.', icone: 'flag', destaque: true },
    { d: 30, m: 4, a: 'Véspera do Centenário', s: 'Vigília especial de preparação espiritual para a data de 5 de maio.', icone: 'moon' },
    { d: 20, m: 7,  a: 'Congresso de Missões', s: 'Encontro anual de missões com missionários, pastores e cooperadores de todas as congregações.', icone: 'globe' },
    { d: 10, m: 10, a: 'Convenção de Jovens', s: 'Fim de semana de louvor, discipulado e integração com os jovens da Baixada Santista.', icone: 'users' },
    { d: 24, m: 12, a: 'Culto de Natal', s: 'Celebração de Natal com o ministério de adoração e o grupo infantil.', icone: 'gift' },
    { d: 31, m: 12, a: 'Vigília de Ano Novo', s: 'Culto de gratidão e consagração encerrando o ano na presença de Deus.', icone: 'star' }
  ];

  /* ---------------------------------------------------------------------
     TESTEMUNHOS
  --------------------------------------------------------------------- */
  var TESTEMUNHOS = [
    { t: 'Um berço de fé', a: 'Membro da comunidade', f: 'Cheguei à Pioneira criança e vi a nova sede nascer em nove meses. Hoje trago aqui os meus filhos.', cor: '#e9b54a' },
    { t: 'Cem anos e contando', a: 'Obreira da sede', f: 'Servir nesta casa é herança de família. Minha avó já vinha aqui, e a fé só cresceu.', cor: '#d8434b' },
    { t: 'A casa do litoral', a: 'Congregação Campos Sales', f: 'Sentimos a mesma identidade da sede, só que aqui em São Vicente. Somos uma só família.', cor: '#5cc8ff' },
    { t: 'Rádio que edifica', a: 'Ouvinte da Fly 99 FM', f: 'Ouvir a Fly 99 FM transformou meus trajetos. A voz da Pioneira sai do templo e alcança a cidade.', cor: '#ff8f6b' }
  ];

  /* ---------------------------------------------------------------------
     EXPANSÃO (para o mapa de igrejas.html)
  --------------------------------------------------------------------- */
  var EXPANSAO = [
    { id: 'ponta',       nome: 'Ponta da Praia',    lat: -23.9862005, lng: -46.3017868, ano: 1924, tipo: 'historico' },
    { id: 'macuco',      nome: 'Macuco (Sede)',     lat: -23.9576320, lng: -46.3187288, ano: 1934, tipo: 'historico' },
    { id: 'saovicente',  nome: 'São Vicente',       lat: -23.9664177, lng: -46.3861401, ano: 1929, tipo: 'historico' },
    { id: 'praiagrande', nome: 'Praia Grande',      lat: -24.0089790, lng: -46.4144939, ano: 1929, tipo: 'historico' },
    { id: 'guaruja',     nome: 'Guarujá',           lat: -23.9927768, lng: -46.2558332, ano: 1929, tipo: 'historico' },
    { id: 'itanhaem',    nome: 'Itanhaém',          lat: -24.1833421, lng: -46.7896229, ano: 1929, tipo: 'historico' },
    { id: 'mongagua',    nome: 'Mongaguá',          lat: -24.0988516, lng: -46.6287772, ano: 1929, tipo: 'historico' },
    { id: 'saosebast',   nome: 'São Sebastião',     lat: -23.8027866, lng: -45.4070527, ano: 1929, tipo: 'historico' },
    { id: 'caraguata',   nome: 'Caraguatatuba',     lat: -23.6202800, lng: -45.4130600, ano: 1929, tipo: 'historico' },
    { id: 'ubatuba',     nome: 'Ubatuba',           lat: -23.3977491, lng: -45.0819990, ano: 1929, tipo: 'historico' }
  ];

  /* ---------------------------------------------------------------------
     PALETAS
  --------------------------------------------------------------------- */
  var PALETTAS = [
    { id: 'ouro',    label: 'Ouro da Pioneira',  base: '#e9b54a', sky1: '#1b2752', sky2: '#070a16', glow: 0x6d5220, sun: 0xfff0c4, roof: 0x6b2f24 },
    { id: 'escarlate',label:'Escarlate',         base: '#d8434b', sky1: '#2a1636', sky2: '#0d0612', glow: 0x6d2026, sun: 0xffd9c4, roof: 0x3a1c34 },
    { id: 'azul',    label: 'Azul da Graça',     base: '#5cc8ff', sky1: '#12243f', sky2: '#05080f', glow: 0x204a6d, sun: 0xd6f2ff, roof: 0x1f3d5c },
    { id: 'verde',   label: 'Verde Esperança',   base: '#6fd08c', sky1: '#12303a', sky2: '#050c10', glow: 0x206d4a, sun: 0xdcffe9, roof: 0x1f4a3d },
    { id: 'violeta', label: 'Violeta Adoração',  base: '#b58cff', sky1: '#241a44', sky2: '#080614', glow: 0x4a206d, sun: 0xe9dcff, roof: 0x33215c },
    { id: 'rosa',    label: 'Rosa da Manhã',     base: '#ff8f6b', sky1: '#3a2036', sky2: '#0d0710', glow: 0x6d3a20, sun: 0xffe3d6, roof: 0x5c2c2c }
  ];

  return {
    CONFIG: CONFIG, STATS: STATS, CULTOS: CULTOS,
    FOTOS: FOTOS, CREDITO_FOTOS: CREDITO_FOTOS,
    TRAJETORIA: TRAJETORIA, PONTOS_MAPA: PONTOS_MAPA,
    CRENCAS: CRENCAS, MINISTERIOS: MINISTERIOS,
    LIDERES: LIDERES, SUCESSAO: SUCESSAO,
    IGREJAS: IGREJAS, PONTOS_HISTORICOS: PONTOS_HISTORICOS,
    EXPANSAO: EXPANSAO,
    EVENTOS: EVENTOS, TESTEMUNHOS: TESTEMUNHOS, VERSICULOS: VERSICULOS,
    PALETTAS: PALETTAS,
    PALETTES: PALETTAS   /* alias de segurança */
  };
})();
