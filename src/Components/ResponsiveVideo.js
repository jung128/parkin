import { useEffect, useState } from 'react';

const ResponsiveVideo = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 768) return "mobile";
    if (width < 1440) return "tablet";
    return "pc";
  }

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 모바일만 다른 영상/태블릿,PC는 같은 영상
  const selectedVideo =
    deviceType === "mobile" ? "PINbennerMobile.mp4" : "PINbennerPC.mp4";

  return (
    <div className="video-wrap">
      <video
        src={`${process.env.PUBLIC_URL}/video/${selectedVideo}`}
        controls
        autoPlay
        muted
        loop
        width={deviceType === 'pc' ? "90%" : "100%"}
      />
    </div>
  );
};

export default ResponsiveVideo;
