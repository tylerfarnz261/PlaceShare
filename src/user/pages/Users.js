import React from "react";

import UsersList from "../components/UsersList/UsersList.component";

const Users = () => {
  const USERS = [
    {
      id: "u2",
      name: "Max Schwarz",
      image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?_gl=1*106jjx7*_ga*MzI4ODQ1Mjk5LjE3NDk1NzMyNjA.*_ga_8JE65Q40S6*czE3NTU3MDc5OTgkbzIkZzAkdDE3NTU3MDgwMzEkajI3JGwwJGgw",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
