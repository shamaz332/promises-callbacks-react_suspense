// getting data from dummy API 

async function GetchDD() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res);

  const dataToJson = await res.json();

  console.log(dataToJson);
}

// posting data to dummy API 

async function PostDD() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "SHAMAZ SAEED CAR",
      body: "BLACK",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log(res);

  const dataToJson = await res.json();

  console.log(dataToJson);
}

GetchDD();
PostDD();
