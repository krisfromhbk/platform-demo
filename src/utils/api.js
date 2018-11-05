import axios from 'axios'

const apiCall = (url, method, ...args) => new Promise((resolve, reject) => {
  axios({
    url: url,
    method: method,
    data: args,
    baseURL: 'http://localhost:5000/'
  })
  .then((response) => {
    resolve(response.data)
  })
  .catch((error) => {
    reject(new Error(error))
  })
})

const simpleCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ token: '1234' })
  }, 2000)
})

export { apiCall, simpleCall }
