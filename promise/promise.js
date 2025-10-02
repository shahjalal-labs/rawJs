//
// raw javascript: https://chatgpt.com/share/68ddea26-6bd0-800c-a593-4a879c5b5d33

// promise: https://chatgpt.com/share/68ddea49-1e68-800c-8f4f-2ae9dbce76e5

const randomOutcome = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 5;
      ok ? resolve("👍 yay: success") : reject("👎 nah: failure");
    }, 500);
  });
};

randomOutcome()
  .then((value) => {
    console.log("Resolved:", value);
  })
  .catch((err) => {
    ("Rejected:", err);
  })
  .finally(() => {
    console.log("Finally:", "promise executed.");
  });
