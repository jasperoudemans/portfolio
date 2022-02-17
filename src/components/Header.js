import { Link } from "react-router-dom";
import Banner from "./Banner";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <h1 className="mainHeader">Jasper Oudemans</h1>
      <nav>
        <ul>
          <li>
            <HashLink to="/#aboutMe">About me</HashLink>
          </li>
          <li>
            <HashLink to="/#work">Projects</HashLink>
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
