<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';
class Insert {
    private $db;
    public function __construct() {
      $config = new DBManager();
      $this->db = $config->getDb();
    }
    public function Insertuser_info($user_name, $user_coment, $mail_address, $password) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO USER_info (user_name,user_coment, mail_address, password) VALUES (:user_name, :user_coment, :mail_address, :password)";
        $stmt =$this-> $db->prepare($sql);
        $stmt->bindParam(':user_name', $user_name);
        $stmt->bindParam(':user_coment', $user_coment);
        $stmt->bindParam(':mail_address', $mail_address);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->execute();
    }
    public function insertTag($tag_name, $tag_color, $user_id) {
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得
        $sql = "INSERT INTO tag (tag_id, tag_name, tag_color, user_id)
                VALUES (:tag_id, :tag_name, :tag_color, :user_id)";
        $stmt = $pdo->prepare($sql);

        $stmt->bindParam(':tag_id', $tag_id);
        $stmt->bindParam(':tag_name', $tag_name);
        $stmt->bindParam(':tag_color', $tag_color);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();
    }
}
?>