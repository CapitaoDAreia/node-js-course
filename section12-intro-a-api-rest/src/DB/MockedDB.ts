export const DB = {
  games: [
    {
      id: 1,
      title: "Red Dead Redemption II",
      year: 2018,
      price: 250,
      platforms: { ps: true, xbox: true, pc: true },
    },
    {
      id: 2,
      title: "God Of War",
      year: 2018,
      price: 250,
      platforms: { ps: true, xbox: false, pc: true },
    },
    {
      id: 3,
      title: "The Witcher III",
      year: 2015,
      price: 150,
      platforms: { ps: true, xbox: true, pc: true },
    },
  ],
};

export let DbModel: typeof DB = {
  games: [
    {
      id: 0,
      title: "",
      year: 0,
      price: 0,
      platforms: { ps: false, xbox: false, pc: false },
    },
  ],
};

