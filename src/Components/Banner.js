import { useState, useEffect } from 'react';

const Banner = () => {
  const [deviceMode, setDeviceMode] = useState("mobile");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextSlide, setCurrentTextSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(window.innerWidth);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    "/image/images/main.png",
    "/image/images/save.png",
    "/image/images/membership.png",
    "/image/images/CCTV.png",
    "/image/images/cupon.png",
    "/image/images/navi.png",
  ];

  // 슬라이드 복제 - 무한 루프 효과를 위해
  const extendedSlides = [...slides, ...slides.slice(0, 3)];

  const textItems = [
    "주차장 찾기",
    "주차예약",
    "정기권/멤버십",
    "할인/쿠폰",
    "길안내",
    "CCTV",
    "결제정보",
    "개인 주차장 공유"
  ];

  useEffect(() => {
    const updateDeviceMode = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setDeviceMode("desktop");
      } else if (width >= 768) {
        setDeviceMode("tablet");
        setSlideWidth(width / 3);
      } else {
        setDeviceMode("mobile");
        setSlideWidth(width);
      }
    };

    updateDeviceMode();
    window.addEventListener('resize', updateDeviceMode);
    return () => window.removeEventListener('resize', updateDeviceMode);
  }, []);

  // 5초마다 자동으로 슬라이드 변경하는 기능 
  useEffect(() => {
    if (isTransitioning) return; // 전환 중에는 자동 슬라이드 중지

    const autoSlideInterval = setInterval(() => {
      const step = deviceMode === "tablet" ? 3 : 1;
      const maxIndex = deviceMode === "tablet" ? slides.length - 3 : slides.length - 1;
      
      // 항상 오른쪽으로 이동하는 자동 슬라이드
      handleSlideChange(1);
    }, 5000);
    
    return () => clearInterval(autoSlideInterval);
  }, [deviceMode, slides.length, isTransitioning]);

  const handleSlideChange = (dir) => {
    if (isTransitioning) return; // 이미 전환 중이면 무시
    
    setIsTransitioning(true);
    
    const step = deviceMode === "tablet" ? 3 : 1;
    const maxIndex = deviceMode === "tablet" ? slides.length - 3 : slides.length - 1;

    if (dir === 1) {
      // 오른쪽으로 이동
      if (currentSlide >= maxIndex) {
        // 마지막 슬라이드에서 첫 슬라이드로 이동할 때
        setCurrentSlide(maxIndex + step); // 확장된 슬라이드로 이동
        
        // 애니메이션 후 실제 첫 슬라이드로 리셋
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 500); // transition 시간과 일치시킴
      } else {
        setCurrentSlide(currentSlide + step);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    } else {
      // 왼쪽으로 이동
      if (currentSlide <= 0) {
        setCurrentSlide(-step); // 확장된 슬라이드의 끝으로 이동
        
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(maxIndex);
        }, 500);
      } else {
        setCurrentSlide(currentSlide - step);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }
  };

  const changeTextSlide = (dir) => {
    if (dir === 1) {
      setCurrentTextSlide((prev) => (prev + 1) % 2);
    } else {
      setCurrentTextSlide((prev) => (prev - 1 + 2) % 2);
    }
  };

  const getVisibleTextItems = () => {
    const startIndex = currentTextSlide * 4;
    return textItems.slice(startIndex, startIndex + 4);
  };

  // 실제 translateX 계산
  const translateX = currentSlide * slideWidth;

  return (
    <>
      {/* 텍스트 영역 */}
      <div className="text-container">
        {deviceMode === "mobile" ? (
          <div className="text-grid-mobile">
            {getVisibleTextItems().map((item, index) => (
              <div key={`${currentTextSlide}-${index}`} className="text-item-mobile">
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-flex-tablet">
            {textItems.map((item, index) => (
              <div key={index} className="text-item-tablet">
                {item}
              </div>
            ))}
          </div>
        )}

        {deviceMode === "mobile" && (
          <>
            <button onClick={() => changeTextSlide(-1)} className="text-nav-button prev">‹</button>
            <button onClick={() => changeTextSlide(1)} className="text-nav-button next">›</button>
          </>
        )}
      </div>

      {/* 이미지 영역 */}
      {deviceMode === "desktop" ? (
        <div className="grid-desktop">
          {slides.map((slide, index) => (
            <div className="grid-item" key={index}>
              <img src={slide} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      ) : (
        <div className="slider-container" style={{ maxWidth: `${slideWidth * (deviceMode === "tablet" ? 3 : 1)}px` }}>
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${translateX}px)`,
              width: `${extendedSlides.length * slideWidth}px`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none'
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div className="slide" key={index} style={{ width: `${slideWidth}px` }}>
                <img src={slide} alt={`slide-${index}`} />
              </div>
            ))}
          </div>

          {/* 화살표: 데스크탑에서는 숨김 */}
          {/* 화살표: 데스크탑에서는 숨김 */}
{deviceMode !== "desktop" && (
  <>
    <button className="nav-arrow prev" onClick={() => handleSlideChange(-1)}>‹</button>
    <button className="nav-arrow next" onClick={() => handleSlideChange(1)}>›</button>
  </>
)}
        </div>
      )}
    </>
  );
};

export default Banner;