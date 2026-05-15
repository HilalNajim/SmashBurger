document.getElementById('year').textContent = new Date().getFullYear()

const burgers = {
  kamehame: {
    name: 'Kamehame Smash',
    desc: 'Le classique ultime — double puissance, double fromage.',
    ingredients: ['Double Steak Smash', 'Cheddar', 'Sauce BigMac', 'Cornichons']
  },
  rasen: {
    name: 'Rasen Smash',
    desc: 'Le tourbillon de saveurs — croustillant garanti.',
    ingredients: ['Double Steak', 'Cheddar', 'Sauce Tasty', 'Oignons frits']
  },
  gomu: {
    name: 'Gomu Gomu Smash',
    desc: 'Élastique en saveurs, croustillant en texture.',
    ingredients: ['Double Steak', 'Emmental', 'Sauce Magic', 'Oignons caramélisés']
  },
  onepunch: {
    name: 'One Punch Smash',
    desc: 'Un seul coup suffit — steak ET poulet pour les plus affamés.',
    ingredients: ['Poulet', 'Emmental', 'Rösti Potatoe', 'Bacon', 'Sauce Tartare']
  },
  titans: {
    name: 'Smash des Titans',
    desc: 'Massif, imposant, implacable.',
    ingredients: ['Double Steak Smash', 'Cheddar', 'Bacon', 'Rösti Potatoe', 'Sauce Giant']
  }
}

function openModal(id) {
  const b = burgers[id]
  document.getElementById('modal-name').textContent = b.name
  document.getElementById('modal-desc').textContent = b.desc
  document.getElementById('modal-ingredients').innerHTML = b.ingredients.map(i => `<li>${i}</li>`).join('')
  document.getElementById('modal-overlay').classList.add('active')
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active')
}

function closeModalOnBg(e) {
  if (e.target.id === 'modal-overlay') closeModal()
}

function openLegal() {
  document.getElementById('legal-overlay').classList.add('active')
}

function closeLegal() {
  document.getElementById('legal-overlay').classList.remove('active')
}

function closeLegalOnBg(e) {
  if (e.target.id === 'legal-overlay') closeLegal()
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLegal() }
})
