<?php
require_once 'DBManager.php';
require_once 'search.php';
$dbManager = new DBManager();
$dbManager->DBConect();
$search = new searchuser();
$search ->searchInfo();
?>
