import Vue from 'vue';
// let messageBox = Vue.extend(require('./components/HelloWorld.vue'));
// let instance;
// var message = function(){
//     instance = new messageBox()
//     instance.vm= instance.$mount();
//     document.body.appendChild(instance.vm.$el)
// }
// export default message;
let messageBox= Vue.extend({
    template:`<div class="box">
    <p>您要继续操作吗？</p>
    <button @click="nos">取消</button><button @click="yes">确定</button>
    </div>`,
    methods: {
        nos(){
            console.log(1)
        },
        yes(){
            console.log(2)
        }
    }
})
let showCom;
var message = function(){
     showCom = new messageBox();
     showCom.vm=showCom.$mount();
     document.body.appendChild(showCom.vm.$el);
}
export default message;

