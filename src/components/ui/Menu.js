import { useState, useEffect } from 'react';
import {Collapse} from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size'
import { IoIosArrowDown } from 'react-icons/io';

function Menu({title, items}) {

  const [ isOpen, setIsOpen ] = useState(true);

  const windowWidth = useWindowWidth();

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  }

  useEffect(() => {
    if (isOpen && windowWidth <= 768){
      setIsOpen(false);
    } else if (!isOpen && windowWidth >768){
      setIsOpen(true);
    }
  }, [windowWidth])

  return (
    <section>
    <nav className='grid gap-y-2 md:gap-y-4'>
      <h6 onClick={toggleCollapse} className='flex items-center justify-between text-lg text-primary-brand-color'>
        {title}
        <button className='w-6 h-6 md:hidden grid place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color'>
          <span className={`transition-all transform ${isOpen ? 'rotate-180' : ''}`}>
           <IoIosArrowDown size={14} />
          </span>
        </button>
      </h6>
    <Collapse isOpened={isOpen}>
      <nav>
            <ul className='grid gap-y-1 md:gap-y-2'>
                {items.map((item, key) => (
                    <li key={key}>
                        <a className='text-sm hover:text-brand-color' href='#'>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </Collapse>
    </nav>
    </section>
  )
}

export default Menu