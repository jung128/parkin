import Footer from "./Footer";
import Header from "./Header";

const ItemPage = () => {
    return (
        <div>
            <Header/>
            <div className="top-item">
            <img/>
            <h1>개인 주차장 공유</h1>
                <p>내 주차장, 이제는 공유하세요!<br/>
개인 주차공간 공유 기능 사용하지 않는 주차 공간, <br/>
그대로 두시겠어요?<br/>
당신이 비워두는 그 시간, 누군가는 주차 공간이 절실합니다. <br/>
우리 앱은 개인 주차장을 시간 단위로 <br/>
공유할 수 있는 기능을 제공합니다.</p>
</div>
<div className="item-list">
    <h3>상세 설명</h3>
<ul>
    <li>내 주차장 공유</li>
    <li>주차장 등록</li>
    <li>주차장 이용</li>
    <li>리뷰</li>
</ul>
<img/>
</div>
<Footer/>
        </div>
    );
};

export default ItemPage;