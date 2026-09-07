
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
## A simple, flat layout separates public web files from private code—without needing classes, namespaces, or complex routing.

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

-------------------------------------------------
# MVC

For small to mid-sized applications, a **Vanilla MVC (Model-View-Controller)** structure is strictly superior to a traditional procedural structure. It keeps business logic, database queries, and UI templates separated, making your codebase maintainable and extensible.

Here is the recommended production-ready directory layout for a Vanilla PHP MVC application:

```text
my-app/
├── app/
│   ├── Controllers/       # Handles HTTP requests & responses
│   │   ├── AuthController.php
│   │   └── UserController.php
│   ├── Models/            # Database queries & business logic
│   │   └── User.php
│   ├── Views/             # HTML templates / UI components
│   │   ├── auth/
│   │   │   └── login.php
│   │   └── users/
│   │       └── index.php
│   ├── Core/              # Core framework functionality
│   │   ├── Database.php   # PDO connection setup
│   │   └── Router.php     # Map URLs to Controllers
│   └── helpers.php        # Utility functions
├── config/
│   └── database.php       # DB credentials & app settings
├── public/                # Document Root (Only directory exposed to web)
│   ├── index.php          # Front Controller (Single entry point)
│   ├── css/
│   ├── js/
│   └── .htaccess          # URL rewriting (Routes all requests to index.php)
├── storage/               # File uploads, logs, cache
│   └── logs/
├── .env                   # Environment variables (DB password, API keys)
├── .gitignore
└── composer.json          # Autoloading via PSR-4

```

### Key Structural Principles

* **Web Root Isolation:** Set your web server (Apache/Nginx) document root directly to the `/public` folder. This prevents public access to `.env`, application logic, or database configuration files.
* **Single Entry Point (`public/index.php`):** All web requests route through `index.php` via rewrite rules. It loads dependencies, parses the URL, and invokes the appropriate controller.
* **PSR-4 Autoloading:** Utilize Composer to automatically load classes based on namespaces (e.g., `App\Controllers\UserController`) instead of writing manual `require_once` statements across your files.

---

### Core Structural Breakdown

| Directory | Purpose | Typical Contents |
| --- | --- | --- |
| `app/Controllers/` | Parses request data and prepares response view data | `HomeController.php`, `ProductController.php` |
| `app/Models/` | Handles database interactions and data validation | `User.php`, `Order.php` |
| `app/Views/` | Rendered HTML output using minimal inline PHP | `layouts/main.php`, `partials/header.php` |
| `app/Core/` | Low-level architecture classes | `Router.php`, `Controller.php`, `Database.php` |
| `public/` | Asset files and the primary `index.php` execution entry | `css/style.css`, `js/app.js`, `.htaccess` |

---

### Procedural vs. Vanilla MVC

* **Procedural Architecture:** Direct file-to-URL matching (e.g., accessing `[example.com/user_profile.php](https://example.com/user_profile.php)` executes SQL queries and prints HTML in a single file). While fast to set up for scripts under 100 lines, it leads to massive code duplication, difficult debugging, and severe security risks (like accidental `.env` exposure).
* **Vanilla MVC Architecture:** Separates data handling, application flow, and layout rendering. Route logic is clean, components are reusable, and application files remain securely isolated outside the public web root.

