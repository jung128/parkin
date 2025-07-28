import { useState } from "react";
import { IoGift } from "react-icons/io5";
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
    'https://omuurjgdsyvillyeomvw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdXVyamdkc3l2aWxseWVvbXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTcwMDgsImV4cCI6MjA2NjQ5MzAwOH0.EQ9Zzo2lXD0WIzpAQQgq3Jb8Whh69biSZLBkeGX-Qyk'
);

const Coupons = ({ onClose }) => {
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');
    const [showGift, setShowGift] = useState(false);
    const [couponType, setCouponType] = useState('');

    const getRandomDiscount = () => {
        const discounts = ['10%', '20%', '30%'];
        const randomIndex = Math.floor(Math.random() * discounts.length);
        return discounts[randomIndex];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('처리중...');

        

        const { data: existing, error: fetchError } = await supabase
            .from('coupons')
            .select('id')
            .eq('phone', phone)
            .single();

        if (existing) {
            setStatus('❗ 이미 쿠폰을 발급받으셨습니다.');
            return;
        }
        const randomType = getRandomDiscount();
        setCouponType(randomType);

        const { error } = await supabase.from('coupons').insert([
            {
                phone,
                type: randomType,
            },
        ]);

        if (error) {
            setStatus('오류 발생: ' + error.message);
        } else {
            setStatus(`${randomType} 할인 쿠폰이 발급되었습니다!`);
            setShowGift(true);
            setPhone('');
        }
    };

    return (
        <div className="popup-overlay">
            <div className="coupon-popup">
                <button className="close-btn" onClick={onClose}>×</button>
                <h3>휴대폰 번호로 <br/>쿠폰 받기</h3>
                <p className="sub-text">휴대폰 번호를 입력하고 <br/>쿠폰을 발급받으세요.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="tel"
                        placeholder="010-0000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <button type="submit" className="click-btn">쿠폰 발급 하기</button>
                    <div className={`gift ${showGift ? 'show' : ''}`}>
                        <p className="gift-icons"><IoGift />{`${couponType} 할인 쿠폰이 발급되었습니다!`}</p>
                    
                    </div>
                    <button className="ok-btn">내 쿠폰 보기</button>
                </form>
                {status && !showGift && <p>{status}</p>}
            </div>
        </div>
    );
};

export default Coupons;