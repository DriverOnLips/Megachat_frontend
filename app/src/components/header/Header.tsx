import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="header__content">
        <img src="./src/assets/img/logo.svg" />
        <span className="header__content-span text-base1-medium">Мегачат</span>
      </div>
    </header>
  );
};

export default Header;
