import Api from '@/services/api'

export default {
  fetchBarbers () {
    return Api().get('/barbers')
  },
  postBarbers (barber) {
    return Api().post('/barbers', barber,
      { headers: {'Content-type': 'application/json'} })
  }
}
