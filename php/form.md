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

# Basic Form Validation
```php
<?php


$errors = [];

$name = '';
$email = '';
$age = '';
$country = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = trim($_POST['name']) ?? '';
  $email = trim($_POST['email'])  ?? '';
  $age = trim($_POST['age'])  ?? '';
  $country = trim($_POST['country'])  ?? '';



  // Name Validation
  if (empty($name)) {
    $errors['name'] = 'Name is required.';
  } else if (strlen($name) < 2) {
    $errors['name'] = 'Name is too short.';
  } else  if (strlen($name) > 100) {
    $errors['name'] = 'Name is too long.';
  }

  // Email Validation
  if (empty($email)) {
    $errors['email'] = 'Email is required.';
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email address.';
  }

  // Age Validation
  if (empty($age)) {
    $errors['age'] = 'Age is required.';
  } else if (!is_numeric($age)) {
    $errors['age'] = 'Age must be a number.';
  } else if ($age < 18 || $age > 100) {
    $errors['age'] = 'Age must be between 18 and 100.';
  }

  // Country Validation
  if (empty($country)) {
    $errors['country'] = 'Country is required.';
  }
}

?>




<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <form action=<?= htmlspecialchars($_SERVER['PHP_SELF']) ?> method="POST" novalidate>
    <!-- Name Field -->
    <div>
      <label for="user-name">Name:</label>
      <input type="text" id="user-name" name="name" value="<?php echo htmlspecialchars($name)  ?>">
      <?php if (isset($errors['name'])) : ?>
        <span style="color: red;"> <?= $errors['name'] ?> </span>
      <?php endif; ?>
    </div>

    <br>

    <!-- Email Field -->
    <div>
      <label for="user-email">Email:</label>
      <input type="email" id="user-email" name="email" value="<?php echo htmlspecialchars($email)  ?>">
      <?php if (isset($errors['email'])) : ?>
        <span style="color: red;"> <?= $errors['email'] ?> </span>
      <?php endif; ?>
    </div>

    <br>

    <!-- Age Field -->
    <div>
      <label for="user-age">Age:</label>
      <input type="number" id="user-age" name="age" value="<?php echo htmlspecialchars($age)  ?>">
      <?php if (isset($errors['age'])) : ?>
        <span style="color: red;"> <?= $errors['age'] ?> </span>
      <?php endif; ?>
    </div>

    <br>

    <!-- Country Field -->
    <div>
      <label for="user-country">Country:</label>
      <input type="text" id="user-country" name="country" value="<?php echo htmlspecialchars($country) ?>">
      <?php if (isset($errors['country'])) : ?>
        <span style="color: red;"> <?= $errors['country'] ?> </span>
      <?php endif; ?>
    </div>

    <br>

    <!-- Submit Button -->
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>


  <?php




  // check this two entities to echo
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($errors)) {
    echo 'Employee successfully registered! <br>';
    echo "Name $name <br>";
    echo "Email $email <br>";
    echo "Age $age <br>";
    echo "Country $country <br>";
  }




  ?>


</body>

</html>
```
