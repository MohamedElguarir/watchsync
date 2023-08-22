import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddMovieDrawer } from "@/components/AddNewMovieDrawer";
import WatchListCard from "@/components/WatchListCard";
import { Metadata } from "next";
import prisma from "@/lib/db";
import { useAuthSession } from "@/lib/hooks/useAuthSession";


export const metadata: Metadata = {
  title: "Watchlist",
  description: "Add movies and TV shows to your watchlist.",
};

export default async function Watchlist() {
  const session = await useAuthSession()
  let user_id = null;
  if (session) {
    user_id = session.user.userId;
  }
  const watchlist = await prisma.usertitle.findMany({
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
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col pb-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide font-general">
          Your watchlist
        </h1>
        <AddMovieDrawer />
      </div>

      <Tabs defaultValue="all" className="flex flex-col pt-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="watched">Watched</TabsTrigger>
          <TabsTrigger value="favourites">Favourites</TabsTrigger>
        </TabsList>

        <TabsContent
          value="all"
          className="pt-4 max-md:flex max-md:flex-col max-md:space-y-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 data-[state=inactive]:hidden transition"
        >
          {watchlist.map((item) => (
            <WatchListCard
              key={item.title.id}
              isFavourite={item.isFavourite}
              isWatched={item.isWatched}
              rating={item.rating}
              title={item.title}
            />
          ))}
        </TabsContent>
        <TabsContent
          value="watched"
          className="pt-4 max-md:flex max-md:flex-col max-md:space-y-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 data-[state=inactive]:hidden transition"
        >
          {watchlist
            .filter((item) => item.isWatched)
            .map((item) => (
              <WatchListCard
                key={item.title.id}
                isFavourite={item.isFavourite}
                isWatched={item.isWatched}
                rating={item.rating}
                title={item.title}
              />
            ))}
        </TabsContent>

        <TabsContent
          value="favourites"
          className="pt-4 max-md:flex max-md:flex-col max-md:space-y-3 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 data-[state=inactive]:hidden transition"
        >
          {watchlist
            .filter((item) => item.isFavourite)
            .map((item) => (
              <WatchListCard
                key={item.title.id}
                isFavourite={item.isFavourite}
                isWatched={item.isWatched}
                rating={item.rating}
                title={item.title}
              />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
