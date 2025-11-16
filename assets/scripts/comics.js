export const COMICS = [
  {
    id: "MARVEL-001",
    title: "The Amazing Spider-Man",
    universeLabel: "Marvel Universe",
    publisher: "Marvel Comics",
    description:
      "Peter Parker balances his life as a student and friendly neighborhood Spider-Man, fighting villains and learning what it means to be a hero in New York City.",
    characters: ["Spider-Man", "Mary Jane Watson"],
    genre: ["Superhero", "Action"],
    price: 5.99,
    releaseDate: "2025-01-15",
    coverImg: "/covers/spiderman.jpg",
    isNew: true,
    isPopular: true,
    featuredHeroRank: 1,
  },
  {
    id: "DC-001",
    title: "Batman: Dark Knight Returns",
    universeLabel: "DC Universe",
    publisher: "DC Comics",
    description:
      "The Dark Knight emerges from retirement to face the dangers threatening Gotham City, proving that age is no barrier to justice.",
    characters: ["Batman", "Bruce Wayne"],
    genre: ["Superhero", "Noir"],
    price: 6.99,
    releaseDate: "2025-02-01",
    coverImg: "/covers/batman.jpg",
    isNew: true,
    isPopular: true,
    featuredHeroRank: 2,
  },
  {
    id: "MARVEL-002",
    title: "X-Men: Gold",
    universeLabel: "Marvel Universe",
    publisher: "Marvel Comics",
    description:
      "The iconic mutant team fights for a world that fears and hates them, championing acceptance and diversity against all odds.",
    characters: ["Cyclops", "Storm", "Wolverine"],
    genre: ["Superhero", "Action"],
    price: 5.49,
    releaseDate: "2025-01-20",
    coverImg: "/covers/xmen.jpg",
    isNew: true,
    isPopular: true,
    featuredHeroRank: 3,
  },
  {
    id: "DC-002",
    title: "Superman: Action Comics",
    universeLabel: "DC Universe",
    publisher: "DC Comics",
    description:
      "The Man of Steel fights for truth, justice, and the American way, protecting Earth from cosmic threats and human tyranny.",
    characters: ["Superman", "Clark Kent"],
    genre: ["Superhero", "Action"],
    price: 5.99,
    releaseDate: "2024-12-10",
    coverImg: "/covers/superman.jpg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "MARVEL-003",
    title: "Avengers: Endgame",
    universeLabel: "Marvel Universe",
    publisher: "Marvel Comics",
    description:
      "Earth's Mightiest Heroes unite for the final battle against tyranny, sacrificing everything to save the universe.",
    characters: ["Iron Man", "Captain America", "Thor"],
    genre: ["Superhero", "Action"],
    price: 7.99,
    releaseDate: "2025-01-18",
    coverImg: "/covers/avengers.jpg",
    isNew: true,
    isPopular: true,
  },
  {
    id: "DC-003",
    title: "Wonder Woman: Rebirth",
    universeLabel: "DC Universe",
    publisher: "DC Comics",
    description:
      "Diana, Princess of the Amazons, brings truth and compassion to a world of conflict as the world's greatest warrior.",
    characters: ["Wonder Woman", "Diana Prince"],
    genre: ["Superhero", "Adventure"],
    price: 5.49,
    releaseDate: "2024-11-05",
    coverImg: "/covers/wonderwoman.jpg",
    isNew: false,
    isPopular: false,
  },
  {
    id: "MARVEL-004",
    title: "Thor: God of Thunder",
    universeLabel: "Marvel Universe",
    publisher: "Marvel Comics",
    description:
      "The God of Thunder wields Mjolnir to defend the Nine Realms from destruction and chaos across dimensions.",
    characters: ["Thor Odinson"],
    genre: ["Superhero", "Fantasy"],
    price: 5.99,
    releaseDate: "2024-10-28",
    coverImg: "/covers/thor.jpg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "DC-004",
    title: "The Flash: Fastest Man Alive",
    universeLabel: "DC Universe",
    publisher: "DC Comics",
    description:
      "Barry Allen races against time to stop meta-human threats and save Central City from destruction.",
    characters: ["The Flash", "Barry Allen"],
    genre: ["Superhero", "Sci-Fi"],
    price: 5.49,
    releaseDate: "2024-09-15",
    coverImg: "/covers/flash.jpg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "MARVEL-005",
    title: "Captain America: Civil War",
    universeLabel: "Marvel Universe",
    publisher: "Marvel Comics",
    description:
      "Political pressure mounts to install a system of accountability for the Avengers, causing tension and division.",
    characters: ["Captain America", "Steve Rogers"],
    genre: ["Superhero", "Drama"],
    price: 6.49,
    releaseDate: "2024-08-22",
    coverImg: "/covers/captainamerica.jpg",
    isNew: false,
    isPopular: false,
  },
  {
    id: "DC-005",
    title: "Justice League: New Frontier",
    universeLabel: "DC Universe",
    publisher: "DC Comics",
    description:
      "The world's greatest superheroes unite to face threats no single hero can overcome.",
    characters: ["Superman", "Batman", "Wonder Woman"],
    genre: ["Superhero", "Action"],
    price: 7.99,
    releaseDate: "2024-07-10",
    coverImg: "/covers/justiceleague.jpg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "MARVEL-006",
    title: "Black Panther: King of Wakanda",
    universeLabel: "Marvel Universe",
    publisher: "Marvel Comics",
    description:
      "T'Challa rules Wakanda with honor and power, protecting his nation and the world from hidden threats.",
    characters: ["Black Panther", "T'Challa"],
    genre: ["Superhero", "Action"],
    price: 5.99,
    releaseDate: "2024-06-18",
    coverImg: "/covers/blackpanther.jpg",
    isNew: false,
    isPopular: true,
  },
  {
    id: "DC-006",
    title: "Green Lantern: Emerald Knights",
    universeLabel: "DC Universe",
    publisher: "DC Comics",
    description:
      "Hal Jordan wields a power ring fueled by willpower to protect Earth and the universe as a Green Lantern.",
    characters: ["Green Lantern", "Hal Jordan"],
    genre: ["Superhero", "Sci-Fi"],
    price: 5.49,
    releaseDate: "2024-05-20",
    coverImg: "/covers/greenlantern.jpg",
    isNew: false,
    isPopular: false,
  },
];

export const getComicById = (id) => COMICS.find((comic) => comic.id === id);

export const listPublishers = () => [
  ...new Set(COMICS.map((comic) => comic.publisher)),
];

export const listGenres = () => [
  ...new Set(COMICS.flatMap((comic) => comic.genre)),
];

export const featuredComics = () =>
  COMICS.filter((comic) => comic.featuredHeroRank)
    .sort((a, b) => a.featuredHeroRank - b.featuredHeroRank)
    .slice(0, 3);

export const newReleaseComics = () => COMICS.filter((comic) => comic.isNew);

export const popularComics = () => COMICS.filter((comic) => comic.isPopular);
