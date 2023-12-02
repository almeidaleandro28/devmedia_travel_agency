import rio from "../../assets/rio.jpg"
import saoPaulo from "../../assets/saopaulo.jpg"
import manaus from "../../assets/manaus.jpg"
import maranhao from "../../assets/maranhao.jpg"
import niteroi from "../../assets/niteroi.jpg"


function Offers() {
  return (
    <section>
      <h2>Offers</h2>
      <p>with up to 80% discount</p>

      <figure>
        <img src={ rio } alt="vision of Christ the redeemer" />
        <figcaption 
          className="bg-black text-white first-letter:uppercase font-bold"
          >rio de janeiro</figcaption>
      </figure>

      <figure>
        <img src={ saoPaulo } alt="city ​​center of" />
        <figcaption  
        className="bg-black text-white first-letter:uppercase font-bold"
        >rio de janeiro</figcaption>
      </figure>

      <figure>
        <img src={ maranhao } 
          alt="city ​​of Maranhão" />
        <figcaption  
          className="bg-black text-white first-letter:uppercase font-bold"
          >rio de janeiro</figcaption>
      </figure>

      <figure>
        <img src={ niteroi } 
          alt="niteroi bridge" />
        <figcaption 
          className="bg-black text-white first-letter:uppercase font-bold"
          >rio de janeiro</figcaption>
      </figure>

      <figure>
        <img src={ manaus }
          alt="Manaus market" />
        <figcaption  
        className="bg-black text-white first-letter:uppercase font-bold"
        >rio de janeiro</figcaption>
      </figure>

      
    </section>
  );
}

export default Offers;