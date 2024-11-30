import { FrameImageData } from '../types';

interface FrameDisplayProps {
  frames: FrameImageData[];
}

const FrameCard = ({ frames }: FrameDisplayProps) => {
  return (
    <>
      {frames.map((frame) => (
        <div
          key={frame.dialogue_id}
          className="rounded-xl p-3 card card-compact bg-neutral-content w-full max-w-md shadow-xl mx-auto my-4 "
        >
          <figure className="p-4">
            <img
              src={frame.url}
              alt="frame"
              className="w-full h-48 object-cover rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {frame.character_name === '' ? '독백' : frame.character_name}
            </h2>
            <div className="text-gray-700 line-clamp-3 h-full max-h-9 text-ellipsis w-full">
              {frame.text}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FrameCard;
