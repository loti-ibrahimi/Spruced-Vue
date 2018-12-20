<template>
  <div class="header">
    <h3 class="spruced-title">{{messagetitle}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Barbers',
  data () {
    return {
      messagetitle: ' Barber Showcase '
    }
  }
}
</script>

<style scoped>
  .spruced-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
</style>
