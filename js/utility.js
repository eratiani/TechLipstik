const _URL = "https://swapi.dev/api/starships/?search=";
export async function getData(searchQuery) {
  try {
    const response = await fetch(`${_URL}${searchQuery}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export function debounce(func, delay) {
  let timer = null;
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
