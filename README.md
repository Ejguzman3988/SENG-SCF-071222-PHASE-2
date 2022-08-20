# SENG-SCF-071222-PHASE-2

## Github Commands

- git status
- git add .
- git commit -m "present tense, active voice commit"
- git remote -v
- git pull `remote-name` main
  - `remote-name` is what you named your other remote. Most of you have `mainRemote`
  - it should be:
    - `git pull mainRemote main`
- If you run into errors or warnings try to force the
- git pull --ff `remote-name` main
  1.  Accept both incoming changes on vscode
  1.  Then add and commit changes

### What to do if git push is giving you a permission error?

[Follow this video so you don't lose your work](https://youtu.be/ALGkjl1bz_M)

1. `git remote -v` will list the remote repository you have set.
   1. If the remote that you have for your origin says learn-co-curriculum you cloned the wrong repo.
1. `git remote remove origin` will remove the origin with learn-co-curriculum
1. Navigate to canvas find the specific lab and clone it
1. Copy the ssh github link for your newly forked repository
1. `git remote add origin <PasteLinkHere>` This will add the link we pasted to your origin and allow you to push your changes on your repo.

## HOTKEYS:

**WINDOWS**

1. ctrl + c - copy
1. ctrl + v - paste
1. ctrl + s - save
1. ctrl + / - comment out
1. ctrl + d - highlight multiple of the same words
1. alt + down/up - move a line down or up respectively
1. alt + shift + down/up - copy a line down or up respectively

**MACOS**

1. cmd + c - copy
1. cmd + v - paste
1. cmd + s - save
1. cmd + / - comment out
1. cmd + d - highlight multiple of the same words
1. option + down/up - move a line down or up respectively
1. option + shift + down/up - copy a line down or up respectively

**MAC**

## EXTENSIONS:

1. [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

1. [code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Printing out Worksheet

1. Make sure you push your changes via git
1. Navigate to your directory on github
1. Go to the index.js file on github
1. press ctrl + p to print out the formatted view of the page.
