import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRateMoviesAction } from "@/core/actions/movies/topRate.action";
import { upComingMoviesAction } from "@/core/actions/movies/upComing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const topRateQuery = useQuery({
    queryKey: ["movies", "top-rate"],
    queryFn: topRateMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const upComingQuery = useQuery({
    queryKey: ["movies", "upComing"],
    queryFn: upComingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRateQuery,
    upComingQuery,
  };
};
