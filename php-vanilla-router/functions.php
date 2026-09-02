<?php

function dd(array | string $value): void
{

  echo "<pre>";
  var_dump($value);
  echo "</pre>";

  die();
}




function prnt_d(array | string $value): void
{

  echo "<pre>";
  print_r($value);
  echo "</pre>";

  die();
}

function is_url(string $value): string
{
  return $_SERVER['REQUEST_URI'] === $value;
}
