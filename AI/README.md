## AI


### 목차

- [Skill](#skill)
- [Agent](#agent)
- [Plugin](#plugin)
- [Curation / Resource](#curation--resource)
- [Framework / Spec](#framework--spec)
- [Tool / Runtime](#tool--runtime)


<br />


### Skill


[Agent Skills For Real Engineers](https://github.com/mattpocock/skills)


TypeScript 교육 콘텐츠로 잘 알려진 **Matt Pocock**이 자신의 `.claude` 디렉토리를 그대로 공개한 스킬 모음

코드 리뷰, 리팩터링, 타입 추론 보조 등 **실무 엔지니어의 일상 루틴**에 바로 끼워 쓸 수 있는 형태로 정리되어 있어, Claude Code를 처음 세팅할 때 레퍼런스로 삼기 좋음


<br />


[claude-seo](https://github.com/AgriciDaniel/claude-seo)


SEO 작업 전반을 자동화하기 위한 **종합 SEO 스킬 패키지**. 

키워드 리서치, 메타태그 점검, 구조화된 데이터 검증 등 **19개 서브 스킬**과 콘텐츠/기술/링크 빌딩 등을 분담하는 **12개 서브에이전트**, 그리고 외부 도구와 연동되는 **3개 확장 기능**을 제공해 사이트 최적화를 한 번에 다룰 수 있음


<br />


[k-skill](https://github.com/NomaDamas/k-skill)


한국 사용자를 위한 **로컬라이즈드 스킬 컬렉션**. **SRT·KTX 예매 조회**, 기상청 기반 **날씨 정보**, 국내 **주식·금융 데이터** 등 한국 환경에서 자주 쓰이는 서비스에 특화되어 있어, 글로벌 스킬에서 다루기 어려운 한국 한정 기능을 보완해 줌


<br />


[harness](https://github.com/revfactory/harness)


스킬을 직접 만들어주는 **메타 스킬**. 도메인 요구사항을 입력하면 **그에 맞는 에이전트 팀 구조와 전용 스킬 셋을 설계·생성**해 주기 때문에, 매번 처음부터 스킬을 짜는 대신 **자동 생성된 골격 위에서 커스터마이즈**하는 방식으로 작업 속도를 끌어올릴 수 있음


<br />


[pm-skills](https://github.com/phuryn/pm-skills)


프로덕트 매니저를 위한 **에이전틱 스킬 마켓플레이스**. **디스커버리 → 전략 → 실행 → 런칭 → 그로스**의 PM 라이프사이클 전 단계를 커버하는 **100여 개의 스킬**을 제공해, 유저 인터뷰 정리부터 PRD 작성, GTM 전략 수립, 출시 후 분석까지 단계별로 활용 가능


<br />


[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)


**Vercel에서 공식적으로 관리**하는 에이전트 스킬 컬렉션. 

Vercel/Next.js 생태계의 베스트 프랙티스가 녹아 있어 **프론트엔드 배포 파이프라인, 서버리스 함수, Edge 환경**과 자연스럽게 맞물리는 워크플로우를 구성할 수 있음


<br />


[vercel-labs/next-skills](https://github.com/vercel-labs/next-skills)


**Next.js 전용 스킬 모음**.

App Router, Server Components, Server Actions 등 **최신 Next.js 패러다임에 맞춘 가이드**가 포함되어 있어, Next.js 프로젝트에서 Claude가 컨벤션에 맞는 코드를 생성하도록 유도하기 좋음


<br />


[Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)


**컨텍스트 엔지니어링** 관점에서 정리된 종합 스킬 컬렉션. 

단순 프롬프트 모음이 아니라 **멀티 에이전트 아키텍처 설계, 컨텍스트 윈도우 관리, 프로덕션 환경에서의 안정성 확보**까지 다루기 때문에 실제 서비스에 LLM을 투입할 때 참고 자료로 유용


<br />


### Agent


[oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)


**팀 단위 협업**에 특화된 Claude Code용 **멀티 에이전트 오케스트레이션 프레임워크**. 

여러 에이전트가 **역할을 분담**하고 산출물을 주고받는 구조를 손쉽게 정의할 수 있어, 단일 에이전트로 처리하기 어려운 **대규모 코드 변경이나 리서치성 태스크**에 적합


<br />


[awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)


다양한 개발 유스케이스를 다루는 **100여 개의 전문 서브에이전트** 큐레이션. 

**백엔드, 프론트엔드, DevOps, QA, 데이터, 보안** 등 직군별로 잘 분류되어 있어 필요한 역할만 골라 즉시 도입 가능하고, 새 서브에이전트를 만들 때 구조 참고용으로도 좋음


<br />


[pixel-agents](https://github.com/pablodelucca/pixel-agents)


**픽셀 오피스 컨셉**의 실험적 에이전트 플랫폼. 

가상의 오피스 공간에 에이전트들을 배치하고 **시각적인 인터랙션**을 통해 협업하도록 설계되어, 멀티 에이전트 시스템을 직관적으로 이해하고 데모하기에 흥미로운 프로젝트


<br />


### Plugin


[claude-octopus](https://github.com/nyldn/claude-octopus)


**최대 8개의 AI 모델을 동시에** 활용하는 Claude Code 멀티 모델 코디네이션 플러그인. 

각 모델의 응답을 **병렬로 받아 비교·검증**할 수 있어, 단일 모델의 편향이나 오답 위험을 줄이고 **합의 기반의 견고한 결과물**을 얻고자 할 때 유용


<br />


[claude-hud](https://github.com/jarrodwatts/claude-hud)


Claude Code 작업 상태를 한눈에 보여주는 **HUD(Heads-Up Display) 플러그인**. 

**현재 컨텍스트 사용량, 활성화된 도구, 실행 중인 에이전트, 진행 상황** 등을 실시간으로 표시해 주기 때문에 장시간 작업 시 컨텍스트 한계를 미리 인지하고 대응하기 좋음


<br />


### Curation / Resource


[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)


Claude Code 생태계의 **대표적인 awesome 리스트**. **스킬, 훅, 슬래시 커맨드, 오케스트레이터, 플러그인** 등 카테고리별로 정리되어 있어 새로운 기능이나 워크플로우를 탐색할 때 가장 먼저 들러보기 좋은 출발점


<br />


[claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)


**실험적 코딩에서 프로덕션급 에이전틱 엔지니어링**으로 넘어가는 과정을 정리한 베스트 프랙티스 모음. 단순 팁 나열이 아니라 **실제 팀 단위 운영 시 부딪히는 이슈와 해결 패턴**이 담겨 있어, Claude Code를 조직에 정착시키려 할 때 참고하기 좋음


<br />


[claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)


**훅, 스킬, 서브에이전트, 워크플로우**를 모두 갖춘 Claude Code 프로젝트 구성의 **레퍼런스 예제**. 

실제로 동작하는 풀 패키지 구성을 보여주기 때문에, 처음부터 구조를 잡기 어려울 때 **템플릿처럼 복제해 시작**하기 좋음


<br />


[trailofbits/claude-code-config](https://github.com/trailofbits/claude-code-config)


보안 컨설팅으로 유명한 **Trail of Bits**가 공개한 사내 Claude Code 운영 설정. 

**보안에 민감한 환경에서의 디폴트 설정, 권한 관리 정책, 워크플로우 가이드라인**이 담겨 있어 보안성을 챙기면서 에이전트를 도입하려는 팀에 시사점을 줌


<br />


### Framework / Spec


[langgraph](https://github.com/langchain-ai/langgraph)


**LangChain AI**가 만든 그래프 기반 에이전트 프레임워크. 에이전트 동작을 **상태와 노드, 엣지의 그래프 구조**로 표현해 **분기·반복·휴먼 인 더 루프** 같은 복잡한 흐름을 명시적으로 모델링할 수 있어, 단순 ReAct 루프를 넘어선 **신뢰성 있는 프로덕션 에이전트** 구축에 적합


<br />


[agents.md](https://github.com/agentsmd/agents.md)


코딩 에이전트에게 프로젝트 컨벤션을 전달하기 위한 **개방형 포맷 표준**.

 `README.md`가 사람을 위한 문서라면, **`AGENTS.md`는 에이전트를 위한 1차 가이드** 역할을 하도록 설계되어 있어 Claude·Cursor·기타 코딩 에이전트가 프로젝트 컨텍스트를 일관되게 이해하도록 도와줌


<br />


### Tool / Runtime


[ollama](https://github.com/ollama/ollama)


**로컬 LLM 실행 환경**의 사실상 표준. **Llama, Qwen, Kimi, GLM** 등 다양한 오픈소스 모델을 단일 CLI로 다운로드·실행할 수 있고 OpenAI 호환 API까지 제공해, **인터넷 연결 없이 또는 데이터 보안이 중요한 환경**에서 LLM을 다룰 때 주된 선택지가 됨


<br />


[browser-use](https://github.com/browser-use/browser-use)


AI 에이전트가 **실제 웹 브라우저를 조작**할 수 있도록 해주는 Python 라이브러리. 

셀렉터에 의존하지 않고 **시각·DOM 정보를 결합**해 페이지를 해석하기 때문에, **로그인, 양식 작성, 데이터 수집** 등 사람의 브라우저 작업을 안정적으로 자동화하는 데 적합


<br />


[openclaw](https://github.com/openclaw/openclaw)


**OS와 플랫폼을 가리지 않고** 동작하는 개인용 AI 어시스턴트 프로젝트. 

macOS·Windows·Linux 어디서든 동일한 인터페이스로 쓸 수 있도록 설계되어, **개인 워크스테이션 전반에서 일관된 AI 비서 경험**을 구축하려는 사용자에게 잘 맞음


<br />
