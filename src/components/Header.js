import { BiGlobe } from 'react-icons/bi';
import { RiUserFill, RiUserAddFill } from 'react-icons/ri';

function Header() {
  return (
    <div className='bg-brand-color'>
      <div className='container mx-auto  h-11 flex items-center justify-between'>

        <a href='#'>
         <img className='h-10' src={process.env.PUBLIC_URL + '/logo.jpeg'} /> 
        </a>

        <nav className='flex gap-x-8 text-sm font-semibold'>
          <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
            <BiGlobe size={20} />
            Türkçe (TR)
          </a>
          <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
            <RiUserFill size={20}/>
            Giriş Yap
          </a>
          <a href='#' className='flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100'>
            <RiUserAddFill size={20}/>
            Kayıt ol
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
