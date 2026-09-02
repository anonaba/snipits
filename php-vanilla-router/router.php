<?php

$url = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
  '/' => 'controllers/index.php',
  '/about' => 'controllers/about.php',
  '/contact' => 'controllers/contact.php',
];

function abort(int $code = 404): void
{
  http_response_code($code);

  // echo 'Sorry, Not found';
  require "views/$code.php";
  die();
}

if (array_key_exists($url, $routes)) {
  require $routes[$url];
} else {
  abort();
}



// if ($url === '/') {
//   require 'controllers/index.php';
// } else if ($url === '/about') {
//   require 'controllers/about.php';
// } else if ($url === '/contact') {
//   require 'controllers/contact.php';
// }
