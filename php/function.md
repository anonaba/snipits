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

# Filter array with named function
```php

  <?php

  $books = [
    [
      'title' => 'The Great Gatsby',
      'author' => 'F. Scott Fitzgerald',
      'release_date' => '1925-04-10',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'Tender Is the Night',
      'author' => 'F. Scott Fitzgerald',
      'release_date' => '1934-04-12',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'To Kill a Mockingbird',
      'author' => 'Harper Lee',
      'release_date' => '1960-07-11',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => '1984',
      'author' => 'George Orwell',
      'release_date' => '1949-06-08',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'The Hobbit',
      'author' => 'J.R.R. Tolkien',
      'release_date' => '1937-09-21',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'Pride and Prejudice',
      'author' => 'Jane Austen',
      'release_date' => '1813-01-28',
      'url' => 'https://goodreads.com'
    ]
  ];



  function filteredByAuthor(array $books, string $author): array
  {


    $filtered_books = [];

    foreach ($books as $book) {
      if ($book['author'] === $author) {
        $filtered_books[] = $book;
      }
    }

    return  $filtered_books;
  };

  $filtered_books = filteredByAuthor($books, 'F. Scott Fitzgerald');

    More flexible than above code 👆
 // function filter(array $items, string $key, int $value): array
  // {


  //   $filtered_items = [];

  //   foreach ($items as $book) {
  //     if ($book[$key] === $value) {
  //       $filtered_items[] = $book;
  //     }
  //   }

  //   return  $filtered_items;
  // };

  // $filtered_books = filter($books, 'release_date', 1813);




  ?>

  <ul>

    <?php foreach ($filtered_books as $book) : ?>
      <li>
        <a href=<?= $book['url'] ?>>
          <?= $book['title'] ?>
        </a>
      </li>
    <?php endforeach ?>

  </ul>




```


# Filter array with Anonymous or Lambda function
```php
  <?php

  $books = [
    [
      'title' => 'The Great Gatsby',
      'author' => 'F. Scott Fitzgerald',
      'release_date' => '1925-04-10',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'Tender Is the Night',
      'author' => 'F. Scott Fitzgerald',
      'release_date' => '1934-04-12',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'To Kill a Mockingbird',
      'author' => 'Harper Lee',
      'release_date' => '1960-07-11',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => '1984',
      'author' => 'George Orwell',
      'release_date' => '1949-06-08',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'The Hobbit',
      'author' => 'J.R.R. Tolkien',
      'release_date' => '1937-09-21',
      'url' => 'https://goodreads.com'
    ],
    [
      'title' => 'Pride and Prejudice',
      'author' => 'Jane Austen',
      'release_date' => '1813-01-28',
      'url' => 'https://goodreads.com'
    ]
  ];


  $filteredByAuthor = function (array $books, string $author): array {


    $filtered_books = [];

    foreach ($books as $book) {
      if ($book['author'] === $author) {
        $filtered_books[] = $book;
      }
    }

    return  $filtered_books;
  };

  $filtered_books = $filteredByAuthor($books, 'F. Scott Fitzgerald');




  ?>




  <ul>

    <?php foreach ($filtered_books as $book) : ?>
      <li>
        <a href=<?= $book['url'] ?>>
          <?= $book['title'] ?>
        </a>
      </li>
    <?php endforeach ?>

  </ul>
```

