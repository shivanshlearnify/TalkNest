import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={" lerem lod dhiksh"} />
      <ProfileCard
        heading={"Username"}
        text={"Shivansh"}
        Icon={<AlternateEmailIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={"Shivansh kesarwani"}
        Icon={<CalendarMonthIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={moment("2023-11-04t18:30:00.000Z").fromNow()}
        Icon={<FaceIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
