import { useState } from 'react';
import RecipeDetail from './RecipeDetail';

const VSDetail = () => {
  const [recipeClicked, setRecipeClicked] = useState(false);
  return (
    <>
      {!recipeClicked ? (
        <div className="flex-col items-center justify-center font-gyeonggi-title">
          <img src="src/assets/vs.png" alt="Logo" className="w-full mx-auto" />
          <div className="flex-col  gap-y-4">
            <div className="text-2xl font-bold">치킨 아보카도 샐러드</div>
            <div className="py-2">
              부드러운 닭가슴살과 크리미한 아보카도가 만나 만든 영양 만점
              샐러드! 신선한 채소와 고소한 드레싱이 어우러져 입안 가득 건강한
              맛을 선사합니다. 바쁜 일상 속에서 간편하게 준비할 수 있어 점심
              식사나 가벼운 저녁 메뉴로 제격입니다.
            </div>
            <div className="text-xl font-bold">준비 시간: 약 10분</div>
            <div className="text-base">인분: 4인분</div>
            <div className="text-base">요리 시간: 약 15분</div>
            <div className="flex justify-end gap-x-4">
              <button
                className="flex justify-end btn btn-primary"
                onClick={() => setRecipeClicked(!recipeClicked)}
              >
                레시피 확인하기
              </button>
            </div>
          </div>
          <img
            src="src/assets/vs_logo.png"
            alt="Logo"
            className="w-[50px] mx-auto py-10"
          />
          <div className="text-2xl font-bold">구운 치킨 샐러드</div>
          <div className="py-2">
            갓 구워낸 닭가슴살과 신선한 채소가 어우러져 건강하고 든든한 한 끼를
            완성합니다. 그릴에 구워낸 닭가슴살의 은은한 스모키 향과 드레싱의
            조화로, 입맛을 돋우는 완벽한 샐러드 경험을 제공합니다.
          </div>
          <div className="text-xl font-bold">준비 시간: 약 10분</div>
          <div className="text-base">인분: 4인분</div>
          <div className="text-base">요리 시간: 약 15분</div>
          <div className="flex justify-end gap-x-4">
            <button
              className="flex justify-end btn btn-primary"
              onClick={() => setRecipeClicked(!recipeClicked)}
            >
              레시피 확인하기
            </button>
          </div>
        </div>
      ) : (
        <RecipeDetail />
      )}
    </>
  );
};

export default VSDetail;
