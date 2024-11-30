import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const navigate = useNavigate();
  const [commentClicked, setCommentClicked] = useState(false);
  return (
    <div className="flex-col items-center justify-center font-gyeonggi-title">
      {!commentClicked ? (
        <>
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
            <div className="flex justify-between gap-x-4">
              <button
                className="flex justify-end btn btn-primary"
                onClick={() => setCommentClicked(!commentClicked)}
              >
                댓글 달기
              </button>
              <button
                className="flex justify-end btn btn-primary"
                onClick={() => navigate('/myinfo')}
              >
                투표하기
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-col w-full p-4 gap-4">
          <div className="flex-col gap-2 mb-8">
            <h2 className="text-xl font-bold mb-4">다른 사람들의 댓글</h2>
            <div className="space-y-4">
              {[
                { user: '이**', comment: '정말 맛있어 보여요!' },
                { user: '서**', comment: '저도 한번 만들어볼게요' },
                { user: '허**', comment: '와 정말 맛있네요.' },
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-100 rounded-lg">
                  <p className="font-bold">{item.user}</p>
                  <p>{item.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="left-0 w-full bg-white p-4 shadow-lg">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="댓글을 입력하세요"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">등록</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
