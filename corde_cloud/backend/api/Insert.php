<?php
    require_once 'DbConfig.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    class InsertData {
    
        private $db;
      
        public function __construct() {
          $config = new DbConfig();
          $this->db = $config->getDb();
        }
      
        public function insertIntoWaiting($name) {
          try {
                //クラス名のnameの列にbindParamで指定する値を挿入
              $sql = "INSERT INTO クラス名 (name) VALUES (:name)";
              $stmt = $this->db->prepare($sql);
      
                //:nameは$nameが入るということを指定
              $stmt->bindParam(':name', $name);
      
              $stmt->execute();
              $response = array("resText" => "登録しました！");
              echo json_encode($response);
          } catch(PDOException $e) {
            $response = array("resText" => "システムエラーが起きました。");
            echo json_encode($response);
          }
        }
      }
      
      $inputJSON = file_get_contents('php://input');
            //フロントから送られてきたデータをinput変数に代入
      $input = json_decode($inputJSON, TRUE);
      //input変数の中のidをid変数に代入
      $name = $input['name'];
      
      $dataInsert = new InsertData();
      $dataInsert->insertIntoWaiting($name);
      
?>