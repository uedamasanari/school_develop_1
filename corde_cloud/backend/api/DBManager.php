<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
class DBManager {
    public function DBConect() {
            $host = 'mysql';
            $dbname = 'your_database';
            $user = 'your_user';
            $password = 'your_password';

            try {
               $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
               echo "FUCK";
            } catch (PDOException $e) {
                throw $e;
            }
        }
    }
?>