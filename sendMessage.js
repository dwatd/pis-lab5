const axios = require('axios');

const botToken = '7580752064:AAH1PJTW8AZm3tRehB7M6o_yf2ZEJUqiMAI';
const chatId = '1565930954';

const serviceData = {
  type: 'Перевезення вантажів (жом)',
  customer: 'Іваненко І.П.',
  quantity: 10,
  price: 400,
};

const total = serviceData.quantity * serviceData.price;
const message = `Послуга надана:
Вид: ${serviceData.type}
Замовник: ${serviceData.customer}
Кількість: ${serviceData.quantity}
Ціна за одиницю: ${serviceData.price} грн
Сума: ${total} грн`;

axios
  .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: message,
  })
  .then((response) => {
    console.log('✅ Повідомлення надіслано!');
  })
  .catch((error) => {
    console.error('❌ Помилка надсилання повідомлення:', error.message);
  });
