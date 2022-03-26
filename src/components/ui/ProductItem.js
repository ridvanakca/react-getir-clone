import { AiOutlinePlus } from 'react-icons/ai';

function ProductItem({product}) {
  return (
    <div className='relative bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3'>
        <button className='absolute top-3 right-3 w-6 h-6 bg-white transition-colors flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color'>
            <AiOutlinePlus />
        </button>
        <img src={product.image} alt={product.title} />
        <div className='text-brand-color'>₺{product.price}</div>
        <div className='text-gray-800'>{product.title}</div>
        <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}

export default ProductItem