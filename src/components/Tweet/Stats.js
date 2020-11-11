import React, { useContext } from "react";
import { TweetContext } from "../TweetContext";
import styled from "styled-components";

const Stats = () => {
  const { numOfLikes, numOfRetweets } = useContext(TweetContext);

  return (
    <Wrapper>
      <Stat>
        <p>
          <strong>{numOfRetweets}</strong> Retweets{" "}
        </p>
      </Stat>
      <Stat>
        <p>
          <strong>{numOfLikes}</strong> Likes
        </p>
      </Stat>
    </Wrapper>
  );
};

export default Stats;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  height: 48px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;
`;
