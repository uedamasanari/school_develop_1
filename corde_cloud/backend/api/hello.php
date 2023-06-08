<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once 'DBManager.php';
require_once 'searchuser.php';
$dbManager = new DBManager();
$dbManager->GetDB();
$searcher = new searcheruser();
$userData = $searcher->searchuser_info();
?>