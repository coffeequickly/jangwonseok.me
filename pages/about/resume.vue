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
                <img src="@/assets/Wonseok_Jang.jpg" title="Wonseok Jang" alt="Wonseok Jang"/>
            </figure>
        </header>
        <table class="skills">
            <thead>
            <tr>
                <th colspan="2">Skills</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Language Stacks</th>
                <td>Javscript, CSS preprocessor(SCSS), HTML, vanilla PHP</td>
            </tr>
            <tr>
                <th>Front-end Stacks</th>
                <td>Vue.js, Vuex, Nuxt.js, jQuery</td>
            </tr>
            <tr>
                <th>Basic Knowledge and Utility Stacks</th>
                <td>Terminal Usage, HTTP/SSH Protocol, Git, Basic SQL Language <br/>Amazon Web Service EC2/S3/CloudFront<br/>Google Analytics, Tag Manager,Search Console</td>
            </tr>
            </tbody>
        </table>

        <table class="experience">
            <thead>
            <tr>
                <th>Experience</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>주식회사 얼라인업 <a href="https://alignup.io" target="_blank">https://alignup.io</a></dt>
                        <dd class="about">HR-Tech 스타트업, 조직문화 관련 컨설팅과 HR 서비스 제공.<br/><strong>※ 현재 재직중</strong></dd>
                        <dd class="role">Front-end Web Developer(Individual Contributor) @ Service Development Team</dd>
                        <dd class="duration">2020년 7월 | Seoul, South Korea</dd>
                        <dd>
                            <p>레거시 서비스 수습, 서비스 마이그레이션 및 개발/운영환경 구축</p>
                            <ul>
                                <li>태니지먼트 시스템(얼라인업) 레거시 수습</li>
                                <li>Wordpress 를 사용한 alignup.io 사이트 개발</li>
                                <li>Nuxt.js(Vue.js)를 사용한 alignup 서비스 Front-end 개발</li>
                                <li>Github Action + AWS S3, Cloudfront 활용한 Front-end 배포 CI 환경 구축</li>
                            </ul>
                        </dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>주식회사 위메스</dt>
                        <dd class="about">Edu-tech 기업, 교육서적 출판으로 2017년 부터 학원 및 독서실 오프라인 사업과 온라인 교육 콘텐츠 사업 시작.<br/><strong>※ 메가스터디교육으로 M&A 흡수합병(2020년 7월)</strong></dd>
                        <dd class="role">Chief Technology Officer <br/>Development Leader @ System Development Dept'</dd>
                        <dd class="duration">2017년 11월 - 2020년 7월 | Seoul, South Korea</dd>
                        <dd class="works">
                            <p>온/오프라인 신사업 기술 총괄</p>
                            <ul>
                                <li>개발팀 신규 조직과 채용 / 운영(5인 1사일로 조직)</li>
                                <li>webRTC 기술을 활용한 원격 학습관리 프로젝트 기획 및 개발</li>
                                <li>Wordpress 등 CMS를 활용한 사이트와 커뮤니티 개발, PHP 를 사용한 온라인 시험 플랫폼 개발 및 운영</li>
                                <li>H.264 + Video.js + Nginx 활용한 HLS/RTSP 스트리밍 환경 구축</li>
                                <li>AWS S3, Lambda, Serverless 활용한 공무원 기출문제 다운로드 + PDF 병합 시스템 시스템 개발</li>
                                <li>키오스크 화면 개발과 VAN OCX 연동, 서비스 VAN/PG 연동</li>
                                <li>Nuxt.js(Vue.js)를 사용해 자체 학원 운영 LMS 개발</li>
                                <li>Raspberry pi 와 QR 바코드 리더를 활용한 출석체크 클라이언트 개발</li>
                                <li>leaflet.js 활용한 좌석관리시스템 개발</li>
                                <li>Cordova Framework 사용한 크로스 플랫폼 애플리케이션 개발, 출시</li>
                                <li>위메스 M&A 기술 관련 인계 담당</li>
                            </ul>
                        </dd>
                    </dl>
                </td>
            </tr>

            <tr>
                <td colspan="2">
                    <dl>
                        <dt>SKUINC(서경대학교 학교기업) <a href="http://skuinc.net" target="_blank">http://skuinc.net</a></dt>
                        <dd class="about">서경대학교 산하 학교기업으로, 학내 디지털, 비-디지털 콘텐츠 생산 및 운영을 담당하는 학내 에이전시.</dd>
                        <dd class="role">Web Developer - Web Development Team</dd>
                        <dd class="duration">2016년 8월 - 2017년 11월 | Seoul, South Korea</dd>
                        <dd class="works">
                            <p>웹팀 소속 개발자로 웹 사이트 개발 및 유지보수를 담당.</p>
                            <ul>
                                <li>XpressEngine, Wordpress 를 사용한 사이트 개발, 유지보수</li>
                                <li>Wordpress 플러그인 개발, 기존 플러그인 마이그레이션과 성능 개선</li>
                                <li>Slack - Gitlab - Jenkis - Docker 를 사용한 개발환경 통합 기획</li>
                            </ul>
                        </dd>
                    </dl>
                </td>
            </tr>
            </tbody>
        </table>

        <table class="education">
            <thead>
            <tr>
                <th>Education</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>철학, 문학사 / 경희대학교</dt>
                        <dd>2008년 3월 - 2016년 6월</dd>
                        <dd>2010년 4월 - 2012년 4월 공군 전투비행단 복무</dd>
                    </dl>
                </td>
            </tr>
            </tbody>
        </table>

        <table class="award">
            <thead>
            <tr>
                <th>Award and Qualification</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>Google Analytics Individual Qualification</dt>
                        <dd>Google Skillshop</dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>2017 i-AWARDS KOREA 교육부문>전문교육 대상 <a href="http://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=7103" target="_blank">http://www.i-award.or.kr</a></dt>
                        <dd>SeoKyeong University Arts Institute Website</dd>
                    </dl>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <dl>
                        <dt>2017 K-Design Award Winner <a href="https://kdesignaward.com/exhibition/101345" target="_blank">https://kdesignaward.com</a> </dt>
                        <dd>SeoKyeong University Arts Institute Website</dd>
                    </dl>
                </td>
            </tr>
            </tbody>
        </table>
    </article>
</template>

<script>
export default {
    name: "resume"
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';

article{
    display:flex;
    width:100%;
    height:auto;
    flex-direction: column;
    text-align: left;
    line-height:1.5;

    header{
        margin-bottom:64px;

        h1{
            margin-bottom:8px;
        }

        dl{
            margin:0;
            padding:0;

            dt{
                font-size:18px;
                font-style: italic;
            }

            .links{
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                margin:8px 0;

                @media(max-width:$width-normal){
                    flex-direction: column;
                    line-height: 2;
                }

                dd{
                    margin:0;
                    padding:0;
                }
            }
        }

        figure{
            display:block;
            width:100%;
            margin:32px 0 0;
            padding:0;

            img{
                display:block;
                width:100%;
                height:auto !important;
            }
        }
    }

    table{
        border-collapse: collapse;
        width:100%;
        margin-bottom:64px;


        @media(max-width:$width-normal){
            &.skills {
                tbody {
                    tr {
                        display: block;
                        margin-bottom: 16px;

                        th, td {
                            display: block;
                            width: 100%;
                            padding: 0;
                        }

                        th {
                            margin-bottom: 2px;
                        }
                    }
                }
            }
        }

        thead{
            tr{
                th{
                    font-size:24px;
                    font-weight:bold;
                    letter-spacing: 0.5px;
                    padding:16px 0;
                }
            }
        }

        tbody{
            tr{
                th, td{
                    font-size:13px;
                    word-break: keep-all;
                    padding:8px 0;
                    vertical-align: top;
                }

                th{
                    width:260px;
                    font-weight:600;
                }

                td{
                    dl{
                        margin:0;
                        padding:0;

                        dt{
                            font-size:18px;
                            font-weight:600;
                            margin-bottom:8px;
                            padding:0;

                            a{
                                font-size:12px;
                                font-style: italic;
                                font-weight:normal;

                                @media (max-width : $width-normal) {
                                    display:inline-block;
                                    width:100%;
                                }
                            }
                        }

                        dd{
                            margin:0 0 4px;
                            padding:0;

                            strong{
                                font-weight:600;
                                color:$color-green-light;
                                font-size:12px;
                            }

                            ul{
                                li{
                                    margin-bottom:4px;
                                }
                            }

                            &.role, &.duration{
                                font-weight:600;
                                color:$color-gray-main;
                            }

                            &.role{
                                margin-bottom:0;
                                margin-top:8px;
                            }

                            &.duration{
                                margin-bottom:16px;
                            }

                            &.works{
                                p{

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
