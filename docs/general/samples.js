function invariant$2(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}

function isTrue$2(value, msg) {
  if (!value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}

function isFalse$1(value, msg) {
  if (value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}

function fail$2(msg) {
  throw new Error(msg);
}

var assert$2 = Object.freeze({
  __proto__: null,
  invariant: invariant$2,
  isTrue: isTrue$2,
  isFalse: isFalse$1,
  fail: fail$2
});
const {
  assign: assign$2,
  create: create$3,
  defineProperties: defineProperties$2,
  defineProperty: defineProperty$2,
  freeze: freeze$2,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$3,
  getOwnPropertyNames: getOwnPropertyNames$3,
  getPrototypeOf: getPrototypeOf$3,
  hasOwnProperty: hasOwnProperty$3,
  isFrozen: isFrozen$2,
  keys: keys$2,
  seal: seal$2,
  setPrototypeOf: setPrototypeOf$2
} = Object;
const {
  isArray: isArray$3
} = Array;
const {
  filter: ArrayFilter$2,
  find: ArrayFind$2,
  indexOf: ArrayIndexOf$2,
  join: ArrayJoin$2,
  map: ArrayMap$2,
  push: ArrayPush$3,
  reduce: ArrayReduce$2,
  reverse: ArrayReverse$2,
  slice: ArraySlice$3,
  splice: ArraySplice$2,
  unshift: ArrayUnshift$3,
  forEach: forEach$2
} = Array.prototype;
const {
  charCodeAt: StringCharCodeAt$2,
  replace: StringReplace$2,
  slice: StringSlice$2,
  toLowerCase: StringToLowerCase$2
} = String.prototype;

function isUndefined$3(obj) {
  return obj === undefined;
}

function isNull$2(obj) {
  return obj === null;
}

function isTrue$1$2(obj) {
  return obj === true;
}

function isFalse$1$2(obj) {
  return obj === false;
}

function isFunction$2(obj) {
  return typeof obj === 'function';
}

function isObject$3(obj) {
  return typeof obj === 'object';
}

const OtS$2 = {}.toString;

function toString$2(obj) {
  if (obj && obj.toString) {
    if (isArray$3(obj)) {
      return ArrayJoin$2.call(ArrayMap$2.call(obj, toString$2), ',');
    }

    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS$2.call(obj);
  } else {
    return obj + '';
  }
}

const AriaPropertyNames$2 = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];

(() => {
  const AriaAttrNameToPropNameMap = create$3(null);
  const AriaPropNameToAttrNameMap = create$3(null);
  forEach$2.call(AriaPropertyNames$2, propName => {
    const attrName = StringToLowerCase$2.call(StringReplace$2.call(propName, /^aria/, () => 'aria-'));
    AriaAttrNameToPropNameMap[attrName] = propName;
    AriaPropNameToAttrNameMap[propName] = attrName;
  });
  return {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  };
})();

(function () {
  if (typeof globalThis === 'object') {
    return globalThis;
  }

  let _globalThis;

  try {
    Object.defineProperty(Object.prototype, '__magic__', {
      get: function () {
        return this;
      },
      configurable: true
    });
    _globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (ex) {} finally {
    if (typeof _globalThis === 'undefined') {
      _globalThis = window;
    }
  }

  return _globalThis;
})();

const hasNativeSymbolSupport$2 = (() => Symbol('x').toString() === 'Symbol(x)')();

function createHiddenField$2(key, namespace) {
  return hasNativeSymbolSupport$2 ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
}

const hiddenFieldsMap$2 = new WeakMap();

function setHiddenField$2(o, field, value) {
  let valuesByField = hiddenFieldsMap$2.get(o);

  if (isUndefined$3(valuesByField)) {
    valuesByField = create$3(null);
    hiddenFieldsMap$2.set(o, valuesByField);
  }

  valuesByField[field] = value;
}

function getHiddenField$2(o, field) {
  const valuesByField = hiddenFieldsMap$2.get(o);

  if (!isUndefined$3(valuesByField)) {
    return valuesByField[field];
  }
}

const {
  DOCUMENT_POSITION_CONTAINED_BY,
  DOCUMENT_POSITION_CONTAINS,
  DOCUMENT_POSITION_PRECEDING,
  DOCUMENT_POSITION_FOLLOWING,
  ELEMENT_NODE,
  TEXT_NODE,
  CDATA_SECTION_NODE,
  PROCESSING_INSTRUCTION_NODE,
  COMMENT_NODE,
  DOCUMENT_FRAGMENT_NODE
} = Node;
const {
  appendChild: appendChild$1,
  cloneNode,
  compareDocumentPosition,
  insertBefore: insertBefore$1,
  removeChild: removeChild$1,
  replaceChild: replaceChild$1,
  hasChildNodes
} = Node.prototype;
const {
  contains
} = HTMLElement.prototype;
const firstChildGetter = getOwnPropertyDescriptor$3(Node.prototype, 'firstChild').get;
const lastChildGetter = getOwnPropertyDescriptor$3(Node.prototype, 'lastChild').get;
const textContentGetter = getOwnPropertyDescriptor$3(Node.prototype, 'textContent').get;
const parentNodeGetter = getOwnPropertyDescriptor$3(Node.prototype, 'parentNode').get;
const ownerDocumentGetter = getOwnPropertyDescriptor$3(Node.prototype, 'ownerDocument').get;
const parentElementGetter = hasOwnProperty$3.call(Node.prototype, 'parentElement') ? getOwnPropertyDescriptor$3(Node.prototype, 'parentElement').get : getOwnPropertyDescriptor$3(HTMLElement.prototype, 'parentElement').get;
const textContextSetter = getOwnPropertyDescriptor$3(Node.prototype, 'textContent').set;
const childNodesGetter = hasOwnProperty$3.call(Node.prototype, 'childNodes') ? getOwnPropertyDescriptor$3(Node.prototype, 'childNodes').get : getOwnPropertyDescriptor$3(HTMLElement.prototype, 'childNodes').get;
const isConnected = hasOwnProperty$3.call(Node.prototype, 'isConnected') ? getOwnPropertyDescriptor$3(Node.prototype, 'isConnected').get : function () {
  const doc = ownerDocumentGetter.call(this);
  return doc === null || (compareDocumentPosition.call(doc, this) & DOCUMENT_POSITION_CONTAINED_BY) !== 0;
};
const {
  getAttribute,
  getBoundingClientRect,
  getElementsByTagName,
  getElementsByTagNameNS,
  hasAttribute,
  querySelector,
  querySelectorAll,
  removeAttribute,
  setAttribute
} = Element.prototype;
const attachShadow = hasOwnProperty$3.call(Element.prototype, 'attachShadow') ? Element.prototype.attachShadow : () => {
  throw new TypeError('attachShadow() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill and use Lightning Web Components');
};
const childElementCountGetter = getOwnPropertyDescriptor$3(Element.prototype, 'childElementCount').get;
const firstElementChildGetter = getOwnPropertyDescriptor$3(Element.prototype, 'firstElementChild').get;
const lastElementChildGetter = getOwnPropertyDescriptor$3(Element.prototype, 'lastElementChild').get;
const innerTextDescriptor = getOwnPropertyDescriptor$3(HTMLElement.prototype, 'innerText');
const innerTextGetter = innerTextDescriptor ? innerTextDescriptor.get : null;
const innerTextSetter = innerTextDescriptor ? innerTextDescriptor.set : null;
const outerTextDescriptor = getOwnPropertyDescriptor$3(HTMLElement.prototype, 'outerText');
const outerTextGetter = outerTextDescriptor ? outerTextDescriptor.get : null;
const outerTextSetter = outerTextDescriptor ? outerTextDescriptor.set : null;
const innerHTMLDescriptor = hasOwnProperty$3.call(Element.prototype, 'innerHTML') ? getOwnPropertyDescriptor$3(Element.prototype, 'innerHTML') : getOwnPropertyDescriptor$3(HTMLElement.prototype, 'innerHTML');
const innerHTMLGetter = innerHTMLDescriptor.get;
const innerHTMLSetter = innerHTMLDescriptor.set;
const outerHTMLDescriptor = hasOwnProperty$3.call(Element.prototype, 'outerHTML') ? getOwnPropertyDescriptor$3(Element.prototype, 'outerHTML') : getOwnPropertyDescriptor$3(HTMLElement.prototype, 'outerHTML');
const outerHTMLGetter = outerHTMLDescriptor.get;
const outerHTMLSetter = outerHTMLDescriptor.set;
const tagNameGetter = getOwnPropertyDescriptor$3(Element.prototype, 'tagName').get;
const tabIndexDescriptor = getOwnPropertyDescriptor$3(HTMLElement.prototype, 'tabIndex');
const tabIndexGetter = tabIndexDescriptor.get;
const tabIndexSetter = tabIndexDescriptor.set;
const matches = hasOwnProperty$3.call(Element.prototype, 'matches') ? Element.prototype.matches : Element.prototype.msMatchesSelector;
const childrenGetter = hasOwnProperty$3.call(Element.prototype, 'children') ? getOwnPropertyDescriptor$3(Element.prototype, 'children').get : getOwnPropertyDescriptor$3(HTMLElement.prototype, 'children').get;
const {
  getElementsByClassName
} = HTMLElement.prototype;
const shadowRootGetter = hasOwnProperty$3.call(Element.prototype, 'shadowRoot') ? getOwnPropertyDescriptor$3(Element.prototype, 'shadowRoot').get : () => null;
let assignedNodes, assignedElements;

if (typeof HTMLSlotElement !== 'undefined') {
  assignedNodes = HTMLSlotElement.prototype.assignedNodes;
  assignedElements = HTMLSlotElement.prototype.assignedElements;
} else {
  assignedNodes = () => {
    throw new TypeError("assignedNodes() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill to start using <slot> elements in your Lightning Web Component's template");
  };

  assignedElements = () => {
    throw new TypeError("assignedElements() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill to start using <slot> elements in your Lightning Web Component's template");
  };
}

const eventTargetGetter = getOwnPropertyDescriptor$3(Event.prototype, 'target').get;
const eventCurrentTargetGetter = getOwnPropertyDescriptor$3(Event.prototype, 'currentTarget').get;
const focusEventRelatedTargetGetter = getOwnPropertyDescriptor$3(FocusEvent.prototype, 'relatedTarget').get;
const DocumentPrototypeActiveElement = getOwnPropertyDescriptor$3(Document.prototype, 'activeElement').get;
const elementFromPoint = hasOwnProperty$3.call(Document.prototype, 'elementFromPoint') ? Document.prototype.elementFromPoint : Document.prototype.msElementFromPoint;
const defaultViewGetter = getOwnPropertyDescriptor$3(Document.prototype, 'defaultView').get;
const {
  createComment,
  querySelectorAll: querySelectorAll$1,
  getElementById,
  getElementsByClassName: getElementsByClassName$1,
  getElementsByTagName: getElementsByTagName$1,
  getElementsByTagNameNS: getElementsByTagNameNS$1
} = Document.prototype;
const {
  getElementsByName
} = HTMLDocument.prototype;
const {
  addEventListener: windowAddEventListener,
  removeEventListener: windowRemoveEventListener,
  getComputedStyle: windowGetComputedStyle,
  getSelection: windowGetSelection
} = window;
const MO = MutationObserver;
const MutationObserverObserve = MO.prototype.observe;
let NativeShadowRoot = null;

if (typeof ShadowRoot !== 'undefined') {
  NativeShadowRoot = ShadowRoot;
}

const isInstanceOfNativeShadowRoot = isNull$2(NativeShadowRoot) ? () => false : node => node instanceof NativeShadowRoot;

function detect$2() {
  return typeof HTMLSlotElement === 'undefined';
}

const {
  createElement: createElement$1
} = Document.prototype;
const CHAR_S$1 = 115;
const CHAR_L = 108;
const CHAR_O = 111;
const CHAR_T = 116;

function apply$1() {
  class HTMLSlotElement {}

  setPrototypeOf$2(HTMLSlotElement, HTMLElement.constructor);
  setPrototypeOf$2(HTMLSlotElement.prototype, HTMLElement.prototype);
  Window.prototype.HTMLSlotElement = HTMLSlotElement;
  defineProperty$2(Document.prototype, 'createElement', {
    value: function (tagName, _options) {
      const elm = createElement$1.apply(this, ArraySlice$3.call(arguments));

      if (tagName.length === 4 && StringCharCodeAt$2.call(tagName, 0) === CHAR_S$1 && StringCharCodeAt$2.call(tagName, 1) === CHAR_L && StringCharCodeAt$2.call(tagName, 2) === CHAR_O && StringCharCodeAt$2.call(tagName, 3) === CHAR_T) {
        setPrototypeOf$2(elm, HTMLSlotElement.prototype);
      }

      return elm;
    }
  });
}

if (detect$2()) {
  apply$1();
}

function getOwnerDocument(node) {
  const doc = ownerDocumentGetter.call(node);
  return doc === null ? node : doc;
}

function getOwnerWindow(node) {
  const doc = getOwnerDocument(node);
  const win = defaultViewGetter.call(doc);

  if (win === null) {
    throw new TypeError();
  }

  return win;
}

let skipGlobalPatching;

function isGlobalPatchingSkipped(node) {
  if (isUndefined$3(skipGlobalPatching)) {
    const ownerDocument = getOwnerDocument(node);
    skipGlobalPatching = ownerDocument.body && getAttribute.call(ownerDocument.body, 'data-global-patching-bypass') === 'temporary-bypass';
  }

  return isTrue$1$2(skipGlobalPatching);
}

function arrayFromCollection(collection) {
  const size = collection.length;
  const cloned = [];

  if (size > 0) {
    for (let i = 0; i < size; i++) {
      cloned[i] = collection[i];
    }
  }

  return cloned;
}

const eventTargetPrototype = typeof EventTarget !== 'undefined' ? EventTarget.prototype : Node.prototype;
const {
  addEventListener,
  dispatchEvent,
  removeEventListener
} = eventTargetPrototype;
var EventListenerContext;

(function (EventListenerContext) {
  EventListenerContext[EventListenerContext["CUSTOM_ELEMENT_LISTENER"] = 0] = "CUSTOM_ELEMENT_LISTENER";
  EventListenerContext[EventListenerContext["SHADOW_ROOT_LISTENER"] = 1] = "SHADOW_ROOT_LISTENER";
  EventListenerContext[EventListenerContext["UNKNOWN_LISTENER"] = 2] = "UNKNOWN_LISTENER";
})(EventListenerContext || (EventListenerContext = {}));

const eventToContextMap = new WeakMap();

function isChildNode(root, node) {
  return !!(compareDocumentPosition.call(root, node) & DOCUMENT_POSITION_CONTAINED_BY);
}

const GET_ROOT_NODE_CONFIG_FALSE = {
  composed: false
};

function getRootNodeHost(node, options) {
  let rootNode = node.getRootNode(options);

  if ('mode' in rootNode && 'delegatesFocus' in rootNode) {
    rootNode = getHost(rootNode);
  }

  return rootNode;
}

const customElementToWrappedListeners = new WeakMap();

function getEventMap(elm) {
  let listenerInfo = customElementToWrappedListeners.get(elm);

  if (isUndefined$3(listenerInfo)) {
    listenerInfo = create$3(null);
    customElementToWrappedListeners.set(elm, listenerInfo);
  }

  return listenerInfo;
}

const shadowRootEventListenerMap = new WeakMap();

function getWrappedShadowRootListener(listener) {
  if (!isFunction$2(listener)) {
    throw new TypeError();
  }

  let shadowRootWrappedListener = shadowRootEventListenerMap.get(listener);

  if (isUndefined$3(shadowRootWrappedListener)) {
    shadowRootWrappedListener = function (event) {
      let currentTarget = eventCurrentTargetGetter.call(event);

      if (!isInstanceOfNativeShadowRoot(currentTarget)) {
        currentTarget = getShadowRoot(currentTarget);
      }

      if (shouldInvokeShadowRootListener(event)) {
        listener.call(currentTarget, event);
      }
    };

    shadowRootWrappedListener.placement = EventListenerContext.SHADOW_ROOT_LISTENER;
    shadowRootEventListenerMap.set(listener, shadowRootWrappedListener);
  }

  return shadowRootWrappedListener;
}

const customElementEventListenerMap = new WeakMap();

function getWrappedCustomElementListener(listener) {
  if (!isFunction$2(listener)) {
    throw new TypeError();
  }

  let customElementWrappedListener = customElementEventListenerMap.get(listener);

  if (isUndefined$3(customElementWrappedListener)) {
    customElementWrappedListener = function (event) {
      const currentTarget = eventCurrentTargetGetter.call(event);

      if (shouldInvokeCustomElementListener(event)) {
        listener.call(currentTarget, event);
      }
    };

    customElementWrappedListener.placement = EventListenerContext.CUSTOM_ELEMENT_LISTENER;
    customElementEventListenerMap.set(listener, customElementWrappedListener);
  }

  return customElementWrappedListener;
}

function domListener(evt) {
  let immediatePropagationStopped = false;
  let propagationStopped = false;
  const {
    type,
    stopImmediatePropagation,
    stopPropagation
  } = evt;
  const currentTarget = eventCurrentTargetGetter.call(evt);
  const listenerMap = getEventMap(currentTarget);
  const listeners = listenerMap[type];
  defineProperty$2(evt, 'stopImmediatePropagation', {
    value() {
      immediatePropagationStopped = true;
      stopImmediatePropagation.call(evt);
    },

    writable: true,
    enumerable: true,
    configurable: true
  });
  defineProperty$2(evt, 'stopPropagation', {
    value() {
      propagationStopped = true;
      stopPropagation.call(evt);
    },

    writable: true,
    enumerable: true,
    configurable: true
  });
  const bookkeeping = ArraySlice$3.call(listeners);

  function invokeListenersByPlacement(placement) {
    forEach$2.call(bookkeeping, listener => {
      if (isFalse$1$2(immediatePropagationStopped) && listener.placement === placement) {
        if (ArrayIndexOf$2.call(listeners, listener) !== -1) {
          listener.call(undefined, evt);
        }
      }
    });
  }

  eventToContextMap.set(evt, EventListenerContext.SHADOW_ROOT_LISTENER);
  invokeListenersByPlacement(EventListenerContext.SHADOW_ROOT_LISTENER);

  if (isFalse$1$2(immediatePropagationStopped) && isFalse$1$2(propagationStopped)) {
    eventToContextMap.set(evt, EventListenerContext.CUSTOM_ELEMENT_LISTENER);
    invokeListenersByPlacement(EventListenerContext.CUSTOM_ELEMENT_LISTENER);
  }

  eventToContextMap.set(evt, EventListenerContext.UNKNOWN_LISTENER);
}

function attachDOMListener(elm, type, wrappedListener) {
  const listenerMap = getEventMap(elm);
  let cmpEventHandlers = listenerMap[type];

  if (isUndefined$3(cmpEventHandlers)) {
    cmpEventHandlers = listenerMap[type] = [];
  }

  if (cmpEventHandlers.length === 0) {
    addEventListener.call(elm, type, domListener);
  }

  ArrayPush$3.call(cmpEventHandlers, wrappedListener);
}

function detachDOMListener(elm, type, wrappedListener) {
  const listenerMap = getEventMap(elm);
  let p;
  let listeners;

  if (!isUndefined$3(listeners = listenerMap[type]) && (p = ArrayIndexOf$2.call(listeners, wrappedListener)) !== -1) {
    ArraySplice$2.call(listeners, p, 1);

    if (listeners.length === 0) {
      removeEventListener.call(elm, type, domListener);
    }
  }
}

function shouldInvokeCustomElementListener(event) {
  const {
    composed
  } = event;

  if (isTrue$1$2(composed)) {
    return true;
  }

  if (eventToShadowRootMap.has(event)) {
    return false;
  }

  const target = eventTargetGetter.call(event);
  const currentTarget = eventCurrentTargetGetter.call(event);

  if (target === currentTarget) {
    return true;
  }

  const targetHost = getRootNodeHost(target, GET_ROOT_NODE_CONFIG_FALSE);
  const currentTargetHost = currentTarget;
  return isChildNode(targetHost, currentTargetHost);
}

function shouldInvokeShadowRootListener(event) {
  const {
    composed
  } = event;
  const target = eventTargetGetter.call(event);
  const currentTarget = eventCurrentTargetGetter.call(event);

  if (target === currentTarget) {
    return eventToShadowRootMap.get(event) === getShadowRoot(target);
  }

  if (isTrue$1$2(composed)) {
    return true;
  }

  if (isTrue$1$2(eventToShadowRootMap.has(event))) {
    return false;
  }

  const targetHost = getRootNodeHost(target, GET_ROOT_NODE_CONFIG_FALSE);
  const currentTargetHost = currentTarget;
  const isCurrentTargetSlotted = isChildNode(targetHost, currentTargetHost);
  return isCurrentTargetSlotted || targetHost === currentTargetHost;
}

function addCustomElementEventListener(type, listener, _options) {
  {
    if (!isFunction$2(listener)) {
      throw new TypeError(`Invalid second argument for Element.addEventListener() in ${toString$2(this)} for event "${type}". Expected an EventListener but received ${listener}.`);
    }
  }

  if (isFunction$2(listener)) {
    const wrappedListener = getWrappedCustomElementListener(listener);
    attachDOMListener(this, type, wrappedListener);
  }
}

function removeCustomElementEventListener(type, listener, _options) {
  if (isFunction$2(listener)) {
    const wrappedListener = getWrappedCustomElementListener(listener);
    detachDOMListener(this, type, wrappedListener);
  }
}

function addShadowRootEventListener(sr, type, listener, _options) {
  {
    if (!isFunction$2(listener)) {
      throw new TypeError(`Invalid second argument for ShadowRoot.addEventListener() in ${toString$2(sr)} for event "${type}". Expected an EventListener but received ${listener}.`);
    }
  }

  if (isFunction$2(listener)) {
    const elm = getHost(sr);
    const wrappedListener = getWrappedShadowRootListener(listener);
    attachDOMListener(elm, type, wrappedListener);
  }
}

function removeShadowRootEventListener(sr, type, listener, _options) {
  if (isFunction$2(listener)) {
    const elm = getHost(sr);
    const wrappedListener = getWrappedShadowRootListener(listener);
    detachDOMListener(elm, type, wrappedListener);
  }
}

const HostElementKey = '$$HostElementKey$$';
const ShadowedNodeKey = '$$ShadowedNodeKey$$';

function fastDefineProperty(node, propName, config) {
  const shadowedNode = node;

  {
    defineProperty$2(shadowedNode, propName, config);
  }
}

function setNodeOwnerKey(node, value) {
  fastDefineProperty(node, HostElementKey, {
    value,
    configurable: true
  });
}

function setNodeKey(node, value) {
  fastDefineProperty(node, ShadowedNodeKey, {
    value
  });
}

function getNodeOwnerKey(node) {
  return node[HostElementKey];
}

function getNodeNearestOwnerKey(node) {
  let host = node;
  let hostKey;

  while (!isNull$2(host)) {
    hostKey = getNodeOwnerKey(host);

    if (!isUndefined$3(hostKey)) {
      return hostKey;
    }

    host = parentNodeGetter.call(host);
  }
}

function getNodeKey(node) {
  return node[ShadowedNodeKey];
}

function isNodeShadowed(node) {
  return !isUndefined$3(getNodeOwnerKey(node));
}

function foldSlotElement(slot) {
  let parent = parentElementGetter.call(slot);

  while (!isNull$2(parent) && isSlotElement(parent)) {
    slot = parent;
    parent = parentElementGetter.call(slot);
  }

  return slot;
}

function isNodeSlotted(host, node) {
  {
    assert$2.invariant(host instanceof HTMLElement, `isNodeSlotted() should be called with a host as the first argument instead of ${host}`);
    assert$2.invariant(node instanceof Node, `isNodeSlotted() should be called with a node as the second argument instead of ${node}`);
    assert$2.invariant(compareDocumentPosition.call(node, host) & DOCUMENT_POSITION_CONTAINS, `isNodeSlotted() should never be called with a node that is not a child node of ${host}`);
  }

  const hostKey = getNodeKey(host);
  let currentElement = node instanceof Element ? node : parentElementGetter.call(node);

  while (!isNull$2(currentElement) && currentElement !== host) {
    const elmOwnerKey = getNodeNearestOwnerKey(currentElement);
    const parent = parentElementGetter.call(currentElement);

    if (elmOwnerKey === hostKey) {
      return isSlotElement(currentElement);
    } else if (parent === host) {
      return false;
    } else if (!isNull$2(parent) && getNodeNearestOwnerKey(parent) !== elmOwnerKey) {
      if (isSlotElement(parent)) {
        currentElement = getNodeOwner(foldSlotElement(parent));

        if (!isNull$2(currentElement)) {
          if (currentElement === host) {
            return true;
          } else if (getNodeNearestOwnerKey(currentElement) === hostKey) {
            return true;
          }
        }
      } else {
        return false;
      }
    } else {
      currentElement = parent;
    }
  }

  return false;
}

function getNodeOwner(node) {
  if (!(node instanceof Node)) {
    return null;
  }

  const ownerKey = getNodeNearestOwnerKey(node);

  if (isUndefined$3(ownerKey)) {
    return null;
  }

  let nodeOwner = node;

  while (!isNull$2(nodeOwner) && getNodeKey(nodeOwner) !== ownerKey) {
    nodeOwner = parentNodeGetter.call(nodeOwner);
  }

  if (isNull$2(nodeOwner)) {
    return null;
  }

  return nodeOwner;
}

function isSlotElement(node) {
  return node instanceof HTMLSlotElement;
}

function isNodeOwnedBy(owner, node) {
  {
    assert$2.invariant(owner instanceof HTMLElement, `isNodeOwnedBy() should be called with an element as the first argument instead of ${owner}`);
    assert$2.invariant(node instanceof Node, `isNodeOwnedBy() should be called with a node as the second argument instead of ${node}`);
    assert$2.invariant(compareDocumentPosition.call(node, owner) & DOCUMENT_POSITION_CONTAINS, `isNodeOwnedBy() should never be called with a node that is not a child node of ${owner}`);
  }

  const ownerKey = getNodeNearestOwnerKey(node);
  return isUndefined$3(ownerKey) || getNodeKey(owner) === ownerKey;
}

function shadowRootChildNodes(root) {
  const elm = getHost(root);
  return getAllMatches(elm, arrayFromCollection(childNodesGetter.call(elm)));
}

function getAllSlottedMatches(host, nodeList) {
  const filteredAndPatched = [];

  for (let i = 0, len = nodeList.length; i < len; i += 1) {
    const node = nodeList[i];

    if (!isNodeOwnedBy(host, node) && isNodeSlotted(host, node)) {
      ArrayPush$3.call(filteredAndPatched, node);
    }
  }

  return filteredAndPatched;
}

function getFirstSlottedMatch(host, nodeList) {
  for (let i = 0, len = nodeList.length; i < len; i += 1) {
    const node = nodeList[i];

    if (!isNodeOwnedBy(host, node) && isNodeSlotted(host, node)) {
      return node;
    }
  }

  return null;
}

function getAllMatches(owner, nodeList) {
  const filteredAndPatched = [];

  for (let i = 0, len = nodeList.length; i < len; i += 1) {
    const node = nodeList[i];
    const isOwned = isNodeOwnedBy(owner, node);

    if (isOwned) {
      ArrayPush$3.call(filteredAndPatched, node);
    }
  }

  return filteredAndPatched;
}

function getFirstMatch(owner, nodeList) {
  for (let i = 0, len = nodeList.length; i < len; i += 1) {
    if (isNodeOwnedBy(owner, nodeList[i])) {
      return nodeList[i];
    }
  }

  return null;
}

function shadowRootQuerySelector(root, selector) {
  const elm = getHost(root);
  const nodeList = arrayFromCollection(querySelectorAll.call(elm, selector));
  return getFirstMatch(elm, nodeList);
}

function shadowRootQuerySelectorAll(root, selector) {
  const elm = getHost(root);
  const nodeList = querySelectorAll.call(elm, selector);
  return getAllMatches(elm, arrayFromCollection(nodeList));
}

function getFilteredChildNodes(node) {
  let children;

  if (!isHostElement(node) && !isSlotElement(node)) {
    children = childNodesGetter.call(node);
    return arrayFromCollection(children);
  }

  if (isHostElement(node)) {
    const slots = arrayFromCollection(querySelectorAll.call(node, 'slot'));
    const resolver = getShadowRootResolver(getShadowRoot(node));
    return ArrayReduce$2.call(slots, (seed, slot) => {
      if (resolver === getShadowRootResolver(slot)) {
        ArrayPush$3.apply(seed, getFilteredSlotAssignedNodes(slot));
      }

      return seed;
    }, []);
  } else {
    children = arrayFromCollection(childNodesGetter.call(node));
    const resolver = getShadowRootResolver(node);
    return ArrayReduce$2.call(children, (seed, child) => {
      if (resolver === getShadowRootResolver(child)) {
        ArrayPush$3.call(seed, child);
      }

      return seed;
    }, []);
  }
}

function getFilteredSlotAssignedNodes(slot) {
  const owner = getNodeOwner(slot);

  if (isNull$2(owner)) {
    return [];
  }

  const childNodes = arrayFromCollection(childNodesGetter.call(slot));
  return ArrayReduce$2.call(childNodes, (seed, child) => {
    if (!isNodeOwnedBy(owner, child)) {
      ArrayPush$3.call(seed, child);
    }

    return seed;
  }, []);
}

function getTextContent(node) {
  switch (node.nodeType) {
    case ELEMENT_NODE:
      {
        const childNodes = getFilteredChildNodes(node);
        let content = '';

        for (let i = 0, len = childNodes.length; i < len; i += 1) {
          const currentNode = childNodes[i];

          if (currentNode.nodeType !== COMMENT_NODE) {
            content += getTextContent(currentNode);
          }
        }

        return content;
      }

    default:
      return node.nodeValue;
  }
}

const Items = createHiddenField$2('StaticNodeListItems', 'synthetic-shadow');

function StaticNodeList() {
  throw new TypeError('Illegal constructor');
}

StaticNodeList.prototype = create$3(NodeList.prototype, {
  constructor: {
    writable: true,
    configurable: true,
    value: StaticNodeList
  },
  item: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(index) {
      return this[index];
    }

  },
  length: {
    enumerable: true,
    configurable: true,

    get() {
      return getHiddenField$2(this, Items).length;
    }

  },
  forEach: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(cb, thisArg) {
      forEach$2.call(getHiddenField$2(this, Items), cb, thisArg);
    }

  },
  entries: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return ArrayMap$2.call(getHiddenField$2(this, Items), (v, i) => [i, v]);
    }

  },
  keys: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return ArrayMap$2.call(getHiddenField$2(this, Items), (_v, i) => i);
    }

  },
  values: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return getHiddenField$2(this, Items);
    }

  },
  [Symbol.iterator]: {
    writable: true,
    configurable: true,

    value() {
      let nextIndex = 0;
      return {
        next: () => {
          const items = getHiddenField$2(this, Items);
          return nextIndex < items.length ? {
            value: items[nextIndex++],
            done: false
          } : {
            done: true
          };
        }
      };
    }

  },
  [Symbol.toStringTag]: {
    configurable: true,

    get() {
      return 'NodeList';
    }

  },
  toString: {
    writable: true,
    configurable: true,

    value() {
      return '[object NodeList]';
    }

  }
});
setPrototypeOf$2(StaticNodeList, NodeList);

function createStaticNodeList(items) {
  const nodeList = create$3(StaticNodeList.prototype);
  setHiddenField$2(nodeList, Items, items);
  forEach$2.call(items, (item, index) => {
    defineProperty$2(nodeList, index, {
      value: item,
      enumerable: true,
      configurable: true
    });
  });
  return nodeList;
}

const Items$1 = createHiddenField$2('StaticHTMLCollectionItems', 'synthetic-shadow');

function StaticHTMLCollection() {
  throw new TypeError('Illegal constructor');
}

StaticHTMLCollection.prototype = create$3(HTMLCollection.prototype, {
  constructor: {
    writable: true,
    configurable: true,
    value: StaticHTMLCollection
  },
  item: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(index) {
      return this[index];
    }

  },
  length: {
    enumerable: true,
    configurable: true,

    get() {
      return getHiddenField$2(this, Items$1).length;
    }

  },
  namedItem: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(name) {
      if (name === '') {
        return null;
      }

      const items = getHiddenField$2(this, Items$1);

      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[len];

        if (name === getAttribute.call(item, 'id') || name === getAttribute.call(item, 'name')) {
          return item;
        }
      }

      return null;
    }

  },
  [Symbol.toStringTag]: {
    configurable: true,

    get() {
      return 'HTMLCollection';
    }

  },
  toString: {
    writable: true,
    configurable: true,

    value() {
      return '[object HTMLCollection]';
    }

  }
});
setPrototypeOf$2(StaticHTMLCollection, HTMLCollection);

function createStaticHTMLCollection(items) {
  const collection = create$3(StaticHTMLCollection.prototype);
  setHiddenField$2(collection, Items$1, items);
  forEach$2.call(items, (item, index) => {
    defineProperty$2(collection, index, {
      value: item,
      enumerable: true,
      configurable: true
    });
  });
  return collection;
}

function getInnerHTML(node) {
  let s = '';
  const childNodes = getFilteredChildNodes(node);

  for (let i = 0, len = childNodes.length; i < len; i += 1) {
    s += getOuterHTML(childNodes[i]);
  }

  return s;
}

const escapeAttrRegExp = /[&\u00A0"]/g;
const escapeDataRegExp = /[&\u00A0<>]/g;
const {
  replace,
  toLowerCase
} = String.prototype;

function escapeReplace(c) {
  switch (c) {
    case '&':
      return '&amp;';

    case '<':
      return '&lt;';

    case '>':
      return '&gt;';

    case '"':
      return '&quot;';

    case '\u00A0':
      return '&nbsp;';

    default:
      return '';
  }
}

function escapeAttr(s) {
  return replace.call(s, escapeAttrRegExp, escapeReplace);
}

function escapeData(s) {
  return replace.call(s, escapeDataRegExp, escapeReplace);
}

const voidElements = new Set(['AREA', 'BASE', 'BR', 'COL', 'COMMAND', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR']);
const plaintextParents = new Set(['STYLE', 'SCRIPT', 'XMP', 'IFRAME', 'NOEMBED', 'NOFRAMES', 'PLAINTEXT', 'NOSCRIPT']);

function getOuterHTML(node) {
  switch (node.nodeType) {
    case ELEMENT_NODE:
      {
        const {
          attributes: attrs
        } = node;
        const tagName = tagNameGetter.call(node);
        let s = '<' + toLowerCase.call(tagName);

        for (let i = 0, attr; attr = attrs[i]; i++) {
          s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
        }

        s += '>';

        if (voidElements.has(tagName)) {
          return s;
        }

        return s + getInnerHTML(node) + '</' + toLowerCase.call(tagName) + '>';
      }

    case TEXT_NODE:
      {
        const {
          data,
          parentNode
        } = node;

        if (parentNode instanceof Element && plaintextParents.has(tagNameGetter.call(parentNode))) {
          return data;
        }

        return escapeData(data);
      }

    case CDATA_SECTION_NODE:
      {
        return `<!CDATA[[${node.data}]]>`;
      }

    case PROCESSING_INSTRUCTION_NODE:
      {
        return `<?${node.target} ${node.data}?>`;
      }

    case COMMENT_NODE:
      {
        return `<!--${node.data}-->`;
      }

    default:
      {
        return '';
      }
  }
}

const {
  assign: assign$1$2,
  create: create$1$2,
  defineProperties: defineProperties$1$2,
  defineProperty: defineProperty$1$2,
  freeze: freeze$1$2,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$1$2,
  getOwnPropertyNames: getOwnPropertyNames$1$2,
  getPrototypeOf: getPrototypeOf$1$2,
  hasOwnProperty: hasOwnProperty$1$2,
  isFrozen: isFrozen$1$2,
  keys: keys$1$2,
  seal: seal$1$2,
  setPrototypeOf: setPrototypeOf$1$2
} = Object;

const _globalThis$1 = function () {
  if (typeof globalThis === 'object') {
    return globalThis;
  }

  let _globalThis;

  try {
    Object.defineProperty(Object.prototype, '__magic__', {
      get: function () {
        return this;
      },
      configurable: true
    });
    _globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (ex) {} finally {
    if (typeof _globalThis === 'undefined') {
      _globalThis = window;
    }
  }

  return _globalThis;
}();

if (!_globalThis$1.lwcRuntimeFlags) {
  Object.defineProperty(_globalThis$1, 'lwcRuntimeFlags', {
    value: create$1$2(null)
  });
}

const runtimeFlags$1 = _globalThis$1.lwcRuntimeFlags;

function hasMountedChildren(node) {
  return isSlotElement(node) || isHostElement(node);
}

function getShadowParent(node, value) {
  const owner = getNodeOwner(node);

  if (value === owner) {
    return getShadowRoot(owner);
  } else if (value instanceof Element) {
    if (getNodeNearestOwnerKey(node) === getNodeNearestOwnerKey(value)) {
      return value;
    } else if (!isNull$2(owner) && isSlotElement(value)) {
      const slotOwner = getNodeOwner(value);

      if (!isNull$2(slotOwner) && isNodeOwnedBy(owner, slotOwner)) {
        return slotOwner;
      }
    }
  }

  return null;
}

function hasChildNodesPatched() {
  return getInternalChildNodes(this).length > 0;
}

function firstChildGetterPatched() {
  const childNodes = getInternalChildNodes(this);
  return childNodes[0] || null;
}

function lastChildGetterPatched() {
  const childNodes = getInternalChildNodes(this);
  return childNodes[childNodes.length - 1] || null;
}

function textContentGetterPatched() {
  return getTextContent(this);
}

function textContentSetterPatched(value) {
  textContextSetter.call(this, value);
}

function parentNodeGetterPatched() {
  const value = parentNodeGetter.call(this);

  if (isNull$2(value)) {
    return value;
  }

  return getShadowParent(this, value);
}

function parentElementGetterPatched() {
  const value = parentNodeGetter.call(this);

  if (isNull$2(value)) {
    return null;
  }

  const parentNode = getShadowParent(this, value);
  return parentNode instanceof Element ? parentNode : null;
}

function compareDocumentPositionPatched(otherNode) {
  if (this.getRootNode() === otherNode) {
    return 10;
  } else if (getNodeOwnerKey(this) !== getNodeOwnerKey(otherNode)) {
    return 35;
  }

  return compareDocumentPosition.call(this, otherNode);
}

function containsPatched(otherNode) {
  if (otherNode == null || getNodeOwnerKey(this) !== getNodeOwnerKey(otherNode)) {
    return false;
  }

  return (compareDocumentPosition.call(this, otherNode) & DOCUMENT_POSITION_CONTAINED_BY) !== 0;
}

function cloneNodePatched(deep) {
  const clone = cloneNode.call(this, false);

  if (!deep) {
    return clone;
  }

  const childNodes = getInternalChildNodes(this);

  for (let i = 0, len = childNodes.length; i < len; i += 1) {
    clone.appendChild(childNodes[i].cloneNode(true));
  }

  return clone;
}

function childNodesGetterPatched() {
  if (isHostElement(this)) {
    const owner = getNodeOwner(this);
    const childNodes = isNull$2(owner) ? [] : getAllMatches(owner, getFilteredChildNodes(this));

    if (isFalse$1$2(hasNativeSymbolSupport$2) && isExternalChildNodeAccessorFlagOn()) {
      ArrayUnshift$3.call(childNodes, getIE11FakeShadowRootPlaceholder(this));
    }

    return createStaticNodeList(childNodes);
  }

  return childNodesGetter.call(this);
}

const nativeGetRootNode = Node.prototype.getRootNode;
const getDocumentOrRootNode = !isUndefined$3(nativeGetRootNode) ? nativeGetRootNode : function () {
  let node = this;
  let nodeParent;

  while (!isNull$2(nodeParent = parentNodeGetter.call(node))) {
    node = nodeParent;
  }

  return node;
};

function getNearestRoot(node) {
  const ownerNode = getNodeOwner(node);

  if (isNull$2(ownerNode)) {
    return getDocumentOrRootNode.call(node);
  }

  return getShadowRoot(ownerNode);
}

function getRootNodePatched(options) {
  const composed = isUndefined$3(options) ? false : !!options.composed;
  return isTrue$1$2(composed) ? getDocumentOrRootNode.call(this, options) : getNearestRoot(this);
}

defineProperties$2(Node.prototype, {
  firstChild: {
    get() {
      if (hasMountedChildren(this)) {
        return firstChildGetterPatched.call(this);
      }

      return firstChildGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  lastChild: {
    get() {
      if (hasMountedChildren(this)) {
        return lastChildGetterPatched.call(this);
      }

      return lastChildGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  textContent: {
    get() {
      if (!runtimeFlags$1.ENABLE_NODE_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return textContentGetterPatched.call(this);
        }

        return textContentGetter.call(this);
      }

      if (isGlobalPatchingSkipped(this)) {
        return textContentGetter.call(this);
      }

      return textContentGetterPatched.call(this);
    },

    set: textContentSetterPatched,
    enumerable: true,
    configurable: true
  },
  parentNode: {
    get() {
      if (isNodeShadowed(this)) {
        return parentNodeGetterPatched.call(this);
      }

      return parentNodeGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  parentElement: {
    get() {
      if (isNodeShadowed(this)) {
        return parentElementGetterPatched.call(this);
      }

      return parentElementGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  childNodes: {
    get() {
      if (hasMountedChildren(this)) {
        return childNodesGetterPatched.call(this);
      }

      return childNodesGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  hasChildNodes: {
    value() {
      if (hasMountedChildren(this)) {
        return hasChildNodesPatched.call(this);
      }

      return hasChildNodes.call(this);
    },

    enumerable: true,
    writable: true,
    configurable: true
  },
  compareDocumentPosition: {
    value(otherNode) {
      if (isGlobalPatchingSkipped(this)) {
        return compareDocumentPosition.call(this, otherNode);
      }

      return compareDocumentPositionPatched.call(this, otherNode);
    },

    enumerable: true,
    writable: true,
    configurable: true
  },
  contains: {
    value(otherNode) {
      if (this === otherNode) {
        return true;
      }

      if (!runtimeFlags$1.ENABLE_NODE_PATCH) {
        if (otherNode == null) {
          return false;
        }

        if (isNodeShadowed(this) || isHostElement(this)) {
          return containsPatched.call(this, otherNode);
        }

        return contains.call(this, otherNode);
      }

      if (isGlobalPatchingSkipped(this)) {
        return contains.call(this, otherNode);
      }

      return containsPatched.call(this, otherNode);
    },

    enumerable: true,
    writable: true,
    configurable: true
  },
  cloneNode: {
    value(deep) {
      if (!runtimeFlags$1.ENABLE_NODE_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return cloneNodePatched.call(this, deep);
        }

        return cloneNode.call(this, deep);
      }

      if (isTrue$1$2(deep)) {
        if (isGlobalPatchingSkipped(this)) {
          return cloneNode.call(this, deep);
        }

        return cloneNodePatched.call(this, deep);
      }

      return cloneNode.call(this, deep);
    },

    enumerable: true,
    writable: true,
    configurable: true
  },
  getRootNode: {
    value: getRootNodePatched,
    enumerable: true,
    configurable: true,
    writable: true
  },
  isConnected: {
    enumerable: true,
    configurable: true,

    get() {
      return isConnected.call(this);
    }

  }
});
let internalChildNodeAccessorFlag = false;

function isExternalChildNodeAccessorFlagOn() {
  return !internalChildNodeAccessorFlag;
}

const getInternalChildNodes = isFalse$1$2(hasNativeSymbolSupport$2) ? function (node) {
  internalChildNodeAccessorFlag = true;
  let childNodes;
  let error = null;

  try {
    childNodes = node.childNodes;
  } catch (e) {
    error = e;
  } finally {
    internalChildNodeAccessorFlag = false;

    if (!isNull$2(error)) {
      throw error;
    }
  }

  return childNodes;
} : function (node) {
  return node.childNodes;
};

if (hasOwnProperty$3.call(HTMLElement.prototype, 'contains')) {
  defineProperty$2(HTMLElement.prototype, 'contains', getOwnPropertyDescriptor$3(Node.prototype, 'contains'));
}

if (hasOwnProperty$3.call(HTMLElement.prototype, 'parentElement')) {
  defineProperty$2(HTMLElement.prototype, 'parentElement', getOwnPropertyDescriptor$3(Node.prototype, 'parentElement'));
}

const InternalSlot = createHiddenField$2('shadowRecord', 'synthetic-shadow');
const {
  createDocumentFragment
} = document;

function getInternalSlot(root) {
  const record = getHiddenField$2(root, InternalSlot);

  if (isUndefined$3(record)) {
    throw new TypeError();
  }

  return record;
}

const ShadowRootResolverKey = '$shadowResolver$';
const ShadowResolverPrivateKey = '$$ShadowResolverKey$$';
defineProperty$2(Node.prototype, ShadowRootResolverKey, {
  set(fn) {
    this[ShadowResolverPrivateKey] = fn;
    setNodeOwnerKey(this, fn.nodeKey);
  },

  get() {
    return this[ShadowResolverPrivateKey];
  },

  configurable: true,
  enumerable: true
});

function getShadowRootResolver(node) {
  return node[ShadowRootResolverKey];
}

function setShadowRootResolver(node, fn) {
  node[ShadowRootResolverKey] = fn;
}

function isDelegatingFocus(host) {
  return getInternalSlot(host).delegatesFocus;
}

function getHost(root) {
  return getInternalSlot(root).host;
}

function getShadowRoot(elm) {
  return getInternalSlot(elm).shadowRoot;
}

function isHostElement(node) {
  return !isUndefined$3(getHiddenField$2(node, InternalSlot));
}

let uid = 0;

function attachShadow$1(elm, options) {
  if (!isUndefined$3(getHiddenField$2(elm, InternalSlot))) {
    throw new Error(`Failed to execute 'attachShadow' on 'Element': Shadow root cannot be created on a host which already hosts a shadow tree.`);
  }

  const {
    mode,
    delegatesFocus
  } = options;
  const doc = getOwnerDocument(elm);
  const sr = createDocumentFragment.call(doc);
  const record = {
    mode,
    delegatesFocus: !!delegatesFocus,
    host: elm,
    shadowRoot: sr
  };
  setHiddenField$2(sr, InternalSlot, record);
  setHiddenField$2(elm, InternalSlot, record);

  const shadowResolver = () => sr;

  const x = shadowResolver.nodeKey = uid++;
  setNodeKey(elm, x);
  setShadowRootResolver(sr, shadowResolver);
  setPrototypeOf$2(sr, SyntheticShadowRoot.prototype);
  return sr;
}

const SyntheticShadowRootDescriptors = {
  constructor: {
    writable: true,
    configurable: true,
    value: SyntheticShadowRoot
  },
  toString: {
    writable: true,
    configurable: true,

    value() {
      return `[object ShadowRoot]`;
    }

  }
};
const ShadowRootDescriptors = {
  activeElement: {
    enumerable: true,
    configurable: true,

    get() {
      const host = getHost(this);
      const doc = getOwnerDocument(host);
      const activeElement = DocumentPrototypeActiveElement.call(doc);

      if (isNull$2(activeElement)) {
        return activeElement;
      }

      if ((compareDocumentPosition.call(host, activeElement) & DOCUMENT_POSITION_CONTAINED_BY) === 0) {
        return null;
      }

      let node = activeElement;

      while (!isNodeOwnedBy(host, node)) {
        node = parentElementGetter.call(node);
      }

      if (isSlotElement(node)) {
        return null;
      }

      return node;
    }

  },
  delegatesFocus: {
    configurable: true,

    get() {
      return getInternalSlot(this).delegatesFocus;
    }

  },
  elementFromPoint: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(left, top) {
      const host = getHost(this);
      const doc = getOwnerDocument(host);
      const element = elementFromPoint.call(doc, left, top);

      if (isNull$2(element)) {
        return element;
      }

      return retarget(this, pathComposer(element, true));
    }

  },
  elementsFromPoint: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(_left, _top) {
      throw new Error('Disallowed method "elementsFromPoint" on ShadowRoot.');
    }

  },
  getSelection: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      throw new Error('Disallowed method "getSelection" on ShadowRoot.');
    }

  },
  host: {
    enumerable: true,
    configurable: true,

    get() {
      return getHost(this);
    }

  },
  mode: {
    configurable: true,

    get() {
      return getInternalSlot(this).mode;
    }

  },
  styleSheets: {
    enumerable: true,
    configurable: true,

    get() {
      throw new Error();
    }

  }
};
const eventToShadowRootMap = new WeakMap();
const NodePatchDescriptors = {
  insertBefore: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(newChild, refChild) {
      insertBefore$1.call(getHost(this), newChild, refChild);
      return newChild;
    }

  },
  removeChild: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(oldChild) {
      removeChild$1.call(getHost(this), oldChild);
      return oldChild;
    }

  },
  appendChild: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(newChild) {
      appendChild$1.call(getHost(this), newChild);
      return newChild;
    }

  },
  replaceChild: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(newChild, oldChild) {
      replaceChild$1.call(getHost(this), newChild, oldChild);
      return oldChild;
    }

  },
  addEventListener: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(type, listener, options) {
      addShadowRootEventListener(this, type, listener);
    }

  },
  dispatchEvent: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(evt) {
      eventToShadowRootMap.set(evt, this);
      return dispatchEvent.apply(getHost(this), arguments);
    }

  },
  removeEventListener: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(type, listener, options) {
      removeShadowRootEventListener(this, type, listener);
    }

  },
  baseURI: {
    enumerable: true,
    configurable: true,

    get() {
      return getHost(this).baseURI;
    }

  },
  childNodes: {
    enumerable: true,
    configurable: true,

    get() {
      return createStaticNodeList(shadowRootChildNodes(this));
    }

  },
  cloneNode: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      throw new Error('Disallowed method "cloneNode" on ShadowRoot.');
    }

  },
  compareDocumentPosition: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(otherNode) {
      const host = getHost(this);

      if (this === otherNode) {
        return 0;
      } else if (this.contains(otherNode)) {
        return 20;
      } else if (compareDocumentPosition.call(host, otherNode) & DOCUMENT_POSITION_CONTAINED_BY) {
        return 37;
      } else {
        return 35;
      }
    }

  },
  contains: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(otherNode) {
      if (this === otherNode) {
        return true;
      }

      const host = getHost(this);
      return (compareDocumentPosition.call(host, otherNode) & DOCUMENT_POSITION_CONTAINED_BY) !== 0 && isNodeOwnedBy(host, otherNode);
    }

  },
  firstChild: {
    enumerable: true,
    configurable: true,

    get() {
      const childNodes = getInternalChildNodes(this);
      return childNodes[0] || null;
    }

  },
  lastChild: {
    enumerable: true,
    configurable: true,

    get() {
      const childNodes = getInternalChildNodes(this);
      return childNodes[childNodes.length - 1] || null;
    }

  },
  hasChildNodes: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      const childNodes = getInternalChildNodes(this);
      return childNodes.length > 0;
    }

  },
  isConnected: {
    enumerable: true,
    configurable: true,

    get() {
      return isConnected.call(getHost(this));
    }

  },
  nextSibling: {
    enumerable: true,
    configurable: true,

    get() {
      return null;
    }

  },
  previousSibling: {
    enumerable: true,
    configurable: true,

    get() {
      return null;
    }

  },
  nodeName: {
    enumerable: true,
    configurable: true,

    get() {
      return '#document-fragment';
    }

  },
  nodeType: {
    enumerable: true,
    configurable: true,

    get() {
      return 11;
    }

  },
  nodeValue: {
    enumerable: true,
    configurable: true,

    get() {
      return null;
    }

  },
  ownerDocument: {
    enumerable: true,
    configurable: true,

    get() {
      return getHost(this).ownerDocument;
    }

  },
  parentElement: {
    enumerable: true,
    configurable: true,

    get() {
      return null;
    }

  },
  parentNode: {
    enumerable: true,
    configurable: true,

    get() {
      return null;
    }

  },
  textContent: {
    enumerable: true,
    configurable: true,

    get() {
      const childNodes = getInternalChildNodes(this);
      let textContent = '';

      for (let i = 0, len = childNodes.length; i < len; i += 1) {
        const currentNode = childNodes[i];

        if (currentNode.nodeType !== COMMENT_NODE) {
          textContent += getTextContent(currentNode);
        }
      }

      return textContent;
    },

    set(v) {
      const host = getHost(this);
      textContextSetter.call(host, v);
    }

  },
  getRootNode: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(options) {
      return !isUndefined$3(options) && isTrue$1$2(options.composed) ? getHost(this).getRootNode(options) : this;
    }

  }
};
const ElementPatchDescriptors = {
  innerHTML: {
    enumerable: true,
    configurable: true,

    get() {
      const childNodes = getInternalChildNodes(this);
      let innerHTML = '';

      for (let i = 0, len = childNodes.length; i < len; i += 1) {
        innerHTML += getOuterHTML(childNodes[i]);
      }

      return innerHTML;
    },

    set(v) {
      const host = getHost(this);
      innerHTMLSetter.call(host, v);
    }

  }
};
const ParentNodePatchDescriptors = {
  childElementCount: {
    enumerable: true,
    configurable: true,

    get() {
      return this.children.length;
    }

  },
  children: {
    enumerable: true,
    configurable: true,

    get() {
      return createStaticHTMLCollection(ArrayFilter$2.call(shadowRootChildNodes(this), elm => elm instanceof Element));
    }

  },
  firstElementChild: {
    enumerable: true,
    configurable: true,

    get() {
      return this.children[0] || null;
    }

  },
  lastElementChild: {
    enumerable: true,
    configurable: true,

    get() {
      const {
        children
      } = this;
      return children.item(children.length - 1) || null;
    }

  },
  getElementById: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      throw new Error('Disallowed method "getElementById" on ShadowRoot.');
    }

  },
  querySelector: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(selectors) {
      return shadowRootQuerySelector(this, selectors);
    }

  },
  querySelectorAll: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(selectors) {
      return createStaticNodeList(shadowRootQuerySelectorAll(this, selectors));
    }

  }
};
assign$2(SyntheticShadowRootDescriptors, NodePatchDescriptors, ParentNodePatchDescriptors, ElementPatchDescriptors, ShadowRootDescriptors);

function SyntheticShadowRoot() {
  throw new TypeError('Illegal constructor');
}

SyntheticShadowRoot.prototype = create$3(DocumentFragment.prototype, SyntheticShadowRootDescriptors);

function getIE11FakeShadowRootPlaceholder(host) {
  const shadowRoot = getShadowRoot(host);
  let c = shadowRoot.$$placeholder$$;

  if (!isUndefined$3(c)) {
    return c;
  }

  const doc = getOwnerDocument(host);
  c = shadowRoot.$$placeholder$$ = createComment.call(doc, '');
  defineProperties$2(c, {
    childNodes: {
      get() {
        return shadowRoot.childNodes;
      },

      enumerable: true,
      configurable: true
    },
    tagName: {
      get() {
        return `#shadow-root (${shadowRoot.mode})`;
      },

      enumerable: true,
      configurable: true
    }
  });
  return c;
}

function pathComposer(startNode, composed) {
  const composedPath = [];
  let startRoot;

  if (startNode instanceof Window) {
    startRoot = startNode;
  } else if (startNode instanceof Node) {
    startRoot = startNode.getRootNode();
  } else {
    return composedPath;
  }

  let current = startNode;

  while (!isNull$2(current)) {
    composedPath.push(current);

    if (current instanceof Element || current instanceof Text) {
      const assignedSlot = current.assignedSlot;

      if (!isNull$2(assignedSlot)) {
        current = assignedSlot;
      } else {
        current = current.parentNode;
      }
    } else if ((current instanceof SyntheticShadowRoot || isInstanceOfNativeShadowRoot(current)) && (composed || current !== startRoot)) {
      current = current.host;
    } else if (current instanceof Node) {
      current = current.parentNode;
    } else {
      current = null;
    }
  }

  let doc;

  if (startNode instanceof Window) {
    doc = startNode.document;
  } else {
    doc = getOwnerDocument(startNode);
  }

  if (composedPath[composedPath.length - 1] === doc) {
    composedPath.push(window);
  }

  return composedPath;
}

function retarget(refNode, path) {
  if (isNull$2(refNode)) {
    return null;
  }

  const refNodePath = pathComposer(refNode, true);
  const p$ = path;

  for (let i = 0, ancestor, lastRoot, root, rootIdx; i < p$.length; i++) {
    ancestor = p$[i];
    root = ancestor instanceof Window ? ancestor : ancestor.getRootNode();

    if (root !== lastRoot) {
      rootIdx = refNodePath.indexOf(root);
      lastRoot = root;
    }

    if (!(root instanceof SyntheticShadowRoot) || !isUndefined$3(rootIdx) && rootIdx > -1) {
      return ancestor;
    }
  }

  return null;
}

function elemFromPoint(left, top) {
  const element = elementFromPoint.call(this, left, top);

  if (isNull$2(element)) {
    return element;
  }

  return retarget(this, pathComposer(element, true));
}

Document.prototype.elementFromPoint = elemFromPoint;
defineProperty$2(Document.prototype, 'activeElement', {
  get() {
    let node = DocumentPrototypeActiveElement.call(this);

    if (isNull$2(node)) {
      return node;
    }

    while (!isUndefined$3(getNodeOwnerKey(node))) {
      node = parentElementGetter.call(node);

      if (isNull$2(node)) {
        return null;
      }
    }

    if (node.tagName === 'HTML') {
      node = this.body;
    }

    return node;
  },

  enumerable: true,
  configurable: true
});
defineProperty$2(Document.prototype, 'getElementById', {
  value() {
    const elm = getElementById.apply(this, ArraySlice$3.call(arguments));

    if (isNull$2(elm)) {
      return null;
    }

    return isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm) ? elm : null;
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty$2(Document.prototype, 'querySelector', {
  value() {
    const elements = arrayFromCollection(querySelectorAll$1.apply(this, ArraySlice$3.call(arguments)));
    const filtered = ArrayFind$2.call(elements, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return !isUndefined$3(filtered) ? filtered : null;
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty$2(Document.prototype, 'querySelectorAll', {
  value() {
    const elements = arrayFromCollection(querySelectorAll$1.apply(this, ArraySlice$3.call(arguments)));
    const filtered = ArrayFilter$2.call(elements, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticNodeList(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty$2(Document.prototype, 'getElementsByClassName', {
  value() {
    const elements = arrayFromCollection(getElementsByClassName$1.apply(this, ArraySlice$3.call(arguments)));
    const filtered = ArrayFilter$2.call(elements, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticHTMLCollection(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty$2(Document.prototype, 'getElementsByTagName', {
  value() {
    const elements = arrayFromCollection(getElementsByTagName$1.apply(this, ArraySlice$3.call(arguments)));
    const filtered = ArrayFilter$2.call(elements, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticHTMLCollection(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty$2(Document.prototype, 'getElementsByTagNameNS', {
  value() {
    const elements = arrayFromCollection(getElementsByTagNameNS$1.apply(this, ArraySlice$3.call(arguments)));
    const filtered = ArrayFilter$2.call(elements, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticHTMLCollection(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty$2(getOwnPropertyDescriptor$3(HTMLDocument.prototype, 'getElementsByName') ? HTMLDocument.prototype : Document.prototype, 'getElementsByName', {
  value() {
    const elements = arrayFromCollection(getElementsByName.apply(this, ArraySlice$3.call(arguments)));
    const filtered = ArrayFilter$2.call(elements, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticNodeList(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
Object.defineProperty(window, 'ShadowRoot', {
  value: SyntheticShadowRoot,
  configurable: true,
  writable: true
});
const composedDescriptor = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');

function detect$1$1() {
  if (!composedDescriptor) {
    return false;
  }

  let clickEvent = new Event('click');
  const button = document.createElement('button');
  button.addEventListener('click', event => clickEvent = event);
  button.click();
  return !composedDescriptor.get.call(clickEvent);
}

const originalClickDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'click');

function handleClick(event) {
  Object.defineProperty(event, 'composed', {
    configurable: true,
    enumerable: true,

    get() {
      return true;
    }

  });
}

function apply$1$1() {
  HTMLElement.prototype.click = function () {
    addEventListener.call(this, 'click', handleClick);

    try {
      originalClickDescriptor.value.call(this);
    } finally {
      removeEventListener.call(this, 'click', handleClick);
    }
  };
}

if (detect$1$1()) {
  apply$1$1();
}

function detect$2$1() {
  return new Event('test', {
    composed: true
  }).composed !== true;
}

function apply$2() {
  const composedEvents = assign$2(create$3(null), {
    beforeinput: 1,
    blur: 1,
    click: 1,
    compositionend: 1,
    compositionstart: 1,
    compositionupdate: 1,
    copy: 1,
    cut: 1,
    dblclick: 1,
    DOMActivate: 1,
    DOMFocusIn: 1,
    DOMFocusOut: 1,
    drag: 1,
    dragend: 1,
    dragenter: 1,
    dragleave: 1,
    dragover: 1,
    dragstart: 1,
    drop: 1,
    focus: 1,
    focusin: 1,
    focusout: 1,
    gotpointercapture: 1,
    input: 1,
    keydown: 1,
    keypress: 1,
    keyup: 1,
    lostpointercapture: 1,
    mousedown: 1,
    mouseenter: 1,
    mouseleave: 1,
    mousemove: 1,
    mouseout: 1,
    mouseover: 1,
    mouseup: 1,
    paste: 1,
    pointercancel: 1,
    pointerdown: 1,
    pointerenter: 1,
    pointerleave: 1,
    pointermove: 1,
    pointerout: 1,
    pointerover: 1,
    pointerup: 1,
    touchcancel: 1,
    touchend: 1,
    touchmove: 1,
    touchstart: 1,
    wheel: 1
  });
  const EventConstructor = Event;

  function PatchedEvent(type, eventInitDict) {
    const event = new EventConstructor(type, eventInitDict);
    const isComposed = !!(eventInitDict && eventInitDict.composed);
    Object.defineProperties(event, {
      composed: {
        get() {
          return isComposed;
        },

        configurable: true,
        enumerable: true
      }
    });
    return event;
  }

  PatchedEvent.prototype = EventConstructor.prototype;
  PatchedEvent.AT_TARGET = EventConstructor.AT_TARGET;
  PatchedEvent.BUBBLING_PHASE = EventConstructor.BUBBLING_PHASE;
  PatchedEvent.CAPTURING_PHASE = EventConstructor.CAPTURING_PHASE;
  PatchedEvent.NONE = EventConstructor.NONE;
  window.Event = PatchedEvent;
  Object.defineProperties(Event.prototype, {
    composed: {
      get() {
        const {
          type
        } = this;
        return composedEvents[type] === 1;
      },

      configurable: true,
      enumerable: true
    }
  });
}

if (detect$2$1()) {
  apply$2();
}

const CustomEventConstructor = CustomEvent;

function PatchedCustomEvent(type, eventInitDict) {
  const event = new CustomEventConstructor(type, eventInitDict);
  const isComposed = !!(eventInitDict && eventInitDict.composed);
  Object.defineProperties(event, {
    composed: {
      get() {
        return isComposed;
      },

      configurable: true,
      enumerable: true
    }
  });
  return event;
}

PatchedCustomEvent.prototype = CustomEventConstructor.prototype;
window.CustomEvent = PatchedCustomEvent;

if (typeof ClipboardEvent !== 'undefined') {
  const isComposedType = assign$2(create$3(null), {
    copy: 1,
    cut: 1,
    paste: 1
  });
  defineProperties$2(ClipboardEvent.prototype, {
    composed: {
      get() {
        const {
          type
        } = this;
        return isComposedType[type] === 1;
      },

      configurable: true,
      enumerable: true
    }
  });
}

function detect$3() {
  return typeof HTMLIFrameElement !== 'undefined';
}

function apply$3() {
  const desc = getOwnPropertyDescriptor$3(HTMLIFrameElement.prototype, 'contentWindow');
  const {
    get: originalGetter
  } = desc;

  desc.get = function () {
    const original = originalGetter.call(this);

    if (isNull$2(original) || isUndefined$3(getNodeOwnerKey(this))) {
      return original;
    }

    return wrapIframeWindow(original);
  };

  defineProperty$2(HTMLIFrameElement.prototype, 'contentWindow', desc);
}

function wrapIframeWindow(win) {
  return {
    addEventListener() {
      return win.addEventListener.apply(win, arguments);
    },

    blur() {
      return win.blur.apply(win, arguments);
    },

    close() {
      return win.close.apply(win, arguments);
    },

    focus() {
      return win.focus.apply(win, arguments);
    },

    postMessage() {
      return win.postMessage.apply(win, arguments);
    },

    removeEventListener() {
      return win.removeEventListener.apply(win, arguments);
    },

    get closed() {
      return win.closed;
    },

    get frames() {
      return win.frames;
    },

    get length() {
      return win.length;
    },

    get location() {
      return win.location;
    },

    set location(value) {
      win.location = value;
    },

    get opener() {
      return win.opener;
    },

    get parent() {
      return win.parent;
    },

    get self() {
      return win.self;
    },

    get top() {
      return win.top;
    },

    get window() {
      return win.window;
    }

  };
}

if (detect$3()) {
  apply$3();
}

const OriginalMutationObserver = MutationObserver;
const {
  disconnect: originalDisconnect,
  observe: originalObserve,
  takeRecords: originalTakeRecords
} = OriginalMutationObserver.prototype;
const wrapperLookupField = '$$lwcObserverCallbackWrapper$$';
const observerLookupField = '$$lwcNodeObservers$$';
const observerToNodesMap = new WeakMap();

function getNodeObservers(node) {
  return node[observerLookupField];
}

function setNodeObservers(node, observers) {
  node[observerLookupField] = observers;
}

function retargetMutationRecord(originalRecord) {
  const {
    addedNodes,
    removedNodes,
    target,
    type
  } = originalRecord;
  const retargetedRecord = create$3(MutationRecord.prototype);
  defineProperties$2(retargetedRecord, {
    addedNodes: {
      get() {
        return addedNodes;
      },

      enumerable: true,
      configurable: true
    },
    removedNodes: {
      get() {
        return removedNodes;
      },

      enumerable: true,
      configurable: true
    },
    type: {
      get() {
        return type;
      },

      enumerable: true,
      configurable: true
    },
    target: {
      get() {
        return target.shadowRoot;
      },

      enumerable: true,
      configurable: true
    }
  });
  return retargetedRecord;
}

function isQualifiedObserver(observer, target) {
  let parentNode = target;

  while (!isNull$2(parentNode)) {
    const parentNodeObservers = getNodeObservers(parentNode);

    if (!isUndefined$3(parentNodeObservers) && (parentNodeObservers[0] === observer || ArrayIndexOf$2.call(parentNodeObservers, observer) !== -1)) {
      return true;
    }

    parentNode = parentNode.parentNode;
  }

  return false;
}

function filterMutationRecords(mutations, observer) {
  return ArrayReduce$2.call(mutations, (filteredSet, record) => {
    const {
      target,
      addedNodes,
      removedNodes,
      type
    } = record;

    if (type === 'childList' && !isUndefined$3(getNodeKey(target))) {
      if (addedNodes.length > 0) {
        const sampleNode = addedNodes[0];

        if (isQualifiedObserver(observer, sampleNode)) {
          const nodeObservers = getNodeObservers(target);

          if (nodeObservers && (nodeObservers[0] === observer || ArrayIndexOf$2.call(nodeObservers, observer) !== -1)) {
            ArrayPush$3.call(filteredSet, record);
          } else {
            ArrayPush$3.call(filteredSet, retargetMutationRecord(record));
          }
        }
      } else {
        const shadowRoot = target.shadowRoot;
        const sampleNode = removedNodes[0];

        if (getNodeNearestOwnerKey(target) === getNodeNearestOwnerKey(sampleNode) && isQualifiedObserver(observer, target)) {
          ArrayPush$3.call(filteredSet, record);
        } else if (shadowRoot) {
          const shadowRootObservers = getNodeObservers(shadowRoot);

          if (shadowRootObservers && (shadowRootObservers[0] === observer || ArrayIndexOf$2.call(shadowRootObservers, observer) !== -1)) {
            ArrayPush$3.call(filteredSet, retargetMutationRecord(record));
          }
        }
      }
    } else {
      if (isQualifiedObserver(observer, target)) {
        ArrayPush$3.call(filteredSet, record);
      }
    }

    return filteredSet;
  }, []);
}

function getWrappedCallback(callback) {
  let wrappedCallback = callback[wrapperLookupField];

  if (isUndefined$3(wrappedCallback)) {
    wrappedCallback = callback[wrapperLookupField] = (mutations, observer) => {
      const filteredRecords = filterMutationRecords(mutations, observer);

      if (filteredRecords.length === 0) {
        return;
      }

      callback.call(observer, filteredRecords, observer);
    };
  }

  return wrappedCallback;
}

function PatchedMutationObserver(callback) {
  const wrappedCallback = getWrappedCallback(callback);
  const observer = new OriginalMutationObserver(wrappedCallback);
  return observer;
}

function patchedDisconnect() {
  originalDisconnect.call(this);
  const observedNodes = observerToNodesMap.get(this);

  if (!isUndefined$3(observedNodes)) {
    forEach$2.call(observedNodes, observedNode => {
      const observers = observedNode[observerLookupField];

      if (!isUndefined$3(observers)) {
        const index = ArrayIndexOf$2.call(observers, this);

        if (index !== -1) {
          ArraySplice$2.call(observers, index, 1);
        }
      }
    });
    observedNodes.length = 0;
  }
}

function patchedObserve(target, options) {
  let targetObservers = getNodeObservers(target);

  if (isUndefined$3(targetObservers)) {
    targetObservers = [];
    setNodeObservers(target, targetObservers);
  }

  if (ArrayIndexOf$2.call(targetObservers, this) === -1) {
    ArrayPush$3.call(targetObservers, this);
  }

  if (target instanceof SyntheticShadowRoot) {
    target = target.host;
  }

  if (observerToNodesMap.has(this)) {
    const observedNodes = observerToNodesMap.get(this);

    if (ArrayIndexOf$2.call(observedNodes, target) === -1) {
      ArrayPush$3.call(observedNodes, target);
    }
  } else {
    observerToNodesMap.set(this, [target]);
  }

  return originalObserve.call(this, target, options);
}

function patchedTakeRecords() {
  return filterMutationRecords(originalTakeRecords.call(this), this);
}

PatchedMutationObserver.prototype = OriginalMutationObserver.prototype;
PatchedMutationObserver.prototype.disconnect = patchedDisconnect;
PatchedMutationObserver.prototype.observe = patchedObserve;
PatchedMutationObserver.prototype.takeRecords = patchedTakeRecords;
defineProperty$2(window, 'MutationObserver', {
  value: PatchedMutationObserver,
  configurable: true,
  writable: true
});
const EventListenerMap = new WeakMap();

function isEventListenerOrEventListenerObject(fnOrObj) {
  return isFunction$2(fnOrObj) || isObject$3(fnOrObj) && !isNull$2(fnOrObj) && isFunction$2(fnOrObj.handleEvent);
}

function getEventListenerWrapper(fnOrObj) {
  if (!isEventListenerOrEventListenerObject(fnOrObj)) {
    return fnOrObj;
  }

  let wrapperFn = EventListenerMap.get(fnOrObj);

  if (isUndefined$3(wrapperFn)) {
    wrapperFn = function (event) {
      {
        const currentTarget = eventCurrentTargetGetter.call(event);
        assert$2.invariant(isFalse$1$2(isHostElement(currentTarget)), 'This routine should not be used to wrap event listeners for host elements and shadow roots.');
      }

      const {
        composed
      } = event;

      if (eventToShadowRootMap.has(event) && isFalse$1$2(composed)) {
        return;
      }

      return isFunction$2(fnOrObj) ? fnOrObj.call(this, event) : fnOrObj.handleEvent && fnOrObj.handleEvent(event);
    };

    EventListenerMap.set(fnOrObj, wrapperFn);
  }

  return wrapperFn;
}

function patchedAddEventListener(_type, _listener, _optionsOrCapture) {
  if (isHostElement(this)) {
    return addCustomElementEventListener.apply(this, arguments);
  }

  const args = ArraySlice$3.call(arguments);

  if (args.length > 1) {
    args[1] = getEventListenerWrapper(args[1]);
  }

  return addEventListener.apply(this, args);
}

function patchedRemoveEventListener(_type, _listener, _optionsOrCapture) {
  if (isHostElement(this)) {
    return removeCustomElementEventListener.apply(this, arguments);
  }

  const args = ArraySlice$3.call(arguments);

  if (arguments.length > 1) {
    args[1] = getEventListenerWrapper(args[1]);
  }

  removeEventListener.apply(this, args);
  removeEventListener.apply(this, arguments);
}

defineProperties$2(eventTargetPrototype, {
  addEventListener: {
    value: patchedAddEventListener,
    enumerable: true,
    writable: true,
    configurable: true
  },
  removeEventListener: {
    value: patchedRemoveEventListener,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

function detect$4() {
  return typeof EventTarget === 'undefined';
}

function patchedAddEventListener$1(_type, _listener, _options) {
  if (arguments.length > 1) {
    const args = ArraySlice$3.call(arguments);
    args[1] = getEventListenerWrapper(args[1]);
    return windowAddEventListener.apply(this, args);
  }

  return windowAddEventListener.apply(this, arguments);
}

function patchedRemoveEventListener$1(_type, _listener, _options) {
  if (arguments.length > 1) {
    const args = ArraySlice$3.call(arguments);
    args[1] = getEventListenerWrapper(args[1]);
    windowRemoveEventListener.apply(this, args);
  }

  windowRemoveEventListener.apply(this, arguments);
}

function apply$4() {
  defineProperties$2(Window.prototype, {
    addEventListener: {
      value: patchedAddEventListener$1,
      enumerable: true,
      writable: true,
      configurable: true
    },
    removeEventListener: {
      value: patchedRemoveEventListener$1,
      enumerable: true,
      writable: true,
      configurable: true
    }
  });
}

if (detect$4()) {
  apply$4();
}

function patchedTargetGetter() {
  const originalTarget = eventTargetGetter.call(this);

  if (!(originalTarget instanceof Node)) {
    return originalTarget;
  }

  const doc = getOwnerDocument(originalTarget);
  const composedPath = pathComposer(originalTarget, this.composed);
  const originalCurrentTarget = eventCurrentTargetGetter.call(this);

  if (!(originalCurrentTarget instanceof Node)) {
    if (isNull$2(originalCurrentTarget) && isUndefined$3(getNodeOwnerKey(originalTarget))) {
      return originalTarget;
    }

    return retarget(doc, composedPath);
  } else if (originalCurrentTarget === doc || originalCurrentTarget === doc.body) {
    if (isUndefined$3(getNodeOwnerKey(originalTarget))) {
      return originalTarget;
    }

    return retarget(doc, composedPath);
  }

  let actualCurrentTarget = originalCurrentTarget;
  let actualPath = composedPath;

  if (isHostElement(originalCurrentTarget)) {
    const context = eventToContextMap.get(this);

    if (context === EventListenerContext.SHADOW_ROOT_LISTENER) {
      actualCurrentTarget = getShadowRoot(originalCurrentTarget);
    }
  }

  if (isHostElement(originalTarget) && eventToShadowRootMap.has(this)) {
    actualPath = pathComposer(getShadowRoot(originalTarget), this.composed);
  }

  return retarget(actualCurrentTarget, actualPath);
}

function patchedComposedPathValue() {
  const originalTarget = eventTargetGetter.call(this);
  const originalCurrentTarget = eventCurrentTargetGetter.call(this);

  if (!(originalTarget instanceof Node)) {
    return [];
  }

  if (isNull$2(originalCurrentTarget)) {
    return [];
  }

  let actualTarget = originalTarget;

  if (isHostElement(originalTarget) && eventToShadowRootMap.has(this)) {
    actualTarget = getShadowRoot(originalTarget);
  }

  return pathComposer(actualTarget, this.composed);
}

defineProperties$2(Event.prototype, {
  target: {
    get: patchedTargetGetter,
    enumerable: true,
    configurable: true
  },
  composedPath: {
    value: patchedComposedPathValue,
    writable: true,
    enumerable: true,
    configurable: true
  },
  srcElement: {
    get: patchedTargetGetter,
    enumerable: true,
    configurable: true
  },
  path: {
    get: patchedComposedPathValue,
    enumerable: true,
    configurable: true
  }
});

function retargetRelatedTarget(Ctor) {
  const relatedTargetGetter = getOwnPropertyDescriptor$3(Ctor.prototype, 'relatedTarget').get;
  defineProperty$2(Ctor.prototype, 'relatedTarget', {
    get() {
      const relatedTarget = relatedTargetGetter.call(this);

      if (isNull$2(relatedTarget)) {
        return null;
      }

      if (!(relatedTarget instanceof Node) || !isNodeShadowed(relatedTarget)) {
        return relatedTarget;
      }

      let pointOfReference = eventCurrentTargetGetter.call(this);

      if (isNull$2(pointOfReference)) {
        pointOfReference = getOwnerDocument(relatedTarget);
      }

      return retarget(pointOfReference, pathComposer(relatedTarget, true));
    },

    enumerable: true,
    configurable: true
  });
}

retargetRelatedTarget(FocusEvent);
retargetRelatedTarget(MouseEvent);
let observer;
const observerConfig = {
  childList: true
};
const SlotChangeKey = createHiddenField$2('slotchange', 'synthetic-shadow');

function initSlotObserver() {
  return new MO(mutations => {
    const slots = [];
    forEach$2.call(mutations, mutation => {
      {
        assert$2.invariant(mutation.type === 'childList', `Invalid mutation type: ${mutation.type}. This mutation handler for slots should only handle "childList" mutations.`);
      }

      const {
        target: slot
      } = mutation;

      if (ArrayIndexOf$2.call(slots, slot) === -1) {
        ArrayPush$3.call(slots, slot);
        dispatchEvent.call(slot, new CustomEvent('slotchange'));
      }
    });
  });
}

function getFilteredSlotFlattenNodes(slot) {
  const childNodes = arrayFromCollection(childNodesGetter.call(slot));
  return ArrayReduce$2.call(childNodes, (seed, child) => {
    if (child instanceof Element && isSlotElement(child)) {
      ArrayPush$3.apply(seed, getFilteredSlotFlattenNodes(child));
    } else {
      ArrayPush$3.call(seed, child);
    }

    return seed;
  }, []);
}

function assignedSlotGetterPatched() {
  const parentNode = parentNodeGetter.call(this);

  if (isNull$2(parentNode) || !isSlotElement(parentNode) || getNodeNearestOwnerKey(parentNode) === getNodeNearestOwnerKey(this)) {
    return null;
  }

  return parentNode;
}

defineProperties$2(HTMLSlotElement.prototype, {
  addEventListener: {
    value(type, listener, options) {
      HTMLElement.prototype.addEventListener.call(this, type, listener, options);

      if (type === 'slotchange' && !getHiddenField$2(this, SlotChangeKey)) {
        setHiddenField$2(this, SlotChangeKey, true);

        if (!observer) {
          observer = initSlotObserver();
        }

        MutationObserverObserve.call(observer, this, observerConfig);
      }
    },

    writable: true,
    enumerable: true,
    configurable: true
  },
  assignedElements: {
    value(options) {
      if (isNodeShadowed(this)) {
        const flatten = !isUndefined$3(options) && isTrue$1$2(options.flatten);
        const nodes = flatten ? getFilteredSlotFlattenNodes(this) : getFilteredSlotAssignedNodes(this);
        return ArrayFilter$2.call(nodes, node => node instanceof Element);
      } else {
        return assignedElements.apply(this, ArraySlice$3.call(arguments));
      }
    },

    writable: true,
    enumerable: true,
    configurable: true
  },
  assignedNodes: {
    value(options) {
      if (isNodeShadowed(this)) {
        const flatten = !isUndefined$3(options) && isTrue$1$2(options.flatten);
        return flatten ? getFilteredSlotFlattenNodes(this) : getFilteredSlotAssignedNodes(this);
      } else {
        return assignedNodes.apply(this, ArraySlice$3.call(arguments));
      }
    },

    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    get() {
      const name = getAttribute.call(this, 'name');
      return isNull$2(name) ? '' : name;
    },

    set(value) {
      setAttribute.call(this, 'name', value);
    },

    enumerable: true,
    configurable: true
  },
  childNodes: {
    get() {
      if (isNodeShadowed(this)) {
        const owner = getNodeOwner(this);
        const childNodes = isNull$2(owner) ? [] : getAllMatches(owner, getFilteredChildNodes(this));
        return createStaticNodeList(childNodes);
      }

      return childNodesGetter.call(this);
    },

    enumerable: true,
    configurable: true
  }
});
defineProperties$2(Text.prototype, {
  assignedSlot: {
    get: assignedSlotGetterPatched,
    enumerable: true,
    configurable: true
  }
});

function getNonPatchedFilteredArrayOfNodes(context, unfilteredNodes) {
  let filtered;
  const ownerKey = getNodeOwnerKey(context);

  if (!isUndefined$3(ownerKey)) {
    if (isHostElement(context)) {
      const owner = getNodeOwner(context);

      if (isNull$2(owner)) {
        filtered = [];
      } else if (getNodeKey(context)) {
        filtered = getAllSlottedMatches(context, unfilteredNodes);
      } else {
        filtered = getAllMatches(owner, unfilteredNodes);
      }
    } else {
      filtered = ArrayFilter$2.call(unfilteredNodes, elm => getNodeNearestOwnerKey(elm) === ownerKey);
    }
  } else if (context instanceof HTMLBodyElement) {
    filtered = ArrayFilter$2.call(unfilteredNodes, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(context));
  } else {
    filtered = ArraySlice$3.call(unfilteredNodes);
  }

  return filtered;
}

var ShadowDomSemantic;

(function (ShadowDomSemantic) {
  ShadowDomSemantic[ShadowDomSemantic["Disabled"] = 0] = "Disabled";
  ShadowDomSemantic[ShadowDomSemantic["Enabled"] = 1] = "Enabled";
})(ShadowDomSemantic || (ShadowDomSemantic = {}));

function innerHTMLGetterPatched() {
  const childNodes = getInternalChildNodes(this);
  let innerHTML = '';

  for (let i = 0, len = childNodes.length; i < len; i += 1) {
    innerHTML += getOuterHTML(childNodes[i]);
  }

  return innerHTML;
}

function outerHTMLGetterPatched() {
  return getOuterHTML(this);
}

function attachShadowPatched(options) {
  if (isTrue$1$2(options['$$lwc-synthetic-mode$$'])) {
    return attachShadow$1(this, options);
  } else {
    return attachShadow.call(this, options);
  }
}

function shadowRootGetterPatched() {
  if (isHostElement(this)) {
    const shadow = getShadowRoot(this);

    if (shadow.mode === 'open') {
      return shadow;
    }
  }

  return shadowRootGetter.call(this);
}

function childrenGetterPatched() {
  const owner = getNodeOwner(this);
  const childNodes = isNull$2(owner) ? [] : getAllMatches(owner, getFilteredChildNodes(this));
  return createStaticHTMLCollection(ArrayFilter$2.call(childNodes, node => node instanceof Element));
}

function childElementCountGetterPatched() {
  return this.children.length;
}

function firstElementChildGetterPatched() {
  return this.children[0] || null;
}

function lastElementChildGetterPatched() {
  const {
    children
  } = this;
  return children.item(children.length - 1) || null;
}

defineProperties$2(Element.prototype, {
  innerHTML: {
    get() {
      if (!runtimeFlags$1.ENABLE_ELEMENT_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return innerHTMLGetterPatched.call(this);
        }

        return innerHTMLGetter.call(this);
      }

      if (isGlobalPatchingSkipped(this)) {
        return innerHTMLGetter.call(this);
      }

      return innerHTMLGetterPatched.call(this);
    },

    set(v) {
      innerHTMLSetter.call(this, v);
    },

    enumerable: true,
    configurable: true
  },
  outerHTML: {
    get() {
      if (!runtimeFlags$1.ENABLE_ELEMENT_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return outerHTMLGetterPatched.call(this);
        }

        return outerHTMLGetter.call(this);
      }

      if (isGlobalPatchingSkipped(this)) {
        return outerHTMLGetter.call(this);
      }

      return outerHTMLGetterPatched.call(this);
    },

    set(v) {
      outerHTMLSetter.call(this, v);
    },

    enumerable: true,
    configurable: true
  },
  attachShadow: {
    value: attachShadowPatched,
    enumerable: true,
    writable: true,
    configurable: true
  },
  shadowRoot: {
    get: shadowRootGetterPatched,
    enumerable: true,
    configurable: true
  },
  children: {
    get() {
      if (hasMountedChildren(this)) {
        return childrenGetterPatched.call(this);
      }

      return childrenGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  childElementCount: {
    get() {
      if (hasMountedChildren(this)) {
        return childElementCountGetterPatched.call(this);
      }

      return childElementCountGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  firstElementChild: {
    get() {
      if (hasMountedChildren(this)) {
        return firstElementChildGetterPatched.call(this);
      }

      return firstElementChildGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  lastElementChild: {
    get() {
      if (hasMountedChildren(this)) {
        return lastElementChildGetterPatched.call(this);
      }

      return lastElementChildGetter.call(this);
    },

    enumerable: true,
    configurable: true
  },
  assignedSlot: {
    get: assignedSlotGetterPatched,
    enumerable: true,
    configurable: true
  }
});

if (hasOwnProperty$3.call(HTMLElement.prototype, 'innerHTML')) {
  defineProperty$2(HTMLElement.prototype, 'innerHTML', getOwnPropertyDescriptor$3(Element.prototype, 'innerHTML'));
}

if (hasOwnProperty$3.call(HTMLElement.prototype, 'outerHTML')) {
  defineProperty$2(HTMLElement.prototype, 'outerHTML', getOwnPropertyDescriptor$3(Element.prototype, 'outerHTML'));
}

if (hasOwnProperty$3.call(HTMLElement.prototype, 'children')) {
  defineProperty$2(HTMLElement.prototype, 'children', getOwnPropertyDescriptor$3(Element.prototype, 'children'));
}

function querySelectorPatched() {
  const nodeList = arrayFromCollection(querySelectorAll.apply(this, ArraySlice$3.call(arguments)));

  if (isHostElement(this)) {
    const owner = getNodeOwner(this);

    if (isNull$2(owner)) {
      return null;
    } else if (getNodeKey(this)) {
      return getFirstSlottedMatch(this, nodeList);
    } else {
      return getFirstMatch(owner, nodeList);
    }
  } else if (isNodeShadowed(this)) {
    const ownerKey = getNodeOwnerKey(this);

    if (!isUndefined$3(ownerKey)) {
      const elm = ArrayFind$2.call(nodeList, elm => getNodeNearestOwnerKey(elm) === ownerKey);
      return isUndefined$3(elm) ? null : elm;
    } else {
      if (!runtimeFlags$1.ENABLE_NODE_LIST_PATCH) {
        return nodeList.length === 0 ? null : nodeList[0];
      }

      const contextNearestOwnerKey = getNodeNearestOwnerKey(this);
      const elm = ArrayFind$2.call(nodeList, elm => getNodeNearestOwnerKey(elm) === contextNearestOwnerKey);
      return isUndefined$3(elm) ? null : elm;
    }
  } else {
    if (!runtimeFlags$1.ENABLE_NODE_LIST_PATCH) {
      if (!(this instanceof HTMLBodyElement)) {
        const elm = nodeList[0];
        return isUndefined$3(elm) ? null : elm;
      }
    }

    const elm = ArrayFind$2.call(nodeList, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(this));
    return isUndefined$3(elm) ? null : elm;
  }
}

function getFilteredArrayOfNodes(context, unfilteredNodes, shadowDomSemantic) {
  let filtered;

  if (isHostElement(context)) {
    const owner = getNodeOwner(context);

    if (isNull$2(owner)) {
      filtered = [];
    } else if (getNodeKey(context)) {
      filtered = getAllSlottedMatches(context, unfilteredNodes);
    } else {
      filtered = getAllMatches(owner, unfilteredNodes);
    }
  } else if (isNodeShadowed(context)) {
    const ownerKey = getNodeOwnerKey(context);

    if (!isUndefined$3(ownerKey)) {
      filtered = ArrayFilter$2.call(unfilteredNodes, elm => getNodeNearestOwnerKey(elm) === ownerKey);
    } else if (shadowDomSemantic === ShadowDomSemantic.Enabled) {
      const contextNearestOwnerKey = getNodeNearestOwnerKey(context);
      filtered = ArrayFilter$2.call(unfilteredNodes, elm => getNodeNearestOwnerKey(elm) === contextNearestOwnerKey);
    } else {
      filtered = ArraySlice$3.call(unfilteredNodes);
    }
  } else {
    if (context instanceof HTMLBodyElement || shadowDomSemantic === ShadowDomSemantic.Enabled) {
      filtered = ArrayFilter$2.call(unfilteredNodes, elm => isUndefined$3(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(context));
    } else {
      filtered = ArraySlice$3.call(unfilteredNodes);
    }
  }

  return filtered;
}

defineProperties$2(Element.prototype, {
  querySelector: {
    value: querySelectorPatched,
    writable: true,
    enumerable: true,
    configurable: true
  },
  querySelectorAll: {
    value() {
      const nodeList = arrayFromCollection(querySelectorAll.apply(this, ArraySlice$3.call(arguments)));

      if (!runtimeFlags$1.ENABLE_NODE_LIST_PATCH) {
        const filteredResults = getFilteredArrayOfNodes(this, nodeList, ShadowDomSemantic.Disabled);
        return createStaticNodeList(filteredResults);
      }

      return createStaticNodeList(getFilteredArrayOfNodes(this, nodeList, ShadowDomSemantic.Enabled));
    },

    writable: true,
    enumerable: true,
    configurable: true
  }
});

{
  defineProperties$2(Element.prototype, {
    getElementsByClassName: {
      value() {
        const elements = arrayFromCollection(getElementsByClassName.apply(this, ArraySlice$3.call(arguments)));

        if (!runtimeFlags$1.ENABLE_HTML_COLLECTIONS_PATCH) {
          return createStaticHTMLCollection(getNonPatchedFilteredArrayOfNodes(this, elements));
        }

        const filteredResults = getFilteredArrayOfNodes(this, elements, ShadowDomSemantic.Enabled);
        return createStaticHTMLCollection(filteredResults);
      },

      writable: true,
      enumerable: true,
      configurable: true
    },
    getElementsByTagName: {
      value() {
        const elements = arrayFromCollection(getElementsByTagName.apply(this, ArraySlice$3.call(arguments)));

        if (!runtimeFlags$1.ENABLE_HTML_COLLECTIONS_PATCH) {
          return createStaticHTMLCollection(getNonPatchedFilteredArrayOfNodes(this, elements));
        }

        const filteredResults = getFilteredArrayOfNodes(this, elements, ShadowDomSemantic.Enabled);
        return createStaticHTMLCollection(filteredResults);
      },

      writable: true,
      enumerable: true,
      configurable: true
    },
    getElementsByTagNameNS: {
      value() {
        const elements = arrayFromCollection(getElementsByTagNameNS.apply(this, ArraySlice$3.call(arguments)));

        if (!runtimeFlags$1.ENABLE_HTML_COLLECTIONS_PATCH) {
          return createStaticHTMLCollection(getNonPatchedFilteredArrayOfNodes(this, elements));
        }

        const filteredResults = getFilteredArrayOfNodes(this, elements, ShadowDomSemantic.Enabled);
        return createStaticHTMLCollection(filteredResults);
      },

      writable: true,
      enumerable: true,
      configurable: true
    }
  });
}

if (hasOwnProperty$3.call(HTMLElement.prototype, 'getElementsByClassName')) {
  defineProperty$2(HTMLElement.prototype, 'getElementsByClassName', getOwnPropertyDescriptor$3(Element.prototype, 'getElementsByClassName'));
}

const FocusableSelector = `
    [contenteditable],
    [tabindex],
    a[href],
    area[href],
    audio[controls],
    button,
    iframe,
    input,
    select,
    textarea,
    video[controls]
`;
const formElementTagNames = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']);

function filterSequentiallyFocusableElements(elements) {
  return elements.filter(element => {
    if (hasAttribute.call(element, 'tabindex')) {
      return getAttribute.call(element, 'tabindex') === '0';
    }

    if (formElementTagNames.has(tagNameGetter.call(element))) {
      return !hasAttribute.call(element, 'disabled');
    }

    return true;
  });
}

const DidAddMouseEventListeners = createHiddenField$2('DidAddMouseEventListeners', 'synthetic-shadow');

function isVisible(element) {
  const {
    width,
    height
  } = getBoundingClientRect.call(element);
  const noZeroSize = width > 0 || height > 0;
  const isAreaElement = element.tagName === 'AREA';
  return (noZeroSize || isAreaElement) && getComputedStyle(element).visibility !== 'hidden';
}

function isTabbable(element) {
  if (isHostElement(element) && isDelegatingFocus(element)) {
    return false;
  }

  return matches.call(element, FocusableSelector) && isVisible(element);
}

function hostElementFocus() {
  const _rootNode = this.getRootNode();

  if (_rootNode === this) {
    const focusable = querySelector.call(this, FocusableSelector);

    if (!isNull$2(focusable)) {
      focusable.focus.apply(focusable, arguments);
    }

    return;
  }

  const rootNode = _rootNode;

  if (rootNode.activeElement === this) {
    return;
  }

  const focusables = arrayFromCollection(querySelectorAll.call(this, FocusableSelector));
  let didFocus = false;

  while (!didFocus && focusables.length !== 0) {
    const focusable = focusables.shift();
    focusable.focus.apply(focusable, arguments);
    const currentRootNode = focusable.getRootNode();
    didFocus = currentRootNode.activeElement === focusable;
  }
}

function getTabbableSegments(host) {
  const doc = getOwnerDocument(host);
  const all = filterSequentiallyFocusableElements(arrayFromCollection(querySelectorAll$1.call(doc, FocusableSelector)));
  const inner = filterSequentiallyFocusableElements(arrayFromCollection(querySelectorAll.call(host, FocusableSelector)));

  {
    assert$2.invariant(getAttribute.call(host, 'tabindex') === '-1' || isDelegatingFocus(host), `The focusin event is only relevant when the tabIndex property is -1 on the host.`);
  }

  const firstChild = inner[0];
  const lastChild = inner[inner.length - 1];
  const hostIndex = ArrayIndexOf$2.call(all, host);
  const firstChildIndex = hostIndex > -1 ? hostIndex : ArrayIndexOf$2.call(all, firstChild);
  const lastChildIndex = inner.length === 0 ? firstChildIndex + 1 : ArrayIndexOf$2.call(all, lastChild) + 1;
  const prev = ArraySlice$3.call(all, 0, firstChildIndex);
  const next = ArraySlice$3.call(all, lastChildIndex);
  return {
    prev,
    inner,
    next
  };
}

function getActiveElement(host) {
  const doc = getOwnerDocument(host);
  const activeElement = DocumentPrototypeActiveElement.call(doc);

  if (isNull$2(activeElement)) {
    return activeElement;
  }

  return (compareDocumentPosition.call(host, activeElement) & DOCUMENT_POSITION_CONTAINED_BY) !== 0 ? activeElement : null;
}

function relatedTargetPosition(host, relatedTarget) {
  const pos = compareDocumentPosition.call(host, relatedTarget);

  if (pos & DOCUMENT_POSITION_CONTAINED_BY) {
    return 0;
  } else if (pos & DOCUMENT_POSITION_PRECEDING) {
    return 1;
  } else if (pos & DOCUMENT_POSITION_FOLLOWING) {
    return 2;
  }

  return -1;
}

function muteEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

function muteFocusEventsDuringExecution(win, func) {
  windowAddEventListener.call(win, 'focusin', muteEvent, true);
  windowAddEventListener.call(win, 'focusout', muteEvent, true);
  func();
  windowRemoveEventListener.call(win, 'focusin', muteEvent, true);
  windowRemoveEventListener.call(win, 'focusout', muteEvent, true);
}

function focusOnNextOrBlur(segment, target, relatedTarget) {
  const win = getOwnerWindow(relatedTarget);
  const next = getNextTabbable(segment, relatedTarget);

  if (isNull$2(next)) {
    muteFocusEventsDuringExecution(win, () => {
      target.blur();
    });
  } else {
    muteFocusEventsDuringExecution(win, () => {
      next.focus();
    });
  }
}

let letBrowserHandleFocus = false;

function disableKeyboardFocusNavigationRoutines() {
  letBrowserHandleFocus = true;
}

function enableKeyboardFocusNavigationRoutines() {
  letBrowserHandleFocus = false;
}

function isKeyboardFocusNavigationRoutineEnabled() {
  return !letBrowserHandleFocus;
}

function skipHostHandler(event) {
  if (letBrowserHandleFocus) {
    return;
  }

  const host = eventCurrentTargetGetter.call(event);
  const target = eventTargetGetter.call(event);

  if (host !== target) {
    return;
  }

  const relatedTarget = focusEventRelatedTargetGetter.call(event);

  if (isNull$2(relatedTarget)) {
    return;
  }

  const segments = getTabbableSegments(host);
  const position = relatedTargetPosition(host, relatedTarget);

  if (position === 1) {
    const findTabbableElms = isTabbableFrom.bind(null, host.getRootNode());
    const first = ArrayFind$2.call(segments.inner, findTabbableElms);

    if (!isUndefined$3(first)) {
      const win = getOwnerWindow(first);
      muteFocusEventsDuringExecution(win, () => {
        first.focus();
      });
    } else {
      focusOnNextOrBlur(segments.next, target, relatedTarget);
    }
  } else if (host === target) {
    focusOnNextOrBlur(ArrayReverse$2.call(segments.prev), target, relatedTarget);
  }
}

function skipShadowHandler(event) {
  if (letBrowserHandleFocus) {
    return;
  }

  const relatedTarget = focusEventRelatedTargetGetter.call(event);

  if (isNull$2(relatedTarget)) {
    return;
  }

  const host = eventCurrentTargetGetter.call(event);
  const segments = getTabbableSegments(host);

  if (ArrayIndexOf$2.call(segments.inner, relatedTarget) !== -1) {
    return;
  }

  const target = eventTargetGetter.call(event);
  const position = relatedTargetPosition(host, relatedTarget);

  if (position === 1) {
    focusOnNextOrBlur(segments.next, target, relatedTarget);
  }

  if (position === 2) {
    focusOnNextOrBlur(ArrayReverse$2.call(segments.prev), target, relatedTarget);
  }
}

function isTabbableFrom(fromRoot, toElm) {
  if (!isTabbable(toElm)) {
    return false;
  }

  const ownerDocument = getOwnerDocument(toElm);
  let root = toElm.getRootNode();

  while (root !== ownerDocument && root !== fromRoot) {
    const sr = root;
    const host = sr.host;

    if (getAttribute.call(host, 'tabindex') === '-1') {
      return false;
    }

    root = host && host.getRootNode();
  }

  return true;
}

function getNextTabbable(tabbables, relatedTarget) {
  const len = tabbables.length;

  if (len > 0) {
    for (let i = 0; i < len; i += 1) {
      const next = tabbables[i];

      if (isTabbableFrom(relatedTarget.getRootNode(), next)) {
        return next;
      }
    }
  }

  return null;
}

function handleFocus(elm) {
  {
    assert$2.invariant(isDelegatingFocus(elm), `Invalid attempt to handle focus event for ${toString$2(elm)}. ${toString$2(elm)} should have delegates focus true, but is not delegating focus`);
  }

  bindDocumentMousedownMouseupHandlers(elm);
  ignoreFocusIn(elm);
  addEventListener.call(elm, 'focusin', skipHostHandler, true);
}

function ignoreFocus(elm) {
  removeEventListener.call(elm, 'focusin', skipHostHandler, true);
}

function bindDocumentMousedownMouseupHandlers(elm) {
  const ownerDocument = getOwnerDocument(elm);

  if (!getHiddenField$2(ownerDocument, DidAddMouseEventListeners)) {
    setHiddenField$2(ownerDocument, DidAddMouseEventListeners, true);
    addEventListener.call(ownerDocument, 'mousedown', disableKeyboardFocusNavigationRoutines, true);
    addEventListener.call(ownerDocument, 'mouseup', () => {
      setTimeout(enableKeyboardFocusNavigationRoutines);
    }, true);
    addEventListener.call(ownerDocument, 'dragstart', enableKeyboardFocusNavigationRoutines, true);
  }
}

function handleFocusIn(elm) {
  {
    assert$2.invariant(tabIndexGetter.call(elm) === -1, `Invalid attempt to handle focus in  ${toString$2(elm)}. ${toString$2(elm)} should have tabIndex -1, but has tabIndex ${tabIndexGetter.call(elm)}`);
  }

  bindDocumentMousedownMouseupHandlers(elm);
  ignoreFocus(elm);
  addEventListener.call(elm, 'focusin', skipShadowHandler, true);
}

function ignoreFocusIn(elm) {
  removeEventListener.call(elm, 'focusin', skipShadowHandler, true);
}

function getElementComputedStyle(element) {
  const win = getOwnerWindow(element);
  return windowGetComputedStyle.call(win, element);
}

function getWindowSelection(node) {
  const win = getOwnerWindow(node);
  return windowGetSelection.call(win);
}

function nodeIsBeingRendered(nodeComputedStyle) {
  return nodeComputedStyle.visibility === 'visible' && nodeComputedStyle.display !== 'none';
}

function getSelectionState(element) {
  const win = getOwnerWindow(element);
  const selection = getWindowSelection(element);

  if (selection === null) {
    return null;
  }

  const ranges = [];

  for (let i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  const state = {
    element,
    onselect: win.onselect,
    onselectstart: win.onselectstart,
    onselectionchange: win.onselectionchange,
    ranges
  };
  win.onselect = null;
  win.onselectstart = null;
  win.onselectionchange = null;
  return state;
}

function restoreSelectionState(state) {
  if (state === null) {
    return;
  }

  const {
    element,
    onselect,
    onselectstart,
    onselectionchange,
    ranges
  } = state;
  const win = getOwnerWindow(element);
  const selection = getWindowSelection(element);
  selection.removeAllRanges();

  for (let i = 0; i < ranges.length; i++) {
    selection.addRange(ranges[i]);
  }

  win.onselect = onselect;
  win.onselectstart = onselectstart;
  win.onselectionchange = onselectionchange;
}

function getTextNodeInnerText(textNode) {
  const selection = getWindowSelection(textNode);

  if (selection === null) {
    return textNode.textContent || '';
  }

  const range = document.createRange();
  range.selectNodeContents(textNode);
  const domRect = range.getBoundingClientRect();

  if (domRect.height <= 0 || domRect.width <= 0) {
    return '';
  }

  selection.removeAllRanges();
  selection.addRange(range);
  const selectionText = selection.toString();
  return selectionText ? selectionText : textNode.textContent || '';
}

const nodeIsElement = node => node.nodeType === ELEMENT_NODE;

const nodeIsText = node => node.nodeType === TEXT_NODE;

function innerTextCollectionSteps(node) {
  const items = [];

  if (nodeIsElement(node)) {
    const {
      tagName
    } = node;
    const computedStyle = getElementComputedStyle(node);

    if (tagName === 'OPTION') {
      return [1, innerTextGetter.call(node), 1];
    } else if (tagName === 'TEXTAREA') {
      return [];
    } else {
      const childNodes = node.childNodes;

      for (let i = 0, n = childNodes.length; i < n; i++) {
        ArrayPush$3.apply(items, innerTextCollectionSteps(childNodes[i]));
      }
    }

    if (!nodeIsBeingRendered(computedStyle)) {
      if (tagName === 'SELECT' || tagName === 'DATALIST') {
        return [];
      }

      return items;
    }

    if (tagName === 'BR') {
      items.push('\u{000A}');
    }

    const {
      display
    } = computedStyle;

    if (display === 'table-cell') {
      items.push('\u{0009}');
    }

    if (display === 'table-row') {
      items.push('\u{000A}');
    }

    if (tagName === 'P') {
      items.unshift(2);
      items.push(2);
    }

    if (display === 'block' || display === 'table-caption' || display === 'flex' || display === 'table') {
      items.unshift(1);
      items.push(1);
    }
  } else if (nodeIsText(node)) {
    items.push(getTextNodeInnerText(node));
  }

  return items;
}

function getInnerText(element) {
  const thisComputedStyle = getElementComputedStyle(element);

  if (!nodeIsBeingRendered(thisComputedStyle)) {
    return getTextContent(element) || '';
  }

  const selectionState = getSelectionState(element);
  const results = [];
  const childNodes = element.childNodes;

  for (let i = 0, n = childNodes.length; i < n; i++) {
    ArrayPush$3.apply(results, innerTextCollectionSteps(childNodes[i]));
  }

  restoreSelectionState(selectionState);
  let elementInnerText = '';
  let maxReqLineBreakCount = 0;

  for (let i = 0, n = results.length; i < n; i++) {
    const item = results[i];

    if (typeof item === 'string') {
      if (maxReqLineBreakCount > 0) {
        for (let j = 0; j < maxReqLineBreakCount; j++) {
          elementInnerText += '\u{000A}';
        }

        maxReqLineBreakCount = 0;
      }

      if (item.length > 0) {
        elementInnerText += item;
      }
    } else {
      if (elementInnerText.length == 0) {
        continue;
      }

      if (item > maxReqLineBreakCount) {
        maxReqLineBreakCount = item;
      }
    }
  }

  return elementInnerText;
}

const {
  blur,
  focus
} = HTMLElement.prototype;

function tabIndexGetterPatched() {
  if (isDelegatingFocus(this) && isFalse$1$2(hasAttribute.call(this, 'tabindex'))) {
    return 0;
  }

  return tabIndexGetter.call(this);
}

function tabIndexSetterPatched(value) {
  const delegatesFocus = isDelegatingFocus(this);
  const prevValue = tabIndexGetter.call(this);
  const prevHasAttr = hasAttribute.call(this, 'tabindex');
  tabIndexSetter.call(this, value);
  const currValue = tabIndexGetter.call(this);
  const currHasAttr = hasAttribute.call(this, 'tabindex');
  const didValueChange = prevValue !== currValue;

  if (prevHasAttr && (didValueChange || isFalse$1$2(currHasAttr))) {
    if (prevValue === -1) {
      ignoreFocusIn(this);
    }

    if (prevValue === 0 && delegatesFocus) {
      ignoreFocus(this);
    }
  }

  if (isFalse$1$2(currHasAttr)) {
    return;
  }

  if (prevHasAttr && currHasAttr && isFalse$1$2(didValueChange)) {
    return;
  }

  if (currValue === -1) {
    handleFocusIn(this);
  }

  if (currValue === 0 && delegatesFocus) {
    handleFocus(this);
  }
}

function blurPatched() {
  if (isDelegatingFocus(this)) {
    const currentActiveElement = getActiveElement(this);

    if (!isNull$2(currentActiveElement)) {
      currentActiveElement.blur();
      return;
    }
  }

  return blur.call(this);
}

function focusPatched() {
  const originallyEnabled = isKeyboardFocusNavigationRoutineEnabled();

  if (originallyEnabled) {
    disableKeyboardFocusNavigationRoutines();
  }

  if (isHostElement(this) && isDelegatingFocus(this)) {
    hostElementFocus.call(this);
    return;
  }

  focus.apply(this, arguments);

  if (originallyEnabled) {
    enableKeyboardFocusNavigationRoutines();
  }
}

defineProperties$2(HTMLElement.prototype, {
  tabIndex: {
    get() {
      if (isHostElement(this)) {
        return tabIndexGetterPatched.call(this);
      }

      return tabIndexGetter.call(this);
    },

    set(v) {
      if (isHostElement(this)) {
        return tabIndexSetterPatched.call(this, v);
      }

      return tabIndexSetter.call(this, v);
    },

    enumerable: true,
    configurable: true
  },
  blur: {
    value() {
      if (isHostElement(this)) {
        return blurPatched.call(this);
      }

      blur.call(this);
    },

    enumerable: true,
    writable: true,
    configurable: true
  },
  focus: {
    value() {
      focusPatched.apply(this, arguments);
    },

    enumerable: true,
    writable: true,
    configurable: true
  }
});

if (innerTextGetter !== null && innerTextSetter !== null) {
  defineProperty$2(HTMLElement.prototype, 'innerText', {
    get() {
      if (runtimeFlags$1.DISABLE_INNER_OUTER_TEXT_PATCH) {
        return innerTextGetter.call(this);
      }

      if (!runtimeFlags$1.ENABLE_ELEMENT_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return getInnerText(this);
        }

        return innerTextGetter.call(this);
      }

      if (isGlobalPatchingSkipped(this)) {
        return innerTextGetter.call(this);
      }

      return getInnerText(this);
    },

    set(v) {
      innerTextSetter.call(this, v);
    },

    enumerable: true,
    configurable: true
  });
}

if (outerTextGetter !== null && outerTextSetter !== null) {
  defineProperty$2(HTMLElement.prototype, 'outerText', {
    get() {
      if (runtimeFlags$1.DISABLE_INNER_OUTER_TEXT_PATCH) {
        return outerTextGetter.call(this);
      }

      if (!runtimeFlags$1.ENABLE_ELEMENT_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return getInnerText(this);
        }

        return outerTextGetter.call(this);
      }

      if (isGlobalPatchingSkipped(this)) {
        return outerTextGetter.call(this);
      }

      return getInnerText(this);
    },

    set(v) {
      outerTextSetter.call(this, v);
    },

    enumerable: true,
    configurable: true
  });
}

const ShadowTokenKey = '$shadowToken$';
const ShadowTokenPrivateKey = '$$ShadowTokenKey$$';

function getShadowToken(node) {
  return node[ShadowTokenKey];
}

function setShadowToken(node, shadowToken) {
  node[ShadowTokenKey] = shadowToken;
}

defineProperty$2(Element.prototype, ShadowTokenKey, {
  set(shadowToken) {
    const oldShadowToken = this[ShadowTokenPrivateKey];

    if (!isUndefined$3(oldShadowToken) && oldShadowToken !== shadowToken) {
      removeAttribute.call(this, oldShadowToken);
    }

    if (!isUndefined$3(shadowToken)) {
      setAttribute.call(this, shadowToken, '');
    }

    this[ShadowTokenPrivateKey] = shadowToken;
  },

  get() {
    return this[ShadowTokenPrivateKey];
  },

  configurable: true
});
const DomManualPrivateKey = '$$DomManualKey$$';

const DocumentResolverFn = function () {};

let portalObserver;
const portalObserverConfig = {
  childList: true
};

function adoptChildNode(node, fn, shadowToken) {
  const previousNodeShadowResolver = getShadowRootResolver(node);

  if (previousNodeShadowResolver === fn) {
    return;
  }

  setShadowRootResolver(node, fn);

  if (node instanceof Element) {
    setShadowToken(node, shadowToken);

    if (isHostElement(node)) {
      return;
    }

    if (isUndefined$3(previousNodeShadowResolver)) {
      MutationObserverObserve.call(portalObserver, node, portalObserverConfig);
    }

    const childNodes = childNodesGetter.call(node);

    for (let i = 0, len = childNodes.length; i < len; i += 1) {
      adoptChildNode(childNodes[i], fn, shadowToken);
    }
  }
}

function initPortalObserver() {
  return new MO(mutations => {
    forEach$2.call(mutations, mutation => {
      const {
        target: elm,
        addedNodes,
        removedNodes
      } = mutation;
      const fn = getShadowRootResolver(elm);
      const shadowToken = getShadowToken(elm);

      for (let i = 0, len = removedNodes.length; i < len; i += 1) {
        const node = removedNodes[i];

        if (!(compareDocumentPosition.call(elm, node) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
          adoptChildNode(node, DocumentResolverFn, undefined);
        }
      }

      for (let i = 0, len = addedNodes.length; i < len; i += 1) {
        const node = addedNodes[i];

        if (compareDocumentPosition.call(elm, node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
          adoptChildNode(node, fn, shadowToken);
        }
      }
    });
  });
}

function markElementAsPortal(elm) {
  if (isUndefined$3(portalObserver)) {
    portalObserver = initPortalObserver();
  }

  if (isUndefined$3(getShadowRootResolver(elm))) {
    throw new Error(`Invalid Element`);
  }

  MutationObserverObserve.call(portalObserver, elm, portalObserverConfig);
}

defineProperty$2(Element.prototype, '$domManual$', {
  set(v) {
    this[DomManualPrivateKey] = v;

    if (isTrue$1$2(v)) {
      markElementAsPortal(this);
    }
  },

  get() {
    return this[DomManualPrivateKey];
  },

  configurable: true
});

function detect() {
  if ('getKey' in Proxy) {
    return false;
  }

  const proxy = new Proxy([3, 4], {});
  const res = [1, 2].concat(proxy);
  return res.length !== 4;
}

const {
  isConcatSpreadable
} = Symbol;
const {
  isArray
} = Array;
const {
  slice: ArraySlice,
  unshift: ArrayUnshift,
  shift: ArrayShift
} = Array.prototype;

function isObject(O) {
  return typeof O === 'object' ? O !== null : typeof O === 'function';
}

function isSpreadable(O) {
  if (!isObject(O)) {
    return false;
  }

  const spreadable = O[isConcatSpreadable];
  return spreadable !== undefined ? Boolean(spreadable) : isArray(O);
}

function ArrayConcatPolyfill(..._args) {
  const O = Object(this);
  const A = [];
  let N = 0;
  const items = ArraySlice.call(arguments);
  ArrayUnshift.call(items, O);

  while (items.length) {
    const E = ArrayShift.call(items);

    if (isSpreadable(E)) {
      let k = 0;
      const length = E.length;

      for (k; k < length; k += 1, N += 1) {
        if (k in E) {
          const subElement = E[k];
          A[N] = subElement;
        }
      }
    } else {
      A[N] = E;
      N += 1;
    }
  }

  return A;
}

function apply() {
  Array.prototype.concat = ArrayConcatPolyfill;
}

if (detect()) {
  apply();
}

function invariant(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}

function isTrue(value, msg) {
  if (!value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}

function isFalse(value, msg) {
  if (value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}

function fail(msg) {
  throw new Error(msg);
}

var assert = Object.freeze({
  __proto__: null,
  invariant: invariant,
  isTrue: isTrue,
  isFalse: isFalse,
  fail: fail
});
const {
  assign,
  create,
  defineProperties,
  defineProperty,
  freeze,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getPrototypeOf,
  hasOwnProperty,
  isFrozen,
  keys,
  seal,
  setPrototypeOf
} = Object;
const {
  isArray: isArray$1
} = Array;
const {
  filter: ArrayFilter,
  find: ArrayFind,
  indexOf: ArrayIndexOf,
  join: ArrayJoin,
  map: ArrayMap,
  push: ArrayPush,
  reduce: ArrayReduce,
  reverse: ArrayReverse,
  slice: ArraySlice$1,
  splice: ArraySplice,
  unshift: ArrayUnshift$1,
  forEach
} = Array.prototype;
const {
  fromCharCode: StringFromCharCode
} = String;
const {
  charCodeAt: StringCharCodeAt,
  replace: StringReplace,
  slice: StringSlice,
  toLowerCase: StringToLowerCase
} = String.prototype;

function isUndefined(obj) {
  return obj === undefined;
}

function isNull(obj) {
  return obj === null;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function isObject$1(obj) {
  return typeof obj === 'object';
}

const OtS = {}.toString;

function toString(obj) {
  if (obj && obj.toString) {
    if (isArray$1(obj)) {
      return ArrayJoin.call(ArrayMap.call(obj, toString), ',');
    }

    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS.call(obj);
  } else {
    return obj + '';
  }
}

const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];

const {
  AriaAttrNameToPropNameMap,
  AriaPropNameToAttrNameMap
} = (() => {
  const AriaAttrNameToPropNameMap = create(null);
  const AriaPropNameToAttrNameMap = create(null);
  forEach.call(AriaPropertyNames, propName => {
    const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
    AriaAttrNameToPropNameMap[attrName] = propName;
    AriaPropNameToAttrNameMap[propName] = attrName;
  });
  return {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  };
})();

const hasNativeSymbolSupport = (() => Symbol('x').toString() === 'Symbol(x)')();

function createHiddenField(key, namespace) {
  return hasNativeSymbolSupport ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
}

const hiddenFieldsMap = new WeakMap();

function setHiddenField(o, field, value) {
  let valuesByField = hiddenFieldsMap.get(o);

  if (isUndefined(valuesByField)) {
    valuesByField = create(null);
    hiddenFieldsMap.set(o, valuesByField);
  }

  valuesByField[field] = value;
}

function getHiddenField(o, field) {
  const valuesByField = hiddenFieldsMap.get(o);

  if (!isUndefined(valuesByField)) {
    return valuesByField[field];
  }
}

const NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING = new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
const CACHED_PROPERTY_ATTRIBUTE_MAPPING = new Map();

function htmlPropertyToAttribute(propName) {
  const ariaAttributeName = AriaPropNameToAttrNameMap[propName];

  if (!isUndefined(ariaAttributeName)) {
    return ariaAttributeName;
  }

  const specialAttributeName = NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING.get(propName);

  if (!isUndefined(specialAttributeName)) {
    return specialAttributeName;
  }

  const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);

  if (!isUndefined(cachedAttributeName)) {
    return cachedAttributeName;
  }

  let attributeName = '';

  for (let i = 0, len = propName.length; i < len; i++) {
    const code = StringCharCodeAt.call(propName, i);

    if (code >= 65 && code <= 90) {
      attributeName += '-' + StringFromCharCode(code + 32);
    } else {
      attributeName += StringFromCharCode(code);
    }
  }

  CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
  return attributeName;
}

function detect$1(propName) {
  return Object.getOwnPropertyDescriptor(Element.prototype, propName) === undefined;
}

const nodeToAriaPropertyValuesMap = new WeakMap();

function getAriaPropertyMap(elm) {
  let map = nodeToAriaPropertyValuesMap.get(elm);

  if (map === undefined) {
    map = {};
    nodeToAriaPropertyValuesMap.set(elm, map);
  }

  return map;
}

function getNormalizedAriaPropertyValue(value) {
  return value == null ? null : String(value);
}

function createAriaPropertyPropertyDescriptor(propName, attrName) {
  return {
    get() {
      const map = getAriaPropertyMap(this);

      if (hasOwnProperty.call(map, propName)) {
        return map[propName];
      }

      return this.hasAttribute(attrName) ? this.getAttribute(attrName) : null;
    },

    set(newValue) {
      const normalizedValue = getNormalizedAriaPropertyValue(newValue);
      const map = getAriaPropertyMap(this);
      map[propName] = normalizedValue;

      if (newValue === null) {
        this.removeAttribute(attrName);
      } else {
        this.setAttribute(attrName, newValue);
      }
    },

    configurable: true,
    enumerable: true
  };
}

function patch(propName) {
  const attrName = AriaPropNameToAttrNameMap[propName];
  const descriptor = createAriaPropertyPropertyDescriptor(propName, attrName);
  Object.defineProperty(Element.prototype, propName, descriptor);
}

const ElementPrototypeAriaPropertyNames = keys(AriaPropNameToAttrNameMap);

for (let i = 0, len = ElementPrototypeAriaPropertyNames.length; i < len; i += 1) {
  const propName = ElementPrototypeAriaPropertyNames[i];

  if (detect$1(propName)) {
    patch(propName);
  }
}

function invariant$1(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}

function isTrue$1(value, msg) {
  if (!value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}

function isFalse$2(value, msg) {
  if (value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}

function fail$1(msg) {
  throw new Error(msg);
}

var assert$1 = Object.freeze({
  __proto__: null,
  invariant: invariant$1,
  isTrue: isTrue$1,
  isFalse: isFalse$2,
  fail: fail$1
});
const {
  assign: assign$1,
  create: create$1,
  defineProperties: defineProperties$1,
  defineProperty: defineProperty$1,
  freeze: freeze$1,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
  getOwnPropertyNames: getOwnPropertyNames$1,
  getPrototypeOf: getPrototypeOf$1,
  hasOwnProperty: hasOwnProperty$1,
  isFrozen: isFrozen$1,
  keys: keys$1,
  seal: seal$1,
  setPrototypeOf: setPrototypeOf$1
} = Object;
const {
  isArray: isArray$2
} = Array;
const {
  filter: ArrayFilter$1,
  find: ArrayFind$1,
  indexOf: ArrayIndexOf$1,
  join: ArrayJoin$1,
  map: ArrayMap$1,
  push: ArrayPush$1,
  reduce: ArrayReduce$1,
  reverse: ArrayReverse$1,
  slice: ArraySlice$2,
  splice: ArraySplice$1,
  unshift: ArrayUnshift$2,
  forEach: forEach$1
} = Array.prototype;
const {
  fromCharCode: StringFromCharCode$1
} = String;
const {
  charCodeAt: StringCharCodeAt$1,
  replace: StringReplace$1,
  slice: StringSlice$1,
  toLowerCase: StringToLowerCase$1
} = String.prototype;

function isUndefined$1(obj) {
  return obj === undefined;
}

function isNull$1(obj) {
  return obj === null;
}

function isTrue$1$1(obj) {
  return obj === true;
}

function isFalse$1$1(obj) {
  return obj === false;
}

function isFunction$1(obj) {
  return typeof obj === 'function';
}

function isObject$2(obj) {
  return typeof obj === 'object';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isNumber(obj) {
  return typeof obj === 'number';
}

const OtS$1 = {}.toString;

function toString$1(obj) {
  if (obj && obj.toString) {
    if (isArray$2(obj)) {
      return ArrayJoin$1.call(ArrayMap$1.call(obj, toString$1), ',');
    }

    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS$1.call(obj);
  } else {
    return obj + '';
  }
}

function getPropertyDescriptor(o, p) {
  do {
    const d = getOwnPropertyDescriptor$1(o, p);

    if (!isUndefined$1(d)) {
      return d;
    }

    o = getPrototypeOf$1(o);
  } while (o !== null);
}

const AriaPropertyNames$1 = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'role'];

const {
  AriaAttrNameToPropNameMap: AriaAttrNameToPropNameMap$1,
  AriaPropNameToAttrNameMap: AriaPropNameToAttrNameMap$1
} = (() => {
  const AriaAttrNameToPropNameMap = create$1(null);
  const AriaPropNameToAttrNameMap = create$1(null);
  forEach$1.call(AriaPropertyNames$1, propName => {
    const attrName = StringToLowerCase$1.call(StringReplace$1.call(propName, /^aria/, () => 'aria-'));
    AriaAttrNameToPropNameMap[attrName] = propName;
    AriaPropNameToAttrNameMap[propName] = attrName;
  });
  return {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  };
})();

const hasNativeSymbolSupport$1 = (() => Symbol('x').toString() === 'Symbol(x)')();

function createHiddenField$1(key, namespace) {
  return hasNativeSymbolSupport$1 ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
}

const hiddenFieldsMap$1 = new WeakMap();

function setHiddenField$1(o, field, value) {
  let valuesByField = hiddenFieldsMap$1.get(o);

  if (isUndefined$1(valuesByField)) {
    valuesByField = create$1(null);
    hiddenFieldsMap$1.set(o, valuesByField);
  }

  valuesByField[field] = value;
}

function getHiddenField$1(o, field) {
  const valuesByField = hiddenFieldsMap$1.get(o);

  if (!isUndefined$1(valuesByField)) {
    return valuesByField[field];
  }
}

const NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING$1 = new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
const CACHED_PROPERTY_ATTRIBUTE_MAPPING$1 = new Map();

function htmlPropertyToAttribute$1(propName) {
  const ariaAttributeName = AriaPropNameToAttrNameMap$1[propName];

  if (!isUndefined$1(ariaAttributeName)) {
    return ariaAttributeName;
  }

  const specialAttributeName = NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING$1.get(propName);

  if (!isUndefined$1(specialAttributeName)) {
    return specialAttributeName;
  }

  const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING$1.get(propName);

  if (!isUndefined$1(cachedAttributeName)) {
    return cachedAttributeName;
  }

  let attributeName = '';

  for (let i = 0, len = propName.length; i < len; i++) {
    const code = StringCharCodeAt$1.call(propName, i);

    if (code >= 65 && code <= 90) {
      attributeName += '-' + StringFromCharCode$1(code + 32);
    } else {
      attributeName += StringFromCharCode$1(code);
    }
  }

  CACHED_PROPERTY_ATTRIBUTE_MAPPING$1.set(propName, attributeName);
  return attributeName;
}

let nextTickCallbackQueue = [];
const SPACE_CHAR = 32;
const EmptyObject = seal$1(create$1(null));
const EmptyArray = seal$1([]);

function flushCallbackQueue() {
  {
    if (nextTickCallbackQueue.length === 0) {
      throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
    }
  }

  const callbacks = nextTickCallbackQueue;
  nextTickCallbackQueue = [];

  for (let i = 0, len = callbacks.length; i < len; i += 1) {
    callbacks[i]();
  }
}

function addCallbackToNextTick(callback) {
  {
    if (!isFunction$1(callback)) {
      throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
    }
  }

  if (nextTickCallbackQueue.length === 0) {
    Promise.resolve().then(flushCallbackQueue);
  }

  ArrayPush$1.call(nextTickCallbackQueue, callback);
}

const {
  create: create$1$1
} = Object;
const {
  splice: ArraySplice$1$1,
  indexOf: ArrayIndexOf$1$1,
  push: ArrayPush$1$1
} = Array.prototype;
const TargetToReactiveRecordMap = new WeakMap();

function isUndefined$1$1(obj) {
  return obj === undefined;
}

function getReactiveRecord(target) {
  let reactiveRecord = TargetToReactiveRecordMap.get(target);

  if (isUndefined$1$1(reactiveRecord)) {
    const newRecord = create$1$1(null);
    reactiveRecord = newRecord;
    TargetToReactiveRecordMap.set(target, newRecord);
  }

  return reactiveRecord;
}

let currentReactiveObserver = null;

function valueMutated(target, key) {
  const reactiveRecord = TargetToReactiveRecordMap.get(target);

  if (!isUndefined$1$1(reactiveRecord)) {
    const reactiveObservers = reactiveRecord[key];

    if (!isUndefined$1$1(reactiveObservers)) {
      for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
        const ro = reactiveObservers[i];
        ro.notify();
      }
    }
  }
}

function valueObserved(target, key) {
  if (currentReactiveObserver === null) {
    return;
  }

  const ro = currentReactiveObserver;
  const reactiveRecord = getReactiveRecord(target);
  let reactiveObservers = reactiveRecord[key];

  if (isUndefined$1$1(reactiveObservers)) {
    reactiveObservers = [];
    reactiveRecord[key] = reactiveObservers;
  } else if (reactiveObservers[0] === ro) {
    return;
  }

  if (ArrayIndexOf$1$1.call(reactiveObservers, ro) === -1) {
    ro.link(reactiveObservers);
  }
}

class ReactiveObserver {
  constructor(callback) {
    this.listeners = [];
    this.callback = callback;
  }

  observe(job) {
    const inceptionReactiveRecord = currentReactiveObserver;
    currentReactiveObserver = this;
    let error;

    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      currentReactiveObserver = inceptionReactiveRecord;

      if (error !== undefined) {
        throw error;
      }
    }
  }

  reset() {
    const {
      listeners
    } = this;
    const len = listeners.length;

    if (len > 0) {
      for (let i = 0; i < len; i += 1) {
        const set = listeners[i];
        const pos = ArrayIndexOf$1$1.call(listeners[i], this);
        ArraySplice$1$1.call(set, pos, 1);
      }

      listeners.length = 0;
    }
  }

  notify() {
    this.callback.call(undefined, this);
  }

  link(reactiveObservers) {
    ArrayPush$1$1.call(reactiveObservers, this);
    ArrayPush$1$1.call(this.listeners, reactiveObservers);
  }

}

function componentValueMutated(vm, key) {
  valueMutated(vm.component, key);
}

function componentValueObserved(vm, key) {
  valueObserved(vm.component, key);
}

function getComponentTag(vm) {
  return `<${StringToLowerCase$1.call(vm.tagName)}>`;
}

function getComponentStack(vm) {
  const stack = [];
  let prefix = '';

  while (!isNull$1(vm.owner)) {
    ArrayPush$1.call(stack, prefix + getComponentTag(vm));
    vm = vm.owner;
    prefix += '\t';
  }

  return ArrayJoin$1.call(stack, '\n');
}

function getErrorComponentStack(vm) {
  const wcStack = [];
  let currentVm = vm;

  while (!isNull$1(currentVm)) {
    ArrayPush$1.call(wcStack, getComponentTag(currentVm));
    currentVm = currentVm.owner;
  }

  return wcStack.reverse().join('\n\t');
}

function logError(message, vm) {
  let msg = `[LWC error]: ${message}`;

  if (!isUndefined$1(vm)) {
    msg = `${msg}\n${getComponentStack(vm)}`;
  }

  try {
    throw new Error(msg);
  } catch (e) {
    console.error(e);
  }
}

function handleEvent(event, vnode) {
  const {
    type
  } = event;
  const {
    data: {
      on
    }
  } = vnode;
  const handler = on && on[type];

  if (handler) {
    handler.call(undefined, event);
  }
}

function createListener() {
  return function handler(event) {
    handleEvent(event, handler.vnode);
  };
}

function updateAllEventListeners(oldVnode, vnode) {
  if (isUndefined$1(oldVnode.listener)) {
    createAllEventListeners(vnode);
  } else {
    vnode.listener = oldVnode.listener;
    vnode.listener.vnode = vnode;
  }
}

function createAllEventListeners(vnode) {
  const {
    elm,
    data: {
      on
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(on)) {
    return;
  }

  const listener = vnode.listener = createListener();
  listener.vnode = vnode;
  let name;

  for (name in on) {
    renderer.addEventListener(elm, name, listener);
  }
}

var modEvents = {
  update: updateAllEventListeners,
  create: createAllEventListeners
};
const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];

function offsetPropertyErrorMessage(name) {
  return `Using the \`${name}\` property is an anti-pattern because it rounds the value to an integer. Instead, use the \`getBoundingClientRect\` method to obtain fractional values for the size of an element and its position relative to the viewport.`;
}

const globalHTMLProperties = assign$1(create$1(null), {
  accessKey: {
    attribute: 'accesskey'
  },
  accessKeyLabel: {
    readOnly: true
  },
  className: {
    attribute: 'class',
    error: 'Using the `className` property is an anti-pattern because of slow runtime behavior and potential conflicts with classes provided by the owner element. Use the `classList` API instead.'
  },
  contentEditable: {
    attribute: 'contenteditable'
  },
  dataset: {
    readOnly: true,
    error: "Using the `dataset` property is an anti-pattern because it can't be statically analyzed. Expose each property individually using the `@api` decorator instead."
  },
  dir: {
    attribute: 'dir'
  },
  draggable: {
    attribute: 'draggable'
  },
  dropzone: {
    attribute: 'dropzone',
    readOnly: true
  },
  hidden: {
    attribute: 'hidden'
  },
  id: {
    attribute: 'id'
  },
  inputMode: {
    attribute: 'inputmode'
  },
  lang: {
    attribute: 'lang'
  },
  slot: {
    attribute: 'slot',
    error: 'Using the `slot` property is an anti-pattern.'
  },
  spellcheck: {
    attribute: 'spellcheck'
  },
  style: {
    attribute: 'style'
  },
  tabIndex: {
    attribute: 'tabindex'
  },
  title: {
    attribute: 'title'
  },
  translate: {
    attribute: 'translate'
  },
  isContentEditable: {
    readOnly: true
  },
  offsetHeight: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetHeight')
  },
  offsetLeft: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetLeft')
  },
  offsetParent: {
    readOnly: true
  },
  offsetTop: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetTop')
  },
  offsetWidth: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetWidth')
  },
  role: {
    attribute: 'role'
  }
});
let controlledElement = null;
let controlledAttributeName;

function isAttributeLocked(elm, attrName) {
  return elm !== controlledElement || attrName !== controlledAttributeName;
}

function lockAttribute(_elm, _key) {
  controlledElement = null;
  controlledAttributeName = undefined;
}

function unlockAttribute(elm, key) {
  controlledElement = elm;
  controlledAttributeName = key;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
const xmlNS = 'http://www.w3.org/XML/1998/namespace';
const ColonCharCode = 58;

function updateAttrs(oldVnode, vnode) {
  const {
    data: {
      attrs
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(attrs)) {
    return;
  }

  let {
    data: {
      attrs: oldAttrs
    }
  } = oldVnode;

  if (oldAttrs === attrs) {
    return;
  }

  {
    assert$1.invariant(isUndefined$1(oldAttrs) || keys$1(oldAttrs).join(',') === keys$1(attrs).join(','), `vnode.data.attrs cannot change shape.`);
  }

  const elm = vnode.elm;
  const {
    setAttribute,
    removeAttribute
  } = renderer;
  let key;
  oldAttrs = isUndefined$1(oldAttrs) ? EmptyObject : oldAttrs;

  for (key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];

    if (old !== cur) {
      unlockAttribute(elm, key);

      if (StringCharCodeAt$1.call(key, 3) === ColonCharCode) {
        setAttribute(elm, key, cur, xmlNS);
      } else if (StringCharCodeAt$1.call(key, 5) === ColonCharCode) {
        setAttribute(elm, key, cur, xlinkNS);
      } else if (isNull$1(cur)) {
        removeAttribute(elm, key);
      } else {
        setAttribute(elm, key, cur);
      }

      lockAttribute();
    }
  }
}

const emptyVNode = {
  data: {}
};
var modAttrs = {
  create: vnode => updateAttrs(emptyVNode, vnode),
  update: updateAttrs
};

function isLiveBindingProp(sel, key) {
  return sel === 'input' && (key === 'value' || key === 'checked');
}

function update(oldVnode, vnode) {
  const props = vnode.data.props;

  if (isUndefined$1(props)) {
    return;
  }

  const oldProps = oldVnode.data.props;

  if (oldProps === props) {
    return;
  }

  {
    assert$1.invariant(isUndefined$1(oldProps) || keys$1(oldProps).join(',') === keys$1(props).join(','), 'vnode.data.props cannot change shape.');
  }

  const isFirstPatch = isUndefined$1(oldProps);
  const {
    elm,
    sel,
    owner: {
      renderer
    }
  } = vnode;

  for (const key in props) {
    const cur = props[key];

    if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? renderer.getProperty(elm, key) : oldProps[key])) {
      renderer.setProperty(elm, key, cur);
    }
  }
}

const emptyVNode$1 = {
  data: {}
};
var modProps = {
  create: vnode => update(emptyVNode$1, vnode),
  update
};
const classNameToClassMap = create$1(null);

function getMapFromClassName(className) {
  if (className == null) {
    return EmptyObject;
  }

  className = isString(className) ? className : className + '';
  let map = classNameToClassMap[className];

  if (map) {
    return map;
  }

  map = create$1(null);
  let start = 0;
  let o;
  const len = className.length;

  for (o = 0; o < len; o++) {
    if (StringCharCodeAt$1.call(className, o) === SPACE_CHAR) {
      if (o > start) {
        map[StringSlice$1.call(className, start, o)] = true;
      }

      start = o + 1;
    }
  }

  if (o > start) {
    map[StringSlice$1.call(className, start, o)] = true;
  }

  classNameToClassMap[className] = map;

  {
    freeze$1(map);
  }

  return map;
}

function updateClassAttribute(oldVnode, vnode) {
  const {
    elm,
    data: {
      className: newClass
    },
    owner: {
      renderer
    }
  } = vnode;
  const {
    data: {
      className: oldClass
    }
  } = oldVnode;

  if (oldClass === newClass) {
    return;
  }

  const classList = renderer.getClassList(elm);
  const newClassMap = getMapFromClassName(newClass);
  const oldClassMap = getMapFromClassName(oldClass);
  let name;

  for (name in oldClassMap) {
    if (isUndefined$1(newClassMap[name])) {
      classList.remove(name);
    }
  }

  for (name in newClassMap) {
    if (isUndefined$1(oldClassMap[name])) {
      classList.add(name);
    }
  }
}

const emptyVNode$2 = {
  data: {}
};
var modComputedClassName = {
  create: vnode => updateClassAttribute(emptyVNode$2, vnode),
  update: updateClassAttribute
};

function updateStyleAttribute(oldVnode, vnode) {
  const {
    elm,
    data: {
      style: newStyle
    },
    owner: {
      renderer
    }
  } = vnode;
  const {
    setAttribute,
    removeAttribute
  } = renderer;

  if (oldVnode.data.style === newStyle) {
    return;
  }

  if (!isString(newStyle) || newStyle === '') {
    removeAttribute(elm, 'style');
  } else {
    setAttribute(elm, 'style', newStyle);
  }
}

const emptyVNode$3 = {
  data: {}
};
var modComputedStyle = {
  create: vnode => updateStyleAttribute(emptyVNode$3, vnode),
  update: updateStyleAttribute
};

function createClassAttribute(vnode) {
  const {
    elm,
    data: {
      classMap
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(classMap)) {
    return;
  }

  const classList = renderer.getClassList(elm);

  for (const name in classMap) {
    classList.add(name);
  }
}

var modStaticClassName = {
  create: createClassAttribute
};

function createStyleAttribute(vnode) {
  const {
    elm,
    data: {
      styleMap
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(styleMap)) {
    return;
  }

  for (const name in styleMap) {
    renderer.setCSSStyleProperty(elm, name, styleMap[name]);
  }
}

var modStaticStyle = {
  create: createStyleAttribute
};
/**
@license
Copyright (c) 2015 Simon Friis Vindum.
This code may only be used under the MIT License found at
https://github.com/snabbdom/snabbdom/blob/master/LICENSE
Code distributed by Snabbdom as part of the Snabbdom project at
https://github.com/snabbdom/snabbdom/
*/

function isUndef(s) {
  return s === undefined;
}

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function isVNode(vnode) {
  return vnode != null;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  const map = {};
  let j, key, ch;

  for (j = beginIdx; j <= endIdx; ++j) {
    ch = children[j];

    if (isVNode(ch)) {
      key = ch.key;

      if (key !== undefined) {
        map[key] = j;
      }
    }
  }

  return map;
}

function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx];

    if (isVNode(ch)) {
      ch.hook.create(ch);
      ch.hook.insert(ch, parentElm, before);
    }
  }
}

function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx];

    if (isVNode(ch)) {
      ch.hook.remove(ch, parentElm);
    }
  }
}

function updateDynamicChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  const newChEnd = newCh.length - 1;
  let newEndIdx = newChEnd;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldKeyToIdx;
  let idxInOld;
  let elmToMove;
  let before;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!isVNode(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (!isVNode(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!isVNode(newStartVnode)) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!isVNode(newEndVnode)) {
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode);
      newEndVnode.hook.move(oldStartVnode, parentElm, oldEndVnode.owner.renderer.nextSibling(oldEndVnode.elm));
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode);
      newStartVnode.hook.move(oldEndVnode, parentElm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }

      idxInOld = oldKeyToIdx[newStartVnode.key];

      if (isUndef(idxInOld)) {
        newStartVnode.hook.create(newStartVnode);
        newStartVnode.hook.insert(newStartVnode, parentElm, oldStartVnode.elm);
        newStartVnode = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];

        if (isVNode(elmToMove)) {
          if (elmToMove.sel !== newStartVnode.sel) {
            newStartVnode.hook.create(newStartVnode);
            newStartVnode.hook.insert(newStartVnode, parentElm, oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode);
            oldCh[idxInOld] = undefined;
            newStartVnode.hook.move(elmToMove, parentElm, oldStartVnode.elm);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }
  }

  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      let i = newEndIdx;
      let n;

      do {
        n = newCh[++i];
      } while (!isVNode(n) && i < newChEnd);

      before = isVNode(n) ? n.elm : null;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
    } else {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }
}

function updateStaticChildren(parentElm, oldCh, newCh) {
  const oldChLength = oldCh.length;
  const newChLength = newCh.length;

  if (oldChLength === 0) {
    addVnodes(parentElm, null, newCh, 0, newChLength);
    return;
  }

  if (newChLength === 0) {
    removeVnodes(parentElm, oldCh, 0, oldChLength);
    return;
  }

  let referenceElm = null;

  for (let i = newChLength - 1; i >= 0; i -= 1) {
    const vnode = newCh[i];
    const oldVNode = oldCh[i];

    if (vnode !== oldVNode) {
      if (isVNode(oldVNode)) {
        if (isVNode(vnode)) {
          patchVnode(oldVNode, vnode);
          referenceElm = vnode.elm;
        } else {
          oldVNode.hook.remove(oldVNode, parentElm);
        }
      } else if (isVNode(vnode)) {
        vnode.hook.create(vnode);
        vnode.hook.insert(vnode, parentElm, referenceElm);
        referenceElm = vnode.elm;
      }
    }
  }
}

function patchVnode(oldVnode, vnode) {
  if (oldVnode !== vnode) {
    vnode.elm = oldVnode.elm;
    vnode.hook.update(oldVnode, vnode);
  }
}

function generateDataDescriptor(options) {
  return assign$1({
    configurable: true,
    enumerable: true,
    writable: true
  }, options);
}

function generateAccessorDescriptor(options) {
  return assign$1({
    configurable: true,
    enumerable: true
  }, options);
}

let isDomMutationAllowed = false;

function unlockDomMutation() {

  isDomMutationAllowed = true;
}

function lockDomMutation() {

  isDomMutationAllowed = false;
}

function logMissingPortalError(name, type) {
  return logError(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
}

function patchElementWithRestrictions(elm, options) {

  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const descriptors = {
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set outerHTML on Element.`);
      }

    })
  };

  if (isFalse$1$1(options.isPortal)) {
    const {
      appendChild,
      insertBefore,
      removeChild,
      replaceChild
    } = elm;
    const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
    const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
    assign$1(descriptors, {
      appendChild: generateDataDescriptor({
        value(aChild) {
          logMissingPortalError('appendChild', 'method');
          return appendChild.call(this, aChild);
        }

      }),
      insertBefore: generateDataDescriptor({
        value(newNode, referenceNode) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('insertBefore', 'method');
          }

          return insertBefore.call(this, newNode, referenceNode);
        }

      }),
      removeChild: generateDataDescriptor({
        value(aChild) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('removeChild', 'method');
          }

          return removeChild.call(this, aChild);
        }

      }),
      replaceChild: generateDataDescriptor({
        value(newChild, oldChild) {
          logMissingPortalError('replaceChild', 'method');
          return replaceChild.call(this, newChild, oldChild);
        }

      }),
      nodeValue: generateAccessorDescriptor({
        get() {
          return originalNodeValueDescriptor.get.call(this);
        },

        set(value) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('nodeValue', 'property');
          }

          originalNodeValueDescriptor.set.call(this, value);
        }

      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },

        set(value) {
          logMissingPortalError('textContent', 'property');
          originalTextContentDescriptor.set.call(this, value);
        }

      }),
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },

        set(value) {
          logMissingPortalError('innerHTML', 'property');
          return originalInnerHTMLDescriptor.set.call(this, value);
        }

      })
    });
  }

  defineProperties$1(elm, descriptors);
}

function getShadowRootRestrictionsDescriptors(sr) {

  const originalAddEventListener = sr.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set innerHTML on ShadowRoot.`);
      }

    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set textContent on ShadowRoot.`);
      }

    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        }

        return originalAddEventListener.apply(this, arguments);
      }

    })
  };
}

function getCustomElementRestrictionsDescriptors(elm) {

  const originalAddEventListener = elm.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set innerHTML on HTMLElement.`);
      }

    }),
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set outerHTML on HTMLElement.`);
      }

    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set textContent on HTMLElement.`);
      }

    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        }

        return originalAddEventListener.apply(this, arguments);
      }

    })
  };
}

function getComponentRestrictionsDescriptors() {

  return {
    tagName: generateAccessorDescriptor({
      get() {
        throw new Error(`Usage of property \`tagName\` is disallowed because the component itself does` + ` not know which tagName will be used to create the element, therefore writing` + ` code that check for that value is error prone.`);
      },

      configurable: true,
      enumerable: false
    })
  };
}

function getLightningElementPrototypeRestrictionsDescriptors(proto) {

  const originalDispatchEvent = proto.dispatchEvent;
  const descriptors = {
    dispatchEvent: generateDataDescriptor({
      value(event) {
        const vm = getAssociatedVM(this);

        if (!isNull$1(event) && isObject$2(event)) {
          const {
            type
          } = event;

          if (!/^[a-z][a-z0-9_]*$/.test(type)) {
            logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
          }
        }

        return originalDispatchEvent.apply(this, arguments);
      }

    })
  };
  forEach$1.call(getOwnPropertyNames$1(globalHTMLProperties), propName => {
    if (propName in proto) {
      return;
    }

    descriptors[propName] = generateAccessorDescriptor({
      get() {
        const {
          error,
          attribute
        } = globalHTMLProperties[propName];
        const msg = [];
        msg.push(`Accessing the global HTML property "${propName}" is disabled.`);

        if (error) {
          msg.push(error);
        } else if (attribute) {
          msg.push(`Instead access it via \`this.getAttribute("${attribute}")\`.`);
        }

        logError(msg.join('\n'), getAssociatedVM(this));
      },

      set() {
        const {
          readOnly
        } = globalHTMLProperties[propName];

        if (readOnly) {
          logError(`The global HTML property \`${propName}\` is read-only.`, getAssociatedVM(this));
        }
      }

    });
  });
  return descriptors;
}

function patchShadowRootWithRestrictions(sr) {
  defineProperties$1(sr, getShadowRootRestrictionsDescriptors(sr));
}

function patchCustomElementWithRestrictions(elm) {
  const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
  const elmProto = getPrototypeOf$1(elm);
  setPrototypeOf$1(elm, create$1(elmProto, restrictionsDescriptors));
}

function patchComponentWithRestrictions(cmp) {
  defineProperties$1(cmp, getComponentRestrictionsDescriptors());
}

function patchLightningElementPrototypeWithRestrictions(proto) {
  defineProperties$1(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
}

const HTMLElementConstructor = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
const HTMLElementPrototype = HTMLElementConstructor.prototype;
const HTMLElementOriginalDescriptors = create$1(null);
forEach$1.call(keys$1(AriaPropNameToAttrNameMap$1), propName => {
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);

  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
forEach$1.call(defaultDefHTMLPropertyNames, propName => {
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);

  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
const {
  isArray: isArray$1$1
} = Array;
const {
  getPrototypeOf: getPrototypeOf$1$1,
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  defineProperties: ObjectDefineProperties,
  isExtensible,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$1$1,
  getOwnPropertyNames: getOwnPropertyNames$1$1,
  getOwnPropertySymbols,
  preventExtensions,
  hasOwnProperty: hasOwnProperty$1$1
} = Object;
const {
  push: ArrayPush$2,
  concat: ArrayConcat,
  map: ArrayMap$1$1
} = Array.prototype;
const OtS$1$1 = {}.toString;

function toString$1$1(obj) {
  if (obj && obj.toString) {
    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS$1$1.call(obj);
  } else {
    return obj + '';
  }
}

function isUndefined$2(obj) {
  return obj === undefined;
}

function isFunction$1$1(obj) {
  return typeof obj === 'function';
}

const proxyToValueMap = new WeakMap();

function registerProxy(proxy, value) {
  proxyToValueMap.set(proxy, value);
}

const unwrap = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

class BaseProxyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  }

  wrapDescriptor(descriptor) {
    if (hasOwnProperty$1$1.call(descriptor, 'value')) {
      descriptor.value = this.wrapValue(descriptor.value);
    } else {
      const {
        set: originalSet,
        get: originalGet
      } = descriptor;

      if (!isUndefined$2(originalGet)) {
        descriptor.get = this.wrapGetter(originalGet);
      }

      if (!isUndefined$2(originalSet)) {
        descriptor.set = this.wrapSetter(originalSet);
      }
    }

    return descriptor;
  }

  copyDescriptorIntoShadowTarget(shadowTarget, key) {
    const {
      originalTarget
    } = this;
    const originalDescriptor = getOwnPropertyDescriptor$1$1(originalTarget, key);

    if (!isUndefined$2(originalDescriptor)) {
      const wrappedDesc = this.wrapDescriptor(originalDescriptor);
      ObjectDefineProperty(shadowTarget, key, wrappedDesc);
    }
  }

  lockShadowTarget(shadowTarget) {
    const {
      originalTarget
    } = this;
    const targetKeys = ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(key => {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    });
    const {
      membrane: {
        tagPropertyKey
      }
    } = this;

    if (!isUndefined$2(tagPropertyKey) && !hasOwnProperty$1$1.call(shadowTarget, tagPropertyKey)) {
      ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
    }

    preventExtensions(shadowTarget);
  }

  apply(shadowTarget, thisArg, argArray) {}

  construct(shadowTarget, argArray, newTarget) {}

  get(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    const value = originalTarget[key];
    valueObserved(originalTarget, key);
    return this.wrapValue(value);
  }

  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey,
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key);
    return key in originalTarget || key === tagPropertyKey;
  }

  ownKeys(shadowTarget) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey
      }
    } = this;
    const keys = isUndefined$2(tagPropertyKey) || hasOwnProperty$1$1.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey];
    ArrayPush$2.apply(keys, getOwnPropertyNames$1$1(originalTarget));
    ArrayPush$2.apply(keys, getOwnPropertySymbols(originalTarget));
    return keys;
  }

  isExtensible(shadowTarget) {
    const {
      originalTarget
    } = this;

    if (!isExtensible(shadowTarget)) {
      return false;
    }

    if (!isExtensible(originalTarget)) {
      this.lockShadowTarget(shadowTarget);
      return false;
    }

    return true;
  }

  getPrototypeOf(shadowTarget) {
    const {
      originalTarget
    } = this;
    return getPrototypeOf$1$1(originalTarget);
  }

  getOwnPropertyDescriptor(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved,
        tagPropertyKey
      }
    } = this;
    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor$1$1(originalTarget, key);

    if (isUndefined$2(desc)) {
      if (key !== tagPropertyKey) {
        return undefined;
      }

      desc = {
        value: undefined,
        writable: false,
        configurable: false,
        enumerable: false
      };
      ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
      return desc;
    }

    if (desc.configurable === false) {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }

    return this.wrapDescriptor(desc);
  }

}

const getterMap = new WeakMap();
const setterMap = new WeakMap();
const reverseGetterMap = new WeakMap();
const reverseSetterMap = new WeakMap();

class ReactiveProxyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getProxy(value);
  }

  wrapGetter(originalGet) {
    const wrappedGetter = getterMap.get(originalGet);

    if (!isUndefined$2(wrappedGetter)) {
      return wrappedGetter;
    }

    const handler = this;

    const get = function () {
      return handler.wrapValue(originalGet.call(unwrap(this)));
    };

    getterMap.set(originalGet, get);
    reverseGetterMap.set(get, originalGet);
    return get;
  }

  wrapSetter(originalSet) {
    const wrappedSetter = setterMap.get(originalSet);

    if (!isUndefined$2(wrappedSetter)) {
      return wrappedSetter;
    }

    const set = function (v) {
      originalSet.call(unwrap(this), unwrap(v));
    };

    setterMap.set(originalSet, set);
    reverseSetterMap.set(set, originalSet);
    return set;
  }

  unwrapDescriptor(descriptor) {
    if (hasOwnProperty$1$1.call(descriptor, 'value')) {
      descriptor.value = unwrap(descriptor.value);
    } else {
      const {
        set,
        get
      } = descriptor;

      if (!isUndefined$2(get)) {
        descriptor.get = this.unwrapGetter(get);
      }

      if (!isUndefined$2(set)) {
        descriptor.set = this.unwrapSetter(set);
      }
    }

    return descriptor;
  }

  unwrapGetter(redGet) {
    const reverseGetter = reverseGetterMap.get(redGet);

    if (!isUndefined$2(reverseGetter)) {
      return reverseGetter;
    }

    const handler = this;

    const get = function () {
      return unwrap(redGet.call(handler.wrapValue(this)));
    };

    getterMap.set(get, redGet);
    reverseGetterMap.set(redGet, get);
    return get;
  }

  unwrapSetter(redSet) {
    const reverseSetter = reverseSetterMap.get(redSet);

    if (!isUndefined$2(reverseSetter)) {
      return reverseSetter;
    }

    const handler = this;

    const set = function (v) {
      redSet.call(handler.wrapValue(this), handler.wrapValue(v));
    };

    setterMap.set(set, redSet);
    reverseSetterMap.set(redSet, set);
    return set;
  }

  set(shadowTarget, key, value) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    const oldValue = originalTarget[key];

    if (oldValue !== value) {
      originalTarget[key] = value;
      valueMutated(originalTarget, key);
    } else if (key === 'length' && isArray$1$1(originalTarget)) {
      valueMutated(originalTarget, key);
    }

    return true;
  }

  deleteProperty(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    delete originalTarget[key];
    valueMutated(originalTarget, key);
    return true;
  }

  setPrototypeOf(shadowTarget, prototype) {
    {
      throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString$1$1(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
    }
  }

  preventExtensions(shadowTarget) {
    if (isExtensible(shadowTarget)) {
      const {
        originalTarget
      } = this;
      preventExtensions(originalTarget);

      if (isExtensible(originalTarget)) {
        return false;
      }

      this.lockShadowTarget(shadowTarget);
    }

    return true;
  }

  defineProperty(shadowTarget, key, descriptor) {
    const {
      originalTarget,
      membrane: {
        valueMutated,
        tagPropertyKey
      }
    } = this;

    if (key === tagPropertyKey && !hasOwnProperty$1$1.call(originalTarget, key)) {
      return true;
    }

    ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor));

    if (descriptor.configurable === false) {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }

    valueMutated(originalTarget, key);
    return true;
  }

}

const getterMap$1 = new WeakMap();
const setterMap$1 = new WeakMap();

class ReadOnlyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getReadOnlyProxy(value);
  }

  wrapGetter(originalGet) {
    const wrappedGetter = getterMap$1.get(originalGet);

    if (!isUndefined$2(wrappedGetter)) {
      return wrappedGetter;
    }

    const handler = this;

    const get = function () {
      return handler.wrapValue(originalGet.call(unwrap(this)));
    };

    getterMap$1.set(originalGet, get);
    return get;
  }

  wrapSetter(originalSet) {
    const wrappedSetter = setterMap$1.get(originalSet);

    if (!isUndefined$2(wrappedSetter)) {
      return wrappedSetter;
    }

    const handler = this;

    const set = function (v) {
      {
        const {
          originalTarget
        } = handler;
        throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    };

    setterMap$1.set(originalSet, set);
    return set;
  }

  set(shadowTarget, key, value) {
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
  }

  deleteProperty(shadowTarget, key) {
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
  }

  setPrototypeOf(shadowTarget, prototype) {
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
    }
  }

  preventExtensions(shadowTarget) {
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
    }
  }

  defineProperty(shadowTarget, key, descriptor) {
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
  }

}

function extract(objectOrArray) {
  if (isArray$1$1(objectOrArray)) {
    return objectOrArray.map(item => {
      const original = unwrap(item);

      if (original !== item) {
        return extract(original);
      }

      return item;
    });
  }

  const obj = ObjectCreate(getPrototypeOf$1$1(objectOrArray));
  const names = getOwnPropertyNames$1$1(objectOrArray);
  return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
    const item = objectOrArray[key];
    const original = unwrap(item);

    if (original !== item) {
      seed[key] = extract(original);
    } else {
      seed[key] = item;
    }

    return seed;
  }, obj);
}

const formatter = {
  header: plainOrProxy => {
    const originalTarget = unwrap(plainOrProxy);

    if (!originalTarget || originalTarget === plainOrProxy) {
      return null;
    }

    const obj = extract(plainOrProxy);
    return ['object', {
      object: obj
    }];
  },
  hasBody: () => {
    return false;
  },
  body: () => {
    return null;
  }
};

function getGlobal() {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return {};
}

function init() {

  const global = getGlobal();
  const devtoolsFormatters = global.devtoolsFormatters || [];
  ArrayPush$2.call(devtoolsFormatters, formatter);
  global.devtoolsFormatters = devtoolsFormatters;
}

{
  init();
}

const ObjectDotPrototype = Object.prototype;

function defaultValueIsObservable(value) {
  if (value === null) {
    return false;
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (isArray$1$1(value)) {
    return true;
  }

  const proto = getPrototypeOf$1$1(value);
  return proto === ObjectDotPrototype || proto === null || getPrototypeOf$1$1(proto) === null;
}

const defaultValueObserved = (obj, key) => {};

const defaultValueMutated = (obj, key) => {};

const defaultValueDistortion = value => value;

function createShadowTarget(value) {
  return isArray$1$1(value) ? [] : {};
}

class ReactiveMembrane {
  constructor(options) {
    this.valueDistortion = defaultValueDistortion;
    this.valueMutated = defaultValueMutated;
    this.valueObserved = defaultValueObserved;
    this.valueIsObservable = defaultValueIsObservable;
    this.objectGraph = new WeakMap();

    if (!isUndefined$2(options)) {
      const {
        valueDistortion,
        valueMutated,
        valueObserved,
        valueIsObservable,
        tagPropertyKey
      } = options;
      this.valueDistortion = isFunction$1$1(valueDistortion) ? valueDistortion : defaultValueDistortion;
      this.valueMutated = isFunction$1$1(valueMutated) ? valueMutated : defaultValueMutated;
      this.valueObserved = isFunction$1$1(valueObserved) ? valueObserved : defaultValueObserved;
      this.valueIsObservable = isFunction$1$1(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
      this.tagPropertyKey = tagPropertyKey;
    }
  }

  getProxy(value) {
    const unwrappedValue = unwrap(value);
    const distorted = this.valueDistortion(unwrappedValue);

    if (this.valueIsObservable(distorted)) {
      const o = this.getReactiveState(unwrappedValue, distorted);
      return o.readOnly === value ? value : o.reactive;
    }

    return distorted;
  }

  getReadOnlyProxy(value) {
    value = unwrap(value);
    const distorted = this.valueDistortion(value);

    if (this.valueIsObservable(distorted)) {
      return this.getReactiveState(value, distorted).readOnly;
    }

    return distorted;
  }

  unwrapProxy(p) {
    return unwrap(p);
  }

  getReactiveState(value, distortedValue) {
    const {
      objectGraph
    } = this;
    let reactiveState = objectGraph.get(distortedValue);

    if (reactiveState) {
      return reactiveState;
    }

    const membrane = this;
    reactiveState = {
      get reactive() {
        const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
        const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
        registerProxy(proxy, value);
        ObjectDefineProperty(this, 'reactive', {
          value: proxy
        });
        return proxy;
      },

      get readOnly() {
        const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
        const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
        registerProxy(proxy, value);
        ObjectDefineProperty(this, 'readOnly', {
          value: proxy
        });
        return proxy;
      }

    };
    objectGraph.set(distortedValue, reactiveState);
    return reactiveState;
  }

}

const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');

function valueDistortion(value) {
  return value;
}

const reactiveMembrane = new ReactiveMembrane({
  valueObserved,
  valueMutated,
  valueDistortion,
  tagPropertyKey: lockerLivePropertyKey
});

function createBridgeToElementDescriptor(propName, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;

  if (!isFunction$1(get)) {
    {
      assert$1.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
    }

    throw new TypeError();
  }

  if (!isFunction$1(set)) {
    {
      assert$1.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
    }

    throw new TypeError();
  }

  return {
    enumerable,
    configurable,

    get() {
      const vm = getAssociatedVM(this);

      if (isBeingConstructed(vm)) {
        {
          logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }

        return;
      }

      componentValueObserved(vm, propName);
      return get.call(vm.elm);
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      {
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
        assert$1.invariant(!isUpdatingTemplate, `When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
        assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
        assert$1.invariant(!isObject$2(newValue) || isNull$1(newValue), `Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
      }

      if (newValue !== vm.cmpProps[propName]) {
        vm.cmpProps[propName] = newValue;
        componentValueMutated(vm, propName);
      }

      return set.call(vm.elm, newValue);
    }

  };
}

function BaseLightningElementConstructor() {
  var _a;

  if (isNull$1(vmBeingConstructed)) {
    throw new ReferenceError('Illegal constructor');
  }

  const vm = vmBeingConstructed;
  const {
    elm,
    mode,
    renderer,
    def: {
      ctor,
      bridge
    }
  } = vm;

  {
    (_a = renderer.assertInstanceOfHTMLElement) === null || _a === void 0 ? void 0 : _a.call(renderer, vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
  }

  const component = this;
  setPrototypeOf$1(elm, bridge.prototype);
  const cmpRoot = renderer.attachShadow(elm, {
    mode,
    delegatesFocus: !!ctor.delegatesFocus,
    '$$lwc-synthetic-mode$$': true
  });
  vm.component = this;
  vm.cmpRoot = cmpRoot;

  if (arguments.length === 1) {
    const {
      callHook,
      setHook,
      getHook
    } = arguments[0];
    vm.callHook = callHook;
    vm.setHook = setHook;
    vm.getHook = getHook;
  }

  defineProperty$1(component, lockerLivePropertyKey, EmptyObject);
  associateVM(component, vm);
  associateVM(cmpRoot, vm);
  associateVM(elm, vm);

  {
    patchCustomElementWithRestrictions(elm);
    patchComponentWithRestrictions(component);
    patchShadowRootWithRestrictions(cmpRoot);
  }

  return this;
}

BaseLightningElementConstructor.prototype = {
  constructor: BaseLightningElementConstructor,

  dispatchEvent(event) {
    const {
      elm,
      renderer: {
        dispatchEvent
      }
    } = getAssociatedVM(this);
    return dispatchEvent(elm, event);
  },

  addEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        addEventListener
      }
    } = vm;

    {
      const vmBeingRendered = getVMBeingRendered();
      assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      assert$1.invariant(isFunction$1(listener), `Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
    }

    const wrappedListener = getWrappedComponentsListener(vm, listener);
    addEventListener(elm, type, wrappedListener, options);
  },

  removeEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeEventListener
      }
    } = vm;
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    removeEventListener(elm, type, wrappedListener, options);
  },

  hasAttribute(name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return !isNull$1(getAttribute(elm, name));
  },

  hasAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return !isNull$1(getAttribute(elm, name, namespace));
  },

  removeAttribute(name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    unlockAttribute(elm, name);
    removeAttribute(elm, name);
    lockAttribute();
  },

  removeAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    unlockAttribute(elm, name);
    removeAttribute(elm, name, namespace);
    lockAttribute();
  },

  getAttribute(name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return getAttribute(elm, name);
  },

  getAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return getAttribute(elm, name, namespace);
  },

  setAttribute(name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
    }

    unlockAttribute(elm, name);
    setAttribute(elm, name, value);
    lockAttribute();
  },

  setAttributeNS(namespace, name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
    }

    unlockAttribute(elm, name);
    setAttribute(elm, name, value, namespace);
    lockAttribute();
  },

  getBoundingClientRect() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getBoundingClientRect
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.getBoundingClientRect() should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM, instead, you can use it in one of the available life-cycle hooks.`);
    }

    return getBoundingClientRect(elm);
  },

  querySelector(selectors) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        querySelector
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.querySelector() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    return querySelector(elm, selectors);
  },

  querySelectorAll(selectors) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        querySelectorAll
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.querySelectorAll() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    return querySelectorAll(elm, selectors);
  },

  getElementsByTagName(tagNameOrWildCard) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getElementsByTagName
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.getElementsByTagName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    return getElementsByTagName(elm, tagNameOrWildCard);
  },

  getElementsByClassName(names) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getElementsByClassName
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.getElementsByClassName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    return getElementsByClassName(elm, names);
  },

  get isConnected() {
    const {
      elm,
      renderer: {
        isConnected
      }
    } = getAssociatedVM(this);
    return isConnected(elm);
  },

  get classList() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getClassList
      }
    } = vm;

    {
      assert$1.isFalse(isBeingConstructed(vm), `Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
    }

    return getClassList(elm);
  },

  get template() {
    const vm = getAssociatedVM(this);
    return vm.cmpRoot;
  },

  get shadowRoot() {
    return null;
  },

  render() {
    const vm = getAssociatedVM(this);
    return vm.def.template;
  },

  toString() {
    const vm = getAssociatedVM(this);
    return `[object ${vm.def.name}]`;
  }

};
const lightningBasedDescriptors = create$1(null);

for (const propName in HTMLElementOriginalDescriptors) {
  lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
}

defineProperties$1(BaseLightningElementConstructor.prototype, lightningBasedDescriptors);
defineProperty$1(BaseLightningElementConstructor, 'CustomElementConstructor', {
  get() {
    throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
  },

  configurable: true
});

{
  patchLightningElementPrototypeWithRestrictions(BaseLightningElementConstructor.prototype);
}

const BaseLightningElement = BaseLightningElementConstructor;

function internalWireFieldDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },

    set(value) {
      const vm = getAssociatedVM(this);

      if (value !== vm.cmpFields[key]) {
        vm.cmpFields[key] = value;
        componentValueMutated(vm, key);
      }
    },

    enumerable: true,
    configurable: true
  };
}

function internalTrackDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      {
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
      }

      const reactiveOrAnyValue = reactiveMembrane.getProxy(newValue);

      if (reactiveOrAnyValue !== vm.cmpFields[key]) {
        vm.cmpFields[key] = reactiveOrAnyValue;
        componentValueMutated(vm, key);
      }
    },

    enumerable: true,
    configurable: true
  };
}

const {
  assign: assign$1$1,
  create: create$2,
  defineProperties: defineProperties$1$1,
  defineProperty: defineProperty$1$1,
  freeze: freeze$1$1,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$2,
  getOwnPropertyNames: getOwnPropertyNames$2,
  getPrototypeOf: getPrototypeOf$2,
  hasOwnProperty: hasOwnProperty$2,
  isFrozen: isFrozen$1$1,
  keys: keys$1$1,
  seal: seal$1$1,
  setPrototypeOf: setPrototypeOf$1$1
} = Object;

const _globalThis = function () {
  if (typeof globalThis === 'object') {
    return globalThis;
  }

  let _globalThis;

  try {
    Object.defineProperty(Object.prototype, '__magic__', {
      get: function () {
        return this;
      },
      configurable: true
    });
    _globalThis = __magic__;
    delete Object.prototype.__magic__;
  } catch (ex) {} finally {
    if (typeof _globalThis === 'undefined') {
      _globalThis = window;
    }
  }

  return _globalThis;
}();

if (!_globalThis.lwcRuntimeFlags) {
  Object.defineProperty(_globalThis, 'lwcRuntimeFlags', {
    value: create$2(null)
  });
}

const runtimeFlags = _globalThis.lwcRuntimeFlags;

function createPublicPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);

      if (isBeingConstructed(vm)) {
        {
          logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }

        return;
      }

      componentValueObserved(vm, key);
      return vm.cmpProps[key];
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      {
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
      }

      vm.cmpProps[key] = newValue;
      componentValueMutated(vm, key);
    },

    enumerable: true,
    configurable: true
  };
}

class AccessorReactiveObserver extends ReactiveObserver {
  constructor(vm, set) {
    super(() => {
      if (isFalse$1$1(this.debouncing)) {
        this.debouncing = true;
        addCallbackToNextTick(() => {
          if (isTrue$1$1(this.debouncing)) {
            const {
              value
            } = this;
            const {
              isDirty: dirtyStateBeforeSetterCall,
              component,
              idx
            } = vm;
            set.call(component, value);
            this.debouncing = false;

            if (isTrue$1$1(vm.isDirty) && isFalse$1$1(dirtyStateBeforeSetterCall) && idx > 0) {
              rerenderVM(vm);
            }
          }
        });
      }
    });
    this.debouncing = false;
  }

  reset(value) {
    super.reset();
    this.debouncing = false;

    if (arguments.length > 0) {
      this.value = value;
    }
  }

}

function createPublicAccessorDescriptor(key, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;

  if (!isFunction$1(get)) {
    {
      assert$1.invariant(isFunction$1(get), `Invalid compiler output for public accessor ${toString$1(key)} decorated with @api`);
    }

    throw new Error();
  }

  return {
    get() {
      {
        getAssociatedVM(this);
      }

      return get.call(this);
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      {
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
      }

      if (set) {
        if (runtimeFlags.ENABLE_REACTIVE_SETTER) {
          let ro = vm.oar[key];

          if (isUndefined$1(ro)) {
            ro = vm.oar[key] = new AccessorReactiveObserver(vm, set);
          }

          ro.reset(newValue);
          ro.observe(() => {
            set.call(this, newValue);
          });
        } else {
          set.call(this, newValue);
        }
      } else {
        assert$1.fail(`Invalid attempt to set a new value for property ${toString$1(key)} of ${vm} that does not has a setter decorated with @api.`);
      }
    },

    enumerable,
    configurable
  };
}

function createObservedFieldPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      if (newValue !== vm.cmpFields[key]) {
        vm.cmpFields[key] = newValue;
        componentValueMutated(vm, key);
      }
    },

    enumerable: true,
    configurable: true
  };
}

var PropType;

(function (PropType) {
  PropType[PropType["Field"] = 0] = "Field";
  PropType[PropType["Set"] = 1] = "Set";
  PropType[PropType["Get"] = 2] = "Get";
  PropType[PropType["GetSet"] = 3] = "GetSet";
})(PropType || (PropType = {}));

function getClassDescriptorType(descriptor) {
  if (isFunction$1(descriptor.value)) {
    return 'method';
  } else if (isFunction$1(descriptor.set) || isFunction$1(descriptor.get)) {
    return 'accessor';
  } else {
    return 'field';
  }
}

function validateObservedField(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    assert$1.fail(`Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}

function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    assert$1.fail(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}

function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    assert$1.fail(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}

function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse$1$1(descriptor.writable)) {
    assert$1.fail(`Invalid @wire ${methodName} method.`);
  }
}

function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    assert$1.fail(`Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}

function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
  if (isUndefined$1(descriptor)) {
    assert$1.fail(`Invalid @api get ${fieldName} accessor.`);
  } else if (isFunction$1(descriptor.set)) {
    assert$1.isTrue(isFunction$1(descriptor.get), `Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
  } else if (!isFunction$1(descriptor.get)) {
    assert$1.fail(`Missing @api get ${fieldName} accessor.`);
  }
}

function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse$1$1(descriptor.writable)) {
    assert$1.fail(`Invalid @api ${methodName} method.`);
  }
}

function registerDecorators(Ctor, meta) {
  const proto = Ctor.prototype;
  const {
    publicProps,
    publicMethods,
    wire,
    track,
    fields
  } = meta;
  const apiMethods = create$1(null);
  const apiFields = create$1(null);
  const wiredMethods = create$1(null);
  const wiredFields = create$1(null);
  const observedFields = create$1(null);
  const apiFieldsConfig = create$1(null);
  let descriptor;

  if (!isUndefined$1(publicProps)) {
    for (const fieldName in publicProps) {
      const propConfig = publicProps[fieldName];
      apiFieldsConfig[fieldName] = propConfig.config;
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

      if (propConfig.config > 0) {
        {
          validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
        }

        if (isUndefined$1(descriptor)) {
          throw new Error();
        }

        descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
      } else {
        {
          validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
        }

        descriptor = createPublicPropertyDescriptor(fieldName);
      }

      apiFields[fieldName] = descriptor;
      defineProperty$1(proto, fieldName, descriptor);
    }
  }

  if (!isUndefined$1(publicMethods)) {
    forEach$1.call(publicMethods, methodName => {
      descriptor = getOwnPropertyDescriptor$1(proto, methodName);

      {
        validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
      }

      if (isUndefined$1(descriptor)) {
        throw new Error();
      }

      apiMethods[methodName] = descriptor;
    });
  }

  if (!isUndefined$1(wire)) {
    for (const fieldOrMethodName in wire) {
      const {
        adapter,
        method,
        config: configCallback,
        dynamic = []
      } = wire[fieldOrMethodName];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);

      if (method === 1) {
        {
          assert$1.isTrue(adapter, `@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
          validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }

        if (isUndefined$1(descriptor)) {
          throw new Error();
        }

        wiredMethods[fieldOrMethodName] = descriptor;
        storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
      } else {
        {
          assert$1.isTrue(adapter, `@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
          validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }

        descriptor = internalWireFieldDecorator(fieldOrMethodName);
        wiredFields[fieldOrMethodName] = descriptor;
        storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
        defineProperty$1(proto, fieldOrMethodName, descriptor);
      }
    }
  }

  if (!isUndefined$1(track)) {
    for (const fieldName in track) {
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

      {
        validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
      }

      descriptor = internalTrackDecorator(fieldName);
      defineProperty$1(proto, fieldName, descriptor);
    }
  }

  if (!isUndefined$1(fields)) {
    for (let i = 0, n = fields.length; i < n; i++) {
      const fieldName = fields[i];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

      {
        validateObservedField(Ctor, fieldName, descriptor);
      }

      observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
    }
  }

  setDecoratorsMeta(Ctor, {
    apiMethods,
    apiFields,
    apiFieldsConfig,
    wiredMethods,
    wiredFields,
    observedFields
  });
  return Ctor;
}

const signedDecoratorToMetaMap = new Map();

function setDecoratorsMeta(Ctor, meta) {
  signedDecoratorToMetaMap.set(Ctor, meta);
}

const defaultMeta = {
  apiMethods: EmptyObject,
  apiFields: EmptyObject,
  apiFieldsConfig: EmptyObject,
  wiredMethods: EmptyObject,
  wiredFields: EmptyObject,
  observedFields: EmptyObject
};

function getDecoratorsMeta(Ctor) {
  const meta = signedDecoratorToMetaMap.get(Ctor);
  return isUndefined$1(meta) ? defaultMeta : meta;
}

const signedTemplateSet = new Set();

function defaultEmptyTemplate() {
  return [];
}

signedTemplateSet.add(defaultEmptyTemplate);

function isTemplateRegistered(tpl) {
  return signedTemplateSet.has(tpl);
}

function registerTemplate(tpl) {
  signedTemplateSet.add(tpl);
  return tpl;
}

function sanitizeAttribute(tagName, namespaceUri, attrName, attrValue) {
  return attrValue;
}

const cachedGetterByKey = create$1(null);
const cachedSetterByKey = create$1(null);

function createGetter(key) {
  let fn = cachedGetterByKey[key];

  if (isUndefined$1(fn)) {
    fn = cachedGetterByKey[key] = function () {
      const vm = getAssociatedVM(this);
      const {
        getHook
      } = vm;
      return getHook(vm.component, key);
    };
  }

  return fn;
}

function createSetter(key) {
  let fn = cachedSetterByKey[key];

  if (isUndefined$1(fn)) {
    fn = cachedSetterByKey[key] = function (newValue) {
      const vm = getAssociatedVM(this);
      const {
        setHook
      } = vm;
      newValue = reactiveMembrane.getReadOnlyProxy(newValue);
      setHook(vm.component, key, newValue);
    };
  }

  return fn;
}

function createMethodCaller(methodName) {
  return function () {
    const vm = getAssociatedVM(this);
    const {
      callHook,
      component
    } = vm;
    const fn = component[methodName];
    return callHook(vm.component, fn, ArraySlice$2.call(arguments));
  };
}

function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
  return function attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    const propName = attributeToPropMap[attrName];

    if (isUndefined$1(propName)) {
      if (!isUndefined$1(superAttributeChangedCallback)) {
        superAttributeChangedCallback.apply(this, arguments);
      }

      return;
    }

    if (!isAttributeLocked(this, attrName)) {
      return;
    }

    this[propName] = newValue;
  };
}

function HTMLBridgeElementFactory(SuperClass, props, methods) {
  let HTMLBridgeElement;

  if (isFunction$1(SuperClass)) {
    HTMLBridgeElement = class extends SuperClass {};
  } else {
    HTMLBridgeElement = function () {
      throw new TypeError('Illegal constructor');
    };

    setPrototypeOf$1(HTMLBridgeElement, SuperClass);
    setPrototypeOf$1(HTMLBridgeElement.prototype, SuperClass.prototype);
    defineProperty$1(HTMLBridgeElement.prototype, 'constructor', {
      writable: true,
      configurable: true,
      value: HTMLBridgeElement
    });
  }

  const attributeToPropMap = create$1(null);
  const {
    attributeChangedCallback: superAttributeChangedCallback
  } = SuperClass.prototype;
  const {
    observedAttributes: superObservedAttributes = []
  } = SuperClass;
  const descriptors = create$1(null);

  for (let i = 0, len = props.length; i < len; i += 1) {
    const propName = props[i];
    attributeToPropMap[htmlPropertyToAttribute$1(propName)] = propName;
    descriptors[propName] = {
      get: createGetter(propName),
      set: createSetter(propName),
      enumerable: true,
      configurable: true
    };
  }

  for (let i = 0, len = methods.length; i < len; i += 1) {
    const methodName = methods[i];
    descriptors[methodName] = {
      value: createMethodCaller(methodName),
      writable: true,
      configurable: true
    };
  }

  descriptors.attributeChangedCallback = {
    value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
  };
  defineProperty$1(HTMLBridgeElement, 'observedAttributes', {
    get() {
      return [...superObservedAttributes, ...keys$1(attributeToPropMap)];
    }

  });
  defineProperties$1(HTMLBridgeElement.prototype, descriptors);
  return HTMLBridgeElement;
}

const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), []);
freeze$1(BaseBridgeElement);
seal$1(BaseBridgeElement.prototype);

function resolveCircularModuleDependency(fn) {
  return fn();
}

function isCircularModuleDependency(obj) {
  return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
}

const swappedTemplateMap = new WeakMap();
const swappedComponentMap = new WeakMap();
const swappedStyleMap = new WeakMap();
const activeTemplates = new WeakMap();
const activeComponents = new WeakMap();
const activeStyles = new WeakMap();

function flattenStylesheets(stylesheets) {
  const list = [];

  for (const stylesheet of stylesheets) {
    if (!Array.isArray(stylesheet)) {
      list.push(stylesheet);
    } else {
      list.push(...flattenStylesheets(stylesheet));
    }
  }

  return list;
}

function getTemplateOrSwappedTemplate(tpl) {

  if (runtimeFlags.ENABLE_HMR) {
    const visited = new Set();

    while (swappedTemplateMap.has(tpl) && !visited.has(tpl)) {
      visited.add(tpl);
      tpl = swappedTemplateMap.get(tpl);
    }
  }

  return tpl;
}

function getComponentOrSwappedComponent(Ctor) {

  if (runtimeFlags.ENABLE_HMR) {
    const visited = new Set();

    while (swappedComponentMap.has(Ctor) && !visited.has(Ctor)) {
      visited.add(Ctor);
      Ctor = swappedComponentMap.get(Ctor);
    }
  }

  return Ctor;
}

function getStyleOrSwappedStyle(style) {

  if (runtimeFlags.ENABLE_HMR) {
    const visited = new Set();

    while (swappedStyleMap.has(style) && !visited.has(style)) {
      visited.add(style);
      style = swappedStyleMap.get(style);
    }
  }

  return style;
}

function setActiveVM(vm) {

  if (runtimeFlags.ENABLE_HMR) {
    const Ctor = vm.def.ctor;
    let componentVMs = activeComponents.get(Ctor);

    if (isUndefined$1(componentVMs)) {
      componentVMs = new Set();
      activeComponents.set(Ctor, componentVMs);
    }

    componentVMs.add(vm);
    const tpl = vm.cmpTemplate;

    if (tpl) {
      let templateVMs = activeTemplates.get(tpl);

      if (isUndefined$1(templateVMs)) {
        templateVMs = new Set();
        activeTemplates.set(tpl, templateVMs);
      }

      templateVMs.add(vm);
      const stylesheets = tpl.stylesheets;

      if (!isUndefined$1(stylesheets)) {
        flattenStylesheets(stylesheets).forEach(stylesheet => {
          stylesheet = getStyleOrSwappedStyle(stylesheet);
          let stylesheetVMs = activeStyles.get(stylesheet);

          if (isUndefined$1(stylesheetVMs)) {
            stylesheetVMs = new Set();
            activeStyles.set(stylesheet, stylesheetVMs);
          }

          stylesheetVMs.add(vm);
        });
      }
    }
  }
}

function removeActiveVM(vm) {

  if (runtimeFlags.ENABLE_HMR) {
    const Ctor = vm.def.ctor;
    let list = activeComponents.get(Ctor);

    if (!isUndefined$1(list)) {
      list.delete(vm);
    }

    const tpl = vm.cmpTemplate;

    if (tpl) {
      list = activeTemplates.get(tpl);

      if (!isUndefined$1(list)) {
        list.delete(vm);
      }

      const styles = tpl.stylesheets;

      if (!isUndefined$1(styles)) {
        flattenStylesheets(styles).forEach(style => {
          list = activeStyles.get(style);

          if (!isUndefined$1(list)) {
            list.delete(vm);
          }
        });
      }
    }
  }
}

const CtorToDefMap = new WeakMap();

function getCtorProto(Ctor) {
  let proto = getPrototypeOf$1(Ctor);

  if (isNull$1(proto)) {
    throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
  }

  if (isCircularModuleDependency(proto)) {
    const p = resolveCircularModuleDependency(proto);

    {
      if (isNull$1(p)) {
        throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
      }
    }

    proto = p === proto ? BaseLightningElement : p;
  }

  return proto;
}

function createComponentDef(Ctor) {
  {
    const ctorName = Ctor.name;
    assert$1.isTrue(Ctor.constructor, `Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);
  }

  const decoratorsMeta = getDecoratorsMeta(Ctor);
  const {
    apiFields,
    apiFieldsConfig,
    apiMethods,
    wiredFields,
    wiredMethods,
    observedFields
  } = decoratorsMeta;
  const proto = Ctor.prototype;
  let {
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    render
  } = proto;
  const superProto = getCtorProto(Ctor);
  const superDef = superProto !== BaseLightningElement ? getComponentInternalDef(superProto) : lightingElementDef;
  const bridge = HTMLBridgeElementFactory(superDef.bridge, keys$1(apiFields), keys$1(apiMethods));
  const props = assign$1(create$1(null), superDef.props, apiFields);
  const propsConfig = assign$1(create$1(null), superDef.propsConfig, apiFieldsConfig);
  const methods = assign$1(create$1(null), superDef.methods, apiMethods);
  const wire = assign$1(create$1(null), superDef.wire, wiredFields, wiredMethods);
  connectedCallback = connectedCallback || superDef.connectedCallback;
  disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
  renderedCallback = renderedCallback || superDef.renderedCallback;
  errorCallback = errorCallback || superDef.errorCallback;
  render = render || superDef.render;
  const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
  const name = Ctor.name || superDef.name;
  defineProperties$1(proto, observedFields);
  const def = {
    ctor: Ctor,
    name,
    wire,
    props,
    propsConfig,
    methods,
    bridge,
    template,
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    render
  };

  {
    freeze$1(Ctor.prototype);
  }

  return def;
}

function isComponentConstructor(ctor) {
  if (!isFunction$1(ctor)) {
    return false;
  }

  if (ctor.prototype instanceof BaseLightningElement) {
    return true;
  }

  let current = ctor;

  do {
    if (isCircularModuleDependency(current)) {
      const circularResolved = resolveCircularModuleDependency(current);

      if (circularResolved === current) {
        return true;
      }

      current = circularResolved;
    }

    if (current === BaseLightningElement) {
      return true;
    }
  } while (!isNull$1(current) && (current = getPrototypeOf$1(current)));

  return false;
}

function getComponentInternalDef(Ctor) {
  {
    Ctor = getComponentOrSwappedComponent(Ctor);
  }

  let def = CtorToDefMap.get(Ctor);

  if (isUndefined$1(def)) {
    if (isCircularModuleDependency(Ctor)) {
      const resolvedCtor = resolveCircularModuleDependency(Ctor);
      def = getComponentInternalDef(resolvedCtor);
      CtorToDefMap.set(Ctor, def);
      return def;
    }

    if (!isComponentConstructor(Ctor)) {
      throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
    }

    def = createComponentDef(Ctor);
    CtorToDefMap.set(Ctor, def);
  }

  return def;
}

const lightingElementDef = {
  ctor: BaseLightningElement,
  name: BaseLightningElement.name,
  props: lightningBasedDescriptors,
  propsConfig: EmptyObject,
  methods: EmptyObject,
  wire: EmptyObject,
  bridge: BaseBridgeElement,
  template: defaultEmptyTemplate,
  render: BaseLightningElement.prototype.render
};
var PropDefType;

(function (PropDefType) {
  PropDefType["any"] = "any";
})(PropDefType || (PropDefType = {}));

const noop = () => void 0;

function observeElementChildNodes(elm) {
  elm.$domManual$ = true;
}

function setElementShadowToken(elm, token) {
  elm.$shadowToken$ = token;
}

function updateNodeHook(oldVnode, vnode) {
  const {
    elm,
    text,
    owner: {
      renderer
    }
  } = vnode;

  if (oldVnode.text !== text) {
    {
      unlockDomMutation();
    }

    renderer.setText(elm, text);

    {
      lockDomMutation();
    }
  }
}

function insertNodeHook(vnode, parentNode, referenceNode) {
  const {
    renderer
  } = vnode.owner;

  {
    unlockDomMutation();
  }

  renderer.insert(vnode.elm, parentNode, referenceNode);

  {
    lockDomMutation();
  }
}

function removeNodeHook(vnode, parentNode) {
  const {
    renderer
  } = vnode.owner;

  {
    unlockDomMutation();
  }

  renderer.remove(vnode.elm, parentNode);

  {
    lockDomMutation();
  }
}

function createElmHook(vnode) {
  modEvents.create(vnode);
  modAttrs.create(vnode);
  modProps.create(vnode);
  modStaticClassName.create(vnode);
  modStaticStyle.create(vnode);
  modComputedClassName.create(vnode);
  modComputedStyle.create(vnode);
}

var LWCDOMMode;

(function (LWCDOMMode) {
  LWCDOMMode["manual"] = "manual";
})(LWCDOMMode || (LWCDOMMode = {}));

function fallbackElmHook(elm, vnode) {
  const {
    owner
  } = vnode;

  if (isTrue$1$1(owner.renderer.syntheticShadow)) {
    const {
      data: {
        context
      }
    } = vnode;
    const {
      shadowAttribute
    } = owner.context;

    if (!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === LWCDOMMode.manual) {
      observeElementChildNodes(elm);
    }

    setElementShadowToken(elm, shadowAttribute);
  }

  {
    const {
      data: {
        context
      }
    } = vnode;
    const isPortal = !isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === LWCDOMMode.manual;
    patchElementWithRestrictions(elm, {
      isPortal
    });
  }
}

function updateElmHook(oldVnode, vnode) {
  modAttrs.update(oldVnode, vnode);
  modProps.update(oldVnode, vnode);
  modComputedClassName.update(oldVnode, vnode);
  modComputedStyle.update(oldVnode, vnode);
}

function updateChildrenHook(oldVnode, vnode) {
  const {
    children,
    owner
  } = vnode;
  const fn = hasDynamicChildren(children) ? updateDynamicChildren : updateStaticChildren;
  runWithBoundaryProtection(owner, owner.owner, noop, () => {
    fn(vnode.elm, oldVnode.children, children);
  }, noop);
}

function allocateChildrenHook(vnode, vm) {
  const children = vnode.aChildren || vnode.children;
  vm.aChildren = children;

  if (isTrue$1$1(vm.renderer.syntheticShadow)) {
    allocateInSlot(vm, children);
    vnode.aChildren = children;
    vnode.children = EmptyArray;
  }
}

function createViewModelHook(elm, vnode) {
  if (!isUndefined$1(getAssociatedVMIfPresent(elm))) {
    return;
  }

  const {
    sel,
    mode,
    ctor,
    owner
  } = vnode;
  const def = getComponentInternalDef(ctor);

  if (isTrue$1$1(owner.renderer.syntheticShadow)) {
    const {
      shadowAttribute
    } = owner.context;
    setElementShadowToken(elm, shadowAttribute);
  }

  createVM(elm, def, {
    mode,
    owner,
    tagName: sel,
    renderer: owner.renderer
  });

  {
    assert$1.isTrue(isArray$2(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
  }
}

function createCustomElmHook(vnode) {
  modEvents.create(vnode);
  modAttrs.create(vnode);
  modProps.create(vnode);
  modStaticClassName.create(vnode);
  modStaticStyle.create(vnode);
  modComputedClassName.create(vnode);
  modComputedStyle.create(vnode);
}

function createChildrenHook(vnode) {
  const {
    elm,
    children
  } = vnode;

  for (let j = 0; j < children.length; ++j) {
    const ch = children[j];

    if (ch != null) {
      ch.hook.create(ch);
      ch.hook.insert(ch, elm, null);
    }
  }
}

function updateCustomElmHook(oldVnode, vnode) {
  modAttrs.update(oldVnode, vnode);
  modProps.update(oldVnode, vnode);
  modComputedClassName.update(oldVnode, vnode);
  modComputedStyle.update(oldVnode, vnode);
}

function removeElmHook(vnode) {
  const {
    children,
    elm
  } = vnode;

  for (let j = 0, len = children.length; j < len; ++j) {
    const ch = children[j];

    if (!isNull$1(ch)) {
      ch.hook.remove(ch, elm);
    }
  }
}

const FromIteration = new WeakMap();

function markAsDynamicChildren(children) {
  FromIteration.set(children, 1);
}

function hasDynamicChildren(children) {
  return FromIteration.has(children);
}

function getUpgradableConstructor(tagName, renderer) {
  tagName = tagName.toLowerCase();
  let CE = renderer.getCustomElement(tagName);

  if (!isUndefined$1(CE)) {
    return CE;
  }

  CE = class LWCUpgradableElement extends renderer.HTMLElement {
    constructor(upgradeCallback) {
      super();

      if (isFunction$1(upgradeCallback)) {
        upgradeCallback(this);
      }
    }

  };
  renderer.defineCustomElement(tagName, CE);
  return CE;
}

const CHAR_S = 115;
const CHAR_V = 118;
const CHAR_G = 103;
const NamespaceAttributeForSVG = 'http://www.w3.org/2000/svg';
const SymbolIterator = Symbol.iterator;
const TextHook = {
  create: vnode => {
    const {
      owner
    } = vnode;
    const {
      renderer
    } = owner;
    const elm = renderer.createText(vnode.text);
    linkNodeToShadow(elm, owner);
    vnode.elm = elm;
  },
  update: updateNodeHook,
  insert: insertNodeHook,
  move: insertNodeHook,
  remove: removeNodeHook
};
const ElementHook = {
  create: vnode => {
    const {
      sel,
      owner,
      data: {
        ns
      }
    } = vnode;
    const {
      renderer
    } = owner;
    const elm = renderer.createElement(sel, ns);
    linkNodeToShadow(elm, owner);
    fallbackElmHook(elm, vnode);
    vnode.elm = elm;
    createElmHook(vnode);
  },
  update: (oldVnode, vnode) => {
    updateElmHook(oldVnode, vnode);
    updateChildrenHook(oldVnode, vnode);
  },
  insert: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
    createChildrenHook(vnode);
  },
  move: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
  },
  remove: (vnode, parentNode) => {
    removeNodeHook(vnode, parentNode);
    removeElmHook(vnode);
  }
};
const CustomElementHook = {
  create: vnode => {
    const {
      sel,
      owner
    } = vnode;
    const {
      renderer
    } = owner;
    const UpgradableConstructor = getUpgradableConstructor(sel, renderer);
    const elm = new UpgradableConstructor(elm => {
      createViewModelHook(elm, vnode);
    });
    linkNodeToShadow(elm, owner);
    vnode.elm = elm;
    const vm = getAssociatedVMIfPresent(elm);

    if (vm) {
      allocateChildrenHook(vnode, vm);
    } else if (vnode.ctor !== UpgradableConstructor) {
      throw new TypeError(`Incorrect Component Constructor`);
    }

    createCustomElmHook(vnode);
  },
  update: (oldVnode, vnode) => {
    updateCustomElmHook(oldVnode, vnode);
    const vm = getAssociatedVMIfPresent(vnode.elm);

    if (vm) {
      allocateChildrenHook(vnode, vm);
    }

    updateChildrenHook(oldVnode, vnode);

    if (vm) {
      {
        assert$1.isTrue(isArray$2(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
      }

      rerenderVM(vm);
    }
  },
  insert: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
    const vm = getAssociatedVMIfPresent(vnode.elm);

    if (vm) {
      {
        assert$1.isTrue(vm.state === VMState.created, `${vm} cannot be recycled.`);
      }

      runConnectedCallback(vm);
    }

    createChildrenHook(vnode);

    if (vm) {
      appendVM(vm);
    }
  },
  move: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
  },
  remove: (vnode, parentNode) => {
    removeNodeHook(vnode, parentNode);
    const vm = getAssociatedVMIfPresent(vnode.elm);

    if (vm) {
      removeVM(vm);
    }
  }
};

function linkNodeToShadow(elm, owner) {
  const {
    renderer,
    cmpRoot
  } = owner;

  if (renderer.syntheticShadow) {
    elm.$shadowResolver$ = cmpRoot.$shadowResolver$;
  }
}

function addNS(vnode) {
  const {
    data,
    children,
    sel
  } = vnode;
  data.ns = NamespaceAttributeForSVG;

  if (isArray$2(children) && sel !== 'foreignObject') {
    for (let j = 0, n = children.length; j < n; ++j) {
      const childNode = children[j];

      if (childNode != null && childNode.hook === ElementHook) {
        addNS(childNode);
      }
    }
  }
}

function addVNodeToChildLWC(vnode) {
  ArrayPush$1.call(getVMBeingRendered().velements, vnode);
}

function h(sel, data, children) {
  const vmBeingRendered = getVMBeingRendered();

  {
    assert$1.isTrue(isString(sel), `h() 1st argument sel must be a string.`);
    assert$1.isTrue(isObject$2(data), `h() 2nd argument data must be an object.`);
    assert$1.isTrue(isArray$2(children), `h() 3rd argument children must be an array.`);
    assert$1.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`);
    assert$1.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert$1.isFalse(data.styleMap && data.style, `vnode.data.styleMap and vnode.data.style ambiguous declaration.`);

    if (data.style && !isString(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }

    forEach$1.call(children, childVnode => {
      if (childVnode != null) {
        assert$1.isTrue(childVnode && 'sel' in childVnode && 'data' in childVnode && 'children' in childVnode && 'text' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
      }
    });
  }

  const {
    key
  } = data;
  let text, elm;
  const vnode = {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: ElementHook,
    owner: vmBeingRendered
  };

  if (sel.length === 3 && StringCharCodeAt$1.call(sel, 0) === CHAR_S && StringCharCodeAt$1.call(sel, 1) === CHAR_V && StringCharCodeAt$1.call(sel, 2) === CHAR_G) {
    addNS(vnode);
  }

  return vnode;
}

function ti(value) {
  const shouldNormalize = value > 0 && !(isTrue$1$1(value) || isFalse$1$1(value));

  {
    const vmBeingRendered = getVMBeingRendered();

    if (shouldNormalize) {
      logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
    }
  }

  return shouldNormalize ? 0 : value;
}

function s(slotName, data, children, slotset) {
  {
    assert$1.isTrue(isString(slotName), `s() 1st argument slotName must be a string.`);
    assert$1.isTrue(isObject$2(data), `s() 2nd argument data must be an object.`);
    assert$1.isTrue(isArray$2(children), `h() 3rd argument children must be an array.`);
  }

  if (!isUndefined$1(slotset) && !isUndefined$1(slotset[slotName]) && slotset[slotName].length !== 0) {
    children = slotset[slotName];
  }

  const vnode = h('slot', data, children);

  if (vnode.owner.renderer.syntheticShadow) {
    sc(children);
  }

  return vnode;
}

function c(sel, Ctor, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();

  {
    assert$1.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
    assert$1.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
    assert$1.isTrue(isObject$2(data), `c() 3nd argument data must be an object.`);
    assert$1.isTrue(arguments.length === 3 || isArray$2(children), `c() 4nd argument data must be an array.`);
    assert$1.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert$1.isFalse(data.styleMap && data.style, `vnode.data.styleMap and vnode.data.style ambiguous declaration.`);

    if (data.style && !isString(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }

    if (arguments.length === 4) {
      forEach$1.call(children, childVnode => {
        if (childVnode != null) {
          assert$1.isTrue(childVnode && 'sel' in childVnode && 'data' in childVnode && 'children' in childVnode && 'text' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
        }
      });
    }
  }

  const {
    key
  } = data;
  let text, elm;
  const vnode = {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: CustomElementHook,
    ctor: Ctor,
    owner: vmBeingRendered,
    mode: 'open'
  };
  addVNodeToChildLWC(vnode);
  return vnode;
}

function i(iterable, factory) {
  const list = [];
  sc(list);
  const vmBeingRendered = getVMBeingRendered();

  if (isUndefined$1(iterable) || iterable === null) {
    {
      logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
    }

    return list;
  }

  {
    assert$1.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
  }

  const iterator = iterable[SymbolIterator]();

  {
    assert$1.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
  }

  let next = iterator.next();
  let j = 0;
  let {
    value,
    done: last
  } = next;
  let keyMap;
  let iterationError;

  {
    keyMap = create$1(null);
  }

  while (last === false) {
    next = iterator.next();
    last = next.done;
    const vnode = factory(value, j, j === 0, last);

    if (isArray$2(vnode)) {
      ArrayPush$1.apply(list, vnode);
    } else {
      ArrayPush$1.call(list, vnode);
    }

    {
      const vnodes = isArray$2(vnode) ? vnode : [vnode];
      forEach$1.call(vnodes, childVnode => {
        if (!isNull$1(childVnode) && isObject$2(childVnode) && !isUndefined$1(childVnode.sel)) {
          const {
            key
          } = childVnode;

          if (isString(key) || isNumber(key)) {
            if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
              iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
            }

            keyMap[key] = 1;
          } else if (isUndefined$1(iterationError)) {
            iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
          }
        }
      });
    }

    j += 1;
    value = next.value;
  }

  {
    if (!isUndefined$1(iterationError)) {
      logError(iterationError, vmBeingRendered);
    }
  }

  return list;
}

function f(items) {
  {
    assert$1.isTrue(isArray$2(items), 'flattening api can only work with arrays.');
  }

  const len = items.length;
  const flattened = [];
  sc(flattened);

  for (let j = 0; j < len; j += 1) {
    const item = items[j];

    if (isArray$2(item)) {
      ArrayPush$1.apply(flattened, item);
    } else {
      ArrayPush$1.call(flattened, item);
    }
  }

  return flattened;
}

function t(text) {
  const data = EmptyObject;
  let sel, children, key, elm;
  return {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: TextHook,
    owner: getVMBeingRendered()
  };
}

function d(value) {
  if (value == null) {
    return null;
  }

  return t(value);
}

function b(fn) {
  const vmBeingRendered = getVMBeingRendered();

  if (isNull$1(vmBeingRendered)) {
    throw new Error();
  }

  const vm = vmBeingRendered;
  return function (event) {
    invokeEventListener(vm, fn, vm.component, event);
  };
}

function k(compilerKey, obj) {
  switch (typeof obj) {
    case 'number':
    case 'string':
      return compilerKey + ':' + obj;

    case 'object':
      {
        assert$1.fail(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
      }

  }
}

function gid(id) {
  const vmBeingRendered = getVMBeingRendered();

  if (isUndefined$1(id) || id === '') {
    {
      logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
    }

    return id;
  }

  if (isNull$1(id)) {
    return null;
  }

  return `${id}-${vmBeingRendered.idx}`;
}

function fid(url) {
  const vmBeingRendered = getVMBeingRendered();

  if (isUndefined$1(url) || url === '') {
    {
      if (isUndefined$1(url)) {
        logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
      }
    }

    return url;
  }

  if (isNull$1(url)) {
    return null;
  }

  if (/^#/.test(url)) {
    return `${url}-${vmBeingRendered.idx}`;
  }

  return url;
}

const DynamicImportedComponentMap = new Map();
let dynamicImportedComponentCounter = 0;

function dc(sel, Ctor, data, children) {
  {
    assert$1.isTrue(isString(sel), `dc() 1st argument sel must be a string.`);
    assert$1.isTrue(isObject$2(data), `dc() 3nd argument data must be an object.`);
    assert$1.isTrue(arguments.length === 3 || isArray$2(children), `dc() 4nd argument data must be an array.`);
  }

  if (Ctor == null) {
    return null;
  }

  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
  }

  let idx = DynamicImportedComponentMap.get(Ctor);

  if (isUndefined$1(idx)) {
    idx = dynamicImportedComponentCounter++;
    DynamicImportedComponentMap.set(Ctor, idx);
  }

  data.key = `dc:${idx}:${data.key}`;
  return c(sel, Ctor, data, children);
}

function sc(vnodes) {
  {
    assert$1.isTrue(isArray$2(vnodes), 'sc() api can only work with arrays.');
  }

  markAsDynamicChildren(vnodes);
  return vnodes;
}

var api$1 = Object.freeze({
  __proto__: null,
  h: h,
  ti: ti,
  s: s,
  c: c,
  i: i,
  f: f,
  t: t,
  d: d,
  b: b,
  k: k,
  gid: gid,
  fid: fid,
  dc: dc,
  sc: sc
});

function createShadowStyleVNode(content) {
  return h('style', {
    key: 'style',
    attrs: {
      type: 'text/css'
    }
  }, [t(content)]);
}

function updateSyntheticShadowAttributes(vm, template) {
  const {
    elm,
    context,
    renderer
  } = vm;
  const {
    stylesheets: newStylesheets,
    stylesheetTokens: newStylesheetTokens
  } = template;
  let newHostAttribute;
  let newShadowAttribute;
  const oldHostAttribute = context.hostAttribute;

  if (!isUndefined$1(oldHostAttribute)) {
    renderer.removeAttribute(elm, oldHostAttribute);
  }

  if (!isUndefined$1(newStylesheetTokens) && !isUndefined$1(newStylesheets) && newStylesheets.length !== 0) {
    newHostAttribute = newStylesheetTokens.hostAttribute;
    newShadowAttribute = newStylesheetTokens.shadowAttribute;
    renderer.setAttribute(elm, newHostAttribute, '');
  }

  context.hostAttribute = newHostAttribute;
  context.shadowAttribute = newShadowAttribute;
}

function evaluateStylesheetsContent(stylesheets, hostSelector, shadowSelector, nativeShadow) {
  const content = [];

  for (let i = 0; i < stylesheets.length; i++) {
    let stylesheet = stylesheets[i];

    if (isArray$2(stylesheet)) {
      ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, hostSelector, shadowSelector, nativeShadow));
    } else {
      {
        stylesheet = getStyleOrSwappedStyle(stylesheet);
      }

      ArrayPush$1.call(content, stylesheet(hostSelector, shadowSelector, nativeShadow));
    }
  }

  return content;
}

function getStylesheetsContent(vm, template) {
  const {
    stylesheets,
    stylesheetTokens: tokens
  } = template;
  const {
    syntheticShadow
  } = vm.renderer;
  let content = [];

  if (!isUndefined$1(stylesheets) && !isUndefined$1(tokens)) {
    const hostSelector = syntheticShadow ? `[${tokens.hostAttribute}]` : '';
    const shadowSelector = syntheticShadow ? `[${tokens.shadowAttribute}]` : '';
    content = evaluateStylesheetsContent(stylesheets, hostSelector, shadowSelector, !syntheticShadow);
  }

  return content;
}

function createStylesheet(vm, stylesheets) {
  const {
    renderer
  } = vm;

  if (renderer.syntheticShadow) {
    for (let i = 0; i < stylesheets.length; i++) {
      renderer.insertGlobalStylesheet(stylesheets[i]);
    }

    return null;
  } else {
    const shadowStyleSheetContent = ArrayJoin$1.call(stylesheets, '\n');
    return createShadowStyleVNode(shadowStyleSheetContent);
  }
}

var GlobalMeasurementPhase;

(function (GlobalMeasurementPhase) {
  GlobalMeasurementPhase["REHYDRATE"] = "lwc-rehydrate";
  GlobalMeasurementPhase["HYDRATE"] = "lwc-hydrate";
})(GlobalMeasurementPhase || (GlobalMeasurementPhase = {}));

const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

function getMarkName(phase, vm) {
  return `${getComponentTag(vm)} - ${phase} - ${vm.idx}`;
}

function getMeasureName(phase, vm) {
  return `${getComponentTag(vm)} - ${phase}`;
}

function start(markName) {
  performance.mark(markName);
}

function end(measureName, markName) {
  performance.measure(measureName, markName);
  performance.clearMarks(markName);
  performance.clearMarks(measureName);
}

function noop$1() {}

const startMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
  const markName = getMarkName(phase, vm);
  start(markName);
};
const endMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
  const markName = getMarkName(phase, vm);
  const measureName = getMeasureName(phase, vm);
  end(measureName, markName);
};
const startGlobalMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
  const markName = isUndefined$1(vm) ? phase : getMarkName(phase, vm);
  start(markName);
};
const endGlobalMeasure = !isUserTimingSupported ? noop$1 : function (phase, vm) {
  const markName = isUndefined$1(vm) ? phase : getMarkName(phase, vm);
  end(phase, markName);
};

function noop$2(_opId, _phase, _cmpName, _vm_idx) {}

let logOperation = noop$2;
var OperationId;

(function (OperationId) {
  OperationId[OperationId["constructor"] = 0] = "constructor";
  OperationId[OperationId["render"] = 1] = "render";
  OperationId[OperationId["patch"] = 2] = "patch";
  OperationId[OperationId["connectedCallback"] = 3] = "connectedCallback";
  OperationId[OperationId["renderedCallback"] = 4] = "renderedCallback";
  OperationId[OperationId["disconnectedCallback"] = 5] = "disconnectedCallback";
  OperationId[OperationId["errorCallback"] = 6] = "errorCallback";
})(OperationId || (OperationId = {}));

var Phase;

(function (Phase) {
  Phase[Phase["Start"] = 0] = "Start";
  Phase[Phase["Stop"] = 1] = "Stop";
})(Phase || (Phase = {}));

const opIdToMeasurementPhaseMappingArray = ['constructor', 'render', 'patch', 'connectedCallback', 'renderedCallback', 'disconnectedCallback', 'errorCallback'];
let profilerEnabled = false;
let logMarks = false;
let bufferLogging = false;

{
  profilerEnabled = true;
  logMarks = true;
  bufferLogging = false;
}

function trackProfilerState(callback) {
  callback(profilerEnabled);
}

function logOperationStart(opId, vm) {
  if (logMarks) {
    startMeasure(opIdToMeasurementPhaseMappingArray[opId], vm);
  }

  if (bufferLogging) {
    logOperation(opId, Phase.Start, vm.tagName, vm.idx);
  }
}

function logOperationEnd(opId, vm) {
  if (logMarks) {
    endMeasure(opIdToMeasurementPhaseMappingArray[opId], vm);
  }

  if (bufferLogging) {
    logOperation(opId, Phase.Stop, vm.tagName, vm.idx);
  }
}
let isUpdatingTemplate = false;
let vmBeingRendered = null;

function getVMBeingRendered() {
  return vmBeingRendered;
}

function setVMBeingRendered(vm) {
  vmBeingRendered = vm;
}

let profilerEnabled$1 = false;
trackProfilerState(t => profilerEnabled$1 = t);

function validateSlots(vm, html) {

  const {
    cmpSlots
  } = vm;
  const {
    slots = EmptyArray
  } = html;

  for (const slotName in cmpSlots) {
    assert$1.isTrue(isArray$2(cmpSlots[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots[slotName])} for slot "${slotName}" in ${vm}.`);

    if (slotName !== '' && ArrayIndexOf$1.call(slots, slotName) === -1) {
      logError(`Ignoring unknown provided slot name "${slotName}" in ${vm}. Check for a typo on the slot attribute.`, vm);
    }
  }
}

function evaluateTemplate(vm, html) {
  {
    assert$1.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);
    html = getTemplateOrSwappedTemplate(html);
  }

  const isUpdatingTemplateInception = isUpdatingTemplate;
  const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
  let vnodes = [];
  runWithBoundaryProtection(vm, vm.owner, () => {
    vmBeingRendered = vm;

    if (profilerEnabled$1) {
      logOperationStart(OperationId.render, vm);
    }
  }, () => {
    const {
      component,
      context,
      cmpSlots,
      cmpTemplate,
      tro,
      renderer
    } = vm;
    tro.observe(() => {
      if (html !== cmpTemplate) {
        if (!isNull$1(cmpTemplate)) {
          resetShadowRoot(vm);
        }

        if (!isTemplateRegistered(html)) {
          throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
        }

        vm.cmpTemplate = html;
        context.tplCache = create$1(null);

        if (renderer.syntheticShadow) {
          updateSyntheticShadowAttributes(vm, html);
        }

        const stylesheetsContent = getStylesheetsContent(vm, html);
        context.styleVNode = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
      }

      if ("development" !== 'production') {
        validateSlots(vm, html);
        setActiveVM(vm);
      }

      vm.velements = [];
      isUpdatingTemplate = true;
      vnodes = html.call(undefined, api$1, component, cmpSlots, context.tplCache);
      const {
        styleVNode
      } = context;

      if (!isNull$1(styleVNode)) {
        ArrayUnshift$2.call(vnodes, styleVNode);
      }
    });
  }, () => {
    isUpdatingTemplate = isUpdatingTemplateInception;
    vmBeingRendered = vmOfTemplateBeingUpdatedInception;

    if (profilerEnabled$1) {
      logOperationEnd(OperationId.render, vm);
    }
  });

  {
    assert$1.invariant(isArray$2(vnodes), `Compiler should produce html functions that always return an array.`);
  }

  return vnodes;
}

function addErrorComponentStack(vm, error) {
  if (!isFrozen$1(error) && isUndefined$1(error.wcStack)) {
    const wcStack = getErrorComponentStack(vm);
    defineProperty$1(error, 'wcStack', {
      get() {
        return wcStack;
      }

    });
  }
}

let isInvokingRender = false;
let vmBeingConstructed = null;

function isBeingConstructed(vm) {
  return vmBeingConstructed === vm;
}

let profilerEnabled$2 = false;
trackProfilerState(t => profilerEnabled$2 = t);

const noop$3 = () => void 0;

function invokeComponentCallback(vm, fn, args) {
  const {
    component,
    callHook,
    owner
  } = vm;
  let result;
  runWithBoundaryProtection(vm, owner, noop$3, () => {
    result = callHook(component, fn, args);
  }, noop$3);
  return result;
}

function invokeComponentConstructor(vm, Ctor) {
  const vmBeingConstructedInception = vmBeingConstructed;
  let error;

  if (profilerEnabled$2) {
    logOperationStart(OperationId.constructor, vm);
  }

  vmBeingConstructed = vm;

  try {
    const result = new Ctor();

    if (vmBeingConstructed.component !== result) {
      throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
    }
  } catch (e) {
    error = Object(e);
  } finally {
    if (profilerEnabled$2) {
      logOperationEnd(OperationId.constructor, vm);
    }

    vmBeingConstructed = vmBeingConstructedInception;

    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      throw error;
    }
  }
}

function invokeComponentRenderMethod(vm) {
  const {
    def: {
      render
    },
    callHook,
    component,
    owner
  } = vm;
  const isRenderBeingInvokedInception = isInvokingRender;
  const vmBeingRenderedInception = getVMBeingRendered();
  let html;
  let renderInvocationSuccessful = false;
  runWithBoundaryProtection(vm, owner, () => {
    isInvokingRender = true;
    setVMBeingRendered(vm);
  }, () => {
    vm.tro.observe(() => {
      html = callHook(component, render);
      renderInvocationSuccessful = true;
    });
  }, () => {
    isInvokingRender = isRenderBeingInvokedInception;
    setVMBeingRendered(vmBeingRenderedInception);
  });
  return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
}

function invokeComponentRenderedCallback(vm) {
  const {
    def: {
      renderedCallback
    },
    component,
    callHook,
    owner
  } = vm;

  if (!isUndefined$1(renderedCallback)) {
    runWithBoundaryProtection(vm, owner, () => {
      if (profilerEnabled$2) {
        logOperationStart(OperationId.renderedCallback, vm);
      }
    }, () => {
      callHook(component, renderedCallback);
    }, () => {
      if (profilerEnabled$2) {
        logOperationEnd(OperationId.renderedCallback, vm);
      }
    });
  }
}

function invokeEventListener(vm, fn, thisValue, event) {
  const {
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop$3, () => {
    if ("development" !== 'production') {
      assert$1.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
    }

    callHook(thisValue, fn, [event]);
  }, noop$3);
}

const signedTemplateMap = new Map();

function registerComponent(Ctor, {
  tmpl
}) {
  signedTemplateMap.set(Ctor, tmpl);
  return Ctor;
}

function getComponentRegisteredTemplate(Ctor) {
  return signedTemplateMap.get(Ctor);
}

function createComponent(vm, Ctor) {
  invokeComponentConstructor(vm, Ctor);

  if (isUndefined$1(vm.component)) {
    throw new ReferenceError(`Invalid construction for ${Ctor}, you must extend LightningElement.`);
  }
}

function getTemplateReactiveObserver(vm) {
  return new ReactiveObserver(() => {
    const {
      isDirty
    } = vm;

    if (isFalse$1$1(isDirty)) {
      markComponentAsDirty(vm);
      scheduleRehydration(vm);
    }
  });
}

function renderComponent(vm) {
  {
    assert$1.invariant(vm.isDirty, `${vm} is not dirty.`);
  }

  vm.tro.reset();
  const vnodes = invokeComponentRenderMethod(vm);
  vm.isDirty = false;
  vm.isScheduled = false;

  {
    assert$1.invariant(isArray$2(vnodes), `${vm}.render() should always return an array of vnodes instead of ${vnodes}`);
  }

  return vnodes;
}

function markComponentAsDirty(vm) {
  {
    const vmBeingRendered = getVMBeingRendered();
    assert$1.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
    assert$1.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
    assert$1.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
  }

  vm.isDirty = true;
}

const cmpEventListenerMap = new WeakMap();

function getWrappedComponentsListener(vm, listener) {
  if (!isFunction$1(listener)) {
    throw new TypeError();
  }

  let wrappedListener = cmpEventListenerMap.get(listener);

  if (isUndefined$1(wrappedListener)) {
    wrappedListener = function (event) {
      invokeEventListener(vm, listener, undefined, event);
    };

    cmpEventListenerMap.set(listener, wrappedListener);
  }

  return wrappedListener;
}

const Services = create$1(null);

function invokeServiceHook(vm, cbs) {
  {
    assert$1.isTrue(isArray$2(cbs) && cbs.length > 0, `Optimize invokeServiceHook() to be invoked only when needed`);
  }

  const {
    component,
    def,
    context
  } = vm;

  for (let i = 0, len = cbs.length; i < len; ++i) {
    cbs[i].call(undefined, component, {}, def, context);
  }
}

var VMState;

(function (VMState) {
  VMState[VMState["created"] = 0] = "created";
  VMState[VMState["connected"] = 1] = "connected";
  VMState[VMState["disconnected"] = 2] = "disconnected";
})(VMState || (VMState = {}));

let profilerEnabled$3 = false;
trackProfilerState(t => profilerEnabled$3 = t);
let idx = 0;
const ViewModelReflection = createHiddenField$1('ViewModel', 'engine');

function callHook(cmp, fn, args = []) {
  return fn.apply(cmp, args);
}

function setHook(cmp, prop, newValue) {
  cmp[prop] = newValue;
}

function getHook(cmp, prop) {
  return cmp[prop];
}

function rerenderVM(vm) {
  rehydrate(vm);
}

function connectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  startGlobalMeasure(GlobalMeasurementPhase.HYDRATE, vm);

  if (vm.state === VMState.connected) {
    disconnectRootElement(elm);
  }

  runConnectedCallback(vm);
  rehydrate(vm);
  endGlobalMeasure(GlobalMeasurementPhase.HYDRATE, vm);
}

function disconnectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  resetComponentStateWhenRemoved(vm);
}

function appendVM(vm) {
  rehydrate(vm);
}

function resetComponentStateWhenRemoved(vm) {
  const {
    state
  } = vm;

  if (state !== VMState.disconnected) {
    const {
      oar,
      tro
    } = vm;
    tro.reset();

    for (const key in oar) {
      oar[key].reset();
    }

    runDisconnectedCallback(vm);
    runShadowChildNodesDisconnectedCallback(vm);
    runLightChildNodesDisconnectedCallback(vm);
  }

  {
    removeActiveVM(vm);
  }
}

function removeVM(vm) {
  {
    assert$1.isTrue(vm.state === VMState.connected || vm.state === VMState.disconnected, `${vm} must have been connected.`);
  }

  resetComponentStateWhenRemoved(vm);
}

function createVM(elm, def, options) {
  const {
    mode,
    owner,
    renderer,
    tagName
  } = options;
  const vm = {
    elm,
    def,
    idx: idx++,
    state: VMState.created,
    isScheduled: false,
    isDirty: true,
    tagName,
    mode,
    owner,
    renderer,
    children: EmptyArray,
    aChildren: EmptyArray,
    velements: EmptyArray,
    cmpProps: create$1(null),
    cmpFields: create$1(null),
    cmpSlots: create$1(null),
    oar: create$1(null),
    cmpTemplate: null,
    context: {
      hostAttribute: undefined,
      shadowAttribute: undefined,
      styleVNode: null,
      tplCache: EmptyObject,
      wiredConnecting: EmptyArray,
      wiredDisconnecting: EmptyArray
    },
    tro: null,
    component: null,
    cmpRoot: null,
    callHook,
    setHook,
    getHook
  };
  vm.tro = getTemplateReactiveObserver(vm);

  {
    vm.toString = () => {
      return `[object:vm ${def.name} (${vm.idx})]`;
    };
  }

  createComponent(vm, def.ctor);

  if (isFalse$1$1(renderer.ssr) && hasWireAdapters(vm)) {
    installWireAdapters(vm);
  }

  return vm;
}

function assertIsVM(obj) {
  if (isNull$1(obj) || !isObject$2(obj) || !('cmpRoot' in obj)) {
    throw new TypeError(`${obj} is not a VM.`);
  }
}

function associateVM(obj, vm) {
  setHiddenField$1(obj, ViewModelReflection, vm);
}

function getAssociatedVM(obj) {
  const vm = getHiddenField$1(obj, ViewModelReflection);

  {
    assertIsVM(vm);
  }

  return vm;
}

function getAssociatedVMIfPresent(obj) {
  const maybeVm = getHiddenField$1(obj, ViewModelReflection);

  {
    if (!isUndefined$1(maybeVm)) {
      assertIsVM(maybeVm);
    }
  }

  return maybeVm;
}

function rehydrate(vm) {
  if (isTrue$1$1(vm.isDirty)) {
    const children = renderComponent(vm);
    patchShadowRoot(vm, children);
  }
}

function patchShadowRoot(vm, newCh) {
  const {
    cmpRoot,
    children: oldCh
  } = vm;
  vm.children = newCh;

  if (newCh.length > 0 || oldCh.length > 0) {
    if (oldCh !== newCh) {
      const fn = hasDynamicChildren(newCh) ? updateDynamicChildren : updateStaticChildren;
      runWithBoundaryProtection(vm, vm, () => {
        if (profilerEnabled$3) {
          logOperationStart(OperationId.patch, vm);
        }
      }, () => {
        fn(cmpRoot, oldCh, newCh);
      }, () => {
        if (profilerEnabled$3) {
          logOperationEnd(OperationId.patch, vm);
        }
      });
    }
  }

  if (vm.state === VMState.connected) {
    runRenderedCallback(vm);
  }
}

function runRenderedCallback(vm) {
  if (isTrue$1$1(vm.renderer.ssr)) {
    return;
  }

  const {
    rendered
  } = Services;

  if (rendered) {
    invokeServiceHook(vm, rendered);
  }

  invokeComponentRenderedCallback(vm);
}

let rehydrateQueue = [];

function flushRehydrationQueue() {
  startGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);

  {
    assert$1.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
  }

  const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
  rehydrateQueue = [];

  for (let i = 0, len = vms.length; i < len; i += 1) {
    const vm = vms[i];

    try {
      rehydrate(vm);
    } catch (error) {
      if (i + 1 < len) {
        if (rehydrateQueue.length === 0) {
          addCallbackToNextTick(flushRehydrationQueue);
        }

        ArrayUnshift$2.apply(rehydrateQueue, ArraySlice$2.call(vms, i + 1));
      }

      endGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);
      throw error;
    }
  }

  endGlobalMeasure(GlobalMeasurementPhase.REHYDRATE);
}

function runConnectedCallback(vm) {
  const {
    state
  } = vm;

  if (state === VMState.connected) {
    return;
  }

  vm.state = VMState.connected;
  const {
    connected
  } = Services;

  if (connected) {
    invokeServiceHook(vm, connected);
  }

  if (hasWireAdapters(vm)) {
    connectWireAdapters(vm);
  }

  const {
    connectedCallback
  } = vm.def;

  if (!isUndefined$1(connectedCallback)) {
    if (profilerEnabled$3) {
      logOperationStart(OperationId.connectedCallback, vm);
    }

    invokeComponentCallback(vm, connectedCallback);

    if (profilerEnabled$3) {
      logOperationEnd(OperationId.connectedCallback, vm);
    }
  }
}

function hasWireAdapters(vm) {
  return getOwnPropertyNames$1(vm.def.wire).length > 0;
}

function runDisconnectedCallback(vm) {
  {
    assert$1.isTrue(vm.state !== VMState.disconnected, `${vm} must be inserted.`);
  }

  if (isFalse$1$1(vm.isDirty)) {
    vm.isDirty = true;
  }

  vm.state = VMState.disconnected;
  const {
    disconnected
  } = Services;

  if (disconnected) {
    invokeServiceHook(vm, disconnected);
  }

  if (hasWireAdapters(vm)) {
    disconnectWireAdapters(vm);
  }

  const {
    disconnectedCallback
  } = vm.def;

  if (!isUndefined$1(disconnectedCallback)) {
    if (profilerEnabled$3) {
      logOperationStart(OperationId.disconnectedCallback, vm);
    }

    invokeComponentCallback(vm, disconnectedCallback);

    if (profilerEnabled$3) {
      logOperationEnd(OperationId.disconnectedCallback, vm);
    }
  }
}

function runShadowChildNodesDisconnectedCallback(vm) {
  const {
    velements: vCustomElementCollection
  } = vm;

  for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
    const {
      elm
    } = vCustomElementCollection[i];

    if (!isUndefined$1(elm)) {
      const childVM = getAssociatedVMIfPresent(elm);

      if (!isUndefined$1(childVM)) {
        resetComponentStateWhenRemoved(childVM);
      }
    }
  }
}

function runLightChildNodesDisconnectedCallback(vm) {
  const {
    aChildren: adoptedChildren
  } = vm;
  recursivelyDisconnectChildren(adoptedChildren);
}

function recursivelyDisconnectChildren(vnodes) {
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];

    if (!isNull$1(vnode) && isArray$2(vnode.children) && !isUndefined$1(vnode.elm)) {
      if (isUndefined$1(vnode.ctor)) {
        recursivelyDisconnectChildren(vnode.children);
      } else {
        resetComponentStateWhenRemoved(getAssociatedVM(vnode.elm));
      }
    }
  }
}

function resetShadowRoot(vm) {
  const {
    children,
    cmpRoot,
    renderer
  } = vm;

  for (let i = 0, len = children.length; i < len; i++) {
    const child = children[i];

    if (!isNull$1(child) && !isUndefined$1(child.elm)) {
      renderer.remove(child.elm, cmpRoot);
    }
  }

  vm.children = EmptyArray;
  runShadowChildNodesDisconnectedCallback(vm);
  vm.velements = EmptyArray;
}

function scheduleRehydration(vm) {
  if (isTrue$1$1(vm.renderer.ssr) || isTrue$1$1(vm.isScheduled)) {
    return;
  }

  vm.isScheduled = true;

  if (rehydrateQueue.length === 0) {
    addCallbackToNextTick(flushRehydrationQueue);
  }

  ArrayPush$1.call(rehydrateQueue, vm);
}

function getErrorBoundaryVM(vm) {
  let currentVm = vm;

  while (!isNull$1(currentVm)) {
    if (!isUndefined$1(currentVm.def.errorCallback)) {
      return currentVm;
    }

    currentVm = currentVm.owner;
  }
}

function allocateInSlot(vm, children) {
  {
    assert$1.invariant(isObject$2(vm.cmpSlots), `When doing manual allocation, there must be a cmpSlots object available.`);
  }

  const {
    cmpSlots: oldSlots
  } = vm;
  const cmpSlots = vm.cmpSlots = create$1(null);

  for (let i = 0, len = children.length; i < len; i += 1) {
    const vnode = children[i];

    if (isNull$1(vnode)) {
      continue;
    }

    const {
      data
    } = vnode;
    const slotName = data.attrs && data.attrs.slot || '';
    const vnodes = cmpSlots[slotName] = cmpSlots[slotName] || [];

    if (!isUndefined$1(vnode.key)) {
      vnode.key = `@${slotName}:${vnode.key}`;
    }

    ArrayPush$1.call(vnodes, vnode);
  }

  if (isFalse$1$1(vm.isDirty)) {
    const oldKeys = keys$1(oldSlots);

    if (oldKeys.length !== keys$1(cmpSlots).length) {
      markComponentAsDirty(vm);
      return;
    }

    for (let i = 0, len = oldKeys.length; i < len; i += 1) {
      const key = oldKeys[i];

      if (isUndefined$1(cmpSlots[key]) || oldSlots[key].length !== cmpSlots[key].length) {
        markComponentAsDirty(vm);
        return;
      }

      const oldVNodes = oldSlots[key];
      const vnodes = cmpSlots[key];

      for (let j = 0, a = cmpSlots[key].length; j < a; j += 1) {
        if (oldVNodes[j] !== vnodes[j]) {
          markComponentAsDirty(vm);
          return;
        }
      }
    }
  }
}

function runWithBoundaryProtection(vm, owner, pre, job, post) {
  let error;
  pre();

  try {
    job();
  } catch (e) {
    error = Object(e);
  } finally {
    post();

    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      const errorBoundaryVm = isNull$1(owner) ? undefined : getErrorBoundaryVM(owner);

      if (isUndefined$1(errorBoundaryVm)) {
        throw error;
      }

      resetShadowRoot(vm);

      if (profilerEnabled$3) {
        logOperationStart(OperationId.errorCallback, vm);
      }

      const errorCallback = errorBoundaryVm.def.errorCallback;
      invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);

      if (profilerEnabled$3) {
        logOperationEnd(OperationId.errorCallback, vm);
      }
    }
  }
}

const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
const WireMetaMap = new Map();

function noop$4() {}

class WireContextRegistrationEvent extends CustomEvent {
  constructor(adapterToken, {
    setNewContext,
    setDisconnectedCallback
  }) {
    super(adapterToken, {
      bubbles: true,
      composed: true
    });
    defineProperties$1(this, {
      setNewContext: {
        value: setNewContext
      },
      setDisconnectedCallback: {
        value: setDisconnectedCallback
      }
    });
  }

}

function createFieldDataCallback(vm, name) {
  const {
    cmpFields
  } = vm;
  return value => {
    if (value !== vm.cmpFields[name]) {
      cmpFields[name] = value;
      componentValueMutated(vm, name);
    }
  };
}

function createMethodDataCallback(vm, method) {
  return value => {
    runWithBoundaryProtection(vm, vm.owner, noop$4, () => {
      method.call(vm.component, value);
    }, noop$4);
  };
}

function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
  let hasPendingConfig = false;
  const ro = new ReactiveObserver(() => {
    if (hasPendingConfig === false) {
      hasPendingConfig = true;
      Promise.resolve().then(() => {
        hasPendingConfig = false;
        ro.reset();
        computeConfigAndUpdate();
      });
    }
  });

  const computeConfigAndUpdate = () => {
    let config;
    ro.observe(() => config = configCallback(component));
    callbackWhenConfigIsReady(config);
  };

  return {
    computeConfigAndUpdate,
    ro
  };
}

function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
  const {
    adapter
  } = wireDef;
  const adapterContextToken = getAdapterToken(adapter);

  if (isUndefined$1(adapterContextToken)) {
    return;
  }

  const {
    elm,
    renderer,
    context: {
      wiredConnecting,
      wiredDisconnecting
    }
  } = vm;
  ArrayPush$1.call(wiredConnecting, () => {
    const contextRegistrationEvent = new WireContextRegistrationEvent(adapterContextToken, {
      setNewContext(newContext) {
        callbackWhenContextIsReady(newContext);
      },

      setDisconnectedCallback(disconnectCallback) {
        ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
      }

    });
    renderer.dispatchEvent(elm, contextRegistrationEvent);
  });
}

function createConnector(vm, name, wireDef) {
  const {
    method,
    adapter,
    configCallback,
    dynamic
  } = wireDef;
  const dataCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
  let context;
  let connector;
  defineProperty$1(dataCallback, DeprecatedWiredElementHost, {
    value: vm.elm
  });
  defineProperty$1(dataCallback, DeprecatedWiredParamsMeta, {
    value: dynamic
  });
  runWithBoundaryProtection(vm, vm, noop$4, () => {
    connector = new adapter(dataCallback);
  }, noop$4);

  const updateConnectorConfig = config => {
    runWithBoundaryProtection(vm, vm, noop$4, () => {
      connector.update(config, context);
    }, noop$4);
  };

  const {
    computeConfigAndUpdate,
    ro
  } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig);

  if (!isUndefined$1(adapter.contextSchema)) {
    createContextWatcher(vm, wireDef, newContext => {
      if (context !== newContext) {
        context = newContext;

        if (vm.state === VMState.connected) {
          computeConfigAndUpdate();
        }
      }
    });
  }

  return {
    connector,
    computeConfigAndUpdate,
    resetConfigWatcher: () => ro.reset()
  };
}

const AdapterToTokenMap = new Map();

function getAdapterToken(adapter) {
  return AdapterToTokenMap.get(adapter);
}

function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }

  const method = descriptor.value;
  const def = {
    adapter,
    method,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}

function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }

  const def = {
    adapter,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}

function installWireAdapters(vm) {
  const {
    context,
    def: {
      wire
    }
  } = vm;
  const wiredConnecting = context.wiredConnecting = [];
  const wiredDisconnecting = context.wiredDisconnecting = [];

  for (const fieldNameOrMethod in wire) {
    const descriptor = wire[fieldNameOrMethod];
    const wireDef = WireMetaMap.get(descriptor);

    {
      assert$1.invariant(wireDef, `Internal Error: invalid wire definition found.`);
    }

    if (!isUndefined$1(wireDef)) {
      const {
        connector,
        computeConfigAndUpdate,
        resetConfigWatcher
      } = createConnector(vm, fieldNameOrMethod, wireDef);
      const hasDynamicParams = wireDef.dynamic.length > 0;
      ArrayPush$1.call(wiredConnecting, () => {
        connector.connect();

        if (hasDynamicParams) {
          Promise.resolve().then(computeConfigAndUpdate);
        } else {
          computeConfigAndUpdate();
        }
      });
      ArrayPush$1.call(wiredDisconnecting, () => {
        connector.disconnect();
        resetConfigWatcher();
      });
    }
  }
}

function connectWireAdapters(vm) {
  const {
    wiredConnecting
  } = vm.context;

  for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
    wiredConnecting[i]();
  }
}

function disconnectWireAdapters(vm) {
  const {
    wiredDisconnecting
  } = vm.context;
  runWithBoundaryProtection(vm, vm, noop$4, () => {
    for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
      wiredDisconnecting[i]();
    }
  }, noop$4);
}

const globalStylesheets = create(null);
const globalStylesheetsParentElement = document.head || document.body || document;
let getCustomElement, defineCustomElement, HTMLElementConstructor$1;

function isCustomElementRegistryAvailable() {
  if (typeof customElements === 'undefined') {
    return false;
  }

  try {
    const HTMLElementAlias = HTMLElement;

    class clazz extends HTMLElementAlias {}

    customElements.define('lwc-test-' + Math.floor(Math.random() * 1000000), clazz);
    new clazz();
    return true;
  } catch (_a) {
    return false;
  }
}

if (isCustomElementRegistryAvailable()) {
  getCustomElement = customElements.get.bind(customElements);
  defineCustomElement = customElements.define.bind(customElements);
  HTMLElementConstructor$1 = HTMLElement;
} else {
  const registry = create(null);
  const reverseRegistry = new WeakMap();

  defineCustomElement = function define(name, ctor) {
    if (name !== StringToLowerCase.call(name) || registry[name]) {
      throw new TypeError(`Invalid Registration`);
    }

    registry[name] = ctor;
    reverseRegistry.set(ctor, name);
  };

  getCustomElement = function get(name) {
    return registry[name];
  };

  HTMLElementConstructor$1 = function HTMLElement() {
    if (!(this instanceof HTMLElement)) {
      throw new TypeError(`Invalid Invocation`);
    }

    const {
      constructor
    } = this;
    const name = reverseRegistry.get(constructor);

    if (!name) {
      throw new TypeError(`Invalid Construction`);
    }

    const elm = document.createElement(name);
    setPrototypeOf(elm, constructor.prototype);
    return elm;
  };

  HTMLElementConstructor$1.prototype = HTMLElement.prototype;
}

const useSyntheticShadow = hasOwnProperty.call(Element.prototype, '$shadowToken$');
const renderer = {
  ssr: false,
  syntheticShadow: useSyntheticShadow,

  createElement(tagName, namespace) {
    return isUndefined(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
  },

  createText(content) {
    return document.createTextNode(content);
  },

  insert(node, parent, anchor) {
    parent.insertBefore(node, anchor);
  },

  remove(node, parent) {
    parent.removeChild(node);
  },

  nextSibling(node) {
    return node.nextSibling;
  },

  attachShadow(element, options) {
    return element.attachShadow(options);
  },

  setText(node, content) {
    node.nodeValue = content;
  },

  getProperty(node, key) {
    return node[key];
  },

  setProperty(node, key, value) {
    {
      if (node instanceof Element && !(key in node)) {
        assert.fail(`Unknown public property "${key}" of element <${node.tagName}>. This is likely a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}".`);
      }
    }

    node[key] = value;
  },

  getAttribute(element, name, namespace) {
    return isUndefined(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
  },

  setAttribute(element, name, value, namespace) {
    return isUndefined(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
  },

  removeAttribute(element, name, namespace) {
    if (isUndefined(namespace)) {
      element.removeAttribute(name);
    } else {
      element.removeAttributeNS(namespace, name);
    }
  },

  addEventListener(target, type, callback, options) {
    target.addEventListener(type, callback, options);
  },

  removeEventListener(target, type, callback, options) {
    target.removeEventListener(type, callback, options);
  },

  dispatchEvent(target, event) {
    return target.dispatchEvent(event);
  },

  getClassList(element) {
    return element.classList;
  },

  setCSSStyleProperty(element, name, value) {
    element.style.setProperty(name, value);
  },

  getBoundingClientRect(element) {
    return element.getBoundingClientRect();
  },

  querySelector(element, selectors) {
    return element.querySelector(selectors);
  },

  querySelectorAll(element, selectors) {
    return element.querySelectorAll(selectors);
  },

  getElementsByTagName(element, tagNameOrWildCard) {
    return element.getElementsByTagName(tagNameOrWildCard);
  },

  getElementsByClassName(element, names) {
    return element.getElementsByClassName(names);
  },

  isConnected(node) {
    return node.isConnected;
  },

  insertGlobalStylesheet(content) {
    if (!isUndefined(globalStylesheets[content])) {
      return;
    }

    globalStylesheets[content] = true;
    const elm = document.createElement('style');
    elm.type = 'text/css';
    elm.textContent = content;
    globalStylesheetsParentElement.appendChild(elm);
  },

  assertInstanceOfHTMLElement(elm, msg) {
    assert.invariant(elm instanceof HTMLElement, msg);
  },

  defineCustomElement,
  getCustomElement,
  HTMLElement: HTMLElementConstructor$1
};

function buildCustomElementConstructor(Ctor) {
  const def = getComponentInternalDef(Ctor);
  return class extends def.bridge {
    constructor() {
      super();
      createVM(this, def, {
        mode: 'open',
        owner: null,
        tagName: this.tagName,
        renderer
      });
    }

    connectedCallback() {
      connectRootElement(this);
    }

    disconnectedCallback() {
      disconnectRootElement(this);
    }

  };
}

const ConnectingSlot = createHiddenField('connecting', 'engine');
const DisconnectingSlot = createHiddenField('disconnecting', 'engine');

function callNodeSlot(node, slot) {
  {
    assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
  }

  const fn = getHiddenField(node, slot);

  if (!isUndefined(fn)) {
    fn(node);
  }

  return node;
}

const {
  appendChild,
  insertBefore,
  removeChild,
  replaceChild
} = Node.prototype;
assign(Node.prototype, {
  appendChild(newChild) {
    const appendedNode = appendChild.call(this, newChild);
    return callNodeSlot(appendedNode, ConnectingSlot);
  },

  insertBefore(newChild, referenceNode) {
    const insertedNode = insertBefore.call(this, newChild, referenceNode);
    return callNodeSlot(insertedNode, ConnectingSlot);
  },

  removeChild(oldChild) {
    const removedNode = removeChild.call(this, oldChild);
    return callNodeSlot(removedNode, DisconnectingSlot);
  },

  replaceChild(newChild, oldChild) {
    const replacedNode = replaceChild.call(this, newChild, oldChild);
    callNodeSlot(replacedNode, DisconnectingSlot);
    callNodeSlot(newChild, ConnectingSlot);
    return replacedNode;
  }

});

function createElement(sel, options) {
  if (!isObject$1(options) || isNull(options)) {
    throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString(options)}".`);
  }

  const Ctor = options.is;

  if (!isFunction(Ctor)) {
    throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);
  }

  const UpgradableConstructor = getUpgradableConstructor(sel, renderer);
  let wasComponentUpgraded = false;
  const element = new UpgradableConstructor(elm => {
    const def = getComponentInternalDef(Ctor);
    createVM(elm, def, {
      tagName: sel,
      mode: options.mode !== 'closed' ? 'open' : 'closed',
      owner: null,
      renderer
    });
    setHiddenField(elm, ConnectingSlot, connectRootElement);
    setHiddenField(elm, DisconnectingSlot, disconnectRootElement);
    wasComponentUpgraded = true;
  });

  if (!wasComponentUpgraded) {
    console.error(`Unexpected tag name "${sel}". This name is a registered custom element, preventing LWC to upgrade the element.`);
  }

  return element;
}

const ComponentConstructorToCustomElementConstructorMap = new Map();

function getCustomElementConstructor(Ctor) {
  if (Ctor === BaseLightningElement) {
    throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
  }

  let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);

  if (isUndefined(ce)) {
    ce = buildCustomElementConstructor(Ctor);
    ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
  }

  return ce;
}

defineProperty(BaseLightningElement, 'CustomElementConstructor', {
  get() {
    return getCustomElementConstructor(this);
  }

});
freeze(BaseLightningElement);
seal(BaseLightningElement.prototype);

function stylesheet$2(hostSelector, shadowSelector, nativeShadow) {
  return [".center", shadowSelector, " {text-align: center;}.link", shadowSelector, " {border: none;padding: 10px;border-radius: 5px;text-decoration: none;background-color: #ff6000;color: white;margin-left: 33%;margin-right: 33%;display: inline-block;margin-top: 1em;}.info", shadowSelector, " {color: black;background-color: #e4f2f8;margin: auto;padding: 15px 10px;text-align: left;width: 300px;border-radius: 5px;}.code", shadowSelector, " {font-family: monospace;}.container", shadowSelector, " {margin-top: 30px;}img", shadowSelector, " {max-width: 150px;}.greeting", shadowSelector, " {height: 75px;}.slds-button-group", shadowSelector, " button", shadowSelector, " {text-transform: uppercase;}"].join('');
}
var _implicitStylesheets$2 = [stylesheet$2];

var _tmpl$4 = void 0;

const LWCC = 'lwcc';
const DATA_EVENT_NAME = `${LWCC}data`;
const DISCONNECT_EVENT_NAME = `${LWCC}disconnect`;
const ERROR_EVENT_NAME = `${LWCC}error`;
const OPTION_EVENT_NAME = `${LWCC}option`;
const ATTRIBUTE_ANIMATION = 'animation';
const ATTRIBUTE_CARTESIAN_AXES = 'scales';
const ATTRIBUTE_DATA = 'data';
const ATTRIBUTE_ELEMENTS = 'elements';
const ATTRIBUTE_LEGEND = 'legend';
const ATTRIBUTE_TITLE = 'title';
const ATTRIBUTE_TOOLTIPS = 'tooltips';
const CARTESIAN_AXIS_TYPE_CATEGORY = 'category';
const CARTESIAN_AXIS_TYPE_LINEAR = 'linear';
const CARTESIAN_AXIS_TYPE_TIME = 'time';

class ReactivityManager {
  constructor() {
    this._ready = false;
  }

  registerJob(cb) {
    this.job = cb;
  }

  throttleRegisteredJob() {
    if (!this._ready) {
      this._ready = true;
      Promise.resolve().then(() => {
        if (this._ready) {
          this._ready = false;

          if (typeof this.job === 'function') {
            this.job();
          }
        }
      });
    }
  }

  getReactivityProxy() {
    const reactivityProxy = {
      set: (obj, prop, value) => {
        if (obj[prop] !== value) {
          obj[prop] = value;
          this.throttleRegisteredJob();
        }

        return true;
      }
    };
    return new Proxy({}, reactivityProxy);
  }

}

var ReactivityManager$1 = registerComponent(ReactivityManager, {
  tmpl: _tmpl$4
});

class BaseAttribute extends BaseLightningElement {
  constructor() {
    super();
    this._eventName = OPTION_EVENT_NAME;
    this._reactivityManager = new ReactivityManager$1();

    this._reactivityManager.registerJob(() => this.dispatchOption());

    this._payload = this._reactivityManager.getReactivityProxy();
  }

  connectedCallback() {
    this._parent = this.template.host.parentNode;
  }

  disconnectedCallback() {
    this._parent.dispatchEvent(new CustomEvent(DISCONNECT_EVENT_NAME, {
      bubbles: true,
      detail: {
        option: this._option,
        payload: this._payload
      }
    }));
  }

  dispatchOption() {
    this.dispatchEvent(new CustomEvent(this._eventName, {
      bubbles: true,
      detail: {
        option: this._option,
        payload: this._payload
      }
    }));
  }

}

var BaseAttribute$1 = registerComponent(BaseAttribute, {
  tmpl: _tmpl$4
});

let nanoid = (t = 21) => {
  let e = '',
      r = crypto.getRandomValues(new Uint8Array(t));

  for (; t--;) {
    let n = 63 & r[t];
    e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? '_' : '-';
  }

  return e;
};

function sanitize(attribute) {
  let value = attribute;

  if (value) {
    try {
      value = JSON.parse(value.replace(/\\/g, ''));
    } catch (e) {}
  }

  return value;
}
function parseBoolean(value) {
  return typeof value == 'string' ? value === 'true' : value;
}

class Data extends BaseAttribute$1 {
  get backgroundcolor() {
    return this._payload.backgroundColor;
  }

  set backgroundcolor(v) {
    this._payload.backgroundColor = sanitize(v);
  }

  get bordercapstyle() {
    return this._payload.borderCapStyle;
  }

  set bordercapstyle(v) {
    this._payload.borderCapStyle = v;
  }

  get bordercolor() {
    return this._payload.borderColor;
  }

  set bordercolor(v) {
    this._payload.borderColor = sanitize(v);
  }

  get borderdash() {
    return this._payload.borderDash;
  }

  set borderdash(v) {
    this._payload.borderDash = v;
  }

  get borderdashoffset() {
    return this._payload.borderDashOffset;
  }

  set borderdashoffset(v) {
    this._payload.borderDashOffset = v;
  }

  get borderjoinstyle() {
    return this._payload.borderJoinStyle;
  }

  set borderjoinstyle(v) {
    this._payload.borderJoinStyle = v;
  }

  get borderwidth() {
    return this._payload.borderWidth;
  }

  set borderwidth(v) {
    this._payload.borderWidth = v;
  }

  get hoverbackgroundcolor() {
    return this._payload.hoverBackgroundColor;
  }

  set hoverbackgroundcolor(v) {
    this._payload.hoverBackgroundColor = sanitize(v);
  }

  get hoverbordercapstyle() {
    return this._payload.hoverBorderCapStyle;
  }

  set hoverbordercapstyle(v) {
    this._payload.hoverBorderCapStyle = v;
  }

  get hoverbordercolor() {
    return this._payload.hoverBorderColor;
  }

  set hoverbordercolor(v) {
    this._payload.hoverBorderColor = sanitize(v);
  }

  get hoverborderdash() {
    return this._payload.hoverBorderDash;
  }

  set hoverborderdash(v) {
    this._payload.hoverBorderDash = v;
  }

  get hoverborderdashoffset() {
    return this._payload.hoverBorderDashOffset;
  }

  set hoverborderdashoffset(v) {
    this._payload.hoverBorderDashOffset = v;
  }

  get hoverborderjoinstyle() {
    return this._payload.hoverBorderJoinStyle;
  }

  set hoverborderjoinstyle(v) {
    this._payload.hoverBorderJoinStyle = v;
  }

  get hoverborderwidth() {
    return this._payload.hoverBorderWidth;
  }

  set hoverborderwidth(v) {
    this._payload.hoverBorderWidth = v;
  }

  get fill() {
    return this._payload.fill;
  }

  set fill(v) {
    this._payload.fill = parseBoolean(v);
  }

  get label() {
    return this._payload.label;
  }

  set label(v) {
    this._payload.label = v;
  }

  get linetension() {
    return this._payload.lineTension;
  }

  set linetension(v) {
    this._payload.lineTension = v;
  }

  get pointbackgroundcolor() {
    return this._payload.pointBackgroundColor;
  }

  set pointbackgroundcolor(v) {
    this._payload.pointBackgroundColor = sanitize(v);
  }

  get pointbordercolor() {
    return this._payload.pointBorderColor;
  }

  set pointbordercolor(v) {
    this._payload.pointBorderColor = sanitize(v);
  }

  get pointborderwidth() {
    return this._payload.pointBorderWidth;
  }

  set pointborderwidth(v) {
    this._payload.pointBorderWidth = v;
  }

  get pointhitradius() {
    return this._payload.pointHitRadius;
  }

  set pointhitradius(v) {
    this._payload.pointHitRadius = v;
  }

  get pointhoverbackgroundcolor() {
    return this._payload.pointHoverBackgroundColor;
  }

  set pointhoverbackgroundcolor(v) {
    this._payload.pointHoverBackgroundColor = sanitize(v);
  }

  get pointhoverbordercolor() {
    return this._payload.pointHoverBorderColor;
  }

  set pointhoverbordercolor(v) {
    this._payload.pointHoverBorderColor = sanitize(v);
  }

  get pointhoverborderwidth() {
    return this._payload.pointHoverBorderWidth;
  }

  set pointhoverborderwidth(v) {
    this._payload.pointHoverBorderWidth = v;
  }

  get pointhoverradius() {
    return this._payload.pointHoverRadius;
  }

  set pointhoverradius(v) {
    this._payload.pointHoverRadius = v;
  }

  get pointradius() {
    return this._payload.pointRadius;
  }

  set pointradius(v) {
    this._payload.pointRadius = v;
  }

  get pointrotation() {
    return this._payload.pointRotation;
  }

  set pointrotation(v) {
    this._payload.pointRotation = v;
  }

  get pointstyle() {
    return this._payload.pointStyle;
  }

  set pointstyle(v) {
    this._payload.pointStyle = v;
  }

  get spangaps() {
    return this._payload.spanGaps;
  }

  set spangaps(v) {
    this._payload.spanGaps = parseBoolean(v);
  }

  get stack() {
    return this._payload.stack;
  }

  set stack(v) {
    this._payload.stack = v;
  }

  get cubicinterpolationmode() {
    return this._payload.cubicInterpolationMode;
  }

  set cubicinterpolationmode(v) {
    this._payload.cubicInterpolationMode = v;
  }

  get clip() {
    return this._payload.clip;
  }

  set clip(v) {
    this._payload.clip = sanitize(v);
  }

  get showline() {
    return this._payload.showLine;
  }

  set showline(v) {
    this._payload.showLine = parseBoolean(v);
  }

  get steppedline() {
    return this._payload.steppedLine;
  }

  set steppedline(v) {
    this._payload.steppedLine = parseBoolean(v);
  }

  get xaxisid() {
    return this._payload.xAxisID;
  }

  set xaxisid(v) {
    this._payload.xAxisID = v;
  }

  get yaxisid() {
    return this._payload.yAxisID;
  }

  set yaxisid(v) {
    this._payload.yAxisID = v;
  }

  get borderskipped() {
    return this._payload.borderSkipped;
  }

  set borderskipped(v) {
    this._payload.borderSkipped = v;
  }

  get borderalign() {
    return this._payload.borderAlign;
  }

  set borderalign(v) {
    this._payload.borderAlign = v;
  }

  get weight() {
    return this._payload.weight;
  }

  set weight(v) {
    this._payload.weight = v;
  }

  get hoverradius() {
    return this._payload.hoverRadius;
  }

  set hoverradius(v) {
    this._payload.hoverRadius = v;
  }

  get hitradius() {
    return this._payload.hitRadius;
  }

  set hitradius(v) {
    this._payload.hitRadius = v;
  }

  get rotation() {
    return this._payload.rotation;
  }

  set rotation(v) {
    this._payload.rotation = v;
  }

  get radius() {
    return this._payload.radius;
  }

  set radius(v) {
    this._payload.radius = v;
  }

  get type() {
    return this._payload.type;
  }

  set type(v) {
    this._payload.type = v;
  }

  get detail() {
    return this._payload.data;
  }

  set detail(v) {
    this._payload.data = sanitize(v);
  }

  get order() {
    return this._payload.order;
  }

  set order(v) {
    this._payload.order = Number.parseInt(v, 10);
  }

  constructor() {
    super();
    this._eventName = DATA_EVENT_NAME;
    this._payload.uuid = nanoid(10);
    this._option = ATTRIBUTE_DATA;
  }

}

registerDecorators(Data, {
  publicProps: {
    backgroundcolor: {
      config: 3
    },
    bordercapstyle: {
      config: 3
    },
    bordercolor: {
      config: 3
    },
    borderdash: {
      config: 3
    },
    borderdashoffset: {
      config: 3
    },
    borderjoinstyle: {
      config: 3
    },
    borderwidth: {
      config: 3
    },
    hoverbackgroundcolor: {
      config: 3
    },
    hoverbordercapstyle: {
      config: 3
    },
    hoverbordercolor: {
      config: 3
    },
    hoverborderdash: {
      config: 3
    },
    hoverborderdashoffset: {
      config: 3
    },
    hoverborderjoinstyle: {
      config: 3
    },
    hoverborderwidth: {
      config: 3
    },
    fill: {
      config: 3
    },
    label: {
      config: 3
    },
    linetension: {
      config: 3
    },
    pointbackgroundcolor: {
      config: 3
    },
    pointbordercolor: {
      config: 3
    },
    pointborderwidth: {
      config: 3
    },
    pointhitradius: {
      config: 3
    },
    pointhoverbackgroundcolor: {
      config: 3
    },
    pointhoverbordercolor: {
      config: 3
    },
    pointhoverborderwidth: {
      config: 3
    },
    pointhoverradius: {
      config: 3
    },
    pointradius: {
      config: 3
    },
    pointrotation: {
      config: 3
    },
    pointstyle: {
      config: 3
    },
    spangaps: {
      config: 3
    },
    stack: {
      config: 3
    },
    cubicinterpolationmode: {
      config: 3
    },
    clip: {
      config: 3
    },
    showline: {
      config: 3
    },
    steppedline: {
      config: 3
    },
    xaxisid: {
      config: 3
    },
    yaxisid: {
      config: 3
    },
    borderskipped: {
      config: 3
    },
    borderalign: {
      config: 3
    },
    weight: {
      config: 3
    },
    hoverradius: {
      config: 3
    },
    hitradius: {
      config: 3
    },
    rotation: {
      config: 3
    },
    radius: {
      config: 3
    },
    type: {
      config: 3
    },
    detail: {
      config: 3
    },
    order: {
      config: 3
    }
  }
});

var _cData = registerComponent(Data, {
  tmpl: _tmpl$4
});

function tmpl$3($api, $cmp, $slotset, $ctx) {
  const {s: api_slot} = $api;
  return [api_slot("", {
    key: 0
  }, [], $slotset)];
}
var _tmpl$3 = registerTemplate(tmpl$3);
tmpl$3.slots = [""];
tmpl$3.stylesheets = [];
tmpl$3.stylesheetTokens = {
  hostAttribute: "c-dataset_dataset-host",
  shadowAttribute: "c-dataset_dataset"
};

class Dataset extends BaseAttribute$1 {
  get labels() {
    return this._payload.labels;
  }

  set labels(v) {
    this._payload.labels = sanitize(v);
  }

  constructor() {
    super();
    this._listenerHandlers = {
      handleDataChange: evt => {
        evt.stopPropagation();
        this._details[evt.detail.payload.uuid] = evt.detail.payload;
        this._payload.datasets = Object.values(this._details);
      },
      handleDataDeletion: evt => {
        evt.stopPropagation();
        delete this._details[evt.detail.payload.uuid];
        this._payload.datasets = Object.values(this._details);
      }
    };
    this._details = {};
    this._payload.datasets = [];
    this._option = ATTRIBUTE_DATA;
  }

  connectedCallback() {
    this.addEventListener(DATA_EVENT_NAME, this._listenerHandlers.handleDataChange);
    this.addEventListener(DISCONNECT_EVENT_NAME, this._listenerHandlers.handleDataDeletion);
  }

  disconnectedCallback() {
    this.removeEventListener(DATA_EVENT_NAME, this._listenerHandlers.handleDataChange);
    this.removeEventListener(DISCONNECT_EVENT_NAME, this._listenerHandlers.handleDataDeletion);
  }

}

registerDecorators(Dataset, {
  publicProps: {
    labels: {
      config: 3
    }
  },
  fields: ["_listenerHandlers"]
});

var _cDataset = registerComponent(Dataset, {
  tmpl: _tmpl$3
});

class Title extends BaseAttribute$1 {
  get display() {
    return this._payload.display;
  }

  set display(v) {
    this._payload.display = parseBoolean(v);
  }

  get position() {
    return this._payload.position;
  }

  set position(v) {
    this._payload.position = v;
  }

  get fontsize() {
    return this._payload.fontSize;
  }

  set fontsize(v) {
    this._payload.fontSize = v;
  }

  get fontfamily() {
    return this._payload.fontFamily;
  }

  set fontfamily(v) {
    this._payload.fontFamily = v;
  }

  get fontcolor() {
    return this._payload.fontColor;
  }

  set fontcolor(v) {
    this._payload.fontColor = v;
  }

  get fontstyle() {
    return this._payload.fontStyle;
  }

  set fontstyle(v) {
    this._payload.fontStyle = v;
  }

  get padding() {
    return this._payload.padding;
  }

  set padding(v) {
    this._payload.padding = v;
  }

  get lineheight() {
    return this._payload.lineHeight;
  }

  set lineheight(v) {
    this._payload.lineHeight = v;
  }

  get text() {
    return this._payload.text;
  }

  set text(v) {
    this._payload.text = v;
  }

  constructor() {
    super();
    this._payload.display = true;
    this._option = ATTRIBUTE_TITLE;
  }

}

registerDecorators(Title, {
  publicProps: {
    display: {
      config: 3
    },
    position: {
      config: 3
    },
    fontsize: {
      config: 3
    },
    fontfamily: {
      config: 3
    },
    fontcolor: {
      config: 3
    },
    fontstyle: {
      config: 3
    },
    padding: {
      config: 3
    },
    lineheight: {
      config: 3
    },
    text: {
      config: 3
    }
  }
});

var _cTitle = registerComponent(Title, {
  tmpl: _tmpl$4
});

class Legend extends BaseAttribute$1 {
  get display() {
    return this._payload.display;
  }

  set display(v) {
    this._payload.display = parseBoolean(v);
  }

  get position() {
    return this._payload.position;
  }

  set position(v) {
    this._payload.position = v;
  }

  get align() {
    return this._payload.align;
  }

  set align(v) {
    this._payload.align = v;
  }

  get fullwidth() {
    return this._payload.fullWidth;
  }

  set fullwidth(v) {
    this._payload.fullWidth = parseBoolean(v);
  }

  get reverse() {
    return this._payload.reverse;
  }

  set reverse(v) {
    this._payload.reverse = parseBoolean(v);
  }

  get rtl() {
    return this._payload.rtl;
  }

  set rtl(v) {
    this._payload.rtl = parseBoolean(v);
  }

  get textdirection() {
    return this._payload.textDirection;
  }

  set textdirection(v) {
    this._payload.textDirection = v;
  }

  get labelBoxwidth() {
    return this._payload.labels.boxWidth;
  }

  set labelBoxwidth(v) {
    this._payload.labels.boxWidth = v;
  }

  get labelFontsize() {
    return this._payload.labels.fontSize;
  }

  set labelFontsize(v) {
    this._payload.labels.fontSize = v;
  }

  get labelFontstyle() {
    return this._payload.labels.fontStyle;
  }

  set labelFontstyle(v) {
    this._payload.labels.fontStyle = v;
  }

  get labelFontcolor() {
    return this._payload.labels.fontColor;
  }

  set labelFontcolor(v) {
    this._payload.labels.fontColor = v;
  }

  get labelFontfamily() {
    return this._payload.labels.fontFamily;
  }

  set labelFontfamily(v) {
    this._payload.labels.fontFamily = v;
  }

  get labelPadding() {
    return this._payload.labels.padding;
  }

  set labelPadding(v) {
    this._payload.labels.padding = v;
  }

  get labelUsepointstyle() {
    return this._payload.labels.usePointStyle;
  }

  set labelUsepointstyle(v) {
    this._payload.labels.usePointStyle = parseBoolean(v);
  }

  get labelCallbackOnclick() {
    return this._payload.labels.onClick;
  }

  set labelCallbackOnclick(v) {
    this._payload.labels.onClick = v;
  }

  get labelCallbackOnhover() {
    return this._payload.labels.onHover;
  }

  set labelCallbackOnhover(v) {
    this._payload.labels.onHover = v;
  }

  get labelCallbackOnleave() {
    return this._payload.labels.onLeave;
  }

  set labelCallbackOnleave(v) {
    this._payload.labels.onLeave = v;
    this._callbackOnleave = v;
  }

  get labelCallbackGeneratelabels() {
    return this._payload.labels.generateLabels;
  }

  set labelCallbackGeneratelabels(v) {
    this._payload.labels.generateLabels = v;
  }

  get labelCallbackFilter() {
    return this._payload.labels.filter;
  }

  set labelCallbackFilter(v) {
    this._payload.labels.filter = v;
  }

  constructor() {
    super();
    this._payload.display = true;
    this._payload.labels = {};
    this._option = ATTRIBUTE_LEGEND;
  }

}

registerDecorators(Legend, {
  publicProps: {
    display: {
      config: 3
    },
    position: {
      config: 3
    },
    align: {
      config: 3
    },
    fullwidth: {
      config: 3
    },
    reverse: {
      config: 3
    },
    rtl: {
      config: 3
    },
    textdirection: {
      config: 3
    },
    labelBoxwidth: {
      config: 3
    },
    labelFontsize: {
      config: 3
    },
    labelFontstyle: {
      config: 3
    },
    labelFontcolor: {
      config: 3
    },
    labelFontfamily: {
      config: 3
    },
    labelPadding: {
      config: 3
    },
    labelUsepointstyle: {
      config: 3
    },
    labelCallbackOnclick: {
      config: 3
    },
    labelCallbackOnhover: {
      config: 3
    },
    labelCallbackOnleave: {
      config: 3
    },
    labelCallbackGeneratelabels: {
      config: 3
    },
    labelCallbackFilter: {
      config: 3
    }
  }
});

var _cLegend = registerComponent(Legend, {
  tmpl: _tmpl$4
});

class Animation extends BaseAttribute$1 {
  get duration() {
    return this._payload.duration;
  }

  set duration(v) {
    this._payload.duration = v;
  }

  get easing() {
    return this._payload.easing;
  }

  set easing(v) {
    this._payload.easing = v;
  }

  get callbackOncomplete() {
    return this._payload.onComplete;
  }

  set callbackOncomplete(v) {
    this._payload.onComplete = v;
  }

  get callbackOnprogress() {
    return this._payload.onProgress;
  }

  set callbackOnprogress(v) {
    this._payload.onProgress = v;
  }

  constructor() {
    super();
    this._option = ATTRIBUTE_ANIMATION;
  }

}

registerDecorators(Animation, {
  publicProps: {
    duration: {
      config: 3
    },
    easing: {
      config: 3
    },
    callbackOncomplete: {
      config: 3
    },
    callbackOnprogress: {
      config: 3
    }
  }
});

var _cAnimation = registerComponent(Animation, {
  tmpl: _tmpl$4
});

class BaseAxis extends BaseAttribute$1 {
  get display() {
    return this._content.display;
  }

  set display(v) {
    this._content.display = parseBoolean(v);
  }

  get weight() {
    return this._content.weight;
  }

  set weight(v) {
    this._content.weight = v;
  }

  get ticksCallback() {
    this._content.ticks = this._content.ticks || {};
    return this._content.ticks.callback;
  }

  set ticksCallback(v) {
    this._content.ticks = this._content.ticks || {};
    this._content.ticks.callback = v;
  }

  get callbackBeforeupdate() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeUpdate;
  }

  set callbackBeforeupdate(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeUpdate = v;
  }

  get callbackBeforesetdimensions() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeSetDimensions;
  }

  set callbackBeforesetdimensions(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeSetDimensions = v;
  }

  get callbackAftersetdimensions() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterSetDimensions;
  }

  set callbackAftersetdimensions(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterSetDimensions = v;
  }

  get callbackBeforedatalimits() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeDataLimits;
  }

  set callbackBeforedatalimits(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeDataLimits = v;
  }

  get callbackAfterdatalimits() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterDataLimits;
  }

  set callbackAfterdatalimits(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterDataLimits = v;
  }

  get callbackBeforebuildticks() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeBuildTicks;
  }

  set callbackBeforebuildticks(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeBuildTicks = v;
  }

  get callbackAfterbuildticks() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterBuildTicks;
  }

  set callbackAfterbuildticks(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterBuildTicks = v;
  }

  get callbackBeforeticktolabelconversion() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeTickToLabelConversion;
  }

  set callbackBeforeticktolabelconversion(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeTickToLabelConversion = v;
  }

  get callbackAfterticktolabelconversion() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterTickToLabelConversion;
  }

  set callbackAfterticktolabelconversion(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterTickToLabelConversion = v;
  }

  get callbackBeforecalculatetickrotation() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeCalculateTickRotation;
  }

  set callbackBeforecalculatetickrotation(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeCalculateTickRotation = v;
  }

  get callbackAftercalculatetickrotation() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterCalculateTickRotation;
  }

  set callbackAftercalculatetickrotation(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterCalculateTickRotation = v;
  }

  get callbackBeforefit() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeFit;
  }

  set callbackBeforefit(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeFit = v;
  }

  get callbackAfterfit() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterFit;
  }

  set callbackAfterfit(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterFit = v;
  }

  get callbackAfterupdate() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterUpdate;
  }

  set callbackAfterupdate(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterUpdate = v;
  }

  constructor() {
    super();
    this._content = this._payload;
  }

}

registerDecorators(BaseAxis, {
  publicProps: {
    display: {
      config: 3
    },
    weight: {
      config: 3
    },
    ticksCallback: {
      config: 3
    },
    callbackBeforeupdate: {
      config: 3
    },
    callbackBeforesetdimensions: {
      config: 3
    },
    callbackAftersetdimensions: {
      config: 3
    },
    callbackBeforedatalimits: {
      config: 3
    },
    callbackAfterdatalimits: {
      config: 3
    },
    callbackBeforebuildticks: {
      config: 3
    },
    callbackAfterbuildticks: {
      config: 3
    },
    callbackBeforeticktolabelconversion: {
      config: 3
    },
    callbackAfterticktolabelconversion: {
      config: 3
    },
    callbackBeforecalculatetickrotation: {
      config: 3
    },
    callbackAftercalculatetickrotation: {
      config: 3
    },
    callbackBeforefit: {
      config: 3
    },
    callbackAfterfit: {
      config: 3
    },
    callbackAfterupdate: {
      config: 3
    }
  }
});

var BaseAxis$1 = registerComponent(BaseAxis, {
  tmpl: _tmpl$4
});

class CartesianAxis extends BaseAxis$1 {
  get axis() {
    return this._axis === 'yAxes' ? 'y' : this._axis === 'xAxes' ? 'x' : null;
  }

  set axis(v) {
    if (this._axis[0] === v) {
      return;
    }

    this._axis = v === 'y' ? 'yAxes' : v === 'x' ? 'xAxes' : null;
    const otherAxe = v === 'y' ? 'xAxes' : v === 'x' ? 'yAxes' : null;

    if (otherAxe) {
      this._payload[this._axis] = this._payload[otherAxe] || [{}];
      this._content = this._payload[this._axis][0];
      this._payload[otherAxe] = undefined;
    }
  }

  get type() {
    return this._content.type;
  }

  set type(v) {
    this._content.type = v;
  }

  get position() {
    return this._content.position;
  }

  set position(v) {
    this._content.position = v;
  }

  get offset() {
    return this._content.offset;
  }

  set offset(v) {
    this._content.offset = parseBoolean(v);
  }

  get id() {
    return this._content.id;
  }

  set id(v) {}

  get axisid() {
    return this._content.id;
  }

  set axisid(v) {
    this._content.id = v;
  }

  get ticksMin() {
    return this._content.ticks.min;
  }

  set ticksMin(v) {
    this._content.ticks.min = Number(v) || v;
  }

  get ticksMax() {
    return this._content.ticks.max;
  }

  set ticksMax(v) {
    this._content.ticks.max = Number(v) || v;
  }

  get ticksSamplesize() {
    return this._content.ticks.sampleSize;
  }

  set ticksSamplesize(v) {
    this._content.ticks.sampleSize = Number(v);
  }

  get ticksAutoskip() {
    return this._content.ticks.autoSkip;
  }

  set ticksAutoskip(v) {
    this._content.ticks.autoSkip = parseBoolean(v);
  }

  get ticksAutoskippadding() {
    return this._content.ticks.autoSkipPadding;
  }

  set ticksAutoskippadding(v) {
    this._content.ticks.autoSkipPadding = Number(v);
  }

  get ticksLabeloffset() {
    return this._content.ticks.labelOffset;
  }

  set ticksLabeloffset(v) {
    this._content.ticks.labelOffset = Number(v);
  }

  get ticksMaxrotation() {
    return this._content.ticks.maxRotation;
  }

  set ticksMaxrotation(v) {
    this._content.ticks.maxRotation = Number(v);
  }

  get ticksMinrotation() {
    return this._content.ticks.minRotation;
  }

  set ticksMinrotation(v) {
    this._content.ticks.minRotation = Number(v);
  }

  get ticksMirror() {
    return this._content.ticks.mirror;
  }

  set ticksMirror(v) {
    this._content.ticks.mirror = parseBoolean(v);
  }

  get ticksPadding() {
    return this._content.ticks.padding;
  }

  set ticksPadding(v) {
    this._content.ticks.padding = Number(v);
  }

  get titleDisplay() {
    return this._content.scaleLabel.display;
  }

  set titleDisplay(v) {
    this._content.scaleLabel.display = parseBoolean(v);
  }

  get titleLabelstring() {
    return this._content.scaleLabel.labelString;
  }

  set titleLabelstring(v) {
    this._content.scaleLabel.labelString = v;
  }

  get titleLineheight() {
    return this._content.scaleLabel.lineHeight;
  }

  set titleLineheight(v) {
    this._content.scaleLabel.lineHeight = v;
  }

  get titleFontcolor() {
    return this._content.scaleLabel.fontColor;
  }

  set titleFontcolor(v) {
    this._content.scaleLabel.fontColor = v;
  }

  get titleFontfamily() {
    return this._content.scaleLabel.fontFamily;
  }

  set titleFontfamily(v) {
    this._content.scaleLabel.fontFamily = v;
  }

  get titleFontsize() {
    return this._content.scaleLabel.fontSize;
  }

  set titleFontsize(v) {
    this._content.scaleLabel.fontSize = Number(v);
  }

  get titleFontstyle() {
    return this._content.scaleLabel.fontStyle;
  }

  set titleFontstyle(v) {
    this._content.scaleLabel.fontStyle = v;
  }

  get titlePadding() {
    return this._content.scaleLabel.padding;
  }

  set titlePadding(v) {
    this._content.scaleLabel.padding = v;
  }

  get gridDisplay() {
    return this._content.gridLines.display;
  }

  set gridDisplay(v) {
    this._content.gridLines.display = parseBoolean(v);
  }

  get gridCircular() {
    return this._content.gridLines.circular;
  }

  set gridCircular(v) {
    this._content.gridLines.circular = parseBoolean(v);
  }

  get gridColor() {
    return this._content.gridLines.color;
  }

  set gridColor(v) {
    this._content.gridLines.color = v;
  }

  get gridBorderdash() {
    return this._content.gridLines.borderDash;
  }

  set gridBorderdash(v) {
    this._content.gridLines.borderDash = v;
  }

  get gridBorderdashoffset() {
    return this._content.gridLines.borderDashOffset;
  }

  set gridBorderdashoffset(v) {
    this._content.gridLines.borderDashOffset = Number(v);
  }

  get gridLinewidth() {
    return this._content.gridLines.lineWidth;
  }

  set gridLinewidth(v) {
    this._content.gridLines.lineWidth = v;
  }

  get gridDrawborder() {
    return this._content.gridLines.drawBorder;
  }

  set gridDrawborder(v) {
    this._content.gridLines.drawBorder = parseBoolean(v);
  }

  get gridDrawonchartarea() {
    return this._content.gridLines.drawOnChartArea;
  }

  set gridDrawonchartarea(v) {
    this._content.gridLines.drawOnChartArea = parseBoolean(v);
  }

  get gridDrawticks() {
    return this._content.gridLines.drawTicks;
  }

  set gridDrawticks(v) {
    this._content.gridLines.drawTicks = parseBoolean(v);
  }

  get gridTickmarklength() {
    return this._content.gridLines.tickMarkLength;
  }

  set gridTickmarklength(v) {
    this._content.gridLines.tickMarkLength = Number(v);
  }

  get gridZerolinewidth() {
    return this._content.gridLines.zeroLineWidth;
  }

  set gridZerolinewidth(v) {
    this._content.gridLines.zeroLineWidth = Number(v);
  }

  get gridZerolinecolor() {
    return this._content.gridLines.zeroLineColor;
  }

  set gridZerolinecolor(v) {
    this._content.gridLines.zeroLineColor = v;
  }

  get gridZerolineborderdash() {
    return this._content.gridLines.zeroLineBorderDash;
  }

  set gridZerolineborderdash(v) {
    this._content.gridLines.zeroLineBorderDash = v;
  }

  get gridZerolineborderdashoffset() {
    return this._content.gridLines.zeroLineBorderDashOffset;
  }

  set gridZerolineborderdashoffset(v) {
    this._content.gridLines.zeroLineBorderDashOffset = Number(v);
  }

  get gridOffsetgridlines() {
    return this._content.gridLines.offsetGridLines;
  }

  set gridOffsetgridlines(v) {
    this._content.gridLines.offsetGridLines = parseBoolean(v);
  }

  get gridZ() {
    return this._content.gridLines.z;
  }

  set gridZ(v) {
    this._content.gridLines.z = Number(v);
  }

  get stacked() {
    return this._content.stacked;
  }

  set stacked(v) {
    this._content.stacked = parseBoolean(v);
  }

  constructor() {
    super();
    this._axis = 'yAxes';
    this._payload[this._axis] = [{}];
    this._content = this._payload[this._axis][0];
    this._content.uuid = nanoid(10);
    this._content.gridLines = {};
    this._content.scaleLabel = {};
    this._content.ticks = {};
    this._option = ATTRIBUTE_CARTESIAN_AXES;
  }

}

registerDecorators(CartesianAxis, {
  publicProps: {
    axis: {
      config: 3
    },
    type: {
      config: 3
    },
    position: {
      config: 3
    },
    offset: {
      config: 3
    },
    id: {
      config: 3
    },
    axisid: {
      config: 3
    },
    ticksMin: {
      config: 3
    },
    ticksMax: {
      config: 3
    },
    ticksSamplesize: {
      config: 3
    },
    ticksAutoskip: {
      config: 3
    },
    ticksAutoskippadding: {
      config: 3
    },
    ticksLabeloffset: {
      config: 3
    },
    ticksMaxrotation: {
      config: 3
    },
    ticksMinrotation: {
      config: 3
    },
    ticksMirror: {
      config: 3
    },
    ticksPadding: {
      config: 3
    },
    titleDisplay: {
      config: 3
    },
    titleLabelstring: {
      config: 3
    },
    titleLineheight: {
      config: 3
    },
    titleFontcolor: {
      config: 3
    },
    titleFontfamily: {
      config: 3
    },
    titleFontsize: {
      config: 3
    },
    titleFontstyle: {
      config: 3
    },
    titlePadding: {
      config: 3
    },
    gridDisplay: {
      config: 3
    },
    gridCircular: {
      config: 3
    },
    gridColor: {
      config: 3
    },
    gridBorderdash: {
      config: 3
    },
    gridBorderdashoffset: {
      config: 3
    },
    gridLinewidth: {
      config: 3
    },
    gridDrawborder: {
      config: 3
    },
    gridDrawonchartarea: {
      config: 3
    },
    gridDrawticks: {
      config: 3
    },
    gridTickmarklength: {
      config: 3
    },
    gridZerolinewidth: {
      config: 3
    },
    gridZerolinecolor: {
      config: 3
    },
    gridZerolineborderdash: {
      config: 3
    },
    gridZerolineborderdashoffset: {
      config: 3
    },
    gridOffsetgridlines: {
      config: 3
    },
    gridZ: {
      config: 3
    },
    stacked: {
      config: 3
    }
  }
});

var _cCartesianAxis = registerComponent(CartesianAxis, {
  tmpl: _tmpl$4
});

class CartesianCategoryAxis extends _cCartesianAxis {
  get ticksLabels() {
    return this._content.ticks.labels;
  }

  set ticksLabels(v) {
    this._content.ticks.labels = v;
  }

  constructor() {
    super();
    this._content.type = CARTESIAN_AXIS_TYPE_CATEGORY;
  }

}

registerDecorators(CartesianCategoryAxis, {
  publicProps: {
    ticksLabels: {
      config: 3
    }
  }
});

var _cCartesianCategoryAxis = registerComponent(CartesianCategoryAxis, {
  tmpl: _tmpl$4
});

function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
  return (nativeShadow ? ":host {display: block;}" : [hostSelector, " {display: block;}"].join(''));
}
var _implicitStylesheets$1 = [stylesheet$1];

function tmpl$2($api, $cmp, $slotset, $ctx) {
  const {h: api_element, s: api_slot} = $api;
  return [api_element("div", {
    style: $cmp.chartStyle,
    attrs: {
      "role": "img",
      "aria-label": $cmp.ariaLabel
    },
    context: {
      lwc: {
        dom: "manual"
      }
    },
    key: 0
  }, []), api_slot("", {
    key: 1
  }, [], $slotset)];
}
var _tmpl$2 = registerTemplate(tmpl$2);
tmpl$2.slots = [""];
tmpl$2.stylesheets = [];


if (_implicitStylesheets$1) {
  tmpl$2.stylesheets.push.apply(tmpl$2.stylesheets, _implicitStylesheets$1);
}
tmpl$2.stylesheetTokens = {
  hostAttribute: "c-chart_chart-host",
  shadowAttribute: "c-chart_chart"
};

var ChartJS = './staticresources/chartjs_v280.js';

function loadScript(ctx, url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ChartConfigService {
  constructor() {
    this._config = _objectSpread({}, ChartConfigService.DEFAULT_CONFIGURATION);
    this._scales = {
      xAxes: {},
      yAxes: {}
    };
    this._dirty = true;
  }

  updateConfig(payload, option) {
    this._dirty = true;

    if (!option) {
      this._config = _objectSpread(_objectSpread({}, this._config), payload);
    } else {
      this._config[option] = this._config[option] || {};
      Object.keys(payload).forEach(attribut => {
        if (Array.isArray(this._config[option][attribut])) {
          if (Array.isArray(payload[attribut])) {
            if (Object.prototype.hasOwnProperty.call(this._scales, attribut)) {
              this._scales[attribut][payload[attribut][0].uuid] = payload[attribut][0];
              this._config[option][attribut] = Object.values(this._scales[attribut]);
            } else {
              this._config[option][attribut].push(...payload[attribut]);
            }
          } else {
            this._config[option][attribut].push(payload[attribut]);
          }
        } else if (typeof this._config[option][attribut] === 'object' && this._config[option][attribut] !== null) {
          this._config[option][attribut] = _objectSpread(_objectSpread({}, this._config[option][attribut]), payload[attribut]);
        } else {
          this._config[option][attribut] = payload[attribut];

          if (Object.prototype.hasOwnProperty.call(this._scales, attribut) && payload[attribut] !== undefined) {
            this._scales[attribut][payload[attribut][0].uuid] = payload[attribut][0];
          }
        }
      });
    }
  }

  removeConfig(payload, option) {
    this._dirty = true;

    if (option === ATTRIBUTE_CARTESIAN_AXES) {
      Object.keys(this._config[option]).filter(scale => this._config[option][scale]).forEach(scale => {
        this._config[option][scale] = this._config[option][scale].filter(axis => axis.uuid !== payload[scale][0].uuid);
        this._scales[scale] = this._config[option][scale];
      });
    } else {
      this._config[option] = undefined;
    }
  }

  getConfig() {
    if (this._dirty) {
      this._cleanConfig = ChartConfigService.cleanObject(this._config);
      this._dirty = false;
    }

    return this._cleanConfig;
  }

  static cleanObject(obj) {
    const validObj = o => (Object.keys(o).length || Array.isArray(o) && o.length) && o;

    const itemToBool = item => {
      return typeof item !== 'object' || item === null ? item : validObj(clean(item));
    };

    const clean = o => validObj(Array.isArray(o) ? o.map(itemToBool).filter(Boolean) : Object.entries(o).reduce((a, [key, val]) => {
      const newVal = itemToBool(val);
      if (newVal !== undefined && newVal !== null && typeof val === typeof newVal) a[key] = newVal;
      return a;
    }, {}));

    return clean(obj);
  }

}

ChartConfigService.DEFAULT_CONFIGURATION = {
  legend: {
    display: false
  }
};
var ChartConfigService$1 = registerComponent(ChartConfigService, {
  tmpl: _tmpl$4
});

class Chart extends BaseLightningElement {
  get uuid() {
    return this._uuid;
  }

  set uuid(v) {
    this._uuid = v;
  }

  get chartjsloadedCallback() {
    return this._chartjsLoadedCallback;
  }

  set chartjsloadedCallback(v) {
    this._chartjsLoadedCallback = v;

    this._callChartjsloadedCallback();
  }

  get canvasOnchange() {
    return this._canvasOnchange;
  }

  set canvasOnchange(v) {
    this.getCanvas().removeEventListener('mouseover', this._canvasOnchange);
    this._canvasOnchange = v;
    this.getCanvas().addEventListener('change', this._canvasOnchange);
  }

  get canvasOnclick() {
    return this._canvasOnclick;
  }

  set canvasOnclick(v) {
    this.getCanvas().removeEventListener('mouseover', this._canvas_canvasOnclickOnmouseover);
    this._canvasOnclick = v;
    this.getCanvas().addEventListener('click', this._canvasOnclick);
  }

  get canvasOnmouseover() {
    return this._canvasOnmouseover;
  }

  set canvasOnmouseover(v) {
    this.getCanvas().removeEventListener('mouseover', this._canvasOnmouseover);
    this._canvasOnmouseover = v;
    this.getCanvas().addEventListener('mouseover', this._canvasOnmouseover);
  }

  get canvasOnmouseout() {
    return this._canvasOnmouseout;
  }

  set canvasOnmouseout(v) {
    this.getCanvas().removeEventListener('mouseover', this._canvasOnmouseout);
    this._canvasOnmouseout = v;
    this.getCanvas().addEventListener('mouseout', this._canvasOnmouseout);
  }

  get responsive() {
    return this._payload.responsive;
  }

  set responsive(v) {
    this._payload.responsive = parseBoolean(v);
  }

  get responsiveanimationduration() {
    return this._payload.responsiveAnimationDuration;
  }

  set responsiveanimationduration(v) {
    this._payload.responsiveAnimationDuration = v;
  }

  get maintainaspectratio() {
    return this._payload.maintainAspectRatio;
  }

  set maintainaspectratio(v) {
    this._payload.maintainAspectRatio = parseBoolean(v);
  }

  get aspectratio() {
    return this._payload.aspectRatio;
  }

  set aspectratio(v) {
    this._payload.aspectRatio = v;
  }

  get callbackResize() {
    return this._payload.onResize;
  }

  set callbackResize(v) {
    this._payload.onResize = v;
  }

  get devicepixelratio() {
    return this._payload.pointHoverBorderColor;
  }

  set devicepixelratio(v) {
    this._payload.pointHoverBorderColor = v;
  }

  get events() {
    return this._payload.events;
  }

  set events(v) {
    this._payload.events = sanitize(v);
  }

  get callbackClick() {
    return this._payload.onClick;
  }

  set callbackClick(v) {
    this._payload.onClick = v;
  }

  get callbackHover() {
    return this._payload.onHover;
  }

  set callbackHover(v) {
    this._payload.onHover = v;
  }

  get type() {
    return this._type;
  }

  set type(v) {
    if (v !== this._type) {
      this._type = v;
      this.ariaLabel = this._payload[ATTRIBUTE_TITLE] && this._payload[ATTRIBUTE_TITLE].text ? this._payload[ATTRIBUTE_TITLE].text : `${this._type} chart`;
      this.destroyChart();

      this._reactivityManager.throttleRegisteredJob();
    }
  }

  get chartStyle() {
    return `width: ${this.width}; height: ${this.height}; ${this.stylecss || ''}`;
  }

  destroyChart() {
    if (this._chart) {
      this._chart.destroy();

      this._chart = null;
    }
  }

  updateChart(duration, lazy) {
    if (this._chart) {
      this._chart.update(duration, lazy);
    }
  }

  resetChart() {
    if (this._chart) {
      this._chart.reset();
    }
  }

  renderChart(duration, lazy) {
    if (this._chart) {
      this._chart.render(duration, lazy);
    }
  }

  stopChart() {
    if (this._chart) {
      this._chart.stop();
    }

    return this;
  }

  resizeChart() {
    if (this._chart) {
      this._chart.resize();
    }

    return this;
  }

  clearChart() {
    if (this._chart) {
      this._chart.clear();
    }

    return this;
  }

  toBase64ImageChart() {
    let res = null;

    if (this._chart) {
      res = this._chart.toBase64Image();
    }

    return res;
  }

  generateLegendChart() {
    let res = null;

    if (this._chart) {
      res = this._chart.generateLegend();
    }

    return res;
  }

  getElementAtEventChart(e) {
    let res = null;

    if (this._chart) {
      res = this._chart.getElementAtEvent(e);
    }

    return res;
  }

  getElementsAtEventChart(e) {
    let res = null;

    if (this._chart) {
      res = this._chart.getElementsAtEvent(e);
    }

    return res;
  }

  getDatasetAtEventChart(e) {
    let res = null;

    if (this._chart) {
      res = this._chart.getDatasetAtEvent(e);
    }

    return res;
  }

  getDatasetMetaChart(index) {
    let res = null;

    if (this._chart) {
      res = this._chart.getDatasetMeta(index);
    }

    return res;
  }

  constructor() {
    super();
    this.width = void 0;
    this.height = void 0;
    this.stylecss = void 0;
    this._uuid = nanoid(11);
    this._chartjsLoadedCallback = void 0;
    this._canvasOnchange = void 0;
    this._canvasOnclick = void 0;
    this._canvasOnmouseover = void 0;
    this._canvasOnmouseout = void 0;
    this.ariaLabel = void 0;
    this._listenerHandlers = {
      handleOption: evt => {
        evt.stopPropagation();
        const {
          payload,
          option
        } = evt.detail;

        if (option === ATTRIBUTE_DATA) {
          this._details = payload;
        } else {
          if (option === ATTRIBUTE_TITLE) {
            this.ariaLabel = payload.text;
          }

          this._configService.updateConfig(payload, option);
        }

        this._reactivityManager.throttleRegisteredJob();
      },
      handleDisconnect: evt => {
        evt.stopPropagation();
        const {
          payload,
          option
        } = evt.detail;

        if (option === ATTRIBUTE_DATA) {
          this._details = null;
          this.destroyChart();
        } else {
          if (option === ATTRIBUTE_TITLE) {
            this.ariaLabel = `${this._type} chart`;
          }

          this._configService.removeConfig(payload, option);

          this._reactivityManager.throttleRegisteredJob();
        }
      }
    };
    this._baseChartInitialized = false;
    this._chartjsLoaded = false;
    this._configService = new ChartConfigService$1();
    this._details = null;
    this._chart = null;
    this._reactivityManager = new ReactivityManager$1();

    this._reactivityManager.registerJob(() => this.drawChart());

    this._payload = this._reactivityManager.getReactivityProxy();
  }

  connectedCallback() {
    this.addEventListener(OPTION_EVENT_NAME, this._listenerHandlers.handleOption);
    this.addEventListener(DISCONNECT_EVENT_NAME, this._listenerHandlers.handleDisconnect);
  }

  disconnectedCallback() {
    this.removeEventListener(OPTION_EVENT_NAME, this._listenerHandlers.handleOption);
    this.removeEventListener(DISCONNECT_EVENT_NAME, this._listenerHandlers.handleDisconnect);
    this.destroyChart();
  }

  renderedCallback() {
    if (this._baseChartInitialized) {
      return;
    }

    this._baseChartInitialized = true;
    loadScript(this, ChartJS).then(() => {
      this._chartjsLoaded = true;

      this._callChartjsloadedCallback();

      this._reactivityManager.throttleRegisteredJob();
    }, reason => {
      this.errorCallback(reason);
    });
  }

  errorCallback(error, stack) {
    this.destroyChart();
    this.dispatchEvent(new CustomEvent(ERROR_EVENT_NAME, {
      bubbles: true,
      detail: {
        uuid: this.uuid,
        error: error,
        stack: stack
      }
    }));
  }

  getCanvas() {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas');
      this.template.querySelector('div').appendChild(this._canvas);
    }

    return this._canvas;
  }

  drawChart() {
    if (!this._isReadyToDraw()) return;

    try {
      this._configService.updateConfig(this._payload, null);

      if (!this._chart || !this._chart.ctx) {
        this._chart = new window.Chart(this.getCanvas().getContext('2d'), {
          type: this._type,
          data: this._details,
          options: this._configService.getConfig()
        });
      } else {
        this._chart.data = this._details;
        this._chart.options = this._configService.getConfig();

        this._chart.update();
      }
    } catch (error) {
      this.errorCallback(error, error.stack);
    }
  }

  _isReadyToDraw() {
    return this._chartjsLoaded && this._details && this._type;
  }

  _callChartjsloadedCallback() {
    if (this._chartjsLoaded === true && typeof this._chartjsLoadedCallback === 'function') {
      this._chartjsLoadedCallback();
    }
  }

}

registerDecorators(Chart, {
  publicProps: {
    width: {
      config: 0
    },
    height: {
      config: 0
    },
    stylecss: {
      config: 0
    },
    uuid: {
      config: 3
    },
    chartjsloadedCallback: {
      config: 3
    },
    canvasOnchange: {
      config: 3
    },
    canvasOnclick: {
      config: 3
    },
    canvasOnmouseover: {
      config: 3
    },
    canvasOnmouseout: {
      config: 3
    },
    responsive: {
      config: 3
    },
    responsiveanimationduration: {
      config: 3
    },
    maintainaspectratio: {
      config: 3
    },
    aspectratio: {
      config: 3
    },
    callbackResize: {
      config: 3
    },
    devicepixelratio: {
      config: 3
    },
    events: {
      config: 3
    },
    callbackClick: {
      config: 3
    },
    callbackHover: {
      config: 3
    },
    type: {
      config: 3
    }
  },
  publicMethods: ["destroyChart", "updateChart", "resetChart", "renderChart", "stopChart", "resizeChart", "clearChart", "toBase64ImageChart", "generateLegendChart", "getElementAtEventChart", "getElementsAtEventChart", "getDatasetAtEventChart", "getDatasetMetaChart"],
  fields: ["_uuid", "_chartjsLoadedCallback", "_canvasOnchange", "_canvasOnclick", "_canvasOnmouseover", "_canvasOnmouseout", "ariaLabel", "_listenerHandlers"]
});

var _cChart = registerComponent(Chart, {
  tmpl: _tmpl$2
});

function stylesheet(hostSelector, shadowSelector, nativeShadow) {
  return [".col", shadowSelector, " {display: inline-block;width: 30%;margin: 1rem;}.slds-text-link:hover", shadowSelector, " {cursor: pointer;}pre", shadowSelector, " {text-align: left;border: 1px solid #dee2e6;border-radius: 10px;padding: 1.2rem;background-color: #364149 !important;color: #fff !important;}"].join('');
}
var _implicitStylesheets = [stylesheet];

function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {t: api_text, s: api_slot, h: api_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("article", {
    classMap: {
      "slds-card": true,
      "col": true
    },
    key: 0
  }, [api_element("div", {
    classMap: {
      "slds-card__body": true,
      "slds-card__body_inner": true,
      "slds-p-horizontal_x-large": true
    },
    key: 1
  }, [api_element("div", {
    classMap: {
      "chart": true
    },
    key: 2
  }, [api_slot("chartExample", {
    attrs: {
      "name": "chartExample"
    },
    key: 3
  }, [api_text("Chart example")], $slotset)])]), api_element("footer", {
    classMap: {
      "slds-card__footer": true
    },
    key: 4
  }, [api_element("p", {
    classMap: {
      "slds-card__footer-action": true,
      "slds-text-link": true
    },
    key: 5,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.openModal))
    }
  }, [api_text("Source code"), api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 6
  }, [api_text("Source code")])])])]), $cmp.isModalOpen ? api_element("section", {
    classMap: {
      "slds-modal": true,
      "slds-fade-in-open": true
    },
    attrs: {
      "role": "dialog",
      "tabindex": "-1",
      "aria-label": "Meaningful description of the modal content",
      "aria-modal": "true",
      "aria-describedby": api_scoped_id("modal-content-id-1")
    },
    key: 7
  }, [api_element("div", {
    classMap: {
      "slds-modal__container": true
    },
    styleMap: {
      "width": "90%",
      "max-width": "unset"
    },
    key: 8
  }, [api_element("header", {
    classMap: {
      "slds-modal__header": true,
      "slds-modal__header_empty": true
    },
    key: 9
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_icon": true,
      "slds-modal__close": true,
      "slds-button_icon-inverse": true
    },
    attrs: {
      "title": "Close"
    },
    key: 10,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.closeModal))
    }
  }, [api_element("svg", {
    classMap: {
      "slds-button__icon": true,
      "slds-button__icon_large": true
    },
    attrs: {
      "aria-hidden": "true"
    },
    key: 11,
    svg: true
  }, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#close")
    },
    key: 12,
    svg: true
  }, [])]), api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 13
  }, [api_text("Close")])])]), api_element("div", {
    classMap: {
      "slds-modal__content": true,
      "slds-p-around_medium": true
    },
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 14
  }, [api_element("div", {
    classMap: {
      "code": true
    },
    key: 15
  }, [api_element("pre", {
    key: 16
  }, [api_slot("chartCode", {
    attrs: {
      "name": "chartCode"
    },
    key: 17
  }, [api_text("Code example")], $slotset)])])]), api_element("footer", {
    classMap: {
      "slds-modal__footer": true
    },
    key: 18
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_neutral": true
    },
    key: 19,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.closeModal))
    }
  }, [api_text("Close")])])])]) : null, $cmp.isModalOpen ? api_element("div", {
    classMap: {
      "slds-backdrop": true,
      "slds-backdrop_open": true
    },
    styleMap: {
      "opacity": "1"
    },
    key: 20
  }, []) : null];
}
var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.slots = ["chartCode", "chartExample"];
tmpl$1.stylesheets = [];


if (_implicitStylesheets) {
  tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
}
tmpl$1.stylesheetTokens = {
  hostAttribute: "c-sampleAppItem_sampleAppItem-host",
  shadowAttribute: "c-sampleAppItem_sampleAppItem"
};

class SampleAppItem extends BaseLightningElement {
  constructor(...args) {
    super(...args);
    this.isModalOpen = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }

}

registerDecorators(SampleAppItem, {
  fields: ["isModalOpen"]
});

var _cSampleAppItem = registerComponent(SampleAppItem, {
  tmpl: _tmpl$1
});

class Tooltip extends BaseAttribute$1 {
  get enabled() {
    return this._payload.enabled;
  }

  set enabled(v) {
    this._payload.enabled = parseBoolean(v);
  }

  get custom() {
    return this._payload.custom;
  }

  set custom(v) {
    this._payload.custom = v;
  }

  get mode() {
    return this._payload.mode;
  }

  set mode(v) {
    this._payload.mode = v;
  }

  get intersect() {
    return this._payload.intersect;
  }

  set intersect(v) {
    this._payload.intersect = parseBoolean(v);
  }

  get position() {
    return this._payload.position;
  }

  set position(v) {
    this._payload.position = v;
  }

  get callbackBeforetitle() {
    return this._payload.callbacks.beforeTitle;
  }

  set callbackBeforetitle(v) {
    this._payload.callbacks.beforeTitle = v;
  }

  get callbackTitle() {
    return this._payload.callbacks.title;
  }

  set callbackTitle(v) {
    this._payload.callbacks.title = v;
  }

  get callbackAftertitle() {
    return this._payload.callbacks.afterTitle;
  }

  set callbackAftertitle(v) {
    this._payload.callbacks.afterTitle = v;
  }

  get callbackBeforebody() {
    return this._payload.callbacks.beforeBody;
  }

  set callbackBeforebody(v) {
    this._payload.callbacks.beforeBody = v;
  }

  get callbackBeforelabel() {
    return this._payload.callbacks.beforeLabel;
  }

  set callbackBeforelabel(v) {
    this._payload.callbacks.beforeLabel = v;
  }

  get callbackLabel() {
    return this._payload.callbacks.label;
  }

  set callbackLabel(v) {
    this._payload.callbacks.label = v;
  }

  get callbackLabelcolor() {
    return this._payload.callbacks.labelColor;
  }

  set callbackLabelcolor(v) {
    this._payload.callbacks.labelColor = v;
  }

  get callbackLabeltextcolor() {
    return this._payload.callbacks.labelTextColor;
  }

  set callbackLabeltextcolor(v) {
    this._payload.callbacks.labelTextColor = v;
  }

  get callbackAfterlabel() {
    return this._payload.callbacks.afterLabel;
  }

  set callbackAfterlabel(v) {
    this._payload.callbacks.afterLabel = v;
  }

  get callbackAfterbody() {
    return this._payload.callbacks.afterBody;
  }

  set callbackAfterbody(v) {
    this._payload.callbacks.afterBody = v;
  }

  get callbackBeforefooter() {
    return this._payload.callbacks.beforeFooter;
  }

  set callbackBeforefooter(v) {
    this._payload.callbacks.beforeFooter = v;
  }

  get callbackFooter() {
    return this._payload.callbacks.footer;
  }

  set callbackFooter(v) {
    this._payload.callbacks.footer = v;
  }

  get callbackAfterfooter() {
    return this._payload.callbacks.afterFooter;
  }

  set callbackAfterfooter(v) {
    this._payload.callbacks.afterFooter = v;
  }

  get itemsort() {
    return this._payload.itemSort;
  }

  set itemsort(v) {
    this._payload.itemSort = v;
  }

  get filter() {
    return this._payload.filter;
  }

  set filter(v) {
    this._payload.filter = v;
  }

  get backgroundcolor() {
    return this._payload.backgroundColor;
  }

  set backgroundcolor(v) {
    this._payload.backgroundColor = v;
  }

  get titlefontfamily() {
    return this._payload.titleFontFamily;
  }

  set titlefontfamily(v) {
    this._payload.titleFontFamily = v;
  }

  get titlefontsize() {
    return this._payload.titleFontSize;
  }

  set titlefontsize(v) {
    this._payload.titleFontSize = v;
  }

  get titlefontstyle() {
    return this._payload.titleFontStyle;
  }

  set titlefontstyle(v) {
    this._payload.titleFontStyle = v;
  }

  get titlefontcolor() {
    return this._payload.titleFontColor;
  }

  set titlefontcolor(v) {
    this._payload.titleFontColor = v;
  }

  get titlealign() {
    return this._payload.titleAlign;
  }

  set titlealign(v) {
    this._payload.titleAlign = v;
  }

  get titlespacing() {
    return this._payload.titleSpacing;
  }

  set titlespacing(v) {
    this._payload.titleSpacing = v;
  }

  get titlemarginbottom() {
    return this._payload.titleMarginBottom;
  }

  set titlemarginbottom(v) {
    this._payload.titleMarginBottom = v;
  }

  get bodyfontfamily() {
    return this._payload.bodyFontFamily;
  }

  set bodyfontfamily(v) {
    this._payload.bodyFontFamily = v;
  }

  get bodyfontsize() {
    return this._payload.bodyFontSize;
  }

  set bodyfontsize(v) {
    this._payload.bodyFontSize = v;
  }

  get bodyfontstyle() {
    return this._payload.bodyFontStyle;
  }

  set bodyfontstyle(v) {
    this._payload.bodyFontStyle = v;
  }

  get bodyfontcolor() {
    return this._payload.bodyFontColor;
  }

  set bodyfontcolor(v) {
    this._payload.bodyFontColor = v;
  }

  get bodyalign() {
    return this._payload.bodyAlign;
  }

  set bodyalign(v) {
    this._payload.bodyAlign = v;
  }

  get bodyspacing() {
    return this._payload.bodySpacing;
  }

  set bodyspacing(v) {
    this._payload.bodySpacing = v;
  }

  get footerfontfamily() {
    return this._payload.footerFontFamily;
  }

  set footerfontfamily(v) {
    this._payload.footerFontFamily = v;
  }

  get footerfontsize() {
    return this._payload.footerFontSize;
  }

  set footerfontsize(v) {
    this._payload.footerFontSize = v;
  }

  get footerfontstyle() {
    return this._payload.footerFontStyle;
  }

  set footerfontstyle(v) {
    this._payload.footerFontStyle = v;
  }

  get footerfontcolor() {
    return this._payload.footerFontColor;
  }

  set footerfontcolor(v) {
    this._payload.footerFontColor = v;
  }

  get footeralign() {
    return this._payload.footerAlign;
  }

  set footeralign(v) {
    this._payload.footerAlign = v;
  }

  get footerspacing() {
    return this._payload.footerSpacing;
  }

  set footerspacing(v) {
    this._payload.footerSpacing = v;
  }

  get footermargintop() {
    return this._payload.footerMarginTop;
  }

  set footermargintop(v) {
    this._payload.footerMarginTop = v;
  }

  get xpadding() {
    return this._payload.xPadding;
  }

  set xpadding(v) {
    this._payload.xPadding = v;
  }

  get ypadding() {
    return this._payload.yPadding;
  }

  set ypadding(v) {
    this._payload.yPadding = v;
  }

  get caretpadding() {
    return this._payload.caretPadding;
  }

  set caretpadding(v) {
    this._payload.caretPadding = v;
  }

  get caretsize() {
    return this._payload.caretSize;
  }

  set caretsize(v) {
    this._payload.caretSize = v;
  }

  get cornerradius() {
    return this._payload.cornerRadius;
  }

  set cornerradius(v) {
    this._payload.cornerRadius = v;
  }

  get multikeybackground() {
    return this._payload.multiKeyBackground;
  }

  set multikeybackground(v) {
    this._payload.multiKeyBackground = v;
  }

  get displaycolors() {
    return this._payload.displayColors;
  }

  set displaycolors(v) {
    this._payload.displayColors = parseBoolean(v);
  }

  get bordercolor() {
    return this._payload.borderColor;
  }

  set bordercolor(v) {
    this._payload.borderColor = v;
  }

  get borderwidth() {
    return this._payload.borderWidth;
  }

  set borderwidth(v) {
    this._payload.borderWidth = v;
  }

  get rtl() {
    return this._payload.rtl;
  }

  set rtl(v) {
    this._payload.rtl = parseBoolean(v);
  }

  get textdirection() {
    return this._payload.textDirection;
  }

  set textdirection(v) {
    this._payload.textDirection = v;
  }

  constructor() {
    super();
    this._option = ATTRIBUTE_TOOLTIPS;
    this._payload.callbacks = {};
  }

}

registerDecorators(Tooltip, {
  publicProps: {
    enabled: {
      config: 3
    },
    custom: {
      config: 3
    },
    mode: {
      config: 3
    },
    intersect: {
      config: 3
    },
    position: {
      config: 3
    },
    callbackBeforetitle: {
      config: 3
    },
    callbackTitle: {
      config: 3
    },
    callbackAftertitle: {
      config: 3
    },
    callbackBeforebody: {
      config: 3
    },
    callbackBeforelabel: {
      config: 3
    },
    callbackLabel: {
      config: 3
    },
    callbackLabelcolor: {
      config: 3
    },
    callbackLabeltextcolor: {
      config: 3
    },
    callbackAfterlabel: {
      config: 3
    },
    callbackAfterbody: {
      config: 3
    },
    callbackBeforefooter: {
      config: 3
    },
    callbackFooter: {
      config: 3
    },
    callbackAfterfooter: {
      config: 3
    },
    itemsort: {
      config: 3
    },
    filter: {
      config: 3
    },
    backgroundcolor: {
      config: 3
    },
    titlefontfamily: {
      config: 3
    },
    titlefontsize: {
      config: 3
    },
    titlefontstyle: {
      config: 3
    },
    titlefontcolor: {
      config: 3
    },
    titlealign: {
      config: 3
    },
    titlespacing: {
      config: 3
    },
    titlemarginbottom: {
      config: 3
    },
    bodyfontfamily: {
      config: 3
    },
    bodyfontsize: {
      config: 3
    },
    bodyfontstyle: {
      config: 3
    },
    bodyfontcolor: {
      config: 3
    },
    bodyalign: {
      config: 3
    },
    bodyspacing: {
      config: 3
    },
    footerfontfamily: {
      config: 3
    },
    footerfontsize: {
      config: 3
    },
    footerfontstyle: {
      config: 3
    },
    footerfontcolor: {
      config: 3
    },
    footeralign: {
      config: 3
    },
    footerspacing: {
      config: 3
    },
    footermargintop: {
      config: 3
    },
    xpadding: {
      config: 3
    },
    ypadding: {
      config: 3
    },
    caretpadding: {
      config: 3
    },
    caretsize: {
      config: 3
    },
    cornerradius: {
      config: 3
    },
    multikeybackground: {
      config: 3
    },
    displaycolors: {
      config: 3
    },
    bordercolor: {
      config: 3
    },
    borderwidth: {
      config: 3
    },
    rtl: {
      config: 3
    },
    textdirection: {
      config: 3
    }
  }
});

var _cTooltip = registerComponent(Tooltip, {
  tmpl: _tmpl$4
});

class LineConfiguration extends BaseAttribute$1 {
  get tension() {
    return this._payload.line.tension;
  }

  set tension(v) {
    this._payload.line.tension = v;
  }

  get backgroundcolor() {
    return this._payload.line.backgroundColor;
  }

  set backgroundcolor(v) {
    this._payload.line.backgroundColor = v;
  }

  get borderwidth() {
    return this._payload.line.borderWidth;
  }

  set borderwidth(v) {
    this._payload.line.borderWidth = v;
  }

  get bordercolor() {
    return this._payload.line.borderColor;
  }

  set bordercolor(v) {
    this._payload.line.borderColor = v;
  }

  get bordercapstyle() {
    return this._payload.line.borderCapStyle;
  }

  set bordercapstyle(v) {
    this._payload.line.borderCapStyle = v;
  }

  get borderdash() {
    return this._payload.line.borderDash;
  }

  set borderdash(v) {
    this._payload.line.borderDash = v;
  }

  get borderdashoffset() {
    return this._payload.line.borderDashOffset;
  }

  set borderdashoffset(v) {
    this._payload.line.borderDashOffset = v;
  }

  get borderjoinstyle() {
    return this._payload.line.borderJoinStyle;
  }

  set borderjoinstyle(v) {
    this._payload.line.borderJoinStyle = v;
  }

  get capbezierpoints() {
    return this._payload.line.capBezierPoints;
  }

  set capbezierpoints(v) {
    this._payload.line.capBezierPoints = parseBoolean(v);
  }

  get cubicinterpolationmode() {
    return this._payload.line.cubicInterpolationMode;
  }

  set cubicinterpolationmode(v) {
    this._payload.line.cubicInterpolationMode = v;
  }

  get fill() {
    return this._payload.line.fill;
  }

  set fill(v) {
    this._payload.line.fill = parseBoolean(v);
  }

  get stepped() {
    return this._payload.line.stepped;
  }

  set stepped(v) {
    this._payload.line.stepped = parseBoolean(v);
  }

  get spangaps() {
    return this._payload.line.spanGaps;
  }

  set spangaps(v) {
    this._payload.line.spanGaps = parseBoolean(v);
  }

  constructor() {
    super();
    this._payload.line = {};
    this._option = ATTRIBUTE_ELEMENTS;
  }

}

registerDecorators(LineConfiguration, {
  publicProps: {
    tension: {
      config: 3
    },
    backgroundcolor: {
      config: 3
    },
    borderwidth: {
      config: 3
    },
    bordercolor: {
      config: 3
    },
    bordercapstyle: {
      config: 3
    },
    borderdash: {
      config: 3
    },
    borderdashoffset: {
      config: 3
    },
    borderjoinstyle: {
      config: 3
    },
    capbezierpoints: {
      config: 3
    },
    cubicinterpolationmode: {
      config: 3
    },
    fill: {
      config: 3
    },
    stepped: {
      config: 3
    },
    spangaps: {
      config: 3
    }
  }
});

var _cLineConfiguration = registerComponent(LineConfiguration, {
  tmpl: _tmpl$4
});

class CartesianLinearAxis extends _cCartesianAxis {
  get ticksBeginatzero() {
    return this._content.ticks.beginAtZero;
  }

  set ticksBeginatzero(v) {
    this._content.ticks.beginAtZero = parseBoolean(v);
  }

  get ticksMaxtickslimit() {
    return this._content.ticks.maxTicksLimit;
  }

  set ticksMaxtickslimit(v) {
    this._content.ticks.maxTicksLimit = Number(v);
  }

  get ticksPrecision() {
    return this._content.ticks.precision;
  }

  set ticksPrecision(v) {
    this._content.ticks.precision = v;
  }

  get ticksStepsize() {
    return this._content.ticks.stepSize;
  }

  set ticksStepsize(v) {
    this._content.ticks.stepSize = Number(v);
  }

  get ticksSuggestedmax() {
    return this._content.ticks.suggestedMax;
  }

  set ticksSuggestedmax(v) {
    this._content.ticks.suggestedMax = v;
  }

  get ticksSuggestedmin() {
    return this._content.ticks.suggestedMin;
  }

  set ticksSuggestedmin(v) {
    this._content.ticks.suggestedMin = v;
  }

  constructor() {
    super();
    this._content.type = CARTESIAN_AXIS_TYPE_LINEAR;
  }

}

registerDecorators(CartesianLinearAxis, {
  publicProps: {
    ticksBeginatzero: {
      config: 3
    },
    ticksMaxtickslimit: {
      config: 3
    },
    ticksPrecision: {
      config: 3
    },
    ticksStepsize: {
      config: 3
    },
    ticksSuggestedmax: {
      config: 3
    },
    ticksSuggestedmin: {
      config: 3
    }
  }
});

var _cCartesianLinearAxis = registerComponent(CartesianLinearAxis, {
  tmpl: _tmpl$4
});

class ArcConfiguration extends BaseAttribute$1 {
  get angle() {
    return this._payload.arc.angle;
  }

  set angle(v) {
    this._payload.arc.angle = v;
  }

  get backgroundcolor() {
    return this._payload.arc.backgroundColor;
  }

  set backgroundcolor(v) {
    this._payload.arc.backgroundColor = v;
  }

  get borderalign() {
    return this._payload.arc.borderAlign;
  }

  set borderalign(v) {
    this._payload.arc.borderAlign = v;
  }

  get bordercolor() {
    return this._payload.arc.borderColor;
  }

  set bordercolor(v) {
    this._payload.arc.borderColor = v;
  }

  get borderwidth() {
    return this._payload.arc.borderWidth;
  }

  set borderwidth(v) {
    this._payload.arc.borderWidth = v;
  }

  constructor() {
    super();
    this._payload.arc = {};
    this._option = ATTRIBUTE_ELEMENTS;
  }

}

registerDecorators(ArcConfiguration, {
  publicProps: {
    angle: {
      config: 3
    },
    backgroundcolor: {
      config: 3
    },
    borderalign: {
      config: 3
    },
    bordercolor: {
      config: 3
    },
    borderwidth: {
      config: 3
    }
  }
});

var _cArcConfiguration = registerComponent(ArcConfiguration, {
  tmpl: _tmpl$4
});

class CartesianTimeAxis extends _cCartesianAxis {
  get adapterDate() {
    return this._content.adapters.date;
  }

  set adapterDate(v) {
    this._content.adapters.date = v;
  }

  get distribution() {
    return this._content.distribution;
  }

  set distribution(v) {
    this._content.distribution = v;
  }

  get bounds() {
    return this._content.bounds;
  }

  set bounds(v) {
    this._content.bounds = v;
  }

  get tickSource() {
    return this._content.ticks.source;
  }

  set tickSource(v) {
    this._content.ticks.source = v;
  }

  get timeDisplayformats() {
    return this._content.time.displayFormats;
  }

  set timeDisplayformats(v) {
    this._content.time.displayFormats = v;
  }

  get timeIsoweekday() {
    return this._content.time.isoWeekday;
  }

  set timeIsoweekday(v) {
    this._content.time.isoWeekday = parseBoolean(v);
  }

  get timeParser() {
    return this._content.time.parser;
  }

  set timeParser(v) {
    this._content.time.parser = v;
  }

  get timeRound() {
    return this._content.time.round;
  }

  set timeRound(v) {
    this._content.time.round = v;
  }

  get timeTooltipformat() {
    return this._content.time.tooltipFormat;
  }

  set timeTooltipformat(v) {
    this._content.time.tooltipFormat = v;
  }

  get timeUnit() {
    return this._content.time.unit;
  }

  set timeUnit(v) {
    this._content.time.unit = v;
  }

  get timeStepsize() {
    return this._content.time.stepSize;
  }

  set timeStepsize(v) {
    this._content.time.stepSize = Number(v);
  }

  get timeMinunit() {
    return this._content.time.minUnit;
  }

  set timeMinunit(v) {
    this._content.time.minUnit = v;
  }

  constructor() {
    super();
    this._timeMinunit = void 0;
    this._content.type = CARTESIAN_AXIS_TYPE_TIME;
    this._content.adapters = {};
    this._content.time = {};
  }

}

registerDecorators(CartesianTimeAxis, {
  publicProps: {
    adapterDate: {
      config: 3
    },
    distribution: {
      config: 3
    },
    bounds: {
      config: 3
    },
    tickSource: {
      config: 3
    },
    timeDisplayformats: {
      config: 3
    },
    timeIsoweekday: {
      config: 3
    },
    timeParser: {
      config: 3
    },
    timeRound: {
      config: 3
    },
    timeTooltipformat: {
      config: 3
    },
    timeUnit: {
      config: 3
    },
    timeStepsize: {
      config: 3
    },
    timeMinunit: {
      config: 3
    }
  },
  fields: ["_timeMinunit"]
});

var _cCartesianTimeAxis = registerComponent(CartesianTimeAxis, {
  tmpl: _tmpl$4
});

function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, t: api_text, h: api_element, k: api_key, d: api_dynamic, i: api_iterator, f: api_flatten, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-grid": true
    },
    key: 0
  }, [api_element("div", {
    classMap: {
      "slds-col": true,
      "slds-size_1-of-1": true,
      "slds-p-bottom_medium": true
    },
    key: 1
  }, [api_element("div", {
    classMap: {
      "slds-button-group": true,
      "slds-align_absolute-center": true
    },
    attrs: {
      "role": "group"
    },
    key: 2
  }, api_flatten([api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_neutral": true
    },
    key: 3,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.displayAllCharts))
    }
  }, [api_text("All")]), api_iterator($cmp.filterTypes, function (item) {
    return api_element("button", {
      classMap: {
        "slds-button": true,
        "slds-button_neutral": true
      },
      attrs: {
        "data-value": item
      },
      key: api_key(4, item),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.displayFilteredCharts))
      }
    }, [api_dynamic(item)]);
  })]))])]), api_element("div", {
    classMap: {
      "container": true
    },
    styleMap: {
      "text-align": "center"
    },
    key: 5
  }, [api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 6
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bar",
      "responsive": "true",
      "stylecss": "position: relative; margin: auto;",
      "events": "[\"click\"]"
    },
    key: 7
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Blue\", \"Orange\", \"Yellow\", \"Green\", \"Light Blue\", \"Purple\"]"
    },
    key: 8
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Votes",
      "detail": "[12, 19, 7, 9, 5, 15]",
      "backgroundcolor": "[\n                \"rgba(82, 183, 216, 0.2)\",\n                \"rgba(225, 96, 50, 0.2)\",\n                \"rgba(255, 176, 59, 0.2)\",\n                \"rgba(84, 167, 123, 0.2)\",\n                \"rgba(79, 210, 210, 0.2)\",\n                \"rgba(226, 135, 178, 0.2)\"\n              ]",
      "bordercolor": "[\n                  \"rgba(82, 183, 216, 1)\",\n                  \"rgba(225, 96, 50, 1)\",\n                  \"rgba(255, 176, 59, 1)\",\n                  \"rgba(84, 167, 123, 1)\",\n                  \"rgba(79, 210, 210, 1)\",\n                  \"rgba(226, 135, 178, 1)\"\n              ]",
      "borderwidth": "1"
    },
    key: 9
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Bar Chart"
    },
    key: 10
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "right"
    },
    key: 11
  }, []), api_custom_element("c-animation", _cAnimation, {
    props: {
      "duration": "2000",
      "easing": "easeInBounce"
    },
    key: 12
  }, []), api_custom_element("c-cartesian-category-axis", _cCartesianCategoryAxis, {
    props: {
      "axis": "x",
      "position": "top"
    },
    key: 13
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 14
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\" stylecss=\"position: relative; margin: auto;\" events='[\"click\"]'>"), api_element("br", {
    key: 15
  }, []), api_text(" <c-dataset labels='[\"Blue\", \"Orange\", \"Yellow\", \"Green\", \"Light Blue\", \"Purple\"]'>"), api_element("br", {
    key: 16
  }, []), api_text("  <c-data label=\"# of Votes\" detail=\"[12, 19, 7, 9, 5, 15]\" backgroundcolor='["), api_element("br", {
    key: 17
  }, []), api_text("   \"rgba(82, 183, 216, 0.2)\","), api_element("br", {
    key: 18
  }, []), api_text("   \"rgba(225, 96, 50, 0.2)\","), api_element("br", {
    key: 19
  }, []), api_text("   \"rgba(255, 176, 59, 0.2)\","), api_element("br", {
    key: 20
  }, []), api_text("   \"rgba(84, 167, 123, 0.2)\","), api_element("br", {
    key: 21
  }, []), api_text("   \"rgba(79, 210, 210, 0.2)\","), api_element("br", {
    key: 22
  }, []), api_text("   \"rgba(226, 135, 178, 0.2)\""), api_element("br", {
    key: 23
  }, []), api_text("   ]' bordercolor='["), api_element("br", {
    key: 24
  }, []), api_text("    \"rgba(82, 183, 216, 1)\","), api_element("br", {
    key: 25
  }, []), api_text("    \"rgba(225, 96, 50, 1)\","), api_element("br", {
    key: 26
  }, []), api_text("    \"rgba(255, 176, 59, 1)\","), api_element("br", {
    key: 27
  }, []), api_text("    \"rgba(84, 167, 123, 1)\","), api_element("br", {
    key: 28
  }, []), api_text("    \"rgba(79, 210, 210, 1)\","), api_element("br", {
    key: 29
  }, []), api_text("    \"rgba(226, 135, 178, 1)\""), api_element("br", {
    key: 30
  }, []), api_text("   ]' borderwidth=\"1\"></c-data>"), api_element("br", {
    key: 31
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 32
  }, []), api_text(" <c-title text=\"Bar Chart\"></c-title>"), api_element("br", {
    key: 33
  }, []), api_text(" <c-legend position=\"right\"></c-legend>"), api_element("br", {
    key: 34
  }, []), api_text(" <c-animation duration=\"2000\" easing=\"easeInBounce\"> </c-animation>"), api_element("br", {
    key: 35
  }, []), api_text(" <c-cartesian-category-axis axis=\"x\" position=\"top\"></c-cartesian-category-axis>"), api_element("br", {
    key: 36
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 37
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "line",
      "responsive": "true"
    },
    key: 38
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 39
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[10, 30, 46, 2, 8, 50, 0]",
      "bordercolor": "rgba(119, 185, 242, 1)",
      "backgroundcolor": "rgba(119, 185, 242, 0.2)"
    },
    key: 40
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Line Chart"
    },
    key: 41
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 42
  }, [api_text("<c-chart type=\"line\" responsive=\"true\">"), api_element("br", {
    key: 43
  }, []), api_text(" <c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 44
  }, []), api_text("  <c-data label=\"My First dataset\" detail=\"[10, 30, 46, 2, 8, 50, 0]\" bordercolor=\"rgba(119, 185, 242, 1)\""), api_element("br", {
    key: 45
  }, []), api_text("  backgroundcolor=\"rgba(119, 185, 242, 0.2)\"></c-data>"), api_element("br", {
    key: 46
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 47
  }, []), api_text(" <c-title text=\"Line Chart\"></c-title>"), api_element("br", {
    key: 48
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 49
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "line",
      "responsive": "true"
    },
    key: 50
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 51
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "backgroundcolor": "rgba(82, 183, 216, 1)",
      "bordercolor": "rgba(82, 183, 216, 0.2)",
      "detail": "[10, 30, 46, 2, 8, 50, 0]",
      "fill": "false"
    },
    key: 52
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "My Second dataset",
      "detail": "[7, 49, 46, 13, 25, 30, 22]",
      "backgroundcolor": "rgba(84, 167, 123, 1)",
      "bordercolor": "rgba(84, 167, 123, 0.2)",
      "fill": "false"
    },
    key: 53
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Line Chart"
    },
    key: 54
  }, []), api_custom_element("c-tooltip", _cTooltip, {
    props: {
      "position": "nearest",
      "mode": "index",
      "enabled": "true"
    },
    key: 55
  }, []), api_custom_element("c-line-configuration", _cLineConfiguration, {
    props: {
      "tension": "0.4"
    },
    key: 56
  }, []), api_custom_element("c-cartesian-axis", _cCartesianAxis, {
    props: {
      "axis": "x",
      "position": "top",
      "type": "category"
    },
    key: 57
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axis": "y",
      "position": "right",
      "ticksMin": "-10",
      "titleDisplay": "true",
      "titleLabelstring": "yAxis items",
      "gridZerolinecolor": "rgba(225, 96, 50, 1",
      "gridZerolinewidth": "3"
    },
    key: 58
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 59
  }, [api_text("<c-chart type=\"line\" responsive=\"true\">"), api_element("br", {
    key: 60
  }, []), api_text(" <c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 61
  }, []), api_text("  <c-data label=\"My First dataset\" backgroundcolor=\"rgba(82, 183, 216, 1)\" bordercolor=\"rgba(82, 183, 216, 0.2)\""), api_element("br", {
    key: 62
  }, []), api_text("  detail=\"[10, 30, 46, 2, 8, 50, 0]\" fill=\"false\"></c-data>"), api_element("br", {
    key: 63
  }, []), api_text("  <c-data label=\"My Second dataset\" detail=\"[7, 49, 46, 13, 25, 30, 22]\" backgroundcolor=\"rgba(84, 167, 123, 1)\""), api_element("br", {
    key: 64
  }, []), api_text("  bordercolor=\"rgba(84, 167, 123, 0.2)\" fill=\"false\"></c-data>"), api_element("br", {
    key: 65
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 66
  }, []), api_text(" <c-title text=\"Line Chart\"></c-title>"), api_element("br", {
    key: 67
  }, []), api_text(" <c-tooltip position=\"nearest\" mode=\"index\" enabled=\"true\"></c-tooltip>"), api_element("br", {
    key: 68
  }, []), api_text(" <c-line-configuration tension=\"0.4\"></c-line-configuration>"), api_element("br", {
    key: 69
  }, []), api_text(" <c-cartesian-axis axis=\"x\" position=\"top\" type=\"category\"></c-cartesian-axis>"), api_element("br", {
    key: 70
  }, []), api_text(" <c-cartesian-linear-axis axis=\"y\" position=\"right\" ticks-min=\"-10\" title-display=\"true\""), api_element("br", {
    key: 71
  }, []), api_text("  title-labelstring=\"yAxis items\" grid-zerolinecolor=\"rgba(225, 96, 50, 1\" grid-zerolinewidth=\"3\">"), api_element("br", {
    key: 72
  }, []), api_text(" </c-cartesian-linear-axis>"), api_element("br", {
    key: 73
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 74
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "pie",
      "responsive": "true"
    },
    key: 75
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]"
    },
    key: 76
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Tomatoes",
      "detail": "[12, 19, 3, 5]",
      "backgroundcolor": "[\n              \"rgba(206, 103, 22, 1)\",\n              \"rgba(245, 150, 35, 1)\",\n              \"rgba(245, 192, 98, 1)\",\n              \"rgba(245, 222, 152, 1)\"\n          ]"
    },
    key: 77
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Pie Chart"
    },
    key: 78
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "right"
    },
    key: 79
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 80
  }, [api_text("<c-chart type=\"pie\" responsive=\"true\">"), api_element("br", {
    key: 81
  }, []), api_text(" <c-dataset labels='[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]'>"), api_element("br", {
    key: 82
  }, []), api_text("  <c-data label=\"# of Tomatoes\" detail=\"[12, 19, 3, 5]\" backgroundcolor='["), api_element("br", {
    key: 83
  }, []), api_text("   \"rgba(206, 103, 22, 1)\","), api_element("br", {
    key: 84
  }, []), api_text("   \"rgba(245, 150, 35, 1)\","), api_element("br", {
    key: 85
  }, []), api_text("   \"rgba(245, 192, 98, 1)\","), api_element("br", {
    key: 86
  }, []), api_text("   \"rgba(245, 222, 152, 1)\""), api_element("br", {
    key: 87
  }, []), api_text("  ]'></c-data>"), api_element("br", {
    key: 88
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 89
  }, []), api_text(" <c-title text=\"Pie Chart\"></c-title>"), api_element("br", {
    key: 90
  }, []), api_text(" <c-legend position=\"right\"></c-legend>"), api_element("br", {
    key: 91
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 92
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "doughnut",
      "responsive": "true"
    },
    key: 93
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]"
    },
    key: 94
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Tomatoes",
      "detail": "[12, 19, 3, 5]",
      "backgroundcolor": "[\n              \"rgba(14, 110, 206, 1)\",\n              \"rgba(45, 156, 237, 1)\",\n              \"rgba(104, 206, 238, 1)\",\n              \"rgba(150, 242, 238, 1)\"\n          ]"
    },
    key: 95
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Doughnut Chart"
    },
    key: 96
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "left"
    },
    key: 97
  }, []), api_custom_element("c-arc-configuration", _cArcConfiguration, {
    props: {
      "bordercolor": "rgba(7, 62, 146, 0.7)"
    },
    key: 98
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 99
  }, [api_text("<c-chart type=\"doughnut\" responsive=\"true\">"), api_element("br", {
    key: 100
  }, []), api_text(" <c-dataset labels='[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]'>"), api_element("br", {
    key: 101
  }, []), api_text("  <c-data label=\"# of Tomatoes\" detail=\"[12, 19, 3, 5]\" backgroundcolor='["), api_element("br", {
    key: 102
  }, []), api_text("   \"rgba(14, 110, 206, 1)\","), api_element("br", {
    key: 103
  }, []), api_text("   \"rgba(45, 156, 237, 1)\","), api_element("br", {
    key: 104
  }, []), api_text("   \"rgba(104, 206, 238, 1)\","), api_element("br", {
    key: 105
  }, []), api_text("   \"rgba(150, 242, 238, 1)\""), api_element("br", {
    key: 106
  }, []), api_text("  ]'></c-data>"), api_element("br", {
    key: 107
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 108
  }, []), api_text(" <c-title text=\"Doughnut Chart\"></c-title>"), api_element("br", {
    key: 109
  }, []), api_text(" <c-legend position=\"left\"></c-legend>"), api_element("br", {
    key: 110
  }, []), api_text(" <c-arc-configuration bordercolor=\"rgba(7, 62, 146, 0.7)\"></c-arc-configuration>"), api_element("br", {
    key: 111
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 112
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bubble",
      "responsive": "true"
    },
    key: 113
  }, [api_custom_element("c-dataset", _cDataset, {
    key: 114
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "John",
      "detail": "[\\{\"x\": 3,\"y\": 7,\"r\": 10\\}, \\{\"x\": 5,\"y\": 4,\"r\": 5\\}, \\{\"x\": 3,\"y\": 4,\"r\": 5\\}]",
      "backgroundcolor": "rgba(82, 183, 216, 1)"
    },
    key: 115
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "Paul",
      "detail": "[\\{\"x\": 2,\"y\": 2,\"r\": 2\\}, \\{\"x\": 6,\"y\": 5,\"r\": 10\\}, \\{\"x\": 4,\"y\": 2,\"r\": 5\\}]",
      "backgroundcolor": "rgba(225, 96, 50, 1)"
    },
    key: 116
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "Ringo",
      "detail": "[\\{\"x\": 1,\"y\": 3,\"r\": 10\\}, \\{\"x\": 3,\"y\": 3,\"r\": 10\\}, \\{\"x\": 6,\"y\": 4,\"r\": 10\\}]",
      "backgroundcolor": "rgba(255, 176, 59, 1)"
    },
    key: 117
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Bubble Chart"
    },
    key: 118
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "bottom"
    },
    key: 119
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 120
  }, [api_text("<c-chart type=\"bubble\" responsive=\"true\">"), api_element("br", {
    key: 121
  }, []), api_text(" <c-dataset>"), api_element("br", {
    key: 122
  }, []), api_text("  <c-data label=\"John\" detail='[\\{\"x\": 3,\"y\": 7,\"r\": 10\\}, \\{\"x\": 5,\"y\": 4,\"r\": 5\\}, \\{\"x\": 3,\"y\": 4,\"r\": 5\\}]'"), api_element("br", {
    key: 123
  }, []), api_text("  backgroundcolor=\"rgba(82, 183, 216, 1)\"></c-data>"), api_element("br", {
    key: 124
  }, []), api_text("  <c-data label=\"Paul\" detail='[\\{\"x\": 2,\"y\": 2,\"r\": 2\\}, \\{\"x\": 6,\"y\": 5,\"r\": 10\\}, \\{\"x\": 4,\"y\": 2,\"r\": 5\\}]'"), api_element("br", {
    key: 125
  }, []), api_text("  backgroundcolor=\"rgba(225, 96, 50, 1)\"></c-data>"), api_element("br", {
    key: 126
  }, []), api_text("  <c-data label=\"Ringo\""), api_element("br", {
    key: 127
  }, []), api_text("  detail='[\\{\"x\": 1,\"y\": 3,\"r\": 10\\}, \\{\"x\": 3,\"y\": 3,\"r\": 10\\}, \\{\"x\": 6,\"y\": 4,\"r\": 10\\}]'"), api_element("br", {
    key: 128
  }, []), api_text("  backgroundcolor=\"rgba(255, 176, 59, 1)\"></c-data>"), api_element("br", {
    key: 129
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 130
  }, []), api_text(" <c-title text=\"Bubble Chart\"></c-title>"), api_element("br", {
    key: 131
  }, []), api_text(" <c-legend position=\"bottom\"></c-legend>"), api_element("br", {
    key: 132
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 133
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "scatter",
      "responsive": "true"
    },
    key: 134
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 135
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[\\{\"x\":10,\"y\":5\\}, \\{\"x\":30,\"y\":10\\}, \\{\"x\":46,\"y\":12\\}, \\{\"x\":2,\"y\":20\\}, \\{\"x\":8,\"y\":15\\}, \\{\"x\":50,\"y\":10\\}, \\{\"x\":0,\"y\":25\\}]",
      "backgroundcolor": "rgba(255, 176, 59, 1)",
      "bordercolor": "rgba(255, 176, 59, 1)",
      "fill": "false"
    },
    key: 136
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Scatter Chart"
    },
    key: 137
  }, []), api_custom_element("c-tooltip", _cTooltip, {
    props: {
      "position": "nearest",
      "mode": "index",
      "enabled": "true"
    },
    key: 138
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 139
  }, [api_text("<c-chart slot=\"chartExample\" type=\"scatter\" responsive=\"true\">"), api_element("br", {
    key: 140
  }, []), api_text(" <c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 141
  }, []), api_text("  <c-data label=\"My First dataset\""), api_element("br", {
    key: 142
  }, []), api_text("  detail='[\\{\"x\":10,\"y\":5\\}, \\{\"x\":30,\"y\":10\\}, \\{\"x\":46,\"y\":12\\}, \\{\"x\":2,\"y\":20\\}, \\{\"x\":8,\"y\":15\\}, \\{\"x\":50,\"y\":10\\}, \\{\"x\":0,\"y\":25\\}]'"), api_element("br", {
    key: 143
  }, []), api_text("  backgroundcolor=\"rgba(255, 176, 59, 1)\" bordercolor=\"rgba(255, 176, 59, 1)\" fill=\"false\"></c-data>"), api_element("br", {
    key: 144
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 145
  }, []), api_text(" <c-title text=\"Scatter Chart\"></c-title>"), api_element("br", {
    key: 146
  }, []), api_text(" <c-tooltip position=\"nearest\" mode=\"index\" enabled=\"true\"></c-tooltip>"), api_element("br", {
    key: 147
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 148
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bar",
      "responsive": "true"
    },
    key: 149
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 150
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[10, 30, 46, 2, 8, 50, 0]",
      "backgroundcolor": "rgba(82, 183, 216, 1)",
      "bordercolor": "rgba(82, 183, 216, 1)",
      "fill": "false",
      "order": "2"
    },
    key: 151
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "My Second dataset",
      "detail": "[7, 49, 46, 13, 25, 30, 22]",
      "backgroundcolor": "rgba(255, 176, 59, 1)",
      "bordercolor": "rgba(255, 176, 59, 1)",
      "fill": "false",
      "order": "1",
      "type": "line"
    },
    key: 152
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Mix Chart"
    },
    key: 153
  }, []), api_custom_element("c-tooltip", _cTooltip, {
    props: {
      "position": "nearest",
      "mode": "index",
      "enabled": "true"
    },
    key: 154
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 155
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\">"), api_element("br", {
    key: 156
  }, []), api_text(" <c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 157
  }, []), api_text("  <c-data label=\"My First dataset\" detail=\"[10, 30, 46, 2, 8, 50, 0]\" backgroundcolor=\"rgba(82, 183, 216, 1)\""), api_element("br", {
    key: 158
  }, []), api_text("  bordercolor=\"rgba(82, 183, 216, 1)\" fill=\"false\" order=\"2\"></c-data>"), api_element("br", {
    key: 159
  }, []), api_text("  <c-data label=\"My Second dataset\" detail=\"[7, 49, 46, 13, 25, 30, 22]\" backgroundcolor=\"rgba(255, 176, 59, 1)\""), api_element("br", {
    key: 160
  }, []), api_text("  bordercolor=\"rgba(255, 176, 59, 1)\" fill=\"false\" order=\"1\" type=\"line\"></c-data>"), api_element("br", {
    key: 161
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 162
  }, []), api_text(" <c-title text=\"Mix Chart\"></c-title>"), api_element("br", {
    key: 163
  }, []), api_text(" <c-tooltip position=\"nearest\" mode=\"index\" enabled=\"true\"></c-tooltip>"), api_element("br", {
    key: 164
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 165
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "radar"
    },
    key: 166
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Eating\", \"Drinking\", \"Sleeping\", \"Designing\", \"Coding\", \"Cycling\", \"Running\"]"
    },
    key: 167
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[65, 59, 90, 81, 56, 55, 40]",
      "backgroundcolor": "rgba(82, 183, 216, 0.2)",
      "bordercolor": "rgba(82, 183, 216, 1)",
      "pointhoverbackgroundcolor": "#000",
      "pointhoverbordercolor": "#000"
    },
    key: 168
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "My Second dataset",
      "detail": "[28, 48, 40, 19, 96, 27, 100]",
      "backgroundcolor": "rgba(255, 176, 59, 0.2)",
      "bordercolor": "rgba(255, 176, 59, 1)"
    },
    key: 169
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Radar Chart"
    },
    key: 170
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 171
  }, [api_text("<c-chart type=\"radar\">"), api_element("br", {
    key: 172
  }, []), api_text(" <c-dataset labels='[\"Eating\", \"Drinking\", \"Sleeping\", \"Designing\", \"Coding\", \"Cycling\", \"Running\"]'>"), api_element("br", {
    key: 173
  }, []), api_text("  <c-data label=\"My First dataset\" detail=\"[65, 59, 90, 81, 56, 55, 40]\""), api_element("br", {
    key: 174
  }, []), api_text("  backgroundcolor=\"rgba(82, 183, 216, 0.2)\" bordercolor=\"rgba(82, 183, 216, 1)\""), api_element("br", {
    key: 175
  }, []), api_text("  pointhoverbackgroundcolor=\"#000\" pointhoverbordercolor=\"#000\"></c-data>"), api_element("br", {
    key: 176
  }, []), api_text("  <c-data label=\"My Second dataset\" detail=\"[28, 48, 40, 19, 96, 27, 100]\""), api_element("br", {
    key: 177
  }, []), api_text("  backgroundcolor=\"rgba(255, 176, 59, 0.2)\" bordercolor=\"rgba(255, 176, 59, 1)\"></c-data>"), api_element("br", {
    key: 178
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 179
  }, []), api_text(" <c-title text=\"Radar Chart\"></c-title>"), api_element("br", {
    key: 180
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 181
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "polarArea"
    },
    key: 182
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Eating\", \"Drinking\", \"Sleeping\"]"
    },
    key: 183
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[41, 38, 35]",
      "backgroundcolor": "[\"rgba(119, 185, 242, .75)\", \"rgba(195, 152, 245, .75)\",\"rgba(78, 212, 205, .75)\"]",
      "bordercolor": "[\"rgba(119, 185, 242, 1)\", \"rgba(195, 152, 245, 1)\",\"rgba(78, 212, 205, 1)\"]"
    },
    key: 184
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Polar Area Chart"
    },
    key: 185
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 186
  }, [api_text("<c-chart type=\"polarArea\">"), api_element("br", {
    key: 187
  }, []), api_text(" <c-dataset labels='[\"Eating\", \"Drinking\", \"Sleeping\"]'>"), api_element("br", {
    key: 188
  }, []), api_text("  <c-data label=\"My First dataset\" detail=\"[41, 38, 35]\""), api_element("br", {
    key: 189
  }, []), api_text("  backgroundcolor='[\"rgba(119, 185, 242, .75)\", \"rgba(195, 152, 245, .75)\",\"rgba(78, 212, 205, .75)\"]'"), api_element("br", {
    key: 190
  }, []), api_text("  bordercolor='[\"rgba(119, 185, 242, 1)\", \"rgba(195, 152, 245, 1)\",\"rgba(78, 212, 205, 1)\"]'>"), api_element("br", {
    key: 191
  }, []), api_text("  </c-data>"), api_element("br", {
    key: 192
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 193
  }, []), api_text(" <c-title text=\"Polar Area Chart\"></c-title>"), api_element("br", {
    key: 194
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 195
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bar",
      "responsive": "true"
    },
    key: 196
  }, [api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Category"
    },
    key: 197
  }, []), api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]"
    },
    key: 198
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of tomatoes",
      "detail": "[12, 19, 3, 5]",
      "backgroundcolor": "[\n            \"rgba(82, 183, 216, 1)\",\n            \"rgba(225, 96, 50, 1)\",\n            \"rgba(255, 176, 59, 1)\",\n            \"rgba(84, 167, 123, 1)\"\n          ]"
    },
    key: 199
  }, [])]), api_custom_element("c-cartesian-category-axis", _cCartesianCategoryAxis, {
    props: {
      "axis": "x",
      "position": "top",
      "titleDisplay": "true",
      "titleLabelstring": "Category axis"
    },
    key: 200
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axis": "y",
      "ticksStepsize": "15",
      "position": "right",
      "titleDisplay": "true",
      "titleLabelstring": "Linear axis"
    },
    key: 201
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 202
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\">"), api_element("br", {
    key: 203
  }, []), api_text(" <c-title text=\"Category\"></c-title>"), api_element("br", {
    key: 204
  }, []), api_text(" <c-dataset labels='[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]'>"), api_element("br", {
    key: 205
  }, []), api_text("  <c-data label=\"# of tomatoes\" detail=\"[12, 19, 3, 5]\" backgroundcolor='["), api_element("br", {
    key: 206
  }, []), api_text("  \"rgba(82, 183, 216, 1)\","), api_element("br", {
    key: 207
  }, []), api_text("  \"rgba(225, 96, 50, 1)\","), api_element("br", {
    key: 208
  }, []), api_text("  \"rgba(255, 176, 59, 1)\","), api_element("br", {
    key: 209
  }, []), api_text("  \"rgba(84, 167, 123, 1)\""), api_element("br", {
    key: 210
  }, []), api_text("  ]'></c-data>"), api_element("br", {
    key: 211
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 212
  }, []), api_text(" <c-cartesian-category-axis axis=\"x\" position=\"top\" title-display=\"true\" title-labelstring=\"Category axis\">"), api_element("br", {
    key: 213
  }, []), api_text(" </c-cartesian-category-axis>"), api_element("br", {
    key: 214
  }, []), api_text(" <c-cartesian-linear-axis axis=\"y\" ticks-stepsize=\"15\" position=\"right\" title-display=\"true\" title-labelstring=\"Linear axis\"></c-cartesian-linear-axis>"), api_element("br", {
    key: 215
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 216
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bar",
      "responsive": "true"
    },
    key: 217
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\", \"Item 6\", \"Item 7\"]"
    },
    key: 218
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "Neutral",
      "detail": "[40, 47, 44, 38, 27, 31, 25]",
      "backgroundcolor": "rgba(50, 150, 237, 1)",
      "stack": "1"
    },
    key: 219
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "Warning",
      "detail": "[10, 12, 7, 5, 4, 6, 8]",
      "backgroundcolor": "rgba(119, 185, 242, 1)",
      "stack": "1"
    },
    key: 220
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "Error",
      "detail": "[17, 11, 22, 18, 12, 7, 5]",
      "backgroundcolor": "rgba(157, 83, 242, 1)",
      "stack": "1"
    },
    key: 221
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Stacked Bar Chart"
    },
    key: 222
  }, []), api_custom_element("c-cartesian-axis", _cCartesianAxis, {
    props: {
      "axis": "x",
      "stacked": "true"
    },
    key: 223
  }, []), api_custom_element("c-cartesian-axis", _cCartesianAxis, {
    props: {
      "axis": "y",
      "stacked": "true"
    },
    key: 224
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 225
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\">"), api_element("br", {
    key: 226
  }, []), api_text(" <c-dataset labels='[\"Item 1\",\"Item 2\",\"Item 3\",\"Item 4\", \"Item 5\",\"Item 6\",\"Item 7\"]'>"), api_element("br", {
    key: 227
  }, []), api_text("  <c-data label=\"Neutral\" detail=\"[40, 47, 44, 38, 27, 31, 25]\" backgroundcolor='rgba(50, 150, 237, 1)' stack=\"1\"></c-data>"), api_element("br", {
    key: 228
  }, []), api_text("  <c-data label=\"Warning\" detail=\"[10, 12, 7, 5, 4, 6, 8]\" backgroundcolor='rgba(119, 185, 242, 1)' stack=\"1\"></c-data>"), api_element("br", {
    key: 229
  }, []), api_text("  <c-data label=\"Error\" detail=\"[17, 11, 22, 18, 12, 7, 5]\" backgroundcolor='rgba(157, 83, 242, 1)' stack=\"1\"></c-data>"), api_element("br", {
    key: 230
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 231
  }, []), api_text(" <c-cartesian-axis axis=\"x\" stacked=\"true\" >"), api_element("br", {
    key: 232
  }, []), api_text(" </c-cartesian-axis>"), api_element("br", {
    key: 233
  }, []), api_text(" <c-cartesian-axis axis=\"y\" stacked=\"true\"></c-cartesian-axis>"), api_element("br", {
    key: 234
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 235
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "horizontalBar",
      "responsive": "true"
    },
    key: 236
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Group 1\", \"Group 2\", \"Group 3\", \"Group 4\", \"Group 5\", \"Group 6\"]"
    },
    key: 237
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Items",
      "detail": "[12, 19, 7, 9, 5, 15]",
      "backgroundcolor": "rgba(255, 176, 59, 1)",
      "bordercolor": "rgba(255, 176, 59, 1)",
      "borderwidth": "1"
    },
    key: 238
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Horizontal Chart"
    },
    key: 239
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "bottom"
    },
    key: 240
  }, []), api_custom_element("c-cartesian-category-axis", _cCartesianCategoryAxis, {
    props: {
      "axis": "y",
      "position": "left"
    },
    key: 241
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axis": "x",
      "ticksBeginatzero": "true"
    },
    key: 242
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 243
  }, [api_text("<c-chart type=\"horizontalBar\" responsive=\"true\">"), api_element("br", {
    key: 244
  }, []), api_text(" <c-dataset labels='[\"Group 1\", \"Group 2\", \"Group 3\", \"Group 4\", \"Group 5\", \"Group 6\"]'>"), api_element("br", {
    key: 245
  }, []), api_text("  <c-data label=\"# of Items\" detail=\"[12, 19, 7, 9, 5, 15]\" backgroundcolor=\"rgba(255, 176, 59, 1)\" bordercolor=\"rgba(255, 176, 59, 1)\" borderwidth=\"1\"></c-data>"), api_element("br", {
    key: 246
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 247
  }, []), api_text(" <c-title text=\"Horizontal Chart\"></c-title>"), api_element("br", {
    key: 248
  }, []), api_text(" <c-legend position=\"bottom\"></c-legend>"), api_element("br", {
    key: 249
  }, []), api_text(" <c-cartesian-category-axis axis=\"y\" position=\"left\"></c-cartesian-category-axis>"), api_element("br", {
    key: 250
  }, []), api_text(" <c-cartesian-linear-axis axis=\"x\" ticks-beginatzero=\"true\"></c-cartesian-linear-axis>"), api_element("br", {
    key: 251
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 252
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "line",
      "responsive": "true"
    },
    key: 253
  }, [api_custom_element("c-dataset", _cDataset, {
    key: 254
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "Stock price",
      "detail": "[\\{\"y\":30,\"x\":\"2020-08-20T00:00:00.000Z\"\\},\\{\"y\":25,\"x\":\"2020-08-21T00:00:00.000Z\"\\},\\{\"y\":50,\"x\":\"2020-08-23T00:00:00.000Z\"\\},\\{\"y\":70,\"x\":\"2020-08-29T00:00:00.000Z\"\\}]",
      "bordercolor": "rgba(119, 185, 242, 1)",
      "backgroundcolor": "rgba(119, 185, 242, 1)",
      "borderwidth": "1",
      "fill": "false"
    },
    key: 255
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Linear Time Chart"
    },
    key: 256
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axis": "y",
      "position": "left",
      "display": "true",
      "ticksBeginatzero": "true"
    },
    key: 257
  }, []), api_custom_element("c-cartesian-time-axis", _cCartesianTimeAxis, {
    props: {
      "axis": "x",
      "timeUnit": "day",
      "display": "true",
      "tickSource": "data",
      "bounds": "ticks"
    },
    key: 258
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 259
  }, [api_text("<c-chart type=\"line\" responsive=\"true\">"), api_element("br", {
    key: 260
  }, []), api_text(" <c-dataset>"), api_element("br", {
    key: 261
  }, []), api_text("  <c-data label=\"Stock price\" bordercolor=\"rgba(119, 185, 242, 1)\" backgroundcolor=\"rgba(119, 185, 242, 1)\" borderwidth=\"1\" fill=\"false\""), api_element("br", {
    key: 262
  }, []), api_text("   detail='[\\{\"y\":30,\"x\":\"2020-08-20T00:00:00.000Z\"\\},\\{\"y\":25,\"x\":\"2020-08-21T00:00:00.000Z\"\\},\\{\"y\":50,\"x\":\"2020-08-23T00:00:00.000Z\"\\},\\{\"y\":70,\"x\":\"2020-08-29T00:00:00.000Z\"\\}]'>"), api_element("br", {
    key: 263
  }, []), api_text("  </c-data>"), api_element("br", {
    key: 264
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 265
  }, []), api_text(" <c-title text=\"Linear Time Chart\"></c-title>"), api_element("br", {
    key: 266
  }, []), api_text(" <c-cartesian-linear-axis axis=\"y\" position=\"left\" display=\"true\" ticks-beginatzero=\"true\"></c-cartesian-linear-axis>"), api_element("br", {
    key: 267
  }, []), api_text(" <c-cartesian-time-axis axis=\"x\" time-unit=\"day\" display=\"true\" tick-source=\"data\" bounds=\"ticks\">"), api_element("br", {
    key: 268
  }, []), api_text(" </c-cartesian-time-axis>"), api_element("br", {
    key: 269
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 270
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "line",
      "responsive": "true"
    },
    key: 271
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"A\", \"B\", \"C\", \"D\", \"E\"]"
    },
    key: 272
  }, [api_custom_element("c-data", _cData, {
    props: {
      "yaxisid": "left",
      "label": "Left dataset",
      "backgroundcolor": "rgba(82, 183, 216, 1)",
      "bordercolor": "rgba(82, 183, 216, 0.2)",
      "detail": "[10, 9, 4, 3, 6]",
      "fill": "false"
    },
    key: 273
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "yaxisid": "right",
      "label": "Right dataset",
      "detail": "[3, 2, 1, 5, 0]",
      "backgroundcolor": "rgba(84, 167, 123, 1)",
      "bordercolor": "rgba(84, 167, 123, 0.2)",
      "fill": "false"
    },
    key: 274
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Multiple axes with different scales"
    },
    key: 275
  }, []), api_custom_element("c-cartesian-axis", _cCartesianAxis, {
    props: {
      "axis": "x",
      "position": "bottom",
      "type": "category"
    },
    key: 276
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axisid": "left",
      "axis": "y",
      "position": "left",
      "ticksStepsize": "3",
      "titleLabelstring": "Left axis",
      "titleDisplay": "true"
    },
    key: 277
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axisid": "right",
      "axis": "y",
      "position": "right",
      "ticksStepsize": "1",
      "titleLabelstring": "Right axis",
      "titleDisplay": "true"
    },
    key: 278
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 279
  }, [api_text("<c-chart type=\"line\" responsive=\"true\">"), api_element("br", {
    key: 280
  }, []), api_text(" <c-dataset labels='[\"A\", \"B\", \"C\", \"D\", \"E\"]'>"), api_element("br", {
    key: 281
  }, []), api_text("  <c-data yaxisid=\"left\" label=\"Left dataset\" detail=\"[10, 9, 4, 3, 6]\" backgroundcolor=\"rgba(82, 183, 216, 1)\""), api_element("br", {
    key: 282
  }, []), api_text("   bordercolor=\"rgba(82, 183, 216, 0.2)\" fill=\"false\"></c-data>"), api_element("br", {
    key: 283
  }, []), api_text("  <c-data yaxisid=\"right\" label=\"Right dataset\" detail=\"[3, 2, 1, 5, 0]\" backgroundcolor=\"rgba(84, 167, 123, 1)\""), api_element("br", {
    key: 284
  }, []), api_text("   bordercolor=\"rgba(84, 167, 123, 0.2)\" fill=\"false\"></c-data>"), api_element("br", {
    key: 285
  }, []), api_text(" </c-dataset>"), api_element("br", {
    key: 286
  }, []), api_text(" <c-title text=\"Multiple axes with different scales\"></c-title>"), api_element("br", {
    key: 287
  }, []), api_text(" <c-cartesian-axis axis=\"x\" position=\"bottom\" type=\"category\"></c-cartesian-axis>"), api_element("br", {
    key: 288
  }, []), api_text(" <c-cartesian-linear-axis axisid=\"left\" axis=\"y\" position=\"left\" ticks-stepsize=\"3\" title-labelstring=\"Left axis\""), api_element("br", {
    key: 289
  }, []), api_text("  title-display=\"true\"></c-cartesian-linear-axis>"), api_element("br", {
    key: 290
  }, []), api_text(" <c-cartesian-linear-axis axisid=\"right\" axis=\"y\" position=\"right\" ticks-stepsize=\"1\" title-labelstring=\"Right axis\""), api_element("br", {
    key: 291
  }, []), api_text("  title-display=\"true\"></c-cartesian-linear-axis>"), api_element("br", {
    key: 292
  }, []), api_text("</c-chart>")])])])];
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets$2) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$2);
}
tmpl.stylesheetTokens = {
  hostAttribute: "c-sampleApp_sampleApp-host",
  shadowAttribute: "c-sampleApp_sampleApp"
};

class SampleApp extends BaseLightningElement {
  constructor(...args) {
    super(...args);
    this.filterTypes = [];
  }

  renderedCallback() {
    if (this.filterTypes.length === 0) {
      this.filterTypes = [...new Set([...this.template.querySelectorAll('c-chart')].map(chart => chart.type))];
    }
  }

  displayAllCharts() {
    this.template.querySelectorAll('c-chart').forEach(item => {
      item.closest('c-sample-app-item').classList.remove('slds-hide');
    });
  }

  displayFilteredCharts(event) {
    this.template.querySelectorAll('c-chart').forEach(item => {
      const parent = item.closest('c-sample-app-item');
      if (!parent) return;

      if (item.type.toUpperCase() === event.target.innerText) {
        parent.classList.remove('slds-hide');
      } else {
        parent.classList.add('slds-hide');
      }
    });
  }

}

registerDecorators(SampleApp, {
  fields: ["filterTypes"]
});

var SampleApp$1 = registerComponent(SampleApp, {
  tmpl: _tmpl
});

const sampleApp = createElement('lwcc-samples', {
  is: SampleApp$1
});
const container = document.body.querySelector('.container') || document.body;
container.appendChild(sampleApp);
