import React, { createContext, useState } from "react";
import moment from "moment";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = isLiked;
  const isLikedByCurrentUser = isRetweeted;
  const date = moment().format("h:mm A - MMM Do, YYYY");

  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleToggleLike = () => {
    console.log("working");
    isLiked ? setNumOfLikes(numOfLikes - 1) : setNumOfLikes(numOfLikes + 1);
    setIsLiked(!isLiked);
  };

  const handleToggleRetweet = () => {
    console.log("working");
    isRetweeted
      ? setNumOfRetweets(numOfRetweets - 1)
      : setNumOfRetweets(numOfRetweets + 1);
    setIsRetweeted(!isRetweeted);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        isLiked,
        isRetweeted,
        date,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
