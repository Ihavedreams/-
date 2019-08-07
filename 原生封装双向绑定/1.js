function Watch() {

}

// 注册一个监听者
/**
 * @param {String} type 订阅的事件类型
 * @param {Function} listener 事件的监听器
 * @return {void}
 */
Watch.prototype.on = function(type, listener) {
    // this.listeners[type] = listener;
    if(!Array.isArray(this.listeners[type])) {
        this.listeners[type].push(listener);
    }
}
// 触发指定类型的事件
Watch.prototype.emit = function(type,...reset) {
    this.listeners[type].forEach(item => {
        item(...reset);
    });
    // this.listeners[type](...reset);
};

var w = new Watch();
w.on('success', (num) => {
    console.log(num)
    console.log('success')
})

w.on('success', (num) => {
    console.log(num + 2)
})

w.emit('success', 90)


// on 订阅

// emit 发布