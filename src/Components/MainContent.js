import { useEffect, useState } from "react";
import keywordData from "../assets/keywords.json";

const MainContent = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main-content">
      {keywordData.map((section) => (
        <section className="main-map" key={section.id}>
          <img
            src={
              isTablet
                ? `${process.env.PUBLIC_URL}${section.img.tablet}`
                : `${process.env.PUBLIC_URL}${section.img.mobile}`
            }
            alt={section.img.alt}
          />
          <div className="main-title">
            <h2>{section.title}</h2>
            <h3>
              {section.sub}
              <span>{section.sub2}</span>
            </h3>
            <div className="main-text">
              <p>{section.text1}</p>
              <p>{section.text2}</p>
              <p>{section.text3}</p>
              <p>{section.text4}</p>
            </div>
            <button>서비스 자세히 보기　〉</button>
          </div>
        </section>
      ))}
    </main>
  );
};

export default MainContent;
