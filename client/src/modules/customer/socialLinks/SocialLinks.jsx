import { useFieldArray } from "react-hook-form";
import FormHeader from "../../../ui/formHeader/formHeader";
import Button from "../../../ui/button/Button";
const SocialLinks = ({ register, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalSocialLinks",
  });

  return (
    <div className="card mb-2 flex-fill">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <FormHeader label="Social Links" />

          <button
            type="button"
            className="btn btn-primary rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: "32px", height: "32px", padding: 0 }}
            onClick={() => append({ label: "", url: "" })}
          >
            +
          </button>
        </div>

        <div className="mb-2">
          <label>LinkedIn</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.linkedin")}
          />
        </div>

        <div className="mb-2">
          <label>Instagram</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.instagram")}
          />
        </div>

        <div className="mb-2">
          <label>Facebook</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.facebook")}
          />
        </div>

        <div className="mb-2">
          <label>GitHub</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.github")}
          />
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="mb-2 border p-2 rounded bg-light">
            <div className="row">
              <div className="col-md-5 mb-2">
                <label>Label</label>
                <input
                  className="form-control"
                  placeholder="e.g. Website"
                  {...register(`additionalSocialLinks.${index}.label`)}
                />
              </div>

              <div className="col-md-5 mb-2">
                <label>URL</label>
                <input
                  className="form-control"
                  {...register(`additionalSocialLinks.${index}.url`)}
                />
              </div>

              <div className="col-md-2 d-flex align-items-end mb-2">
                <Button
                  className="btn btn-danger ms-4"
                  onClick={() => remove(index)}
                  icon={<i className="fa-regular fa-trash-can"></i>}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
