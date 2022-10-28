export default function Profile(props) {
  const { title, thumbnailUrl, url } = props;
  console.log(props);
  return (
    <div className="profile-card">
      <img alt={title} src={thumbnailUrl} />
      <h3 className="title">{title} </h3>
      <a href={url} className="button">
        {" "}
        details{" "}
      </a>
    </div>
  );
}
