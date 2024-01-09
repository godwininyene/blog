<?php
    namespace app\controllers;
    require('config/DB.php');
    use config\DB;


    require("functions/functions.php");
  
    class PostsController{

        public $conn = null;
        //Making Connection
        public function __construct(){
            $this->conn =  (new DB())->connectDb();
        }
    
        //Get Paginated posts
        public function getPostsFromDb(){
            try{
                getHeaders();
                $perPage = $_GET['limit'] ?? 5;
                $pageNumber = $_GET['offset'] ?? 1;

                $data = [];
                
                //Determine the total number of pages available
                $sql = "SELECT * FROM posts";
                $result = $this->conn->query($sql);
                $totalPosts = $result->num_rows;
                $num_of_page = ceil($totalPosts / $perPage);

                //Setting pagination data
                $data['pagination_data']['total_records'] = $totalPosts;
                $data['pagination_data']['per_page'] =$perPage;

                //Determine the starting point to display result from
                if($pageNumber == 1 || $pageNumber ==0){
                    $pageOffset = 0;
                }else{
                    $pageOffset = ($pageNumber * $perPage) - $perPage;
                }

              
               $sql = "SELECT * FROM posts ORDER BY post_id LIMIT $perPage OFFSET $pageOffset";
               $result = $this->conn->query($sql);
    
                if($result){
                    while($row = mysqli_fetch_assoc($result)){
                        $data['posts'][] = $row;
                    }
               }else{
                    echo "Error" . $sql . "<br/>" . mysqli_error($this->conn);
               }
               
               for($i = 1; $i<= $num_of_page; $i++){
                    $data['pagination_data']['links'][] = 'http://localhost/blog/app/posts?limit='.$perPage.'&offset='.$i;
                }
            //    echo "<pre>";
                echo json_encode($data, JSON_PRETTY_PRINT);
                return json_encode($data,JSON_PRETTY_PRINT);
            

            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        //Get Search result
        public function searchPosts(){
            try{
                getHeaders();

                $postsArray = [];
                $keyword = $_GET['keyword'] ?? null;
                $keyword = $this->conn->real_escape_string($keyword);
            

                if($keyword){
                    $sql = "SELECT * FROM posts WHERE post_tags  LIKE '%$keyword%'";
                    $result = $this->conn->query($sql);

                    if($result){
                        while($row = $result->fetch_assoc()){
                            $postsArray['posts'][] = $row;
                        }
                    }
                }
                // echo "<pre>";
                echo json_encode($postsArray, JSON_PRETTY_PRINT);

            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        //Get a single post base on ID
        public function getSinglePost(){
            try{
                getHeaders();

                $postArray = [];
                $id = $_GET['id'] ?? null;
                $id = $this->conn->real_escape_string($id);

                if($id){
                    $sql = "SELECT * FROM posts WHERE post_id = '$id'";
                    $result = $this->conn->query($sql);

                    if($result){
                        while($row = $result->fetch_assoc()){
                        $postArray['post'] = $row;
                        }
                    }
                }

                // echo "<pre>";
                echo json_encode($postArray, JSON_PRETTY_PRINT);
                
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }
        //Get post by category
        public function getPostsByCategory(){
            try{
                getHeaders();
                $cat_id = $_GET['cat_id'] ;
                $cat_id = $this->conn->real_escape_string($cat_id);
                $postsArray = [];


                if($cat_id){
                    $sql = "SELECT * FROM posts WHERE post_category_id = '$cat_id' ";
                    $result = $this->conn->query($sql);
                    
                    if($result){
                        while($row = $result->fetch_assoc()){
                            $postsArray['posts'][]= $row;
                        }
                    }
                }
               
                // echo "<pre>";

                echo json_encode($postsArray, JSON_PRETTY_PRINT);

            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }
    }
?>

22477837006