import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext/UserContext";

const EditProfileModal = ({ close }) => {
  const { user, updateUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm({
    defaultValues: { name: user?.user?.name || "" },
  });
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
    updateUser(formData);
    close();
  };
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.5)", zIndex: 999 }}
    >
      <div className="bg-white p-4 rounded shadow" style={{ width: "320px" }}> 
        <h5 className="mb-3 text-center">Edit Profile</h5>
        <form onSubmit={handleSubmit(onSubmit)}>       
          <div className="mb-3 text-center">
            <img
              src={user?.user?.profileImage || "https://via.placeholder.com/80"}
              alt="profile"
              className="rounded-circle mb-2"
              width="80"
              height="80"
            />
            <input
              type="file"
              className="form-control"
              {...register("image")}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              {...register("name")}
              placeholder="Enter name"
            />
          </div>
          <div className="d-flex justify-content-between">
            
            <button type="button" className="btn btn-secondary" onClick={close}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditProfileModal;
