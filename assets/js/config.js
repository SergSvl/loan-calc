var user_config = {
  youtube_video: 'https://www.youtube.com/embed/SuVi3oeASag',
  basePercent: 35, // 35% - постоянный процент выплаты
  companyPayment: 10.5, // 10,5% - процент выплаты компании
  annualService: 10000, // сумма годового обслуживания
  returnDate: 28, // предыдущее число выплаты, если клиет указал 1-е число
  baseURL: 'http://jantrish/mail', // URL домена с почтовым скриптом, необходим для отправки писем!! Протокол https для писем важен, как и для домена!
  // baseURL: 'https://zk35.club/mail', // URL домена с почтовым скриптом, необходим для отправки писем!! Протокол https для писем важен, как и для домена!
  subFolder: '', // имя подпапки, он же ID клиента, писать БЕЗ СЛЭША перед ним, например: 'id384'. Если подпапка abc 2-го уровня, то вписать 'id384/abc'. Для корневой папки домена - оставить "пусто": ''.
  redirectWait: 6, // время задается в секундах
  redirectURL: '/', // любой полный URL
  // typeCredit: '', // 'Ипотека',
  // dateMonthlyPayment: '', // '2',
  // latePayments: '', //'Нет',
  // otherLoan: '', // 'Нет',
  typeCredit: 'Ипотека', // вид кредита
  dateMonthlyPayment: '2', // Дата ежемесячного платежа
  latePayments: 'Нет', // Просрочка по платежам
  otherLoan: 'Нет', // Другие кредиты
  principalBalance: 100000, // Остаток основного долга
  monthlyPayment: 1000, // Размер ежемесячного платежа
  wasThereTrial: '', // Был ли суд
  whereCase: '', // Где находится дело
  sendMail: true, // если не нужно отправлять письмо на почту, то поставить: false
  sendTelegram: true, // если не нужно отправлять сообщение в Телеграм, то поставить: false
  telegram: [
    {
      telegram_token: '1000636734:AAGi0vhLZ5smKA1U8n_8SdUluUrdyA-GWHQ', // токен от @BotFather
      telegram_chat_id: '-390436489', // chat_id для телеграм
    },
    {
      telegram_token: '1072924358:AAFTZX4qXDRiP7Pxqe-Lwd7wPUeqxhIFFVA', // токен от @BotFather
      telegram_chat_id: '-390436489', // chat_id для телеграм
    },
    // {
    //   telegram_token: '927652360:AAG0y9YLXIMnE2KK1y_g0lBHFJwTcs3V8ek', // токен от @BotFather
    //   telegram_chat_id: '-1001336455697', // chat_id для телеграм
    // },
  ]
}
