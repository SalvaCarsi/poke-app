export const getIdFromUrl = (url: string) => {
  const splitUrl = url.split('/')

  return splitUrl[6]
}
