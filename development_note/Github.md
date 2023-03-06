# 깃허브 (GitHub)

### 깃허브 명령어

merge시 발생하는 conflict

Accept Current Change - 헤드 부분을 적용

Accept Incoming Change - 변경된 부분을 적용 (병합 대상이 된 브랜치의 내용으로 변경)

Accept Both Changes - 둘 다 적용

Compare Changes - Conflict가 발생된 부분을 보기쉽게 보여줌

### git add

- 폴더에서 작업한 파일을 stage에 올릴때 사용하는 명령어
- add한 파일이 tracked 상태가 됨(git이 관리하는 대상)

```
// 변경된 파일 전부
$git add .
// 올리고 싶은 파일 업로드
$git add file1, file2
```

### git commit

- stage에 추가한 수정 파일을 git 저장소에 저장
- stage에 올려놓지 않은 파일은 commit 되지않음

```
// 커밋 메세지
$git commit -m "commit message"
```

### git push

- commit한 파일을 원격 저장소에 올리는 명령어

```
// git push <원격저장소 이름><브랜치 이름>
$git push origin main
```

### git commit --amend

    git commit --amend -m "commit message"

- 가장 최근 커밋을 수정하는 편리한 방법
- 새 커밋을 전체적으로 생성하지 않아도 기존 커밋에 결합하여 덮어쓴다.

### Rebase

- 2개의 branch를 합칠 때 사용한다.
- merge와 비슷하나 merge는 두 branch의 최종결과만 합침
- rebase는 branch의 변경사항을 순서대로 다른 branch에 적용하면서 합친다.

### Pull Request

- branch에서 완료된 작업을 프로젝트 동료들끼리 리뷰하고, master로 합치도록 요청하는 명령어

### checkout

- branch를 변경하는 명령어

```
// git checkout <브랜치명>
$git checkout branch
```

### git switch, restore

- switch : 브랜치 변경
- restore : 작업중인 파일을 되돌림(복원)
  - 해당 명령어를 통해 원래 상태로 되돌림

```
// 브랜치 변경
$git switch branchName
// 기존에 존재하지 않는 브랜치 생성 후 변경
$git switch -c newBranchName

// 작업중인 파일 중 기존 마지막 커밋의 상태로 되돌림
$git restore test.tsx
```

### git stash

- 변경한 내용을 임시저장하는 명령어

```
$git stash
```

### git force push

- push를 강제로 하는 명령어

```
$git push -f
```

### git pull

- 업데이트된 코드를 내려받을때 저장소의 코드를 업데이트 할 때 사용

```
$git pull
```
