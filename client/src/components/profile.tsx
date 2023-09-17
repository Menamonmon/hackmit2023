import type { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <img
      className="rounded-[50%] object-cover"
      alt="profile"
      loading="eager"
      id="profile-picture"
      width={100}
      height={100}
      src="/profile-picture-text-card@2x.png"
    />
  );
};

export default Profile;
