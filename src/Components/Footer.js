import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-page">
            <div className="footer-wrap">
                <img src="../images/Logo-08.png" alt="푸터로고이미지" />
                <div className="company">
                    <p>(주)P'IN</p>
                    <p>대표자 박서윤</p>
                </div>
                <p>주소 수원시 팔달구 매산로</p>
                <p>사업자 번호 123-45-67890</p>
                <p>고객센터 1234-5678</p>
                <div className="icon-wrap">
                    <BsYoutube />
                    <FaInstagram />
                    <FaFacebook />
                </div>
                <nav className="note">
                    <ul>
                        <li>공지사항</li>
                        <li>이용약관</li>
                        <li>개인정보 처리방침</li>
                        <li>위치정보 이용약관</li>
                    </ul>
                </nav>
                <p>© 2025 P’IN. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;