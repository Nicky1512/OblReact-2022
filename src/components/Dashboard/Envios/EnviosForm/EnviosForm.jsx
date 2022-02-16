const EnviosForm = () => {
  return (
    <form>
      <fieldset>
        <legend>Nuevo Pedido</legend>
        <div class="mb-3">
          <label for="inputPeso" class="form-label">
            Peso
          </label>
          <input
            type="number"
            id="inputPeso"
            class="form-control"
            placeholder="kg"
          />
        </div>
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
        <div class="mb-3">
          <label for="slcCategoria" className="form-label d-block">
            Categoria
          </label>
          <select name="" id="slcCategoria" className="form-select">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div class="mb-3"></div>
        <button type="submit" class="btn btn-primary">
          Pedir
        </button>
      </fieldset>
    </form>
  );
};

export default EnviosForm;
