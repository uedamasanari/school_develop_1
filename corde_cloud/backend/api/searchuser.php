<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'DBManager.php';

class searcheruser {
    public function searchuser_info() {
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得

        $sql = "SELECT user_name, mail_address FROM USER_info";
        $stmt = $pdo->query($sql);

        // 結果を配列に格納
        $data = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array(
                'user_name' => $row['user_name'],
                'mail_address' => $row['mail_address']
            );
        }

        return $data;
    }
}

// searcheruserクラスのインスタンスを作成してメソッドを呼び出す例
$searcher = new searcheruser();
$userData = $searcher->searchuser_info();
print_r($userData);
?>
