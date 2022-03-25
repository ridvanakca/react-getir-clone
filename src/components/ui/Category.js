function Category({ category: {id, title, image}}) {
  return (
    <a href='#' className='flex flex-col gap-y-2 items-center text-center p-4 transition hover:bg-purple-50 group'>
        <img className='w-12 h-12 rounded border border-gray-200' src={ image } alt={ title } />
        <span className='text-sm font-semibold whitespace-nowrap text-gray-700 group-hover:text-brand-color tracking-tight'>{ title }</span>
    </a>
  )
}

export default Category