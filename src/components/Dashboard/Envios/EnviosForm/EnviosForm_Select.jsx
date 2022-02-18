const FormSelect = ({list, slcID, defaultOption, txtLabel}) => {


  return (
    <>
      <div class="mb-3">
        <label for={slcID} className="form-label d-block">
          {txtLabel}
        </label>
        <select name="" id={slcID} className="form-select">
          <option value="-1">{defaultOption}</option>
          {list[0].map((cate) => (
              <option value={cate.id}> {cate.nombre} </option>
            ))}
        </select>
      </div>
     
    </>
  );
};


export {FormSelect}