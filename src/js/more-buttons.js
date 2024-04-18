export const introBlock = document.querySelector('.text-block__text')
export const introButton = document.querySelector('.text-block__more-button')

introButton.addEventListener('click', () => {
  if (introButton.classList.contains('more-button--open')) {
    introBlock.classList.add('text-block__text--opened')
    introButton.classList.remove('more-button--open')
    introButton.classList.add('more-button--close')
    introButton.textContent = 'Скрыть'
  } else {
    introBlock.classList.remove('text-block__text--opened')
    introButton.classList.add('more-button--open')
    introButton.classList.remove('more-button--close')
    introButton.textContent = 'Читать далее'
  }
})

export const brandsContainer = document.querySelector('.brands-container')
export const brandsButton = document.querySelector('.brands__more-button')
export const brandsList = document.querySelector('.brands__brand-list')

brandsButton.addEventListener('click', () => {
  if (brandsButton.classList.contains('more-button--open')) {
    brandsContainer.classList.add('brands-container--opened')
    brandsList.classList.add('brand-list--opened')
    brandsButton.classList.remove('more-button--open')
    brandsButton.classList.add('more-button--close')
    brandsButton.textContent = 'Скрыть'
  } else {
    brandsContainer.classList.remove('brands-container--opened')
    brandsList.classList.remove('brand-list--opened')
    brandsButton.classList.add('more-button--open')
    brandsButton.classList.remove('more-button--close')
    brandsButton.textContent = 'Показать все'
  }
})

export const equipmentsContainer = document.querySelector('.equipments-container')
export const equipmentsButton = document.querySelector('.equipments__more-button')
export const equipmentsList = document.querySelector('.equipments__equipments-list')

equipmentsButton.addEventListener('click', () => {
  if (equipmentsButton.classList.contains('more-button--open')) {
    equipmentsContainer.classList.add('equipments-container--opened')
    equipmentsList.classList.add('equipments-list--opened')
    equipmentsButton.classList.remove('more-button--open')
    equipmentsButton.classList.add('more-button--close')
    equipmentsButton.textContent = 'Скрыть'
  } else {
    equipmentsContainer.classList.remove('equipments-container--opened')
    equipmentsList.classList.remove('equipments-list--opened')
    equipmentsButton.classList.add('more-button--open')
    equipmentsButton.classList.remove('more-button--close')
    equipmentsButton.textContent = 'Показать все'
  }
})
