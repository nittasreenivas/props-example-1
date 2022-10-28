import "./styles.css";
import data from "./data";
import Profile from "./Profile";
export default function App() {
  return (
    <div className="App">
      {data.map((info) => {
        const { id, title, url, thumbnailUrl } = info;
        return (
          <div key={id}>
            <Profile title={title} url={url} thumbnailUrl={thumbnailUrl} />
          </div>
        );
      })}
    </div>
  );
}
