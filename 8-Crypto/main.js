function crypto(psw, isDescrypt = false) {
  const pswSplit = psw.split("");
  const randomFirst = [pswSplit[0], pswSplit[1]];
  const randomSecond = [pswSplit[2], pswSplit[3]];
  const randomThird = [pswSplit[pswSplit.length - 1], pswSplit[4]];

  // Если isDescrypt = false (шифруем)
  if (!isDescrypt) {
    pswSplit[0] = randomSecond[0];
    pswSplit[1] = randomSecond[1];
    pswSplit[2] = randomFirst[0];
    pswSplit[3] = randomFirst[1];
    pswSplit[4] = randomThird[0];
    pswSplit[pswSplit.length - 1] = randomThird[1];
  } else {
    // Если isDescrypt = true (дешифруем)
    pswSplit[0] = randomSecond[0];
    pswSplit[1] = randomSecond[1];
    pswSplit[2] = randomFirst[0];
    pswSplit[3] = randomFirst[1];
    pswSplit[4] = randomThird[0];
    pswSplit[pswSplit.length - 1] = randomThird[1];
  }

  return pswSplit.join("");
}

const encrypted = crypto("password"); // Шифрование
console.log("Зашифрованный пароль:", encrypted);

function check(cryptoPsw, SecondPsw) {
  const decrypted = crypto(cryptoPsw, true); // Дешифровка
  if (SecondPsw === decrypted) {
    console.log("Пароли совпадают");
    return true;
  } else {
    console.log("Пароли не совпадают");
    return false;
  }
}

console.log(check(encrypted, "password")); // Проверка паролей
