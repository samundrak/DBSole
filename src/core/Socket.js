export default class Socket {

    constructor(io, hostname) {
        this.io = io;
        this.hostname = hostname;
        this.socketInstance = null;
    }

    connect() {
        this.socketInstance = this.io.connect(this.hostname);
        return this;
    }

    on(eventName, onResponseCallback) {
        this.socketInstance.on(eventName, onResponseCallback);
    }

    emit(eventName, emittedData) {
        this.socketInstance.emit(eventName, emittedData);
    }

}