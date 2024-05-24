import React from "react";
import { useLogin } from "../components/hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>hallo profile</h1>
    </div>
  );
};

export default ProfilePage;
