import _ from 'lodash';
const ServiceSkeleton = () => {
  const count = 10;
  return (
    <>
      <div className="carousel carousel-center rounded-box p-5 flex gap-3 animate-pulse">
        <div className="carousel-item">
          <div className="border p-3 w-auto rounded-full">
            <div className="flex gap-3 w-auto">
              {/* {_.times(7, (i) => (
                <>
                  <div className="" key={i}>
                    <svg
                      className="w-5 h-5 text-gray-200 dark:text-base-100"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <div className="h-2 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-base-100 w-32 "></div>
                  </div>
                </>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSkeleton;
