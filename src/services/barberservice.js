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
  }
}
