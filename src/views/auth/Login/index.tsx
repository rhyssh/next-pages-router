import Link from "next/link";
import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is Incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or Password is Incorrect");
    }
  };
  return (
    <div className={styles.login}>
      <h1 className={`${styles.login__title} capitalize font-bold`}>login</h1>
      {error && <p className="mb-5 text-red-500 ">{error}</p>}
      <div className={`${styles.login__form}`}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={`${styles.login__form__item__label} capitalize`}>
              Email
            </label>
            <input type="email" name="email" id="email" placeholder="email@email.com" className={styles.login__form__item__input} />
          </div>
          <div className={styles.login__form__item}>
            <label htmlFor="password" className={`${styles.login__form__item__label} capitalize`}>
              Password
            </label>
            <input type="password" name="password" id="password" placeholder="*******" className={styles.login__form__item__input} />
          </div>
          <button type="submit" className={`${styles.login__form__item__button} capitalize`} disabled={isLoading}>
            {isLoading ? "isLoading ..." : "login"}
          </button>
        </form>
        <button
          className="mt-4 text-center p-3 w-full bg-gradient-to-r text-white from-indigo-500 via-purple-500 to-pink-500"
          onClick={() =>
            signIn("google", {
              callbackUrl,
              redirec: false,
            })
          }
        >
          Sign in With Google
        </button>
      </div>
      <p className="mt-5">
        Don{"'"}t have an account ? Sign Up{" "}
        <Link href={"/auth/register"} className="text-blue-400 hover:text-blue-700 font-semibold ">
          here{" "}
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
