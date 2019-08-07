class Dep {
    constructor() {
        console.log(this)
        this.listenFunc = [];
    }
    addFunc(obj) {
        this.listenFunc.push(obj);
    }
    changeWatch() {
        this.listenFunc.forEach(val => {
            val.sendVal();
        })
    }
}

Dep.target = null;
const dep = new Dep();

class Watcher {
    constructor(data, key, cbk) {
        // 每一次实例watcher 把当前实例赋值给Dep的target静态属性
        Dep.target = this;
        this.data = data;
        this.key = key;
        this.cbk = cbk;
        // 每次实例会调用该函数
        this.init();
    }
    // 获取对应key的值
    init() {
        // 获取对应key的值
        this.value = utils.getValue(this.data, this.key);
        Dep.target = null;
        return this.value;
    }
    sendVal() {
        let newVal = this.init()
        this.cbk(newVal)
    }
}

class Observer {
    constructor(data) {
        if (!data || typeof data !== 'object') {
            return;
        }
        this.data = data;
        this.init()
    }
    init() {
        Object.keys(this.data).forEach(val => {
            this.observer(this.data, val, this.data[val])
        })
    }
    observer(obj, key, value) {
        // 通过递归实现每个属性的数据劫持
        new Observer(obj[key])
        Object.defineProperty(obj, key, {
            // 添加劫持之后的属性获取方法
            get() {
                if (Dep.target) {
                    // 给dep实例属性listenFunc添加一个watcher实例
                    dep.addFunc(Dep.target)
                }
                return value
            },
            // 添加劫持之后的属性设置方法
            set(newValue) {
                if (value === newValue) {
                    return;
                }
                value = newValue;
                // 触发每一个listenFunc里面的watcher实例
                dep.changeWatch();
                // 为了兼容新值为一个对象的时候，该对象的属性也得添加劫持
                new Observer(value);
            }
        })
    }
}

const utils = {
    setValue(node, data, key) {
        node.value = this.getValue(data, key) 
    },
    getValue(data, key) {
        if(key.indexOf('.') > -1) {
            let arr = key.split('.');
            for(let i = 0; i < arr.length; i++) {
                data = data[arr[i]]
            }
            return data
        }else {
            return data[key]
        }
    },
    getContent(node, key, data) {
        node.textContent = this.getValue(data, key)
    },
    changeKeyVal(data, key, newVal) {
        if(key.indexOf('.') > -1) {
            let arr = key.split('.');
            for(let i = 0; i < arr.length - 1; i++) {
                data = data[arr[i]]
            }
            data[arr[arr.length - 1]] = newVal
        }else {
            data[key] = newVal
        }
    }
}

class Mvvm {
    constructor({
        el,
        data
    }) {
        this.el = el;
        this.data = data;
        // 初始化执行数据绑定实例对象的过程（以及数据劫持）
        this.init();
        // 替换文本中的属性为真实属性
        this.initDom();
    }
    init() {
        Object.keys(this.data).forEach(val => {
            this.observer(this, val, this.data[val])
        })
        // 给当前数组集合的每个属性添加集合
        new Observer(this.data)
    }
    observer(obj, key, value) {
        Object.defineProperty(obj, key, {
            get() {
                return value
            },
            set(newValue) {
                value = newValue
            }
        })
    }
    initDom() {
        this.$el = document.getElementById(this.el);
        // 文本碎片 避免多次操作dom导致浏览器多次重绘 （操作完成之后把整个碎片添加进去 浏览器一并识别渲染）
        let newFargment = this.createFragment();
        // 根据nodeType来替换对应的属性值
        this.compiler(newFargment);
        this.$el.appendChild(newFargment);
    }
    createFragment() {
        let newFargment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = this.$el.firstChild) {
            newFargment.appendChild(firstChild);
        }
        return newFargment;
    }
    compiler(node) {
        if (node.nodeType === 1) {
            let attributes = node.attributes;
            Array.from(attributes).forEach(val => {
                if(val.nodeName === 'v-model') {
                    // 捕捉input输入框的修改事件
                    node.addEventListener('input',(e) => {
                        utils.changeKeyVal(this.data, val.nodeValue, e.target.value)
                    })
                    utils.setValue(node, this.data, val.nodeValue)
                }
            })
        }else if(node.nodeType === 3) {
            let contentVal = node.textContent.indexOf('{{') > -1 && node.textContent.split('}}')[1].split('}}')[0];
            contentVal && utils.getContent(node, contentVal, this.data);
            // 添加属性监听
            contentVal && new Watcher(this.data, contentVal, (newVal) => {
                console.log(this.data)
                node.textContent = newVal
            })
        }
        // 通过递归的形式保证每一级的文本都能获取到并替换
        if(node.childNodes && node.childNodes.length > 0) {
            node.childNodes.forEach(val => {
                this.compiler(val)
            })
        }
    }
}