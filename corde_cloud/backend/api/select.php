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
      
        public function selectInfo() {
          try {
            $sql = "SELECT * FROM クラス名";
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
            
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            if(count($result) > 0) {
                foreach($result as $row){
                    $response = array(
                        "id" => $row["id"],//取得したクラスに存在する列の名前を$rowの中で指定することでSELECTの結果を取得
                        "name" => $row["name"],
                    );
                    //フロントに返す
                    echo json_encode($response);
                }
            } else {
                //検索結果がなかった場合の処理
                $response = array("message" => "No data found.");
                echo json_encode($response);
            }
            
          } catch(PDOException $e) {
            //エラーが起きた際の処理
            $response = array("maintext" => "システムエラーが起きました。", "subtext" => "お手数ですがお問い合わせまでお願いします。" , "status" => "error");
            echo json_encode($response);
          }
        }
      }
      
      $dataInsert = new InsertData();
      $dataInsert->selectInfo();
?>