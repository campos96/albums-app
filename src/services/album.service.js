export const getAlbums = () => {
  return albums;
};

export const searchAlbums = (search) => {
  return albums.filter((album) =>
    Object.values(album).some((value) => {
      return value
        .toString()
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    })
  );
};

export const getAlbum = (id) => {
  return albums.find((album) => album.id === id);
};

export const getAlbumSongs = (id) => {
  return albumSongs.find((album) => album.id === id).songs;
};

const albums = [
  {
    id: 1,
    type: "Album",
    title: "ECOS",
    publish: 2023,
    author: "Camilo Septimo",
    coverUrl:
      "https://gravatar.com/avatar/2525666a7565b5f76b90ca66fdcd9cf2?s=400&d=wavatar&r=x",
  },
  {
    id: 10,
    type: "Playlist",
    title: "This is Love of Lesbian",
    songs: 50,
    author: "Cesar Campos",
    likes: "46,625",
    duration: "3hr 43 min",
    description:
      "This is Love of Lesbian. The essential tracks, all in one playlist.",
    coverUrl:
      "https://gravatar.com/avatar/f466210ffed62adb989df3d168515c99?s=400&d=wavatar&r=x",
  },
  {
    id: 2,
    type: "Album",
    title: "El Poeta Halley",
    publish: 2021,
    author: "Love of Lesbian",
    coverUrl:
      "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
  },
  {
    id: 3,
    type: "Album",
    title: "La Clase",
    publish: 2020,
    author: "Grupo Los de la O",
    coverUrl:
      "https://gravatar.com/avatar/c68f6b4b89f4324a23ecd6d15515f9f3?s=400&d=wavatar&r=x",
  },
  {
    id: 4,
    type: "Album",
    title: "Mundo",
    publish: 2023,
    author: "Santa Fe Klan",
    coverUrl:
      "https://gravatar.com/avatar/4ef262f33e8df25e04c332896e1e46ea?s=400&d=wavatar&r=x",
  },
  {
    id: 5,
    type: "Album",
    title: "YHLQMDLG",
    publish: 2023,
    author: "Bad Bunny",
    coverUrl:
      "https://gravatar.com/avatar/04d3810bc91fc5e7202bda2b20dfa611?s=400&d=wavatar&r=x",
  },
  {
    id: 6,
    type: "Album",
    title: "V.E.H.N (Viaje epico hacia la nada)",
    publish: 2023,
    author: "Love of Lesbian",
    coverUrl:
      "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
  },
  {
    id: 7,
    type: "Album",
    title: "Puro Chuqui",
    publish: 2019,
    author: "Nunca Jamas",
    coverUrl:
      "https://gravatar.com/avatar/f3785d32577f953446c17796c3056786?s=400&d=wavatar&r=x",
  },
  {
    id: 8,
    type: "Album",
    title: "NataKong",
    publish: 2022,
    author: "Natanel Cano",
    coverUrl:
      "https://gravatar.com/avatar/94be16924b458bf9250788f1e9165dc9?s=400&d=wavatar&r=x",
  },
  {
    id: 9,
    type: "Album",
    title: "Psalmos",
    publish: 2019,
    author: "Jose Madero",
    coverUrl:
      "https://gravatar.com/avatar/286a1481a159ce073d0d9cf9b6e6feba?s=400&d=wavatar&r=x",
  },
];

const albumSongs = [
  {
    id: 1,
    songs: [
      {
        number: 1,
        name: "Como Tu",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Eco",
        plays: 3243252,
        duration: "3:16",
      },
      {
        number: 3,
        name: "Inevitable",
        plays: 7897513,
        duration: "3:24",
      },
      {
        number: 4,
        name: "Aura",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 5,
        name: "Palabras al Viento",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 6,
        name: "Ciclones",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 7,
        name: "Mentira 1",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 8,
        name: "Veneno",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 9,
        name: "Efimera",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 10,
        name: "Contracorriente",
        plays: 56832144,
        duration: "3:50",
      },
      {
        number: 11,
        name: "Sintergia",
        plays: 56832144,
        duration: "3:50",
      },
    ],
  },
  {
    id: 10,
    songs: [
      {
        number: 10,
        name: "Los irrompibles",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 6,
          type: "Album",
          title: "V.E.H.N (Viaje epico hacia la nada)",
          publish: 2023,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 3,
        name: "Los males pasajeros",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 2,
          type: "Album",
          title: "El Poeta Halley",
          publish: 2021,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 11,
        name: "El sur (feat. Bunbury)",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 6,
          type: "Album",
          title: "V.E.H.N (Viaje epico hacia la nada)",
          publish: 2023,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
        },
      },

      {
        number: 7,
        name: "Viaje epico hacia la nada",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 6,
          type: "Album",
          title: "V.E.H.N (Viaje epico hacia la nada)",
          publish: 2023,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
        },
      },

      {
        number: 4,
        name: "I.M.T. - Incapacidad moral transtoria",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 2,
          type: "Album",
          title: "El Poeta Halley",
          publish: 2021,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 9,
        name: "Cosmos (Antisistema solar)",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 6,
          type: "Album",
          title: "V.E.H.N (Viaje epico hacia la nada)",
          publish: 2023,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
        },
      },

      {
        number: 5,
        name: "Contraespionaje",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 2,
          type: "Album",
          title: "El Poeta Halley",
          publish: 2021,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
        },
      },

      {
        number: 1,
        name: "Cuando no me vez",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 2,
          type: "Album",
          title: "El Poeta Halley",
          publish: 2021,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 2,
        name: "Bajo el volcan",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 2,
          type: "Album",
          title: "El Poeta Halley",
          publish: 2021,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 8,
        name: "Sesenta memorias perdidas",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 6,
          type: "Album",
          title: "V.E.H.N (Viaje epico hacia la nada)",
          publish: 2023,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 6,
        name: "El yin y el yen",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 2,
          type: "Album",
          title: "El Poeta Halley",
          publish: 2021,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/39f3d1bcefc5d039f5cc66c64dac2dbd?s=400&d=wavatar&r=x",
        },
      },
      {
        number: 12,
        name: "El mundo",
        plays: 4141543,
        duration: "3:13",
        album: {
          id: 6,
          type: "Album",
          title: "V.E.H.N (Viaje epico hacia la nada)",
          publish: 2023,
          author: "Love of Lesbian",
          coverUrl:
            "https://gravatar.com/avatar/a5119b16bf8946aa38f0e0cd43bbb8ed?s=400&d=wavatar&r=x",
        },
      },
    ],
  },
  {
    id: 3,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 4,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 5,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 6,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 7,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 8,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 9,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
  {
    id: 2,
    songs: [
      {
        number: 1,
        name: "Cancion 1",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 2,
        name: "Cancion 2",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 3,
        name: "Cancion 3",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 4,
        name: "Cancion 4",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 5,
        name: "Cancion 5",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 6,
        name: "Cancion 6",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 7,
        name: "Cancion 7",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 8,
        name: "Cancion 8",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 9,
        name: "Cancion 9",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 10,
        name: "Cancion 10",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 11,
        name: "Cancion 11",
        plays: 4141543,
        duration: "3:13",
      },
      {
        number: 12,
        name: "Cancion 12",
        plays: 4141543,
        duration: "3:13",
      },
    ],
  },
];

export default getAlbums;
