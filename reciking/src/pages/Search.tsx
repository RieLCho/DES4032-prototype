import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { PostBlueArchiveSearch } from '../api';
import FrameCard from '../components/FrameCard';
import SearchBar from '../components/Searchbar';
import { SearchRes } from '../types';
import DetailModal from './Detail';
import NoResult from '../components/NoResult';
import { recipe, vsRecipe } from '../data';
import VSDetail from './VSDetail';

const Search = () => {
  const [isTableClicked, setIsTableClicked] = useState(false);
  const [isCardClicked, setIsCardClicked] = useState(false);
  const After = () => {
    return (
      <div className="flex flex-col">
        {isCardClicked ? (
          <VSDetail />
        ) : (
          <>
            <SearchBar />
            <DetailModal />
            <div className="flex flex-col items-center">
              <div
                className="max-w-[1430px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full"
                onClick={() => {
                  setIsCardClicked(!isCardClicked);
                }}
              >
                <FrameCard frames={vsRecipe} />
              </div>
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={() => {}}
              />
            </div>
          </>
        )}
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center gap-y-4 p-4 font-gyeonggi-title">
      <div className="flex justify-center items-center">
        {isTableClicked ? (
          <After />
        ) : (
          <table
            className="table w-full"
            onClick={() => setIsTableClicked(!isTableClicked)}
          >
            <thead>
              <tr>
                <th>메인 재료</th>
                <th>월드컵 수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>소고기</td>
                <td>4</td>
              </tr>
              <tr className="hover:bg-white">
                <td>치킨</td>
                <td>2</td>
              </tr>
              <tr>
                <td>랍스타</td>
                <td>5</td>
              </tr>
              <tr>
                <td>아보카도</td>
                <td>2</td>
              </tr>
              <tr>
                <td>브로콜리</td>
                <td>1</td>
              </tr>
              <tr>
                <td>등갈비</td>
                <td>2</td>
              </tr>
              <tr>
                <td>김치</td>
                <td>2</td>
              </tr>
              <tr>
                <td>닭고기</td>
                <td>1</td>
              </tr>
              <tr>
                <td>밤</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Search;
