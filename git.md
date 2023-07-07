# git starting
1.  git --version  / git version 2.37.1.windows.1
1.  modal창 / homebrew  : $brew install git /
1. 
1.  git version 2.37.1.windows.1
PS C:\Users\user\Naver MYBOX\coding\fastcampus.co.kr\초단기완성_14일만에> git helper
git: 'helper' is not a git command. See 'git --help'.

The most similar command is
        env--helper
PS C:\Users\user\Naver MYBOX\coding\fastcampus.co.kr\초단기완성_14일만에> git help
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


# github starting 
1.  github 회원가입 / 이메일로 

# git 실행하기 
1.   실행하고자하는 디렉토리에서
1.  git init 버전관리하겠다고 선언함
1.  git config --global core.autocrlf true (window)  / ...autocrlf input(mac)
1.  git config --global user.name 'kchstar'
1.  git config --global user.email 'kchstar@outlook.com'
1.  git config --global --list / 확인용
    1.  core.autocrlf=true
        user.name=kchstar
        user.email=kchstar@outlook.com
        user.address=kchstar@gmail.com
        filter.lfs.clean=git-lfs clean -- %f
        filter.lfs.smudge=git-lfs smudge -- %f
        filter.lfs.process=git-lfs filter-process
        filter.lfs.required=true
        safe.directory=*
        :
1.  git status  / 등록확인용  / 빨강색으로 준비된것을 확인한다.
1.  
