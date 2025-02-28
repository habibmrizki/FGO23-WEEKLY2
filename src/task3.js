const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const runTask3 = async () => {
  try {
    const url = `${baseUrl}`;
    const response = await fetch(url);
    if (!response) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
    const user = data.map((el) => {
      return {
        name: el.name,
        address: el.address.city,
      };
    });
    user.sort((a, b) => {
      if (a.address > b.address) {
        return 1;
      }
      if (a.address < b.address) {
        return -1;
      }
      return 0;
    });
    console.log(user);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};
