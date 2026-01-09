import axios from "axios";

const uploadImage = async (file) => {
  if (!file || !(file instanceof File)) return "";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "pozncw4i"); // ✅ correct preset

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dchsivevq/image/upload",
      formData
    );

    return res.data.secure_url;
  } catch (err) {
    console.error("Image upload failed:", err.response?.data || err);
    return "";
  }
};

export default uploadImage;
