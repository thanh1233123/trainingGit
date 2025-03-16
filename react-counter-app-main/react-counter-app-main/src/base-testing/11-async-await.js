export const getImage = async () => {
  try {
    const apiKey = 'qyrGmGzotHPXz8ajjXin5PHtmzYQ0cXP';
    const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await res.json();

    const { url } = data.images.original;

    return url;

  } catch (error) {
    console.error(error);
    return new Error( 'Image not found' );
  }
}

