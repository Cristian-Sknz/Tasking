class APPTimer {

    static _subscribers = new Map();

    static subscribe(instance, func) {
        this._subscribers.set(instance, func);
    }

    static unsubscribe(instance) {
        this._subscribers.delete(instance);
    }

    static notify() {
        APPTimer._subscribers.forEach((callback) => callback());
    }
}

setInterval(APPTimer.notify, 1000);
export default APPTimer;