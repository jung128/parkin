import Footer from "./Footer";
import Header from "./Header";

// 위치값 혹은 개인 기능 페이지 애니메이션 효과는 react혹은 css로 선택하여 진행해 주시면 됩니다
const ItemPage = () => {
    return (
        <div>
            <Header />
            <div className="top-item">
                {/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 하시면 됩니다! */}
                <img src="../image/images/save.jpg" alt="메인 이미지" className="shrink" />
                <h1>개인 주차장 공유 (기능 내용 개인적 수정)</h1>
                <p>내 주차장, 이제는 공유하세요!<br />
                    개인 주차공간 공유 기능 사용하지 않는 주차 공간, <br />
                    그대로 두시겠어요?<br />
                    당신이 비워두는 그 시간, 누군가는 주차 공간이 절실합니다. <br />
                    우리 앱은 개인 주차장을 시간 단위로 <br />
                    공유할 수 있는 기능을 제공합니다.
                    (기능 내용 개인적 수정)</p>
            </div>
            <div className="item-list">
                <h3>상세 설명</h3>
                <ul>
                    <li>내 주차장 공유(기능 내용 개인적 수정)</li>
                    <li>주차장 등록(기능 내용 개인적 수정)</li>
                    <li>주차장 이용(기능 내용 개인적 수정)</li>
                    <li>리뷰(기능 내용 개인적 수정)</li>
                </ul>
                <img />
            </div>
            <Footer />
        </div>
    );
};

export default ItemPage;