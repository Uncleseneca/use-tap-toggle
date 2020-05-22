import React from 'react'

const dataAttribute = 'tap'
const tapActiveValue = 'active'
const capture = false

let isTouchDevice = false

const getInteractiveEl = (event) => {
  try {
    return event
      .composedPath()
      .find((el) => el.dataset && el.dataset[dataAttribute] !== undefined)
  } catch (e) {
    return undefined
  }
}

const removeClass = (event) => {
  const interactiveEl = getInteractiveEl(event)
  if (!interactiveEl) return
  if (event.type === 'click') {
    // keep the tap style on 1 tick later in case the UI blocks
    return setTimeout(() => {
      interactiveEl.dataset[dataAttribute] = ''
    })
  }
  interactiveEl.dataset[dataAttribute] = ''
}

// use "click" instead of "touchend" because it is triggered after touchend
// and we want the tap styles to stay on the element as long as possible
// (this makes a difference at least on later iOS versions)
const removeActiveClassEvents = ['touchmove', 'touchcancel', 'click']

const onTouchStart = (event) => {
  if (!isTouchDevice) {
    isTouchDevice = true
    // we only need to add these listeners if it's a touch device
    removeActiveClassEvents.forEach((event) =>
      document.body.addEventListener(event, removeClass, capture)
    )
  }
  const interactiveEl = getInteractiveEl(event)
  if (interactiveEl) {
    interactiveEl.dataset[dataAttribute] = tapActiveValue
  }
}

function addTapListeners() {
  document.body.addEventListener('touchstart', onTouchStart, capture)
}

function removeTapListeners() {
  document.body.removeEventListener('touchstart', onTouchStart, capture)
  removeActiveClassEvents.forEach((event) =>
    document.body.removeEventListener(event, removeClass, capture)
  )
}

export default function useTapToggle() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      addTapListeners()
      return removeTapListeners
    }
  }, [])
}
