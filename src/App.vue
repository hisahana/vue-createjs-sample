<template>
  <div id="app">
    <canvas class="stage"></canvas>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      stage: null
    }
  },
  mounted: function() {
    this.stage = new this.createjs.Stage(this.$el.firstChild)
    let shape = new this.createjs.Shape()
    shape.graphics.beginFill("DarkRed")
    shape.graphics.drawCircle(0, 0, 100)
    shape.x = 200
    shape.y = 200
    this.stage.addChild(shape)

    this.stage.update()
  } 
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.stage {
  width: 640px;
  height: 320px;
}
</style>
