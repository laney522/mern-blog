import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-brands fa-facebook-square"></i>
        <i className="topIcon fab fa-brands fa-twitter-square"></i>
        <i className="topIcon fab fa-brands fa-pinterest-square"></i>
        <i className="topIcon fab fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

  )
}
