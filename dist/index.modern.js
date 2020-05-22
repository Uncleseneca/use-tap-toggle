import React from 'react';

var dataAttribute = 'tap';
var tapActiveValue = 'active';
var capture = false;
var isTouchDevice = false;

var getInteractiveEl = function getInteractiveEl(event) {
  try {
    return event.composedPath().find(function (el) {
      return el.dataset && el.dataset[dataAttribute] !== undefined;
    });
  } catch (e) {
    return undefined;
  }
};

var removeClass = function removeClass(event) {
  var interactiveEl = getInteractiveEl(event);
  if (!interactiveEl) return;

  if (event.type === 'click') {
    return setTimeout(function () {
      interactiveEl.dataset[dataAttribute] = '';
    });
  }

  interactiveEl.dataset[dataAttribute] = '';
};

var removeActiveClassEvents = ['touchmove', 'touchcancel', 'click'];

var onTouchStart = function onTouchStart(event) {
  if (!isTouchDevice) {
    isTouchDevice = true;
    removeActiveClassEvents.forEach(function (event) {
      return document.body.addEventListener(event, removeClass, capture);
    });
  }

  var interactiveEl = getInteractiveEl(event);

  if (interactiveEl) {
    interactiveEl.dataset[dataAttribute] = tapActiveValue;
  }
};

function addTapListeners() {
  document.body.addEventListener('touchstart', onTouchStart, capture);
}

function removeTapListeners() {
  document.body.removeEventListener('touchstart', onTouchStart, capture);
  removeActiveClassEvents.forEach(function (event) {
    return document.body.removeEventListener(event, removeClass, capture);
  });
}

function useTapToggle() {
  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      addTapListeners();
      return removeTapListeners;
    }
  }, []);
}

export default useTapToggle;
//# sourceMappingURL=index.modern.js.map
