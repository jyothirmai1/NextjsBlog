import Image from "next/image";
import Link from "next/link";
import { prisma } from "./utils/db";
import BlogPostCard from "../../components/general/BlogPostCard";
import { Suspense } from "react";

export async function getData() {
  const items = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorImage: true,
      id: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return items;
}

export default function Home() {
  return (
    <div className="py-4">
      <div className="text-2xl font-semibold text-emerald-700">
        Latest Posts
      </div>
      <Suspense fallback={<div className="text-center pt-60">Loading...</div>}>
          <BlogPosts />
      </Suspense>
      
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {data &&
        data.map((post: any, i) => {
          return <BlogPostCard data={post} key={post.id} />;
        })}
    </div>
  );
}
