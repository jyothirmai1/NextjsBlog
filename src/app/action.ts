"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleFormSubmit(data: FormData) {
    const {getUser} = await getKindeServerSession();
    const user = await getUser();
    const title = data.get("title")?.toString();
    const content = data.get("content")?.toString();
    const url = data.get("url")?.toString();
    
    await prisma.blogPost.create({
        data:{
            title:title || "",
            content:content || "",
            imageUrl:url || "",
            authorId:user?.id||"",
            authorImage:user?.picture || "",
        }
    })
    return redirect("/dashboard");
}