import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <h1 className="mainHeader">Jasper Oudemans</h1>
      <Nav />
      <Banner />
    </header>
  );
};

export default Header;
