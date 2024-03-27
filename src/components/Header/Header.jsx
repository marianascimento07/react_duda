import "./Header.css";

export function Header(props) {

  return (
    <header>
      <div className="container">
      <h1>{props.title}</h1>
      </div>
    </header>
  )
}  