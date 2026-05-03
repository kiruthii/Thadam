import FieldRender from "../../actions/fieldRender/FieldRender";
const FieldColumn = ({fields}) => {
  return (
      <div className="col">
        {fields.map((field)=>(
           <div className=" ps-2" key={field.label}>
                <p className="m-2 ps-2" style={{color:"gray"}}>{field.label}</p>
                <p className="ps-3">
                  <FieldRender type={field.type} value={field.value} />                 
                </p>
              </div>
        ))}

      </div>
    
  );
};
export default FieldColumn;
