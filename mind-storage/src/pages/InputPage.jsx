import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from "../components/Modal.jsx"; // 모달 경로 확인

const MainContainer = styled.main`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  padding-top: 60px;

  .disk-link {
    position: absolute;
    top: 30px;
    right: 4%;
    img { width: 35px; }
  }
  .main-logo { max-width: 60%; height: auto; }
`;

const Layout = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
`;

const BoxWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  p { margin-bottom: 15px; font-size: 0.95rem; opacity: 0.9; }
`;

const TextAreaBase = styled.textarea`
  display: block;
  margin: 0 auto;
  width: 100%;
  background: transparent;
  color: #FFFEF5;
  padding: 15px;
  resize: none;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 16px;
  border: 0.5px solid rgba(255, 251, 228, 0.2);
  box-shadow: 0px 0px 8px rgba(247, 224, 109, 0.3);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid rgba(255, 251, 228, 0.5);
    box-shadow: 0px 0px 10px rgba(247, 224, 109, 0.6);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const DiaryBox = styled(TextAreaBase)` height: 35vh; min-height: 200px; `;
const SmallBox = styled(TextAreaBase)` height: 80px; `;

const SaveButton = styled.input`
  width: 180px;
  height: 45px;
  font-size: 0.8rem;
  cursor: pointer;
  color: #fff;
  background: rgba(247, 224, 109, 0.2);
  border: 1px solid #F7E06D;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(247, 224, 109, 0.4);
  display: block;
  margin: 40px auto;
  transition: 0.2s;
  &:hover { background: rgba(247, 224, 109, 0.4); }
`;

const Footer = styled.footer`
  p {
    text-align: center;
    padding: 40px 0;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const InputPage = () => {
  const navigate = useNavigate();
  const [diary, setDiary] = useState('');
  const [praise, setPraise] = useState('');
  const [worry, setWorry] = useState('');
  
  // 모달 상태 추가
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    if (!diary.trim() && !praise.trim() && !worry.trim()) {
      alert("오늘의 마음을 한 줄이라도 적어주세요.");
      return;
    }
    
    let savedList = JSON.parse(localStorage.getItem('mindStorage')) || [];
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const setTimestamp = Date.now(); // 같은 세트로 묶기 위한 타임스탬프

    const addData = (type, text, offset) => {
      if (text?.trim()) {
        savedList.push({ 
          id: setTimestamp + offset, // 리스트 정렬을 위해 미세한 오프차이 부여
          type, 
          text, 
          date: dateStr, 
          time: timeStr 
        });
      }
    };

    addData('diary', diary, 0.1); 
    addData('praise', praise, 0.2); 
    addData('worry', worry, 0.3);

    localStorage.setItem('mindStorage', JSON.stringify(savedList));
    
    // 알림창 대신 모달 띄우기
    setShowModal(true);
  };

  return (
    <MainContainer>
      <Header>
        <Link to="/list" className="disk-link"><img src="/img/Group 35.svg" alt="디스크" /></Link>
        <img src="/img/Frame 9.svg" alt="로고" className="main-logo" />
      </Header>
      <Layout>
        <BoxWrapper>
          <p>오늘 어떤 하루를 보냈나요?</p>
          <DiaryBox placeholder="오늘 하루를 담아보세요." value={diary} onChange={(e) => setDiary(e.target.value)} />
        </BoxWrapper>
        <BoxWrapper>
          <p>오늘 나에게 주고 싶은 칭찬은?</p>
          <SmallBox placeholder="잘한 일을 담아보세요." value={praise} onChange={(e) => setPraise(e.target.value)} />
        </BoxWrapper>
        <BoxWrapper>
          <p>여기에 두고 갈 고민이 있나요?</p>
          <SmallBox placeholder="고민을 담아보세요." value={worry} onChange={(e) => setWorry(e.target.value)} />
        </BoxWrapper>
        <SaveButton type="button" value="마음을 소중히 기억하기" onClick={handleSave} />
      </Layout>
      <Footer><p>기억하고 싶은 오늘을 담다, 마음저장소</p></Footer>

      {/* 저장 완료 커스텀 모달 */}
      {showModal && (
        <Modal 
          message={`오늘의 마음이\n소중하게 보관되었습니다.`} 
          type="confirm"
          confirmText="마음 보러가기"
          onConfirm={() => navigate('/list')} 
        />
      )}
    </MainContainer>
  );
};

export default InputPage;