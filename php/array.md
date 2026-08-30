Accessing array by its `index`

```php
$fruits = ['mansanas','saging', 'papaya'];

echo $fruits[0]; // output mansanas
echo $fruits[2]; // output papaya
```

Adding Items in an `array`
```php
$fruits[] = "Mango"; // Mango will add to last index of $fruits array
```

You can also explicitly specify an index:
But most of the time, when adding to the end, you'll use:👆 👉 syntax `$fruits[] = "Mango";`
```php
$fruits[4] = "Grapes";
```

Associative Arrays

Instead of numeric indexes:
```php
$person = [
    "Damian",
    25,
    "Philippines"
];
```

You can give each value a meaningful key:
```php
$person = [
    "name" => "Damian",
    "age" => 25,
    "country" => "Philippines"
];

echo $person["name"]; // output Damian
```

```php
$users = array(
  array(
    'name' => 'Damian',
    'age' => 25,
    'country' => 'Philippines',
  ),
  array(
    'name' => 'John',
    'age' => 30,
    'country' => 'Japan',
  ),
  array(
    'name' => 'Maria ',
    'age' => 28,
    'country' => 'Canada',
  ),
);

```

## Printing array in the browser


```php
# 1: var_dump()
echo "<pre>";
var_dump($users);
echo "</pre>";
```
```php
# 2 print_r()
echo "<pre>";
print_r($users);
echo "</pre>";
```
```php
# 3 json_encode();
echo '<pre>';
echo json_encode($users, JSON_PRETTY_PRINT);
echo '</pre>';
```
