<?php

    namespace app;
    // require "controllers/CategoriesController.php";
    // use app\controllers\PostsController;
    // use app\controllers\CategoriesController;

    class ControllersHandler {
        

        static function requestProcessor($request_url, $routes){
            try{
                
                foreach($routes as $key => $route){
                    if($key !== $request_url){
                        continue;
                    }
                    // Getting controller and method
                    $routeFile = explode('@', $route[0]);

                    $className = $routeFile[0];
                    $methodName = $routeFile[1];

                    // Checking if the controller exists
                    if(!file_exists('controllers/' . $className. '.php')){
                        return "Controller not found";
                    }
                    require('controllers/' . $className. '.php');
                    // (new PostsController())->$methodName(); exit;
                    // (new $className())->$methodName(); exit;

                    $class =  "app\controllers\\$className";
                    (new $class())->$methodName();
                
                }
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }
    }

?>