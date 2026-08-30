```php
function add(int $a, int $b): int {
    return $a + $b;
}

echo add(1,1) // 2
```
# A Practical Example of function working with array
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


foreach ($users as $user) {
  echo describeUser($user) . "<br>";
}


function describeUser(array $user)
{
  return  "{$user['name']} - {$user['age']} - {$user['country']}";
}
```

