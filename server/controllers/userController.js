const User = require("../models/user");
const cloudinary = require("../config/cloudinary");
const stream = require("stream");


const getUserDetails= async (req, res) => {
  try {
    const user = await User.findOne({ workosId: req?.userId });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const updateProfile = async (req, res) => {
  try {
    let updateData = { ...req.body };

  
    if (req?.file) {
      const bufferStream = new stream.PassThrough();
      bufferStream.end(req?.file?.buffer);

      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "profiles" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        bufferStream.pipe(uploadStream);
      });

      updateData.profileImage = result.secure_url;
    }

    
    const updatedUser = await User.findOneAndUpdate(
      { workosId: req?.userId },
      updateData,
      { new: true }
    );

    res.json({
      success: true,
      user: updatedUser,
      response:req.file
    });

  } catch (error) {
    console.error("Update error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getUserDetails, updateProfile };