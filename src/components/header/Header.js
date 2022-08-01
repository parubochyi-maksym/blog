import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">Lets Talk</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/258136/pexels-photo-258136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="nature"
      />
    </div>
  );
}
