import Body from "./components/Body";
function App() {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "sortBy=popularity&" +
    `country=us&apiKey=${import.meta.env.VITE_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return (
    <div>
      <Body />
    </div>
  );
}

export default App;
