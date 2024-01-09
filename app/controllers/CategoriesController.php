<?php
    namespace app\controllers;
    require('config/DB.php');
    use config\DB;


    require("functions/functions.php");
  
    class CategoriesController{
        public $conn = null;
        //Making Connection
        public function __construct(){
            $this->conn =  (new DB())->connectDb();
        }

        //Get all Categories
        public function getCategories(){
            try{    
                getHeaders();
                $data = [];
                $sql = "SELECT * FROM categories";
                $result = $this->conn->query($sql);

                if($result){
                    while($row = $result->fetch_assoc()){
                        $data['categories'][] = $row;
                    }
                }
               
                echo json_encode($data, JSON_PRETTY_PRINT);

            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }
    }
?>