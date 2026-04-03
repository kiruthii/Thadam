const Socials = ({ register }) => {
  return (
    <>
      <h6 className="section-title primary-text">SOCIAL MEDIA</h6>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>LinkedIn</label>
          <input className="form-control" {...register("socialMedia.linkedin")} />
        </div>

        <div className="col-md-6 mb-3">
          <label>YouTube</label>
          <input className="form-control" {...register("socialMedia.youtube")} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Facebook</label>
          <input className="form-control" {...register("socialMedia.facebook")} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Twitter</label>
          <input className="form-control" {...register("socialMedia.twitter")} />
        </div>

        <div className="col-md-6 mb-3">
          <label>Instagram</label>
          <input className="form-control" {...register("socialMedia.instagram")} />
        </div>
      </div>
    </>
  );
};

export default Socials;