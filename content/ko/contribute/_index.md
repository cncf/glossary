---
title: 기여 방법
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

클라우드 네이티브 용어집 콘텐츠는 [이 GitHub 저장소](https://github.com/cncf/glossary)에 저장되어 있으며, 용어집에 관련된 [이슈](https://github.com/cncf/glossary/issues), [PR](https://github.com/cncf/glossary/pulls), [디스커션](https://github.com/cncf/glossary/discussions) 목록을 확인할 수 있다.

클라우드 네이티브 용어집에 기여할 수 있는 방법에는 다음의 4가지가 있다.

1) [열려 있는 이슈에 대해 작업하기](#work-on-an-existing-issue)
2) [새로운 용어 제안하기](#propose-new-terms)
3) [기존 용어 수정하기](#update-an-existing-term)
4) [용어집 번역에 참여하기](#help-translate-the-glossary)

## Glossary 커뮤니티에 들어오세요! {#join-the-glossary-community}

정기적으로 기여하고 싶다면, 용어집 워킹 그룹(Glossary Working Group) 월간 미팅에 참여할 수 있다. [CNCF 캘린더](https://www.cncf.io/calendar/)에서 미팅 상세 정보를 확인할 수 있다. 또한 CNCF 슬랙의 [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) 채널에서 메인테이너 및 기여자들과 소통할 수 있다. 어서오세요!

## 열려 있는 이슈에 대해 작업하기 {#work-on-an-existing-issue}

[용어집 GitHub 저장소 이슈](https://github.com/cncf/glossary/issues)를 확인한다. 여기서 모든 이슈의 목록을 볼 수 있다. 레이블을 이용하여 이슈를 필터링할 수 있다(예: 영어, 'help needed', 'good first issue'). 이러한 작업을 하려면 GitHub 계정이 필요하다.

![이슈와 레이블](/images/how-to/issue-and-labels.png)

관심있는 용어가 이미 다른 사람에게 할당되지는 않았는지 확인한다. 다음 이미지에서, 위의 3개 용어는 아직 할당되지 않았지만 4번째 용어는 이미 할당된 것을 볼 수 있다.

![용어 할당하기](/images/how-to/howto-04.png)

작업하고 싶은 용어를 찾았다면, 작업 의사를 이슈에 밝힌다. 이슈를 클릭하고 댓글을 작성한다.

![작업 의사 밝히기](/images/how-to/claiming-an-issue.png)

추가적으로, CNCF 슬랙의 [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) 채널에 가입하고, 당신이 새로운 용어에 대해 작업하기 위해 댓글을 달았음을 메인테이너에게 알린다(_@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, _@iamnoah_ 중 전부 또는 일부를 태그하여 그들이 놓치고 지나가지 않도록 하면 좋다). 한 번에 하나의 용어에만 할당될 수 있음에 유의한다. 여러 용어에 대해 작업하고 싶다면, 다음 용어에 대해 할당을 요청하기 전에 이전 용어에 대한 작업을 완료한다.

메인테이너가 해당 용어를 당신에게 할당하면, 이제 그 용어에 대해 작업을 시작할 수 있다. 다음 단계로, [새로운 용어 추가하기(PR 열기)](#submitting-a-new-term-creating-a-pr) 섹션을 참고한다.

## 새로운 용어 제안하기 {#propose-new-terms}

새로운 용어를 제안하면서, 다른 사람이 작업할 수 있도록 하거나, 그에 대한 정의를 직접 작성할 수도 있다. 어느 쪽이든, 이슈를 작성하여 이 과정을 시작한다.

아래는 아직 GitHub에 익숙하지 않은 사람들을 위한 단계별 가이드이다. **당신이 GitHub에 익숙하다면**, 가이드를 빠르게 참고하여 현재 설정되어 있는 이슈 템플릿을 활용하고, 적합한 네이밍 컨벤션을 따르고, PR을 작성했음을 슬랙에 알리고(메인테이너가 놓치지 않도록), 파일 템플릿이 어디에 있는지 확인한다. 그리고 시작하기 전에 [스타일 가이드](/ko/style-guide/)를 꼭 확인한다. 감사합니다!

### 이슈 생성하기 {#creating-an-issue}

[용어집 GitHub 저장소 이슈](https://github.com/cncf/glossary/issues)로 이동하여, "New issue"를 클릭한다.

![New issue](/images/how-to/howto-01.png)

여러 템플릿이 보일 것이다. 새로운 영문 용어를 제안하려면, "Request to add a new term (English)" 를 선택한다.

![템플릿](/images/how-to/english-issue-template.jpg)

제안하려는 용어를 작성하고, 아래의 두 질문에 대한 답을 입력하고, 체크리스트를 읽고 체크하고, "Submit new issue" 버튼을 누른다. 새로운 용어를 단지 제안하기만 하는 것이라면, 과정이 완료되었다! 만약 이 용어에 대해 작업하고 싶다면, 다음 단계를 수행한다.

### 분류(triage) 과정 거치기 {#triaging-your-issue}

다음으로, 메인테이너가 이슈를 분류할 것이다. 즉, 이 용어가 용어집에 포함되는 것이 적절한지를 메인테이너가 평가한다(참고: 모든 용어가 허용되지는 않는다. 확실히 자리를 잡았고(established) 널리 사용되는 클라우드 네이티브 용어만 허용될 것이다).

새로운 용어를 제안했음을 메인테이너가 놓치고 지나가지 않도록, 슬랙을 통해 메인테이너에게 알린다. _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, _@iamnoah_ 중 전부 또는 일부를 태그하면 좋다. 해당 용어가 승인되고 당신이 해당 용어에 대해 작업하고 싶다는 의사를 밝혔다면, 메인테이너가 해당 용어를 당신에게 할당할 것이다.

한 번에 하나의 용어에만 할당될 수 있음에 유의한다. 여러 용어에 대해 작업하고 싶다면, 다음 용어에 대해 할당을 요청하기 전에 이전 용어에 대한 작업을 완료한다.

### 새로운 용어 추가하기(PR 열기) {#submitting-a-new-term-creating-a-pr}

시작하기 전에, [스타일 가이드](/ko/style-guide/)를 참고한다. 반복적인 리뷰-수정 과정을 줄여줄 것이다. 스타일 가이드에 명시되어 있듯이, Google 또는 Word 문서로 시작하는 것을 추천한다.

용어를 제출할 준비가 되면, 코드 트리 아래의 `content/` 디렉토리로 이동한다.

![content 디렉토리](/images/how-to/howto-05.png)

다음으로, 제출할 용어가 영문인 경우 `en`, 다른 언어인 경우 해당 언어 디렉토리로 이동한다.

![언어 디렉토리](/images/how-to/howto-06.png)

다음으로, `_TEMPLATE.md` 파일을 선택한다.

![_TEMPLATE.md](/images/how-to/howto-07.png)

내용을 복사한다.

![내용 복사](/images/how-to/howto-08.png)

제출할 용어가 영문인 경우 `en`, 다른 언어인 경우 해당 언어 디렉토리로 돌아간다. "Add file" 버튼을 누르고 "Create new file"을 선택한다.

![Create new file](/images/how-to/howto-09.png)

URL 부분에 용어 이름을 적고 (모두 소문자로 적고, 공백은 넣지 않는다) 맨 뒤에 `.md`를 추가한다(참고: 미리보기가 동작하지 않는다면, 아마도 맨 뒤에 `.md`를 추가하지 않았기 때문일 것이다). 이제 `_TEMPLATE.md` 파일의 내용을 붙여넣는다. 다음으로 작성한 용어 정의를 붙여넣는다. GitHub은 문서 포맷팅(예: 하이퍼링크, 굵게, 기울임체)에 마크다운을 사용하고 있음을 참고한다. [마크다운 치트 시트](https://www.markdownguide.org/cheat-sheet/)도 참고한다. 마크다운이 의도대로 표시되는지 확인하려면, "Preview"를 클릭한다.

![용어 마무리하기](/images/how-to/howto-10.png)

용어를 제출할 준비가 되면, 스크롤을 내려 커밋(commit) 제목을 작성한다. 이제 곧 새로운 용어를 당신의 브랜치(branch)에 커밋하게 된다. PR 제출까지는 한 단계가 더 남아 있다. "Commit new file" 버튼을 누르면,

![commit new file](/images/how-to/howto-11.png)

PR 생성 화면으로 이동하며, "Create pull request"를 누르면 PR을 생성한다.

![create a pr](/images/how-to/howto-12.png)

"Pull requests" 에서 방금 생성한 PR을 볼 수 있을 것이다.

![prs](/images/how-to/howto-13.png)

## 기존 용어 수정하기 {#update-an-existing-term}

기존 용어를 수정하려면, 이슈를 올려 수정 제안을 하거나 바로 풀 리퀘스트(PR)를 열어 직접 수정할 수 있다.

### 이슈를 올려 수정 제안하기 {#request-a-change-via-an-issue}

용어에 대한 문제를 발견했지만 어떻게 수정해야 하는지 모르거나 직접 수정하고 싶지 않다면, "Report issue"를 클릭한다.

![Report issue](/images/how-to/howto-14.png)

이렇게 하면 바로 이슈를 작성할 수 있다. 어떠한 수정이 왜 필요한지 서술한다. "Submit new issue"를 누르면 완료된다.

![Submit new issue](/images/how-to/howto-15.png)

### 용어 직접 수정하기 {#update-a-term-directly}

용어를 직접 수정하려면, "Edit this page"를 클릭한다.

![Edit this page](/images/how-to/howto-16.png)

해당 용어의 GitHub 페이지가 열릴 것이다. 용어를 수정하고 PR을 제출한다. 자세한 설명은 위의 "새로운 용어 추가하기(PR 열기)" 섹션을 참고한다(마크다운에 대해 설명하는 문단으로 건너뛴다).

## 용어집 번역에 참여하기 {#help-translate-the-glossary}

용어집을 당신의 모국어로 번역하는 데 참여하고 싶다면, CNCF 슬랙의 #glossary-localizations 채널에 참여하고 메인테이너를 언급한다. 현재 존재하는 언어 팀에 참여하거나, 새로운 언어 팀을 만들 수도 있다(필요 사항을 보려면 [현지화 가이드](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)를 참고한다). 용어집 워킹 그룹(Glossary Working Group) 월간 미팅에 참여하면 더욱 좋다. [CNCF 캘린더](https://www.cncf.io/calendar/)에서 미팅 상세 정보를 확인할 수 있다. 미팅에 참여하길 기대한다.
