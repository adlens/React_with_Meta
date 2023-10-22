import park from "./assets/images/central-park.jpg";
import ReactPlayer from "react-player/youtube";

function App() {
  const randomImageUrl = "https://picsum.photos/400/265";
  return (
    <div>
      <img height={200} src={park} alt="A picture of central park"></img>
      <img height={200} src={require("./assets/images/central-park.jpg")}></img>
      <img height={200} src={randomImageUrl} />
    </div>
  );
}

export default App;
