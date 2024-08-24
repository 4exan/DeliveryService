export default function Header() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a className="navbar-title" href="/home">
            Stara Poshta
          </a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
}
