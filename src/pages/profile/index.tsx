import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data }: any = useSession();

  return (
    <div>
      <h1>profile page</h1>
      <p>{data?.user?.fullname ?? ""}</p>
    </div>
  );
};

export default ProfilePage;
