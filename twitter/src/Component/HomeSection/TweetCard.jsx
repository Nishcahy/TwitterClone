import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";
import ReplyModal from "./ReplyModal";
import { useDispatch } from "react-redux";
import { createReTweetReply, createTweetReply, deleteTweet, likeTweet } from "../../Store/Twit/Action";

const TweetCard = ({item}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const[openReplyModel,setOpenReplyModel]=React.useState(false);
    const handleOpenReplyModel = () => setOpenReplyModel(true);
    const handleCloseReplyModel = () => setOpenReplyModel(false);
    const dispatch=useDispatch();
    // console.log("items logged",item);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleDeleteTweet = () => {
    console.log("Delete Tweet");
    dispatch(deleteTweet(item.id)) 
    handleClose();
  };
 
  const handleCreateRetweet=()=>{

  }
  const handleReTweet = () => {
    dispatch(createReTweetReply(item.id))
    console.log("handle Retweet");
  };
  const handleLikeTweet = () => {
    dispatch(likeTweet(item.id))
    console.log("liked");
  };
  return (
    <React.Fragment>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You ReTweet</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${item?.user.id}`)}
          className="cursor-pointer"
          alt="username"
          src="https://tse4.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&P=0&h=220"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">{item?.user?.fullName}</span>
              <span className="text-gray-600">@{item?.user?.fullName.split(" ").join("_").toLowerCase()}</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://tse1.mm.bing.net/th?id=OIP.Pw0Bxn09TtUP-3G8jeWMJgHaHk&pid=Api&P=0&h=180"
                alt="verified"
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div onClick={()=>navigate(`/twit/${item?.id}`)} className="cursor-pointer">
              <p className="mb-2 p-0">{item?.content}</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src={item?.image}
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer "
                  onClick={handleOpenReplyModel}
                />
                <p>{item?.totalReplies}</p>
              </div>
              <div
                className={`${item?.retwit ? "text-pink-600":"text-gray-600"} space=x=3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleReTweet}
                />
                <p>{item?.totalRetweets}</p>
              </div>
              <div
                className={`${item?.liked ? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}
              >
                { item?.liked ? (
                  <FavoriteIcon
                    className="cursor-pointer text-red-500"
                    onClick={handleLikeTweet}
                  />
                ) : (
                  <FavoriteOutlined
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                )}
                <p>{item?.totalLikes}</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer "
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer "
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal item={item} open={openReplyModel} handleClose={handleCloseReplyModel}/>
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
