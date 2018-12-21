import Api from '@/services/api'

export default {
  fetchBarbers () {
    return Api().get('/barbers')
  },
  postBarber (barber) {
    return Api().post('/barbers', barber,
      { headers: {'Content-type': 'application/json'} })
  },
  likeBarber (id) {
    return Api().put(`/barbers/${id}/likes`)
  },
  deleteBarber (id) {
    return Api().delete(`/barbers/${id}`)
  },
  fetchBarber (id) {
    return Api().get(`/barbers/${id}`)
  },
  putBarber (id, barber) {
    console.log('REQUESTING ' + barber._id + ' ' +
      JSON.stringify(barber, null, 5))
    return Api().put(`/barbers/${id}`, barber,
      { headers: {'Content-type': 'application/json'} })
  }
}
