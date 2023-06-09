<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';
class searcheruser {
    public function Insertuser_info($user_name,$icon_path,$user_coment, $mail_address,$password) {
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得
        $sql = "INSERT INTO USER_info (user_name, icon_path, user_coment, mail_address, password) VALUES (:user_name,:icon_path,:user_coment, :mail_address,:password)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':user_name', $user_name);
        $stmt->bindParam(':icon_path', $icon_path);
        $stmt->bindParam(':user_coment', $user_coment);
        $stmt->bindParam(':mail_address', $mail_address);
        $stmt->bindParam(':password', $password);
        $stmt->execute(); //$searcher = new searcheruser();
                          //$searcher->Insertuser_info("aaaaa", "aaaaa@","vvvvvv","vvvvvv","bbbbb");
    }
}
?>