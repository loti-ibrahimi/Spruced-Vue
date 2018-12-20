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
    return Api().put(`/cuts/${id}/likes`)
  },
  deleteBarber (id) {
    return Api().delete(`/cuts/${id}`)
  }
}
