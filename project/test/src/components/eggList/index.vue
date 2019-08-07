<template>
    <div>
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-name">
                <span>{{item.name}}</span>
                <button @click="add(item)">添加</button>
                <button @click="seleModeFn('del')">删除</button>
                <button @click="seleModeFn('revise')">修改</button>
            </div>
            <div v-if="item.children" class="children-item">
                <list :list="item.children"></list>
            </div>
        </div>
        <!-- 弹框组件 -->
        <Dialog v-if="alertData" :alertData="alertData" @alertBack="alertBackFn" @alertSure="alertSureFn"></Dialog>
        <div></div>
    </div>
</template>
<script>
/* 弹框组件 */
import Dialog from '../../components/dialog'
export default {
    name: 'List',
    props: {
        list: Array
    },
    components: {
        Dialog
    },
    data() {
        return {
            alertData: ""
        }
    },
    methods: {
        selModelFn: function(v) {
            console.log(v)
            // 弹框样式
            var alertData = {
                title: '启动弹框模式',
                titleColor: 'pink',
                content: '设备已经是启动模式，为了保障安全，请在设备机上点击启动按钮。',
                contentColor: "gray",
                btn: ["返回", "确定"],
                btnColor: ["", ""]
            };
            this.alertData = alertData;
        },
        alertBackFn: function(data) {
            this.alertData = '';
            console.log('点击了取消', data)
        },
        alertSureFn: function(data) {
            this.alertData = '';
            console.log('点击了确定', data)

        },
        add(item) {
            this.$bus.emit(eventName, item.id )
        }
    },
    created() {
        // console.log(list)
    },
}
</script>
<style lang="">
    .children-item {
        margin-left: 100px;
    }
</style>