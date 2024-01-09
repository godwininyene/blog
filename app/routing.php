<?php

    //Getting request URL
    $request_url = $_SERVER['REQUEST_URI'];

    //Extracting base URL
    if(str_contains($request_url, '?')){
        $request_url = explode('?', $request_url)[0];
    }

    //Registering all available routes
   $routes = [
    '/blog/app/posts'=>['PostsController@getPostsFromDb'],
    '/blog/app/searchPosts'=>['PostsController@searchPosts'],
    '/blog/app/singlePost'=>['PostsController@getSinglePost'],
     '/blog/app/categories'=>['CategoriesController@getCategories'],
     '/blog/app/posts/category'=>['PostsController@getPostsByCategory']
   ];

   //Checking if requested route is available
   $allRoutes = array_keys($routes);

   if(!in_array($request_url, $allRoutes)){
        header("http/ 1.1 404 Not Found");
        exit;
   }

   require('ControllersHandler.php');
   use app\ControllersHandler;

   ControllersHandler::requestProcessor($request_url, $routes);
?>