import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    'https://omuurjgdsyvillyeomvw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdXVyamdkc3l2aWxseWVvbXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTcwMDgsImV4cCI6MjA2NjQ5MzAwOH0.EQ9Zzo2lXD0WIzpAQQgq3Jb8Whh69biSZLBkeGX-Qyk'
  );

const CouponList = ({ phone,onClose }) => {
    const [coupons, setCoupons] = useState(null);

    useEffect(() => {
        const fetchCoupons = async () => {
          const { data, error } = await supabase
            .from("coupons")
            .select("*")
            .eq("phone",phone)
            .single(); // 최신순 정렬
    
          if (error) {
            console.error("쿠폰 조회 실패:", error.message);
          } else {
            setCoupons(data);
          }
        };
    
        fetchCoupons();
      }, [phone]);

      return (
        <div className="coupon-list-popup">
          <button className="close-btn" onClick={onClose}>×</button>
          <h3>내 쿠폰 정보</h3>
    
          {!coupons ? (
            <p>발급된 쿠폰이 없습니다.</p>
          ) : (
            <ul>
              <li>📱 <p>전화번호 뒷자리:</p> {phone.slice(-4)}</li>
              <li>🎁 <p>할인 혜택: </p>{coupons.type}</li>
              <li>🆔 <p>쿠폰 코드: </p>{coupons.code}</li>
              <li>📅 <p>발급일: </p>{new Date(coupons.created_at).toLocaleString()}</li>
              <li>✅ <p>상태: </p>{coupons.used ? "사용됨" : "미사용"}</li>
            </ul>
          )}
    
          <button className="back-btn" onClick={onClose}>← 뒤로 가기</button>
        </div>
      );
    };

export default CouponList;