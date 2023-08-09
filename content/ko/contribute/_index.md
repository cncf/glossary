---
title: 기여 방법
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---


## 환영합니다!

클라우드 네이티브 용어집(Cloud Native Glossary) 기여 가이드에 오신 것을 환영합니다. 그리고 관심 가져주셔서 감사합니다.
이 프로젝트에 기여할 수 있는 여러 가지 방법이 있으며, 다음과 같은 내용을 다룹니다.

1) [열려 있는 이슈에 대해 작업하기](#work-on-an-existing-issue)
2) [새로운 용어 제안하기](#propose-new-terms)
3) [기존 용어 수정하기](#update-an-existing-term)
4) [용어집 번역에 참여하기](#help-localize-the-glossary)

## CNCF 용어집 개요

용어집의 목표는 복잡성으로 악명 높은 클라우드 네이티브 세계를 조금이나마 단순화하는 것이고, 이를 통해 사람들이 클라우드 네이티브에 더욱 쉽게 다가갈 수 있도록 만들고자 한다.

클라우드 네이티브 용어집의 콘텐츠는 [이 GitHub 저장소](https://github.com/cncf/glossary)에 저장되어 있으며, 
여기에서 용어집에 관련된 [이슈](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls), [디스커션](https://github.com/cncf/glossary/discussions) 목록을 확인할 수 있다.

## 누가 기여할 수 있습니까?

이 프로젝트에 참여할 수 있는 방법은 클라우드 네이티브에 대한 전문 지식의 수준에 따라 달라진다.
우선 복잡한 개념을 단순화하려면 주제에 대한 깊은 지식이 필요하다.
그러므로, 새로운 용어에 기여하려면 해당 용어에 능숙해야 한다.
기여자는 일반적으로 이러한 기술을 한동안 사용한 엔지니어 또는 클라우드 네이티브에 중점을 둔 학계의 구성원이 될 수 있다. 

복잡한 개념을 간단히 설명하는 것은 _정말_ 어렵기 때문에 관련 노하우를 필요로한다.
이해하기 쉽고 사용자 친화적인 결과물 쉽게 보일 수 있지만, 
이와 같은 훌륭한 수준의 이해하기 쉬운 결과물을 만드는 것은 클라우드 네이티브 전문가들의 많은 노력과 협업의 결과이다. 

아직 클라우드 네이티브 전문가가 아니지만 기여하고 싶다면, 팀을 구성하는 것을 추천한다.
전문가가 용어의 개념이 정확하게 설명되었다고 확신했을 때, 첫 번째 용어집에 기고할 준비가 된 것이다.

현지화 활동 중에는 다른 언어에 능숙한 초보자가 용어집에 귀중한 기여를 하는 것도 포함된다.
영어로 된 기존의 확실한 정의를 사용하여 경험이 적은 기여자가 용어를 대상 언어로 현지화할 수 있다. 
이를 위해 기존 현지화 팀에 참여하거나 새 현지화 팀을 만들 수 있을 것이다. 
이 가이드의 [용어집 번역에 참여하기](#help-localizing-the-glossary) 섹션을 읽고, 시작하는 방법에 대해 알아보기 바란다.

## 시작하기 전에

용어집 기여자가 되는 여정을 시작하기 전에 다음 단계를 완료해야 한다.

1. [GitHub 계정 생성](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account), 계정이 없는 경우 생성
2. [기여자 라이선스 계약](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors)(CLA)에 서명
3. [커밋 서명 확인](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
4. GitHub 계정에서 [확인 모드](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode)를 활성화하여 커밋의 "확인됨" 상태를 표시


## 적합한 작업 사례 {#best-practices}

검토 과정을 용이하게 하기 위해 [줄 바꿈](https://sembr.org/)(예: 한 문장당 한 줄씩)을 사용한다.
이 [마크다운 치트 시트](https://www.markdownguide.org/cheat-sheet/)를 확인하는 것을 추천한다.
GitHub(예: 하이퍼링크, 굵은 글씨, 이탤릭체)에서 Markdown 텍스트 형식을 올바르게 지정한다.
그리고 .md 파일 이름을 지정할 때는 공백 대신 소문자와 하이픈을 사용하여 단어를 구분하고 괄호를 사용하지 않는다.

## 스타일 가이드

문서 서식 지정 및 작성에 대한 가이드라인을 이해하고 기여 프로세스를 보다 효율적으로 만들기 위해 [스타일 가이드](/style-guide/)를 읽는다.

## 용어집 커뮤니티에 참여하세요! {#join-the-glossary-community}

정기적으로 기여하고자 하는 경우, 월간 용어집 작업 그룹 회의에 참여하는 것을 고려할 수 있다.
[CNCF 캘린더](https://www.cncf.io/calendar/)에서 회의 세부 정보를 확인할 수 있다.
CNCF Slack의 [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) 채널에서 메인테이너 및 동료 기여자와 연락할 수 있으며,
우리는 언제나 당신을 만나기를 기대한다.

## 열려 있는 이슈에 대해 작업하기 {#work-on-an-existing-issue}

[용어집 GitHub 저장소 이슈](https://github.com/cncf/glossary/issues)를 확인한다. 여기서 모든 이슈의 목록을 볼 수 있다. 레이블을 이용하여 이슈를 필터링할 수 있다(예: 'lang/en', 'help wanted', 'good first issue').

![이슈와 레이블](/images/how-to/issue-and-labels.png)

관심있는 용어가 이미 다른 사람에게 할당되지는 않았는지 확인한다. 예를 들어, 처음 세 용어를 사용할 수 있지만 네 번째 용어는 이미 할당되었음을 알 수 있다.

![용어 할당하기](/images/how-to/howto-04.png)

작업할 용어를 선택한 후에, 해당 이슈에 코멘트를 작성한다.

![이슈 클레임](/images/how-to/claiming-an-issue.png)

또한, CNCF Slack 워크스페이스의 [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) 채널에서 이슈를 메인테이너에게 알리고
_@Catherine Paganini_, _@Seokho Son_, _@Jihoon Seo_, 및/또는 _@iamnoah_를 태그하여 이를 이를 확인하도록 한다.

다음 단계는 [신규 용어 제안(PR 생성)](#submitting-a-new-term) 섹션을 참조한다.

**참고**: 메인터이너가 이슈를 할당한 후 이슈에 대한 작업을 시작할 수 있다.
한 번에 한 용어에 대한 작업만 신청할 수 있다.
여러 용어에 대한 작업은 순차적으로 진행되므로, 다음 용어에 대한 작업을 신청하기 전에 이전 용여에 대한 작업을 완료해야 한다.

## 새로운 용어 제안하기 {#propose-new-terms}

다른 사람이 작업할 새 용어를 제안하거나 직접 새 정의를 만들 수 있다.
어느 쪽이든 [이슈 생성](#creating-an-issue)부터 시작한다.
용어집에 추가되려면, 모든 신규 용어가 [CNCF의 클라우드 네이티브 정의](https://github.com/cncf/toc/blob/main/DEFINITION.md)를 충족해야 한다.
유일한 예외는 클라우드 네이티브 개념을 이해하는 데 필요한 기본 용어이다.

아직 GitHub에 익숙하지 않은 사람들을 위한 단계별 가이드는 아래와 같다. **당신이 GitHub에 익숙하다면**, 이 가이드를 살펴보고 아래와 같은 주제에 대한 충분한 정보를 수집한다.

1. 이슈 및 새 용어에 대한 템플릿을 탐색
2. 이슈 클레임
3. [잘못된 맞춤범](#spell-check) 정정

### 이슈 생성하기 {#creating-an-issue}

[용어집 GitHub 저장소 이슈](https://github.com/cncf/glossary/issues)로 이동하여, "New issue"를 클릭한다.

![이슈](/images/how-to/howto-01.png)

새로운 영문 용어를 제안하려면, 여러 템플릿 중 "Request to add a new term (English)" 를 선택한다.

![템플릿](/images/how-to/english-issue-template.jpg)

제안하려는 용어를 작성하고, 아래의 질문에 대한 답을 입력하고, 체크리스트를 읽고 체크하고, "Submit new issue" 버튼을 누른다. 
단지 새로운 용어를 제안하기만 하는 것이라면, 과정이 완료되었다! 만약 이 용어에 대해 작업하고 싶다면, 다음 단계로 넘어간다.

### 이슈 분류(triage) 과정 거치기 {#triaging-your-issue}

다음으로, 메인테이너가 이슈를 분류할 것이다. 즉, 이 용어가 용어집에 포함되는 것이 적절한지를 메인테이너가 평가한다.
제안된 모든 용어가 허용되는 것은 아니며, 확실히 자리를 잡았고(established) 널리 사용되는 클라우드 네이티브 용어만 용어집에 허용될 것이다.

새로운 용어 제안을 메인테이너들이 놓치지 않도록 Slack에서 _@Catherine Paganini_, _@Seokho Son_, _@Jihoon Seo_, 및/또는 _@iamnoah_를 태그하여 알린다. 해당 용어 정의에 대해 작업하고 싶은 경우, 메인테이너에게 알리면 해당 용어를 할당해줄 것이다.

### 새로운 용어 추가하기(PR 열기) {#submitting-a-new-term-creating-a-pr}

[스타일 가이드](/style-guide/)에 설명된 바와 같이 Google 또는 Word 문서부터 시작하는 것을 추천한다.

용어를 제출할 준비가 되면, 코드 트리 아래의 `content/` 디렉토리로 이동한다(<> Code 탭에서).

![content 디렉토리](/images/how-to/howto-05.png)

다음으로, 제출할 용어가 영문인 경우 `en`, 다른 언어인 경우 해당 언어 디렉토리로 이동한다.

![언어 디렉토리](/images/how-to/howto-06.png)

다음으로, `_TEMPLATE.md` 파일을 선택한다.

![템플릿](/images/how-to/howto-07.png)

내용을 복사한다.

![내용 복사](/images/how-to/howto-08.png)

제출할 용어가 영문인 경우 `en`, 다른 언어인 경우 해당 언어 디렉토리로 돌아간다. "Add file" 버튼을 누르고 "Create new file"을 선택한다.

![신규 파일 생성](/images/how-to/howto-09.png)

[적합한 작업 사례](#best-practices) 섹션에 설명된 대로 URL에 용어 이름을 추가한다.
이름 끝에 .md 확장자를 추가한다(이 확장자가 없으면 파일을 미리보기 할 수 없다.).
이제 아래 섹션에 템플릿 콘텐츠를 붙여넣는다. 용어 정의 텍스트를 복사하여 파일에 붙여넣는다.
[적합한 작업 사례](#best-practices) 섹션에 설명된 대로 Markdown을 알맞게 사용했는지 확인하려면 "미리보기"를 클릭한다.


![용어 마무리하기](/images/how-to/howto-10.png)

아래로 스크롤하여 새 커밋 파일의 이름을 지정한다. 제출할 준비가 되면 "새 파일 커밋"을 누른다.

![신규 파일 커밋](/images/how-to/howto-11.png)

이제 새 PR을 생성한 준비가 되었다.

![PR 생성](/images/how-to/howto-12.png)

"Create pull request" 버튼을 누르면 PR이 "Pull request" 탭에 표시되어있어야 한다.

![PRs](/images/how-to/howto-13.png)

## 기존 용어 수정하기 {#update-an-existing-term}

기존 용어를 업데이트 하려면 이슈를 생성하여 변경을 요청할 수 있다.
또는 직접 변경 작업을 수행하고 PR을 제출한다.

### 이슈를 올려 수정 제안하기 {#request-a-change-via-an-issue}

용어의 문제에 플래그를 지정하려면 CNCF 용어집 웹 페이지의 "Report issue" 옵션을 사용할 수 있다.
신고하려는 개념의 CNCF 페이지로 이동하여 "Report issue"를 클릭한다.
이렇게 하면 자동으로 이슈를 열 수 있을 것이다.

![Report issue](/images/how-to/howto-14.png)

제안사항과 필요한 이유에 대해 설명한다. 제출을 누르면 완료된다.

![Submit new issue](/images/how-to/howto-15.png)

### 용어 직접 수정하기 {#update-a-term-directly}

용어를 수정하고 제안 사항을 제출하려면, "Edit this page"를 클릭한다.

![Edit this page](/images/how-to/howto-16.png)

용어에 대한 GitHub 페이지가 열릴 것이다. 이것을 변경하고 PR을 생성한다.
위의 [적합한 작업 사례](#best-practices) 섹션을 참조하고, 
[스타일 가이드](/style-guide/)를 읽고 가이드라인을 준수했는지 확인한다.

## 용어집 현지화 지원하기 {#help-localize-the-glossary}

용어집을 대상 언어로 현지화하려면 CNCF Slack 작업 공간의 [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) 채널에 가입하고 메시지를 보낸다.
기존 팀에 참여하거나 새 팀을 만들 수 있다.
(필요한 사항을 확인하려면 [현지화 가이드](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)를 참고한다.)
팀의 기여 프로세스에 대한 세부 정보를 이해하기 위해 대상 언어의 **기여 방법** 가이드를 참고한다.

## 맞춤법 검사 {#spell-check}

맞춤법 검사가 실패할 수 있는 두 가지 주요 이유는 다음과 같다.

- PR에 맞춤법 오류가 있는 경우
- PR에 단어 목록에 등록되지 않은 단어가 포함되어 있는 경우

목록에 새 단어를 추가하려면 다음 단계를 따른다.

1. PR에서 "wordlist.txt" 파일을 탐색
2. "Edit this file"을 클릭하고 알파벳순으로 누락된 단어를 추가
3. 커밋 메시지를 추가하고 "Sign off and propose changes"을 선택

**참고**: 맞춤법 검사는 대소문자를 구분하지 않는다.

**[The Good Docs Project](https://thegooddocsproject.dev/)의 템플릿을 기반으로 이 가이드를 업데이트했다.**
