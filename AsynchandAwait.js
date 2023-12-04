const posts = [{ title: "POST1" }];
//Do not touch this function
async function createpost() {
  function create2ndPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ title: "POST2" });
        resolve();
      }, 3000);
    });
  }
  //Do not touch this function
  function create3rPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push({ title: "POST3" });
        resolve();
      }, 2000);
    });
  }

  //Do not touch this function
  function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const poppedElement = posts.pop();
          resolve(poppedElement);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }

  let post2 = await create2ndPost();
  let post3 = await create3rPost();
  let deletepost3 = await deletePost();
  console.log(deletepost3.title);
  let deletepost2 = await deletePost();
  console.log(deletepost2.title);
  let deletepost1 = await deletePost();
  console.log(deletepost1.title);
}
createpost();
