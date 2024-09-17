import { Banner, Container } from "./styles";
import { CategoriesCarousel} from "../../components/CategoryCarousel";
import  { OffersCarousel } from "../../components/OffersCarousel";



export function Home() {

  return (
    
    <main>
        <Banner>
        <h1> Bem vindo(a)!</h1>
        </Banner>
      <Container>
        <div>
            <CategoriesCarousel />
            <OffersCarousel />
        </div>
      </Container>
    </main>
  );



}