import Api from '@/services/api'

export default {
  fetchBarbers () {
    return Api().get('/barbers')
  }
}
