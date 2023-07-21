<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'DBManager.php';

class fullsearch {
    public function Searchtweet() { // ユーザーの情報を表示する
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得

        $sql = 
            "SELECT  u.icon_path, u.user_name, i.picture_path
             FROM tweet t
             JOIN USER_info u ON t.user_id = u.user_id
             JOIN tweetitem ti ON t.tweet_id = ti.tweet_id
             JOIN item i ON ti.item_id = i.item_id;";
        $stmt = $pdo->query($sql);

        // 結果を配列に格納
        $data = array();
        $id = 1;
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array(
                'id' => $id,
                'icon_path' => $row['icon_path'],
                'user_name' => $row['user_name'],
                'picture_path' => $row['picture_path']
            );
            $id++;
        }
        return $data;
    }
}
$searchInstance = new fullsearch();
$result = $searchInstance->Searchtweet();
header('Content-Type: application/json');
echo json_encode($result);
?>
