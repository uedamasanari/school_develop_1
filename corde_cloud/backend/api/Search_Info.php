<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once 'DBManager.php';

class Search_info {
    public function SearchUser() { // ユーザーの情報を表示する
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得

        $sql = "SELECT user_name, mail_address FROM USER_info";
        $stmt = $pdo->query($sql);

        // 結果を配列に格納
        $data = array();
        $id = 1;
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array(
                'id' => $id,
                'user_name' => $row['user_name'],
                'mail_address' => $row['mail_address']
            );
            $id++;
        }
        
        foreach ($data as $row) {
            echo 'ID: ' . $row['id'] . ', ';
            echo '名前: ' . $row['user_name'] . ', ';
            echo 'メアド: ' . $row['mail_address'] . '<br>';
        }
        return $data;
    }
    public function getTweetLikesCount($tweet_id) { // 指定したツイートのいいね数を返す
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得
        $sql = "
            SELECT COUNT(good_id) AS like_count
            FROM good
            WHERE tweet_id = :tweet_id
        ";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':tweet_id', $tweet_id, PDO::PARAM_INT);
        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        $likeCount = $result['like_count'] ?? 0;
        return $likeCount;//いいね数を返す
        //フロント側の呼び方
        //$dbManager = new Search_info();
        //$tweetId = 1; // ツイートIDを指定
        //$likeCount = $dbManager->getTweetLikesCount($tweetId);
        //echo "Tweet ID: " . $tweetId . ", Like Count: " . $likeCount;
    }




    
}
?>
