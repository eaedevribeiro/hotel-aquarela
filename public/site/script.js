const header = document.querySelector('.header');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
const reservation = document.querySelector('#reservation-form');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 30), { passive: true });
toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('no-scroll', isOpen);
});
links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  links.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('no-scroll');
}));

const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
  if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  lightboxImage.src = item.dataset.full; lightboxImage.alt = item.querySelector('img').alt; lightbox.classList.add('active'); lightbox.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll');
}));
const closeLightbox = () => { lightbox.classList.remove('active'); lightbox.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); };
lightbox.querySelector('button').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

reservation.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(reservation); const checkin = new Date(form.get('checkin')); const checkout = new Date(form.get('checkout'));
  const feedback = reservation.querySelector('.form-feedback');
  if (checkout <= checkin) { feedback.textContent = 'Escolha uma data de saída posterior ao check-in.'; return; }
  const name = form.get('name').trim();
  const message = [
    `Olá! Sou ${name} e gostaria de consultar disponibilidade no Hotel Aquarela.`,
    `Check-in: ${form.get('checkin')}`,
    `Check-out: ${form.get('checkout')}`,
    `Hóspedes: ${form.get('adults')} e ${form.get('children')}`,
    `Meu WhatsApp: ${form.get('phone')}`
  ].join('\n');
  feedback.textContent = 'Abrindo o WhatsApp para continuar sua consulta…';
  window.open(`https://wa.me/5513997068488?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
document.querySelector('#year').textContent = new Date().getFullYear();
