import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email Already Exists" : "");
    }
  };
  return (
    <div className={styles.register}>
      <h1 className={`${styles.register__title} capitalize font-bold`}>register</h1>
      {error && <p className="mb-5 text-red-500">{error}</p>}
      <div className={`${styles.register__form}`}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label htmlFor="email" className={`${styles.register__form__item__label} capitalize`}>
              Email
            </label>
            <input type="email" name="email" id="email" placeholder="email@email.com" className={styles.register__form__item__input} />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="fullname" className={`${styles.register__form__item__label} capitalize`}>
              fullname
            </label>
            <input type="text" name="fullname" id="fullname" placeholder="fullname" className={styles.register__form__item__input} />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="password" className={`${styles.register__form__item__label} capitalize`}>
              Password
            </label>
            <input type="password" name="password" id="password" placeholder="*******" className={styles.register__form__item__input} />
          </div>
          <button type="submit" className={styles.register__form__item__button} disabled={isLoading}>
            {isLoading ? "isLoading ..." : "register"}
          </button>
        </form>
      </div>
      <p className="mt-5">
        Have an account ? Sign in{" "}
        <Link href={"/auth/login"} className="text-blue-400 hover:text-blue-700 font-semibold ">
          here{" "}
        </Link>
      </p>
    </div>
  );
};

export default RegisterView;
