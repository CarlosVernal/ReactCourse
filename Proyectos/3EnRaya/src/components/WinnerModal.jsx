import {Square} from './Square'

export function WinnerModal({ winner, resetBoard }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
            {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetBoard}>Volver a empezar</button>
        </footer>
      </div>
    </section>
  );
}
