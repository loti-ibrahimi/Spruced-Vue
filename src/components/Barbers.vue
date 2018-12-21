<template>
  <div class="header">
    <h3 class="barbers-title">{{ messagetitle }}</h3>
    <img src="../assets/tools.png" alt="description here" />
    <div id="app1">
      <v-client-table :columns="columns" :data="barbers" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editBarber(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBarber(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import BarberService from '@/services/barberservice'

// Vue Table
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Barbers',
  data () {
    return {
      messagetitle: ' Barber Showcase ',
      barbers: [],
      errors: [],
      columns: ['_id', 'barberName', 'barberBio', 'tel', 'region', 'likes', 'like', 'remove'],
      options: {
        perPage: 8,
        sortable: ['like'],
        filterable: ['barberName', 'region', 'tel'],
        headings: {
          _id: 'ID',
          barberName: 'Name',
          barberBio: 'Bio',
          tel: 'Telephone',
          region: 'Region',
          likes: 'Likes',
          props: ['_id']
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
    },
    // Fetches Barbers when the component is created.
    like: function (id) {
      BarberService.likeBarber(id)
        .then(response => {
          this.loadBarbers()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteBarber: function (id) {
      BarberService.deleteBarber(id)
        .then(response => {
          this.loadBarbers()
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
  #app1 {
    width: 70%;
    margin: 0 auto;
  }
  .barbers-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
</style>
