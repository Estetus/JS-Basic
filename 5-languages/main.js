

let message = prompt('Укахите язык: ru , en, de');

switch(true) {
  case message === 'ru':
    console.log('Привет!');
    break;
    case message === 'en':
    console.log('Hello!');
     break;
    case message === 'de':
    console.log('Gutten tag!')
    break;
    default:
      console.log('Повторите запрос')
}