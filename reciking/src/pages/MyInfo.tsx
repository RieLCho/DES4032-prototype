import FrameCard from '../components/FrameCard';
import { recipe } from '../data';

const MyInfo = () => {
  return (
    <div className="flex-col items-center justify-center font-gyeonggi-title">
      <div className="p-6 max-w-[1430px] w-full">
        <h2 className="text-lg font-semibold mb-2">저장한 레시피</h2>
        <div className="max-w-[1430px] w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          <FrameCard frames={recipe} />
        </div>
      </div>
      <div className="p-6 max-w-[1430px] w-full">
        <h2 className="text-lg font-semibold mb-2">제출한 레시피</h2>
        <div className="max-w-[1430px] w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          <FrameCard frames={recipe} />
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
