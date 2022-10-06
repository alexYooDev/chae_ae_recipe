# Chae_ae_recipe (채愛레시피)
- This app provides vegetarian cuisin recipes for the people trying to dabble in vegetarina diet, as Darknet(Image Procssing AI model) analizes uploaded food ingredient image. <br/><br/>
채식 입문자들을 위해, 재료 사진 한장을 인공지능 모델로 분석하여 맛있는 채식 레시피를 제공합니다.

[Get Green - Chae_ae_recipe: Link](https://elice-kdt-ai-3rd-team08.elicecoding.com/)
<br>
[Team Communication Channel](https://www.notion.so/8-Wiki-4958a75d092d4898b1ec5ccb4f16ecd4)

## Project Information (프로젝트 구성 안내)

## 1. Project Introduction (프로젝트 소개)

The aim of this project is to provide people who are interested and trying to dabble in vegetarin diet.<br/><br/>
현재 채식을 하고 있거나 채식에 관심은 있지만 시도해본 적 없는 채식 입문자들을 위해 채식 레시피를 제공하는 서비스입니다.<br/><br/> 

Upon uploading one image of food ingredients of users' choice, we provide each ingredient's nutrition information and corresponding recipes after the Darknet model analysis process.<br/><br/>
먹고 싶은 재료들의 사진을 찍어 올리면 인공지능이 그 재료들이 뭔지 판별하고 영양성분과 레시피를 추천해줍니다.<br/><br/> 

To make things even simpler, user can also search with words of their choice. Our service targets the vegetarian quick-starter to provide them with vegetarian recipes with the closest relevance.<br/><br/>
보다 쉬운 검색을 통해 레시피를 검색할 수도 있습니다. 저희 서비스는 채식 입문자들을 타겟층으로 선정해 채식 가이드도 제공하고 있습니다.<br/><br/> 

## 2. Intent of the Project (프로젝트 기획 의도)

Despite the recent growth of vegetarian population in Korean society, it is hard for most of them to find a place eat or proper guidance to have vegetarian food.<br/>
Vegetarian options are rare to come by when they go for quick eat-out or food delivery.<br/><br/>
채식 인구는 증가하고 있는데 아직도 한국에서 채식을 하기란 힘듭니다. 외식을 하거나 배달을 시킬 때 채식 메뉴는 거의 없습니다.<br/><br/> 

In the recent studies, vegetarians prefer to cook their own food home.<br/><br/>
설문조사에서 채식주의자들은 약 70%가 집에서 음식을 만들어 먹는다고 합니다. <br/><br/> 

Upon multiple researches conducted by our team, there currently were no web vegetarian recipe provider to be found in Korean domain<br/><br/>
찾아본 결과 채식 레시피만을 다루는 사이트는 없었습니다.<br/><br/> 

In the rise of people taking health diet serious, the number of 'Flexitarian', who spontaneously practice vegetarian diet are increasing as well.<br/><br/>
건강을 생각하는 사람들이 많아지면서 비건은 아니지만 간헐적으로 채식을 하는 플렉시테리언이 증가하고 있습니다.<br/><br/> 

We wanted to make a web app that makes things a lot easier for current vegetarians, flexitarins, and who are intested in veggie diet but haven't tried yet.<br/><br/>
현재 채식을 하고 있는 사람, 간헐적 채식을 하고 있어 일주일에 하루나 이틀, 한 끼에서 두 끼 정도 채식을 하는 사람, 채식에 관심은 있지만 시도해보지 못한 사람들을 위해 쉽게 레시피를 추천해주는 서비스를 만들고 싶었습니다.<br/><br/>

## 3. About Major Functionality (서비스 주요 기능 설명)

- Upon uploading an vegetable ingredients image, Darknet model analizes it and identifies ingredients name, nutrition info, and corresponding recipe list (재료들의 사진을 찍어 올리면 인공지능 모델이 그 재료들이 무엇인지 판별하고 각 재료의 영양 성분과 관련 레시피를 추천해줍니다.)
- Upon search bar input, the result page shows recipes ordered by the maximum number of ingredients needed (재료의 검색을 통해 여러 재료를 입력했을 경우 최대한 많은 재료가 들어간 레시피 순으로 추천해줍니다.)
- User can create and upload their own recipes (레시피 작성을 통해 나만의 레시피를 공유할 수 있습니다.)
- Provides veggie diet guidance for novice vegetarians (채식 입문자들을 위한 가이드를 제공합니다.)

## 4. Project Architecture (프로젝트 구성도)
  - Project Structure (프로젝트 구조도)
  https://media.discordapp.net/attachments/936622280635740185/951901125815181362/2022-03-12_2.55.03.png
  - Rough Wire-Frame Sketch (와이어프레임)
  https://www.figma.com/file/sZVmbrwxm10F5J3Mge2oIq/%EC%9D%B4%EB%AF%B8%EC%A7%80-8%ED%8C%80?node-id=0%3A1
  - Story board (스토리보드)
  https://media.discordapp.net/attachments/936622280635740185/951902631306092624/2022-03-12_3.00.55.png
  - DB diagram
  https://dbdiagram.io/d/620f92de485e433543d8b447
  - Open Recipe data for AI supervised learning(레시피 데이터)
  https://kadx.co.kr/product/detail/0c5ec800-4fc2-11eb-8b6e-e776ccea3964

## 5. Tech Stack(사용 기술 스택)
- AI : Darknet, OpenCV
- Server : Flask, Flask-SQLAlchemy, Docker, Mysql, Nginx
- Client : TypeScript, React Query, Recoil, Styled-Components, Axios

## 6. Team Responsibilities (프로젝트 팀원 역할 분담)
| Name | Responsible For |
| ------ | ------ |
| Yoo, Hwanik | Team Leader/FE |
| Chung, Jinmook | BE |
| Lim, eunbi | BE |
| Lee, boyeon | BE/DA |
| Lee, yeongmin | AI |
<br/><br/>

| 이름 | 담당 업무 |
| ------ | ------ |
| 유환익 | 팀장/프론트엔드 개발 |
| 정진묵 | 백엔드 개발 |
| 임은비 | 백엔드 개발 |
| 이보연 | 백엔드 개발/데이터 |
| 이영민 | 인공지능 개발 |

**Responsibilities in Detail**

1. Hwanik Yoo(유환익): Team leader/FE (팀장/프론트엔드 담당)

- Managed development process (개발 일정 관리 : Notion, Discord Channel, Git wiki etc.) 
- Took chare of the whole clint-side development, including Main page, Search Function, Data Visualization(메인 화면, 검색, 조회 기능 구현
- Developed Login/Sign-up Functinality (로그인/회원가입 기능 구현)
- created vegetarian recipe guide page (레시피 가이드 페이지 구현)

2. 정진묵: 백엔드 담당

- 레시피 작성 페이지 구현
- 로그인/로그아웃 페이지 구현
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


## 7. Version(버전)
  - 1.0.0

## 8. FAQ
  ### AI
  - Which AI model was used in this project? (어떤 AI 모델을 사용하였나요?)
    - Among the YOLO model, we chose yolo4 which is actively in use among the developer communities <br/><br/>OLO 계열 중 활발하게 사용되어 온 yolov4 계열을 사용했습니다.
    - https://github.com/AlexeyAB/darknet
  - How many data classes can this model successfully detect? (총 몇개의 클래스를 탐지 가능한가요?)
    - Among common food ingredients such as fish, vegetbles, fruits, nuts, and veggie sauce, Total of 70 classes were successfully analized and detected by our model<br/>대중적인 생선, 야채, 과일, 견과류, 소스류 총 70종을 학습시켰습니다.<br/><br/> 
  - How did you transform AIHub(Korean AI data repository) default annotation format into your teams taste? (AIHub의 커스텀 annotation 형식을 어떻게 yolo darknet 형식으로 변환 했나요?)
    - Our AI specialist took care of coding from the start, you can view his work in the file named 'swish_F03_annotation_form_transformer.py' <br/>직접 코드를 제작하여 변환 했습니다.<br/><br/> 
    - Team8 > ai backup > master branch > dataset_practice_swish > swish_F03_annotation_form_transformer.py 참고
    - Education code for finalized version of AI model is contained in dateset_practice_swish directory, code is set in functioning order for your reference. <br/>최종 모델 학습에 사용한 코드들은 dataset_practice_swish 폴더에 있습니다. 코드 동작 순서대로 정리해 두었으니 조금이라도 도움이 되었으면 합니다.<br/><br/> 
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
