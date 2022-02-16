const Calculadora = () => {

    return (
      <>
        <h1>EnviosForm</h1>
        <form action="">
          <fieldset className="mb-3">
            <label htmlFor="slcOrigen">Origen</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <label className="ml-4" htmlFor="slcDestino">
              Destino
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </fieldset>
          <button className="btn btn-primary">Calcular</button>
        </form>

        <p className="mt-5">
            Distancia
        </p>
      </>
    );

}

export default Calculadora;