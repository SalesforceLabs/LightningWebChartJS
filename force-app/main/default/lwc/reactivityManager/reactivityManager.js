export default class ReactivityManager {
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
    const self = this;
    const reactivityProxy = {
      set: function(obj, prop, value) {
        obj[prop] = value;
        self.throttleRegisteredJob();
        return true;
      }
    };
    return new Proxy({}, reactivityProxy);
  }
}
