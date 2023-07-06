<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';

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
                $hashedPassword = $user['password'];
                if (password_verify($password, $hashedPassword)) {
                    // ログイン成功時の処理
                    $response = [
                        'status' => 'success',
                        'message' => 'Login successful.'
                    ];
                } else {
                    // パスワードが一致しない場合の処理
                    $response = [
                        'status' => 'error',
                        'message' => 'Invalid password.'
                    ];
                }
            } else {
                // ユーザーが存在しない場合の処理
                $response = [
                    'status' => 'error',
                    'message' => 'User not found.'
                ];
            }
        } catch (PDOException $e) {
            // データベースエラーの場合の処理
            $response = [
                'status' => 'error',
                'message' => 'Database error: ' . $e->getMessage()
            ];
        }
    } else {
        // データベース接続エラーの場合の処理
        $response = [
            'status' => 'error',
            'message' => 'Database connection error.'
        ];
    }

    // レスポンスをJSON形式で返す
    header('Content-Type: application/json');
    echo json_encode($response);
}

// POSTリクエストからパラメータを取得
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
$email = $input['email'];
$password = $input['password'];

// 入力されたパスワードをハッシュ化する
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// ログイン処理の呼び出し
login($email, $hashedPassword);
?>
