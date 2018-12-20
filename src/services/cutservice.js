import Api from '@/services/api'

export default {
  fetchCuts () {
    return Api().get('/cuts')
  },
  postCut (cut) {
    return Api().post('/cuts', cut,
      { headers: {'Content-type': 'application/json'} })
  }
}
