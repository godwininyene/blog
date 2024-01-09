<?php
    // namespace app\functions;
    function getHeaders(){
        // Allow from any origin
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: *");
        header("Access-Control-Allow-Headers: *");
    }
?>