<template>
  <div class="header">
    <h3 class="spruced-title">{{ messagetitle }}</h3>
    {{ barbers }}}
  </div>
</template>

<script>
import BarberService from '@/services/barberservice'
export default {
  name: 'Barbers',
  data () {
    return {
      messagetitle: ' Barber Showcase ',
      barbers: [],
      errors: []
    }
  },
  // Fetches Barbers when the component is created.
  created () {
    this.loadBarbers()
  },
  methods: {
    loadBarbers: function () {
      BarberService.fetchBarbers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.barbers = response.data
          console.log(this.barbers)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
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
