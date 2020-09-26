export default class ReactivityManager {
  constructor() {
    this._ready = false; // start as not ready
  }

  registerJob(cb) {
    this.job = cb; // store one callback per reactivity manager
    // Could be a good idea to store an array
    // and to give the ability to Promise.all or to Promise.reduce
  }

  // This method ensure to call once a job in the next micro task
  // Used when it is possible and undeterminable to call multiple time
  // a function which could be executed once at the end for every attempt
  // without knowing in advance how much time it is going to be called
  throttleRegisteredJob() {
    if (!this._ready) {
      // first call
      this._ready = true; // then stop the possibility to ask for a callback
      // wait for next micro task
      Promise.resolve().then(() => {
        if (this._ready) {
          // check if ready (synchronism check)
          this._ready = false; // come back to initial state
          // Call the method to throttle
          if (typeof this.job === 'function') {
            this.job();
          }
        }
      });
    }
  }

  // Create a proxy object which call the registered job
  // when a property of the object is changed
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
