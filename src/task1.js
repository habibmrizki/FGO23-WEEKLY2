const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === true) {
        resolve("Data berhasil diambil");
      } else {
        reject("Gagal mengambil data");
      }
    }, 3000);
  });
};

export const runTask1 = async () => {
  fetchData(true)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const getData = async () => {
    try {
      const result = await fetchData(true);
      if (!result) throw new Error(result.statusText);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  await getData();
};
