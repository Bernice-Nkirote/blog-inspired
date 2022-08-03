const url = 'https://theaudiodb.com/api/v1/json/2/album.php?i=112024';

const fetchMusic = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchMusic(function Music({ idAlbum, strArtist, strAlbum, strAlbumThumb }) {
  return `<h2> ${strArtist}</h2> `;
});
