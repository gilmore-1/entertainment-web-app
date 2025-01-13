import React from "react";
import { MdMovieCreation } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";

interface Movie {
  title: string;
  description: string;
  image: string;
  releaseDate: string;
}

interface RecommendedProps {
  searchQuery: string;
}

const Recommended: React.FC<RecommendedProps> = ({ searchQuery }) => {
  const [allMovie, setAllMovie] = useState<Movie[]>([
    {
      title: "The Shawshank Redemption",
      description:
        "Wrongfully imprisoned, Andy Dufresne forms a life-changing bond with fellow inmate Red, embodying hope and resilience.",
      image:
        "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      releaseDate: "1994-09-23",
    },
    {
      title: "The Godfather",
      description:
        "An epic tale of the Corleone crime family, exploring power, loyalty, and the American Dream.",
      image:
        "https://www.themoviedb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      releaseDate: "1972-03-24",
    },
    {
      title: "The Dark Knight",
      description:
        "Batman faces the anarchic Joker, testing his resolve and redefining heroism in Gotham City.",
      image:
        "https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      releaseDate: "2008-07-18",
    },
    {
      title: "Pulp Fiction",
      description:
        "Interwoven stories of crime and redemption unfold in Quentin Tarantino's stylized narrative.",
      image:
        "https://www.themoviedb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      releaseDate: "1994-10-14",
    },
    {
      title: "Schindler's List",
      description:
        "The true story of Oskar Schindler, who saved over a thousand Jews during the Holocaust.",
      image:
        "https://www.themoviedb.org/t/p/original/c8Ass7acuOe4za6DhSattE359gr.jpg",
      releaseDate: "1993-12-15",
    },
    {
      title: "Inception",
      description:
        "A thief enters dreams to steal secrets but faces challenges when tasked with planting an idea.",
      image:
        "https://www.themoviedb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      releaseDate: "2010-07-16",
    },
    {
      title: "Fight Club",
      description:
        "An insomniac and a soap salesman start an underground fight club that spirals out of control.",
      image:
        "https://www.themoviedb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      releaseDate: "1999-10-15",
    },
    {
      title: "Forrest Gump",
      description:
        "The life journey of Forrest Gump, a man of limited intellect but boundless heart.",
      image:
        "https://www.themoviedb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      releaseDate: "1994-07-06",
    },
    {
      title: "The Matrix",
      description:
        "A hacker discovers reality is a simulation and joins a rebellion against its controllers.",
      image:
        "https://www.themoviedb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      releaseDate: "1999-03-31",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "The final battle for Middle-earth unfolds as Frodo reaches Mount Doom to destroy the One Ring.",
      image:
        "https://www.themoviedb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      releaseDate: "2003-12-17",
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      description:
        "The Rebel Alliance faces setbacks as Luke Skywalker trains to become a Jedi under Yoda's guidance.",
      image:
        "https://www.themoviedb.org/t/p/original/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
      releaseDate: "1980-05-21",
    },
    {
      title: "Interstellar",
      description:
        "A team ventures through a wormhole to find a new home for humanity as Earth faces extinction.",
      image:
        "https://www.themoviedb.org/t/p/original/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
      releaseDate: "2014-11-07",
    },
    {
      title: "Parasite",
      description:
        "A destitute family infiltrates a wealthy household, leading to unforeseen consequences.",
      image:
        "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      releaseDate: "2019-05-30",
    },
    {
      title: "The Lion King",
      description:
        "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
      image:
        "https://www.themoviedb.org/t/p/original/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
      releaseDate: "1994-06-24",
    },
    {
      title: "Gladiator",
      description:
        "A Roman general seeks vengeance against the corrupt emperor who murdered his family and seized the throne.",
      image:
        "https://www.themoviedb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      releaseDate: "2000-05-05",
    },
  ]);

  const filteredMovies = allMovie.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div className="mt-9">
      <h3 className="font-outfit text-2xl font-normal leading-normal tracking-[-0.5px] text-white">
        Recommended for you
      </h3>
      <div className="w-full flex flex-wrap gap-10 mt-7">
        {filteredMovies.map((movie) => (
          <div className="w-1/5 relative" key={movie.title}>
            <img
              src={movie.image}
              className="relative w-full h-auto"
              alt={movie.title}
            />
            <div className="absolute top-5 right-5">
              <CiBookmark size={30} />
            </div>
            <div className="bottom-5 left-5 font-bold space-y-1">
              <div className="flex items-center gap-2 font-outfit text-sm-text font-normal leading-normal">
                <span className="text-white">
                  {movie.releaseDate.split("-")[0]}
                </span>
                <MdMovieCreation className="text-white" />
                <span className="text-white">Movie</span>
                <span className="text-white">PG</span>
              </div>
              <h1 className="font-outfit text-lg font-normal leading-normal text-white">
                {movie.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
