# weekly paper

- [1주차](#css의-cascading에-대해-설명해-주세요)
- [2주차](#git에서-branch-merge-방법들과-각-방법의-특징을-설명해-주세요)

**1 week**

## CSS의 Cascading에 대해 설명해 주세요.

Cascading은 css 적용 순서를 의미합니다. 즉, `스타일에 대한 우선순위를 결정하는 것`을 Cascading이라고 합니다.

Cascading은 중요도, 명시도, 코드 순서로 우선순위를 결정합니다.

먼저 인라인 스타일이 Cascading에서 가장 우선순위가 높으며 다음으로 내부 스타일 시트, 외부 스타일 시트, 웹 브라우저 기본 스타일시트(user agent stylesheet) 순서로 우선순위가 정해집니다.

명시도란 명확하게 특정할 수록 우선순위가 높아집니다. !important를 쓰면 명시도를 가장 강하게 표현할 수 있습니다.

코드 순서로 보았을 때 같은 선택자를 쓰는 경우 후에 쓰는 것이 더 우선순위가 높습니다.

## position의 속성들과 각각의 특징을 설명해 주세요.

position의 속성에는 `static, relative, absolute, fixed, sticky`가 있습니다.

`static`은 position 속성의 기본 값으로 원래 있어야 할 위치에 배치됩니다.

`relative`는 상대적인 포지션으로 원래 있어야 할 위치를 기준으로 배치하며 원래 있던 공간은 기존대로 비워놓고 배치합니다.

`absolute`는 가장 가까운 부모요소를 기준으로 배치됩니다. relative와 다르게 원래 있던 공간을 차지하지 않고 배치에서 아예 빠지게 됩니다.

`fixed`는 브라우저 화면을 기준으로 배치됩니다.

`sticky`는 스크롤하지 않을 때는 static과 같지만 스크롤할 때에는 fixed와 유사하게 동작합니다. sticky는 부모요소 안에 소속되어 있다고 할 수 있습니다.

**2 week**

## Git에서 branch merge 방법들과 각 방법의 특징을 설명해 주세요.

Git에서 branch merge 방법으로 merge, rebase merge, squash merge가 있습니다.

먼저 `merge`는 Fast-Forward와 3-Way-Merge가 많이 사용됩니다. Fast-Forward는 조상 브랜치 (master or main)에 변경사항이 없다면 조상 브랜치를 바로 머지하고자 하는 브랜치로 이동해서 Merge하는 것입니다.

3-Way-Merge는 각 브랜치의 최신 commit과 공통 조상 커밋을 비교하고 새로운 Commit을 만들어 Merge하는 전략입니다.

`rebase merge`의 경우 merge와 다르게 merge commit이 생기지 않습니다. 하나의 브랜치에서 작업한 것처럼 보이므로 히스토리를 간결하게 하고 싶을 때 사용합니다.

`squash merge`는 여러 개의 commit을 하나의 commit으로 만들어줍니다.

## Git Flow 브랜치 전략에 대해 설명해 주세요.

Git Flow는 `main, develop, supporting 브랜치로 구분해 브랜치를 관리`하는 전략을 의미합니다.

먼저 `main 브랜치`는 출시 가능한 프로덕션 코드를 모아두는 브랜치이며 서비스와 직접적으로 연결되어 있어 최종적인 코드가 올라가는 브랜치입니다.

`develop 브랜치`는 개발을 위한 코드를 모아두는 브랜치로 develop에서 개발이 완료되면 main 브랜치로 머지합니다.

`supporting 브랜치`는 일정 기간 동안만 유지되는 feature, release, hotfix 브랜치로 구성됩니다. feature은 기능을 개발하는 브랜치, release는 출시 버전을 준비하는 브랜치, hotfix는 출시 버전에서 발생한 버그를 수정하는 브랜치 입니다.
