Its not a the best way to determine whether the form was submitted.
```php
if (isset($_POST['submit'])) {
```

A better approach is checking the HTTP request method:

Why?

Because you're really asking:

"Did this page receive a POST request?"

rather than:

"Does a field called submit exist?" <button type="submit">Submit</button>
```php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
```


```php

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['fname'];
  $age = $_POST['age'];
  $country = $_POST['country'];

  var_dump($age);

  echo 'Hello, my name is ' . $name . '<br>';
  echo  "I am $age years old. <br>";
  echo  "I live in the $country. <br><br>";
}

?>




<form method="POST">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>

  <label for="lname">Age:</label><br>
  <input type="text" id="lname" name="age"><br>

  <label for="lname">Country:</label><br>
  <input type="text" id="lname" name="country"><br><br>

  <button type="submit" name="submit">Submit</button>
</form>

```
