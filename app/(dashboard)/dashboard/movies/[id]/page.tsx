import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { MovieDetails } from "@/types/movies";
import { getYear } from "date-fns";
import Image from "next/image";
import Link from "next/link";
export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const tmdb_id = id.split("-")[0];

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdb_id}?language=en-US&api_key=18bbc44d1e9834345fa7cd8f22c77cee&page=1`
  );

  const movie: MovieDetails = await res.json();

  return (
    <div className="flex md:w-[80%] mx-auto flex-col pb-16">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium tracking-wide font-general">
          {movie.title}
        </h1>
      </div>
      <div className="flex flex-col pt-4">
        <Card className="flex flex-col items-center gap-4 p-3 h-fit">
          <div className="h-auto overflow-hidden rounded-md shadow max-h-80">
            <Image
              width={1080}
              height={1920}
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
              alt={movie?.title ?? "Movie Poster"}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 h-full py-3 space-y-3">
            <div className="pb-1 font-medium">
              <h2 className="text-xl">
                {movie?.title}
                <span className="text-muted-foreground">
                  {" "}
                  (
                  {movie?.release_date &&
                    getYear(new Date(movie?.release_date))}
                  )
                </span>
              </h2>
            </div>
            <p className="text-sm">{movie?.overview}</p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {movie.genres.map((genre, idx) => (
                <Badge key={idx} className="text-xs" variant={"outline"}>
                  {genre.name}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
        <div className="flex flex-col w-full mt-12 space-y-4">
          <span className="font-[550] text-lg mb-6 text-center">
            Watch {movie.title}{" "}
          </span>
          <div className="w-full aspect-video">
            <iframe
              className="w-full aspect-video"
              src={`https://vidsrc.to/embed/movie/${movie.imdb_id}`}
              sandbox="allow-scripts allow-same-origin allow-forms"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
