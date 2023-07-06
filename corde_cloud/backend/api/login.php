<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';
class Login{
    function login($email, $password) {
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得
        if ($pdo) {
            try {
                $sql = "SELECT * FROM USER_info WHERE mail_address = :email";
                $stmt = $pdo->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $user = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    if (password_verify($password, $user['password'])) {
                        // ログイン成功時の処理
                        echo 'Login successful.';
                        // 他の処理を追加する場合はここに記述します
                    } else {
                        // パスワードが一致しない場合の処理
                        echo 'Invalid password.';
                    }
                } else {
                    // ユーザーが存在しない場合の処理
                    echo 'User not found.';
                }
            } catch (PDOException $e) {
                echo 'Database error: ' . $e->getMessage();
            }
        }
    }
}
?>
