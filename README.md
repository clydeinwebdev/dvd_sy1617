#CS302 - DVD Repo

1. cd path
1. git init
1. git status
1. git add .
1. git commit -m "commit message here"
1. git remote add origin https://github.com/clydeinwebdev/dvd_sy1617.git
1. git push

#Laboratory Activity:Setup decodeApp boilerplate

1. Get tools from http://172.30.10.135/st
2. Fork decodeapp_boilerplate
3. Open git bash
   $ cd /d
   $ git clone   https://github.com/yourusername/decodeapp_boilerplate.git myapp
4. Verify if directory myapp has been created
5. Go back to git bash
   $ cd myapp
   $ npm install
   $ node server
6. Open your browser and navigate to http://localhost:4000
7. Apply some changes
8. Create new repo 'mydecodeapp'
9. Perform the following commands
	$ git add .
	$ git config user.email "email@example.com"
	$ git config user.name "username"
	$ git commit -m "first commit"
	$ git remote set-url origin https://github.com/yourusername/mydecodeapp.git
	$ git push -u origin master
10. Fin
