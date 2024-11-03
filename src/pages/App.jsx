import ConfirmationButton from "../components/ConfirmationButton/ConfirmationButton";
import "../app.css"

function App() {
  return(
    <>
    <section className="content-home">
      <h1 className="title">Jogo da Velha</h1>
      <div className="botoes-home">
        <ConfirmationButton link="/OnePlayer" content="Um jogador"/>
        <ConfirmationButton link="https://google.com" content="Dois jogadores"/>
      </div>
    </section>

    </>
  );
}

export default App
