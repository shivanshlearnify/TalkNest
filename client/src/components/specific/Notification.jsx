import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { sampleNotification } from "../../constants/sampledata";
import { memo } from "react";
const Notification = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("friendRequestHandler");
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notification</DialogTitle>
      </Stack>
      {sampleNotification.length > 0 ? (
        sampleNotification.map((i, index) => (
          <NotificationItem
            key={i._id}
            sender={i.sender}
            _id={i._id}
            handler={friendRequestHandler}
          />
        ))
      ) : (
        <Typography textAlign={"center"}>No Notification</Typography>
      )}
    </Dialog>
  );
};

// eslint-disable-next-line react/display-name
const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} send you friend request`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notification;
