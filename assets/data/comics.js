export const COMICS = [
  // Marvel Comics
  {
    id: "marvel-spiderman-1",
    title: "Amazing Spider-Man #1",
    publisher: "Marvel Universe",
    description: "Follow Peter Parker as he discovers his incredible powers and becomes the web-slinging hero Spider-Man. Join him on thrilling adventures across New York City as he faces dangerous villains and learns that with great power comes great responsibility.",
    characters: ["Spider-Man", "Mary Jane Watson", "Green Goblin"],
    genre: ["Action", "Superhero", "Adventure"],
    price: 4.99,
    releaseDate: "2024-01-15",
    coverImg: "/covers/marvel-spiderman.jpg"
  },
  {
    id: "marvel-avengers-1",
    title: "The Avengers #1",
    publisher: "Marvel Universe",
    description: "Earth's Mightiest Heroes unite! When an alien threat emerges, Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye must work together to save the world. Experience epic team battles and intense character dynamics.",
    characters: ["Iron Man", "Captain America", "Thor", "Hulk"],
    genre: ["Action", "Superhero", "Team"],
    price: 5.99,
    releaseDate: "2024-02-10",
    coverImg: "/covers/marvel-avengers.jpg"
  },
  {
    id: "marvel-xmen-1",
    title: "X-Men #1",
    publisher: "Marvel Universe",
    description: "Meet a new breed of heroes - mutants who fight for a world that hates and fears them. Xavier's School for Gifted Youngsters trains young mutants like Cyclops, Storm, and Wolverine to harness their powers for good.",
    characters: ["Cyclops", "Storm", "Wolverine", "Professor X"],
    genre: ["Action", "Superhero", "Drama"],
    price: 4.99,
    releaseDate: "2024-01-20",
    coverImg: "/covers/marvel-xmen.jpg"
  },
  {
    id: "marvel-thor-1",
    title: "Thor: God of Thunder #1",
    publisher: "Marvel Universe",
    description: "Witness the power of Asgard! Thor Odinson, wielder of Mjolnir, battles cosmic threats and mythical creatures across the nine realms. Experience Norse mythology like never before in this epic superhero saga.",
    characters: ["Thor", "Loki", "Odin", "Heimdall"],
    genre: ["Fantasy", "Action", "Mythology"],
    price: 5.49,
    releaseDate: "2024-02-05",
    coverImg: "/covers/marvel-thor.jpg"
  },
  {
    id: "marvel-blackpanther-1",
    title: "Black Panther #1",
    publisher: "Marvel Universe",
    description: "T'Challa, King of Wakanda, protects his technologically advanced nation while serving as the Black Panther. Discover the rich culture of Wakanda and the incredible adventures of this noble warrior.",
    characters: ["Black Panther", "Shuri", "Killmonger"],
    genre: ["Action", "Superhero", "Adventure"],
    price: 4.99,
    releaseDate: "2024-01-25",
    coverImg: "/covers/marvel-blackpanther.jpg"
  },
  {
    id: "marvel-doctorstrange-1",
    title: "Doctor Strange #1",
    publisher: "Marvel Universe",
    description: "Enter the mystical realm of magic and sorcery! Stephen Strange, a brilliant neurosurgeon turned Master of the Mystic Arts, protects Earth from magical and interdimensional threats.",
    characters: ["Doctor Strange", "Wong", "Dormammu"],
    genre: ["Superhero", "Fantasy", "Mystical"],
    price: 5.49,
    releaseDate: "2024-02-15",
    coverImg: "/covers/marvel-doctorstrange.jpg"
  },

  // DC Comics
  {
    id: "dc-batman-1",
    title: "The Dark Knight #1",
    publisher: "DC Universe",
    description: "Gotham City's protector emerges from the shadows! Batman, a vigilante without superpowers, uses his intellect, martial arts, and cutting-edge technology to fight crime and corruption in the dark streets of Gotham.",
    characters: ["Batman", "Joker", "Catwoman"],
    genre: ["Action", "Superhero", "Detective"],
    price: 4.99,
    releaseDate: "2024-01-10",
    coverImg: "/covers/dc-batman.jpg"
  },
  {
    id: "dc-superman-1",
    title: "Man of Steel #1",
    publisher: "DC Universe",
    description: "From the planet Krypton comes the world's greatest hero! Superman uses his incredible powers to protect humanity while struggling with his dual identity as Clark Kent. Experience the epic adventures of Earth's Mightiest Hero.",
    characters: ["Superman", "Lex Luthor", "Lois Lane"],
    genre: ["Action", "Superhero", "Adventure"],
    price: 5.49,
    releaseDate: "2024-02-01",
    coverImg: "/covers/dc-superman.jpg"
  },
  {
    id: "dc-wonderwoman-1",
    title: "Wonder Woman #1",
    publisher: "DC Universe",
    description: "Diana, Princess of the Amazons, steps into the world of men as Wonder Woman. Armed with her Lasso of Truth and unmatched combat skills, she fights for justice, peace, and equality across the globe.",
    characters: ["Wonder Woman", "Steve Trevor", "Ares"],
    genre: ["Action", "Superhero", "Fantasy"],
    price: 5.49,
    releaseDate: "2024-01-30",
    coverImg: "/covers/dc-wonderwoman.jpg"
  },
  {
    id: "dc-flash-1",
    title: "The Flash #1",
    publisher: "DC Universe",
    description: "Barry Allen, the Scarlet Speedster, races against time itself! Struck by lightning and infused with cosmic energy, The Flash uses his super-speed to protect Central City from impossible threats at incredible speeds.",
    characters: ["The Flash", "Captain Cold", "Reverse Flash"],
    genre: ["Action", "Superhero", "Sci-Fi"],
    price: 4.99,
    releaseDate: "2024-02-08",
    coverImg: "/covers/dc-flash.jpg"
  },
  {
    id: "dc-aquaman-1",
    title: "Aquaman #1",
    publisher: "DC Universe",
    description: "King of the Seven Seas, Aquaman rules the underwater kingdom of Atlantis with compassion and strength. Navigate the wonders and dangers of the deep ocean alongside this powerful hero.",
    characters: ["Aquaman", "Mera", "Black Manta"],
    genre: ["Action", "Superhero", "Fantasy"],
    price: 4.99,
    releaseDate: "2024-02-12",
    coverImg: "/covers/dc-aquaman.jpg"
  },
  {
    id: "dc-greenlantern-1",
    title: "Green Lantern #1",
    publisher: "DC Universe",
    description: "Hal Jordan wields an emerald ring powered by willpower itself! As a member of the intergalactic Green Lantern Corps, he protects Earth and the cosmos from cosmic threats beyond imagination.",
    characters: ["Green Lantern", "Sinestro", "Kilowog"],
    genre: ["Sci-Fi", "Action", "Superhero"],
    price: 5.49,
    releaseDate: "2024-02-20",
    coverImg: "/covers/dc-greenlantern.jpg"
  },
];

export const getComicById = (id) => COMICS.find((comic) => comic.id === id);

export const featuredComics = () =>
  COMICS.filter((comic) => ["marvel-spiderman-1", "dc-batman-1", "marvel-avengers-1"].includes(comic.id));

export const newReleaseComics = () =>
  COMICS.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 6);

export const popularComics = () =>
  COMICS.slice(0, 4);

export const listPublishers = () => {
  const publishers = new Set(COMICS.map((comic) => comic.publisher));
  return Array.from(publishers).sort();
};

export const listGenres = () => {
  const genres = new Set(COMICS.flatMap((comic) => comic.genre));
  return Array.from(genres).sort();
};
