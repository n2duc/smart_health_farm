import { Leaf } from 'lucide-react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className='flex items-center gap-2'>
      <div className='bg-primary dark:bg-white rounded-full size-8 flex items-center justify-center flex-shrink-0'>
        <Leaf className='size-5 text-white dark:text-black' />
      </div>
      <span className='text-xl font-bold text-primary dark:text-white whitespace-nowrap xl:inline lg:hidden'>GOWA FOOD</span>
    </Link>
  )
}
