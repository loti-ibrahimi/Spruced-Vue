<template>
  <div class="header">
    <h3 class="cuts-title">{{ messagetitle }}</h3>
    <img src="../assets/barbershop.png" alt="description here" />
    <div id="app1">
      <v-client-table :columns="columns" :data="cuts" :options="options">
        <a slot="like" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="like(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editCut(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteCut(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import CutService from '@/services/cutservice'

// Vue Table
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Cuts',
  data () {
    return {
      messagetitle: ' Cuts Showcase ',
      cuts: [],
      errors: [],
      columns: ['_id', 'cutType', 'cutPrice', 'cutDate', 'barberName', 'likes', 'like', 'remove'],
      options: {
        perPage: 8,
        sortable: ['like'],
        filterable: ['cutType', 'cutPrice', 'cutDate', 'barberName'],
        headings: {
          _id: 'ID',
          cutType: 'Haircut',
          cutPrice: 'Price',
          cutDate: 'Date',
          barberName: 'Barber',
          likes: 'Likes',
          props: ['_id']
        }
      }
    }
  },
  // Fetches Cuts when the component is created.
  created () {
    this.loadCuts()
  },
  methods: {
    loadCuts: function () {
      CutService.fetchCuts()
        .then(response => {
          // JSON responses are automatically parsed.
          this.cuts = response.data
          console.log(this.cuts)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    // Fetches Cuts when the component is created.
    like: function (id) {
      CutService.likeCut(id)
        .then(response => {
          this.loadCuts()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteCut: function (id) {
      CutService.deleteCut(id)
        .then(response => {
          this.loadCuts()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
    // Sweet Alert Implementation was not working as expected...
    // deleteCut: function (id) {
    //   this.$swal({
    //     title: 'Are you sure you want to proceed?',
    //     text: 'You can\'t Undo this action!',
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonText: 'OK Delete it',
    //     cancelButtonText: 'Cancel',
    //     showCloseButton: true,
    //     showLoaderOnConfirm: true
    //   }).then((result) => {
    //     console.log('SWAL Result : ' + result)
    //     if (result.value === true) {
    //       CutService.deleteCut(id)
    //         .then(response => {
    //           // JSON responses are automatically parsed.
    //           this.message = response.data
    //           console.log(this.message)
    //           this.loadCuts()
    //           // Vue.nextTick(() => this.$refs.vuetable.refresh())
    //           this.$swal('Deleted', 'You successfully deleted this Cut ' + JSON.stringify(response.data, null, 5), 'success')
    //         })
    //         .catch(error => {
    //           this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
    //           this.errors.push(error)
    //           console.log(error)
    //         })
    //     } else {
    //       console.log('SWAL Else Result : ' + result.value)
    //       this.$swal('Cancelled', 'Cut not Deleted!', 'info')
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
  #app1 {
    width: 70%;
    margin: 0 auto;
  }
  .cuts-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
</style>
