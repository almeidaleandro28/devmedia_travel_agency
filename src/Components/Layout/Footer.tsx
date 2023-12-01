import locate from "../../assets/locate.png"
import phone from "../../assets/phone.png"
import email from "../../assets/mail.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-wrap sm:flex-row">

        <section className="flex-1 md:flex-1">
          <ul>
            <li className="py-3">Contact</li>
            <li >
              <a className="flex flex-row px" href="#">
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
        
        <section className="flex-1 md:flex-1">
          <ul>
            <li className="py-3">Our social networks</li>
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