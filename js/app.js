/**
 * RAÍCES VIVAS — Frontend Application Engine
 * Gestión de SPA, filtros reactivos, relatos culturales y carrito de demostración
 */

// ==========================================
// 1. BASE DE DATOS LOCAL Y RELATOS CULTURALES
// ==========================================

const STORIES_DATA = [
  {
    id: "manco-capac",
    title: "La leyenda de Manco Cápac y Mama Ocllo",
    region: "Cusco",
    theme: "Mito de origen",
    format: "Relato ilustrado",
    image: "assets/images/story-manco-capac.webp",
    source: "Según las crónicas tradicionales recogidas por el Inca Garcilaso de la Vega en los Comentarios Reales de los Incas.",
    paragraphs: [
      "Según una de las versiones tradicionales más difundidas de la tradición oral andina, el dios Sol o Inti contempló con preocupación el estado de desorden y dispersión en el que habitaban los primeros seres humanos sobre la tierra.",
      "Para brindarles orden, conocimiento y convivencia comunitaria, el dios Sol hizo emerger de las aguas sagradas del lago Titicaca a sus hijos Manco Cápac y Mama Ocllo, encomendándoles una misión civilizadora de trascendencia histórica y cósmica.",
      "El Inti les entregó una vara de oro sagrada con la indicación de caminar hacia el norte y fundar su morada en el lugar exacto donde la barreta se hundiese con facilidad en la tierra fértil. Tras un largo peregrinar, la vara se sumergió al pie del cerro Huanacaure.",
      "En aquel fértil valle fundaron la ciudad del Cusco. Manco Cápac enseñó a los hombres las labores del cultivo de la tierra y la organización del ayllu, mientras Mama Ocllo instruyó a las mujeres en el arte del tejido, la alfarería y las faenas del hogar."
    ]
  },
  {
    id: "pishtaco",
    title: "El Pishtaco",
    region: "Andes",
    theme: "Mitos y creencias",
    format: "Relato ilustrado",
    image: "assets/images/story-pishtaco.webp",
    source: "Tradición oral andina documentada en investigaciones antropológicas de la sierra central y sur del Perú.",
    paragraphs: [
      "En diversas zonas de los Andes peruanos persiste el relato oral del Pishtaco (o Ñakaq), una figura espectral y enigmática que suele ser descrita como un forastero solitario que transita por caminos desolados durante la noche.",
      "La creencia popular advierte que este personaje acecha a caminantes solitarios para extraer su grasa corporal, elemento que en el imaginario andino simboliza la energía vital, la fuerza y la salud del ser humano.",
      "Distintas aproximaciones antropológicas señalan que este relato surgió y cobró fuerza durante la época colonial, funcionando como una metáfora colectiva ante el temor a la explotación foránea y la violencia ejercida sobre las comunidades campesinas.",
      "Este relato no posee una única versión universal ni fija, sino múltiples variaciones transmitidas oralmente que expresan la memoria comunitaria, la cautela ante lo desconocido y la defensa del territorio."
    ]
  },
  {
    id: "yacuruna",
    title: "Yacuruna",
    region: "Amazonía",
    theme: "Seres de la naturaleza",
    format: "Relato ilustrado",
    image: "assets/images/story-yacuruna.webp",
    source: "Tradición oral de los pueblos ribereños e indígenas de la cuenca amazónica peruana.",
    paragraphs: [
      "En las diversas tradiciones orales de la Amazonía peruana, el Yacuruna (cuyo nombre en quechua alude al 'hombre del agua') es considerado uno de los espíritus guardianes más respetados y poderosos del mundo fluvial.",
      "Se le describe habitando en grandes palacios cristalinos sumergidos en las profundidades de los ríos y cochas, cabalgando sobre caimanes gigantes y utilizando peces como sus mensajeros acuáticos.",
      "Los relatos cuentan que el Yacuruna puede adoptar la apariencia de una persona atractiva que viste ropajes elegantes para encantar a quienes transitan por las orillas de los ríos al caer el atardecer, invitándolos a sumergirse a su mundo subacuático.",
      "Más allá del misterio de su figura, esta creencia cumple una función pedagógica y protectora fundamental en la cosmovisión amazónica: recordar a las personas el respeto reverente hacia el río, sus corrientes y los seres que habitan sus aguas."
    ]
  }
];

const GALLERY_DATA = [
  { id: 1, title: "Mujer andina", region: "Cusco", style: "Retrato", format: "Digital", image: "assets/images/art-mujer-andina.webp", author: "Obra conceptual de demostración", desc: "Retrato que resalta el colorido de la lliclla tradicional y el sombrero cusqueño." },
  { id: 2, title: "Machu Picchu", region: "Cusco", style: "Paisaje", format: "Digital", image: "assets/images/art-machu-picchu.webp", author: "Obra conceptual de demostración", desc: "Vista panorámica del santuario histórico andino bañado por la luz del atardecer." },
  { id: 3, title: "Cóndor andino", region: "Andes", style: "Fauna", format: "Digital", image: "assets/images/art-condor.webp", author: "Obra conceptual de demostración", desc: "Representación del majestuoso cóndor surcando los cielos de la cordillera." },
  { id: 4, title: "Flor de la cantuta", region: "Ayacucho", style: "Flora", format: "Ilustración", image: "assets/images/art-cantuta.webp", author: "Obra conceptual de demostración", desc: "Flor sagrada de los incas, símbolo de perseverancia y belleza natural." },
  { id: 5, title: "Textil tradicional", region: "Puno", style: "Cultura", format: "Digital", image: "assets/images/art-textil.webp", author: "Obra conceptual de demostración", desc: "Patrones geométricos y simetría inspirados en el tejido tradicional altiplánico." },
  { id: 6, title: "Lago Titicaca", region: "Puno", style: "Paisaje", format: "Digital", image: "assets/images/art-titicaca.webp", author: "Obra conceptual de demostración", desc: "Navegación tradicional en balsa de totora sobre las aguas del lago navegable más alto del mundo." },
  { id: 7, title: "Llama andina", region: "Andes", style: "Fauna", format: "Ilustración", image: "assets/images/art-llama.webp", author: "Obra conceptual de demostración", desc: "Camélido emblemático de la puna andina integrado al paisaje de ichu y montañas." },
  { id: 8, title: "Joven quechua", region: "Cusco", style: "Retrato", format: "Digital", image: "assets/images/art-joven-quechua.webp", author: "Obra conceptual de demostración", desc: "Retrato contemporáneo de un joven portando el chullo tradicional andino." },
  { id: 9, title: "Caballito de totora", region: "La Libertad", style: "Cultura", format: "Digital", image: "assets/images/art-caballito-totora.webp", author: "Obra conceptual de demostración", desc: "Embarcación milenaria de pesca artesanal utilizada en las costas de Huanchaco." },
  { id: 10, title: "Mujer amazónica", region: "Amazonía", style: "Retrato", format: "Digital", image: "assets/images/art-mujer-amazonica.webp", author: "Obra conceptual de demostración", desc: "Expresión cultural con pintura facial tradicional inspirada en la biodiversidad de la selva." },
  { id: 11, title: "Cerámica mochica", region: "Lambayeque", style: "Cultura", format: "Digital", image: "assets/images/art-ceramica-mochica.webp", author: "Obra conceptual de demostración", desc: "Vasija ceremonial de asa estribo que representa la cosmovisión de la costa norte." },
  { id: 12, title: "Gallito de las rocas", region: "Amazonía", style: "Fauna", format: "Ilustración", image: "assets/images/art-gallito-rocas.webp", author: "Obra conceptual de demostración", desc: "Ave nacional del Perú en su hábitat natural del bosque de neblina oriental." },
  { id: 13, title: "Líneas de Nazca", region: "Ica", style: "Patrimonio", format: "Digital", image: "assets/images/art-lineas-nazca.webp", author: "Obra conceptual de demostración", desc: "Geoglifo milenario del colibrí trazado sobre las pampas desérticas de Nazca." },
  { id: 14, title: "Danza tradicional", region: "Ayacucho", style: "Cultura", format: "Digital", image: "assets/images/art-danza.webp", author: "Obra conceptual de demostración", desc: "Danzante en plena expresión festiva con vestimenta bordada multicolor." },
  { id: 15, title: "Atardecer andino", region: "Andes", style: "Paisaje", format: "Digital", image: "assets/images/art-atardecer.webp", author: "Obra conceptual de demostración", desc: "Gama cromática de ocres y morados reflejados en las lagunas de altura." },
  { id: 16, title: "Orquídea de los Andes", region: "Pasco", style: "Flora", format: "Ilustración", image: "assets/images/art-orquidea.webp", author: "Obra conceptual de demostración", desc: "Especie botánica de orquídea nativa de los valles interandinos y ceja de selva." }
];

const REPO_DATA = [
  {
    id: "repo-tradiciones",
    title: "Tradiciones y costumbres",
    category: "Artículo",
    region: "Nacional",
    theme: "Comunidad",
    icon: "📖",
    summary: "Conoce las prácticas culturales, fiestas patronales y saberes de diversas regiones.",
    image: "assets/images/repo-tradiciones.webp",
    sources: "Ministerio de Cultura del Perú — Registro de Patrimonio Inmaterial.",
    content: "<p>Las tradiciones comunitarias peruanas como el Ayni y la Minka continúan vivas en la organización social rural, sustentando la solidaridad colectiva y el trabajo solidario en bien del pueblo.</p><p>A través de fiestas patronales, ferias y rituales vinculados al ciclo agrícola, las comunidades renuevan sus lazos con la memoria de sus ancestros y la naturaleza.</p>"
  },
  {
    id: "repo-lenguas",
    title: "Lenguas originarias",
    category: "Guía lingüística",
    region: "Andes / Amazonía",
    theme: "Lenguas",
    icon: "📄",
    summary: "Información sobre las 48 lenguas originarias del Perú y su valor patrimonial.",
    image: "assets/images/repo-lenguas.webp",
    sources: "Base de Datos de Pueblos Indígenas u Originarios (BDPI).",
    content: "<p>El Perú reconoce 48 lenguas originarias (4 andinas y 44 amazónicas). Entre las más extendidas se encuentran el Quechua en sus distintas variantes, el Aimara, el Ashaninka y el Awajún.</p><p>Cada lengua es un reservorio irremplazable de conocimientos ecológicos, cosmovisión y sabiduría sobre la botánica y geografía local.</p>"
  },
  {
    id: "repo-musica",
    title: "Música y danzas",
    category: "Registro sonoro",
    region: "Costa / Andes",
    theme: "Música",
    icon: "🎵",
    summary: "Explora la riqueza musical del Perú: instrumentos autóctonos y danzas reconocidas.",
    image: "assets/images/repo-musica.webp",
    sources: "Archivo de Música Tradicional Andina — Instituto de Etnomusicología PUCP.",
    content: "<p>La sonoridad peruana comprende desde los vientos ancestrales como zampoñas y quenas, hasta la percusión afroperuana del cajón en la costa y los violines de la Danza de las Tijeras.</p><p>La danza no es solo espectáculo: constituye un acto de agradecimiento ritual y reafirmación de identidad en cada fiesta patronal.</p>"
  },
  {
    id: "repo-patrimonio",
    title: "Patrimonio cultural",
    category: "Ficha patrimonial",
    region: "Nacional",
    theme: "Arqueología",
    icon: "🏛️",
    summary: "Recursos sobre sitios y manifestaciones reconocidas como patrimonio de la humanidad.",
    image: "assets/images/repo-patrimonio.webp",
    sources: "UNESCO / Sistema Nacional de Información Cultural.",
    content: "<p>El patrimonio abarca desde monumentos arqueológicos milenarios como Chavín, Chan Chan y Caral, hasta complejas expresiones inmateriales como el Sistema de Jueces de Agua de Corongo.</p><p>Su conservación requiere una gestión inclusiva que reconozca los derechos y la voz de las poblaciones que habitan en su entorno.</p>"
  }
];

const STORE_DATA = [
  { id: "p1", title: "Ilustración — Montaña andina", category: "Ilustraciones", price: 25.00, image: "assets/images/store-montana.webp" },
  { id: "p2", title: "Ilustración — Cultura andina contemporánea", category: "Ilustraciones", price: 25.00, image: "assets/images/store-cultura.webp" },
  { id: "p3", title: "Póster — Textil peruano", category: "Posters", price: 30.00, image: "assets/images/store-textil.webp" },
  { id: "p4", title: "Colección Digital — Iconografía Moche", category: "Digitales", price: 18.00, image: "assets/images/art-ceramica-mochica.webp" },
  { id: "p5", title: "Póster — Fauna de la Puna (Llama)", category: "Posters", price: 28.00, image: "assets/images/art-llama.webp" },
  { id: "p6", title: "Sticker Pack — Raíces Vivas", category: "Otros", price: 12.00, image: "assets/images/icon-stories.webp" }
];

let cartState = [];

// ==========================================
// 2. ENRUTAMIENTO SPA Y CONTROL DE VISTAS
// ==========================================

function navigateTo(sectionId) {
  // Ocultar todas las secciones
  const sections = document.querySelectorAll('.view-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // Mostrar la sección seleccionada
  const target = document.getElementById(`view-${sectionId}`);
  if (target) {
    target.classList.add('active');
  }

  // Actualizar cápsula activa en el menú
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    if (btn.getAttribute('data-target') === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Cerrar menú móvil si estuviera abierto
  const navMenu = document.getElementById('navMenu');
  if (navMenu) navMenu.classList.remove('open');

  // Scroll suave arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Control Menú Responsive
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

// ==========================================
// 3. RENDERIZADO Y FILTRADO DE CONTENIDOS
// ==========================================

// HISTORIAS Y LEYENDAS
function renderStories(items) {
  const container = document.getElementById('storiesGrid');
  const emptyState = document.getElementById('storiesEmptyState');
  container.innerHTML = '';

  if (items.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  items.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.onclick = () => openStoryModal(story.id);
    card.innerHTML = `
      <div class="story-card-img-box">
        <img src="${story.image}" alt="${story.title}" onerror="handleImageError(this, '${story.title}')">
      </div>
      <div class="story-card-body">
        <h3>${story.title}</h3>
        <span class="badge-capsule">${story.region}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterStories() {
  const search = document.getElementById('storiesSearchInput').value.toLowerCase();
  const region = document.getElementById('storiesRegionFilter').value;
  const theme = document.getElementById('storiesThemeFilter').value;
  const format = document.getElementById('storiesFormatFilter').value;

  const filtered = STORIES_DATA.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search) || item.paragraphs.some(p => p.toLowerCase().includes(search));
    const matchRegion = (region === 'all' || item.region === region);
    const matchTheme = (theme === 'all' || item.theme === theme);
    const matchFormat = (format === 'all' || item.format === format);
    return matchSearch && matchRegion && matchTheme && matchFormat;
  });

  renderStories(filtered);
}

// GALERÍA DE ILUSTRACIONES
function renderGallery(items) {
  const container = document.getElementById('galleryGrid');
  const emptyState = document.getElementById('galleryEmptyState');
  container.innerHTML = '';

  if (items.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  items.forEach(art => {
    const card = document.createElement('div');
    card.className = 'art-card';
    card.onclick = () => openArtModal(art.id);
    card.innerHTML = `
      <div class="art-card-img">
        <img src="${art.image}" alt="${art.title}" onerror="handleImageError(this, '${art.title}')">
      </div>
      <div class="art-card-info">
        <h4>${art.title}</h4>
        <div class="badges-row">
          <span class="tag-badge region">${art.region}</span>
          <span class="tag-badge style">${art.style}</span>
          <span class="tag-badge format">${art.format}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterGallery() {
  const search = document.getElementById('gallerySearchInput').value.toLowerCase();
  const region = document.getElementById('galleryRegionFilter').value;
  const style = document.getElementById('galleryStyleFilter').value;
  const format = document.getElementById('galleryFormatFilter').value;

  const filtered = GALLERY_DATA.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search);
    const matchRegion = (region === 'all' || item.region === region);
    const matchStyle = (style === 'all' || item.style === style);
    const matchFormat = (format === 'all' || item.format === format);
    return matchSearch && matchRegion && matchStyle && matchFormat;
  });

  renderGallery(filtered);
}

// REPOSITORIO CULTURAL
function renderRepo(items) {
  const container = document.getElementById('repoList');
  const emptyState = document.getElementById('repoEmptyState');
  container.innerHTML = '';

  if (items.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'repo-card-row';
    row.onclick = () => openRepoModal(item.id);
    row.innerHTML = `
      <div class="repo-icon-box">${item.icon}</div>
      <div class="repo-text-box">
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
      </div>
      <div class="repo-preview-img">
        <img src="${item.image}" alt="${item.title}" onerror="handleImageError(this, '${item.title}')">
      </div>
      <div class="repo-arrow">&rarr;</div>
    `;
    container.appendChild(row);
  });
}

function filterRepo() {
  const search = document.getElementById('repoSearchInput').value.toLowerCase();
  const type = document.getElementById('repoTypeFilter').value;
  const region = document.getElementById('repoRegionFilter').value;
  const theme = document.getElementById('repoThemeFilter').value;

  const filtered = REPO_DATA.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search) || item.summary.toLowerCase().includes(search);
    const matchType = (type === 'all' || item.category === type);
    const matchRegion = (region === 'all' || item.region === region);
    const matchTheme = (theme === 'all' || item.theme === theme);
    return matchSearch && matchType && matchRegion && matchTheme;
  });

  renderRepo(filtered);
}

// TIENDA CONCEPTUAL
let currentStoreCat = 'all';

function selectStoreCat(category) {
  currentStoreCat = category;
  document.querySelectorAll('#storeCategoryPills .pill-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  filterStore();
}

function renderStore(items) {
  const container = document.getElementById('storeGrid');
  const emptyState = document.getElementById('storeEmptyState');
  container.innerHTML = '';

  if (items.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  items.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'store-card';
    card.innerHTML = `
      <div class="store-card-img">
        <img src="${prod.image}" alt="${prod.title}" onerror="handleImageError(this, '${prod.title}')">
      </div>
      <h4 class="store-card-title">${prod.title}</h4>
      <div class="store-card-bottom">
        <span class="store-price">S/ ${prod.price.toFixed(2)}</span>
        <button class="cart-icon-btn" onclick="addToCart('${prod.id}')" title="Añadir al carrito">🛒</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterStore() {
  const search = document.getElementById('storeSearchInput').value.toLowerCase();
  const filtered = STORE_DATA.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search);
    const matchCat = (currentStoreCat === 'all' || item.category === currentStoreCat);
    return matchSearch && matchCat;
  });
  renderStore(filtered);
}

// ==========================================
// 4. CARRITO DE DEMOSTRACIÓN
// ==========================================

function addToCart(productId) {
  const prod = STORE_DATA.find(p => p.id === productId);
  if (!prod) return;

  const existing = cartState.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.push({ ...prod, qty: 1 });
  }

  updateCartUI();
  toggleCartModal(true);
}

function updateCartQty(productId, delta) {
  const item = cartState.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cartState = cartState.filter(i => i.id !== productId);
  }
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');

  const totalItems = cartState.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cartState.reduce((sum, item) => sum + (item.price * item.qty), 0);

  countBadge.textContent = totalItems;
  subtotalEl.textContent = `S/ ${totalAmount.toFixed(2)}`;

  itemsContainer.innerHTML = '';
  if (cartState.length === 0) {
    itemsContainer.innerHTML = '<p class="empty-state">Tu carrito está vacío.</p>';
    return;
  }

  cartState.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <div>S/ ${item.price.toFixed(2)} x ${item.qty}</div>
      </div>
      <div style="display: flex; gap: 6px; align-items: center;">
        <button class="btn-secondary" onclick="updateCartQty('${item.id}', -1)">-</button>
        <span>${item.qty}</span>
        <button class="btn-secondary" onclick="updateCartQty('${item.id}', 1)">+</button>
      </div>
    `;
    itemsContainer.appendChild(row);
  });
}

function toggleCartModal(show) {
  const modal = document.getElementById('cartModal');
  if (show) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function checkoutDemo() {
  if (cartState.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert("¡Pedido conceptual simulado con éxito! Esta es una función de demostración para evaluación de interfaz.");
  cartState = [];
  updateCartUI();
  toggleCartModal(false);
}

// ==========================================
// 5. MODALES DE DETALLE
// ==========================================

function openStoryModal(id) {
  const story = STORIES_DATA.find(s => s.id === id);
  if (!story) return;

  document.getElementById('mStoryImg').src = story.image;
  document.getElementById('mStoryRegion').textContent = story.region;
  document.getElementById('mStoryTitle').textContent = story.title;
  document.getElementById('mStorySource').textContent = story.source;

  const textDiv = document.getElementById('mStoryText');
  textDiv.innerHTML = story.paragraphs.map(p => `<p>${p}</p>`).join('');

  document.getElementById('storyDetailModal').classList.remove('hidden');
}

function closeStoryModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('storyDetailModal').classList.add('hidden');
}

function openArtModal(id) {
  const art = GALLERY_DATA.find(a => a.id === id);
  if (!art) return;

  document.getElementById('mArtImg').src = art.image;
  document.getElementById('mArtTitle').textContent = art.title;
  document.getElementById('mArtDesc').textContent = art.desc;
  document.getElementById('mArtAuthor').textContent = art.author;

  const badgesDiv = document.getElementById('mArtBadges');
  badgesDiv.innerHTML = `
    <span class="tag-badge region">${art.region}</span>
    <span class="tag-badge style">${art.style}</span>
    <span class="tag-badge format">${art.format}</span>
  `;

  document.getElementById('artDetailModal').classList.remove('hidden');
}

function closeArtModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('artDetailModal').classList.add('hidden');
}

function openRepoModal(id) {
  const item = REPO_DATA.find(r => r.id === id);
  if (!item) return;

  document.getElementById('mRepoImg').src = item.image;
  document.getElementById('mRepoCategory').textContent = `${item.category} • ${item.region}`;
  document.getElementById('mRepoTitle').textContent = item.title;
  document.getElementById('mRepoContent').innerHTML = item.content;
  document.getElementById('mRepoSources').textContent = item.sources;

  document.getElementById('repoDetailModal').classList.remove('hidden');
}

function closeRepoModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById('repoDetailModal').classList.add('hidden');
}

// ==========================================
// 6. FORMULARIOS Y VALIDACIONES
// ==========================================

function handleRegisterSubmit(e) {
  e.preventDefault();
  const pass = document.getElementById('regPass').value;
  const passConf = document.getElementById('regPassConfirm').value;

  if (pass !== passConf) {
    alert("Las contraseñas no coinciden. Por favor revisa e intenta nuevamente.");
    return;
  }

  document.getElementById('registerSuccessMsg').classList.remove('hidden');
  e.target.reset();
}

function handleFileSelect(input) {
  if (input.files && input.files[0]) {
    document.getElementById('selectedFileName').textContent = `Archivo seleccionado: ${input.files[0].name}`;
  }
}

function handleArtSubmit(e) {
  e.preventDefault();
  document.getElementById('artSuccessMsg').classList.remove('hidden');
  e.target.reset();
  document.getElementById('selectedFileName').textContent = "(Formato JPG, PNG o PDF)";
}

function handleContactSubmit(e) {
  e.preventDefault();
  document.getElementById('contactSuccessMsg').classList.remove('hidden');
  e.target.reset();
}

// ==========================================
// 7. PLACEHOLDER / GESTIÓN DE IMÁGENES
// ==========================================

/**
 * Reemplazo editorial estético en caso de que aún no existan los archivos locales
 * Mantiene la armonía visual de las 9 referencias sin romper el layout
 */
function handleImageError(imgElement, label) {
  const fallback = document.createElement('div');
  fallback.className = 'placeholder-art-fallback';
  fallback.innerHTML = `<span>🎨 [Ilustración Editorial: ${label}]</span><small style="font-weight:400; font-size:0.75rem; margin-top:4px;">assets/images/${imgElement.src.split('/').pop()}</small>`;
  if (imgElement.parentNode) {
    imgElement.parentNode.replaceChild(fallback, imgElement);
  }
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderStories(STORIES_DATA);
  renderGallery(GALLERY_DATA);
  renderRepo(REPO_DATA);
  renderStore(STORE_DATA);
});