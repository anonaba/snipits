# Creating a `GitHub Repository Ruleset to Restrict Direct Branch Access`

This configuration blocks your collaborators from pushing code directly to `main` or `develop`, forces them to create pull requests, and allows only you to merge their changes.

------------------------------
## When to use this specific setup?
You should use this method whenever you fit into the following scenarios:

* 👥 **Small Team / Freelancer Work**: You own the project and have hired a few external freelancers, contractors, or student collaborators who you don't fully trust to modify production code directly.
* 🛑 **Preventing Accidental Commits**: You want to completely block people from running git push origin main by mistake and breaking your live application.
* 🛠️ **Solo Management**: You want to be the only person with the power to hit the "Merge" button on code, but you don't want to create formal GitHub "Organizations" or "Teams" just to get basic protection.
* 🔄 **Enforcing a Pull Request Workflow**: You want your collaborators to use a clean workflow—forcing them to work in separate feature branches and submit their work as a Pull Request (PR) for you to look over first.

------------------------------
## Step 1: Base Ruleset Settings

   1. At the top of your ruleset screen, locate the Ruleset name box and name it something like Protect Core Branches.
   2. Keep the enforcement status set to Active.

## Step 2: Set the Target Branches
Scroll down slightly to the Target branches section:

   1. Click the Add target button and select Include by name.
   2. In the text field, type main and press enter.
   3. Click Add target again, select Include by name, type develop, and press enter.

## Step 3: Add Yourself to the Bypass List
By default, Rulesets block everyone, including you. To ensure you retain full control:

   1. Scroll to the Bypass list section and click Add bypass.
   2. In the search box, search for your own username or select the Repository Admin / Owner role.
   3. Set the bypass type to Always allow. (This gives you permission to merge PRs and manage branches directly). [2, 6] 

## Step 4: Toggle the Code Restrictions
Scroll down to the Rules section:

   1. Uncheck Require a pull request before merging (so you don't get trapped by the team/reviewer error from earlier).
   2. Check the box next to Restrict updates. (This is the core setting: it prevents everyone except those on your bypass list from pushing to these branches).
   3. Check the box next to Block force pushes. (This ensures your collaborators cannot accidentally overwrite git history).

## Step 5: Save
Scroll all the way to the bottom of the page and click the green Save changes or Create ruleset button. 
------------------------------
## How your workflow changes now:

*  If your collaborators try to run `git push origin main` or `git push origin develop`, their command terminal will throw a red error rejecting the push.
* They will be forced to push their code to a new branch (e.g., `git push origin feature-xyz`) and open a ***Pull Request*** on GitHub.
* Because you are on the Bypass list, you will be able to review their Pull Request on GitHub and click the Merge button to push it live into `main` or `develop`.
* 




