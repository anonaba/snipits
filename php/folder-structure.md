
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
----------------------------------------------
A simple, flat layout separates public web files from private code—without needing classes, namespaces, or complex routing.

```text
my-app/
├── config/
│   └── db.php             # Database connection setup
├── includes/              # Reusable page components
│   ├── header.php
│   ├── footer.php
│   └── functions.php      # Helper functions (sanitization, auth checks)
├── public/                # Web root (accessible from browser)
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── index.php          # Homepage
│   ├── login.php          # Login page & form handling
│   ├── dashboard.php      # Main app page
│   └── .htaccess          # Web server settings
├── uploads/               # User-uploaded files
├── .env                   # DB credentials & secrets (NEVER commit this)
└── .gitignore

```

### Core Rules for Basic PHP

* **Point Web Server to `/public`:** Your server (Apache/Nginx) should serve `/public` as the root directory. This ensures visitors can only access assets and page files, keeping `.env` and `config/` strictly protected.
* **Keep Reusables in `/includes`:** Pull common page pieces into your scripts using simple file inclusions:
```php
<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../includes/functions.php';
include __DIR__ . '/../includes/header.php';
?>

<h1>Welcome to Dashboard</h1>

<?php include __DIR__ . '/../includes/footer.php'; ?>

```


* **Store Config Outside Web Root:** Keep `config/db.php` out of the `/public` directory so database details aren't accidentally exposed if PHP ever stops parsing files properly.

