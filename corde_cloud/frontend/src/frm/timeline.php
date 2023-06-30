<?php
  class DBconnect{
    public static function connect_db(){
    //ホスト名、データベース名、文字コードの３つを定義する
    $host = '8080';
    $db = 'your_database';
    $charset = 'utf8';
    $dsn = "mysql:host=$host; dbname=$db; charset=$charset";

    //ユーザー名、パスワード
    $user = 'your_user@172.18.0.6';

    try{
        //上のデータを引数に入れて、PDOインスタンスを作成
        $pdo = new PDO($dsn, $user);
    }catch(PDOException $e){
        echo $e->getMessage();
    }
    //PDOインスタンスを返す
    return $pdo;
    }
}
?>
//http://localhost:8080/index.php?route=/database/structure&db=your_database#