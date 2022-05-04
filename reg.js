// 1.	Написать регулярное выражение проверки номера телефона по формату +сс(mmm)xxx-xx-xx, Где cc - код страны, mmm - код мобильного оператора, x - номер телефона
let phoneValidRegExp = /^\+\d{1,2}\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/;

// 2.	Написать регулярное выражение проверки на email
let emailValidRegExp = /^([a-z0-9_\.-]+)@([a-z]+)\.([a-z]+)$/i;

// 3.	Написать регулярное выражение проверку на сайт: http://test.dev
let siteValidRegExp = /^https?:\/\/([a-z]+)\.([a-z]+)\.*([a-z]*)$/i;

// 4.	Написать регулярное выражение проверки пароля, который должен быть минимум 6 символов, максимум 25, состоять из латинских символов и цифр, может содержать в себе знак подчеркивания
let passwordValidRegExp = /^([a-z0-9_]{6,25})$/i;

// 5.	Проверить строку на валидность ipv4 адреса
let ipv4ValidRegExp = /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/;
