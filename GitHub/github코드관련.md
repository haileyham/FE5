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

## git commit 직전 내용 수정(push한 상태)

git commit --amend -m "수정할 사항"
git push --f (git push --force)
<!-- 브랜치면 git push origin 브랜치명 --f -->


## 마지막 커밋 되돌리기
### revert (커밋 내용 되돌리기)
git revert <commitName>
<!-- 해당 커밋의 내용을 되돌리는 새로운 커밋을 남긴다. -->
### reset (커밋 삭제)
<!-- 작업 지점 이후 항목을 모두 삭제한다. 커밋 기록이 변경 -->
git reset --soft HEAD~
<!-- 커밋되지 않은 변경사항 삭제 X -->
git reset --hard HEAD~
<!-- 커밋되지 않은 변경사항 삭제 O -->


## 커밋 메시지 수정
### 마지막 커밋 메시지 수정
git commit --amend
<!-- esc + :wq → 빠져나가기 -->
git commit --amend -m “메시지”


## 커밋 직후 빠진 파일 추가

git commit -m “메시지”
<!--  마지막 커밋 -->
git add 파일
<!--  추가할 파일 add -->
git commit --amend
 <!--  합치기 -->
esc + :wq 
<!--  빠져나가기 -->

## 스테이지 리셋
