# 필수 과제

> 할일 리스트 만들기

# stack

- react
- styled-component

# deploy

> https://mobiliverse-to-do-list-react.netlify.app/

> https://bongjunk.github.io/todo_list/

# 참고

- 가현씨와 정윤씨 폴더 속에는 "npx create-react-app ./" 명령어를 통해 생성 된 리액트 프로젝트 파일이 존재합니다.
- 터미널을 실행시키고 본인의 폴더로 이동해 주세요. ex) /Users/sejinjang/intern-project/to_do_list_react/ga_hyeon
- node_modules을 생성하기 위해 "npm install"을 실행시켜주세요. (node_modules은 용량이 너무 커서 .gitignore파일에 등록 되어 remote를 통해 주고받지 않습니다. "npm install"를 실행하면 package.json 파일에 dependencies, devDependencies에 입력 된 라이브러리들이 로컬에 설치하면서 node_modules가 설치됩니다.) https://davinchicoder.tistory.com/entry/NPM-dependencies%EC%99%80-devDependecies%EC%9D%98-%EC%B0%A8%EC%9D%B4
- "npm run start" 명령어를 통해 프로젝트를 확인할 수 있습니다.
- src/App.js 파일을 작성해서 화면을 구성하시면 됩니다.

## 리액트의 폴더 구조

프로젝트를 진행하다 보면 크기가 커질수록 관리해야할 파일은 늘어나고 이에 따라 각 파일들을 용도에 맞게 분류해야할 필요가 생깁니다.

그래서 오늘은 리액트를 사용할 때 폴더의 구조를 어떻게 잡으면 좋을지에 대해 다뤄보려고 합니다.

물론 구조는 절대적인 방법은 없으며 프로젝트의 규모나 분류 기준에 따라 구조는 달라질 수 있기 때문에 보편적으로 많이 사용되는 구조를 다뤄보겠습니다.

먼저 CRA를 설치했을 때 기본적으로 설치되는 폴더 및 파일들의 역할에 대해서 간단히 살펴보겠습니다.

## CRA의 초기 폴더구조

```
my-app
├── node_modules (default)
├── public (default)
├── src (default)
├── .gitignore (default)
├── package-lock.json (default)
├── package.json (default)
└── README.md (default)
```

- node_modules : 현재 프로젝트에 포함된 라이브러리들이 설치되어 있는 폴더로 보통 깃과 같은 저장소에 올릴 때는 이 폴더를 함께 올리지 않습니다.

- public : index.html과 같은 정적 파일이 포함되는 곳으로 컴파일이 필요 없는 파일들이 위치하는 폴더입니다.

- src : 리액트 내부에서 작성하는 거의 모든 파일들이 이 폴더 내부에서 작성되며 이 폴더에 있는 파일들은 명령어에 따라 JS로 컴파일이 진행됩니다.

- .gitignore : 깃에 포함하고 싶지 않은 파일의 이름 혹은 폴더등을 입력하는 파일입니다.

- pagkage-lock.json : https://calssess.tistory.com/138?category=858141

- package.json : 프로젝트에 관련된 기본적인 내용(프로젝트의 이름, 버전 등)과 라이브러리들의 목록이 포함되어 있습니다. 라이브러리가 설치된 node_modules 대신에 이 package json을 깃에 포함하여 올리게 되며 후에 누군가가 프로젝트를 클론할 때 이 package.json에 적혀있는 라이브러리의 목록을 기준으로 npm에서 설치하게 됩니다.

- README.md : 보통 깃과 같은 저장소에 올릴 때 프로젝트에 대한 설명을 작성하는곳으로 해당 저장소에 진입하면 가장 먼저 띄워집니다.

## src 내부 폴더구조

```
└─ src
 ├─ components
 ├─ assets
 ├─ hooks (= hoc)
 ├─ pages
 ├─ constants
 ├─ config
 ├─ styles
 ├─ services (= api)
 ├─ utils
 ├─ App.css (default)
 ├─ App.js (default)
 ├─ App.test.js (default)
 ├─ index.css (default)
 ├─ index.js (default)
 ├─ logo.svg (default)
 ├─ reportWebVitals.js (default)
 └─ setupTests.js (default)
```

- components : 재사용 가능한 컴포넌트들이 위치하는 폴더입니다. 컴포넌트는 매우 많아질 수 있기 때문에 이 폴더 내부에서 하위폴더로 추가로 분류하는 경우가 많습니다.

- assets : 이미지 혹은 폰트와 같은 파일들이 저장되는 폴더입니다. 이미지와 같은 파일들을 public에 직접 넣는 경우도 있는데 둘의 차이는 컴파일시에 필요한지 여부입니다. 파비콘과 같이 index.html내부에서 직접 사용하여 컴파일 단계에서 필요하지 않은 파일들은 public에 반면, 컴포넌트 내부에서 사용하는 이미지 파일인 경우 이 assets 폴더에 위치시켜야 합니다.

- hooks (= hoc) : 커스텀 훅이 위치하는 폴더입니다.

- pages : react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치시킵니다.

- constants : 공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더입니다.

- config : config 파일이 많지 않은 경우 보통 최상위에 위치시켜놓지만 여러개의 config 파일이 있을 경우 폴더로 분리하기도 합니다.

- styles : css 파일들이 포함되는 폴더입니다.

- services (= api) : 보통 api관련 로직의 모듈 파일이 위치하며 auth와 같이 인증과 관련된 파일이 포함되기도 합니다.

- utils : 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더입니다.

위 내용을 따라서 폴더 구조를 분리 할 경우 이렇게 용도에 맞게 폴더별로 적절하게 분리된 모습을 볼 수 있습니다.
