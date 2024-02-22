const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const UploadModel = require("../models/UploadModel");

router.delete("/api/delete/:id", async (req, res) => {
  try {
    const photo = await UploadModel.findById(req.params.id);

    // Check if the photo exists
    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }

    // Delete photo from database
    await photo.remove();

    // Delete photo file from storage
    const filePath = path.join(__dirname, "../public/uploads", photo.photo);
    fs.unlinkSync(filePath);

    res.status(200).json({ message: "Photo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
