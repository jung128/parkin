import { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
/* .정기권 및 멤버십 혜택 (정수진) */
/* 이미지도 기능페이지에 맞게 개인적으로 수정해서 사용 */

const ItemPageThree = () => {
  const refSection1 = useRef(null);
  const refSection2 = useRef(null);
  const refSection3 = useRef(null);
  const refSection4 = useRef(null);
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="three-item-header">
        <img
          src={`${process.env.PUBLIC_URL}/image/images/membership.png`}
          alt="혜택 이미지"
        />
        <div className="header-text">
          <h1>정기권 및 멤버십 혜택</h1>
          <p>
            주차장을 매일 이용하는 분들을 위한 스마트한 선택
            <br />
            정기권으로 매달 최대 13만 원 절약! <br />
            멤버십으로 주차하고 포인트도 쌓고
            <br />
            쇼핑·병원에서도 주차 혜택을 한 번에!
          </p>
          <h2>P’IN은 정기권과 멤버십이 함께할 때 빛나요!</h2>
        </div>
      </div>
      <div className="three-item-list">
        <h3>상세 설명</h3>
        <ul>
          <li>
            <button onClick={() => scrollToSection(refSection1)}>
              정기권 소개
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refSection2)}>
              멤버십 혜택
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refSection3)}>
              요금 비교
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refSection4)}>
              구매하기
            </button>
          </li>
        </ul>
      </div>

      {/* 여기 부분은 삭제 하신 후 개인 적으로 폼 만들어 주시면 됩니다 */}
      <div className="page-three-contents">
        <div className="three-item-content" ref={refSection1}>
          <h3>정기권 소개</h3>
          <p>하루 커피 값 아껴서, 한 달이면 9만 원 절약!</p>
          <img />
          <p>
            월 정액제로 주차 걱정 끝!
            <br />
            고정된 지출, 확실한 절약으로 고민하지말고 구매하세요!
          </p>
          <p>
            웹 및 앱에서 간편한 정기권 구매로
            <br />
            주차가 필요한 기간만큼 쉽고 빠르게 구매가 가능합니다
          </p>
          <p>
            잊기 쉬운 월 정기 결제는 손쉽게 기간 연장!
            <br />
            매월 자동결제로 정기권 기간을 연장하세요
          </p>
          <p>평일·주말·야간·주간 옵션 선택 가능</p>
          <p>월 49,000원으로 주차 무제한</p>
        </div>
        <div className="three-item-content" ref={refSection2}>
          <h3>멤버십 소개</h3>
          <img />
          <p>
            가입만 해도 포인트 지급! <br />
            쓰면 쓸수록 쌓이는 리워드 시스템
          </p>
          <p>월 50,000원으로 다양한 혜택을 누려보세요</p>

          <h3>제휴 매장 할인</h3>
          <img />
          <p>
            쇼핑은 즐겁게, 주차는 무료로! 제휴 카페·마트·병원 방문 시 이용
            금액에 따라 자동 주차 할인 적용 별도 인증 없이 앱과 매장 POS 시스템
            연동으로 스마트하게 처리 스타벅스·이마트·스타필드 등 20여곳 사용
            가능 – 등록 차량 번호 자동 인증 - 매장 검색 시 주차 지원 여부 확인
            가능
          </p>
          <p></p>
          <h3>포인트 적립</h3>
          <img />
          <p>
            주차만 했을 뿐인데 포인트가 쌓인다? 멤버십이니까 가능해요! 가입 즉시
            2,000 포인트 + 친구 초대 시 1,000 포인트 지급 – 결제 시 포인트 사용
            가능 - 사용 실적에 따라 등급 업그레이드 – 등급별 추가 할인 제공
          </p>
          <h3>요금 할인 쿠폰</h3>
          <img />
          <p>
            멤버십 회원만 받는 한정 할인 혜택, 알뜰 주차의 시작! 이달의 쿠폰
            확인하셨나요? 놓치면 손해! 꼭 필요할 때 쓰는 한 장의 여유!
            할인쿠폰으로 스마트하게 주차하세요 - 원하는 이용 시간대나 요일에
            적용 가능 - 친구 초대 시 50% 할인 쿠폰 발급 가능 - 생일 고객 1시간
            무료 쿠폰 제공
          </p>
        </div>
        <div className="three-item-content" ref={refSection3}>
          <h3>이용 요금 비교</h3>
          <p>
            일반 주차 요금과 비교하면, 정기권과 멤버십의 가성비가 확실히
            드러납니다
          </p>
          <p>일반 주차: 하루 5,000원 × 30일 = 150,000원 </p>
          <p>정기권: 월 49,000원으로 무제한 주차</p>
          <p>멤버십: 추가 포인트/쿠폰/제휴 할인까지 포함</p>
          <p>
            | 항목 | 일반 요금 | 정기권 이용 시 | 절약 금액 | | ---------- |
            -------- | -------- | ---------------- | | 평일 1시간 주차 | 3,000원
            | 무제한 포함 | 3,000원 | | 주말 하루 6시간 | 18,000원 | 무제한 포함
            | 18,000원 | | 한 달 20일 이용 | 180,000원 | 49,000원 | **131,000원
            절약!** |
          </p>
          <h3>당신에게 맞는 요금제는?</h3>
          <p>
            직장인 A씨 – “출퇴근 때만 주차 필요해요” → [주간 정기권 추천]
            프리랜서 B씨 – “자주 이동해서 유동적인 주차가 필요해요” → [멤버십 +
            쿠폰 추천] 엄마 C씨 – “마트·병원 많이 다녀요” → [멤버십 + 제휴할인]
          </p>
          <p>
            주 5일 이상 주차한다면? → <strong>정기권</strong>이 필수!{" "}
          </p>
          <p>
            자주 쇼핑하거나 병원을 자주 간다면? → <strong>멤버십</strong>이 더
            유리!{" "}
          </p>
          <p>
            둘 다 해당된다면? → <strong>정기권 + 멤버십</strong>으로 혜택
            극대화!
          </p>
          <p>내 주차 패턴에 맞춰 스마트한 요금제를 선택하세요!</p>
        </div>

        <div className="three-item-content" ref={refSection4}>
          <h3>간편하게 시작하세요!</h3>
          <p>
            원하는 요금제를 선택하면
            <br />
            바로 구매할 수 있어요
          </p>
          <p>
            매일 주차 스트레스를 줄이고 싶다면? 주차할 때마다 혜택을 누리고
            싶다면?
          </p>
          <p>
            <strong>P’IN 정기권 & 멤버십</strong>으로 지금 바로 시작해보세요!
          </p>

          <div className="buy-button">
            <button>정기권 구매하기</button>
            <button>멤버십 가입하기</button>
            <button>정기권 + 멤버십</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemPageThree;
