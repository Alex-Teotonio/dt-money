import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles"

export function Summary() {
   return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src = {incomeSvg} alt = "Entradas"></img>
                </header>
                <strong> R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src = {outcomeSvg} alt = "Entradas"></img>
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div className = "highlight-background">
                <header>
                    <p>Total</p>
                    <img src = {totalImg} alt = "Entradas"></img>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
   );
    
}