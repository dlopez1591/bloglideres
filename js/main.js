const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = open ? '×' : '☰';
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open'); menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.textContent = '☰'; menuToggle.setAttribute('aria-label', 'Abrir menú'); }
}));
const filterButtons = document.querySelectorAll('.filter-button');
const storyCards = document.querySelectorAll('.story-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
  storyCards.forEach(card => { const categories = (card.dataset.categories || '').split(' '); card.hidden = filter !== 'all' && !categories.includes(filter); });
}));
const profiles = {
 
  
brigitte: {
  eyebrow: 'PERFIL / BIODIVERSIDAD Y DIVERSIDAD',
  title: 'Brigitte Baptiste',
  body: `
    <img
      src="assets/images/bri.png"
      alt="Retrato de Brigitte Baptiste"
      class="profile-image"
    >

    <p class="profile-intro">
      <strong>¿Qué podemos aprender de ella?</strong>
      Que la biodiversidad no es solamente un asunto de árboles,
      animales o paisajes bonitos. También tiene que ver con la
      economía, la cultura, las decisiones políticas y la forma
      en que convivimos con otras especies.
    </p>

    <h3>Vida y obra</h3>
    <p>
      Brigitte Baptiste es una bióloga colombiana especializada
      en biodiversidad y sostenibilidad. Estudió Biología en la
      Pontificia Universidad Javeriana y realizó estudios de
      posgrado en conservación y desarrollo tropical en la
      Universidad de Florida. Su trayectoria combina la
      investigación científica, la docencia y la divulgación
      ambiental.
    </p>
    <p>
      Durante varios años estuvo vinculada al Instituto de
      Investigación de Recursos Biológicos Alexander von Humboldt,
      entidad dedicada al conocimiento de la biodiversidad
      colombiana. Allí llegó a ocupar la dirección general.
      En 2019 asumió la rectoría de la Universidad Ean, desde
      donde impulsó iniciativas relacionadas con el
      emprendimiento y la sostenibilidad.
    </p>

    <h3>Acciones sociales</h3>
    <p>
      Su trabajo ha contribuido a conectar la ciencia con las
      decisiones sobre el territorio, la conservación y el
      desarrollo sostenible. También ha promovido conversaciones
      públicas sobre diversidad de género y ha mostrado que
      los temas ambientales no pueden separarse de la cultura,
      las comunidades y las actividades económicas.
    </p>
    <p>
      Su trayectoria nos invita a cuestionar una idea muy común:
      que el progreso consiste únicamente en producir y consumir
      más. Pensar en sostenibilidad también implica preguntarnos
      qué recursos utilizamos, qué consecuencias generan nuestras
      decisiones y quiénes asumen sus costos.
    </p>

    <h3>Reconocimientos</h3>
    <ul>
      <li>
        <strong>Doctorado honoris causa en Gestión Ambiental</strong>,
        otorgado por la Universidad de la Paz (UNIPAZ).
      </li>
      <li>
        <strong>Reconocimiento de Forbes Colombia en 2020</strong>,
        al incluirla entre las 50 mujeres más poderosas del país.
      </li>
      <li>
        <strong>Galardón Prince Claus de 2017</strong>,
        relacionado con sus aportes al desarrollo y la cultura.
      </li>
    </ul>

    <h3>La ética detrás de su trabajo</h3>
    <p>
      Su trayectoria permite relacionar la ética con la
      responsabilidad ambiental: nuestras decisiones no afectan
      únicamente a las personas que viven hoy, sino también a
      las comunidades futuras y a los ecosistemas de los que
      dependemos.
    </p>

    <p>
      <strong>Pregunta para debatir:</strong>
      ¿Podemos llamar progreso a un modelo de desarrollo que
      genera beneficios económicos, pero deteriora la
      biodiversidad y afecta a las comunidades?
    </p>

    <h3>Fuentes para consultar</h3>
    <ul>
      <li>
        <a href="https://repository.universidadean.edu.co/entities/person/b00d78ef-a276-4054-b18c-d2c31fb4c94f"
           target="_blank" rel="noopener noreferrer">
          Universidad Ean: perfil biográfico
        </a>
      </li>
      <li>
        <a href="https://universidadean.edu.co/noticias/brigitte-baptiste-es-una-de-las-50-mujeres-mas-poderosas-de-colombia-revista-forbes"
           target="_blank" rel="noopener noreferrer">
          Universidad Ean: reconocimiento de Forbes
        </a>
      </li>
      <li>
        <a href="https://www.pactoglobal-colombia.org/conferencistas-congreso/brigitte-baptiste.html"
           target="_blank" rel="noopener noreferrer">
          Pacto Global Red Colombia: trayectoria y galardón Prince Claus
        </a>
      </li>
    </ul>
  `
},
 
francisco: {
  eyebrow: 'PERFIL / ACTIVISMO AMBIENTAL JUVENIL',
  title: 'Francisco Vera',
  body: `
    <img
      src="assets/images/fra.png"
      alt="Retrato ilustrado de Francisco Vera en un entorno ambiental"
      class="profile-image"
    >

    <p class="profile-intro">
      <strong>¿Qué podemos aprender de él?</strong>
      Que la edad no debería ser una barrera para participar
      en las decisiones que afectan nuestro futuro. Defender
      el planeta también significa exigir que las nuevas
      generaciones sean escuchadas.
    </p>

    <h3>Vida y obra</h3>
    <p>
      Francisco Vera Manzanares es un activista ambiental
      colombiano que se dio a conocer desde niño por su
      participación en iniciativas de protección de la
      naturaleza y educación ambiental. Su trabajo ha
      contribuido a visibilizar el papel de niñas, niños
      y jóvenes en las conversaciones sobre la crisis
      climática y la sostenibilidad.
    </p>

    <h3>Acciones sociales</h3>
    <p>
      A través de sus intervenciones públicas y su activismo,
      ha promovido la defensa del medioambiente, la educación
      ambiental y la participación de la infancia en asuntos
      que afectan su presente y su futuro. Su trayectoria
      cuestiona la idea de que solamente los adultos tienen
      derecho a opinar sobre las decisiones colectivas.
    </p>
    <p>
      Su ejemplo también permite reflexionar sobre la
      responsabilidad de los gobiernos, las empresas y la
      ciudadanía frente al cambio climático, la pérdida de
      biodiversidad y el uso de los recursos naturales.
    </p>

    <h3>Reconocimientos e incidencia</h3>
    <p>
      Su activismo ha recibido atención nacional e internacional
      y lo ha llevado a participar en espacios de conversación
      sobre derechos ambientales y participación juvenil.
      Para documentar premios o distinciones específicas,
      es importante consultar fuentes institucionales y
      confirmar el nombre y la fecha de cada reconocimiento.
    </p>

    <h3>La ética detrás de su trabajo</h3>
    <p>
      La defensa ambiental plantea una pregunta de justicia
      entre generaciones: ¿es justo tomar decisiones hoy
      cuyos costos ambientales tendrán que asumir, en gran
      medida, quienes todavía están creciendo?
    </p>

    <p>
      <strong>Pregunta para debatir:</strong>
      ¿Escuchamos realmente a la juventud cuando habla del
      futuro o solamente la invitamos a participar cuando
      sus opiniones resultan cómodas?
    </p>

    <h3>Fuentes para investigar</h3>
    <ul>
      <li>
        <a href="https://www.unicef.org/"
           target="_blank" rel="noopener noreferrer">
          UNICEF: derechos de la infancia y participación
        </a>
      </li>
      <li>
        <a href="https://www.un.org/es/climatechange"
           target="_blank" rel="noopener noreferrer">
          Naciones Unidas: cambio climático
        </a>
      </li>
    </ul>
  `
},

jesus: {
  eyebrow: 'PERFIL / MEMORIA Y DERECHOS HUMANOS',
  title: 'Jesús Abad Colorado',
  body: `
    <img
      src="assets/images/je2.png"
      alt="Retrato de Jesús Abad Colorado relacionado con la memoria fotográfica"
      class="profile-image"
    >

    <p class="profile-intro">
      <strong>¿Qué podemos aprender de él?</strong>
      Que una fotografía puede ser mucho más que una imagen:
      también puede conservar la memoria de una comunidad,
      hacer visibles a las víctimas y ayudarnos a comprender
      las consecuencias humanas de la violencia.
    </p>

    <h3>Vida y obra</h3>
    <p>
      Jesús Abad Colorado es un fotoperiodista y documentalista
      colombiano reconocido por su trabajo sobre el conflicto
      armado, las víctimas y las comunidades afectadas por la
      violencia en Colombia. A través de su cámara ha registrado
      historias de dolor, resistencia, dignidad y esperanza.
    </p>
    <p>
      Su trabajo documental se ha convertido en un aporte
      importante a la memoria del país, pues permite acercarse
      a experiencias humanas que no siempre ocupan un lugar
      central en los relatos sobre el conflicto.
    </p>

    <h3>Acciones sociales</h3>
    <p>
      Su labor fotográfica contribuye a preservar testimonios
      visuales de las consecuencias de la guerra y a reconocer
      a las personas afectadas como seres humanos con historias,
      familias, derechos y proyectos de vida.
    </p>
    <p>
      Sus imágenes también invitan a reflexionar sobre el papel
      de los medios de comunicación y de quienes documentan el
      sufrimiento ajeno. Mostrar una realidad difícil requiere
      sensibilidad, contexto y respeto por la dignidad de las
      personas retratadas.
    </p>

    <h3>Reconocimientos e incidencia</h3>
    <p>
      Su obra ha sido presentada en exposiciones y proyectos
      de memoria relacionados con el conflicto armado colombiano.
      Para incorporar premios o distinciones concretas, conviene
      verificar sus nombres, fechas y entidades otorgantes en
      fuentes oficiales o institucionales.
    </p>

    <h3>La ética detrás de su trabajo</h3>
    <p>
      La fotografía documental plantea un dilema ético:
      ¿cómo mostrar el sufrimiento sin convertirlo en espectáculo?
      Su trabajo permite pensar en la responsabilidad de informar,
      preservar la memoria y tratar a las víctimas con dignidad.
    </p>

    <p>
      <strong>Pregunta para debatir:</strong>
      ¿Qué responsabilidad tenemos frente a las historias de
      dolor que vemos, compartimos o decidimos ignorar?
    </p>

    <h3>Fuentes para investigar</h3>
    <ul>
      <li>
        <a href="https://centrodememoriahistorica.gov.co/"
           target="_blank" rel="noopener noreferrer">
          Centro Nacional de Memoria Histórica
        </a>
      </li>
      <li>
        <a href="https://www.comisiondelaverdad.co/"
           target="_blank" rel="noopener noreferrer">
          Comisión de la Verdad de Colombia
        </a>
      </li>
    </ul>
  `
}};
const dialog = document.querySelector('#storyDialog');
document.querySelectorAll('.text-link').forEach(button => button.addEventListener('click', () => {
  const profile = profiles[button.dataset.person]; if (!profile || !dialog) return;
  document.querySelector('#dialogTitle').textContent = profile.title;
  document.querySelector('#dialogEyebrow').textContent = profile.eyebrow;
  document.querySelector('#dialogBody').innerHTML = profile.body;
  dialog.showModal();
}));
document.querySelector('#dialogClose')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });


/* =====================================
   CARRUSEL: LA ÉTICA EN ACCIÓN
===================================== */

const carouselTrack = document.querySelector(".carousel-track");

const carouselImages = carouselTrack
  ? carouselTrack.querySelectorAll("img")
  : [];

const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
const carouselCounter = document.getElementById("carousel-counter");

if (
  carouselImages.length > 0 &&
  carouselPrev &&
  carouselNext &&
  carouselCounter
) {
  let currentImage = 0;

  // Mostrar una imagen y actualizar el contador
  function showCarouselImage(index) {
    currentImage =
      (index + carouselImages.length) % carouselImages.length;

    carouselImages.forEach((image, i) => {
      image.style.display = i === currentImage ? "block" : "none";
    });

    carouselCounter.textContent =
      `${String(currentImage + 1).padStart(2, "0")} / ` +
      `${String(carouselImages.length).padStart(2, "0")}`;
  }

  // Avanzar a la siguiente imagen
  carouselNext.addEventListener("click", () => {
    showCarouselImage(currentImage + 1);
    restartCarouselTimer();
  });

  // Volver a la imagen anterior
  carouselPrev.addEventListener("click", () => {
    showCarouselImage(currentImage - 1);
    restartCarouselTimer();
  });

  // Iniciar el carrusel
  showCarouselImage(0);

  // Cambiar automáticamente cada segundo
  let carouselTimer = setInterval(() => {
    showCarouselImage(currentImage + 1);
  }, 1700);

  // Reiniciar el temporizador al usar las flechas
  function restartCarouselTimer() {
    clearInterval(carouselTimer);

    carouselTimer = setInterval(() => {
      showCarouselImage(currentImage + 1);
    }, 1700);
  }
}


const wordShowcase = document.querySelector(".word-showcase");

if (wordShowcase) {
  const words = [
    "ÉTICA",
    "DENUNCIAR",
    "BIEN COMÚN",
    "MEMORIA",
    "CUESTIONAR",
    "INTERESES PERSONALES",
    "DIGNIDAD",
    "RESPONSABILIDAD",
    "NO CALLAR",
    "CAMBIAR EL MUNDO"
  ];

  let wordIndex = 0;

  function changeShowcaseWord() {
    wordShowcase.classList.remove("word-enter");
    void wordShowcase.offsetWidth;

    wordShowcase.textContent = words[wordIndex];
    wordShowcase.classList.add("word-enter");

    wordIndex = (wordIndex + 1) % words.length;
  }

  changeShowcaseWord();
  setInterval(changeShowcaseWord, 1800);
} else {
  console.warn("No se encontró .word-showcase en el HTML");
}
