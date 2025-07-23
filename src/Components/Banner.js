import { useState, useEffect } from 'react';

const Banner = () => {
  const [deviceMode, setDeviceMode] = useState("mobile");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextSlide, setCurrentTextSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(window.innerWidth);

  const slides = [
    "/image/images/main.jpg",
    "/image/images/save.jpg",
    "/image/images/membership.jpg",
    "/image/images/CCTV.jpg",
    "/image/images/cupon.jpg",
    "/image/images/navi.jpg"
  ];

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

  // 10초마다 자동으로 슬라이드 변경하는 기능 
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      const step = deviceMode === "tablet" ? 3 : 1;
      const maxIndex = deviceMode === "tablet" ? slides.length - 3 : slides.length - 1;
      
      setCurrentSlide((prev) => (prev + step > maxIndex ? 0 : prev + step));
    }, 10000);
    
    return () => clearInterval(autoSlideInterval);
  }, [deviceMode, slides.length]);

  const changeSlide = (dir) => {
    const step = deviceMode === "tablet" ? 3 : 1;
    const maxIndex = deviceMode === "tablet" ? slides.length - 3 : slides.length - 1;

    if (dir === 1) {
      setCurrentSlide((prev) => (prev + step > maxIndex ? 0 : prev + step));
    } else {
      setCurrentSlide((prev) => (prev - step < 0 ? maxIndex : prev - step));
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
              width: `${slides.length * slideWidth}px`,
              transition: 'transform 0.5s ease'
            }}
          >
            {slides.map((slide, index) => (
              <div className="slide" key={index} style={{ width: `${slideWidth}px` }}>
                <img src={slide} alt={`slide-${index}`} />
              </div>
            ))}
          </div>

          {/* 화살표: 데스크탑에서는 숨김 */}
          {deviceMode !== "desktop" && (
            <>
              <button className="nav-arrow prev" onClick={() => changeSlide(-1)}>‹</button>
              <button className="nav-arrow next" onClick={() => changeSlide(1)}>›</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Banner;