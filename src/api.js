import server from './server';

export async function send(data){
  let formData = createFormData(data);
  let response = await server.post('mail.php', formData);
  // console.log('api-response: ', response.data);
  return response.data;
}

function createFormData(data){
  console.log('data: ', data);
  let formData = new FormData();
  for (let key in data){
    formData.append(key, data[key]);
  }
  return formData;
}
