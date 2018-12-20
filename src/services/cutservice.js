import Api from '@/services/api'

export default {
  fetchCuts () {
    return Api().get('/cuts')
  },
  postCut (cut) {
    return Api().post('/cuts', cut,
      { headers: {'Content-type': 'application/json'} })
  },
  likeCut (id) {
    return Api().put(`/cuts/${id}/likes`)
  },
  deleteCut (id) {
    return Api().delete(`/cuts/${id}`)
  }
}
