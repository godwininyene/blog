<?php
    namespace config;
    use mysqli;


    class DB{
        private $server = 'localhost';	
        private $username = 'root';
        private $password = '';
        private $db = 'blog';
        public $conn = null;

        // Establishing Database Connection
        public function connectDb(){
            $this->conn = new mysqli($this->server, $this->username, $this->password, $this->db);

            // Checking connection
            if($this->conn->error){
                die("Failed to connect to database: " . $this->conn->error);
            }

           return $this->conn;
        }

    }
?>