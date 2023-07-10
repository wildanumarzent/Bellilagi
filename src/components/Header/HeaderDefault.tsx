import NavbarMobile from './component/NavbarMobile';
import NavbarWeb from './component/NavbarDekstop';
const HeaderDefault = () => {
  return (
    <>
      <div className="bg-white sm:px-5 sm:py-2 shadow-md z-50  w-full">
        <NavbarWeb />
        <NavbarMobile />
      </div>
    </>
  );
};

export default HeaderDefault;
