import { FormInput } from "../../base-components/Form";
import Button from "../../base-components/Button";
import clsx from "clsx";
import cartUrl from "../../assets/images/cart.svg";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "./api";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import illustrationUrl from "../../assets/images/illustration.svg";

function Main({ setIsAuth }: { setIsAuth: (isAuth: boolean) => void }) {
  const { t } = useTranslation();
  const [loginError, setLoginError] = useState<string | undefined>();
  const { register, handleSubmit, getValues } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {
    setLoginError(undefined);
    const response = await loginUser(getValues());
    if (response.status < 300) {
      const token = response.data;
      authService.saveToken(token);
      setIsAuth(true);
    } else if (response.response.status < 500) {
      setLoginError(t("login.form.invalidCredentials"));
    } else {
      setLoginError(t("login.form.somethingWentWrong"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={clsx([
          "-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen md:overflow-hidden bg-primary md:bg-white dark:bg-darkmode-800 md:dark:bg-darkmode-600",
          "before:hidden before:md:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",
          "after:hidden after:md:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <div className="container relative z-10 sm:px-10">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex">
              <a href="" className="flex items-center pt-5 -intro-x">
                <img alt="login page cart icon" className="w-6" src={cartUrl} />
                <span className="ml-3 text-lg text-white">
                  {t("login.matjarna")}
                </span>
              </a>
              <div className="my-auto">
                <img
                  alt="Matjarna Illustration"
                  className="w-1/2 -mt-16 -intro-x"
                  src={illustrationUrl}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  <Trans i18nKey="login.welcomeMessage" />
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="text-2xl font-bold text-center intro-x xl:text-3xl xl:text-left">
                  {t("login.form.signIn")}
                </h2>
                <div className="mt-8 intro-x">
                  <FormInput
                    {...register("email")}
                    id="email"
                    type="text"
                    name="email"
                    className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                    placeholder={t("login.form.email")}
                  />
                  <FormInput
                    {...register("password")}
                    id="password"
                    type="password"
                    name="password"
                    className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                    placeholder={t("login.form.password")}
                  />
                </div>
                {/* <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
                  <div className="flex items-center mr-auto">
                  </div>
                  <a href="">{t("login.form.forgotPw")}</a>
                </div> */}
                <div className="mt-2 text-center intro-x text-slate-400 xl:hidden"></div>
                {loginError && (
                  <div id="error-box-wrapper" className="mt-4 text-danger">
                    <span className="message">{loginError}</span>
                  </div>
                )}
                <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
                  <Button
                    variant="primary"
                    className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
                    type="submit"
                  >
                    {t("login.form.login")}
                  </Button>
                  {/* <Button
                    variant="outline-secondary"
                    className="w-full px-4 py-3 mt-3 align-top xl:w-32 xl:mt-0"
                  >
                    {t("login.form.register")}
                  </Button> */}
                </div>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Main;
