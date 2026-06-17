Steps to install mongoldb in Mac

1-  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2-brew tap mongodb/brew
brew install mongodb-community
3- Error: Refusing to load formula mongodb/brew/mongodb-community from untrusted tap mongodb/brew. Run brew trust --formula mongodb/brew/mongodb-community or brew trust mongodb/brew to trust it.

A - brew tap mongodb/brew
B-  brew trust mongodb/brew
C-   brew install mongodb-community

4- brew services start mongodb-community
5- mongod --version
mongosh
6- show dbs
7-use mydb
8-db.users.insertOne({
  name: "Rajashree",
  role: "Developer"
})
9- db.users.find()
