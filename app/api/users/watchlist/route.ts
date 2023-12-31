import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { useAuthSession } from "@/lib/hooks/useAuthSession";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const session = await useAuthSession();
  if (!session)
    return NextResponse.json(
      { status: "error", message: "Unauthorized" },
      { status: 401 }
    );
  const user_id = session.user.userId;

  try {
    // @ts-ignore
    let watchlist = [];
    if (page) {
      watchlist = await prisma.usertitle.findMany({
        where: { userId: user_id },
        select: {
          isFavourite: true,
          isWatched: true,
          rating: true,
          title: {
            select: {
              id: true,
              title: true,
              type: true,
              released: true,
              vote_average: true,
              genres: true,
              overview: true,
              poster_path: true,
              backdrop_path: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: 20,
        skip: (parseInt(page) - 1) * 20,
      });
      return NextResponse.json(watchlist);
    }

    if (!page) {
      watchlist = await prisma.usertitle.findMany({
        where: { userId: user_id },
        select: {
          isFavourite: true,
          isWatched: true,
          rating: true,
          title: {
            select: {
              id: true,
              title: true,
              type: true,
              released: true,
              vote_average: true,
              genres: true,
              overview: true,
              poster_path: true,
              backdrop_path: true,
            },
          },
        },
        orderBy: { createdAt: "asc" },
      });
      return NextResponse.json(watchlist);
    }
    return NextResponse.json(
      { status: "error", message: "No titles found" },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: error },
      { status: 500 }
    );
  }
}

// schemas :
// model User {
//   id            String      @id @default(cuid())
//   name          String?
//   email         String?     @unique
//   emailVerified DateTime?
//   password      String?
//   image         String?
//   accounts      Account[]
//   sessions      Session[]
//   watchlist     Usertitle[]
// }

//   @@unique([identifier, token])
// }
// model Title {
//   id            Int         @id
//   title         String
//   type          String
//   released      DateTime?
//   vote_average  Float?
//   genres        String      @db.Text
//   overview      String      @db.Text
//   poster_path   String?
//   backdrop_path String?
//   usertitles    Usertitle[]
// }

// model Usertitle {
//   id          Int     @id @default(autoincrement())
//   isWatched   Boolean
//   isFavourite Boolean
//   rating      Int?
//   userId      String
//   user        User    @relation(fields: [userId], references: [id], onDelete: Cascade)
//   title       Title   @relation(fields: [titleId], references: [id])
//   titleId     Int
//   @@unique([userId, titleId])
// }
