import { Player } from '@lottiefiles/react-lottie-player';
import Lottie from 'react-lottie';
import animationData from '../../../../public/assets/lottie/online-shopping.json';

const Splashscreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <div className=" bg-white bg-repeat-y bg-cover bg-content-home relative py-20 h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              alt={'logo'}
              className="w-72"
            />

            <div className="text-success mt-[10px] mb-10">
              {/* <span className="font-extrabold text-[20px]">please wait...</span> */}
            </div>
            <Lottie options={defaultOptions} height={400} width={400} />

            {/* if using lottie online */}
            {/* <Player
              src="https://assets5.lottiefiles.com/packages/lf20_dA6Lu9rG2V.json"
              className="player w-80"
              loop
              autoplay
              speed={1}
            /> */}
            <div role="loading mt-8">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>

            <footer className="text-white absolute bottom-0 py-8">
              <div className="mx-auto max-w-7xl overflow-hidden flex flex-col justify-center items-center">
                <span className="text-center text-[8px] font-medium leading-5 text-success">
                  Powered by
                </span>
                <div className="mt-[5px]">
                  <img
                    src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
                    className="w-[69px]"
                    alt=""
                  />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Splashscreen;
