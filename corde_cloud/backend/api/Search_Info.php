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
                'icon_path' => $row['icon_path'],
                'user_name' => $row['user_name'],
                'mail_address' => $row['mail_address']
            );
            $id++;
        }
        
        foreach ($data as $row) {
            // echo $row['id'] . ', ';//ID
            echo $row['user_name'] . ', ';//名前
            echo $row['mail_address'] . '<br>';//メアド
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
        echo json_encode([$likeCount]); // 結果をJSON形式で返す
    } 

    public function login($mail_address, $password) {
        $dbManager = new DBManager();
        $pdo = $dbManager->GetDB(); // データベース接続を取得
        // メールアドレスを使用してユーザーを検索
        $sql = "SELECT * FROM USER_info WHERE mail_address = :mail_address";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':mail_address', $mail_address);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // パスワードの認証
            if (password_verify($password, $user['password'])) {
                // 認証成功
                // セッションなどの認証情報を設定
                $_SESSION['user_id'] = $user['user_id'];
                $_SESSION['user_name'] = $user['user_name'];
                // 他の必要な情報をセットすることも可能
                return true;
            }
        }
        return false; // 認証失敗
    }
}
?>
