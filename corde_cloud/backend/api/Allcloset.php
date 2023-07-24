<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';

function getCloset($user_id) {
    $dbManager = new DBManager();
    $pdo = $dbManager->GetDB(); // データベース接続を取得
    if ($pdo) {
        try {
            $sql = "SELECT * FROM item WHERE user_id = :user_id";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':user_id', $user_id);
            $stmt->execute();
            $closet = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Modify each item's picture_path to absolute URL.
            $serverName = $_SERVER['SERVER_NAME'];
            foreach ($closet as &$item) {
                $publicPath = str_replace('../', '', $item['picture_path']);
                $item['picture_path'] = "http://localhost:8000/$publicPath";
            }

            $response = [
                'status' => 'success',
                'message' => 'Closet retrieval successful.',
                'data' => $closet
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

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
$user_id = $input['user_id'];
// $user_id = 1;//仮置き1
getCloset($user_id);
?>

