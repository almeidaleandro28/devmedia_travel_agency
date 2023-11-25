import locate from "../../assets/locate.png"
import phone from "../../assets/phone.png"
import email from "../../assets/mail.png"

function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex ">

        <section className="flex-1">
          <ul>
            <li>Contact</li>
            <li >
              <a className="flex flex-row" href="#">
                <img src={ locate } alt="" />  xxxx
              </a>
            </li>
            <li>
              <a className="flex flex-row" href="#">
                <img src={ phone } alt="" />  xxxx
              </a>
            </li>
            <li>
              <a className="flex flex-row" href="#">
                <img src={ email } alt="" />  xxxx
              </a>
            </li>
          </ul>
        </section>
        
        <section className="flex-1">
          <h3>our social networks</h3>
        </section>

      </div>
    </footer>
  );
}

export default Footer;