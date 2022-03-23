# 채愛레시피
- 채식 입문자들을 위해, 재료 사진 한장을 인공지능 모델로 분석하여 맛있는 채식 레시피를 제공합니다.

[채식주의자들의 레시피 커뮤니티: 채애레시피 링크](https://elice-kdt-ai-3rd-team08.elicecoding.com/)
<br>
[팀 노션 페이지](https://www.notion.so/8-Wiki-4958a75d092d4898b1ec5ccb4f16ecd4)

## 프로젝트 구성 안내

## 1 프로젝트 주제

<aside>
🥦 초보 채식주의자를 위해, 채식 재료 사진으로 채식 종류별 레시피를 제공하는 서비스

</aside>

- `메인 기능`
    - 채식 재료 사진을 AI 모델이 학습한 데이터를 통해 채식 레시피를 추천해주는 서비스
- `서브 기능`
    - 초보 채식 주의자를 위해, 채식 정보를 제공하는 채식 가이드 제공
    - 회원 가입 시, 레시피 작성을 통해 자신의 레시피를 공유

## 2 프로젝트 기획

- 2008년부터 2021년 까지 채식주의자 인구는 폭발적으로 증가하여, 2021년에는 250만명을 돌파했지만 한국의 경우 채식주의자를 위한 식당은 현저히 적고, 따라서 대부분의 채식주의자는 식단을 직접 요리합니다.

- 건강 관리를 위해 간헐적 채식을 시작하는 채식주의자들은 식품의 영양소 함량 정보를 확인하고자 하는 니즈가 큰 것을 발견했습니다.
    - 육류 섭취자에 비해 부족한 단백질 섭취로 인해, 단백질 함량을 확인하는 점이 있습니다.
    - 체중 조절 및 다이어트가 목적인 경우, 탄수화물, 지방 함량을 주로 확인하는 점이 있습니다.

- 처음 채식 식단을 시작하는 인구의 경우, 채식 재료는 있지만 식단 조리에 대한 가이드와 소지한 재료를 통해 어떤 음식을 만들 수 있는 지에 대한 기반 정보가 부족합니다
- 채애레시피는 건강 관리를 생각하는 초보 채식주의자를 페르소나로 하여, 채식 재료 사진을 통해 조리 가능한 채식 레시피를 제공하여 문제를 해결하고자 하는 서비스입니다.

## 3. 서비스 주요 기능 설명

- 재료들의 사진을 찍어 올리면 인공지능 모델이 그 재료들이 무엇인지 판별하고 각 재료의 영양 성분과 관련 레시피를 추천해줍니다.
- 재료의 검색을 통해 여러 재료를 입력했을 경우 최대한 많은 재료가 들어간 레시피 순으로 추천해줍니다.
- 레시피 작성을 통해 나만의 레시피를 공유할 수 있습니다.
- 채식 입문자들을 위한 가이드를 제공합니다.

## 4. 프로젝트 구성도
  - 프로젝트 구조도
  https://media.discordapp.net/attachments/936622280635740185/951901125815181362/2022-03-12_2.55.03.png
  - 와이어프레임
  https://www.figma.com/file/sZVmbrwxm10F5J3Mge2oIq/%EC%9D%B4%EB%AF%B8%EC%A7%80-8%ED%8C%80?node-id=0%3A1
  - 스토리보드
  https://media.discordapp.net/attachments/936622280635740185/951902631306092624/2022-03-12_3.00.55.png
  - DB diagram
  https://dbdiagram.io/d/620f92de485e433543d8b447
  - 레시피 데이터
  https://kadx.co.kr/product/detail/0c5ec800-4fc2-11eb-8b6e-e776ccea3964

## 5. 사용 기술 스택
- AI : Darknet, OpenCV
- 백엔드 : Flask, Flask-SQLAlchemy, Docker, Mysql, Nginx
- 프론트엔드 : TypeScript, ReactQuery, Recoil, Styled-Components, Axios

## 6. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 유환익 | 팀장/프론트엔드 개발 |
| 정진묵 | 백엔드 개발 |
| 임은비 | 백엔드 개발 |
| 이보연 | 백엔드 개발/데이터 |
| 이영민 | 인공지능 개발 |

**멤버별 responsibility**

1. 유환익: 팀장/프론트엔드 담당

- 개발 일정 관리
- 메인 화면, 검색, 조회 기능 구현
- 로그인/회원가입 기능 구현
- 레시피 작성, 수정, 삭제 기능 구현
- 레시피 가이드 페이지 구현

2. 정진묵: 백엔드 담당

- 레시피 작성, 수정, 삭제 기능 구현
- 로그인/로그아웃 API 구현
- 개발환경 설정 및 배포

3. 임은비: 백엔드 담당
- DB 설계 및 api 명세 작성
- 재료 검색 페이지 구현
- 레시피 검색 페이지 구현

4. 이보연: 백엔드 담당
- DB 설계 및 api 명세 작성
- 레시피 데이터 추출 및 전처리
- 레시피 상세페이지 구현

5. 이영민: 인공지능 담당
- 서비스에 적합한 모델 선정
- 학습 데이터 만들기 - 데이터 선정 + 크롤링/Annotation
- 여러 종류의 AI 모델 학습 및 구현


## 7. 버전
  - 1.0.0
  - 1.1.0 (FRONT-END: 재료 구매 링크 캐러셀 기능 추가, 반응형 네비게이션 바 기능 추가)

## 8. FAQ
  ### AI
  - 어떤 AI 모델을 사용하였나요?
    - YOLO 계열 중 활발하게 사용되어 온 yolov4 계열을 사용했습니다.
    - https://github.com/AlexeyAB/darknet
  - 총 몇개의 클래스를 탐지 가능한가요?
    - 대중적인 생선, 야채, 과일, 견과류, 소스류 총 70종을 학습시켰습니다.
  - AIHub의 커스텀 annotation 형식을 어떻게 yolo darknet 형식으로 변환 했나요?
    - 직접 코드를 제작하여 변환 했습니다
    - Team8 > ai backup > master branch > dataset_practice_swish > swish_F03_annotation_form_transformer.py 참고
    - 최종 모델 학습에 사용한 코드들은 dataset_practice_swish 폴더에 있습니다. 코드 동작 순서대로 정리해 두었으니 조금이라도 도움이 되었으면 합니다.
    - swish_F03_annotation_form_transformer.py 작동 후 roboflow 사이트에서 annotation 및 augmentation적용 한 후 다음 코드로 넘어갑니다.
    - 학습 완료한 모델을 시험해 볼 때 swish_70_classes_practice.py 파일을 사용하였습니다.
    - roboflow 사용 및 새로운 데이터 추가 없이 기존의 AIHub 데이터셋만 사용하시려면 dataset_practice 폴더 참고하시면 됩니다.
    - https://kdt-gitlab.elice.io/ai_track/class_03/ai_project/team8/ai-backup
  - AI 학습 데이터 annotation 및 augmentation 시킨 방법 : roboflow 사이트 이용
  - 모델은 어디에서 학습시켰나요?
    - google colab pro를 결재하여 학습을 진행하였습니다. 제공되는 하드웨어도 뛰어나고, 편의성도 좋아서 후회한 적 없습니다. 
      특히 google drive와 연동이 가능할 수 있다는 점이 장점 중 하나입니다.
  - 케찹, 칠리소스, 고추장 같은 소스류도 모델이 잘 구분을 하나요?
    - 소스류의 경우 그릇 등에 담겨져 있으면 AI가 잘 학습하지 못해서, 대중적인 공산품 소스의 용기를 따로 크롤링하여 학습시켰습니다.
    - ex) 케찹 : 오뚜기, Heinz,  청정원 케찹 등
