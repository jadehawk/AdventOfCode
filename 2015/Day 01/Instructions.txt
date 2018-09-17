to create a blank "jest" test enviroment for vanilla Javascript


1. - create project folder
2. - 'CD' into folder
3. - run from shell [   npm init -y   ] the -y just accepts defaults with no prompt
4. - run from shell [   npm i -D jest ] this installs "jest" and sets as Dependancy.
5. - open file [ package.json ] change the "script / test" line to read "test":"jest --watchAll"

now you are ready.

6. run from shell [ npm test ] to start jest 