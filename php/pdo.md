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

//SQLITE
try {
  $db = new PDO('sqlie:database', null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
  echo "Connected successfully to the database!\n";
} catch (PDOException $e) {
  echo 'Could not connect to the database ';
  echo "Reason: " . $e->getMessage() . "\n";
  die();
}

```

# Testing for query

```php
try {
  $result = $db->query("select * from table");
  echo 'Query ran succecfully';
} catch (Exception $e) {
  echo 'Data could not be retrieved from the database';
}
```

SQLITE Testing
```php
try {
  $db = new PDO("sqlite:databasenName");
} catch (Exception $e) {
  echo 'Could not connect to the database';
  die();
}

try {
  $result = $db->query("select * from products");
} catch (Exception $e) {
  echo 'Data could not be retrieved from the database';
}


echo "<pre>";
var_dump($result->fetchAll(PDO::FETCH_OBJ));
echo "</pre>";
```
