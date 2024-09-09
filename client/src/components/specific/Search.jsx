import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useInputValidation } from "6pp";
import SearchIcon from "@mui/icons-material/Search";
import UserItem from "../shared/UserItem";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampledata";

const Search = () => {
  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false;
  const [users, setusers] = useState(sampleUsers);

  const addFriendhandler = (id) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user, index) => (
            <UserItem
              user={user}
              key={index._id}
              handler={addFriendhandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
