<?php
//if ( isset($_POST["name"]) && isset($_POST["email"]) ) { 
$name = ($_POST['name']); 
$email = ($_POST['email']);
    if(preg_match("/^[0-9]/", $email))&&(preg_match("/^[a-zа-яё]/", $name) {
       $to = 'replicdiesel@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
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
      mail($to, $subject, $message, $headers);
      $result = array(
      'name' => $_POST["name"],
      'email' => $_POST["email"]
      ); 

    echo json_encode($result); 
    }
     else{
      $result = "Name or phone dos not exist";


      echo "ПЛОХО";
      die(error_log("Dвсе плохо"));
     }
//}
?>