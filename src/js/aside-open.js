export const burgerButton = document.querySelector('.icon-button--burger')
export const callButton = document.querySelector('.icon-button--call')
export const menuCallButton = document.querySelector('.menu .icon-button--call')
export const feedbackButton = document.querySelector('.icon-button--chat')
export const menuFeedbackButton = document.querySelector('.menu .icon-button--chat')
export const asideMenu = document.querySelector('.menu')
export const asideCall = document.querySelector('.call')
export const asideFeedback = document.querySelector('.feedback')
export const closeMenu = document.querySelector('.menu .icon-button--x')
export const closeCall = document.querySelector('.call .icon-button--x')
export const closeFeedback = document.querySelector('.feedback .icon-button--x')


//menu
burgerButton.addEventListener('click', () => {
  asideMenu.classList.add('menu--opened')
})
closeMenu.addEventListener('click', () => {
  asideMenu.classList.remove('menu--opened')
})

//call
callButton.addEventListener('click', () => {
  asideCall.classList.add('call--opened')
})
menuCallButton.addEventListener('click', () => {
  // asideMenu.classList.remove('menu--opened')
  asideCall.classList.add('call--opened')
})
closeCall.addEventListener('click', () => {
  asideCall.classList.remove('call--opened')
})

//feedback
feedbackButton.addEventListener('click', () => {
  asideFeedback.classList.add('feedback--opened')
})
menuFeedbackButton.addEventListener('click', () => {
  // asideMenu.classList.remove('menu--opened')
  asideFeedback.classList.add('feedback--opened')
})
closeFeedback.addEventListener('click', () => {
  asideFeedback.classList.remove('feedback--opened')
})

//escape-closing
export const body = document.querySelector('body')
body.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (asideFeedback.classList.contains('feedback--opened') || asideCall.classList.contains('call--opened')) {
      asideCall.classList.remove('call--opened')
      asideFeedback.classList.remove('feedback--opened')
    } else {
      asideMenu.classList.remove('menu--opened')
    }
  }
})

//fog-closing
export const clientWidth = document.body.clientWidth;
export const menuFog = document.querySelector('.menu__fog-of-war')
export const callFog = document.querySelector('.call__fog-of-war')
export const feedbackFog = document.querySelector('.feedback__fog-of-war')
if (clientWidth > 360 && clientWidth < 1366) {
  callFog.addEventListener('click', () => {
    asideCall.classList.remove('call--opened')
  })
  feedbackFog.addEventListener('click', () => {
    asideFeedback.classList.remove('feedback--opened')
  })
  menuFog.addEventListener('click', () => {
    asideMenu.classList.remove('menu--opened')
  })
}
