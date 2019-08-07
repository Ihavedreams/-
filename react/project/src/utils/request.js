import Axios from 'axios';
// console.log(host)
function request(url, options = {}) {
  //console.log(url)
  options.headers = {
    Authorization: localStorage.getItem('token')
  };
  let {
    method,
    data
  } = options;
  //console.log(method)
  return Axios({
    url: url,
    method: method || 'GET',
    params: method === 'GET' ? data : {},
    data: method !== 'GET' ? data : {},
    headers: options.headers ? options.headers : {}
  });
}
export default request;
// import axios from 'axios';

// let request = axios.create({
//   baseURL: process.env.NODE_ENV === 'production' ? '/exam' : ''
// });

// request.interceptors.request.use((config) => {
//   // console.log(config);
//   config.headers.authorization = window.localStorage.getItem('token');
//   return config;
// }, (error) => {

//   return Promise.reject(error);
// });

// request.interceptors.response.use((response) => {
//   // console.log(response);
//   return response.data;
// }, (error) => {
//   // console.log(error);
//   return Promise.reject(error);
// });


// let get = (url, params) => request.get(url, params);
// let post = (url, data) => request.post(url, data);
// let deletes = (url, data) => request.delete(url, data);
// let put = (url, data) => request.put(url, data);

// export {
//   get,
//   post,
//   put,
//   deletes
// };
