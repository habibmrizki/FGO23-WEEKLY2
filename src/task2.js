function getDataFromServer(status, callback) {
  setTimeout(() => {
    if (status) {
      callback(null, ["product 1", "product 2", "product 3"]);
    } else {
      const err = new Error("failed to fetch data");
      err.name = "Error";
      callback(err, null);
    }
  }, 3000);
}

function getDataFromServerPromise(status) {
  return new Promise((resolve, reject) => {
    getDataFromServer(status, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

export const runTask2 = async () => {
  try {
    const data = await getDataFromServerPromise(true);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
