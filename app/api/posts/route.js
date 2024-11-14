import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
import connectMongoDB from "../../../utils/connectMongoose";
import Post from "../../../models/postModels";

export async function GET() {
  try {
    await connectMongoDB();

    // const posts = await prisma.Post.findMany({
    //   include: {
    //     author: {
    //       select: { name: true, image: true },
    //     },
    //   },
    //   orderBy: {
    //     createdAt: "desc",
    //   },
    // });

    const posts = await Post.find({});

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}
