import { useEffect, useState, useRef } from "react";
import keywordData from "../assets/keywords.json";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ItemPage'); // ItemPage로 이동
  };


useEffect(() => {
  sectionsRef.current.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", 
          toggleActions: "play none none none",
        },
      }
    );
  });
}, []);

  return (
    <main className="main-content">
      {keywordData.map((section, idx) => (
        <section
          className="main-map"
          key={section.id}
          ref={(el) => (sectionsRef.current[idx] = el)}
        >
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
            <button onClick={handleClick}>서비스 자세히 보기　〉</button>
          </div>
        </section>
      ))}
    </main>
  );
};

export default MainContent;
