import server from './server';

// отправка формы через JS по кнопке "Авторизоваться"
// export async function login(data){
//   let formData = createFormData(data);
//     // formData.append('login', data.login);
//     // formData.append('password', data.password);
//     // formData.append('task', data.task); // для переключения между разными БД для разных задач
//     // formData.append('tokenName', data.tokenName);
//     // formData.append('remember', data.remember);
//     let response = await server.post('user/login', formData);
//     // console.log('api-response: ', response.data);
//     return response.data;
// }

// export async function logout(data){
//   let formData = createFormData(data);
//     // formData.append('login', data.login);
//     // formData.append('task', data.task);
//     // formData.append('tokenName', data.tokenName);
//     let response = await server.post('user/logout', formData);
//     // console.log('api-response: ', response.data);
//     return response.data;
// }

// export async function read(data){
//   // where - это массив пар: ключ - значение в БД, например, ['id' => 1, 'name' => 'abc']
//   // console.log('data: ', data);
//   // let response = await server.get('rest/view', {
//   //   params: data,
//   // });
//   let response = await server({
//     method: 'get',
//     url: 'rest/view',
//     headers: {Authorization: "1"},
//     params: data,
//   });
//   // console.log('api-response: ', response.data);
//   return response.data;
// }

export async function send(data){
  let formData = createFormData(data);
  let response = await server.post('mail.php', formData);
  // console.log('api-response: ', response.data);
  return response.data;
}

// export async function update(data){
//   // let formData = createFormData(data);
//   // console.log('api-updateData: ', data);

//   // let response = await server.put('rest/update', data); - вот так метод put не передавал заголовок
//   // Authorization по совсем непонятной причине, а вторым способом передал отлично.
//   let response = await server({
//     method: 'put',
//     url: 'rest/update',
//     headers: {Authorization: "1"},
//     params: data
//   });
//   // console.log('api-response: ', response.data);
//   return response.data;
// }

// export async function remove(data){
//   let response = await server.delete('rest/delete', {
//     params: {
//       ids: [...data.ids],
//       task: data.task,
//       tokenName: data.tokenName
//     }
//   });
//   // console.log('api-response: ', response.data);
//   return response.data;
// }

function createFormData(data){
  console.log('data: ', data);
  let formData = new FormData();
  for (let key in data){
    formData.append(key, data[key]);
  }
  return formData;
}
