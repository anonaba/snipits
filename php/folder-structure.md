
## Basics Folder structure V1
```text
my-project/
├── css/
│   └── style.css
├── img/
│   └── logo.png
├── js/
│   └── main.js
├── includes/
│   ├── db.php             # Database connection setup
│   ├── functions.php      # Helper functions (e.g., formatters, reusable logic)
│   ├── header.php         # HTML <head>, navbar, CSS links
│   └── footer.php         # Closing tags, JS scripts
├── contact.php
├── index.php
└── shirts.php
```

## Basics Folder structure V2
```text
my-website/
├── config/
│   └── db.php             # Private: DB credentials
├── includes/
│   ├── header.php         # Private: Shared UI
│   └── functions.php      # Private: Helper functions
├── css/                   # Public assets
│   └── style.css
├── img/                   # Public assets
│   └── logo.png
├── index.php              # Public entry points in root
├── contact.php
└── shirts.php
```
