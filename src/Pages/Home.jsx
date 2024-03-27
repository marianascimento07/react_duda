import { Link } from "react-router-dom";
import { Banner } from "../components/Banner/banner";
import { Header } from "../components/Header/Header"


export function Home() {
    return (
      <main className="container">  
        <div>
        <Link to="/login">Vai para login</Link>
          <Link to="/login">Vai para cadastro</Link>

        </div>
    
        <Banner />
        <Header />
  
      </main>
    );
  }
  