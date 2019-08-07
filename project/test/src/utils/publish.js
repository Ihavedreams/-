class Bus {
    constructor() {
        this.events = {};
    }
    $emit(eventName, params) {
        this.events[eventName].array.forEach(item => {
            item(params)
        });
    }
    $on(eventName, cbk) {
        if(this.events[eventName]) {
            this.events.push(cbk)
        }else {
            this.events[eventName] = [cbk]
        }
    }
}

export default Bus