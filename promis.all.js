const posts = [{ title: "POST1" }];
//Do not touch this function
function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "Second" });
      updateLastUserActivityTime();
      resolve();
    }, 3000);
  });
}
//Do not touch this function
function createPost(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: name });
      resolve();
    }, 3000);
  });
}

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
function updateLastUserActivityTime() {
  var time = new Date();
  console.log(time.getTime());
}

Promise.all([
  createPost({ title: "Post Five", body: "This is Post Five" }),
  updateLastUserActivityTime(),
]);
// .then((values)=>console.log(values))
