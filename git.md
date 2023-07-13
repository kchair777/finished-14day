# git starting
1.  git init
1.  git status
1.  git add . 
1.  git status
1.  git commit -m 'java'
1.  git remote add origin https://github.com/kchair666/finished-14day.git
1.  git push -u origin main |  git push -u master_1 // 하단에 표시된 브렌치에 push
1.  아래와 같이 실행됨 
    commit 87e0119e608751118f85ed1ead5d48031fb5297e (HEAD -> master_1, master_1/master_1)
    Author: kchair <kchair@knou.ac.kr>
    Date:   Thu Jul 13 12:59:30 2023 +0900

    java-test_1

usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.


1.  git branch help | help branch추가 
1.  git branch -c master | master추가
1.  git branch -d help | help 삭제함
1.  git checkout branch -branch명(main) 
1.  git branch -m old-branch new-branch
1.  git 