<?php
class DbConfig {
  private $db;
  public function __construct() {
    $host = 'mysql';
    $dbname = 'your_database';
    $username = 'your_user';
    $password = 'your_password';
    try {
      $this->db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    } catch(PDOException $e) {
      echo 'Connection failed: ' . $e->getMessage();
    }
  }
  public function getDb() {
    return $this->db;
  }
}
?>