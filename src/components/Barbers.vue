<template>
  <div class="header">
    <h3 class="barbers-title">{{ messagetitle }}</h3>
    <img src="../assets/tools.png" alt="description here" />
    <div id="app1">
      <v-client-table :columns="columns" :data="barbers" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'

import BarberService from '@/services/barberservice'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Barbers',
  data () {
    return {
      messagetitle: ' Barber Showcase ',
      barbers: [],
      errors: [],
      columns: ['_id', 'barberName', 'barberBio', 'tel', 'region', 'likes'],
      options: {
        headings: {
          _id: 'ID',
          barberName: 'Name',
          barberBio: 'Bio',
          tel: 'Telephone',
          region: 'Region',
          likes: 'Likes'
        }
      }
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
  .barbers-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
</style>
