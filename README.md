# [클라썸] 구글 설문조사 Clone 만들기

[배포 링크](https://google-form-clone-project.vercel.app)

## 1. 구현 목록

### 기본 구현 사항

- [X] 사용자는 설문지 제목 추가, 편집 할 수 있다.
- [X] 사용자는 설문지 설명 추가, 편집 할 수 있다.
- [X] 시용자는 질문을 추가 할 수 있다.
  - [X] 단답형
  - [X] 장문형
  - [X] 객관식 질문
  - [X] 체크박스
  - [X] 드롭다운
- [X] 사용자는 질문을 복사할 수 있다.
- [X] 사용자는 질문을 삭제할 수 있다.
- [X] 사용자는 필수 옵션 설정 기능하다.
- [X] 사용자는 미리보기 아이콘을 눌러 작성한 설문에 대해 미리 볼 수 있다.
- [X] 사용자는 제출을 눌렀을 경우 사용자가 작성한 데이터를 볼 수 있다.

### 추가 구현 사항

- [X] 사용자는 양식 지우기를 통해 작성한 데이터를 볼 수 있다.

## 2. 시연 영상

[![썸네일](https://i.imgur.com/ZC6cBV1.png)](https://youtu.be/MJ6iVd_Ljbo)

## 3. 사용한 기술 스택

+ 언어: TypeScript
+ 라이브러리: React.js, React Router
+ 상태관리: Redux.js, RTK
+ 스타일링: Material UI, Emotion
+ 폴더구조: Atomic Design

## 4. 실행 방법

```bash
yarn install 

yarn start
```

## 5. 폴더 구조

```bash
 📂public
 ┃ 
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂img
 ┃ ┃ ┃ 
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂atoms // Atoms
 ┃ ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂FloatingButton
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂IconButton
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂Required
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂Select
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂Switch
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┗ 📂TextField
 ┃ ┃ ┃  
 ┃ ┃ ┣ 📂molecules // Molecules
 ┃ ┃ ┃ ┣ 📂FormAddButton
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂FormCard
 ┃ ┃ ┃ ┃ 
 ┃ ┃ ┃ ┣ 📂FormInput
 ┃ ┃ ┃ ┃ ┣ 📂CheckBoxInput
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┣ 📂DropDownInput
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┣ 📂RadioAndCheckBoxInput
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┣ 📂TextInput
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂FormViewer
 ┃ ┃ ┃ ┃ ┣ 📂CheckBoxViewer
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┣ 📂DropDownViewer
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┣ 📂RadioViewer
 ┃ ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┃ ┗ 📂TextViewer
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┣ 📂ResultTitleCard
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┣ 📂SelectionCard
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┣ 📂SelectionTitleCard
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┗ 📂TitleCard
 ┃ ┃ ┃ ┃
 ┃ ┃ ┣ 📂organisms // Organisms
 ┃ ┃ ┃ ┣ 📂MainContents
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┣ 📂Navigation
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┣ 📂ResultContents
 ┃ ┃ ┃ ┃
 ┃ ┃ ┃ ┗ 📂SelectionContents
 ┃ ┃ ┃
 ┃ ┃ ┣ 📂template // Template
 ┃ ┃ ┃ ┗ 📂Layout
 ┃ ┃ ┃ 
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂hooks
 ┃ ┃
 ┃ ┣ 📂page // Page
 ┃ ┃
 ┃ ┣ 📂providers
 ┃ ┃
 ┃ ┣ 📂router
 ┃ ┃
 ┃ ┣ 📂store
 ┃ ┃
 ┃ ┣ 📂styles
 ┃ ┃
 ┃ ┣ 📂types
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┗ 📜setupTests.ts
 ┣ 📜.editorconfig
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜craco.config.js
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

폴더 구조의 경우 Atomic Design을 사용하여 컴포넌트간 유기적이며, 확장성을 고려하여 컴포넌트를 관리하였습니다. 주요 폴더는 아래와 같습니다.

+ **types**: 전역적으로 사용될 타입들을 모아두었습니다.
+ **store**: 전역 상태를 위해 리덕스를 도입하였으며, 이를 위한 리듀서 슬라이스를 모아둔 폴더입니다.
+ **providers**: 앱에 대한 전역 provider들을 모아둔 폴더입니다.
+ **components**: 컴포넌트들을 모아 두었습니다. 이는 Atomic Design 기반으로 Atom, Molecules, Organisms, Template으로 구성하였습니다.
+ **page**: 전체 화면을 구성하는 컴포넌트들이 있는 폴더입니다. 이는 도메인 단위로 구별 될 수 있습니다.

## 6. 각 기능에 대한 설명

### 도메인은 3개로 구성하였습니다.

`page` 폴더에 보면 알 수 있듯이 크게 도메인은 3개로 구성하였습니다.

+ Main: 폼을 입력하고 작성할 수 있는 페이지입니다.
+ Selection: 작성한 폼을 입력하고 선택할 수 있는 페이지입니다. ( 아이콘 버튼을 누르면 라우팅 된다. )
+ Result: Selection에서 작성한 결과를 조회할 수 있는 페이지입니다.

### 상태관리를 위해 리덕스를 사용하였습니다.

구현 요구사항에도 나와있다 시피, 전역 상태 관리가 필요해보여 리덕스 툴킷을 사용하여 전역 상태관리를 관리해주었습니다. 각 라우터 이동을 통한 상태값을 관리해줘야 한다는 부분에서 리덕스를 필요로 했습니다. 리덕스 스토어에는 아래와 같이 두 갸의 리듀서가 존재합니다.

#### 메인 페이지에서 입력 페이지로 이동할 때,

메인 페이지에서 생성한 폼의 상태값에 기반하여, 선택 페이지에서 폼을 구성해야 합니다. 따라서, 각 폼의 생성 수정 삭제는 해당 리듀서의 액선 생성 함수를 통해 관리하였습니다. 이를 위한 리듀서는 `formSlice`로, `store > formSlice`에서 찾아보실 수 있습니다.

```
idx: number;
key: string;
title: string; // 폼의 제목
description?: string; 
type: ITypes; // 폼의 타입
isRequired?: boolean; // 필수 입력 폼인지 확인
isActivated: boolean; // 현재 Focus 되고 있는 폼인지 확인
options?: string | Array<string>; // 생성된 옵션
isEtc?: boolean; // 기타를 포함하는지 확인
```

#### 입력 페이지에서 결과 페이지로 이동할 때, 

위 상황도 첫 번째 상황과 같습니다. 즉, 각 도메인이 순서적으로 연결되어 각 상태값에 대해 의존하게 됩니다. 따라서, 이를 위해 `resultSlice`를 구성하였고 `store > resultSlice`에서 찾아보실 수 있습니다.

```
key: string;
title: string; // 폼의 제목
type: ITypes; // 폼의 타입
isRequired: boolean; // 필수 입력인지 확인
value: string | Array<string>; // 사용자가 선택한 값
options: string | Array<string>; // 사용자가 생성한 옵션
error: boolean; // 현재 폼이 유효하지 않은지
isEtc: boolean;
```

### 각 기능별로 브랜치를 생성하여 개발 하였습니다.

각 기능별로 개발을 위해 기능에 따른 브랜치를 생성하여 개발하였습니다. 이는 추후 협업 또는 진행 상황에 있어 사이드 이펙트를 크게 줄여 줄 수 있다고 생각합니다.

### 구글 폼 UI와 최대한 비슷하게 하려고 하였습니다.

현재 UI 프레임워크로 Material UI를 사용하였습니다. 그 이유는 기본적으로 구글 디자인이 Material UI를 따르고 있으며, 구글 폼 또는 Material UI에 해당하는 요소들이 많기 때문에 Material UI 프레임워크로 UI를 구성하였습니다.
