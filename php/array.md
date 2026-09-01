Accessing array by its `index`

```php
$fruits = ['mansanas','saging', 'papaya'];

echo $fruits[0]; // output mansanas
echo $fruits[2]; // output papaya
```

Print its value to the browser with foreach
```php
foreach ($fruits as $fruit) {
    echo $fruit . "<br>";
}
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
`foreach` With Associative Arrays
```php
foreach ($person as $key => $value) {
    echo "$key: $value<br>";
}
//browser output

name: Damian
age: 25
country: Philippines
```
Nested Array



```php
// This is a very Important Concept
// You should start recognizing this structure `An array containing associative arrays`
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





Updated info modern PHP code commonly uses the shorter syntax(`[]`) for creating an array:
```php
$users = [
    [
        'name' => 'Damian',
        'age' => 25,
        'country' => 'Philippines',
    ],
    [
        'name' => 'John',
        'age' => 30,
        'country' => 'Japan',
    ],
    [
        'name' => 'Maria ',
        'age' => 28,
        'country' => 'Canada',
    ],
];
```




## Printing array in the browser
```php
# 1: var_dump()
echo "<pre>";
var_dump($users); // showing array index position and data types
echo "</pre>";
```
```php
# 2 print_r()
echo "<pre>";
print_r($users); // showing array index position
echo "</pre>";
```
```php
# 3 json_encode();
echo '<pre>';
echo json_encode($users, JSON_PRETTY_PRINT);
echo '</pre>';
```

## Array of a hundred books

```php
<?php

$books = [
    [
        'title' => 'The Great Gatsby',
        'author' => 'F. Scott Fitzgerald',
        'year' => 1925,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'To Kill a Mockingbird',
        'author' => 'Harper Lee',
        'year' => 1960,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => '1984',
        'author' => 'George Orwell',
        'year' => 1949,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Pride and Prejudice',
        'author' => 'Jane Austen',
        'year' => 1813,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Catcher in the Rye',
        'author' => 'J.D. Salinger',
        'year' => 1951,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Hobbit',
        'author' => 'J.R.R. Tolkien',
        'year' => 1937,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Fahrenheit 451',
        'author' => 'Ray Bradbury',
        'year' => 1953,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Jane Eyre',
        'author' => 'Charlotte Brontë',
        'year' => 1847,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Animal Farm',
        'author' => 'George Orwell',
        'year' => 1945,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Lord of the Flies',
        'author' => 'William Golding',
        'year' => 1954,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Diary of a Young Girl',
        'author' => 'Anne Frank',
        'year' => 1947,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Little Prince',
        'author' => 'Antoine de Saint-Exupéry',
        'year' => 1943,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Chronicles of Narnia',
        'author' => 'C.S. Lewis',
        'year' => 1950,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Gone with the Wind',
        'author' => 'Margaret Mitchell',
        'year' => 1936,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Fellowship of the Ring',
        'author' => 'J.R.R. Tolkien',
        'year' => 1954,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Two Towers',
        'author' => 'J.R.R. Tolkien',
        'year' => 1954,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Return of the King',
        'author' => 'J.R.R. Tolkien',
        'year' => 1955,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Alchemist',
        'author' => 'Paulo Coelho',
        'year' => 1988,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Da Vinci Code',
        'author' => 'Dan Brown',
        'year' => 2003,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Sorcerer’s Stone',
        'author' => 'J.K. Rowling',
        'year' => 1997,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Chamber of Secrets',
        'author' => 'J.K. Rowling',
        'year' => 1998,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Prisoner of Azkaban',
        'author' => 'J.K. Rowling',
        'year' => 1999,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Goblet of Fire',
        'author' => 'J.K. Rowling',
        'year' => 2000,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Order of the Phoenix',
        'author' => 'J.K. Rowling',
        'year' => 2003,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Half-Blood Prince',
        'author' => 'J.K. Rowling',
        'year' => 2005,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Harry Potter and the Deathly Hallows',
        'author' => 'J.K. Rowling',
        'year' => 2007,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Hunger Games',
        'author' => 'Suzanne Collins',
        'year' => 2008,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Catching Fire',
        'author' => 'Suzanne Collins',
        'year' => 2009,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Mockingjay',
        'author' => 'Suzanne Collins',
        'year' => 2010,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Twilight',
        'author' => 'Stephenie Meyer',
        'year' => 2005,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Kite Runner',
        'author' => 'Khaled Hosseini',
        'year' => 2003,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'A Thousand Splendid Suns',
        'author' => 'Khaled Hosseini',
        'year' => 2007,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Life of Pi',
        'author' => 'Yann Martel',
        'year' => 2001,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Book Thief',
        'author' => 'Markus Zusak',
        'year' => 2005,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Fault in Our Stars',
        'author' => 'John Green',
        'year' => 2012,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Divergent',
        'author' => 'Veronica Roth',
        'year' => 2011,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Girl with the Dragon Tattoo',
        'author' => 'Stieg Larsson',
        'year' => 2005,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Slaughterhouse-Five',
        'author' => 'Kurt Vonnegut',
        'year' => 1969,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Catch-22',
        'author' => 'Joseph Heller',
        'year' => 1961,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Brave New World',
        'author' => 'Aldous Huxley',
        'year' => 1932,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Odyssey',
        'author' => 'Homer',
        'year' => -800,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Crime and Punishment',
        'author' => 'Fyodor Dostoevsky',
        'year' => 1866,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'War and Peace',
        'author' => 'Leo Tolstoy',
        'year' => 1869,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Anna Karenina',
        'author' => 'Leo Tolstoy',
        'year' => 1878,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Count of Monte Cristo',
        'author' => 'Alexandre Dumas',
        'year' => 1844,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Les Misérables',
        'author' => 'Victor Hugo',
        'year' => 1862,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Moby-Dick',
        'author' => 'Herman Melville',
        'year' => 1851,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Picture of Dorian Gray',
        'author' => 'Oscar Wilde',
        'year' => 1890,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Dracula',
        'author' => 'Bram Stoker',
        'year' => 1897,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Frankenstein',
        'author' => 'Mary Shelley',
        'year' => 1818,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Adventures of Tom Sawyer',
        'author' => 'Mark Twain',
        'year' => 1876,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Adventures of Huckleberry Finn',
        'author' => 'Mark Twain',
        'year' => 1884,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Great Gatsby',
        'author' => 'F. Scott Fitzgerald',
        'year' => 1925,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'Don Quixote',
        'author' => 'Miguel de Cervantes',
        'year' => 1605,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Iliad',
        'author' => 'Homer',
        'year' => -750,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Divine Comedy',
        'author' => 'Dante Alighieri',
        'year' => 1320,
        'url' => 'https://openlibrary.org'
    ],
    [
        'title' => 'The Canterbury Tales',
        'author' => 'Geoffrey Chaucer',
        'year' => 1400,
        'url' => 'https://openlibrary.org'

```
