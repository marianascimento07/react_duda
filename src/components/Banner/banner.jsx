import Page from '../../assets/img/pag1.png';
import './banner.css';


export function Banner() {
    return (
      <section>
        <div className="banner">
            <img src={Page} alt="Imagem principal" />
        </div>
      </section>
    );
  }