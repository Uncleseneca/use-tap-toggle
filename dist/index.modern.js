import React from 'react';

const dataAttribute = 'tap';
const tapActiveValue = 'active';
const capture = false;
let isTouchDevice = false;

const getInteractiveEl = event => {
  try {
    return event.composedPath().find(el => el.dataset && el.dataset[dataAttribute] !== undefined);
  } catch (e) {
    return undefined;
  }
};

const removeClass = event => {
  const interactiveEl = getInteractiveEl(event);
  if (!interactiveEl) return;

  if (event.type === 'click') {
    return setTimeout(() => {
      interactiveEl.dataset[dataAttribute] = '';
    });
  }

  interactiveEl.dataset[dataAttribute] = '';
};

const removeActiveClassEvents = ['touchmove', 'touchcancel', 'click'];

const onTouchStart = event => {
  if (!isTouchDevice) {
    isTouchDevice = true;
    removeActiveClassEvents.forEach(event => document.body.addEventListener(event, removeClass, capture));
  }

  const interactiveEl = getInteractiveEl(event);

  if (interactiveEl) {
    interactiveEl.dataset[dataAttribute] = tapActiveValue;
  }
};

function addTapListeners() {
  document.body.addEventListener('touchstart', onTouchStart, capture);
}

function removeTapListeners() {
  document.body.removeEventListener('touchstart', onTouchStart, capture);
  removeActiveClassEvents.forEach(event => document.body.removeEventListener(event, removeClass, capture));
}

function useTapToggle() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      addTapListeners();
      return removeTapListeners;
    }
  }, []);
}

export default useTapToggle;
//# sourceMappingURL=index.modern.js.map
