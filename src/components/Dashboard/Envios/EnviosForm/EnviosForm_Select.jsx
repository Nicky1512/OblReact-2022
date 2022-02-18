const FormSelect = ({ list, slcID, defaultOption, txtLabel, slcRef }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={slcID} className="form-label d-block">
          {txtLabel}
        </label>
        <select name="" id={slcID} className="form-select" ref={slcRef}>
          <option value="-1">{defaultOption}</option>
          {list.map((cate) => (
            <option value={cate.id} key={cate.id}> {cate.nombre} </option>
          ))}
        </select>
      </div>
    </>
  );
};

export { FormSelect };
