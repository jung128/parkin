import Footer from "./Footer";
import Header from "./Header";

const Brandstory = () => {
  return (
    <>
      <Header />
      <div className="brandstory">
        <div className="BS-header">
          <div className="BS-slogan">
            <h1>돌지 말고, 바로 Park In</h1>
          </div>
          <div className="BS-mind">
            <h2>우리가 마주한 불편 </h2>
            <p>출근 시간, 차 댈 곳 찾느라 15분씩 도는 일상</p>
            <p>병원 예약 시간보다 늦게 도착하는 스트레스</p>
            <p>빌딩마다 다른 정산 시스템, 헷갈리는 요금 구조</p>
            <h2>그래서, 우리가 시작했어요</h2>
            <p>
              <strong>주차</strong>의 문제를 가장 먼저 해결하고 싶었어요
            </p>
            <p>진짜 필요한 건 빠르고 똑똑한 시스템이었죠</p>
            <p>우리는 그렇게 P’IN을 만들었습니다</p>
          </div>
        </div>
        <div className="BS-behind">
          <h1>브랜드 탄생 배경</h1>
          <h2>
            언제, 어떤 계기로 시작됐는지 간단히 (예: 프로젝트에서 시작, 팀의
            경험 등)
          </h2>
          <h2>
            언제, 어떤 계기로 시작됐는지 간단히 (예: 프로젝트에서 시작, 팀의
            경험 등)
          </h2>
          <p>팀의 목표, 철학, 가치</p>
        </div>
        <div className="BS-future">
          <h1>브랜드가 지향하는 미래</h1>
          <h2>단순 ‘주차’가 아닌, ‘이동 경험’을 바꾸고 싶은 포부</h2>
          <h2>
            우리는 주차를 넘어 도시와 이동의 방식을 새롭게 디자인하고 있습니다.
          </h2>
          <p>사용자 중심 / 환경 중심 / 기술 중심 등 방향 제시</p>
        </div>
        <div className="BS-simbol">
          <h1>로고에 담긴 의미나 색의 철학</h1>
          <h2>
            P’IN의 둥근 로고는 언제나 당신 곁에 있는 ‘안심의 공간’을 상징합니다
          </h2>
          <div className="BS-imgbox">
            <div className="mark">
              <div>
                <p>Symbol Mark</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo-05.png`}
                  alt="심볼 마크"
                />
              </div>
              <div>
                <p>Word Mark</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo2-07.png`}
                  alt="워드 마크"
                />
              </div>
            </div>
            <div className="logo">
              <div>
                <p>Horizontal</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo-03.png`}
                  alt="가로버전로고"
                />
              </div>
              <div>
                <p>Vertical</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo2-05.png`}
                  alt="세로버전로고"
                />
              </div>
            </div>
            <div className="color">
              <div>
                <p>Colors</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo2-04.png`}
                  alt="메인색깔로고"
                />
              </div>
              <div>
                <p>Gray Scale</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/logo/Logo2-03.png`}
                  alt="회색깔로고"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brandstory;
