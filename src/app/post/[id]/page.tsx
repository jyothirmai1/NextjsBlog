import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

type Props = Promise<{ id: string }>;
async function Idpage({ params }: { params: Props }) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className="max-w-3xl mx-auto px-4 py-7">
      <Link
        href="/dashboard"
        className={buttonVariants({ variant: "secondary" })}
      >
        Back to posts
      </Link>
      <div className="mt-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="relative overflow-hidden rounded-full size-10">
              <Image
                src={data.authorImage}
                alt="author"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium text-gray-600">Author</p>
          </div>
          <time>
            {
              new Intl.DateTimeFormat(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(data.createdAt)
            }
          </time>
        </div>
      </div>
      <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-lg">
<Image
          src={data.imageUrl}
          alt="blog image" fill className="object-cover" priority/>  
      </div>
      <Card>
        <CardContent>
            <p>{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Idpage;
