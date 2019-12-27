import axios from 'axios';

let server = axios.create({
  // withCredentials: true,
  baseURL: 'http://jantrish/calc'
});

// server.defaults.headers.common['Authorization'] = '0'; // для всех запросов

// этот интерцептор на запрос - динамически выполняет вложенную ф-цию (callback) перед запросом
server.interceptors.request.use(function(request){
  // console.log('Server request IN: ', request);
  // return;

  // если совершаем вход или выход, CORS запрещает присутствие ключа Authorization в заголовке
  // if (request.url.indexOf('logout') !== -1 || request.url.indexOf('login') !== -1){
  //   // console.log('url: ', request.url);
  //   // console.log('request: ', request);
  //   return request;
  // }

  // let token;

  // console.log('request.method: ', request.method);
  // console.log('request.data.tokenName: ', request.data.tokenName);

  // if (request.method == 'get' || request.method == 'put' || request.method == 'delete'){
  //   token = localStorage.getItem(request.params.tokenName);
  // } else {
  //   token = localStorage.getItem(request.data.get('tokenName'));
  // }
  // console.log('Server request: ', request.data);
  // console.log('Server tokenName: ', request.data.get('tokenName'));
  // console.log('Server token: ', token);

  // проверить, если в localStorage есть наш токен, то в этом случае добавить его в заголовок.
  // Если его нет в локалсторадже, то токена не будет
  // if (token !== null){
  //   // console.log('Server token ЕСТЬ');
  //   request.headers.Authorization = token;
  // } else {
  //   // console.log('Server token НЕТ');
  //   // здесь нельзя писать = null, т.к. при передаче заголовка null преобразуеься к строке и все ломается!
  //   request.headers.Authorization = '';
  // }
  // console.log('Server request.headers: ', request.headers);
  // console.log('Server request OUT: ', request);
  return request;
});


// этот интерцептор на ответ - динамически выполняет вложенную ф-цию (callback) после запроса
server.interceptors.response.use(function(response){
  if (typeof response.data !== 'object'){
    // console.log('OBJ response.data = ', response.data.errors);
    console.log("OBJ response.data::\n", response.data);
    // console.log('OBJ response = ', response);
    // код здесь работает асинхронный, а мы бросаем исключения как в синхронном коде!
    throw new Error(response.data.error);
  } else {
    // console.log('Response.data.errors = ', response.data.errors);
    console.log('Server response.data = ', response.data);
    // console.log('Response = ', response);
    // console.log('response-tokenName = ', response.data['tokenName']);

    // if (response.data.result !== undefined && response.data.result['coockies'] !== undefined){
    //   let cookie = response.data.result['coockies']['remember_code'];
    //   document.cookie = 'remember_code='+cookie['cookieValue']+'; expires='+new Date()+'; Max-Age='+cookie['cookieExpire']+'; path=/';
    // }

    // if (response.data.result){
      // if (!response.data.result.get){
      //   if (response.data.result.logout){
      //     localStorage.removeItem(response.data.result['tokenName']);
      //     localStorage.removeItem(response.data.result['tokenName']+'User');
      //     localStorage.removeItem(response.data.result['tokenName']+'Login');
      //   } else {
      //     localStorage.setItem(response.data.result['tokenName'], response.data.result['token']);
      //     localStorage.setItem(response.data.result['tokenName']+'User', response.data.result['name']);
      //     localStorage.setItem(response.data.result['tokenName']+'Login', response.data.result['login']);
      //   }
      // }
    // }
  }
  return response;
});

export default server;
