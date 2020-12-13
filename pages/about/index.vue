<template>
    <article>
        <header>
            <h1>Wonseok Jang</h1>
            <dl>
                <dt>Service-oriented Web Software Engineer</dt>
                <div class="links">
                    <dd><a href="mailto:contact@jangwonseok.me">contact@jangwonseok.me</a></dd>
                    <dd><nuxt-link to="/">jangwonseok.me</nuxt-link></dd>
                    <dd><a href="https://github.com/coffeequickly" target="_blank">github.com/coffeequickly</a></dd>
                </div>
            </dl>
            <figure>
                <img src="@/assets/jangwonseok.jpg" title="Wonseok Jang" alt="Wonseok Jang"/>
            </figure>
        </header>

        <div class="notice">
            <p>저의 이력은 <nuxt-link to="/about/resume">이력서</nuxt-link> 페이지에서 확인할 수 있습니다.</p>
        </div>

        <table>
            <tbody>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>여러 키워드와 범주에 걸쳐 있는 개발자.</dt>
                        <dd>
                            <p>자신을 소개한다는 건 참 어려운 일인 것 같습니다. 보통 저는 저를 여러 키워드와 범주로 설명합니다.</p>
                            <ul>
                                <li>철학과 출신, 비전공 출신 웹 개발자</li>
                                <li>사원 부터 CTO , Individual Contributor 부터 Team Leader 사이를 넘나드는 개발자</li>
                                <li>에이전시와 인하우스, 스타트업과 상장사 까지 골고로 맛 본 개발자</li>
                                <li>레거시 부터 모던 스택, 서버 사이드 부터 프론트 엔드, 네트워크와 온프레미스, 그리고 클라우드에 걸쳐 있는 개발자</li>
                                <li>디자인과 디지털 마케팅에 관심 있는 개발자</li>
                                <li>조직 문화와 개발 문화에 적극적인 개발자</li>
                            </ul>
                        </dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>겁 없이 발을 담구다.</dt>
                        <dd>
                            <p>과학자가 되고 싶은 꿈을 가졌던 소년은 종로학평 모의고사 수학 9등급과 함께 현실의 벽 앞에서 꿈을 잃고 인문학의 문을 엽니다. 다행스럽게도 좋은 선택으로
                                입학한 철학과는(점수에 맞춰 들어간), 글 쓰고, 말하고, 남들과 의견을 나누는 방법을 가르쳐 줍니다.</p>
                            <p>2015년, 장학금을 미끼로 한 학과장님의 제안에 낚여 워드프레스로 사이트를 만들기 시작한게 문제의 화근입니다. 프로 공무원 준비생이 되어 공무원 실제로
                                시험도 보았지만, 시험장을 나오면서 원래 하려던 내 꿈이 뭐였는지 반성하고 다음날 부터 내가 좋아하는 일로 밥 벌어 먹을 준비를 시작합니다.</p>
                            <p>프로그래밍도 모른다는 멸시를 곱씹으며("html is not programing language") 언젠가는 개발자로 인정받고 말겠다는 다짐을 했고, 겨우
                                졸업 전 에이전시에 취업하면서 개발자로서의 커리어가 시작됩니다.</p>
                        </dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>에이전시 - 인하우스 사이에서.</dt>
                        <dd>
                            <p>웹 에이전시에서는 60여개의 사이트를 관리했고, 짧은 기간동안 몇 개의 사이트를 개발했습니다. 고슴도치도 내 새끼는 귀엽다고, 내 산출물을 아끼며 계속
                                발전시킬 수 있는 회사로 옮기게 됩니다.</p>
                            <p>1인 팀을 시작해 사원 넷으로 구성된 부서의 장이 되어 2년간 서비스를 운영/개발했고, M&A로 사업이 종료된 후 HR-Tech 스타트업으로 이직하게
                                됩니다.</p>
                            <p>이직 전 까지 네 자리에 육박하는 CRM을 하게 되는데, 이 때 부터 서비스 중심의 개발과 린 스타트 방식의 빠른 서비스 개발이 중요하다고 생각하기
                                시작합니다.</p>
                        </dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>자연스럽게 얇고 넓은 풀 스택이 되기 까지.</dt>
                        <dd>
                            <ul>
                                <li>퍼블리셔로 에이전시에서 시작하다 보니 프론트에서 처리가 안되면 자연스럽게 Wordpress 구조와 PHP를 건드리게 됩니다. SQL은 덤이었습니다.</li>
                                <li>덕분에 프래임워크라 흔히 부르는 구조에 익숙해지고, Role 보다는 거시적으로 프로젝트나 업무를 바라보게 됩니다.</li>
                                <li>서버가 온프레미스 Centos 였는데, 살아 남으려면 명령어라도 외워야 했고 486 컴퓨터 DOS M-DIR 부터 썼던 저는 자연스럽게 CMD 환경에 익숙해집니다.</li>
                                <li>PHP 개발환경을 바꿔야 한다고 해서 이것 저것 알아보고 다녔는데(마치 이클립스+bat 스크립트의 그것을 위해), 찾게 된게 Docker 였고, 2017년도 부터 지금 까지 컨테이너 환경을 이해하는데 바탕이 됩니다.</li>
                            </ul>
                            <p>다양한 경험이 지금의 스택들을 만들게 되었다고 생각합니다. 하다 못해 랜 선 찝어본 경험(흰주-주-흰초-파-흰파-초-흰갈-갈)도, 사무실 네트워크 세팅한 경험도 VPC 구성할 때 도움이 되는걸 보면 선택과 집중이 안 된 만큼 시너지가 튀어나오는 부분도 분명 있다고 생각합니다. 디버깅을 크롬 개발자 도구 부터 서버의 nginx log, 방화벽과 SQL 서버 까지 할 수 있는 건 분명 쓸모가 있었습니다!</p>
                        </dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>내 영역을 선 긋고 나누는 것 보다는 서로 물들이는 협업이 좋은 개발자.</dt>
                        <dd>
                            <p>채용 시장을 보면, "서버 엔지니어", "퍼블리셔", "프론트 엔드 개발자" 등 이름이 붙어 있는 Role 을 태그해 게시합니다. 여러 가지 감정이
                                교차합니다. 분명 개발자라고는 할 수 있는 것 같은데, 5년차가 지나가는 지금 이 시점에도 저에게 어떤 꼬리표를 붙여야 할지 아직도 모호합니다.</p>
                            <p>저는 함께 일하면 더 잘하고, 경계가 없으면 더 실력이 나오는 개발자입니다. 알고리즘 코딩 테스트 보다는 실무 중심의 대화가 저를 더 잘 표현할 수 있다
                                생각하고, 코드로는 표현할 수 없는 여러가지 경험과 서비스에 대한 생각들이 저의 개발자 타이틀을 가능케 한다 생각합니다.</p>
                            <p></p>
                            <p>제 생각이 더 궁금하시다면, 언제 든지 연락하실 수 있습니다. 앞으로는 이 공간에도 여러 생각들을 정리해 보려 합니다.</p>
                            <p>읽어 주셔서 감사합니다. 제 연락처는 아래에 있습니다.</p>
                        </dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>연락처</dt>
                        <dd>
                            <ul>
                                <li><a href="mailto:contact@jangwonseok.me">contact@jangwonseok.me</a></li>
                                <li><nuxt-link to="/">jangwonseok.me</nuxt-link></li>
                                <li><a href="https://github.com/coffeequickly" target="_blank">github.com/coffeequickly</a></li>
                                <li><a href="https://www.notion.so/jangwonseok/f32188d145e3413da7bd38df8b4131a2" target="_blank">(구) 자기소개 - Notion 으로 이동합니다.</a></li>
                            </ul>
                        </dd>
                    </dl>
                </td>
            </tr>
            </tbody>
        </table>
    </article>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
</style>
