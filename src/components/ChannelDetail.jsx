import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";

import { Videos, ChannelCard } from "./";

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  console.log(channelDetail);
  useEffect(() => {
    fetchFromApi(`/channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);
  return <div>{id}</div>;
}

export default ChannelDetail;
