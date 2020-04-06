export default class MicroTaskHandler {
    constructor() {
        this._ready = false;
    }

    //isReady(){return this._ready}
    registerCallback(cb) {
        this.callback = cb;
    }

    waitNextTask() {
        if (!this._ready) {
            this._ready = true;
            Promise.resolve().then(() => {
                if (this._ready) {
                    this._ready = false;
                    if (typeof this.callback === 'function') {
                        this.callback();
                    }
                }
            });
        }
    }
}
