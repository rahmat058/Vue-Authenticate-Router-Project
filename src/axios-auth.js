import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-router-e3601.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance