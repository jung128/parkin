import Footer from "./Footer";
import Header from "./Header";


// 위치값 혹은 개인 기능 페이지 애니메이션 효과는 react혹은 css로 선택하여 진행해 주시면 됩니다
const ItemPage = () => {
    return (
        <div>
            <Header/>
            <div className="top-item">

                {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
                <img src="../image/images/save.jpg" alt="메인 이미지" className="shrink" />
                <div className="top-text">
                    <h1>안전을 위한 CCTV</h1>
                    <p>주차장 상황, 실시간으로 확인하세요<br />
                        실시간 CCTV 확인 기능 <br />
                        불안했던 주차장 상황, 이제 눈으로 직접 확인하세요<br />
                        매번 불편하고 막연했던 주차장 이용…<br />
                        우리 앱은 실시간 CCTV 기능을 통해 주차장 상황을<br />
                        투명하게 보여주는 서비스를 제공합니다.
                        혼잡도 확인 → 실시간 영상 확인 → 안전한 주차 완료</p>
                </div>

            </div>
            <div className="item-list">
                <h3>상세 설명</h3>
                <ul>
                    <li><button>내 주차장 공유(기능 내용 개인적 수정)</button></li>
                    <li><button>주차장 등록(기능 내용 개인적 수정)</button></li>
                    <li><button>주차장 이용(기능 내용 개인적 수정)</button></li>
                    <li><button>리뷰(기능 내용 개인적 수정)</button></li>
                </ul>
            </div>


            {/* 여기 부분은 삭제 하신 후 개인 적으로 폼 만들어 주시면 됩니다 */}
            <div className="contents">
                <div className="item-content">
                    <h3>주차장 선택</h3>
                    <p>위치 기반으로 근처 주차장 검색</p>
                    <img />
                    <p></p>
                    <p></p>
                </div>
                <div className="item-content">
                    <h3></h3>
                    <img />
                    <p></p>
                    <p></p>
                </div>
                <div className="item-content">
                    <h3></h3>
                    <img />
                    <p></p>
                    <p></p>
                </div>
                <div className="item-content">
                    <h3></h3>
                    <img />
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;