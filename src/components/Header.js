import { BiGlobe } from "react-icons/bi";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
  return (
    <>
      <div className='bg-brand-color'>
        <div className='container mx-auto  h-16 md:h-11 flex items-center justify-center md:justify-between'>
          <a href='#'>
            <img className='h-10' src={process.env.PUBLIC_URL + "/logo.png"} />
          </a>

          <nav className='hidden md:flex gap-x-8 text-sm font-semibold'>
            <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
              <BiGlobe size={20} />
              Türkçe (TR)
            </a>
            <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
              <RiUserFill size={20} />
              Giriş Yap
            </a>
            <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
              <RiUserAddFill size={20} />
              Kayıt ol
            </a>
          </nav>
        </div>
      </div>
      <div className='container mx-auto flex md:hidden items-center h-10 px-2 justify-between'>
        <div className='flex items-center gap-x-2 text-sm font-semibold text-gray-800'>
          <HiLocationMarker size={18} className='text-primary-brand-color' />
          Teslimat Adresi Belirle
        </div>
        <IoIosArrowForward size={18} className='text-primary-brand-color' />
      </div>
    </>
  );
}

export default Header;
