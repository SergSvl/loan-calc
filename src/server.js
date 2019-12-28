import axios from 'axios';

let server = axios.create({
  baseURL: user_config.baseURL
});

// этот интерцептор на запрос - динамически выполняет вложенную ф-цию (callback) перед запросом
server.interceptors.request.use(function(request){
  // console.log('Server request IN: ', request);
  // console.log('Server request.headers: ', request.headers);
  return request;
});

// этот интерцептор на ответ - динамически выполняет вложенную ф-цию (callback) после запроса
server.interceptors.response.use(function(response){
  if (typeof response.data !== 'object'){
    // console.log('OBJ response.data = ', response.data.errors);
    // console.log("OBJ response.data::\n", response.data);
    throw new Error(response.data.error);
  } else {
    // console.log('Server response.data = ', response.data);
  }
  return response;
});

export default server;
