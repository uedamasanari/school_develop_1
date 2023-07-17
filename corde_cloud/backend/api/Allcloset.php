<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';

function getCloset() {
    $dbManager = new DBManager();
    $pdo = $dbManager->GetDB(); // データベース接続を取得
    if ($pdo) {
        try {
            $sql = "SELECT * FROM closet";
            $stmt = $pdo->prepare($sql);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            $response = [
                'status' => 'success',
                'message' => 'Login successful.'
            ];
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

getCloset($email, $password);
?>
