const EnviosForm = () => {
  return (
    <>
      <form action="" className="mr-5">
        <h1>EnviosForm</h1>
        <fieldset class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Peso
          </span>
          <input type="text" class="form-control" placeholder="Kg" />
        </fieldset>
        <fieldset className="mb-3">
          <label htmlFor="slcOrigen">Origen</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </fieldset>
        <fieldset className="mb-3">
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
        <fieldset className="mb-3">
          <label htmlFor="slcCategoria">Categoria</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </fieldset>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
};

export default EnviosForm;
