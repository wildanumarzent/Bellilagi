import themes from '@/constants/localdata/theme';

const ThemeChanger = () => {
  return (
    <div title="Change Theme" className="dropdown dropdown-end">
      <div tabIndex={0} className="normal-case gap-2 cursor-pointer hover:text-secondary">
        <span className="inline">Themes</span>
        <svg
          width="12px"
          height="12px"
          className="ml-1 hidden h-3 w-3 fill-current sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-8">
        <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
          {themes.map((theme) => {
            return (
              <div
                key={theme.id}
                className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                data-set-theme={theme?.id}
                data-act-class="outline">
                <div
                  data-theme={theme.id}
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">{theme?.id}</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded" />
                        <div className="bg-secondary w-2 rounded" />
                        <div className="bg-accent w-2 rounded" />
                        <div className="bg-neutral w-2 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
