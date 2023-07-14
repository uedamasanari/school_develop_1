<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';
class Insert {
    public function Insertuser_info($user_name, $user_coment, $mail_address, $password) {
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得
        $sql = "INSERT INTO USER_info (user_name, user_coment, mail_address, password) VALUES (:user_name, :user_coment, :mail_address, :password)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':user_name', $user_name);
        $stmt->bindParam(':user_coment', $user_coment);
        $stmt->bindParam(':mail_address', $mail_address);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
    }
}
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
$user_name = $input['user_name'];
$user_coment = $input['user_coment'];
$mail_address = $input['mail_address'];
$password = $input['password'];

$dataInsert = new Insert();
$dataInsert->Insertuser_info($user_name, $user_coment, $mail_address, $password);
?>
