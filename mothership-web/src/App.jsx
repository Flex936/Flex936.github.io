import "./App.css";

function App() {
  const moveBy = (amount) => {
    document.getElementById("underline").style.translate = amount;
  };
  return (
    <>
      <div className="nav">
        <button onClick={() => moveBy("0%")}>Karakterkészítés</button>
        <button onClick={() => moveBy("100%")}>Készségek</button>
        <button onClick={() => moveBy("200%")}>Bolt</button>
        <div id="underline" />
      </div>
      <section id="karakter">
        <div className="alcím">
          <h1>Kasztok</h1>
          <p>
            <span className="bold">Tengerészgyalogosok</span>: hasznosak a
            harcban, de Pánikban problémákat okozhat a csapatnak.
          </p>
          <p>
            <span className="bold">Szintetikusok</span>: egy félelmes és
            izgalmas kiegészítője bármely csapatnak, azonban hideg
            embertelenségükkel elbizonytalaníthatják csapattársaikat.
          </p>
          <p>
            <span className="bold">Tudósok</span>: orvosok, kutatók, vagy
            bárkik, akik lényeket akarnak felvágni (vagy fertőzött
            csapattársakat) egy szikével.
          </p>
          <p>
            <span className="bold">Teamsterek</span>: kemény és talpraesett
            űrmunkások (gépészek, mérnökök, bányászók, pilóták, stb.)
          </p>
        </div>
        <div className="alcím">
          <h1>Statok kidobása</h1>
          <p>Erő, gyorsaság, intellektus, harc: 2D10+25 (átl. 36)</p>
          <p>Józanság, félelem, test: 2D10+10</p>
          <p>Maximum Életerő: 1D10+10</p>
        </div>
      </section>
      <section id="készség"></section>
      <section id="bolt"></section>
    </>
  );
}

export default App;
