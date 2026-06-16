export const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products", {
    method: "GET",
  }).then((res) => res.json());
  return response;
};
