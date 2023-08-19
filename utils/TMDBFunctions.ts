const BASIC_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const getImgPath = (path: string) => {
  return BASIC_IMAGE_URL + path;
};
