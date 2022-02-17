import { Link } from "react-router-dom";
import Banner from "./Banner";

const Header = () => {
  return (
    <header>
      <h1 className="mainHeader">Jasper Oudemans</h1>
      <nav>
        <ul>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
          <li>
            <a
              href="/downloadable/jasperOUDEMANS-resume.pdf"
              download="jasperOUDEMANS-resume"
              id="resume"
            >
              Resume PDF
            </a>
          </li>
        </ul>
      </nav>
      <Banner />
    </header>
  );
};

export default Header;
