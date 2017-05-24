import axios from 'axios'

export const getUserInfo = (name) => {
  return axios.get(`/users?name=${name}`)
}
