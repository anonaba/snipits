# Testing for connection

if the Exception did not echo print but success it means connected to the database
```php
<?php

try {
  $db = new PDO('mysql:host=localhost;dbname=databaseNamehere;charset=utf8mb4', 'root', '');
} catch (Exception $e) {
  echo 'Could not connect to the database';
  die();
}

echo 'success';
```
