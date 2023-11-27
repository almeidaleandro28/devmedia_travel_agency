import locate from "../../assets/locate.png"
import phone from "../../assets/phone.png"
import email from "../../assets/mail.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex sm:flex-row flex-wrap">

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
          <ul>
            <li>Our social networks</li>
            <li>
              <a className="flex flex-row" href="#">
                <img src={ facebook } alt="" />  xxxx
              </a>
            </li>
            <li>
            <a className="flex flex-row" href="#">
                <img src={ instagram } alt="" />  xxxx
              </a>
            </li>
            <li>
            <a className="flex flex-row" href="#">
                <img src={ twitter } alt="" />  xxxx
              </a>
            </li>
          </ul>
        </section>

      </div>
    </footer>
  );
}

export default Footer;