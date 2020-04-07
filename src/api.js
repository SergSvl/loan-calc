import server from './server'

export async function sendTelegram(data){
  // console.log('data: ', data);
  let formData = createFormData(data);
  let response = await server.post('telegram.php', formData);
  // console.log('api-response_telegram: ', response);
  return response.data;
}

export async function sendMail(data){
  let formData = createFormData(data);
  // console.log('formData: ', formData);
  // console.log('data: ', data);
  let response = await server.post('mail.php', formData);
  // console.log('api-response: ', response.data);
  return response.data;
}

function createFormData(data){
  // console.log('data: ', data);
  let formData = new FormData();
  for (let key in data){
    formData.append(key, data[key]);
  }
  return formData;
}

/*
{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
  data:
    ok: true
    result:
      message_id: 13
      from: {id: 1072924358, is_bot: true, first_name: "Zaymy", username: "moy_zaym_bot"}
      chat: {id: -390436489, title: "Мой займ", type: "group", all_members_are_administrators: true}
      date: 1579690538
      text: "НОВАЯ АНКЕТА↵**************↵↵Имя: уккуку↵Телефон: +73434343434↵Вид кредита: Ипотека↵Остаток основного долга: 100000↵Размер ежемесячного платежа: 1000↵Число ежемесячного платежа: 2↵Просрочка по платежам: Нет↵Другие кредиты: Нет"
      entities: [{…}]
    __proto__: Object
  __proto__: Object
  status: 200
  statusText: "OK"
  headers: {connection: "keep-alive", content-length: "1341", content-type: "application/json", date: "Wed, 22 Jan 2020 10:55:38 GMT", server: "nginx/1.16.1"}
  config: {url: "https://api.telegram.org/bot1072924358:AAFTZX4qXDR…0%B4%D0%B8%D1%82%D1%8B%3A%20%D0%9D%D0%B5%D1%82%0A", method: "post", headers: {…}, baseURL: "http://jantrish/mail", transformRequest: Array(1), …}
  request: XMLHttpRequest {klIsCORSRequest: true, readyState: 4, timeout: 0, RequestSend: ƒ, onreadystatechange: ƒ, …}
  __proto__: Object
*/
