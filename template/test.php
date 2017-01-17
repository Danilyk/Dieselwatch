<?
if ($_POST)
{
  $name = ($_POST['name']); 
  $email = ($_POST['email']);

  // $name = preg_match("/^[a-zа-яё]{1}$/i", $name);
  // $email = preg_match("/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$", $email);



        $to = 'Danilko_01@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        // $message = $name;
       $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name.'</p>
                        <p>Телефон: '.$email.'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
      $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
      $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
      $result = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
      // mail($to, $subject, $message); //Отправка письма с помощью функции mail
      // if ($result)
      // {
      //   echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
      // }
}
?>

