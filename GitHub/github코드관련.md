## 다른 레파짓 합치기

git subtree add --prefix=i_am_rich https://github.com/fomagran/i_am_rich.git main
git push origin HEAD:main

## 레파짓 초기 세팅

…or create a new repository on the command line
echo "# testing" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/haileyham/testing.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/haileyham/testing.git
git branch -M main
git push -u origin main

