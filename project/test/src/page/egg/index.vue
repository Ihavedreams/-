<template>
    <div>
        <EggList :list="list" /> 
    </div>
</template>
<script>
 import EggList from '../../components/eggList'
export default {
    name: 'egg',
    components: { EggList },
    data() {
        return {
            list: [
                {
                    name: '经济',
                    children: [
                        {
                            name: '如家',
                            children: [
                                {
                                    name: '学清路-如家'
                                },
                                {
                                    name: '望京西-如家'
                                }
                            ]
                        },
                        {
                            name: '速8',
                            children: [
                                {
                                    name: '小青西路-速8'
                                },
                                {
                                    name: '华山府-速8'
                                }
                            ]
                        },
                        {
                            name: '7天',
                            children: [
                                {
                                    name: '青海路-7天'
                                },
                                {
                                    name: '上地7街-7天'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '豪华',
                    children: [
                        {
                            name: '和平饭店',
                            children: [
                                {
                                    name: '和平街-和平饭店'
                                },
                                {
                                    name: '六里桥-和平饭店'
                                }
                            ]
                        },
                        {
                            name: '有爱',
                            children: [
                                {
                                    name: '小青西路-有爱'
                                },
                                {
                                    name: '星缘大街-有爱'
                                }
                            ]
                        },
                        {
                            name: '波斯湾',
                            children: [
                                {
                                    name: '纽约外滩-波斯湾'
                                },
                                {
                                    name: '华尔街-波斯湾'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>