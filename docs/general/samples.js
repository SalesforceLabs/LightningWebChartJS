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
  keys,
  seal,
  setPrototypeOf
} = Object;
const {
  isArray
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
  slice: ArraySlice,
  splice: ArraySplice,
  unshift: ArrayUnshift,
  forEach
} = Array.prototype;
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

function isTrue$1(obj) {
  return obj === true;
}

function isFalse$1(obj) {
  return obj === false;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function isObject(obj) {
  return typeof obj === 'object';
}

const OtS = {}.toString;

function toString(obj) {
  if (obj && obj.toString) {
    if (isArray(obj)) {
      return ArrayJoin.call(ArrayMap.call(obj, toString), ',');
    }

    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS.call(obj);
  } else {
    return obj + emptyString;
  }
}

function getPropertyDescriptor(o, p) {
  do {
    const d = getOwnPropertyDescriptor(o, p);

    if (!isUndefined(d)) {
      return d;
    }

    o = getPrototypeOf(o);
  } while (o !== null);
}

const emptyString = '';
const hasNativeSymbolsSupport = Symbol('x').toString() === 'Symbol(x)';

function createHiddenField(key, namespace) {
  return hasNativeSymbolsSupport ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
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
  appendChild,
  cloneNode,
  compareDocumentPosition,
  insertBefore,
  removeChild,
  replaceChild,
  hasChildNodes
} = Node.prototype;
const {
  contains
} = HTMLElement.prototype;
const firstChildGetter = getOwnPropertyDescriptor(Node.prototype, 'firstChild').get;
const lastChildGetter = getOwnPropertyDescriptor(Node.prototype, 'lastChild').get;
const textContentGetter = getOwnPropertyDescriptor(Node.prototype, 'textContent').get;
const parentNodeGetter = getOwnPropertyDescriptor(Node.prototype, 'parentNode').get;
const ownerDocumentGetter = getOwnPropertyDescriptor(Node.prototype, 'ownerDocument').get;
const parentElementGetter = hasOwnProperty.call(Node.prototype, 'parentElement') ? getOwnPropertyDescriptor(Node.prototype, 'parentElement').get : getOwnPropertyDescriptor(HTMLElement.prototype, 'parentElement').get;
const textContextSetter = getOwnPropertyDescriptor(Node.prototype, 'textContent').set;
const childNodesGetter = hasOwnProperty.call(Node.prototype, 'childNodes') ? getOwnPropertyDescriptor(Node.prototype, 'childNodes').get : getOwnPropertyDescriptor(HTMLElement.prototype, 'childNodes').get;
const isConnected = hasOwnProperty.call(Node.prototype, 'isConnected') ? getOwnPropertyDescriptor(Node.prototype, 'isConnected').get : function () {
  const doc = ownerDocumentGetter.call(this);
  return doc === null || (compareDocumentPosition.call(doc, this) & DOCUMENT_POSITION_CONTAINED_BY) !== 0;
};
const {
  addEventListener,
  getAttribute,
  getBoundingClientRect,
  getElementsByTagName,
  getElementsByTagNameNS,
  hasAttribute,
  querySelector,
  querySelectorAll,
  removeAttribute,
  removeEventListener,
  setAttribute
} = Element.prototype;
const attachShadow = hasOwnProperty.call(Element.prototype, 'attachShadow') ? Element.prototype.attachShadow : () => {
  throw new TypeError('attachShadow() is not supported in current browser. Load the @lwc/synthetic-shadow polyfill and use Lightning Web Components');
};
const childElementCountGetter = getOwnPropertyDescriptor(Element.prototype, 'childElementCount').get;
const firstElementChildGetter = getOwnPropertyDescriptor(Element.prototype, 'firstElementChild').get;
const lastElementChildGetter = getOwnPropertyDescriptor(Element.prototype, 'lastElementChild').get;
const innerHTMLDescriptor = hasOwnProperty.call(Element.prototype, 'innerHTML') ? getOwnPropertyDescriptor(Element.prototype, 'innerHTML') : getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML');
const innerHTMLGetter = innerHTMLDescriptor.get;
const innerHTMLSetter = innerHTMLDescriptor.set;
const outerHTMLDescriptor = hasOwnProperty.call(Element.prototype, 'outerHTML') ? getOwnPropertyDescriptor(Element.prototype, 'outerHTML') : getOwnPropertyDescriptor(HTMLElement.prototype, 'outerHTML');
const outerHTMLGetter = outerHTMLDescriptor.get;
const outerHTMLSetter = outerHTMLDescriptor.set;
const tagNameGetter = getOwnPropertyDescriptor(Element.prototype, 'tagName').get;
const tabIndexDescriptor = getOwnPropertyDescriptor(HTMLElement.prototype, 'tabIndex');
const tabIndexGetter = tabIndexDescriptor.get;
const tabIndexSetter = tabIndexDescriptor.set;
const matches = hasOwnProperty.call(Element.prototype, 'matches') ? Element.prototype.matches : Element.prototype.msMatchesSelector;
const childrenGetter = hasOwnProperty.call(Element.prototype, 'children') ? getOwnPropertyDescriptor(Element.prototype, 'children').get : getOwnPropertyDescriptor(HTMLElement.prototype, 'children').get;
const {
  getElementsByClassName
} = HTMLElement.prototype;
const shadowRootGetter = hasOwnProperty.call(Element.prototype, 'shadowRoot') ? getOwnPropertyDescriptor(Element.prototype, 'shadowRoot').get : () => null;
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

const dispatchEvent = 'EventTarget' in window ? EventTarget.prototype.dispatchEvent : Node.prototype.dispatchEvent;
const eventTargetGetter = getOwnPropertyDescriptor(Event.prototype, 'target').get;
const eventCurrentTargetGetter = getOwnPropertyDescriptor(Event.prototype, 'currentTarget').get;
const focusEventRelatedTargetGetter = getOwnPropertyDescriptor(FocusEvent.prototype, 'relatedTarget').get;
const DocumentPrototypeActiveElement = getOwnPropertyDescriptor(Document.prototype, 'activeElement').get;
const elementFromPoint = hasOwnProperty.call(Document.prototype, 'elementFromPoint') ? Document.prototype.elementFromPoint : Document.prototype.msElementFromPoint;
const defaultViewGetter = getOwnPropertyDescriptor(Document.prototype, 'defaultView').get;
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
  removeEventListener: windowRemoveEventListener
} = window;
const MO = MutationObserver;
const MutationObserverObserve = MO.prototype.observe;

function detect() {
  return typeof HTMLSlotElement === 'undefined';
}

const {
  createElement
} = Document.prototype;
const CHAR_S = 115;
const CHAR_L = 108;
const CHAR_O = 111;
const CHAR_T = 116;

function apply() {
  class HTMLSlotElement {}

  setPrototypeOf(HTMLSlotElement, HTMLElement.constructor);
  setPrototypeOf(HTMLSlotElement.prototype, HTMLElement.prototype);
  Window.prototype.HTMLSlotElement = HTMLSlotElement;
  defineProperty(Document.prototype, 'createElement', {
    value: function (tagName, _options) {
      const elm = createElement.apply(this, ArraySlice.call(arguments));

      if (tagName.length === 4 && StringCharCodeAt.call(tagName, 0) === CHAR_S && StringCharCodeAt.call(tagName, 1) === CHAR_L && StringCharCodeAt.call(tagName, 2) === CHAR_O && StringCharCodeAt.call(tagName, 3) === CHAR_T) {
        setPrototypeOf(elm, HTMLSlotElement.prototype);
      }

      return elm;
    }
  });
}

if (detect()) {
  apply();
}

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
  keys: keys$1,
  seal: seal$1,
  setPrototypeOf: setPrototypeOf$1
} = Object;
const hasNativeSymbolsSupport$1 = Symbol('x').toString() === 'Symbol(x)';

let _globalThis;

if (typeof globalThis === 'object') {
  _globalThis = globalThis;
}

function getGlobalThis() {
  if (typeof _globalThis === 'object') {
    return _globalThis;
  }

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
}

const _globalThis$1 = getGlobalThis();

if (!_globalThis$1.lwcRuntimeFlags) {
  Object.defineProperty(_globalThis$1, 'lwcRuntimeFlags', {
    value: create$1(null)
  });
}

const runtimeFlags = _globalThis$1.lwcRuntimeFlags;

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
  if (isUndefined(skipGlobalPatching)) {
    const ownerDocument = getOwnerDocument(node);
    skipGlobalPatching = ownerDocument.body && getAttribute.call(ownerDocument.body, 'data-global-patching-bypass') === 'temporary-bypass';
  }

  return isTrue$1(skipGlobalPatching);
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

function pathComposer(startNode, composed) {
  const composedPath = [];
  let current = startNode;
  const startRoot = startNode instanceof Window ? startNode : startNode.getRootNode();

  while (!isNull(current)) {
    composedPath.push(current);
    let assignedSlot = null;

    if (current instanceof Element) {
      assignedSlot = current.assignedSlot;
    }

    if (!isNull(assignedSlot)) {
      current = assignedSlot;
    } else if (current instanceof ShadowRoot && (composed || current !== startRoot)) {
      current = current.host;
    } else {
      current = current.parentNode;
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
  if (isNull(refNode)) {
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

    if (!(root instanceof SyntheticShadowRoot) || !isUndefined(rootIdx) && rootIdx > -1) {
      return ancestor;
    }
  }

  return null;
}

var EventListenerContext;

(function (EventListenerContext) {
  EventListenerContext[EventListenerContext["CUSTOM_ELEMENT_LISTENER"] = 1] = "CUSTOM_ELEMENT_LISTENER";
  EventListenerContext[EventListenerContext["SHADOW_ROOT_LISTENER"] = 2] = "SHADOW_ROOT_LISTENER";
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

function targetGetter() {
  const originalCurrentTarget = eventCurrentTargetGetter.call(this);
  const originalTarget = eventTargetGetter.call(this);
  const composedPath = pathComposer(originalTarget, this.composed);
  const doc = getOwnerDocument(originalTarget);

  if (!(originalCurrentTarget instanceof Node)) {
    if (isNull(originalCurrentTarget) && isUndefined(getNodeOwnerKey(originalTarget))) {
      return originalTarget;
    }

    return retarget(doc, composedPath);
  } else if (originalCurrentTarget === doc || originalCurrentTarget === doc.body) {
    if (isUndefined(getNodeOwnerKey(originalTarget))) {
      return originalTarget;
    }

    return retarget(doc, composedPath);
  }

  const eventContext = eventToContextMap.get(this);
  const currentTarget = eventContext === EventListenerContext.SHADOW_ROOT_LISTENER ? getShadowRoot(originalCurrentTarget) : originalCurrentTarget;
  return retarget(currentTarget, composedPath);
}

function composedPathValue() {
  const originalTarget = eventTargetGetter.call(this);
  const originalCurrentTarget = eventCurrentTargetGetter.call(this);
  return isNull(originalCurrentTarget) ? [] : pathComposer(originalTarget, this.composed);
}

function patchEvent(event) {
  if (eventToContextMap.has(event)) {
    return;
  }

  defineProperties(event, {
    target: {
      get: targetGetter,
      enumerable: true,
      configurable: true
    },
    composedPath: {
      value: composedPathValue,
      writable: true,
      enumerable: true,
      configurable: true
    },
    srcElement: {
      get: targetGetter,
      enumerable: true,
      configurable: true
    },
    path: {
      get: composedPathValue,
      enumerable: true,
      configurable: true
    }
  });
  const originalRelatedTargetDescriptor = getPropertyDescriptor(event, 'relatedTarget');

  if (!isUndefined(originalRelatedTargetDescriptor)) {
    const relatedTargetGetter = originalRelatedTargetDescriptor.get;
    defineProperty(event, 'relatedTarget', {
      get() {
        const eventContext = eventToContextMap.get(this);
        const originalCurrentTarget = eventCurrentTargetGetter.call(this);
        const relatedTarget = relatedTargetGetter.call(this);

        if (isNull(relatedTarget)) {
          return null;
        }

        const currentTarget = eventContext === EventListenerContext.SHADOW_ROOT_LISTENER ? getShadowRoot(originalCurrentTarget) : originalCurrentTarget;
        return retarget(currentTarget, pathComposer(relatedTarget, true));
      },

      enumerable: true,
      configurable: true
    });
  }

  eventToContextMap.set(event, 0);
}

const customElementToWrappedListeners = new WeakMap();

function getEventMap(elm) {
  let listenerInfo = customElementToWrappedListeners.get(elm);

  if (isUndefined(listenerInfo)) {
    listenerInfo = create(null);
    customElementToWrappedListeners.set(elm, listenerInfo);
  }

  return listenerInfo;
}

const shadowRootEventListenerMap = new WeakMap();

function getWrappedShadowRootListener(sr, listener) {
  if (!isFunction(listener)) {
    throw new TypeError();
  }

  let shadowRootWrappedListener = shadowRootEventListenerMap.get(listener);

  if (isUndefined(shadowRootWrappedListener)) {
    shadowRootWrappedListener = function (event) {
      const {
        composed
      } = event;
      const target = eventTargetGetter.call(event);
      const currentTarget = eventCurrentTargetGetter.call(event);

      if (target !== currentTarget) {
        const rootNode = getRootNodeHost(target, {
          composed
        });

        if (isChildNode(rootNode, currentTarget) || composed === false && rootNode === currentTarget) {
          listener.call(sr, event);
        }
      }
    };

    shadowRootWrappedListener.placement = EventListenerContext.SHADOW_ROOT_LISTENER;

    {
      shadowRootWrappedListener.original = listener;
    }

    shadowRootEventListenerMap.set(listener, shadowRootWrappedListener);
  }

  return shadowRootWrappedListener;
}

const customElementEventListenerMap = new WeakMap();

function getWrappedCustomElementListener(elm, listener) {
  if (!isFunction(listener)) {
    throw new TypeError();
  }

  let customElementWrappedListener = customElementEventListenerMap.get(listener);

  if (isUndefined(customElementWrappedListener)) {
    customElementWrappedListener = function (event) {
      if (isValidEventForCustomElement(event)) {
        listener.call(elm, event);
      }
    };

    customElementWrappedListener.placement = EventListenerContext.CUSTOM_ELEMENT_LISTENER;

    {
      customElementWrappedListener.original = listener;
    }

    customElementEventListenerMap.set(listener, customElementWrappedListener);
  }

  return customElementWrappedListener;
}

function domListener(evt) {
  patchEvent(evt);
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
  defineProperty(evt, 'stopImmediatePropagation', {
    value() {
      immediatePropagationStopped = true;
      stopImmediatePropagation.call(evt);
    },

    writable: true,
    enumerable: true,
    configurable: true
  });
  defineProperty(evt, 'stopPropagation', {
    value() {
      propagationStopped = true;
      stopPropagation.call(evt);
    },

    writable: true,
    enumerable: true,
    configurable: true
  });
  const bookkeeping = ArraySlice.call(listeners);

  function invokeListenersByPlacement(placement) {
    forEach.call(bookkeeping, listener => {
      if (isFalse$1(immediatePropagationStopped) && listener.placement === placement) {
        if (ArrayIndexOf.call(listeners, listener) !== -1) {
          listener.call(undefined, evt);
        }
      }
    });
  }

  eventToContextMap.set(evt, EventListenerContext.SHADOW_ROOT_LISTENER);
  invokeListenersByPlacement(EventListenerContext.SHADOW_ROOT_LISTENER);

  if (isFalse$1(immediatePropagationStopped) && isFalse$1(propagationStopped)) {
    eventToContextMap.set(evt, EventListenerContext.CUSTOM_ELEMENT_LISTENER);
    invokeListenersByPlacement(EventListenerContext.CUSTOM_ELEMENT_LISTENER);
  }

  eventToContextMap.set(evt, 0);
}

function attachDOMListener(elm, type, wrappedListener) {
  const listenerMap = getEventMap(elm);
  let cmpEventHandlers = listenerMap[type];

  if (isUndefined(cmpEventHandlers)) {
    cmpEventHandlers = listenerMap[type] = [];
  }

  if (cmpEventHandlers.length === 0) {
    addEventListener.call(elm, type, domListener);
  }

  ArrayPush.call(cmpEventHandlers, wrappedListener);
}

function detachDOMListener(elm, type, wrappedListener) {
  const listenerMap = getEventMap(elm);
  let p;
  let listeners;

  if (!isUndefined(listeners = listenerMap[type]) && (p = ArrayIndexOf.call(listeners, wrappedListener)) !== -1) {
    ArraySplice.call(listeners, p, 1);

    if (listeners.length === 0) {
      removeEventListener.call(elm, type, domListener);
    }
  }
}

function isValidEventForCustomElement(event) {
  const target = eventTargetGetter.call(event);
  const currentTarget = eventCurrentTargetGetter.call(event);
  const {
    composed
  } = event;
  return composed === true || target === currentTarget || isChildNode(getRootNodeHost(target, GET_ROOT_NODE_CONFIG_FALSE), currentTarget);
}

function addCustomElementEventListener(elm, type, listener, _options) {
  {
    if (!isFunction(listener)) {
      throw new TypeError(`Invalid second argument for Element.addEventListener() in ${toString(elm)} for event "${type}". Expected an EventListener but received ${listener}.`);
    }
  }

  const wrappedListener = getWrappedCustomElementListener(elm, listener);
  attachDOMListener(elm, type, wrappedListener);
}

function removeCustomElementEventListener(elm, type, listener, _options) {
  const wrappedListener = getWrappedCustomElementListener(elm, listener);
  detachDOMListener(elm, type, wrappedListener);
}

function addShadowRootEventListener(sr, type, listener, _options) {
  {
    if (!isFunction(listener)) {
      throw new TypeError(`Invalid second argument for ShadowRoot.addEventListener() in ${toString(sr)} for event "${type}". Expected an EventListener but received ${listener}.`);
    }
  }

  const elm = getHost(sr);
  const wrappedListener = getWrappedShadowRootListener(sr, listener);
  attachDOMListener(elm, type, wrappedListener);
}

function removeShadowRootEventListener(sr, type, listener, _options) {
  const elm = getHost(sr);
  const wrappedListener = getWrappedShadowRootListener(sr, listener);
  detachDOMListener(elm, type, wrappedListener);
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

const Items = createHiddenField('StaticNodeListItems', 'synthetic-shadow');

function StaticNodeList() {
  throw new TypeError('Illegal constructor');
}

StaticNodeList.prototype = create(NodeList.prototype, {
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
      return getHiddenField(this, Items).length;
    }

  },
  forEach: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(cb, thisArg) {
      forEach.call(getHiddenField(this, Items), cb, thisArg);
    }

  },
  entries: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return ArrayMap.call(getHiddenField(this, Items), (v, i) => [i, v]);
    }

  },
  keys: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return ArrayMap.call(getHiddenField(this, Items), (_v, i) => i);
    }

  },
  values: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return getHiddenField(this, Items);
    }

  },
  [Symbol.iterator]: {
    writable: true,
    configurable: true,

    value() {
      let nextIndex = 0;
      return {
        next: () => {
          const items = getHiddenField(this, Items);
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
setPrototypeOf(StaticNodeList, NodeList);

function createStaticNodeList(items) {
  const nodeList = create(StaticNodeList.prototype);
  setHiddenField(nodeList, Items, items);
  forEach.call(items, (item, index) => {
    defineProperty(nodeList, index, {
      value: item,
      enumerable: true,
      configurable: true
    });
  });
  return nodeList;
}

const Items$1 = createHiddenField('StaticHTMLCollectionItems', 'synthetic-shadow');

function StaticHTMLCollection() {
  throw new TypeError('Illegal constructor');
}

StaticHTMLCollection.prototype = create(HTMLCollection.prototype, {
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
      return getHiddenField(this, Items$1).length;
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

      const items = getHiddenField(this, Items$1);

      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[len];

        if (name === getAttribute.call(item, 'id') || name === getAttribute.call(item, 'name')) {
          return item;
        }
      }

      return null;
    }

  },
  forEach: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(cb, thisArg) {
      forEach.call(getHiddenField(this, Items$1), cb, thisArg);
    }

  },
  entries: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return ArrayMap.call(getHiddenField(this, Items$1), (v, i) => [i, v]);
    }

  },
  keys: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return ArrayMap.call(getHiddenField(this, Items$1), (v, i) => i);
    }

  },
  values: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      return getHiddenField(this, Items$1);
    }

  },
  [Symbol.iterator]: {
    writable: true,
    configurable: true,

    value() {
      let nextIndex = 0;
      return {
        next: () => {
          const items = getHiddenField(this, Items$1);
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
setPrototypeOf(StaticHTMLCollection, HTMLCollection);

function createStaticHTMLCollection(items) {
  const collection = create(StaticHTMLCollection.prototype);
  setHiddenField(collection, Items$1, items);
  forEach.call(items, (item, index) => {
    defineProperty(collection, index, {
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

const InternalSlot = createHiddenField('shadowRecord', 'synthetic-shadow');
const {
  createDocumentFragment
} = document;

function getInternalSlot(root) {
  const record = getHiddenField(root, InternalSlot);

  if (isUndefined(record)) {
    throw new TypeError();
  }

  return record;
}

const ShadowRootResolverKey = '$shadowResolver$';
const ShadowResolverPrivateKey = '$$ShadowResolverKey$$';
defineProperty(Node.prototype, ShadowRootResolverKey, {
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

function isHostElement(elm) {
  return !isUndefined(getHiddenField(elm, InternalSlot));
}

let uid = 0;

function attachShadow$1(elm, options) {
  if (!isUndefined(getHiddenField(elm, InternalSlot))) {
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
  setHiddenField(sr, InternalSlot, record);
  setHiddenField(elm, InternalSlot, record);

  const shadowResolver = () => sr;

  const x = shadowResolver.nodeKey = uid++;
  setNodeKey(elm, x);
  setShadowRootResolver(sr, shadowResolver);
  setPrototypeOf(sr, SyntheticShadowRoot.prototype);
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

      if (isNull(activeElement)) {
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

      if (isNull(element)) {
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
      throw new Error();
    }

  },
  getSelection: {
    writable: true,
    enumerable: true,
    configurable: true,

    value() {
      throw new Error();
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
const NodePatchDescriptors = {
  insertBefore: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(newChild, refChild) {
      insertBefore.call(getHost(this), newChild, refChild);
      return newChild;
    }

  },
  removeChild: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(oldChild) {
      removeChild.call(getHost(this), oldChild);
      return oldChild;
    }

  },
  appendChild: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(newChild) {
      appendChild.call(getHost(this), newChild);
      return newChild;
    }

  },
  replaceChild: {
    writable: true,
    enumerable: true,
    configurable: true,

    value(newChild, oldChild) {
      replaceChild.call(getHost(this), newChild, oldChild);
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
      return !isUndefined(options) && isTrue$1(options.composed) ? getHost(this).getRootNode(options) : this;
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
      return createStaticHTMLCollection(ArrayFilter.call(shadowRootChildNodes(this), elm => elm instanceof Element));
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
assign(SyntheticShadowRootDescriptors, NodePatchDescriptors, ParentNodePatchDescriptors, ElementPatchDescriptors, ShadowRootDescriptors);

function SyntheticShadowRoot() {
  throw new TypeError('Illegal constructor');
}

SyntheticShadowRoot.prototype = create(DocumentFragment.prototype, SyntheticShadowRootDescriptors);

function getIE11FakeShadowRootPlaceholder(host) {
  const shadowRoot = getShadowRoot(host);
  let c = shadowRoot.$$placeholder$$;

  if (!isUndefined(c)) {
    return c;
  }

  const doc = getOwnerDocument(host);
  c = shadowRoot.$$placeholder$$ = createComment.call(doc, '');
  defineProperties(c, {
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

function foldSlotElement(slot) {
  let parent = parentElementGetter.call(slot);

  while (!isNull(parent) && isSlotElement(parent)) {
    slot = parent;
    parent = parentElementGetter.call(slot);
  }

  return slot;
}

function isNodeSlotted(host, node) {
  {
    assert.invariant(host instanceof HTMLElement, `isNodeSlotted() should be called with a host as the first argument instead of ${host}`);
    assert.invariant(node instanceof Node, `isNodeSlotted() should be called with a node as the second argument instead of ${node}`);
    assert.invariant(compareDocumentPosition.call(node, host) & DOCUMENT_POSITION_CONTAINS, `isNodeSlotted() should never be called with a node that is not a child node of ${host}`);
  }

  const hostKey = getNodeKey(host);
  let currentElement = node instanceof Element ? node : parentElementGetter.call(node);

  while (!isNull(currentElement) && currentElement !== host) {
    const elmOwnerKey = getNodeNearestOwnerKey(currentElement);
    const parent = parentElementGetter.call(currentElement);

    if (elmOwnerKey === hostKey) {
      return isSlotElement(currentElement);
    } else if (parent === host) {
      return false;
    } else if (!isNull(parent) && getNodeNearestOwnerKey(parent) !== elmOwnerKey) {
      if (isSlotElement(parent)) {
        currentElement = getNodeOwner(foldSlotElement(parent));

        if (!isNull(currentElement)) {
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

  if (isUndefined(ownerKey)) {
    return null;
  }

  let nodeOwner = node;

  while (!isNull(nodeOwner) && getNodeKey(nodeOwner) !== ownerKey) {
    nodeOwner = parentNodeGetter.call(nodeOwner);
  }

  if (isNull(nodeOwner)) {
    return null;
  }

  return nodeOwner;
}

function isSlotElement(node) {
  return node instanceof HTMLSlotElement;
}

function isNodeOwnedBy(owner, node) {
  {
    assert.invariant(owner instanceof HTMLElement, `isNodeOwnedBy() should be called with an element as the first argument instead of ${owner}`);
    assert.invariant(node instanceof Node, `isNodeOwnedBy() should be called with a node as the second argument instead of ${node}`);
    assert.invariant(compareDocumentPosition.call(node, owner) & DOCUMENT_POSITION_CONTAINS, `isNodeOwnedBy() should never be called with a node that is not a child node of ${owner}`);
  }

  const ownerKey = getNodeNearestOwnerKey(node);
  return isUndefined(ownerKey) || getNodeKey(owner) === ownerKey;
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
      ArrayPush.call(filteredAndPatched, node);
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
      ArrayPush.call(filteredAndPatched, node);
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
    return ArrayReduce.call(slots, (seed, slot) => {
      if (resolver === getShadowRootResolver(slot)) {
        ArrayPush.apply(seed, getFilteredSlotAssignedNodes(slot));
      }

      return seed;
    }, []);
  } else {
    children = arrayFromCollection(childNodesGetter.call(node));
    const resolver = getShadowRootResolver(node);
    return ArrayReduce.call(children, (seed, child) => {
      if (resolver === getShadowRootResolver(child)) {
        ArrayPush.call(seed, child);
      }

      return seed;
    }, []);
  }
}

function getFilteredSlotAssignedNodes(slot) {
  const owner = getNodeOwner(slot);

  if (isNull(owner)) {
    return [];
  }

  const childNodes = arrayFromCollection(childNodesGetter.call(slot));
  return ArrayReduce.call(childNodes, (seed, child) => {
    if (!isNodeOwnedBy(owner, child)) {
      ArrayPush.call(seed, child);
    }

    return seed;
  }, []);
}

const OwnKey = '$$OwnKey$$';
const OwnerKey = '$$OwnerKey$$';
const hasNativeSymbolsSupport$2 = Symbol('x').toString() === 'Symbol(x)';

function getNodeOwnerKey(node) {
  return node[OwnerKey];
}

function setNodeOwnerKey(node, value) {
  {
    defineProperty(node, OwnerKey, {
      value,
      configurable: true
    });
  }
}

function getNodeKey(node) {
  return node[OwnKey];
}

function setNodeKey(node, value) {
  {
    defineProperty(node, OwnKey, {
      value
    });
  }
}

function getNodeNearestOwnerKey(node) {
  let ownerNode = node;
  let ownerKey;

  while (!isNull(ownerNode)) {
    ownerKey = getNodeOwnerKey(ownerNode);

    if (!isUndefined(ownerKey)) {
      return ownerKey;
    }

    ownerNode = parentNodeGetter.call(ownerNode);
  }
}

function isNodeShadowed(node) {
  return !isUndefined(getNodeOwnerKey(node));
}

function isNodeDeepShadowed(node) {
  return !isUndefined(getNodeNearestOwnerKey(node));
}

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
    } else if (!isNull(owner) && isSlotElement(value)) {
      const slotOwner = getNodeOwner(value);

      if (!isNull(slotOwner) && isNodeOwnedBy(owner, slotOwner)) {
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

  if (isNull(value)) {
    return value;
  }

  return getShadowParent(this, value);
}

function parentElementGetterPatched() {
  const value = parentNodeGetter.call(this);

  if (isNull(value)) {
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
  if (this instanceof Element && isHostElement(this)) {
    const owner = getNodeOwner(this);
    const childNodes = isNull(owner) ? [] : getAllMatches(owner, getFilteredChildNodes(this));

    if ( isFalse$1(hasNativeSymbolsSupport$2) && isExternalChildNodeAccessorFlagOn()) {
      ArrayUnshift.call(childNodes, getIE11FakeShadowRootPlaceholder(this));
    }

    return createStaticNodeList(childNodes);
  }

  return childNodesGetter.call(this);
}

const nativeGetRootNode = Node.prototype.getRootNode;
const getDocumentOrRootNode = !isUndefined(nativeGetRootNode) ? nativeGetRootNode : function () {
  let node = this;
  let nodeParent;

  while (!isNull(nodeParent = parentNodeGetter.call(node))) {
    node = nodeParent;
  }

  return node;
};

function getNearestRoot(node) {
  const ownerNode = getNodeOwner(node);

  if (isNull(ownerNode)) {
    return getDocumentOrRootNode.call(node);
  }

  return getShadowRoot(ownerNode);
}

function getRootNodePatched(options) {
  const composed = isUndefined(options) ? false : !!options.composed;
  return isTrue$1(composed) ? getDocumentOrRootNode.call(this, options) : getNearestRoot(this);
}

defineProperties(Node.prototype, {
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
      if (!runtimeFlags.ENABLE_NODE_PATCH) {
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

      if (!runtimeFlags.ENABLE_NODE_PATCH) {
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
      if (!runtimeFlags.ENABLE_NODE_PATCH) {
        if (isNodeShadowed(this) || isHostElement(this)) {
          return cloneNodePatched.call(this, deep);
        }

        return cloneNode.call(this, deep);
      }

      if (isTrue$1(deep)) {
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

const getInternalChildNodes =  isFalse$1(hasNativeSymbolsSupport$2) ? function (node) {
  internalChildNodeAccessorFlag = true;
  let childNodes;
  let error = null;

  try {
    childNodes = node.childNodes;
  } catch (e) {
    error = e;
  } finally {
    internalChildNodeAccessorFlag = false;

    if (!isNull(error)) {
      throw error;
    }
  }

  return childNodes;
} : function (node) {
  return node.childNodes;
};

if (hasOwnProperty.call(HTMLElement.prototype, 'contains')) {
  defineProperty(HTMLElement.prototype, 'contains', getOwnPropertyDescriptor(Node.prototype, 'contains'));
}

if (hasOwnProperty.call(HTMLElement.prototype, 'parentElement')) {
  defineProperty(HTMLElement.prototype, 'parentElement', getOwnPropertyDescriptor(Node.prototype, 'parentElement'));
}

function elemFromPoint(left, top) {
  const element = elementFromPoint.call(this, left, top);

  if (isNull(element)) {
    return element;
  }

  return retarget(this, pathComposer(element, true));
}

Document.prototype.elementFromPoint = elemFromPoint;
defineProperty(Document.prototype, 'activeElement', {
  get() {
    let node = DocumentPrototypeActiveElement.call(this);

    if (isNull(node)) {
      return node;
    }

    while (!isUndefined(getNodeOwnerKey(node))) {
      node = parentElementGetter.call(node);

      if (isNull(node)) {
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
defineProperty(Document.prototype, 'getElementById', {
  value() {
    const elm = getElementById.apply(this, ArraySlice.call(arguments));

    if (isNull(elm)) {
      return null;
    }

    return isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm) ? elm : null;
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty(Document.prototype, 'querySelector', {
  value() {
    const elements = arrayFromCollection(querySelectorAll$1.apply(this, ArraySlice.call(arguments)));
    const filtered = ArrayFind.call(elements, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return !isUndefined(filtered) ? filtered : null;
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty(Document.prototype, 'querySelectorAll', {
  value() {
    const elements = arrayFromCollection(querySelectorAll$1.apply(this, ArraySlice.call(arguments)));
    const filtered = ArrayFilter.call(elements, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticNodeList(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty(Document.prototype, 'getElementsByClassName', {
  value() {
    const elements = arrayFromCollection(getElementsByClassName$1.apply(this, ArraySlice.call(arguments)));
    const filtered = ArrayFilter.call(elements, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticHTMLCollection(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty(Document.prototype, 'getElementsByTagName', {
  value() {
    const elements = arrayFromCollection(getElementsByTagName$1.apply(this, ArraySlice.call(arguments)));
    const filtered = ArrayFilter.call(elements, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticHTMLCollection(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty(Document.prototype, 'getElementsByTagNameNS', {
  value() {
    const elements = arrayFromCollection(getElementsByTagNameNS$1.apply(this, ArraySlice.call(arguments)));
    const filtered = ArrayFilter.call(elements, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
    return createStaticHTMLCollection(filtered);
  },

  writable: true,
  enumerable: true,
  configurable: true
});
defineProperty(getOwnPropertyDescriptor(HTMLDocument.prototype, 'getElementsByName') ? HTMLDocument.prototype : Document.prototype, 'getElementsByName', {
  value() {
    const elements = arrayFromCollection(getElementsByName.apply(this, ArraySlice.call(arguments)));
    const filtered = ArrayFilter.call(elements, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(elm));
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

function doesEventNeedsPatch(e) {
  const originalTarget = eventTargetGetter.call(e);
  return originalTarget instanceof Node && isNodeDeepShadowed(originalTarget);
}

function isValidEventListener(listener) {
  return isFunction(listener) || !isNull(listener) && isObject(listener) && isFunction(listener.handleEvent);
}

function getEventListenerWrapper(listener) {
  if ('$$lwcEventWrapper$$' in listener) {
    return listener.$$lwcEventWrapper$$;
  }

  const isHandlerFunction = isFunction(listener);

  const wrapperFn = listener.$$lwcEventWrapper$$ = function (e) {
    if (doesEventNeedsPatch(e)) {
      patchEvent(e);
    }

    return isHandlerFunction ? listener.call(this, e) : listener.handleEvent && listener.handleEvent(e);
  };

  return wrapperFn;
}

function windowAddEventListener$1(type, listener, optionsOrCapture) {
  if (!isValidEventListener(listener)) {
    return;
  }

  const wrapperFn = getEventListenerWrapper(listener);
  windowAddEventListener.call(this, type, wrapperFn, optionsOrCapture);
}

function windowRemoveEventListener$1(type, listener, optionsOrCapture) {
  if (!isValidEventListener(listener)) {
    return;
  }

  const wrapperFn = getEventListenerWrapper(listener);
  windowRemoveEventListener.call(this, type, wrapperFn || listener, optionsOrCapture);
}

function addEventListener$1(type, listener, optionsOrCapture) {
  if (!isValidEventListener(listener)) {
    return;
  }

  const wrapperFn = getEventListenerWrapper(listener);
  addEventListener.call(this, type, wrapperFn, optionsOrCapture);
}

function removeEventListener$1(type, listener, optionsOrCapture) {
  if (!isValidEventListener(listener)) {
    return;
  }

  const wrapperFn = getEventListenerWrapper(listener);
  removeEventListener.call(this, type, wrapperFn || listener, optionsOrCapture);
}

window.addEventListener = windowAddEventListener$1;
window.removeEventListener = windowRemoveEventListener$1;
const protoToBePatched = typeof EventTarget !== 'undefined' ? EventTarget.prototype : Node.prototype;
defineProperties(protoToBePatched, {
  addEventListener: {
    value: addEventListener$1,
    enumerable: true,
    writable: true,
    configurable: true
  },
  removeEventListener: {
    value: removeEventListener$1,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

function detect$1() {
  return new Event('test', {
    composed: true
  }).composed !== true;
}

function apply$1() {
  const composedEvents = assign(create(null), {
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

if (detect$1()) {
  apply$1();
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
const originalComposedGetter = Object.getOwnPropertyDescriptor(Event.prototype, 'composed').get;
Object.defineProperties(FocusEvent.prototype, {
  composed: {
    get() {
      const {
        isTrusted
      } = this;
      const composed = originalComposedGetter.call(this);

      if (isTrusted && composed === false) {
        return true;
      }

      return composed;
    },

    enumerable: true,
    configurable: true
  }
});

if (typeof ClipboardEvent !== 'undefined') {
  const isComposedType = assign(create(null), {
    copy: 1,
    cut: 1,
    paste: 1
  });
  defineProperties(ClipboardEvent.prototype, {
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

function detect$2() {
  return typeof HTMLIFrameElement !== 'undefined';
}

function apply$2() {
  const desc = getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentWindow');
  const {
    get: originalGetter
  } = desc;

  desc.get = function () {
    const original = originalGetter.call(this);

    if (isNull(original) || isUndefined(getNodeOwnerKey(this))) {
      return original;
    }

    return wrapIframeWindow(original);
  };

  defineProperty(HTMLIFrameElement.prototype, 'contentWindow', desc);
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

if (detect$2()) {
  apply$2();
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
  const retargetedRecord = create(MutationRecord.prototype);
  defineProperties(retargetedRecord, {
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

  while (!isNull(parentNode)) {
    const parentNodeObservers = getNodeObservers(parentNode);

    if (!isUndefined(parentNodeObservers) && (parentNodeObservers[0] === observer || ArrayIndexOf.call(parentNodeObservers, observer) !== -1)) {
      return true;
    }

    parentNode = parentNode.parentNode;
  }

  return false;
}

function filterMutationRecords(mutations, observer) {
  return ArrayReduce.call(mutations, (filteredSet, record) => {
    const {
      target,
      addedNodes,
      removedNodes,
      type
    } = record;

    if (type === 'childList' && !isUndefined(getNodeKey(target))) {
      if (addedNodes.length > 0) {
        const sampleNode = addedNodes[0];

        if (isQualifiedObserver(observer, sampleNode)) {
          const nodeObservers = getNodeObservers(target);

          if (nodeObservers && (nodeObservers[0] === observer || ArrayIndexOf.call(nodeObservers, observer) !== -1)) {
            ArrayPush.call(filteredSet, record);
          } else {
            ArrayPush.call(filteredSet, retargetMutationRecord(record));
          }
        }
      } else {
        const shadowRoot = target.shadowRoot;
        const sampleNode = removedNodes[0];

        if (getNodeNearestOwnerKey(target) === getNodeNearestOwnerKey(sampleNode) && isQualifiedObserver(observer, target)) {
          ArrayPush.call(filteredSet, record);
        } else if (shadowRoot) {
          const shadowRootObservers = getNodeObservers(shadowRoot);

          if (shadowRootObservers && (shadowRootObservers[0] === observer || ArrayIndexOf.call(shadowRootObservers, observer) !== -1)) {
            ArrayPush.call(filteredSet, retargetMutationRecord(record));
          }
        }
      }
    } else {
      if (isQualifiedObserver(observer, target)) {
        ArrayPush.call(filteredSet, record);
      }
    }

    return filteredSet;
  }, []);
}

function getWrappedCallback(callback) {
  let wrappedCallback = callback[wrapperLookupField];

  if (isUndefined(wrappedCallback)) {
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

  if (!isUndefined(observedNodes)) {
    forEach.call(observedNodes, observedNode => {
      const observers = observedNode[observerLookupField];

      if (!isUndefined(observers)) {
        const index = ArrayIndexOf.call(observers, this);

        if (index !== -1) {
          ArraySplice.call(observers, index, 1);
        }
      }
    });
    observedNodes.length = 0;
  }
}

function patchedObserve(target, options) {
  let targetObservers = getNodeObservers(target);

  if (isUndefined(targetObservers)) {
    targetObservers = [];
    setNodeObservers(target, targetObservers);
  }

  if (ArrayIndexOf.call(targetObservers, this) === -1) {
    ArrayPush.call(targetObservers, this);
  }

  if (target instanceof SyntheticShadowRoot) {
    target = target.host;
  }

  if (observerToNodesMap.has(this)) {
    const observedNodes = observerToNodesMap.get(this);

    if (ArrayIndexOf.call(observedNodes, target) === -1) {
      ArrayPush.call(observedNodes, target);
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
defineProperty(window, 'MutationObserver', {
  value: PatchedMutationObserver,
  configurable: true,
  writable: true
});
let observer;
const observerConfig = {
  childList: true
};
const SlotChangeKey = createHiddenField('slotchange', 'synthetic-shadow');

function initSlotObserver() {
  return new MO(mutations => {
    const slots = [];
    forEach.call(mutations, mutation => {
      {
        assert.invariant(mutation.type === 'childList', `Invalid mutation type: ${mutation.type}. This mutation handler for slots should only handle "childList" mutations.`);
      }

      const {
        target: slot
      } = mutation;

      if (ArrayIndexOf.call(slots, slot) === -1) {
        ArrayPush.call(slots, slot);
        dispatchEvent.call(slot, new CustomEvent('slotchange'));
      }
    });
  });
}

function getFilteredSlotFlattenNodes(slot) {
  const childNodes = arrayFromCollection(childNodesGetter.call(slot));
  return ArrayReduce.call(childNodes, (seed, child) => {
    if (child instanceof Element && isSlotElement(child)) {
      ArrayPush.apply(seed, getFilteredSlotFlattenNodes(child));
    } else {
      ArrayPush.call(seed, child);
    }

    return seed;
  }, []);
}

function assignedSlotGetterPatched() {
  const parentNode = parentNodeGetter.call(this);

  if (isNull(parentNode) || !isSlotElement(parentNode) || getNodeNearestOwnerKey(parentNode) === getNodeNearestOwnerKey(this)) {
    return null;
  }

  return parentNode;
}

defineProperties(HTMLSlotElement.prototype, {
  addEventListener: {
    value(type, listener, options) {
      HTMLElement.prototype.addEventListener.call(this, type, listener, options);

      if (type === 'slotchange' && !getHiddenField(this, SlotChangeKey)) {
        setHiddenField(this, SlotChangeKey, true);

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
        const flatten = !isUndefined(options) && isTrue$1(options.flatten);
        const nodes = flatten ? getFilteredSlotFlattenNodes(this) : getFilteredSlotAssignedNodes(this);
        return ArrayFilter.call(nodes, node => node instanceof Element);
      } else {
        return assignedElements.apply(this, ArraySlice.call(arguments));
      }
    },

    writable: true,
    enumerable: true,
    configurable: true
  },
  assignedNodes: {
    value(options) {
      if (isNodeShadowed(this)) {
        const flatten = !isUndefined(options) && isTrue$1(options.flatten);
        return flatten ? getFilteredSlotFlattenNodes(this) : getFilteredSlotAssignedNodes(this);
      } else {
        return assignedNodes.apply(this, ArraySlice.call(arguments));
      }
    },

    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    get() {
      const name = getAttribute.call(this, 'name');
      return isNull(name) ? '' : name;
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
        const childNodes = isNull(owner) ? [] : getAllMatches(owner, getFilteredChildNodes(this));
        return createStaticNodeList(childNodes);
      }

      return childNodesGetter.call(this);
    },

    enumerable: true,
    configurable: true
  }
});
defineProperties(Text.prototype, {
  assignedSlot: {
    get: assignedSlotGetterPatched,
    enumerable: true,
    configurable: true
  }
});

function getNonPatchedFilteredArrayOfNodes(context, unfilteredNodes) {
  let filtered;
  const ownerKey = getNodeOwnerKey(context);

  if (!isUndefined(ownerKey)) {
    if (isHostElement(context)) {
      const owner = getNodeOwner(context);

      if (isNull(owner)) {
        filtered = [];
      } else if (getNodeKey(context)) {
        filtered = getAllSlottedMatches(context, unfilteredNodes);
      } else {
        filtered = getAllMatches(owner, unfilteredNodes);
      }
    } else {
      filtered = ArrayFilter.call(unfilteredNodes, elm => getNodeNearestOwnerKey(elm) === ownerKey);
    }
  } else if (context instanceof HTMLBodyElement) {
    filtered = ArrayFilter.call(unfilteredNodes, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(context));
  } else {
    filtered = ArraySlice.call(unfilteredNodes);
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
  if (isTrue$1(options['$$lwc-synthetic-mode$$'])) {
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
  const childNodes = isNull(owner) ? [] : getAllMatches(owner, getFilteredChildNodes(this));
  return createStaticHTMLCollection(ArrayFilter.call(childNodes, node => node instanceof Element));
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

defineProperties(Element.prototype, {
  innerHTML: {
    get() {
      if (!runtimeFlags.ENABLE_ELEMENT_PATCH) {
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
      if (!runtimeFlags.ENABLE_ELEMENT_PATCH) {
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

if (hasOwnProperty.call(HTMLElement.prototype, 'innerHTML')) {
  defineProperty(HTMLElement.prototype, 'innerHTML', getOwnPropertyDescriptor(Element.prototype, 'innerHTML'));
}

if (hasOwnProperty.call(HTMLElement.prototype, 'outerHTML')) {
  defineProperty(HTMLElement.prototype, 'outerHTML', getOwnPropertyDescriptor(Element.prototype, 'outerHTML'));
}

if (hasOwnProperty.call(HTMLElement.prototype, 'children')) {
  defineProperty(HTMLElement.prototype, 'children', getOwnPropertyDescriptor(Element.prototype, 'children'));
}

function querySelectorPatched() {
  const nodeList = arrayFromCollection(querySelectorAll.apply(this, ArraySlice.call(arguments)));

  if (isHostElement(this)) {
    const owner = getNodeOwner(this);

    if (isNull(owner)) {
      return null;
    } else if (getNodeKey(this)) {
      return getFirstSlottedMatch(this, nodeList);
    } else {
      return getFirstMatch(owner, nodeList);
    }
  } else if (isNodeShadowed(this)) {
    const ownerKey = getNodeOwnerKey(this);

    if (!isUndefined(ownerKey)) {
      const elm = ArrayFind.call(nodeList, elm => getNodeNearestOwnerKey(elm) === ownerKey);
      return isUndefined(elm) ? null : elm;
    } else {
      if (!runtimeFlags.ENABLE_NODE_LIST_PATCH) {
        return nodeList.length === 0 ? null : nodeList[0];
      }

      const contextNearestOwnerKey = getNodeNearestOwnerKey(this);
      const elm = ArrayFind.call(nodeList, elm => getNodeNearestOwnerKey(elm) === contextNearestOwnerKey);
      return isUndefined(elm) ? null : elm;
    }
  } else {
    if (!runtimeFlags.ENABLE_NODE_LIST_PATCH) {
      if (!(this instanceof HTMLBodyElement)) {
        const elm = nodeList[0];
        return isUndefined(elm) ? null : elm;
      }
    }

    const elm = ArrayFind.call(nodeList, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(this));
    return isUndefined(elm) ? null : elm;
  }
}

function getFilteredArrayOfNodes(context, unfilteredNodes, shadowDomSemantic) {
  let filtered;

  if (isHostElement(context)) {
    const owner = getNodeOwner(context);

    if (isNull(owner)) {
      filtered = [];
    } else if (getNodeKey(context)) {
      filtered = getAllSlottedMatches(context, unfilteredNodes);
    } else {
      filtered = getAllMatches(owner, unfilteredNodes);
    }
  } else if (isNodeShadowed(context)) {
    const ownerKey = getNodeOwnerKey(context);

    if (!isUndefined(ownerKey)) {
      filtered = ArrayFilter.call(unfilteredNodes, elm => getNodeNearestOwnerKey(elm) === ownerKey);
    } else if (shadowDomSemantic === ShadowDomSemantic.Enabled) {
      const contextNearestOwnerKey = getNodeNearestOwnerKey(context);
      filtered = ArrayFilter.call(unfilteredNodes, elm => getNodeNearestOwnerKey(elm) === contextNearestOwnerKey);
    } else {
      filtered = ArraySlice.call(unfilteredNodes);
    }
  } else {
    if (context instanceof HTMLBodyElement || shadowDomSemantic === ShadowDomSemantic.Enabled) {
      filtered = ArrayFilter.call(unfilteredNodes, elm => isUndefined(getNodeOwnerKey(elm)) || isGlobalPatchingSkipped(context));
    } else {
      filtered = ArraySlice.call(unfilteredNodes);
    }
  }

  return filtered;
}

defineProperties(Element.prototype, {
  querySelector: {
    value: querySelectorPatched,
    writable: true,
    enumerable: true,
    configurable: true
  },
  querySelectorAll: {
    value() {
      const nodeList = arrayFromCollection(querySelectorAll.apply(this, ArraySlice.call(arguments)));

      if (!runtimeFlags.ENABLE_NODE_LIST_PATCH) {
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
  defineProperties(Element.prototype, {
    getElementsByClassName: {
      value() {
        const elements = arrayFromCollection(getElementsByClassName.apply(this, ArraySlice.call(arguments)));

        if (!runtimeFlags.ENABLE_HTML_COLLECTIONS_PATCH) {
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
        const elements = arrayFromCollection(getElementsByTagName.apply(this, ArraySlice.call(arguments)));

        if (!runtimeFlags.ENABLE_HTML_COLLECTIONS_PATCH) {
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
        const elements = arrayFromCollection(getElementsByTagNameNS.apply(this, ArraySlice.call(arguments)));

        if (!runtimeFlags.ENABLE_HTML_COLLECTIONS_PATCH) {
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

if (hasOwnProperty.call(HTMLElement.prototype, 'getElementsByClassName')) {
  defineProperty(HTMLElement.prototype, 'getElementsByClassName', getOwnPropertyDescriptor(Element.prototype, 'getElementsByClassName'));
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

const DidAddMouseDownListener = createHiddenField('DidAddMouseDownListener', 'synthetic-shadow');

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

    if (!isNull(focusable)) {
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
    assert.invariant(getAttribute.call(host, 'tabindex') === '-1' || isDelegatingFocus(host), `The focusin event is only relevant when the tabIndex property is -1 on the host.`);
  }

  const firstChild = inner[0];
  const lastChild = inner[inner.length - 1];
  const hostIndex = ArrayIndexOf.call(all, host);
  const firstChildIndex = hostIndex > -1 ? hostIndex : ArrayIndexOf.call(all, firstChild);
  const lastChildIndex = inner.length === 0 ? firstChildIndex + 1 : ArrayIndexOf.call(all, lastChild) + 1;
  const prev = ArraySlice.call(all, 0, firstChildIndex);
  const next = ArraySlice.call(all, lastChildIndex);
  return {
    prev,
    inner,
    next
  };
}

function getActiveElement(host) {
  const doc = getOwnerDocument(host);
  const activeElement = DocumentPrototypeActiveElement.call(doc);

  if (isNull(activeElement)) {
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

  if (isNull(next)) {
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

function skipHostHandler(event) {
  if (letBrowserHandleFocus) {
    enableKeyboardFocusNavigationRoutines();
    return;
  }

  const host = eventCurrentTargetGetter.call(event);
  const target = eventTargetGetter.call(event);

  if (host !== target) {
    return;
  }

  const relatedTarget = focusEventRelatedTargetGetter.call(event);

  if (isNull(relatedTarget)) {
    return;
  }

  const segments = getTabbableSegments(host);
  const position = relatedTargetPosition(host, relatedTarget);

  if (position === 1) {
    const findTabbableElms = isTabbableFrom.bind(null, host.getRootNode());
    const first = ArrayFind.call(segments.inner, findTabbableElms);

    if (!isUndefined(first)) {
      const win = getOwnerWindow(first);
      muteFocusEventsDuringExecution(win, () => {
        first.focus();
      });
    } else {
      focusOnNextOrBlur(segments.next, target, relatedTarget);
    }
  } else if (host === target) {
    focusOnNextOrBlur(ArrayReverse.call(segments.prev), target, relatedTarget);
  }
}

function skipShadowHandler(event) {
  if (letBrowserHandleFocus) {
    enableKeyboardFocusNavigationRoutines();
    return;
  }

  const relatedTarget = focusEventRelatedTargetGetter.call(event);

  if (isNull(relatedTarget)) {
    return;
  }

  const host = eventCurrentTargetGetter.call(event);
  const segments = getTabbableSegments(host);

  if (ArrayIndexOf.call(segments.inner, relatedTarget) !== -1) {
    return;
  }

  const target = eventTargetGetter.call(event);
  const position = relatedTargetPosition(host, relatedTarget);

  if (position === 1) {
    focusOnNextOrBlur(segments.next, target, relatedTarget);
  }

  if (position === 2) {
    focusOnNextOrBlur(ArrayReverse.call(segments.prev), target, relatedTarget);
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
    assert.invariant(isDelegatingFocus(elm), `Invalid attempt to handle focus event for ${toString(elm)}. ${toString(elm)} should have delegates focus true, but is not delegating focus`);
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

  if (!getHiddenField(ownerDocument, DidAddMouseDownListener)) {
    setHiddenField(ownerDocument, DidAddMouseDownListener, true);
    addEventListener.call(ownerDocument, 'mousedown', disableKeyboardFocusNavigationRoutines, true);
    addEventListener.call(ownerDocument, 'mouseup', () => {
      setTimeout(enableKeyboardFocusNavigationRoutines);
    }, true);
  }
}

function handleFocusIn(elm) {
  {
    assert.invariant(tabIndexGetter.call(elm) === -1, `Invalid attempt to handle focus in  ${toString(elm)}. ${toString(elm)} should have tabIndex -1, but has tabIndex ${tabIndexGetter.call(elm)}`);
  }

  bindDocumentMousedownMouseupHandlers(elm);
  ignoreFocus(elm);
  addEventListener.call(elm, 'focusin', skipShadowHandler, true);
}

function ignoreFocusIn(elm) {
  removeEventListener.call(elm, 'focusin', skipShadowHandler, true);
}

const {
  blur,
  focus
} = HTMLElement.prototype;

function tabIndexGetterPatched() {
  if (isDelegatingFocus(this) && isFalse$1(hasAttribute.call(this, 'tabindex'))) {
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

  if (prevHasAttr && (didValueChange || isFalse$1(currHasAttr))) {
    if (prevValue === -1) {
      ignoreFocusIn(this);
    }

    if (prevValue === 0 && delegatesFocus) {
      ignoreFocus(this);
    }
  }

  if (isFalse$1(currHasAttr)) {
    return;
  }

  if (prevHasAttr && currHasAttr && isFalse$1(didValueChange)) {
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

    if (!isNull(currentActiveElement)) {
      currentActiveElement.blur();
      return;
    }
  }

  return blur.call(this);
}

function focusPatched() {
  disableKeyboardFocusNavigationRoutines();

  if (isHostElement(this) && isDelegatingFocus(this)) {
    hostElementFocus.call(this);
    return;
  }

  focus.apply(this, arguments);
  enableKeyboardFocusNavigationRoutines();
}

defineProperties(HTMLElement.prototype, {
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
const {
  addEventListener: superAddEventListener,
  removeEventListener: superRemoveEventListener
} = Node.prototype;

function addEventListenerPatched(type, listener, options) {
  if (isHostElement(this)) {
    addCustomElementEventListener(this, type, listener);
  } else {
    superAddEventListener.call(this, type, listener, options);
  }
}

function removeEventListenerPatched(type, listener, options) {
  if (isHostElement(this)) {
    removeCustomElementEventListener(this, type, listener);
  } else {
    superRemoveEventListener.call(this, type, listener, options);
  }
}

if (typeof EventTarget !== 'undefined') {
  defineProperties(EventTarget.prototype, {
    addEventListener: {
      value: addEventListenerPatched,
      enumerable: true,
      writable: true,
      configurable: true
    },
    removeEventListener: {
      value: removeEventListenerPatched,
      enumerable: true,
      writable: true,
      configurable: true
    }
  });
} else {
  defineProperties(Node.prototype, {
    addEventListener: {
      value: addEventListenerPatched,
      enumerable: true,
      writable: true,
      configurable: true
    },
    removeEventListener: {
      value: removeEventListenerPatched,
      enumerable: true,
      writable: true,
      configurable: true
    }
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

defineProperty(Element.prototype, '$shadowToken$', {
  set(shadowToken) {
    const oldShadowToken = this[ShadowTokenPrivateKey];

    if (!isUndefined(oldShadowToken) && oldShadowToken !== shadowToken) {
      removeAttribute.call(this, oldShadowToken);
    }

    if (!isUndefined(shadowToken)) {
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

    if (isUndefined(previousNodeShadowResolver)) {
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
    forEach.call(mutations, mutation => {
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
  if (isUndefined(portalObserver)) {
    portalObserver = initPortalObserver();
  }

  if (isUndefined(getShadowRootResolver(elm))) {
    throw new Error(`Invalid Element`);
  }

  MutationObserverObserve.call(portalObserver, elm, portalObserverConfig);
}

defineProperty(Element.prototype, '$domManual$', {
  set(v) {
    this[DomManualPrivateKey] = v;

    if (isTrue$1(v)) {
      markElementAsPortal(this);
    }
  },

  get() {
    return this[DomManualPrivateKey];
  },

  configurable: true
});

function detect$3() {
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
  isArray: isArray$1
} = Array;
const {
  slice: ArraySlice$1,
  unshift: ArrayUnshift$1,
  shift: ArrayShift
} = Array.prototype;

function isObject$1(O) {
  return typeof O === 'object' ? O !== null : typeof O === 'function';
}

function isSpreadable(O) {
  if (!isObject$1(O)) {
    return false;
  }

  const spreadable = O[isConcatSpreadable];
  return spreadable !== undefined ? Boolean(spreadable) : isArray$1(O);
}

function ArrayConcatPolyfill(..._args) {
  const O = Object(this);
  const A = [];
  let N = 0;
  const items = ArraySlice$1.call(arguments);
  ArrayUnshift$1.call(items, O);

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

function apply$3() {
  Array.prototype.concat = ArrayConcatPolyfill;
}

if (detect$3()) {
  apply$3();
}

function detect$1$1(propName) {
  return Object.getOwnPropertyDescriptor(Element.prototype, propName) === undefined;
}

const {
  hasAttribute: hasAttribute$1,
  getAttribute: getAttribute$1,
  setAttribute: setAttribute$1,
  setAttributeNS,
  removeAttribute: removeAttribute$1,
  removeAttributeNS
} = Element.prototype;
const ARIA_REGEX = /^aria/;
const nodeToAriaPropertyValuesMap = new WeakMap();
const {
  hasOwnProperty: hasOwnProperty$2
} = Object.prototype;
const {
  replace: StringReplace$1,
  toLowerCase: StringToLowerCase$1
} = String.prototype;

function getAriaPropertyMap(elm) {
  let map = nodeToAriaPropertyValuesMap.get(elm);

  if (map === undefined) {
    map = {};
    nodeToAriaPropertyValuesMap.set(elm, map);
  }

  return map;
}

function getNormalizedAriaPropertyValue(value) {
  return value == null ? null : value + '';
}

function createAriaPropertyPropertyDescriptor(propName, attrName) {
  return {
    get() {
      const map = getAriaPropertyMap(this);

      if (hasOwnProperty$2.call(map, propName)) {
        return map[propName];
      }

      return hasAttribute$1.call(this, attrName) ? getAttribute$1.call(this, attrName) : null;
    },

    set(newValue) {
      const normalizedValue = getNormalizedAriaPropertyValue(newValue);
      const map = getAriaPropertyMap(this);
      map[propName] = normalizedValue;

      if (newValue === null) {
        removeAttribute$1.call(this, attrName);
      } else {
        setAttribute$1.call(this, attrName, newValue);
      }
    },

    configurable: true,
    enumerable: true
  };
}

function patch(propName) {
  const replaced = StringReplace$1.call(propName, ARIA_REGEX, 'aria-');
  const attrName = StringToLowerCase$1.call(replaced);
  const descriptor = createAriaPropertyPropertyDescriptor(propName, attrName);
  Object.defineProperty(Element.prototype, propName, descriptor);
}

const ElementPrototypeAriaPropertyNames = ['ariaAutoComplete', 'ariaChecked', 'ariaCurrent', 'ariaDisabled', 'ariaExpanded', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaLabel', 'ariaLevel', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaPressed', 'ariaReadOnly', 'ariaRequired', 'ariaSelected', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'ariaLive', 'ariaRelevant', 'ariaAtomic', 'ariaBusy', 'ariaActiveDescendant', 'ariaControls', 'ariaDescribedBy', 'ariaFlowTo', 'ariaLabelledBy', 'ariaOwns', 'ariaPosInSet', 'ariaSetSize', 'ariaColCount', 'ariaColIndex', 'ariaDetails', 'ariaErrorMessage', 'ariaKeyShortcuts', 'ariaModal', 'ariaPlaceholder', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowSpan', 'ariaColSpan', 'role'];

for (let i = 0, len = ElementPrototypeAriaPropertyNames.length; i < len; i += 1) {
  const propName = ElementPrototypeAriaPropertyNames[i];

  if (detect$1$1(propName)) {
    patch(propName);
  }
}

function invariant$1(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}

function isTrue$2(value, msg) {
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
  isTrue: isTrue$2,
  isFalse: isFalse$2,
  fail: fail$1
});
const {
  assign: assign$2,
  create: create$2,
  defineProperties: defineProperties$2,
  defineProperty: defineProperty$2,
  freeze: freeze$2,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$2,
  getOwnPropertyNames: getOwnPropertyNames$2,
  getPrototypeOf: getPrototypeOf$2,
  hasOwnProperty: hasOwnProperty$1$1,
  keys: keys$2,
  seal: seal$2,
  setPrototypeOf: setPrototypeOf$2
} = Object;
const {
  isArray: isArray$1$1
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
  slice: ArraySlice$1$1,
  splice: ArraySplice$1,
  unshift: ArrayUnshift$1$1,
  forEach: forEach$1
} = Array.prototype;
const {
  charCodeAt: StringCharCodeAt$1,
  replace: StringReplace$1$1,
  slice: StringSlice$1,
  toLowerCase: StringToLowerCase$1$1
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

function isObject$1$1(obj) {
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
    if (isArray$1$1(obj)) {
      return ArrayJoin$1.call(ArrayMap$1.call(obj, toString$1), ',');
    }

    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS$1.call(obj);
  } else {
    return obj + emptyString$1;
  }
}

function getPropertyDescriptor$1(o, p) {
  do {
    const d = getOwnPropertyDescriptor$2(o, p);

    if (!isUndefined$1(d)) {
      return d;
    }

    o = getPrototypeOf$2(o);
  } while (o !== null);
}

const emptyString$1 = '';
const hasNativeSymbolsSupport$3 = Symbol('x').toString() === 'Symbol(x)';

function createHiddenField$1(key, namespace) {
  return hasNativeSymbolsSupport$3 ? Symbol(key) : `$$lwc-${namespace}-${key}$$`;
}

const hiddenFieldsMap$1 = new WeakMap();

function setHiddenField$1(o, field, value) {
  let valuesByField = hiddenFieldsMap$1.get(o);

  if (isUndefined$1(valuesByField)) {
    valuesByField = create$2(null);
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

const {
  appendChild: appendChild$1,
  insertBefore: insertBefore$1,
  removeChild: removeChild$1,
  replaceChild: replaceChild$1
} = Node.prototype;
const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];
const HTMLPropertyNamesWithLowercasedReflectiveAttributes = ['accessKey', 'readOnly', 'tabIndex', 'bgColor', 'colSpan', 'rowSpan', 'contentEditable', 'dateTime', 'formAction', 'isMap', 'maxLength', 'useMap'];

function offsetPropertyErrorMessage(name) {
  return `Using the \`${name}\` property is an anti-pattern because it rounds the value to an integer. Instead, use the \`getBoundingClientRect\` method to obtain fractional values for the size of an element and its position relative to the viewport.`;
}

const globalHTMLProperties = assign$2(create$2(null), {
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
const AttrNameToPropNameMap = create$2(null);
const PropNameToAttrNameMap = create$2(null);
forEach$1.call(ElementPrototypeAriaPropertyNames, propName => {
  const attrName = StringToLowerCase$1$1.call(StringReplace$1$1.call(propName, /^aria/, 'aria-'));
  AttrNameToPropNameMap[attrName] = propName;
  PropNameToAttrNameMap[propName] = attrName;
});
forEach$1.call(defaultDefHTMLPropertyNames, propName => {
  const attrName = StringToLowerCase$1$1.call(propName);
  AttrNameToPropNameMap[attrName] = propName;
  PropNameToAttrNameMap[propName] = attrName;
});
forEach$1.call(HTMLPropertyNamesWithLowercasedReflectiveAttributes, propName => {
  const attrName = StringToLowerCase$1$1.call(propName);
  AttrNameToPropNameMap[attrName] = propName;
  PropNameToAttrNameMap[propName] = attrName;
});
const CAPS_REGEX = /[A-Z]/g;

function getAttrNameFromPropName(propName) {
  if (isUndefined$1(PropNameToAttrNameMap[propName])) {
    PropNameToAttrNameMap[propName] = StringReplace$1$1.call(propName, CAPS_REGEX, match => '-' + match.toLowerCase());
  }

  return PropNameToAttrNameMap[propName];
}

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

let nextTickCallbackQueue = [];
const SPACE_CHAR = 32;
const EmptyObject = seal$2(create$2(null));
const EmptyArray = seal$2([]);

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

const useSyntheticShadow = hasOwnProperty$1$1.call(Element.prototype, '$shadowToken$');

function getComponentTag(vm) {
  try {
    return `<${StringToLowerCase$1$1.call(vm.elm.tagName)}>`;
  } catch (error) {
    return '<invalid-tag-name>';
  }
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
    data: {
      on
    }
  } = vnode;

  if (isUndefined$1(on)) {
    return;
  }

  const elm = vnode.elm;
  const listener = vnode.listener = createListener();
  listener.vnode = vnode;
  let name;

  for (name in on) {
    elm.addEventListener(name, listener);
  }
}

var modEvents = {
  update: updateAllEventListeners,
  create: createAllEventListeners
};
const xlinkNS = 'http://www.w3.org/1999/xlink';
const xmlNS = 'http://www.w3.org/XML/1998/namespace';
const ColonCharCode = 58;

function updateAttrs(oldVnode, vnode) {
  const {
    data: {
      attrs
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
    assert$1.invariant(isUndefined$1(oldAttrs) || keys$2(oldAttrs).join(',') === keys$2(attrs).join(','), `vnode.data.attrs cannot change shape.`);
  }

  const elm = vnode.elm;
  let key;
  oldAttrs = isUndefined$1(oldAttrs) ? EmptyObject : oldAttrs;

  for (key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];

    if (old !== cur) {
      unlockAttribute(elm, key);

      if (StringCharCodeAt$1.call(key, 3) === ColonCharCode) {
        elm.setAttributeNS(xmlNS, key, cur);
      } else if (StringCharCodeAt$1.call(key, 5) === ColonCharCode) {
        elm.setAttributeNS(xlinkNS, key, cur);
      } else if (isNull$1(cur)) {
        elm.removeAttribute(key);
      } else {
        elm.setAttribute(key, cur);
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
    assert$1.invariant(isUndefined$1(oldProps) || keys$2(oldProps).join(',') === keys$2(props).join(','), 'vnode.data.props cannot change shape.');
  }

  const elm = vnode.elm;
  const isFirstPatch = isUndefined$1(oldProps);
  const {
    sel
  } = vnode;

  for (const key in props) {
    const cur = props[key];

    {
      if (!(key in elm)) {
        assert$1.fail(`Unknown public property "${key}" of element <${sel}>. This is likely a typo on the corresponding attribute "${getAttrNameFromPropName(key)}".`);
      }
    }

    if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? elm[key] : oldProps[key])) {
      elm[key] = cur;
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
const classNameToClassMap = create$2(null);

function getMapFromClassName(className) {
  if (className == null) {
    return EmptyObject;
  }

  className = isString(className) ? className : className + '';
  let map = classNameToClassMap[className];

  if (map) {
    return map;
  }

  map = create$2(null);
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
    freeze$2(map);
  }

  return map;
}

function updateClassAttribute(oldVnode, vnode) {
  const {
    elm,
    data: {
      className: newClass
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

  const {
    classList
  } = elm;
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
    style: newStyle
  } = vnode.data;

  if (oldVnode.data.style === newStyle) {
    return;
  }

  const elm = vnode.elm;
  const {
    style
  } = elm;

  if (!isString(newStyle) || newStyle === '') {
    removeAttribute$1.call(elm, 'style');
  } else {
    style.cssText = newStyle;
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
    }
  } = vnode;

  if (isUndefined$1(classMap)) {
    return;
  }

  const {
    classList
  } = elm;

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
    }
  } = vnode;

  if (isUndefined$1(styleMap)) {
    return;
  }

  const {
    style
  } = elm;

  for (const name in styleMap) {
    style[name] = styleMap[name];
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
  let newEndIdx = newCh.length - 1;
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
      newEndVnode.hook.move(oldStartVnode, parentElm, oldEndVnode.elm.nextSibling);
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
      const n = newCh[newEndIdx + 1];
      before = isVNode(n) ? n.elm : null;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
    } else {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }
}

function updateStaticChildren(parentElm, oldCh, newCh) {
  const {
    length
  } = newCh;

  if (oldCh.length === 0) {
    addVnodes(parentElm, null, newCh, 0, length);
    return;
  }

  let referenceElm = null;

  for (let i = length - 1; i >= 0; i -= 1) {
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
  return assign$2({
    configurable: true,
    enumerable: true,
    writable: true
  }, options);
}

function generateAccessorDescriptor(options) {
  return assign$2({
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

function portalRestrictionErrorMessage(name, type) {
  return `The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`;
}

function getNodeRestrictionsDescriptors(node, options = {}) {

  const originalTextContentDescriptor = getPropertyDescriptor$1(node, 'textContent');
  const originalNodeValueDescriptor = getPropertyDescriptor$1(node, 'nodeValue');
  const {
    appendChild,
    insertBefore,
    removeChild,
    replaceChild
  } = node;
  return {
    appendChild: generateDataDescriptor({
      value(aChild) {
        if (this instanceof Element && isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('appendChild', 'method'));
        }

        return appendChild.call(this, aChild);
      }

    }),
    insertBefore: generateDataDescriptor({
      value(newNode, referenceNode) {
        if (!isDomMutationAllowed && this instanceof Element && isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('insertBefore', 'method'));
        }

        return insertBefore.call(this, newNode, referenceNode);
      }

    }),
    removeChild: generateDataDescriptor({
      value(aChild) {
        if (!isDomMutationAllowed && this instanceof Element && isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('removeChild', 'method'));
        }

        return removeChild.call(this, aChild);
      }

    }),
    replaceChild: generateDataDescriptor({
      value(newChild, oldChild) {
        if (this instanceof Element && isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('replaceChild', 'method'));
        }

        return replaceChild.call(this, newChild, oldChild);
      }

    }),
    nodeValue: generateAccessorDescriptor({
      get() {
        return originalNodeValueDescriptor.get.call(this);
      },

      set(value) {
        if (!isDomMutationAllowed && this instanceof Element && isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('nodeValue', 'property'));
        }

        originalNodeValueDescriptor.set.call(this, value);
      }

    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },

      set(value) {
        if (this instanceof Element && isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('textContent', 'property'));
        }

        originalTextContentDescriptor.set.call(this, value);
      }

    })
  };
}

function getElementRestrictionsDescriptors(elm, options) {

  const descriptors = getNodeRestrictionsDescriptors(elm, options);
  const originalInnerHTMLDescriptor = getPropertyDescriptor$1(elm, 'innerHTML');
  const originalOuterHTMLDescriptor = getPropertyDescriptor$1(elm, 'outerHTML');
  assign$2(descriptors, {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },

      set(value) {
        if (isFalse$1$1(options.isPortal)) {
          logError(portalRestrictionErrorMessage('innerHTML', 'property'), getAssociatedVMIfPresent(this));
        }

        return originalInnerHTMLDescriptor.set.call(this, value);
      }

    }),
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set outerHTML on Element.`);
      }

    })
  });
  return descriptors;
}

function getShadowRootRestrictionsDescriptors(sr) {

  const originalQuerySelector = sr.querySelector;
  const originalQuerySelectorAll = sr.querySelectorAll;
  const originalAddEventListener = sr.addEventListener;
  const descriptors = getNodeRestrictionsDescriptors(sr);
  const originalInnerHTMLDescriptor = getPropertyDescriptor$1(sr, 'innerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor$1(sr, 'textContent');
  assign$2(descriptors, {
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
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${toString$1(sr)} by adding an event listener for "${type}".`);
        assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${toString$1(sr)} by adding an event listener for "${type}".`);

        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        }

        return originalAddEventListener.apply(this, arguments);
      }

    }),
    querySelector: generateDataDescriptor({
      value() {
        const vm = getAssociatedVM(this);
        assert$1.isFalse(isBeingConstructed(vm), `this.template.querySelector() cannot be called during the construction of the` + `custom element for ${vm} because no content has been rendered yet.`);
        return originalQuerySelector.apply(this, arguments);
      }

    }),
    querySelectorAll: generateDataDescriptor({
      value() {
        const vm = getAssociatedVM(this);
        assert$1.isFalse(isBeingConstructed(vm), `this.template.querySelectorAll() cannot be called during the construction of the` + ` custom element for ${vm} because no content has been rendered yet.`);
        return originalQuerySelectorAll.apply(this, arguments);
      }

    })
  });
  const BlockedShadowRootMethods = {
    cloneNode: 0,
    getElementById: 0,
    getSelection: 0,
    elementsFromPoint: 0,
    dispatchEvent: 0
  };
  forEach$1.call(getOwnPropertyNames$2(BlockedShadowRootMethods), methodName => {
    const descriptor = generateAccessorDescriptor({
      get() {
        throw new Error(`Disallowed method "${methodName}" in ShadowRoot.`);
      }

    });
    descriptors[methodName] = descriptor;
  });
  return descriptors;
}

function getCustomElementRestrictionsDescriptors(elm) {

  const descriptors = getNodeRestrictionsDescriptors(elm);
  const originalAddEventListener = elm.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor$1(elm, 'innerHTML');
  const originalOuterHTMLDescriptor = getPropertyDescriptor$1(elm, 'outerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor$1(elm, 'textContent');
  return assign$2(descriptors, {
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
        const vmBeingRendered = getVMBeingRendered();
        assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${toString$1(this)} by adding an event listener for "${type}".`);
        assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${toString$1(elm)} by adding an event listener for "${type}".`);

        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        }

        return originalAddEventListener.apply(this, arguments);
      }

    })
  });
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
  const originalIsConnectedGetter = getOwnPropertyDescriptor$2(proto, 'isConnected').get;
  const descriptors = {
    dispatchEvent: generateDataDescriptor({
      value(event) {
        const vm = getAssociatedVM(this);
        assert$1.isFalse(isBeingConstructed(vm), `this.dispatchEvent() should not be called during the construction of the custom` + ` element for ${getComponentTag(vm)} because no one is listening just yet.`);

        if (!isNull$1(event) && isObject$1$1(event)) {
          const {
            type
          } = event;

          if (!/^[a-z][a-z0-9_]*$/.test(type)) {
            logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
          }
        }

        return originalDispatchEvent.apply(this, arguments);
      }

    }),
    isConnected: generateAccessorDescriptor({
      get() {
        const vm = getAssociatedVM(this);
        const componentTag = getComponentTag(vm);
        assert$1.isFalse(isBeingConstructed(vm), `this.isConnected should not be accessed during the construction phase of the custom` + ` element ${componentTag}. The value will always be` + ` false for Lightning Web Components constructed using lwc.createElement().`);
        assert$1.isFalse(isVMBeingRendered(vm), `this.isConnected should not be accessed during the rendering phase of the custom` + ` element ${componentTag}. The value will always be true.`);
        assert$1.isFalse(isInvokingRenderedCallback(vm), `this.isConnected should not be accessed during the renderedCallback of the custom` + ` element ${componentTag}. The value will always be true.`);
        return originalIsConnectedGetter.call(this);
      }

    })
  };
  forEach$1.call(getOwnPropertyNames$2(globalHTMLProperties), propName => {
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

function patchElementWithRestrictions(elm, options) {
  defineProperties$2(elm, getElementRestrictionsDescriptors(elm, options));
}

function patchShadowRootWithRestrictions(sr) {
  defineProperties$2(sr, getShadowRootRestrictionsDescriptors(sr));
}

function patchCustomElementWithRestrictions(elm) {
  const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
  const elmProto = getPrototypeOf$2(elm);
  setPrototypeOf$2(elm, create$2(elmProto, restrictionsDescriptors));
}

function patchComponentWithRestrictions(cmp) {
  defineProperties$2(cmp, getComponentRestrictionsDescriptors());
}

function patchLightningElementPrototypeWithRestrictions(proto) {
  defineProperties$2(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
}

const noop = () => void 0;

function observeElementChildNodes(elm) {
  elm.$domManual$ = true;
}

function setElementShadowToken(elm, token) {
  elm.$shadowToken$ = token;
}

function updateNodeHook(oldVnode, vnode) {
  const {
    text
  } = vnode;

  if (oldVnode.text !== text) {
    {
      unlockDomMutation();
    }

    vnode.elm.nodeValue = text;

    {
      lockDomMutation();
    }
  }
}

function insertNodeHook(vnode, parentNode, referenceNode) {
  {
    unlockDomMutation();
  }

  parentNode.insertBefore(vnode.elm, referenceNode);

  {
    lockDomMutation();
  }
}

function removeNodeHook(vnode, parentNode) {
  {
    unlockDomMutation();
  }

  parentNode.removeChild(vnode.elm);

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

function fallbackElmHook(vnode) {
  const {
    owner
  } = vnode;
  const elm = vnode.elm;

  if (isTrue$1$1(useSyntheticShadow)) {
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

function insertCustomElmHook(vnode) {
  const vm = getAssociatedVM(vnode.elm);
  appendVM(vm);
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

function allocateChildrenHook(vnode) {
  const vm = getAssociatedVM(vnode.elm);
  const children = vnode.aChildren || vnode.children;
  vm.aChildren = children;

  if (isTrue$1$1(useSyntheticShadow)) {
    allocateInSlot(vm, children);
    vnode.aChildren = children;
    vnode.children = EmptyArray;
  }
}

function createViewModelHook(vnode) {
  const elm = vnode.elm;

  if (!isUndefined$1(getAssociatedVMIfPresent(elm))) {
    return;
  }

  const {
    mode,
    ctor,
    owner
  } = vnode;
  const def = getComponentInternalDef(ctor);
  setElementProto(elm, def);

  if (isTrue$1$1(useSyntheticShadow)) {
    const {
      shadowAttribute
    } = owner.context;
    setElementShadowToken(elm, shadowAttribute);
  }

  createVM(elm, def.ctor, {
    mode,
    owner
  });

  {
    assert$1.isTrue(isArray$1$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
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

function rerenderCustomElmHook(vnode) {
  const vm = getAssociatedVM(vnode.elm);

  {
    assert$1.isTrue(isArray$1$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
  }

  rerenderVM(vm);
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

function removeCustomElmHook(vnode) {
  removeVM(getAssociatedVM(vnode.elm));
}

const FromIteration = new WeakMap();

function markAsDynamicChildren(children) {
  FromIteration.set(children, 1);
}

function hasDynamicChildren(children) {
  return FromIteration.has(children);
}

const CHAR_S$1 = 115;
const CHAR_V = 118;
const CHAR_G = 103;
const NamespaceAttributeForSVG = 'http://www.w3.org/2000/svg';
const SymbolIterator = Symbol.iterator;
const TextHook = {
  create: vnode => {
    vnode.elm = document.createTextNode(vnode.text);
    linkNodeToShadow(vnode);
  },
  update: updateNodeHook,
  insert: insertNodeHook,
  move: insertNodeHook,
  remove: removeNodeHook
};
const ElementHook = {
  create: vnode => {
    const {
      data,
      sel,
      clonedElement
    } = vnode;
    const {
      ns
    } = data;

    if (isUndefined$1(clonedElement)) {
      vnode.elm = isUndefined$1(ns) ? document.createElement(sel) : document.createElementNS(ns, sel);
    } else {
      vnode.elm = clonedElement;
    }

    linkNodeToShadow(vnode);
    fallbackElmHook(vnode);
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
      sel
    } = vnode;
    vnode.elm = document.createElement(sel);
    linkNodeToShadow(vnode);
    createViewModelHook(vnode);
    allocateChildrenHook(vnode);
    createCustomElmHook(vnode);
  },
  update: (oldVnode, vnode) => {
    updateCustomElmHook(oldVnode, vnode);
    allocateChildrenHook(vnode);
    updateChildrenHook(oldVnode, vnode);
    rerenderCustomElmHook(vnode);
  },
  insert: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
    const vm = getAssociatedVM(vnode.elm);

    {
      assert$1.isTrue(vm.state === VMState.created, `${vm} cannot be recycled.`);
    }

    runConnectedCallback(vm);
    createChildrenHook(vnode);
    insertCustomElmHook(vnode);
  },
  move: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
  },
  remove: (vnode, parentNode) => {
    removeNodeHook(vnode, parentNode);
    removeCustomElmHook(vnode);
  }
};

function linkNodeToShadow(vnode) {
  vnode.elm.$shadowResolver$ = vnode.owner.cmpRoot.$shadowResolver$;
}

function addNS(vnode) {
  const {
    data,
    children,
    sel
  } = vnode;
  data.ns = NamespaceAttributeForSVG;

  if (isArray$1$1(children) && sel !== 'foreignObject') {
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
    assert$1.isTrue(isObject$1$1(data), `h() 2nd argument data must be an object.`);
    assert$1.isTrue(isArray$1$1(children), `h() 3rd argument children must be an array.`);
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

  if (sel.length === 3 && StringCharCodeAt$1.call(sel, 0) === CHAR_S$1 && StringCharCodeAt$1.call(sel, 1) === CHAR_V && StringCharCodeAt$1.call(sel, 2) === CHAR_G) {
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
    assert$1.isTrue(isObject$1$1(data), `s() 2nd argument data must be an object.`);
    assert$1.isTrue(isArray$1$1(children), `h() 3rd argument children must be an array.`);
  }

  if (!isUndefined$1(slotset) && !isUndefined$1(slotset[slotName]) && slotset[slotName].length !== 0) {
    children = slotset[slotName];
  }

  const vnode = h('slot', data, children);

  if (useSyntheticShadow) {
    sc(children);
  }

  return vnode;
}

function c(sel, Ctor, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();

  {
    assert$1.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
    assert$1.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
    assert$1.isTrue(isObject$1$1(data), `c() 3nd argument data must be an object.`);
    assert$1.isTrue(arguments.length === 3 || isArray$1$1(children), `c() 4nd argument data must be an array.`);
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
    keyMap = create$2(null);
  }

  while (last === false) {
    next = iterator.next();
    last = next.done;
    const vnode = factory(value, j, j === 0, last);

    if (isArray$1$1(vnode)) {
      ArrayPush$1.apply(list, vnode);
    } else {
      ArrayPush$1.call(list, vnode);
    }

    {
      const vnodes = isArray$1$1(vnode) ? vnode : [vnode];
      forEach$1.call(vnodes, childVnode => {
        if (!isNull$1(childVnode) && isObject$1$1(childVnode) && !isUndefined$1(childVnode.sel)) {
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
    assert$1.isTrue(isArray$1$1(items), 'flattening api can only work with arrays.');
  }

  const len = items.length;
  const flattened = [];
  sc(flattened);

  for (let j = 0; j < len; j += 1) {
    const item = items[j];

    if (isArray$1$1(item)) {
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
    assert$1.isTrue(isObject$1$1(data), `dc() 3nd argument data must be an object.`);
    assert$1.isTrue(arguments.length === 3 || isArray$1$1(children), `dc() 4nd argument data must be an array.`);
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
    assert$1.isTrue(isArray$1$1(vnodes), 'sc() api can only work with arrays.');
  }

  markAsDynamicChildren(vnodes);
  return vnodes;
}

var api = Object.freeze({
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

const CachedStyleFragments = create$2(null);

function createStyleElement(styleContent) {
  const elm = document.createElement('style');
  elm.type = 'text/css';
  elm.textContent = styleContent;
  return elm;
}

function getCachedStyleElement(styleContent) {
  let fragment = CachedStyleFragments[styleContent];

  if (isUndefined$1(fragment)) {
    fragment = document.createDocumentFragment();
    const styleElm = createStyleElement(styleContent);
    fragment.appendChild(styleElm);
    CachedStyleFragments[styleContent] = fragment;
  }

  return fragment.cloneNode(true).firstChild;
}

const globalStyleParent = document.head || document.body || document;
const InsertedGlobalStyleContent = create$2(null);

function insertGlobalStyle(styleContent) {
  if (isUndefined$1(InsertedGlobalStyleContent[styleContent])) {
    InsertedGlobalStyleContent[styleContent] = true;
    const elm = createStyleElement(styleContent);
    globalStyleParent.appendChild(elm);
  }
}

function createStyleVNode(elm) {
  const vnode = h('style', {
    key: 'style'
  }, EmptyArray);
  vnode.clonedElement = elm;
  return vnode;
}

function resetStyleAttributes(vm) {
  const {
    context,
    elm
  } = vm;
  const oldHostAttribute = context.hostAttribute;

  if (!isUndefined$1(oldHostAttribute)) {
    removeAttribute$1.call(elm, oldHostAttribute);
  }

  context.hostAttribute = context.shadowAttribute = undefined;
}

function applyStyleAttributes(vm, hostAttribute, shadowAttribute) {
  const {
    context,
    elm
  } = vm;
  setAttribute$1.call(elm, hostAttribute, '');
  context.hostAttribute = hostAttribute;
  context.shadowAttribute = shadowAttribute;
}

function collectStylesheets(stylesheets, hostSelector, shadowSelector, isNative, aggregatorFn) {
  forEach$1.call(stylesheets, sheet => {
    if (isArray$1$1(sheet)) {
      collectStylesheets(sheet, hostSelector, shadowSelector, isNative, aggregatorFn);
    } else {
      aggregatorFn(sheet(hostSelector, shadowSelector, isNative));
    }
  });
}

function evaluateCSS(stylesheets, hostAttribute, shadowAttribute) {
  {
    assert$1.isTrue(isArray$1$1(stylesheets), `Invalid stylesheets.`);
  }

  if (useSyntheticShadow) {
    const hostSelector = `[${hostAttribute}]`;
    const shadowSelector = `[${shadowAttribute}]`;
    collectStylesheets(stylesheets, hostSelector, shadowSelector, false, textContent => {
      insertGlobalStyle(textContent);
    });
    return null;
  } else {
    let buffer = '';
    collectStylesheets(stylesheets, emptyString$1, emptyString$1, true, textContent => {
      buffer += textContent;
    });
    return createStyleVNode(getCachedStyleElement(buffer));
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
let isUpdatingTemplate = false;
let vmBeingRendered = null;

function getVMBeingRendered() {
  return vmBeingRendered;
}

function setVMBeingRendered(vm) {
  vmBeingRendered = vm;
}

function isVMBeingRendered(vm) {
  return vm === vmBeingRendered;
}

const EmptySlots = create$2(null);

function validateSlots(vm, html) {

  const {
    cmpSlots = EmptySlots
  } = vm;
  const {
    slots = EmptyArray
  } = html;

  for (const slotName in cmpSlots) {
    assert$1.isTrue(isArray$1$1(cmpSlots[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots[slotName])} for slot "${slotName}" in ${vm}.`);

    if (slotName !== '' && ArrayIndexOf$1.call(slots, slotName) === -1) {
      logError(`Ignoring unknown provided slot name "${slotName}" in ${vm}. Check for a typo on the slot attribute.`, vm);
    }
  }
}

function validateFields(vm, html) {

  const {
    component
  } = vm;
  const {
    ids = []
  } = html;
  forEach$1.call(ids, propName => {
    if (!(propName in component)) {
      logError(`The template rendered by ${vm} references \`this.${propName}\`, which is not declared. Check for a typo in the template.`, vm);
    }
  });
}

function evaluateTemplate(vm, html) {
  {
    assert$1.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);
  }

  const isUpdatingTemplateInception = isUpdatingTemplate;
  const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
  let vnodes = [];
  runWithBoundaryProtection(vm, vm.owner, () => {
    vmBeingRendered = vm;

    {
      startMeasure('render', vm);
    }
  }, () => {
    const {
      component,
      context,
      cmpSlots,
      cmpTemplate,
      tro
    } = vm;
    tro.observe(() => {
      if (html !== cmpTemplate) {
        if (!isUndefined$1(cmpTemplate)) {
          resetShadowRoot(vm);
        }

        if (isUndefined$1(html) || !isTemplateRegistered(html)) {
          throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
        }

        vm.cmpTemplate = html;
        context.tplCache = create$2(null);
        resetStyleAttributes(vm);
        const {
          stylesheets,
          stylesheetTokens
        } = html;

        if (isUndefined$1(stylesheets) || stylesheets.length === 0) {
          context.styleVNode = null;
        } else if (!isUndefined$1(stylesheetTokens)) {
          const {
            hostAttribute,
            shadowAttribute
          } = stylesheetTokens;
          applyStyleAttributes(vm, hostAttribute, shadowAttribute);
          context.styleVNode = evaluateCSS(stylesheets, hostAttribute, shadowAttribute);
        }

        if ("development" !== 'production') {
          validateFields(vm, html);
        }
      }

      if ("development" !== 'production') {
        assert$1.isTrue(isObject$1$1(context.tplCache), `vm.context.tplCache must be an object associated to ${cmpTemplate}.`);
        validateSlots(vm, html);
      }

      vm.velements = [];
      isUpdatingTemplate = true;
      vnodes = html.call(undefined, api, component, cmpSlots, context.tplCache);
      const {
        styleVNode
      } = context;

      if (!isNull$1(styleVNode)) {
        ArrayUnshift$1$1.call(vnodes, styleVNode);
      }
    });
  }, () => {
    isUpdatingTemplate = isUpdatingTemplateInception;
    vmBeingRendered = vmOfTemplateBeingUpdatedInception;

    {
      endMeasure('render', vm);
    }
  });

  {
    assert$1.invariant(isArray$1$1(vnodes), `Compiler should produce html functions that always return an array.`);
  }

  return vnodes;
}

let isInvokingRender = false;
let vmBeingConstructed = null;

function isBeingConstructed(vm) {
  return vmBeingConstructed === vm;
}

let vmInvokingRenderedCallback = null;

function isInvokingRenderedCallback(vm) {
  return vmInvokingRenderedCallback === vm;
}

const noop$2 = () => void 0;

function invokeComponentCallback(vm, fn, args) {
  const {
    component,
    callHook,
    owner
  } = vm;
  let result;
  runWithBoundaryProtection(vm, owner, noop$2, () => {
    result = callHook(component, fn, args);
  }, noop$2);
  return result;
}

function invokeComponentConstructor(vm, Ctor) {
  const vmBeingConstructedInception = vmBeingConstructed;
  let error;

  {
    startMeasure('constructor', vm);
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
    {
      endMeasure('constructor', vm);
    }

    vmBeingConstructed = vmBeingConstructedInception;

    if (!isUndefined$1(error)) {
      error.wcStack = getErrorComponentStack(vm);
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
    const vmInvokingRenderedCallbackInception = vmInvokingRenderedCallback;
    runWithBoundaryProtection(vm, owner, () => {
      vmInvokingRenderedCallback = vm;

      {
        startMeasure('renderedCallback', vm);
      }
    }, () => {
      callHook(component, renderedCallback);
    }, () => {
      {
        endMeasure('renderedCallback', vm);
      }

      vmInvokingRenderedCallback = vmInvokingRenderedCallbackInception;
    });
  }
}

function invokeEventListener(vm, fn, thisValue, event) {
  const {
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop$2, () => {
    if ("development" !== 'production') {
      assert$1.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
    }

    callHook(thisValue, fn, [event]);
  }, noop$2);
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

const signedComponentToMetaMap = new Map();

function registerComponent(Ctor, {
  name,
  tmpl: template
}) {
  signedComponentToMetaMap.set(Ctor, {
    name,
    template
  });
  return Ctor;
}

function getComponentRegisteredMeta(Ctor) {
  return signedComponentToMetaMap.get(Ctor);
}

function createComponent(uninitializedVm, Ctor) {
  invokeComponentConstructor(uninitializedVm, Ctor);
  const initializedVm = uninitializedVm;

  if (isUndefined$1(initializedVm.component)) {
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
    assert$1.invariant(isArray$1$1(vnodes), `${vm}.render() should always return an array of vnodes instead of ${vnodes}`);
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

const HTMLElementOriginalDescriptors = create$2(null);
forEach$1.call(ElementPrototypeAriaPropertyNames, propName => {
  const descriptor = getPropertyDescriptor$1(HTMLElement.prototype, propName);

  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
forEach$1.call(defaultDefHTMLPropertyNames, propName => {
  const descriptor = getPropertyDescriptor$1(HTMLElement.prototype, propName);

  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});

function componentValueMutated(vm, key) {
  valueMutated(vm.component, key);
}

function componentValueObserved(vm, key) {
  valueObserved(vm.component, key);
}

const ShadowRootInnerHTMLSetter = getOwnPropertyDescriptor$2(ShadowRoot.prototype, 'innerHTML').set;
const dispatchEvent$1 = 'EventTarget' in window ? EventTarget.prototype.dispatchEvent : Node.prototype.dispatchEvent;

function buildCustomElementConstructor(Ctor) {
  var _a;

  const {
    props,
    bridge: BaseElement
  } = getComponentInternalDef(Ctor);
  const attributeToPropMap = {};

  for (const propName in props) {
    attributeToPropMap[getAttrNameFromPropName(propName)] = propName;
  }

  return _a = class extends BaseElement {
    constructor() {
      super();
      createVM(this, Ctor, {
        mode: 'open',
        isRoot: true,
        owner: null
      });
    }

    connectedCallback() {
      connectRootElement(this);
    }

    disconnectedCallback() {
      disconnectedRootElement(this);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
      if (oldValue === newValue) {
        return;
      }

      const propName = attributeToPropMap[attrName];

      if (isUndefined$1(propName)) {
        return;
      }

      if (!isAttributeLocked(this, attrName)) {
        return;
      }

      this[propName] = newValue;
    }

  }, _a.observedAttributes = keys$2(attributeToPropMap), _a;
}

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
          const name = vm.elm.constructor.name;
          logError(`\`${name}\` constructor can't read the value of property \`${propName}\` because the owner component hasn't set the value yet. Instead, use the \`${name}\` constructor to set a default value for the property.`, vm);
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
        assert$1.invariant(!isObject$1$1(newValue) || isNull$1(newValue), `Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
      }

      if (newValue !== vm.cmpProps[propName]) {
        vm.cmpProps[propName] = newValue;
        componentValueMutated(vm, propName);
      }

      return set.call(vm.elm, newValue);
    }

  };
}

function getLinkedElement(cmp) {
  return getAssociatedVM(cmp).elm;
}

function BaseLightningElementConstructor() {
  if (isNull$1(vmBeingConstructed)) {
    throw new ReferenceError('Illegal constructor');
  }

  {
    assert$1.invariant(vmBeingConstructed.elm instanceof HTMLElement, `Component creation requires a DOM element to be associated to ${vmBeingConstructed}.`);
  }

  const vm = vmBeingConstructed;
  const {
    elm,
    mode,
    def: {
      ctor
    }
  } = vm;
  const component = this;
  vm.component = component;
  vm.tro = getTemplateReactiveObserver(vm);
  vm.oar = create$2(null);

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

  const shadowRootOptions = {
    mode,
    delegatesFocus: !!ctor.delegatesFocus,
    '$$lwc-synthetic-mode$$': true
  };
  const cmpRoot = elm.attachShadow(shadowRootOptions);
  associateVM(component, vm);
  associateVM(cmpRoot, vm);
  associateVM(elm, vm);
  vm.cmpRoot = cmpRoot;

  {
    patchCustomElementWithRestrictions(elm);
    patchComponentWithRestrictions(component);
    patchShadowRootWithRestrictions(cmpRoot);
  }

  return this;
}

BaseLightningElementConstructor.prototype = {
  constructor: BaseLightningElementConstructor,

  dispatchEvent(_event) {
    const elm = getLinkedElement(this);
    return dispatchEvent$1.apply(elm, arguments);
  },

  addEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);

    {
      const vmBeingRendered = getVMBeingRendered();
      assert$1.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      assert$1.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      assert$1.invariant(isFunction$1(listener), `Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
    }

    const wrappedListener = getWrappedComponentsListener(vm, listener);
    vm.elm.addEventListener(type, wrappedListener, options);
  },

  removeEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    vm.elm.removeEventListener(type, wrappedListener, options);
  },

  setAttributeNS(ns, attrName, _value) {
    const elm = getLinkedElement(this);

    {
      const vm = getAssociatedVM(this);
      assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
    }

    unlockAttribute(elm, attrName);
    elm.setAttributeNS.apply(elm, arguments);
    lockAttribute();
  },

  removeAttributeNS(ns, attrName) {
    const elm = getLinkedElement(this);
    unlockAttribute(elm, attrName);
    elm.removeAttributeNS.apply(elm, arguments);
    lockAttribute();
  },

  removeAttribute(attrName) {
    const elm = getLinkedElement(this);
    unlockAttribute(elm, attrName);
    elm.removeAttribute.apply(elm, arguments);
    lockAttribute();
  },

  setAttribute(attrName, _value) {
    const elm = getLinkedElement(this);

    {
      const vm = getAssociatedVM(this);
      assert$1.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
    }

    unlockAttribute(elm, attrName);
    elm.setAttribute.apply(elm, arguments);
    lockAttribute();
  },

  getAttribute(attrName) {
    const elm = getLinkedElement(this);
    unlockAttribute(elm, attrName);
    const value = elm.getAttribute.apply(elm, arguments);
    lockAttribute();
    return value;
  },

  getAttributeNS(ns, attrName) {
    const elm = getLinkedElement(this);
    unlockAttribute(elm, attrName);
    const value = elm.getAttributeNS.apply(elm, arguments);
    lockAttribute();
    return value;
  },

  getBoundingClientRect() {
    const elm = getLinkedElement(this);

    {
      const vm = getAssociatedVM(this);
      assert$1.isFalse(isBeingConstructed(vm), `this.getBoundingClientRect() should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM, instead, you can use it in one of the available life-cycle hooks.`);
    }

    return elm.getBoundingClientRect();
  },

  querySelector(selectors) {
    const vm = getAssociatedVM(this);

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.querySelector() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    const {
      elm
    } = vm;
    return elm.querySelector(selectors);
  },

  querySelectorAll(selectors) {
    const vm = getAssociatedVM(this);

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.querySelectorAll() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    const {
      elm
    } = vm;
    return elm.querySelectorAll(selectors);
  },

  getElementsByTagName(tagNameOrWildCard) {
    const vm = getAssociatedVM(this);

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.getElementsByTagName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    const {
      elm
    } = vm;
    return elm.getElementsByTagName(tagNameOrWildCard);
  },

  getElementsByClassName(names) {
    const vm = getAssociatedVM(this);

    {
      assert$1.isFalse(isBeingConstructed(vm), `this.getElementsByClassName() cannot be called during the construction of the custom element for ${getComponentTag(vm)} because no children has been added to this element yet.`);
    }

    const {
      elm
    } = vm;
    return elm.getElementsByClassName(names);
  },

  get isConnected() {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    return elm.isConnected;
  },

  get classList() {
    {
      const vm = getAssociatedVM(this);
      assert$1.isFalse(isBeingConstructed(vm), `Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
    }

    return getLinkedElement(this).classList;
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
const lightningBasedDescriptors = create$2(null);

for (const propName in HTMLElementOriginalDescriptors) {
  lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
}

defineProperties$2(BaseLightningElementConstructor.prototype, lightningBasedDescriptors);
const ComponentConstructorAsCustomElementConstructorMap = new Map();

function getCustomElementConstructor(Ctor) {
  if (Ctor === BaseLightningElement) {
    throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
  }

  let ce = ComponentConstructorAsCustomElementConstructorMap.get(Ctor);

  if (isUndefined$1(ce)) {
    ce = buildCustomElementConstructor(Ctor);
    ComponentConstructorAsCustomElementConstructorMap.set(Ctor, ce);
  }

  return ce;
}

defineProperty$2(BaseLightningElementConstructor, 'CustomElementConstructor', {
  get() {
    return getCustomElementConstructor(this);
  }

});

{
  patchLightningElementPrototypeWithRestrictions(BaseLightningElementConstructor.prototype);
}

freeze$2(BaseLightningElementConstructor);
seal$2(BaseLightningElementConstructor.prototype);
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
      vm.cmpFields[key] = value;
    },

    enumerable: true,
    configurable: true
  };
}

const {
  isArray: isArray$2
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
  hasOwnProperty: hasOwnProperty$2$1
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

function isObject$2(obj) {
  return typeof obj === 'object';
}

const proxyToValueMap = new WeakMap();

function registerProxy(proxy, value) {
  proxyToValueMap.set(proxy, value);
}

const unwrap = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

function wrapValue(membrane, value) {
  return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
}

function unwrapDescriptor(descriptor) {
  if (hasOwnProperty$2$1.call(descriptor, 'value')) {
    descriptor.value = unwrap(descriptor.value);
  }

  return descriptor;
}

function lockShadowTarget(membrane, shadowTarget, originalTarget) {
  const targetKeys = ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
  targetKeys.forEach(key => {
    let descriptor = getOwnPropertyDescriptor$1$1(originalTarget, key);

    if (!descriptor.configurable) {
      descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
    }

    ObjectDefineProperty(shadowTarget, key, descriptor);
  });
  preventExtensions(shadowTarget);
}

class ReactiveProxyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  }

  get(shadowTarget, key) {
    const {
      originalTarget,
      membrane
    } = this;
    const value = originalTarget[key];
    const {
      valueObserved
    } = membrane;
    valueObserved(originalTarget, key);
    return membrane.getProxy(value);
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
    } else if (key === 'length' && isArray$2(originalTarget)) {
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

  apply(shadowTarget, thisArg, argArray) {}

  construct(target, argArray, newTarget) {}

  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key);
    return key in originalTarget;
  }

  ownKeys(shadowTarget) {
    const {
      originalTarget
    } = this;
    return ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
  }

  isExtensible(shadowTarget) {
    const shadowIsExtensible = isExtensible(shadowTarget);

    if (!shadowIsExtensible) {
      return shadowIsExtensible;
    }

    const {
      originalTarget,
      membrane
    } = this;
    const targetIsExtensible = isExtensible(originalTarget);

    if (!targetIsExtensible) {
      lockShadowTarget(membrane, shadowTarget, originalTarget);
    }

    return targetIsExtensible;
  }

  setPrototypeOf(shadowTarget, prototype) {
    {
      throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString$1$1(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
    }
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
      membrane
    } = this;
    const {
      valueObserved
    } = this.membrane;
    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor$1$1(originalTarget, key);

    if (isUndefined$2(desc)) {
      return desc;
    }

    const shadowDescriptor = getOwnPropertyDescriptor$1$1(shadowTarget, key);

    if (!isUndefined$2(shadowDescriptor)) {
      return shadowDescriptor;
    }

    desc = wrapDescriptor(membrane, desc, wrapValue);

    if (!desc.configurable) {
      ObjectDefineProperty(shadowTarget, key, desc);
    }

    return desc;
  }

  preventExtensions(shadowTarget) {
    const {
      originalTarget,
      membrane
    } = this;
    lockShadowTarget(membrane, shadowTarget, originalTarget);
    preventExtensions(originalTarget);
    return true;
  }

  defineProperty(shadowTarget, key, descriptor) {
    const {
      originalTarget,
      membrane
    } = this;
    const {
      valueMutated
    } = membrane;
    const {
      configurable
    } = descriptor;

    if (hasOwnProperty$2$1.call(descriptor, 'writable') && !hasOwnProperty$2$1.call(descriptor, 'value')) {
      const originalDescriptor = getOwnPropertyDescriptor$1$1(originalTarget, key);
      descriptor.value = originalDescriptor.value;
    }

    ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));

    if (configurable === false) {
      ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
    }

    valueMutated(originalTarget, key);
    return true;
  }

}

function wrapReadOnlyValue(membrane, value) {
  return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
}

class ReadOnlyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  }

  get(shadowTarget, key) {
    const {
      membrane,
      originalTarget
    } = this;
    const value = originalTarget[key];
    const {
      valueObserved
    } = membrane;
    valueObserved(originalTarget, key);
    return membrane.getReadOnlyProxy(value);
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

  apply(shadowTarget, thisArg, argArray) {}

  construct(target, argArray, newTarget) {}

  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key);
    return key in originalTarget;
  }

  ownKeys(shadowTarget) {
    const {
      originalTarget
    } = this;
    return ArrayConcat.call(getOwnPropertyNames$1$1(originalTarget), getOwnPropertySymbols(originalTarget));
  }

  setPrototypeOf(shadowTarget, prototype) {
    {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
    }
  }

  getOwnPropertyDescriptor(shadowTarget, key) {
    const {
      originalTarget,
      membrane
    } = this;
    const {
      valueObserved
    } = membrane;
    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor$1$1(originalTarget, key);

    if (isUndefined$2(desc)) {
      return desc;
    }

    const shadowDescriptor = getOwnPropertyDescriptor$1$1(shadowTarget, key);

    if (!isUndefined$2(shadowDescriptor)) {
      return shadowDescriptor;
    }

    desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);

    if (hasOwnProperty$2$1.call(desc, 'set')) {
      desc.set = undefined;
    }

    if (!desc.configurable) {
      ObjectDefineProperty(shadowTarget, key, desc);
    }

    return desc;
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
  if (isArray$2(objectOrArray)) {
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

function createShadowTarget(value) {
  let shadowTarget = undefined;

  if (isArray$2(value)) {
    shadowTarget = [];
  } else if (isObject$2(value)) {
    shadowTarget = {};
  }

  return shadowTarget;
}

const ObjectDotPrototype = Object.prototype;

function defaultValueIsObservable(value) {
  if (value === null) {
    return false;
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (isArray$2(value)) {
    return true;
  }

  const proto = getPrototypeOf$1$1(value);
  return proto === ObjectDotPrototype || proto === null || getPrototypeOf$1$1(proto) === null;
}

const defaultValueObserved = (obj, key) => {};

const defaultValueMutated = (obj, key) => {};

const defaultValueDistortion = value => value;

function wrapDescriptor(membrane, descriptor, getValue) {
  const {
    set,
    get
  } = descriptor;

  if (hasOwnProperty$2$1.call(descriptor, 'value')) {
    descriptor.value = getValue(membrane, descriptor.value);
  } else {
    if (!isUndefined$2(get)) {
      descriptor.get = function () {
        return getValue(membrane, get.call(unwrap(this)));
      };
    }

    if (!isUndefined$2(set)) {
      descriptor.set = function (value) {
        set.call(unwrap(this), membrane.unwrapProxy(value));
      };
    }
  }

  return descriptor;
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
        valueIsObservable
      } = options;
      this.valueDistortion = isFunction$1$1(valueDistortion) ? valueDistortion : defaultValueDistortion;
      this.valueMutated = isFunction$1$1(valueMutated) ? valueMutated : defaultValueMutated;
      this.valueObserved = isFunction$1$1(valueObserved) ? valueObserved : defaultValueObserved;
      this.valueIsObservable = isFunction$1$1(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
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

function valueDistortion(value) {
  return value;
}

const reactiveMembrane = new ReactiveMembrane({
  valueObserved,
  valueMutated,
  valueDistortion
});

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
  create: create$2$1,
  defineProperties: defineProperties$1$1,
  defineProperty: defineProperty$1$1,
  freeze: freeze$1$1,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$2$1,
  getOwnPropertyNames: getOwnPropertyNames$2$1,
  getPrototypeOf: getPrototypeOf$2$1,
  hasOwnProperty: hasOwnProperty$3,
  keys: keys$1$1,
  seal: seal$1$1,
  setPrototypeOf: setPrototypeOf$1$1
} = Object;

const hasNativeSymbolsSupport$1$1 = Symbol('x').toString() === 'Symbol(x)';

let _globalThis$2;

if (typeof globalThis === 'object') {
  _globalThis$2 = globalThis;
}

function getGlobalThis$1() {
  if (typeof _globalThis$2 === 'object') {
    return _globalThis$2;
  }

  try {
    Object.defineProperty(Object.prototype, '__magic__', {
      get: function () {
        return this;
      },
      configurable: true
    });
    _globalThis$2 = __magic__;
    delete Object.prototype.__magic__;
  } catch (ex) {} finally {
    if (typeof _globalThis$2 === 'undefined') {
      _globalThis$2 = window;
    }
  }

  return _globalThis$2;
}

const _globalThis$1$1 = getGlobalThis$1();

if (!_globalThis$1$1.lwcRuntimeFlags) {
  Object.defineProperty(_globalThis$1$1, 'lwcRuntimeFlags', {
    value: create$2$1(null)
  });
}

const runtimeFlags$1 = _globalThis$1$1.lwcRuntimeFlags;

function createPublicPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);

      if (isBeingConstructed(vm)) {
        {
          const name = vm.elm.constructor.name;
          logError(`\`${name}\` constructor can’t read the value of property \`${toString$1(key)}\` because the owner component hasn’t set the value yet. Instead, use the \`${name}\` constructor to set a default value for the property.`, vm);
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
        if (runtimeFlags$1.ENABLE_REACTIVE_SETTER) {
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

const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
const WireMetaMap = new Map();

function noop$3() {}

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
    invokeComponentCallback(vm, method, [value]);
  };
}

function createConfigWatcher(vm, wireDef, callbackWhenConfigIsReady) {
  const {
    component
  } = vm;
  const {
    configCallback
  } = wireDef;
  let hasPendingConfig = false;
  const ro = new ReactiveObserver(() => {
    if (hasPendingConfig === false) {
      hasPendingConfig = true;
      Promise.resolve().then(() => {
        hasPendingConfig = false;
        ro.reset();
        callback();
      });
    }
  });

  const callback = () => {
    let config;
    ro.observe(() => config = configCallback(component));
    callbackWhenConfigIsReady(config);
  };

  return callback;
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
    context: {
      wiredConnecting,
      wiredDisconnecting
    }
  } = vm;
  ArrayPush$1.call(wiredConnecting, () => {
    const internalDomEvent = new CustomEvent(adapterContextToken, {
      bubbles: true,
      composed: true,

      detail(newContext, disconnectCallback) {
        ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
        callbackWhenContextIsReady(newContext);
      }

    });
    dispatchEvent$1.call(elm, internalDomEvent);
  });
}

function createConnector(vm, name, wireDef) {
  const {
    method,
    adapter,
    configCallback,
    hasParams
  } = wireDef;
  const {
    component
  } = vm;
  const dataCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
  let context;
  let connector;
  defineProperty$2(dataCallback, DeprecatedWiredElementHost, {
    value: vm.elm
  });
  runWithBoundaryProtection(vm, vm, noop$3, () => {
    connector = new adapter(dataCallback);
  }, noop$3);

  const updateConnectorConfig = config => {
    runWithBoundaryProtection(vm, vm, noop$3, () => {
      connector.update(config, context);
    }, noop$3);
  };

  let computeConfigAndUpdate = () => {
    updateConnectorConfig(configCallback(component));
  };

  if (hasParams) {
    Promise.resolve().then(() => {
      computeConfigAndUpdate = createConfigWatcher(vm, wireDef, updateConnectorConfig);
      computeConfigAndUpdate();
    });
  } else {
    computeConfigAndUpdate();
  }

  if (!isUndefined$1(adapter.contextSchema)) {
    createContextWatcher(vm, wireDef, newContext => {
      if (context !== newContext) {
        context = newContext;
        computeConfigAndUpdate();
      }
    });
  }

  return connector;
}

const AdapterToTokenMap = new Map();

function getAdapterToken(adapter) {
  return AdapterToTokenMap.get(adapter);
}

function storeWiredMethodMeta(descriptor, adapter, configCallback, hasParams) {
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }

  const method = descriptor.value;
  const def = {
    adapter,
    method,
    configCallback,
    hasParams
  };
  WireMetaMap.set(descriptor, def);
}

function storeWiredFieldMeta(descriptor, adapter, configCallback, hasParams) {
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }

  const def = {
    adapter,
    configCallback,
    hasParams
  };
  WireMetaMap.set(descriptor, def);
}

function installWireAdapters(vm) {
  const {
    def: {
      wire
    }
  } = vm;

  if (getOwnPropertyNames$2(wire).length === 0) {
    {
      assert$1.fail(`Internal Error: wire adapters should only be installed in instances with at least one wire declaration.`);
    }
  } else {
    const connect = vm.context.wiredConnecting = [];
    const disconnect = vm.context.wiredDisconnecting = [];

    for (const fieldNameOrMethod in wire) {
      const descriptor = wire[fieldNameOrMethod];
      const wireDef = WireMetaMap.get(descriptor);

      {
        assert$1.invariant(wireDef, `Internal Error: invalid wire definition found.`);
      }

      if (!isUndefined$1(wireDef)) {
        const adapterInstance = createConnector(vm, fieldNameOrMethod, wireDef);
        ArrayPush$1.call(connect, () => adapterInstance.connect());
        ArrayPush$1.call(disconnect, () => adapterInstance.disconnect());
      }
    }
  }
}

function connectWireAdapters(vm) {
  const {
    context: {
      wiredConnecting
    }
  } = vm;

  if (isUndefined$1(wiredConnecting)) {
    {
      assert$1.fail(`Internal Error: wire adapters must be installed in instances with at least one wire declaration.`);
    }
  }

  for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
    wiredConnecting[i]();
  }
}

function disconnectWireAdapters(vm) {
  const {
    context: {
      wiredDisconnecting
    }
  } = vm;

  if (isUndefined$1(wiredDisconnecting)) {
    {
      assert$1.fail(`Internal Error: wire adapters must be installed in instances with at least one wire declaration.`);
    }
  }

  runWithBoundaryProtection(vm, vm, noop$3, () => {
    for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
      wiredDisconnecting[i]();
    }
  }, noop$3);
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

function validateObservedField(Ctor, fieldName, descriptor) {
  {
    if (!isUndefined$1(descriptor)) {
      assert$1.fail(`Compiler Error: Invalid field ${fieldName} declaration.`);
    }
  }
}

function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
  {
    if (!isUndefined$1(descriptor)) {
      assert$1.fail(`Compiler Error: Invalid @track ${fieldName} declaration.`);
    }
  }
}

function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
  {
    if (!isUndefined$1(descriptor)) {
      assert$1.fail(`Compiler Error: Invalid @wire(...) ${fieldName} field declaration.`);
    }
  }
}

function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
  {
    if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse$1$1(descriptor.writable)) {
      assert$1.fail(`Compiler Error: Invalid @wire(...) ${methodName} method declaration.`);
    }
  }
}

function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
  {
    if (!isUndefined$1(descriptor)) {
      assert$1.fail(`Compiler Error: Invalid @api ${fieldName} field declaration.`);
    }
  }
}

function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
  {
    if (isUndefined$1(descriptor)) {
      assert$1.fail(`Compiler Error: Invalid @api get ${fieldName} accessor declaration.`);
    } else if (isFunction$1(descriptor.set)) {
      assert$1.isTrue(isFunction$1(descriptor.get), `Compiler Error: Missing getter for property ${toString$1(fieldName)} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
    } else if (!isFunction$1(descriptor.get)) {
      assert$1.fail(`Compiler Error: Missing @api get ${fieldName} accessor declaration.`);
    }
  }
}

function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
  {
    if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse$1$1(descriptor.writable)) {
      assert$1.fail(`Compiler Error: Invalid @api ${methodName} method declaration.`);
    }
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
  const apiMethods = create$2(null);
  const apiFields = create$2(null);
  const wiredMethods = create$2(null);
  const wiredFields = create$2(null);
  const observedFields = create$2(null);
  const apiFieldsConfig = create$2(null);
  let descriptor;

  if (!isUndefined$1(publicProps)) {
    for (const fieldName in publicProps) {
      const propConfig = publicProps[fieldName];
      apiFieldsConfig[fieldName] = propConfig.config;
      descriptor = getOwnPropertyDescriptor$2(proto, fieldName);

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
      defineProperty$2(proto, fieldName, descriptor);
    }
  }

  if (!isUndefined$1(publicMethods)) {
    forEach$1.call(publicMethods, methodName => {
      descriptor = getOwnPropertyDescriptor$2(proto, methodName);

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
        hasParams
      } = wire[fieldOrMethodName];
      descriptor = getOwnPropertyDescriptor$2(proto, fieldOrMethodName);

      if (method === 1) {
        {
          assert$1.isTrue(adapter, `@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
          validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }

        if (isUndefined$1(descriptor)) {
          throw new Error();
        }

        wiredMethods[fieldOrMethodName] = descriptor;
        storeWiredMethodMeta(descriptor, adapter, configCallback, hasParams);
      } else {
        {
          assert$1.isTrue(adapter, `@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
          validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }

        descriptor = internalWireFieldDecorator(fieldOrMethodName);
        wiredFields[fieldOrMethodName] = descriptor;
        storeWiredFieldMeta(descriptor, adapter, configCallback, hasParams);
        defineProperty$2(proto, fieldOrMethodName, descriptor);
      }
    }
  }

  if (!isUndefined$1(track)) {
    for (const fieldName in track) {
      descriptor = getOwnPropertyDescriptor$2(proto, fieldName);

      {
        validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
      }

      descriptor = internalTrackDecorator(fieldName);
      defineProperty$2(proto, fieldName, descriptor);
    }
  }

  if (!isUndefined$1(fields)) {
    for (let i = 0, n = fields.length; i < n; i++) {
      const fieldName = fields[i];
      descriptor = getOwnPropertyDescriptor$2(proto, fieldName);

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

const cachedGetterByKey = create$2(null);
const cachedSetterByKey = create$2(null);

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
    return callHook(vm.component, fn, ArraySlice$1$1.call(arguments));
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

    setPrototypeOf$2(HTMLBridgeElement, SuperClass);
    setPrototypeOf$2(HTMLBridgeElement.prototype, SuperClass.prototype);
    defineProperty$2(HTMLBridgeElement.prototype, 'constructor', {
      writable: true,
      configurable: true,
      value: HTMLBridgeElement
    });
  }

  const descriptors = create$2(null);

  for (let i = 0, len = props.length; i < len; i += 1) {
    const propName = props[i];
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

  defineProperties$2(HTMLBridgeElement.prototype, descriptors);
  return HTMLBridgeElement;
}

const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElement, getOwnPropertyNames$2(HTMLElementOriginalDescriptors), []);
freeze$2(BaseBridgeElement);
seal$2(BaseBridgeElement.prototype);

function resolveCircularModuleDependency(fn) {
  return fn();
}

function isCircularModuleDependency(obj) {
  return isFunction$1(obj) && hasOwnProperty$1$1.call(obj, '__circular__');
}

const CtorToDefMap = new WeakMap();

function getCtorProto(Ctor, subclassComponentName) {
  let proto = getPrototypeOf$2(Ctor);

  if (isNull$1(proto)) {
    throw new ReferenceError(`Invalid prototype chain for ${subclassComponentName}, you must extend LightningElement.`);
  }

  if (isCircularModuleDependency(proto)) {
    const p = resolveCircularModuleDependency(proto);

    {
      if (isNull$1(p)) {
        throw new ReferenceError(`Circular module dependency for ${subclassComponentName}, must resolve to a constructor that extends LightningElement.`);
      }
    }

    proto = p === proto ? BaseLightningElement : p;
  }

  return proto;
}

function createComponentDef(Ctor, meta, subclassComponentName) {
  {
    const ctorName = Ctor.name;
    assert$1.isTrue(Ctor.constructor, `Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);
  }

  const {
    name
  } = meta;
  let {
    template
  } = meta;
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
  const superProto = getCtorProto(Ctor, subclassComponentName);
  const superDef = superProto !== BaseLightningElement ? getComponentInternalDef(superProto, subclassComponentName) : lightingElementDef;
  const SuperBridge = isNull$1(superDef) ? BaseBridgeElement : superDef.bridge;
  const bridge = HTMLBridgeElementFactory(SuperBridge, keys$2(apiFields), keys$2(apiMethods));
  const props = assign$2(create$2(null), superDef.props, apiFields);
  const propsConfig = assign$2(create$2(null), superDef.propsConfig, apiFieldsConfig);
  const methods = assign$2(create$2(null), superDef.methods, apiMethods);
  const wire = assign$2(create$2(null), superDef.wire, wiredFields, wiredMethods);
  connectedCallback = connectedCallback || superDef.connectedCallback;
  disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
  renderedCallback = renderedCallback || superDef.renderedCallback;
  errorCallback = errorCallback || superDef.errorCallback;
  render = render || superDef.render;
  template = template || superDef.template;
  defineProperties$2(proto, observedFields);
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
    freeze$2(Ctor.prototype);
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
  } while (!isNull$1(current) && (current = getPrototypeOf$2(current)));

  return false;
}

function getComponentInternalDef(Ctor, name) {
  let def = CtorToDefMap.get(Ctor);

  if (isUndefined$1(def)) {
    if (isCircularModuleDependency(Ctor)) {
      Ctor = resolveCircularModuleDependency(Ctor);
    }

    if (!isComponentConstructor(Ctor)) {
      throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
    }

    let meta = getComponentRegisteredMeta(Ctor);

    if (isUndefined$1(meta)) {
      meta = {
        template: undefined,
        name: Ctor.name
      };
    }

    def = createComponentDef(Ctor, meta, name || Ctor.name);
    CtorToDefMap.set(Ctor, def);
  }

  return def;
}

function setElementProto(elm, def) {
  setPrototypeOf$2(elm, def.bridge.prototype);
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

const Services = create$2(null);

function invokeServiceHook(vm, cbs) {
  {
    assert$1.isTrue(isArray$1$1(cbs) && cbs.length > 0, `Optimize invokeServiceHook() to be invoked only when needed`);
  }

  const {
    component,
    data,
    def,
    context
  } = vm;

  for (let i = 0, len = cbs.length; i < len; ++i) {
    cbs[i].call(undefined, component, data, def, context);
  }
}

var VMState;

(function (VMState) {
  VMState[VMState["created"] = 0] = "created";
  VMState[VMState["connected"] = 1] = "connected";
  VMState[VMState["disconnected"] = 2] = "disconnected";
})(VMState || (VMState = {}));

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
    disconnectedRootElement(elm);
  }

  runConnectedCallback(vm);
  rehydrate(vm);
  endGlobalMeasure(GlobalMeasurementPhase.HYDRATE, vm);
}

function disconnectedRootElement(elm) {
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
}

function removeVM(vm) {
  {
    assert$1.isTrue(vm.state === VMState.connected || vm.state === VMState.disconnected, `${vm} must have been connected.`);
  }

  resetComponentStateWhenRemoved(vm);
}

function createVM(elm, Ctor, options) {
  {
    assert$1.invariant(elm instanceof HTMLElement, `VM creation requires a DOM element instead of ${elm}.`);
  }

  const def = getComponentInternalDef(Ctor);
  const {
    isRoot,
    mode,
    owner
  } = options;
  idx += 1;
  const uninitializedVm = {
    idx,
    state: VMState.created,
    isScheduled: false,
    isDirty: true,
    isRoot: isTrue$1$1(isRoot),
    mode,
    def,
    owner,
    elm,
    data: EmptyObject,
    context: create$2(null),
    cmpProps: create$2(null),
    cmpFields: create$2(null),
    cmpSlots: useSyntheticShadow ? create$2(null) : undefined,
    callHook,
    setHook,
    getHook,
    children: EmptyArray,
    aChildren: EmptyArray,
    velements: EmptyArray,
    cmpTemplate: undefined,
    component: undefined,
    cmpRoot: undefined,
    tro: undefined,
    oar: undefined
  };

  {
    uninitializedVm.toString = () => {
      return `[object:vm ${def.name} (${uninitializedVm.idx})]`;
    };
  }

  createComponent(uninitializedVm, Ctor);
  const initializedVm = uninitializedVm;

  if (hasWireAdapters(initializedVm)) {
    installWireAdapters(initializedVm);
  }

  return initializedVm;
}

function assertIsVM(obj) {
  if (isNull$1(obj) || !isObject$1$1(obj) || !('cmpRoot' in obj)) {
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
  {
    assert$1.isTrue(vm.elm instanceof HTMLElement, `rehydration can only happen after ${vm} was patched the first time.`);
  }

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
        {
          startMeasure('patch', vm);
        }
      }, () => {
        fn(cmpRoot, oldCh, newCh);
      }, () => {
        {
          endMeasure('patch', vm);
        }
      });
    }
  }

  if (vm.state === VMState.connected) {
    runRenderedCallback(vm);
  }
}

function runRenderedCallback(vm) {
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

        ArrayUnshift$1$1.apply(rehydrateQueue, ArraySlice$1$1.call(vms, i + 1));
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
    {
      startMeasure('connectedCallback', vm);
    }

    invokeComponentCallback(vm, connectedCallback);

    {
      endMeasure('connectedCallback', vm);
    }
  }
}

function hasWireAdapters(vm) {
  return getOwnPropertyNames$2(vm.def.wire).length > 0;
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
    {
      startMeasure('disconnectedCallback', vm);
    }

    invokeComponentCallback(vm, disconnectedCallback);

    {
      endMeasure('disconnectedCallback', vm);
    }
  }
}

function runShadowChildNodesDisconnectedCallback(vm) {
  const {
    velements: vCustomElementCollection
  } = vm;

  for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
    const elm = vCustomElementCollection[i].elm;

    if (!isUndefined$1(elm)) {
      const childVM = getAssociatedVM(elm);
      resetComponentStateWhenRemoved(childVM);
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

    if (!isNull$1(vnode) && isArray$1$1(vnode.children) && !isUndefined$1(vnode.elm)) {
      if (isUndefined$1(vnode.ctor)) {
        recursivelyDisconnectChildren(vnode.children);
      } else {
        resetComponentStateWhenRemoved(getAssociatedVM(vnode.elm));
      }
    }
  }
}

function resetShadowRoot(vm) {
  vm.children = EmptyArray;
  ShadowRootInnerHTMLSetter.call(vm.cmpRoot, '');
  runShadowChildNodesDisconnectedCallback(vm);
}

function scheduleRehydration(vm) {
  if (!vm.isScheduled) {
    vm.isScheduled = true;

    if (rehydrateQueue.length === 0) {
      addCallbackToNextTick(flushRehydrationQueue);
    }

    ArrayPush$1.call(rehydrateQueue, vm);
  }
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
    assert$1.invariant(isObject$1$1(vm.cmpSlots), `When doing manual allocation, there must be a cmpSlots object available.`);
  }

  const {
    cmpSlots: oldSlots
  } = vm;
  const cmpSlots = vm.cmpSlots = create$2(null);

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
    vnode.key = `@${slotName}:${vnode.key}`;
    ArrayPush$1.call(vnodes, vnode);
  }

  if (isFalse$1$1(vm.isDirty)) {
    const oldKeys = keys$2(oldSlots);

    if (oldKeys.length !== keys$2(cmpSlots).length) {
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
      error.wcStack = error.wcStack || getErrorComponentStack(vm);
      const errorBoundaryVm = isNull$1(owner) ? undefined : getErrorBoundaryVM(owner);

      if (isUndefined$1(errorBoundaryVm)) {
        throw error;
      }

      resetShadowRoot(vm);

      {
        startMeasure('errorCallback', errorBoundaryVm);
      }

      const errorCallback = errorBoundaryVm.def.errorCallback;
      invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);

      {
        endMeasure('errorCallback', errorBoundaryVm);
      }
    }
  }
}

const ConnectingSlot = createHiddenField$1('connecting', 'engine');
const DisconnectingSlot = createHiddenField$1('disconnecting', 'engine');

function callNodeSlot(node, slot) {
  {
    assert$1.isTrue(node, `callNodeSlot() should not be called for a non-object`);
  }

  const fn = getHiddenField$1(node, slot);

  if (!isUndefined$1(fn)) {
    fn(node);
  }

  return node;
}

assign$2(Node.prototype, {
  appendChild(newChild) {
    const appendedNode = appendChild$1.call(this, newChild);
    return callNodeSlot(appendedNode, ConnectingSlot);
  },

  insertBefore(newChild, referenceNode) {
    const insertedNode = insertBefore$1.call(this, newChild, referenceNode);
    return callNodeSlot(insertedNode, ConnectingSlot);
  },

  removeChild(oldChild) {
    const removedNode = removeChild$1.call(this, oldChild);
    return callNodeSlot(removedNode, DisconnectingSlot);
  },

  replaceChild(newChild, oldChild) {
    const replacedNode = replaceChild$1.call(this, newChild, oldChild);
    callNodeSlot(replacedNode, DisconnectingSlot);
    callNodeSlot(newChild, ConnectingSlot);
    return replacedNode;
  }

});

function createElement$1(sel, options) {
  if (!isObject$1$1(options) || isNull$1(options)) {
    throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString$1(options)}".`);
  }

  const Ctor = options.is;

  if (!isFunction$1(Ctor)) {
    throw new TypeError(`"createElement" function expects a "is" option with a valid component constructor.`);
  }

  const element = document.createElement(sel);

  if (!isUndefined$1(getAssociatedVMIfPresent(element))) {
    return element;
  }

  const def = getComponentInternalDef(Ctor);
  setElementProto(element, def);
  createVM(element, def.ctor, {
    mode: options.mode !== 'closed' ? 'open' : 'closed',
    isRoot: true,
    owner: null
  });
  setHiddenField$1(element, ConnectingSlot, connectRootElement);
  setHiddenField$1(element, DisconnectingSlot, disconnectedRootElement);
  return element;
}

function stylesheet(hostSelector, shadowSelector, nativeShadow) {
  return ".center" + shadowSelector + " {text-align: center;}\n.link" + shadowSelector + " {border: none;padding: 10px;border-radius: 5px;text-decoration: none;background-color: #ff6000;color: white;margin-left: 33%;margin-right: 33%;display: inline-block;margin-top: 1em;}\n.info" + shadowSelector + " {color: black;background-color: #e4f2f8;margin: auto;padding: 15px 10px;text-align: left;width: 300px;border-radius: 5px;}\n.code" + shadowSelector + " {font-family: monospace;}\n.container" + shadowSelector + " {margin-top: 30px;}\nimg" + shadowSelector + " {max-width: 150px;}\n.greeting" + shadowSelector + " {height: 75px;}\n.slds-button-group" + shadowSelector + " button" + shadowSelector + " {text-transform: uppercase;}\n";
}
var _implicitStylesheets = [stylesheet];

function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
  return ".col" + shadowSelector + " {display: inline-block;width: 30%;margin: 1rem;}\n.slds-text-link:hover" + shadowSelector + " {cursor: pointer;}\npre" + shadowSelector + " {text-align: left;border: 1px solid #dee2e6;border-radius: 10px;padding: 1.2rem;background-color: #364149 !important;color: #fff !important;}\n";
}
var _implicitStylesheets$1 = [stylesheet$1];

function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    s: api_slot,
    h: api_element,
    b: api_bind,
    gid: api_scoped_id
  } = $api;
  const {
    _m0,
    _m1,
    _m2
  } = $ctx;
  return [api_element("article", {
    classMap: {
      "slds-card": true,
      "col": true
    },
    key: 6
  }, [api_element("div", {
    classMap: {
      "slds-card__body": true,
      "slds-card__body_inner": true,
      "slds-p-horizontal_x-large": true
    },
    key: 2
  }, [api_element("div", {
    classMap: {
      "chart": true
    },
    key: 1
  }, [api_slot("chartExample", {
    attrs: {
      "name": "chartExample"
    },
    key: 0
  }, [api_text("Chart example")], $slotset)])]), api_element("footer", {
    classMap: {
      "slds-card__footer": true
    },
    key: 5
  }, [api_element("p", {
    classMap: {
      "slds-card__footer-action": true,
      "slds-text-link": true
    },
    key: 4,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.openModal))
    }
  }, [api_text("Source code"), api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 3
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
      "aria-describedby": `${api_scoped_id("modal-content-id-1")}`
    },
    key: 19
  }, [api_element("div", {
    classMap: {
      "slds-modal__container": true
    },
    styleMap: {
      "width": "90%",
      "maxWidth": "unset"
    },
    key: 18
  }, [api_element("header", {
    classMap: {
      "slds-modal__header": true,
      "slds-modal__header_empty": true
    },
    key: 11
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
    key: 8
  }, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#close")
    },
    key: 7
  }, [])]), api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    key: 9
  }, [api_text("Close")])])]), api_element("div", {
    classMap: {
      "slds-modal__content": true,
      "slds-p-around_medium": true
    },
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 15
  }, [api_element("div", {
    classMap: {
      "code": true
    },
    key: 14
  }, [api_element("pre", {
    key: 13
  }, [api_slot("chartCode", {
    attrs: {
      "name": "chartCode"
    },
    key: 12
  }, [api_text("Code example")], $slotset)])])]), api_element("footer", {
    classMap: {
      "slds-modal__footer": true
    },
    key: 17
  }, [api_element("button", {
    classMap: {
      "slds-button": true,
      "slds-button_neutral": true
    },
    key: 16,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.closeModal))
    }
  }, [api_text("Close")])])])]) : null, $cmp.isModalOpen ? api_element("div", {
    classMap: {
      "slds-backdrop": true,
      "slds-backdrop_open": true
    },
    styleMap: {
      "opacity": "1.0"
    },
    key: 20
  }, []) : null];
}

var _tmpl = registerTemplate(tmpl);
tmpl.slots = ["chartExample", "chartCode"];
tmpl.stylesheets = [];

if (_implicitStylesheets$1) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
}
tmpl.stylesheetTokens = {
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
  tmpl: _tmpl
});

function stylesheet$2(hostSelector, shadowSelector, nativeShadow) {
  return "\n" + (nativeShadow ? (":host {display: block;}") : (hostSelector + " {display: block;}")) + "\n";
}
var _implicitStylesheets$2 = [stylesheet$2];

function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {
    h: api_element,
    s: api_slot
  } = $api;
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

var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.slots = [""];
tmpl$1.stylesheets = [];

if (_implicitStylesheets$2) {
  tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets$2);
}
tmpl$1.stylesheetTokens = {
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

function sanitize(attribute) {
  let value = attribute;

  if (value) {
    try {
      value = JSON.parse(value.replace(/\\/g, ''));
    } catch (e) {}
  }

  return value;
}

let nanoid = (t = 21) => {
  let e = '',
      r = crypto.getRandomValues(new Uint8Array(t));

  for (; t--;) {
    let n = 63 & r[t];
    e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? '_' : '-';
  }

  return e;
};

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

var _tmpl$2 = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      this._config = _objectSpread({}, this._config, payload);
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
          this._config[option][attribut] = _objectSpread({}, this._config[option][attribut], payload[attribut]);
        } else {
          this._config[option][attribut] = payload[attribut];
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
  tmpl: _tmpl$2
});

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
  tmpl: _tmpl$2
});

class Chart extends BaseLightningElement {
  get uuid() {
    return this._uuid;
  }

  set uuid(v) {
    this._uuid = v;
  }

  get responsive() {
    return this._payload.responsive;
  }

  set responsive(v) {
    this._payload.responsive = Boolean(v);
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
    this._payload.maintainAspectRatio = Boolean(v);
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
    if (this._chart) {
      return this._chart.toBase64Image();
    }

    return null;
  }

  generateLegendChart() {
    if (this._chart) {
      return this._chart.generateLegend();
    }

    return null;
  }

  getElementAtEventChart(e) {
    if (this._chart) {
      return this._chart.getElementAtEvent(e);
    }

    return null;
  }

  getElementsAtEventChart(e) {
    if (this._chart) {
      return this._chart.getElementsAtEvent(e);
    }

    return null;
  }

  getDatasetAtEventChart(e) {
    if (this._chart) {
      return this._chart.getDatasetAtEvent(e);
    }

    return null;
  }

  getDatasetMetaChart(index) {
    if (this._chart) {
      return this._chart.getDatasetMeta(index);
    }

    return null;
  }

  constructor() {
    super();
    this.width = void 0;
    this.height = void 0;
    this.stylecss = void 0;
    this._uuid = nanoid(11);
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
          this._details = payload;
        } else {
          if (option === ATTRIBUTE_TITLE) {
            this.ariaLabel = payload.text;
          }

          this._configService.updateConfig(payload, option);
        }

        this._reactivityManager.throttleRegisteredJob();
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

      this._reactivityManager.throttleRegisteredJob();
    }, reason => {
      console.error('[LWCC] Error loading Chart.js', reason);
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
    let canvas = this.template.querySelector('canvas');

    if (!canvas) {
      canvas = document.createElement('canvas');
      this.template.querySelector('div').appendChild(canvas);
    }

    return canvas.getContext('2d');
  }

  drawChart() {
    if (!this._isReadyToDraw()) return;

    try {
      this._configService.updateConfig(this._payload, null);

      if (!this._chart || !this._chart.ctx) {
        this._chart = new window.Chart(this.getCanvas(), {
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
  fields: ["_uuid", "ariaLabel", "_listenerHandlers"]
});

var _cChart = registerComponent(Chart, {
  tmpl: _tmpl$1
});

function tmpl$2($api, $cmp, $slotset, $ctx) {
  const {
    s: api_slot
  } = $api;
  return [api_slot("", {
    key: 0
  }, [], $slotset)];
}

var _tmpl$3 = registerTemplate(tmpl$2);
tmpl$2.slots = [""];
tmpl$2.stylesheets = [];
tmpl$2.stylesheetTokens = {
  hostAttribute: "c-dataset_dataset-host",
  shadowAttribute: "c-dataset_dataset"
};

class BaseAttribute extends BaseLightningElement {
  constructor() {
    super();
    this._eventName = OPTION_EVENT_NAME;
    this._reactivityManager = new ReactivityManager$1();

    this._reactivityManager.registerJob(() => this.dispatchOption());

    this._payload = this._reactivityManager.getReactivityProxy();
  }

  renderedCallback() {
    this._parent = this.template.host.parentNode;
  }

  disconnectedCallback() {
    if (this._parent) {
      this._parent.dispatchEvent(new CustomEvent(DISCONNECT_EVENT_NAME, {
        bubbles: true,
        detail: {
          option: this._option,
          payload: this._payload
        }
      }));
    }
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
  tmpl: _tmpl$2
});

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

class Data extends BaseAttribute$1 {
  get label() {
    return this._payload.label;
  }

  set label(v) {
    this._payload.label = v;
  }

  get yaxisid() {
    return this._payload.yAxisID;
  }

  set yaxisid(v) {
    this._payload.yAxisID = v;
  }

  get xaxisid() {
    return this._payload.xAxisID;
  }

  set xaxisid(v) {
    this._payload.xAxisID = v;
  }

  get detail() {
    return this._payload.data;
  }

  set detail(v) {
    this._payload.data = sanitize(v);
  }

  get backgroundcolor() {
    return this._payload.backgroundColor;
  }

  set backgroundcolor(v) {
    this._payload.backgroundColor = sanitize(v);
  }

  get bordercolor() {
    return this._payload.borderColor;
  }

  set bordercolor(v) {
    this._payload.borderColor = sanitize(v);
  }

  get borderwidth() {
    return this._payload.borderWidth;
  }

  set borderwidth(v) {
    this._payload.borderWidth = v;
  }

  get fill() {
    return this._payload.fill;
  }

  set fill(v) {
    this._payload.fill = v;
  }

  get order() {
    return this._payload.order;
  }

  set order(v) {
    this._payload.order = Number.parseInt(v, 10);
  }

  get type() {
    return this._payload.type;
  }

  set type(v) {
    this._payload.type = v;
  }

  get pointhoverbackgroundcolor() {
    return this._payload.pointHoverBackgroundColor;
  }

  set pointhoverbackgroundcolor(v) {
    this._payload.pointHoverBackgroundColor = v;
  }

  get pointhoverbordercolor() {
    return this._payload.pointHoverBorderColor;
  }

  set pointhoverbordercolor(v) {
    this._payload.pointHoverBorderColor = v;
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

  constructor() {
    super();
    this._eventName = DATA_EVENT_NAME;
    this._payload.uuid = nanoid(10);
    this._option = ATTRIBUTE_DATA;
  }

}

registerDecorators(Data, {
  publicProps: {
    label: {
      config: 3
    },
    yaxisid: {
      config: 3
    },
    xaxisid: {
      config: 3
    },
    detail: {
      config: 3
    },
    backgroundcolor: {
      config: 3
    },
    bordercolor: {
      config: 3
    },
    borderwidth: {
      config: 3
    },
    fill: {
      config: 3
    },
    order: {
      config: 3
    },
    type: {
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
    }
  }
});

var _cData = registerComponent(Data, {
  tmpl: _tmpl$2
});

class Title extends BaseAttribute$1 {
  get display() {
    return this._payload.display;
  }

  set display(v) {
    this._payload.display = Boolean(v);
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
  tmpl: _tmpl$2
});

class Legend extends BaseAttribute$1 {
  get display() {
    return this._payload.display;
  }

  set display(v) {
    this._payload.display = Boolean(v);
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
    this._payload.fullWidth = v;
  }

  get reverse() {
    return this._payload.reverse;
  }

  set reverse(v) {
    this._payload.reverse = v;
  }

  get rtl() {
    return this._payload.rtl;
  }

  set rtl(v) {
    this._payload.rtl = v;
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
    this._payload.labels.usePointStyle = v;
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
  tmpl: _tmpl$2
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
  tmpl: _tmpl$2
});

class BaseAxis extends BaseAttribute$1 {
  get display() {
    return this._content.display;
  }

  set display(v) {
    this._content.display = Boolean(v);
  }

  get weight() {
    return this._content.weight;
  }

  set weight(v) {
    this._content.weight = v;
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
  tmpl: _tmpl$2
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
    this._content.offset = v;
  }

  get id() {
    return this._content.id;
  }

  set id(v) {
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
    this._content.ticks.autoSkip = v;
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
    this._content.ticks.mirror = v;
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
    this._content.scaleLabel.display = v;
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
    this._content.gridLines.display = v;
  }

  get gridCircular() {
    return this._content.gridLines.circular;
  }

  set gridCircular(v) {
    this._content.gridLines.circular = v;
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
    this._content.gridLines.drawBorder = v;
  }

  get gridDrawonchartarea() {
    return this._content.gridLines.drawOnChartArea;
  }

  set gridDrawonchartarea(v) {
    this._content.gridLines.drawOnChartArea = v;
  }

  get gridDrawticks() {
    return this._content.gridLines.drawTicks;
  }

  set gridDrawticks(v) {
    this._content.gridLines.drawTicks = v;
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
    this._content.gridLines.offsetGridLines = Number(v);
  }

  get gridZ() {
    return this._content.gridLines.z;
  }

  set gridZ(v) {
    this._content.gridLines.z = Number(v);
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
    }
  }
});

var _cCartesianAxis = registerComponent(CartesianAxis, {
  tmpl: _tmpl$2
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
  tmpl: _tmpl$2
});

class Tooltip extends BaseAttribute$1 {
  get enabled() {
    return this._payload.enabled;
  }

  set enabled(v) {
    this._payload.enabled = v;
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
    this._payload.intersect = v;
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
    this._payload.displayColors = v;
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
    this._payload.rtl = v;
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
  tmpl: _tmpl$2
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
    this._payload.line.capBezierPoints = v;
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
    this._payload.line.fill = v;
  }

  get stepped() {
    return this._payload.line.stepped;
  }

  set stepped(v) {
    this._payload.line.stepped = v;
  }

  get spangaps() {
    return this._payload.line.spanGaps;
  }

  set spangaps(v) {
    this._payload.line.spanGaps = v;
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
  tmpl: _tmpl$2
});

class CartesianLinearAxis extends _cCartesianAxis {
  get ticksBeginatzero() {
    return this._content.ticks.beginAtZero;
  }

  set ticksBeginatzero(v) {
    this._content.ticks.beginAtZero = Boolean(v);
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
  tmpl: _tmpl$2
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
  tmpl: _tmpl$2
});

function tmpl$3($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    b: api_bind,
    h: api_element,
    d: api_dynamic,
    k: api_key,
    i: api_iterator,
    f: api_flatten,
    c: api_custom_element
  } = $api;
  const {
    _m0,
    _m1
  } = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-grid": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-col": true,
      "slds-size_1-of-1": true,
      "slds-p-bottom_medium": true
    },
    key: 3
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
    key: 0,
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
      key: api_key(1, item),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.displayFilteredCharts))
      }
    }, [api_dynamic(item)]);
  })]))])]), api_element("div", {
    classMap: {
      "container": true
    },
    styleMap: {
      "textAlign": "center"
    },
    key: 215
  }, [api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 35
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
    key: 11
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Blue\", \"Orange\", \"Yellow\", \"Green\", \"Light Blue\", \"Purple\"]"
    },
    key: 6
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Votes",
      "detail": "[12, 19, 7, 9, 5, 15]",
      "backgroundcolor": "[\n                \"rgba(82, 183, 216, 0.2)\",\n                \"rgba(225, 96, 50, 0.2)\",\n                \"rgba(255, 176, 59, 0.2)\",\n                \"rgba(84, 167, 123, 0.2)\",\n                \"rgba(79, 210, 210, 0.2)\",\n                \"rgba(226, 135, 178, 0.2)\"\n              ]",
      "bordercolor": "[\n                  \"rgba(82, 183, 216, 1)\",\n                  \"rgba(225, 96, 50, 1)\",\n                  \"rgba(255, 176, 59, 1)\",\n                  \"rgba(84, 167, 123, 1)\",\n                  \"rgba(79, 210, 210, 1)\",\n                  \"rgba(226, 135, 178, 1)\"\n              ]",
      "borderwidth": "1"
    },
    key: 5
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Bar Chart"
    },
    key: 7
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "right"
    },
    key: 8
  }, []), api_custom_element("c-animation", _cAnimation, {
    props: {
      "duration": "2000",
      "easing": "easeInBounce"
    },
    key: 9
  }, []), api_custom_element("c-cartesian-category-axis", _cCartesianCategoryAxis, {
    props: {
      "axis": "x",
      "position": "top"
    },
    key: 10
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 34
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\" stylecss=\"position: relative; margin: auto;\" events='[\"click\"]'>"), api_element("br", {
    key: 12
  }, []), api_text("\u2003<c-dataset labels='[\"Blue\", \"Orange\", \"Yellow\", \"Green\", \"Light Blue\", \"Purple\"]'>"), api_element("br", {
    key: 13
  }, []), api_text("\u2003\u2003<c-data label=\"# of Votes\" detail=\"[12, 19, 7, 9, 5, 15]\" backgroundcolor='["), api_element("br", {
    key: 14
  }, []), api_text("\u2003\u2003\u2003\"rgba(82, 183, 216, 0.2)\","), api_element("br", {
    key: 15
  }, []), api_text("\u2003\u2003\u2003\"rgba(225, 96, 50, 0.2)\","), api_element("br", {
    key: 16
  }, []), api_text("\u2003\u2003\u2003\"rgba(255, 176, 59, 0.2)\","), api_element("br", {
    key: 17
  }, []), api_text("\u2003\u2003\u2003\"rgba(84, 167, 123, 0.2)\","), api_element("br", {
    key: 18
  }, []), api_text("\u2003\u2003\u2003\"rgba(79, 210, 210, 0.2)\","), api_element("br", {
    key: 19
  }, []), api_text("\u2003\u2003\u2003\"rgba(226, 135, 178, 0.2)\""), api_element("br", {
    key: 20
  }, []), api_text("\u2003\u2003\u2003]' bordercolor='["), api_element("br", {
    key: 21
  }, []), api_text("\u2003\u2003\u2003\u2003\"rgba(82, 183, 216, 1)\","), api_element("br", {
    key: 22
  }, []), api_text("\u2003\u2003\u2003\u2003\"rgba(225, 96, 50, 1)\","), api_element("br", {
    key: 23
  }, []), api_text("\u2003\u2003\u2003\u2003\"rgba(255, 176, 59, 1)\","), api_element("br", {
    key: 24
  }, []), api_text("\u2003\u2003\u2003\u2003\"rgba(84, 167, 123, 1)\","), api_element("br", {
    key: 25
  }, []), api_text("\u2003\u2003\u2003\u2003\"rgba(79, 210, 210, 1)\","), api_element("br", {
    key: 26
  }, []), api_text("\u2003\u2003\u2003\u2003\"rgba(226, 135, 178, 1)\""), api_element("br", {
    key: 27
  }, []), api_text("\u2003\u2003\u2003]' borderwidth=\"1\"></c-data>"), api_element("br", {
    key: 28
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 29
  }, []), api_text("\u2003<c-title text=\"Bar Chart\"></c-title>"), api_element("br", {
    key: 30
  }, []), api_text("\u2003<c-legend position=\"right\"></c-legend>"), api_element("br", {
    key: 31
  }, []), api_text("\u2003<c-animation duration=\"2000\" easing=\"easeInBounce\"> </c-animation>"), api_element("br", {
    key: 32
  }, []), api_text("\u2003<c-cartesian-category-axis axis=\"x\" position=\"top\"></c-cartesian-category-axis>"), api_element("br", {
    key: 33
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 47
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "line",
      "responsive": "true"
    },
    key: 39
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 37
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[10, 30, 46, 2, 8, 50, 0]",
      "bordercolor": "rgba(119, 185, 242, 1)",
      "backgroundcolor": "rgba(119, 185, 242, 0.2)"
    },
    key: 36
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Line Chart"
    },
    key: 38
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 46
  }, [api_text("<c-chart type=\"line\" responsive=\"true\">"), api_element("br", {
    key: 40
  }, []), api_text("\u2003<c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 41
  }, []), api_text("\u2003\u2003<c-data label=\"My First dataset\" detail=\"[10, 30, 46, 2, 8, 50, 0]\" bordercolor=\"rgba(119, 185, 242, 1)\""), api_element("br", {
    key: 42
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(119, 185, 242, 0.2)\"></c-data>"), api_element("br", {
    key: 43
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 44
  }, []), api_text("\u2003<c-title text=\"Line Chart\"></c-title>"), api_element("br", {
    key: 45
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 72
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "line",
      "responsive": "true"
    },
    key: 56
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 50
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "backgroundcolor": "rgba(82, 183, 216, 1)",
      "bordercolor": "rgba(82, 183, 216, 0.2)",
      "detail": "[10, 30, 46, 2, 8, 50, 0]",
      "fill": "false"
    },
    key: 48
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "My Second dataset",
      "detail": "[7, 49, 46, 13, 25, 30, 22]",
      "backgroundcolor": "rgba(84, 167, 123, 1)",
      "bordercolor": "rgba(84, 167, 123, 0.2)",
      "fill": "false"
    },
    key: 49
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Line Chart"
    },
    key: 51
  }, []), api_custom_element("c-tooltip", _cTooltip, {
    props: {
      "position": "nearest",
      "mode": "index",
      "enabled": "true"
    },
    key: 52
  }, []), api_custom_element("c-line-configuration", _cLineConfiguration, {
    props: {
      "tension": "0.4"
    },
    key: 53
  }, []), api_custom_element("c-cartesian-axis", _cCartesianAxis, {
    props: {
      "axis": "x",
      "position": "top",
      "type": "category"
    },
    key: 54
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
    key: 55
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 71
  }, [api_text("<c-chart type=\"line\" responsive=\"true\">"), api_element("br", {
    key: 57
  }, []), api_text("\u2003<c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 58
  }, []), api_text("\u2003\u2003<c-data label=\"My First dataset\" backgroundcolor=\"rgba(82, 183, 216, 1)\" bordercolor=\"rgba(82, 183, 216, 0.2)\""), api_element("br", {
    key: 59
  }, []), api_text("\u2003\u2003detail=\"[10, 30, 46, 2, 8, 50, 0]\" fill=\"false\"></c-data>"), api_element("br", {
    key: 60
  }, []), api_text("\u2003\u2003<c-data label=\"My Second dataset\" detail=\"[7, 49, 46, 13, 25, 30, 22]\" backgroundcolor=\"rgba(84, 167, 123, 1)\""), api_element("br", {
    key: 61
  }, []), api_text("\u2003\u2003bordercolor=\"rgba(84, 167, 123, 0.2)\" fill=\"false\"></c-data>"), api_element("br", {
    key: 62
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 63
  }, []), api_text("\u2003<c-title text=\"Line Chart\"></c-title>"), api_element("br", {
    key: 64
  }, []), api_text("\u2003<c-tooltip position=\"nearest\" mode=\"index\" enabled=\"true\"></c-tooltip>"), api_element("br", {
    key: 65
  }, []), api_text("\u2003<c-line-configuration tension=\"0.4\"></c-line-configuration>"), api_element("br", {
    key: 66
  }, []), api_text("\u2003<c-cartesian-axis axis=\"x\" position=\"top\" type=\"category\"></c-cartesian-axis>"), api_element("br", {
    key: 67
  }, []), api_text("\u2003<c-cartesian-linear-axis axis=\"y\" position=\"right\" ticks-min=\"-10\" title-display=\"true\""), api_element("br", {
    key: 68
  }, []), api_text("\u2003\u2003title-labelstring=\"yAxis items\" grid-zerolinecolor=\"rgba(225, 96, 50, 1\" grid-zerolinewidth=\"3\">"), api_element("br", {
    key: 69
  }, []), api_text("\u2003</c-cartesian-linear-axis>"), api_element("br", {
    key: 70
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 90
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "pie",
      "responsive": "true"
    },
    key: 77
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]"
    },
    key: 74
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Tomatoes",
      "detail": "[12, 19, 3, 5]",
      "backgroundcolor": "[\n              \"rgba(206, 103, 22, 1)\",\n              \"rgba(245, 150, 35, 1)\",\n              \"rgba(245, 192, 98, 1)\",\n              \"rgba(245, 222, 152, 1)\"\n          ]"
    },
    key: 73
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Pie Chart"
    },
    key: 75
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "right"
    },
    key: 76
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 89
  }, [api_text("<c-chart type=\"pie\" responsive=\"true\">"), api_element("br", {
    key: 78
  }, []), api_text("\u2003<c-dataset labels='[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]'>"), api_element("br", {
    key: 79
  }, []), api_text("\u2003\u2003<c-data label=\"# of Tomatoes\" detail=\"[12, 19, 3, 5]\" backgroundcolor='["), api_element("br", {
    key: 80
  }, []), api_text("\u2003\u2003\u2003\"rgba(206, 103, 22, 1)\","), api_element("br", {
    key: 81
  }, []), api_text("\u2003\u2003\u2003\"rgba(245, 150, 35, 1)\","), api_element("br", {
    key: 82
  }, []), api_text("\u2003\u2003\u2003\"rgba(245, 192, 98, 1)\","), api_element("br", {
    key: 83
  }, []), api_text("\u2003\u2003\u2003\"rgba(245, 222, 152, 1)\""), api_element("br", {
    key: 84
  }, []), api_text("\u2003\u2003]'></c-data>"), api_element("br", {
    key: 85
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 86
  }, []), api_text("\u2003<c-title text=\"Pie Chart\"></c-title>"), api_element("br", {
    key: 87
  }, []), api_text("\u2003<c-legend position=\"right\"></c-legend>"), api_element("br", {
    key: 88
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 110
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "doughnut",
      "responsive": "true"
    },
    key: 96
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]"
    },
    key: 92
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of Tomatoes",
      "detail": "[12, 19, 3, 5]",
      "backgroundcolor": "[\n              \"rgba(14, 110, 206, 1)\",\n              \"rgba(45, 156, 237, 1)\",\n              \"rgba(104, 206, 238, 1)\",\n              \"rgba(150, 242, 238, 1)\"\n          ]"
    },
    key: 91
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Doughnut Chart"
    },
    key: 93
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "left"
    },
    key: 94
  }, []), api_custom_element("c-arc-configuration", _cArcConfiguration, {
    props: {
      "bordercolor": "rgba(7, 62, 146, 0.7)"
    },
    key: 95
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 109
  }, [api_text("<c-chart type=\"doughnut\" responsive=\"true\">"), api_element("br", {
    key: 97
  }, []), api_text("\u2003<c-dataset labels='[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]'>"), api_element("br", {
    key: 98
  }, []), api_text("\u2003\u2003<c-data label=\"# of Tomatoes\" detail=\"[12, 19, 3, 5]\" backgroundcolor='["), api_element("br", {
    key: 99
  }, []), api_text("\u2003\u2003\u2003\"rgba(14, 110, 206, 1)\","), api_element("br", {
    key: 100
  }, []), api_text("\u2003\u2003\u2003\"rgba(45, 156, 237, 1)\","), api_element("br", {
    key: 101
  }, []), api_text("\u2003\u2003\u2003\"rgba(104, 206, 238, 1)\","), api_element("br", {
    key: 102
  }, []), api_text("\u2003\u2003\u2003\"rgba(150, 242, 238, 1)\""), api_element("br", {
    key: 103
  }, []), api_text("\u2003\u2003]'></c-data>"), api_element("br", {
    key: 104
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 105
  }, []), api_text("\u2003<c-title text=\"Doughnut Chart\"></c-title>"), api_element("br", {
    key: 106
  }, []), api_text("\u2003<c-legend position=\"left\"></c-legend>"), api_element("br", {
    key: 107
  }, []), api_text("\u2003<c-arc-configuration bordercolor=\"rgba(7, 62, 146, 0.7)\"></c-arc-configuration>"), api_element("br", {
    key: 108
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 131
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bubble",
      "responsive": "true"
    },
    key: 117
  }, [api_custom_element("c-dataset", _cDataset, {
    key: 114
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "John",
      "detail": "[\\{\"x\": 3,\"y\": 7,\"r\": 10\\}, \\{\"x\": 5,\"y\": 4,\"r\": 5\\}, \\{\"x\": 3,\"y\": 4,\"r\": 5\\}]",
      "backgroundcolor": "rgba(82, 183, 216, 1)"
    },
    key: 111
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "Paul",
      "detail": "[\\{\"x\": 2,\"y\": 2,\"r\": 2\\}, \\{\"x\": 6,\"y\": 5,\"r\": 10\\}, \\{\"x\": 4,\"y\": 2,\"r\": 5\\}]",
      "backgroundcolor": "rgba(225, 96, 50, 1)"
    },
    key: 112
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "Ringo",
      "detail": "[\\{\"x\": 1,\"y\": 3,\"r\": 10\\}, \\{\"x\": 3,\"y\": 3,\"r\": 10\\}, \\{\"x\": 6,\"y\": 4,\"r\": 10\\}]",
      "backgroundcolor": "rgba(255, 176, 59, 1)"
    },
    key: 113
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Bubble Chart"
    },
    key: 115
  }, []), api_custom_element("c-legend", _cLegend, {
    props: {
      "position": "bottom"
    },
    key: 116
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 130
  }, [api_text("<c-chart type=\"bubble\" responsive=\"true\">"), api_element("br", {
    key: 118
  }, []), api_text("\u2003<c-dataset>"), api_element("br", {
    key: 119
  }, []), api_text("\u2003\u2003<c-data label=\"John\" detail='[\\{\"x\": 3,\"y\": 7,\"r\": 10\\}, \\{\"x\": 5,\"y\": 4,\"r\": 5\\}, \\{\"x\": 3,\"y\": 4,\"r\": 5\\}]'"), api_element("br", {
    key: 120
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(82, 183, 216, 1)\"></c-data>"), api_element("br", {
    key: 121
  }, []), api_text("\u2003\u2003<c-data label=\"Paul\" detail='[\\{\"x\": 2,\"y\": 2,\"r\": 2\\}, \\{\"x\": 6,\"y\": 5,\"r\": 10\\}, \\{\"x\": 4,\"y\": 2,\"r\": 5\\}]'"), api_element("br", {
    key: 122
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(225, 96, 50, 1)\"></c-data>"), api_element("br", {
    key: 123
  }, []), api_text("\u2003\u2003<c-data label=\"Ringo\""), api_element("br", {
    key: 124
  }, []), api_text("\u2003\u2003detail='[\\{\"x\": 1,\"y\": 3,\"r\": 10\\}, \\{\"x\": 3,\"y\": 3,\"r\": 10\\}, \\{\"x\": 6,\"y\": 4,\"r\": 10\\}]'"), api_element("br", {
    key: 125
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(255, 176, 59, 1)\"></c-data>"), api_element("br", {
    key: 126
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 127
  }, []), api_text("\u2003<c-title text=\"Bubble Chart\"></c-title>"), api_element("br", {
    key: 128
  }, []), api_text("\u2003<c-legend position=\"bottom\"></c-legend>"), api_element("br", {
    key: 129
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 146
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "scatter",
      "responsive": "true"
    },
    key: 136
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 133
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[\\{\"x\":10,\"y\":5\\}, \\{\"x\":30,\"y\":10\\}, \\{\"x\":46,\"y\":12\\}, \\{\"x\":2,\"y\":20\\}, \\{\"x\":8,\"y\":15\\}, \\{\"x\":50,\"y\":10\\}, \\{\"x\":0,\"y\":25\\}]",
      "backgroundcolor": "rgba(255, 176, 59, 1)",
      "bordercolor": "rgba(255, 176, 59, 1)",
      "fill": "false"
    },
    key: 132
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Scatter Chart"
    },
    key: 134
  }, []), api_custom_element("c-tooltip", _cTooltip, {
    props: {
      "position": "nearest",
      "mode": "index",
      "enabled": "true"
    },
    key: 135
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 145
  }, [api_text("<c-chart slot=\"chartExample\" type=\"scatter\" responsive=\"true\">"), api_element("br", {
    key: 137
  }, []), api_text("\u2003<c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 138
  }, []), api_text("\u2003\u2003<c-data label=\"My First dataset\""), api_element("br", {
    key: 139
  }, []), api_text("\u2003\u2003detail='[\\{\"x\":10,\"y\":5\\}, \\{\"x\":30,\"y\":10\\}, \\{\"x\":46,\"y\":12\\}, \\{\"x\":2,\"y\":20\\}, \\{\"x\":8,\"y\":15\\}, \\{\"x\":50,\"y\":10\\}, \\{\"x\":0,\"y\":25\\}]'"), api_element("br", {
    key: 140
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(255, 176, 59, 1)\" bordercolor=\"rgba(255, 176, 59, 1)\" fill=\"false\"></c-data>"), api_element("br", {
    key: 141
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 142
  }, []), api_text("\u2003<c-title text=\"Scatter Chart\"></c-title>"), api_element("br", {
    key: 143
  }, []), api_text("\u2003<c-tooltip position=\"nearest\" mode=\"index\" enabled=\"true\"></c-tooltip>"), api_element("br", {
    key: 144
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 163
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bar",
      "responsive": "true"
    },
    key: 152
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]"
    },
    key: 149
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[10, 30, 46, 2, 8, 50, 0]",
      "backgroundcolor": "rgba(82, 183, 216, 1)",
      "bordercolor": "rgba(82, 183, 216, 1)",
      "fill": "false",
      "order": "2"
    },
    key: 147
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
    key: 148
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Mix Chart"
    },
    key: 150
  }, []), api_custom_element("c-tooltip", _cTooltip, {
    props: {
      "position": "nearest",
      "mode": "index",
      "enabled": "true"
    },
    key: 151
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 162
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\">"), api_element("br", {
    key: 153
  }, []), api_text("\u2003<c-dataset labels='[\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"]'>"), api_element("br", {
    key: 154
  }, []), api_text("\u2003\u2003<c-data label=\"My First dataset\" detail=\"[10, 30, 46, 2, 8, 50, 0]\" backgroundcolor=\"rgba(82, 183, 216, 1)\""), api_element("br", {
    key: 155
  }, []), api_text("\u2003\u2003bordercolor=\"rgba(82, 183, 216, 1)\" fill=\"false\" order=\"2\"></c-data>"), api_element("br", {
    key: 156
  }, []), api_text("\u2003\u2003<c-data label=\"My Second dataset\" detail=\"[7, 49, 46, 13, 25, 30, 22]\" backgroundcolor=\"rgba(255, 176, 59, 1)\""), api_element("br", {
    key: 157
  }, []), api_text("\u2003\u2003bordercolor=\"rgba(255, 176, 59, 1)\" fill=\"false\" order=\"1\" type=\"line\"></c-data>"), api_element("br", {
    key: 158
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 159
  }, []), api_text("\u2003<c-title text=\"Mix Chart\"></c-title>"), api_element("br", {
    key: 160
  }, []), api_text("\u2003<c-tooltip position=\"nearest\" mode=\"index\" enabled=\"true\"></c-tooltip>"), api_element("br", {
    key: 161
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 179
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "radar"
    },
    key: 168
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Eating\", \"Drinking\", \"Sleeping\", \"Designing\", \"Coding\", \"Cycling\", \"Running\"]"
    },
    key: 166
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[65, 59, 90, 81, 56, 55, 40]",
      "backgroundcolor": "rgba(82, 183, 216, 0.2)",
      "bordercolor": "rgba(82, 183, 216, 1)",
      "pointhoverbackgroundcolor": "#000",
      "pointhoverbordercolor": "#000"
    },
    key: 164
  }, []), api_custom_element("c-data", _cData, {
    props: {
      "label": "My Second dataset",
      "detail": "[28, 48, 40, 19, 96, 27, 100]",
      "backgroundcolor": "rgba(255, 176, 59, 0.2)",
      "bordercolor": "rgba(255, 176, 59, 1)"
    },
    key: 165
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Radar Chart"
    },
    key: 167
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 178
  }, [api_text("<c-chart type=\"radar\">"), api_element("br", {
    key: 169
  }, []), api_text("\u2003<c-dataset labels='[\"Eating\", \"Drinking\", \"Sleeping\", \"Designing\", \"Coding\", \"Cycling\", \"Running\"]'>"), api_element("br", {
    key: 170
  }, []), api_text("\u2003\u2003<c-data label=\"My First dataset\" detail=\"[65, 59, 90, 81, 56, 55, 40]\""), api_element("br", {
    key: 171
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(82, 183, 216, 0.2)\" bordercolor=\"rgba(82, 183, 216, 1)\""), api_element("br", {
    key: 172
  }, []), api_text("\u2003\u2003pointhoverbackgroundcolor=\"#000\" pointhoverbordercolor=\"#000\"></c-data>"), api_element("br", {
    key: 173
  }, []), api_text("\u2003\u2003<c-data label=\"My Second dataset\" detail=\"[28, 48, 40, 19, 96, 27, 100]\""), api_element("br", {
    key: 174
  }, []), api_text("\u2003\u2003backgroundcolor=\"rgba(255, 176, 59, 0.2)\" bordercolor=\"rgba(255, 176, 59, 1)\"></c-data>"), api_element("br", {
    key: 175
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 176
  }, []), api_text("\u2003<c-title text=\"Radar Chart\"></c-title>"), api_element("br", {
    key: 177
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 193
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "polarArea"
    },
    key: 183
  }, [api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"Eating\", \"Drinking\", \"Sleeping\"]"
    },
    key: 181
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "My First dataset",
      "detail": "[41, 38, 35]",
      "backgroundcolor": "[\"rgba(119, 185, 242, .75)\", \"rgba(195, 152, 245, .75)\",\"rgba(78, 212, 205, .75)\"]",
      "bordercolor": "[\"rgba(119, 185, 242, 1)\", \"rgba(195, 152, 245, 1)\",\"rgba(78, 212, 205, 1)\"]"
    },
    key: 180
  }, [])]), api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Polar Area Chart"
    },
    key: 182
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 192
  }, [api_text("<c-chart type=\"polarArea\">"), api_element("br", {
    key: 184
  }, []), api_text("\u2003<c-dataset labels='[\"Eating\", \"Drinking\", \"Sleeping\"]'>"), api_element("br", {
    key: 185
  }, []), api_text("\u2003\u2003<c-data label=\"My First dataset\" detail=\"[41, 38, 35]\""), api_element("br", {
    key: 186
  }, []), api_text("\u2003\u2003backgroundcolor='[\"rgba(119, 185, 242, .75)\", \"rgba(195, 152, 245, .75)\",\"rgba(78, 212, 205, .75)\"]'"), api_element("br", {
    key: 187
  }, []), api_text("\u2003\u2003bordercolor='[\"rgba(119, 185, 242, 1)\", \"rgba(195, 152, 245, 1)\",\"rgba(78, 212, 205, 1)\"]'>"), api_element("br", {
    key: 188
  }, []), api_text("\u2003\u2003</c-data>"), api_element("br", {
    key: 189
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 190
  }, []), api_text("\u2003<c-title text=\"Polar Area Chart\"></c-title>"), api_element("br", {
    key: 191
  }, []), api_text("</c-chart>")])]), api_custom_element("c-sample-app-item", _cSampleAppItem, {
    key: 214
  }, [api_custom_element("c-chart", _cChart, {
    attrs: {
      "slot": "chartExample"
    },
    props: {
      "type": "bar",
      "responsive": "true"
    },
    key: 199
  }, [api_custom_element("c-title", _cTitle, {
    props: {
      "text": "Category"
    },
    key: 194
  }, []), api_custom_element("c-dataset", _cDataset, {
    props: {
      "labels": "[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]"
    },
    key: 196
  }, [api_custom_element("c-data", _cData, {
    props: {
      "label": "# of tomatoes",
      "detail": "[12, 19, 3, 5]",
      "backgroundcolor": "[\n            \"rgba(82, 183, 216, 1)\",\n            \"rgba(225, 96, 50, 1)\",\n            \"rgba(255, 176, 59, 1)\",\n            \"rgba(84, 167, 123, 1)\"\n          ]"
    },
    key: 195
  }, [])]), api_custom_element("c-cartesian-category-axis", _cCartesianCategoryAxis, {
    props: {
      "axis": "x",
      "position": "top",
      "titleDisplay": "true",
      "titleLabelstring": "Category axis"
    },
    key: 197
  }, []), api_custom_element("c-cartesian-linear-axis", _cCartesianLinearAxis, {
    props: {
      "axis": "y",
      "ticksStepsize": "15",
      "position": "right",
      "titleDisplay": "true",
      "titleLabelstring": "Linear axis"
    },
    key: 198
  }, [])]), api_element("code", {
    attrs: {
      "slot": "chartCode",
      "lang": "html"
    },
    key: 213
  }, [api_text("<c-chart type=\"bar\" responsive=\"true\">"), api_element("br", {
    key: 200
  }, []), api_text("\u2003<c-title text=\"Category\"></c-title>"), api_element("br", {
    key: 201
  }, []), api_text("\u2003<c-dataset labels='[\"OK\", \"WARNING\", \"CRITICAL\", \"UNKNOWN\"]'>"), api_element("br", {
    key: 202
  }, []), api_text("\u2003\u2003<c-data label=\"# of tomatoes\" detail=\"[12, 19, 3, 5]\" backgroundcolor='["), api_element("br", {
    key: 203
  }, []), api_text("\u2003\u2003\"rgba(82, 183, 216, 1)\","), api_element("br", {
    key: 204
  }, []), api_text("\u2003\u2003\"rgba(225, 96, 50, 1)\","), api_element("br", {
    key: 205
  }, []), api_text("\u2003\u2003\"rgba(255, 176, 59, 1)\","), api_element("br", {
    key: 206
  }, []), api_text("\u2003\u2003\"rgba(84, 167, 123, 1)\""), api_element("br", {
    key: 207
  }, []), api_text("\u2003\u2003]'></c-data>"), api_element("br", {
    key: 208
  }, []), api_text("\u2003</c-dataset>"), api_element("br", {
    key: 209
  }, []), api_text("\u2003<c-cartesian-category-axis axis=\"x\" position=\"top\" title-display=\"true\" title-labelstring=\"Category axis\">"), api_element("br", {
    key: 210
  }, []), api_text("\u2003</c-cartesian-category-axis>"), api_element("br", {
    key: 211
  }, []), api_text("\u2003<c-cartesian-linear-axis axis=\"y\" ticks-stepsize=\"15\" position=\"right\" title-display=\"true\" title-labelstring=\"Linear axis\"></c-cartesian-linear-axis>"), api_element("br", {
    key: 212
  }, []), api_text("</c-chart>")])])])];
}

var _tmpl$4 = registerTemplate(tmpl$3);
tmpl$3.stylesheets = [];

if (_implicitStylesheets) {
  tmpl$3.stylesheets.push.apply(tmpl$3.stylesheets, _implicitStylesheets);
}
tmpl$3.stylesheetTokens = {
  hostAttribute: "c-sampleApp_sampleApp-host",
  shadowAttribute: "c-sampleApp_sampleApp"
};

class SampleApp extends BaseLightningElement {
  constructor(...args) {
    super(...args);
    this.filterTypes = void 0;
  }

  renderedCallback() {
    if (!this.filterTypes) {
      this.initializeChartTypesFilter();
    }
  }

  initializeChartTypesFilter() {
    const items = [];
    this.template.querySelectorAll('c-chart').forEach(chart => {
      if (!items.includes(chart.type)) {
        items.push(chart.type);
      }
    });
    this.filterTypes = items;
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
  tmpl: _tmpl$4
});

const sampleApp = createElement$1('lwcc-samples', {
  is: SampleApp$1
});
const container = document.body.querySelector('.container') || document.body;
container.appendChild(sampleApp);
