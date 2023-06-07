<?php
class searchuser{
require_once 'DBManager.php';
public function searchInfo(){
$dbManager = new DBManager();
$dbManager->DBConect();
$sql = "SELECT user_name, mail_address FROM USER_info";
$result = $conn->query($sql);

// 結果を配列に格納
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            'user_name' => $row['user_name'],
            'mail_address' => $row['mail_address']
        );
    }
}
header('Content-Type: application/json');
echo json_encode($data);
}
}



?>