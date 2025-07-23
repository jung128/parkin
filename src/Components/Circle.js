import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { BiSolidCctv } from "react-icons/bi";
import { MdPhonelinkRing } from "react-icons/md";


const Circle = () => {
  return (
    <div className="circle-layout">
      <h2 className="circle-title">
        내비 찍기 전에 자리부터 <span>P’IN</span>
      </h2>
      <ul className="circle">
        <li>
          <div className="circle-bg">
            <FaMapMarkerAlt />
          </div>
          <p>
            실시간
            <br />
            빈자리 확인
          </p>
        </li>
        <li>
          <div className="circle-bg">
            <BiSolidNavigation />
          </div>
          <p>
            스마트한
            <br />
            예약/길안내
          </p>
        </li>
        <li>
          <div className="circle-bg">
            <IoPerson />
          </div>
          <p>
            정기권/멤버쉽
            <br />
            혜택
          </p>
        </li>
        <li>
          <div className="circle-bg">
            <BiSolidCctv />
          </div>
          <p>
            안전을 위한
            <br />
            CCTV
          </p>
        </li>
        <li>
          <div className="circle-bg">
            <MdPhonelinkRing />
          </div>
          <p>
            주차장
            <br />
            개인 공유
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Circle;
