<template>
    <div class='box' @mousedown='mouseDown' :style='{left: left, top: top}'>
    </div>
</template>

<script>
export default {
  data () {
    return {
      left: 0,
      top: 0
    }
  },
  methods: {
    mouseDown (ev) {
    //   console.log(ev)
      // client 鼠标点击的位置上
      let mx = ev.clientX - this.left
      let my = ev.clientY - this.top
      //   console.log(mx, 'mx', my, 'my')
      document.onmousemove = (ev) => {
        let left = ev.clientX - mx
        let top = ev.clientY - my
        this.left = left
        this.top = top
        // console.log(this.left, 'left')
        // console.log(top, 'top')
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style scoped lang="">
    .box {
        position: absolute;
        width: 100px;
        height: 100px;
        background: #000;
        color: #F50505;
        user-select: none;
    }
</style>
