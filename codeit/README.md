# weekly paper

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

## Git Flow 브랜치 전략에 대해 설명해 주세요.
