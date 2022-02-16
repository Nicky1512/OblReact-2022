const Calculadora = () => {
  return (
    <div className="">
      <h1>Calculadora</h1>
      <div className="p-5 border bg-light">
        <form>
          <fieldset>
            <legend>Calcular distancia</legend>
            <div class="mb-3">
              <label for="slcOrigen" className="form-label d-block">
                Origen
              </label>
              <select name="" id="slcOrigen" className="form-select">
                <option value="">Europa</option>
                <option value="">America</option>
                <option value="">Asia</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="slcDestino" className="form-label d-block">
                Destino
              </label>
              <select name="" id="slcDestino" className="form-select">
                <option value="">Europa</option>
                <option value="">America</option>
                <option value="">Asia</option>
              </select>
            </div>
            <div class="mb-3"></div>
            <button type="submit" class="btn btn-primary">
              Calcular
            </button>
          </fieldset>
        </form>
      </div>
      <div className="mt-3">
        <p className="border p-2">RESULTADO</p>
      </div>
    </div>
  );
};

export default Calculadora;
