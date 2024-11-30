const Home = () => {
  return (
    <div className="min-h-screen font-gyeonggi-title text-base sm:text-lg md:text-xl lg:text-2xl">
      <div className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content w-full text-center flex-col">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-[50%] mx-auto"
          />
          <h1 className="text-5xl font-bold">RECIKING</h1>
          <h2 className="text-2xl font-bold">나도, 흑백요리사</h2>
        </div>
      </div>

      <div className="container mx-auto py-5 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">레시피 이상형 월드컵</h2>
              <span className="whitespace-pre-line h-fit">
                {'수 많은 레시피 중 나의 최애 레시피를 찾아보세요.'}
              </span>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => (window.location.href = '/search')}
                >
                  <span className="material-icons">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">이달의 경연</h2>
              <span className="whitespace-pre-line h-fit">
                {'이 달의 경연 정보를 확인하고 참여해보세요.'}
              </span>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => (window.location.href = '/students')}
                >
                  <span className="material-icons ">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">내 정보</h2>
              <span className="whitespace-pre-line h-fit">
                {'내 정보를 확인해보세요.'}
              </span>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary "
                  onClick={() => (window.location.href = '/myinfo')}
                >
                  <span className="material-icons ">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
