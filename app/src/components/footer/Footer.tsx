import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <img className="footer__user-img" />
      <div className="footer__text">
        <input
          className="footer__text-input"
          value={'Сообщение'}
        />
      </div>
      <img className="footer__send_message-img" />
    </footer>
  );
};

export default Footer;
