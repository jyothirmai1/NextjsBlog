
import { buttonVariants } from '@/components/ui/button'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { prisma } from '../utils/db'
import BlogPostCard from '../../../components/general/BlogPostCard'

async function getData (userId:string){
  const data = await prisma.blogPost.findMany({
    where:{
      authorId:userId
    },
    orderBy:{
      createdAt:'desc'
    }
  })
  return data;

}

async function Dashboard() {
const {getUser} = await getKindeServerSession()
const user = await getUser();
const data = await getData(user?.id || "");
if(!user){ 
  return redirect("/api/auth/register");
 }
  return (
    <div>
    <div className=' flex justify-between items-center py-4'>
      <div className='font-medium text-2xl text-[#24899f]'>Your Blog Articles</div>
      <Link  className={buttonVariants({variant:'secondary'})} style={{backgroundColor:"#24899f",color:"white"}} href={"/dashboard/create"}>
        <div >Create New Post
        </div>
      </Link>
       
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
       {data.map(post=>{
        return (
         <BlogPostCard data={post} key={post.id}/>
        )
       })}
       </div>
    </div>
   
  )
}

export default Dashboard