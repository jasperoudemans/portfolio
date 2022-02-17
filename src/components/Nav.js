import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
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
  );
};

export default Nav;
