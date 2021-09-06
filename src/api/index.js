import axios from 'axios'

export default axios.create({
  baseURL:"https://azsoft-code-server.herokuapp.com/books",
  headers:{'Access-Control-Allow-Origin' : '*'}
});