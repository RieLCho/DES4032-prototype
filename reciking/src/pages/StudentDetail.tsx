import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDetail = () => {
  const [참가, set참가] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex-col justify-center gap-y-4 p-4 font-gyeonggi-title">
      {!참가 ? (
        <>
          <div className="text-2xl py-2 font-bold">영덕 대게 레시피 겨루기</div>
          <img
            src="src/assets/crab.png"
            alt="Logo"
            className="w-full mx-auto"
          />
          <div className="flex py-2 flex-col">
            <div className="mx-auto justify-center text-xl pb-4 ">
              경상북도 영덕군과 함께합니다.
            </div>
            <button
              className="btn btn-primary justify-center mx-auto w-[50%]"
              onClick={() => set참가(!참가)}
            >
              참가하기
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-2xl py-2 font-bold">레시피 제출하기</div>
          <img src="src/assets/avo.jpg" alt="Logo" className="w-full mx-auto" />
          <div className="flex-col  gap-y-4">
            <div className="text-2xl font-bold">치킨 아보카도 샐러드</div>
            <div className="py-2 text-xl">
              주 재료: 닭 가슴살, 아보카도, 채소, 드레싱
            </div>
            <div className="font-bold text-xl mt-4">준비 과정</div>
            <img
              src="src/assets/recipe1.png"
              alt="recipe1"
              className="w-full"
            />
            <div className="flex justify-end gap-x-4">
              <button
                className="flex justify-end btn btn-primary"
                onClick={() => navigate('/myinfo')}
              >
                제출하기
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentDetail;
