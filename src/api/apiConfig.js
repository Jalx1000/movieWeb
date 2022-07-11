const apiConfig={
  baseUrl: 'http://api.themoviedb.org/3/',
  apiKey:'1cc28d7cb8202fa7566afa90c4a8b9f4',
  originalImage:(imagePath)=>`htts://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image:(imagePath)=>`htts://image.tmdb.org/t/p/w500/${imagePath}`,
}

export default apiConfig;