import { User } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

// getting the pfp from the user
type Props = {
  user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={user.image}
            alt="profile image"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <FaUser />
          <span className="sr-only">{user.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
