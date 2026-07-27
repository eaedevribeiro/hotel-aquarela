const drinkCategories = [
  { name: 'Caipirinhas', items: [
    ['Caipirinha de banana', '35,90'], ['Caipirinha com Velho Barreiro', '32,90'], ['Caipirinha com Cachaça Seleta', '49,90'], ['Caipirinha com Cachaça Ypióca', '39,90'], ['Caipiroska', '39,90'], ['Caipirinha de saquê', '49,90'], ['Caipiroska com Absolut', '49,90']
  ] },
  { name: 'Cervejas', items: [
    ['Cerveja em lata', '13,90'], ['Cerveja long neck', '17,90'], ['Skol 600 ml', '22,90'], ['Brahma Duplo Malte 600 ml', '23,90'], ['Heineken 600 ml', '26,90'], ['Original 600 ml', '25,90'], ['Malzbier', '17,90']
  ] },
  { name: 'Batidas', items: [
    ['Batida com Velho Barreiro', '15,90'], ['Batida com Cachaça Seleta', '49,90'], ['Batida com Cachaça Ypióca', '39,90'], ['Batida de vodka', '39,90'], ['Batida com Vodka Absolut', '49,90']
  ] },
  { name: 'Drinks', items: [
    ['Cuba-libre', '39,90'], ['Espanhola', '39,90'], ['Aquarela', '39,90'], ['Aperol com espumante', '49,90'], ['Gin tropical', '49,90'], ['Aperol', '39,90'], ['Campari', '39,90'], ['Margarita', '39,90'], ['Piña colada', '49,90']
  ] },
  { name: 'Doses', noPhoto: true, items: [
    ['Velho Barreiro', '39,90'], ['Cachaça Seleta ou Ypióca', '24,90'], ['Campari', '25,90'], ['Chivas Regal 12 anos', '55,90'], ['Gin Tanqueray', '49,90'], ['Licor 43 ou Amarula', '35,90'], ['Johnnie Walker Red Label', '55,90'], ['Jack Daniel’s', '45,90'], ['Vodka Absolut', '39,90'], ['Domecq', '35,90'], ['Aperol', '35,90']
  ] },
  { name: 'Sucos e refrigerantes', items: [
    ['Suco natural', '23,90', ['Abacaxi', 'Morango', 'Manga', 'Acerola', 'Kiwi', 'Laranja', 'Limão', 'Maracujá']], ['Refrigerante', '13,90', ['Fanta Uva', 'Fanta Laranja', 'Guaraná', 'Guaraná Zero', 'Coca-Cola', 'Coca-Cola Zero', 'Sprite', 'Soda', 'Schweppes', 'Água tônica']], ['H2OH!', '16,90'], ['Água mineral', '7,90'], ['Água com gás', '9,90'], ['Raspadinha', '35,90', ['Morango', 'Abacaxi', 'Kiwi', 'Maracujá']], ['Soda italiana', '35,90'], ['Limonada suíça', '29,90'], ['Vitamina', '19,90', ['Banana', 'Mamão']], ['Red Bull', '19,90']
  ] },
  { name: 'Chá-mate batido e gelado', items: [
    ['Puro ou com limão', '23,90'], ['Com menta e abacaxi', '25,90'], ['Com aveia e Leite Ninho', '29,90'], ['Com abacaxi', '29,90'], ['Com açaí e Leite Ninho', '29,90'], ['Ginger Mate, com abacaxi e gengibre', '29,90'], ['Ginger Mate Especial, com abacaxi, gengibre e Leite Ninho', '29,90']
  ] }
];

const target = document.querySelector('#drink-categories');

function optionList(options) {
  if (!options) return '<p class="drink-description">Descrição em breve.</p>';
  return `<p class="option-label">Sabores e opções</p><ul class="product-options">${options.map((option) => `<li>${option}</li>`).join('')}</ul>`;
}

function photoCard([name, price, options]) {
  return `<article class="menu-card drink-card"><div class="dish-placeholder"><span>Foto futura</span></div><h3>${name}</h3>${optionList(options)}<strong>R$ ${price}</strong></article>`;
}

function doseCard([name, price]) {
  return `<article class="dose-card"><div><h3>${name}</h3><p>Descrição em breve.</p></div><strong>R$ ${price}</strong></article>`;
}

target.innerHTML = drinkCategories.map((category) => {
  const contentClass = category.noPhoto ? 'dose-list' : 'drink-content item-grid';
  const cards = category.items.map(category.noPhoto ? doseCard : photoCard).join('');
  return `<details><summary>${category.name}<b>+</b></summary><div class="${contentClass}">${cards}</div></details>`;
}).join('');
