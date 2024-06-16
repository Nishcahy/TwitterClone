import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReTweetReply, createTweetReply } from "../../Store/Twit/Action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModal({handleClose,open,item}) {
//   const [open, setOpen] = React.useState(false);
 
  const navigate = useNavigate();
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");
  const dispatch=useDispatch();

  const handleSubmit = (values) => {
    dispatch(createTweetReply(values))
    handleClose()
    console.log("handle submot", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: item?.id
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate(`/profile/${6}`)}
              className="cursor-pointer"
              alt="username"
              src={item.user?.image}
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
                  <span className="font-semibold">{item?.user?.fullName}</span>
                  <span className="text-gray-600">@{item.user?.fullName}</span>
                  <img
                    className="ml-2 w-5 h-5"
                    src="https://tse1.mm.bing.net/th?id=OIP.Pw0Bxn09TtUP-3G8jeWMJgHaHk&pid=Api&P=0&h=180"
                    alt="verified"
                  />
                </div>
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate("/twit/${5}")}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0"> </p>
                </div>
              </div>
            </div>
            
          </div>
          <section className={`py-10`}>
              <div className="flex space-x-5">
                <Avatar
                  alt="username"
                  src="https://tse4.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&P=0&h=220"
                />
                <div className="w-full">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="content"
                        placeholder="What is happening?"
                        className="border-none outline-none text-xl bg-transparent w-full"
                        {...formik.getFieldProps("content")}
                      />
                      {formik.errors.content && formik.touched.content && (
                        <span className="text-red-500">
                          {formik.errors.content}
                        </span>
                      )}
                    </div>
                    {/* <div>
                            <img src=""
                        </div> */}
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex space-x-5 items-center">
                        <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                          <ImageIcon className="text-[#id9bf0]" />
                          <input
                            type="file"
                            name="imageFile"
                            className="hidden"
                            onChange={handleSelectImage}
                          />
                        </label>
                        <FmdGoodIcon className="text-[#id9bf0]" />
                        <TagFacesIcon className="text-[#id9bf0]" />
                      </div>
                      <div>
                        <Button
                          sx={{
                            width: "100%",
                            borderRadius: "20px",
                            paddingY: "8px",
                            paddingX: "20px",
                            bgcolor: "#1e88e5",
                          }}
                          variant="contained"
                          type="submit"
                        >
                          Tweet
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
        </Box>
      </Modal>
    </div>
  );
}
