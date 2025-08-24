import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Save to DB
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json(
      { success: true, contact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 }
    );
  }
}
