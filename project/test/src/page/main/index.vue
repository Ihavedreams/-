<template>
    <div id='wrap'>
        <div class='box' @mousedown='mouseDown' :style='{left: left, top: top}'>
            <div>{{left}}</div>
            <div>{{top}}</div>
        </div>
    </div>
</template>

<script>

import Darg from '@/components/drag/index.vue'

export default {
  components: {
    Darg
  },
  data () {
    return {
      left: 0,
      top: 0
    }
  },
  methods: {
    mouseDown (ev) {
      let oDiv = ev.target
      console.log(oDiv)

      let mx = ev.clientX - oDiv.offsetLeft
      let my = ev.clientY - oDiv.offsetTop

      console.log(mx, my)

      document.onmousemove = (ev) => {
        let left = ev.clientX - mx
        let top = ev.clientY - my
        this.left = left + 'px'
        this.top = top + 'px'
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style scoped>
    #wrap {
        width: 100%;
        height: 100%;
    }

    .box {
        position: relative;
        top: 20px;
        left: 20px;
        width: 100px;
        height: 100px;
        background: #666;
        user-select: none;
    }
</style>
