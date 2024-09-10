import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { sampleUsers } from "../../constants/sampledata";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const addFriendHandler = (id) => {
    console.log(id, chatId);
  };
  return (
    <Dialog open>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {sampleUsers.length > 0 ? (
            sampleUsers.map((i) => (
              <UserItem key={i._id} user={i} handler={addFriendHandler} />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Button>Cancel</Button>
        <Button>Submit</Button>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
