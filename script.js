const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// Fetching API thorough PROMISE

// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) => jokes.innerHTML = data.joke)
//     .catch((error) => {
//         console.log(error);
//     })
// }

// Fetching API thorough ASYNC AWAIT

// To create a async function

// In traditional function
// async function <function_name>() {}

// In Fat Arrow function
// const <function_name> = async () => {}

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await response.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`The error is $(error)`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
