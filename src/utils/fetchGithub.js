import axios from 'axios'

export const fetchReops = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}
