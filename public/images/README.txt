이미지 넣는 방법
=================
이 폴더(public/images)에 아래 이름 그대로 사진 파일을 넣으면
코드를 고치지 않아도 화면에 자동으로 표시됩니다.
파일이 없으면 회색 "이미지 영역" 박스가 보입니다.

[커뮤니티 카드]
  community-blog.jpg
  community-event.jpg
  community-faq.jpg

[유튜브 영상 썸네일]
  video-main.jpg
  video-1.jpg
  video-2.jpg
  video-3.jpg

[인증 · 서류 탭]
  cert-insurance.jpg
  cert-patent.jpg
  cert-license.jpg

[고객 후기(베스트) 9개]
  review-1.jpg ~ review-9.jpg

[브랜드 스토리]
  brand-story.jpg

[함께하는 브랜드 4개]
  brand-1.jpg ~ brand-4.jpg

[석재보수 시공 전/후 비교 슬라이더 - 각 서비스 상세 페이지의 About 옆 영역]
  stone-grout-before.jpg / stone-grout-after.jpg   (대리석 줄눈 시공)
  stone-polish-before.jpg / stone-polish-after.jpg (대리석 연마 광택)
  stone-repair-before.jpg / stone-repair-after.jpg (대리석 보수)
  - before/after 두 장 모두 있어야 슬라이더가 나타납니다. 하나라도 없으면 기존 회색 placeholder가 보입니다.
  - 같은 각도·같은 구도로 찍은 사진일수록 비교가 자연스럽습니다. 가로형 4:3 비율 권장.

[서비스 상세 페이지 히어로 배경 이미지 - 석재보수/에어컨 공통]
  stone-grout-hero.jpg / stone-polish-hero.jpg / stone-repair-hero.jpg
  aircon-wash-hero.jpg / aircon-install-hero.jpg / aircon-repair-hero.jpg
  - 없으면 회색 "시공 이미지 준비 중" placeholder가 보입니다.

[에어컨 설치 시공 전/후 비교 슬라이더]
  aircon-install-before.jpg / aircon-install-after.jpg

참고
- 확장자는 .jpg 기준입니다. 다른 확장자를 쓰려면
  lib/data.ts 의 경로(예: "/images/video-main.jpg")만 바꾸면 됩니다.
- 후기/카드는 가로형(16:9) 또는 정사각형 사진이 잘 맞습니다.
