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
  brigitte: { eyebrow:'PERFIL / BIODIVERSIDAD', title:'Brigitte Baptiste', body:`<p><strong>¿Qué podemos aprender?</strong> Que hablar de biodiversidad no es hablar únicamente de bosques lejanos o especies en peligro. También es hablar de economía, cultura, decisiones públicas y de nuestra relación con otras formas de vida.</p><h3>Vida y obra</h3><p>Brigitte Baptiste es una bióloga colombiana reconocida por su trabajo en biodiversidad y sostenibilidad. Ha desarrollado labores de investigación, divulgación y liderazgo institucional relacionadas con la conservación y el conocimiento de los sistemas vivos.</p><h3>Acciones sociales</h3><p>Su trabajo conecta el conocimiento científico con conversaciones públicas sobre desarrollo, conservación y diversidad. Su trayectoria abre una pregunta ética: ¿cómo tomar decisiones que consideren las necesidades humanas y la vida que compartimos con otras especies?</p><h3>Reconocimientos</h3><p>Completa esta sección con reconocimientos concretos a partir de fuentes oficiales o institucionales. Hay que poder comprobarlos.</p><p><strong>Pregunta para debatir:</strong> ¿Es posible hablar de progreso si destruimos los sistemas naturales que lo sostienen?</p>`},
  francisco: { eyebrow:'PERFIL / ACTIVISMO JUVENIL', title:'Francisco Vera', body:`<p><strong>¿Qué podemos aprender?</strong> Que la participación ciudadana no debería depender de la edad, y que el cuidado del planeta exige escuchar a quienes vivirán más tiempo con las consecuencias de las decisiones actuales.</p><h3>Vida y obra</h3><p>Francisco Vera es un activista ambiental colombiano conocido por promover la protección de la naturaleza y la participación de niñas, niños y jóvenes en asuntos ambientales.</p><h3>Acciones sociales</h3><p>Su activismo ha buscado ampliar la conversación pública sobre cambio climático, educación ambiental y derecho a un ambiente sano. Su presencia en espacios de discusión muestra cómo las voces jóvenes pueden entrar en debates que a menudo se reservan para adultos.</p><h3>Reconocimientos</h3><p>Añade aquí reconocimientos específicos que puedas verificar con fuentes confiables y fecha. Distingue entre un premio formal, una invitación institucional y una mención en medios.</p><p><strong>Pregunta para debatir:</strong> ¿Escuchamos realmente a la juventud o solo la invitamos a hablar cuando queda bien en la foto?</p>`},
  jesus: { eyebrow:'PERFIL / MEMORIA Y DERECHOS HUMANOS', title:'Jesús Abad Colorado', body:`<p><strong>¿Qué podemos aprender?</strong> Que documentar la violencia también implica una responsabilidad ética: mirar a las personas con dignidad y no reducir sus vidas a una cifra o a una imagen impactante.</p><h3>Vida y obra</h3><p>Jesús Abad Colorado es un fotoperiodista colombiano reconocido por su trabajo documental sobre el conflicto armado, las víctimas y las comunidades afectadas por la violencia en Colombia.</p><h3>Acciones sociales</h3><p>Su trabajo fotográfico contribuye a la memoria colectiva y permite acercarse a experiencias que muchas veces quedan fuera del relato oficial. Las imágenes pueden ayudar a reconocer a las víctimas como personas con historias, vínculos y derechos.</p><h3>Reconocimientos</h3><p>Completa esta parte con premios, exposiciones o distinciones verificadas en fuentes institucionales. En un trabajo sobre memoria, la precisión también es una forma de respeto.</p><p><strong>Pregunta para debatir:</strong> ¿Qué responsabilidad tenemos frente a las historias de dolor que vemos, compartimos o decidimos ignorar?</p>`}
};
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
