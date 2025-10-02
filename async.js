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
    });
  });
}
