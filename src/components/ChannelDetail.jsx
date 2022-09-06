import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";

import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  console.log(channelDetail);
  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(24,212,217,1) 0%, rgba(208,0,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
