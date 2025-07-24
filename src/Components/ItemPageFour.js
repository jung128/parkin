import Footer from "./Footer";
import Header from "./Header";

const ItemPageFour = () => {
    return (
        <div>
            {/* 안전을 위한 cctv (정회윤) */}
            <Header/>
            <div className="top-item">
                {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
                <img src="/image/images/jungimg/cctvimg.jpg" alt="메인 이미지" className="shrink" />
                <div className="top-text">
                    <h1>안전을 위한 cctv </h1>
                    <p>주차장 상황, 실시간으로 확인하세요<br />
                        실시간 CCTV 확인 기능<br />
                        불안했던 주차장 상황, 이제 눈으로 직접 확인하세요<br />
                        매번 불편하고 막연했던 주차장 이용… <br />
                        우리 앱은 실시간 CCTV 기능을 통해 주차장 상황을<br />
                        투명하게 보여주는 서비스를 제공합니다.
                    </p>
                    <p>혼잡도 확인 → 실시간 영상 확인 → 안전한 주차 완료!</p>
                </div>

            </div>
            <div className="item-list">
                <h3>상세 설명</h3>
                <ul>
                    <li><button>실시간 cctv 확인</button></li>
                    <li><button>안전한 관리</button></li>
                    <li><button>주차장 이용</button></li>
                    <li><button>리뷰</button></li>
                </ul>
            </div>
            <div className="contents">
                <div className="item-content">
                    <h3>이런 분들께 꼭 필요해요</h3>
                    <img src="/image/images/jungimg/full.jpg" alt="메인 이미지" className="shrink2" />
                    <p>주차하러 갔다가 자리가 없어서 되돌아온 분</p>
                    <p>늦은 밤이나 이른 아침 주차가 걱정되는 분 </p>
                    <p>주차장 관리자로서 현장 상황을 실시간으로 모니터링하고 싶은 분</p>
                </div>
                <div className="item-content">
                    <h3>어떻게 이용하나요?</h3>
                    <img src="/image/images/jungimg/pp.jpg" alt="메인 이미지" className="shrink3" />
                    <ul>
                        <p>주차장 선택</p>
                        <li>위치 기반으로 근처 주차장 검색</li>
                        <li>CCTV 지원 주차장 표시됨</li>
                    </ul>
                    <ul>
                        <p>CCTV 실시간 확인</p>
                        <li>현재 영상 스트리밍으로 바로 보기</li>
                        <li>출입구, 지하1층, 옥상 등 구역별 시청 가능</li>
                        <li>혼잡도 표시로 자리가 남았는지도 확인 가능</li>
                    </ul>
                    <ul>
                        <p>예약 or 이동 결정</p>
                        <li>주차장 상황에 따라 주차 장소 판단 가능</li>
                        <li>목적지 도착 전에 CCTV로 미리 확인해 이동 스트레스 ↓</li>
                    </ul>
                </div>
                <div className="item-content">
                    <h3>리얼 후기</h3>
                    <img src="/image/images/jungimg/men.jpg" alt="메인 이미지" className="shrink" />
                    <p>“주차장에 도착하기 전에 CCTV로 확인하니 너무 편해요.
                        헛걸음 안 하게 돼서 시간 절약돼요!” <br></br>-지은, 직장인-</p>
                    <p>“혼자 야근할 때 무서웠는데, CCTV로 상황 확인하고 나니 안심됐어요.” -선아, 대학생-</p>
                </div>
                <div className="item-content">
                    <h3>지금 바로 시작해보세요! 복잡한 주차장, 이제는 눈으로 직접 보고 판단하는 시대! 당신의 주차를 더 똑똑하게 만드는 실시간 CCTV, 지금 만나보세요.</h3>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ItemPageFour;