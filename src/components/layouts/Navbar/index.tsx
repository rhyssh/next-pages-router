import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
  const { data, status }: any = useSession();

  // Show loading or initial state while session is being fetched
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  console.log(data);

  return (
    <div className={styles.navbar}>
      <div className="big" id="title">Navbar</div>
      {/* <Script id="script-title" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'Navbar' `}
      </Script> */}
      <div className="text-white flex items-center">
        {data?.user?.fullname ?? ""} {""} {data?.user?.image ? <Image width={500} height={500} className="rounded-full w-10 mx-3" src={data.user.image} alt={data.user.fullname} /> : ""}
        {data ? (
          <button className="bg-white text-black p-2 rounded-lg" onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className="bg-white text-black p-2 rounded-lg" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
