<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';
require_once 'Insert.php';
require_once 'Search_Info.php';
$dbManager = new DBManager();
$dbManager->GetDB();
$dbManager = new Insert();
$tag_id = 1; // タグID
$tag_name = "プログラミング"; // タグ名
$tag_color = "#FF0000"; // タグの色
$user_id = 1; // ユーザーID
$dbManager->insertTag($tag_id, $tag_name, $tag_color, $user_id);
?>
