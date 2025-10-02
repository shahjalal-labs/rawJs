//
function getData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success)
        resolve(
          {
            success: true,
            message: "success full got data",
            data: {
              name: "Shahjalal",
              age: 20,
              gender: "male",
              city: "Dhaka",
              country: "Bangladesh",
            },
          },
          700,
        );
      else {
        reject(
          new Error({
            success: false,
            message: "error full got data",
            data: null,
          }),
        );
      }
    });
  });
}

async function fetchData() {
  try {
    console.log("Fetching...");
    const result = await getData(true);
    console.log("Result:", result);
    const moreResult = await getData(false); // This will throw
    console.log("More Result:", moreResult);
  } catch (error) {
    console.error("Caught error:", JSON.stringify(error.message));
  } finally {
    console.log("Cleaning up resources...");
  }
}

fetchData();
