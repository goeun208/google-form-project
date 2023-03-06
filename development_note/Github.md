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

```
다음은 여러가지 상황에서 자주 사용하는 깃 명령입니다:

작업 공간 시작 (참고: git help tutorial)
   clone     저장소를 복제해 새 디렉터리로 가져옵니다
   init      빈 깃 저장소를 만들거나 기존 저장소를 다시 초기화합니다

변경 사항에 대한 작업 (참고: git help everyday)
   add       파일 내용을 인덱스에 추가합니다
   mv        파일, 디렉터리, 심볼릭 링크를 옮기거나 이름을 바꿉니다
   restore   Restore working tree files
   rm        파일을 작업 폴더에서 제거하고 인덱스에서도 제거합니다

커밋 내역과 상태 보기 (참고: git help revisions)
   bisect    이진 탐색으로 버그를 만들어낸 커밋을 찾습니다
   diff      커밋과 커밋 사이, 커밋과 작업 내용 사이 등의 바뀐 점을 봅니다
   grep      패턴과 일치하는 줄을 표시합니다
   log       커밋 기록을 표시합니다
   show      여러가지 종류의 오브젝트를 표시합니다
   status    작업 폴더 상태를 표시합니다

커밋 내역을 키우고, 표시하고, 조작하기
   branch    브랜치를 만들거나, 삭제하거나, 목록을 출력합니다
   commit    바뀐 사항을 저장소에 기록합니다
   merge     여러 개의 개발 내역을 하나로 합칩니다
   rebase    커밋을 다른 베이스 끝의 최상위에서 적용합니다
   reset     현재 HEAD를 지정한 상태로 재설정화합니다
   switch    Switch branches
   tag       태그를 만들거나, 표시하거나, 삭제하거나, GPG 서명을 검증합니다
```
