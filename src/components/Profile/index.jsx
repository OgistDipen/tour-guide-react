import React from "react";
import { Card, ProfilePic } from "./style";

const ProfileCard = ({ item }) => {
  return (
    <Card>
      <ProfilePic src={item.img} />
      <h2>{item.name}</h2>
      <span>{item.position.join(", ")}</span>
      <p>{item.desc}</p>
    </Card>
  );
};

export default ProfileCard;
