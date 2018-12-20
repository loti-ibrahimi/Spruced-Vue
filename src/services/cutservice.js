import Api from '@/services/api'

export default {
  fetchCuts () {
    return Api().get('/cuts')
  }
}
