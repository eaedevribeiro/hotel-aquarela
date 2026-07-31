const cards = document.querySelectorAll('.room-card');

const roomMessages = [
  'Um espaço acolhedor para desacelerar depois de um dia entre a praia e a cidade.',
  'Acomodação prática e confortável para viver Peruíbe com leveza.',
  'Um refúgio tranquilo para descansar no ritmo sereno do litoral.',
  'Depois da praia, um quarto confortável para fechar bem o dia.',
  'Sua base para dias de sol, passeios e momentos sem pressa.',
  'Silêncio, conforto e um lugar gostoso para recarregar as energias.',
  'Uma opção um pouco maior, feita para quem deseja mais conforto durante a estadia.'
];

cards.forEach((card, index) => {
  const message = card.querySelector('.room-summary > p');
  if (message) message.textContent = roomMessages[index];
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  cards.forEach((card) => card.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  cards.forEach((card) => observer.observe(card));
}
