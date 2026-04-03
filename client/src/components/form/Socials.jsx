const Socials = ({ register }) => {
  return (
    <>
      <h6 className="section-title text-primary">SOCIAL MEDIA</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>LinkedIn</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.linkedin")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>YouTube</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.youtube")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Facebook</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.facebook")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Twitter</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.twitter")}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label>Instagram</label>
          <input
            className="form-control bg-light"
            {...register("socialMedia.instagram")}
          />
        </div>
      </div>
    </>
  );
};

export default Socials;
