<?php
require_once('DBManager.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$item_name = $data['item_name'];
$detail = $data['detail'];
$user_id = $data['user_id'];
$imagePath = $data['imagePath'];

echo $item_name, $detail, $user_id, $imagePath;

$dbManager = new DBManager();
$pdo = $dbManager->GetDB();

$sql = "INSERT INTO item (picture_path, item_name, detail, user_id) VALUES ( :imagePath,:item_name, :detail, :user_id)";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':imagePath', $imagePath, PDO::PARAM_STR);
$stmt->bindValue(':item_name', $item_name, PDO::PARAM_STR);
$stmt->bindValue(':detail', $detail, PDO::PARAM_STR);
$stmt->bindValue(':user_id', $user_id, PDO::PARAM_INT);

try {
    $stmt->execute();
    echo json_encode(['success' => true]);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>

