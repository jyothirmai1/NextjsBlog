
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
interface BlogPostCardProps{
  data:{
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  }

}

function BlogPostCard({ data }: BlogPostCardProps) {
  return (
    <div className='group relative border rounded-lg overflow-hidden transition-all shadow-sm bg-white border-gray-400 hover:shadow-lg'>
    <Link href={`/post/${data.id}`} className='block w-full h-full'>
    <div className='relative  h-48 w-full  overflow-hidden'>
      <Image src={data.imageUrl} alt="Image hero" fill className='object-cover transition-transform duration-300 group-hover:scale-110'/>
    </div>
    <div className='p-4'>
      <h2 className='mb-2 text-gray-700 text-lg font-semibold'>{data.title}</h2>
      <p className='mb-2 text-gray-500 text-sm font-semibold line-clamp-1'>{data.content}</p>
      <div className=' flex items-center justify-between'>
      <div className='flex items-center justify-start'>
        <div className='relative ml-[-12px] h-6 w-10 overflow-hidden rounnded-full'>
       <Image src={data.authorImage} alt="author" fill className='object-cover'/>
        </div>
        <p className='text-md font-semibold text-gray-600'>Author</p>
      </div>
      <time className='text-xs text-gray-600'>
       {new Intl.DateTimeFormat('en-US',{day:'numeric',month:'short',year:'numeric'}).format(data.createdAt)}
      </time>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default BlogPostCard