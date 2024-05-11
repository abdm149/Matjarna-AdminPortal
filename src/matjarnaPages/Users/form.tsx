import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormInput, FormLabel, FormInline } from "../../base-components/Form";
import Button from "../../base-components/Button";
import { saveUser } from "./api";
import { showFailToast, showSuccessToast } from "../../common/toasts";
import { useTranslation } from "react-i18next";
import Lucide from "../../base-components/Lucide";

function Main() {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    firstName: yup.string().required(t("global.requiredField")),
    lastName: yup.string(),
    email: yup
      .string()
      .required(t("global.requiredField"))
      .email(t("users.errors.invalidEmail")),
    password: yup
      .string()
      .required(t("global.requiredField"))
      .matches(/^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/, t("users.errors.password")),
    confirmPassword: yup
      .string()
      .required(t("global.requiredField"))
      .oneOf([yup.ref("password"), null], t("users.errors.confirmPasswordMatch")),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const response: any = await saveUser(data);
    handleSaveResponse(response);
  };

  const handleSaveResponse = (response: any) => {
    if (response?.status < 300) {
      showSuccessToast(t("users.form.notifications.addSucceeded"));
      reset(initialValues);
    } else if (response?.status == 409) {
      showFailToast(t("users.form.notifications.duplicatedUser"));
    } else {
      showFailToast(t("users.form.notifications.addFailed"));
    }
  };

  return (
    <>
      <div className="grid grid-cols-11 mt-8 intro-y gap-x-6">
        <div className="col-span-11 intro-y 2xl:col-span-9 flex">
          <h2 className="mr-auto text-lg font-medium">
            {t("users.form.create")}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
        <div className="col-span-11 intro-y lg:col-span-9">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-5 mt-5 intro-y box " id="userInformationCard">
              <div className=" p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                  {t("users.form.userInformationCard")}
                </div>
                <div className="p-3">
                  <FormInline className="flex-col items-start pt-5  xl:flex-row first:mt-0 first:pt-0 items-baseline">
                    <FormLabel
                      htmlFor="firstName"
                      className="xl:w-50 xl:!mr-10 xl:w-1/4 "
                    >
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium ">
                            {t("users.form.firstName")}
                          </div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            {t("global.requiredIndicator")}
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        className="block px-4 py-3 intro-x min-w-full xl:min-w-[350px]"
                        placeholder={t("users.form.firstName")}
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <div className="mt-2 text-danger">
                          {typeof errors.firstName.message === "string" &&
                            errors.firstName.message}
                        </div>
                      )}
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0 items-baseline">
                    <FormLabel
                      htmlFor="lastName"
                      className="xl:w-50 xl:!mr-10 xl:w-1/4  "
                    >
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">
                            {t("users.form.lastName")}
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                        placeholder={t("users.form.lastName")}
                        {...register("lastName")}
                      />
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0 items-baseline">
                    <FormLabel
                      htmlFor="email"
                      className="xl:w-50 xl:!mr-10 xl:w-1/4 mt-5"
                    >
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium ">
                            {t("users.form.email")}
                          </div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            {t("global.requiredIndicator")}
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                        placeholder={t("users.form.email")}
                        {...register("email")}
                      />
                      {errors.email && (
                        <div className="mt-2 text-danger">
                          {typeof errors.email.message === "string" &&
                            errors.email.message}
                        </div>
                      )}
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0 items-baseline">
                    <FormLabel
                      htmlFor="password"
                      className="xl:w-50 xl:!mr-10 xl:w-1/4 mt-5"
                    >
                      <div className="text-left">
                        <div className="flex items-center ">
                          <div className="font-medium ">
                            {t("users.form.password")}
                          </div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            {t("global.requiredIndicator")}
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="password"
                        className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                        placeholder={t("users.form.password")}
                        {...register("password")}
                      />
                      {errors.password && (
                        <div className="mt-2 text-danger">
                          {typeof errors.password.message === "string" &&
                            errors.password.message}
                        </div>
                      )}
                    </div>
                  </FormInline>

                  <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0 items-baseline">
                    <FormLabel
                      htmlFor="confirmPassword"
                      className="xl:w-50 xl:!mr-10 xl:w-1/4 mt-5"
                    >
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium ">
                            {t("users.form.confirmPassword")}
                          </div>
                          <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                            {t("global.requiredIndicator")}
                          </div>
                        </div>
                      </div>
                    </FormLabel>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="password"
                        className="block px-4 py-3 mt-4 intro-x min-w-full xl:min-w-[350px]"
                        placeholder={t("users.form.confirmPassword")}
                        {...register("confirmPassword")}
                      />
                      {errors.confirmPassword && (
                        <div className="mt-2 text-danger">
                          {typeof errors.confirmPassword.message === "string" &&
                            errors.confirmPassword.message}
                        </div>
                      )}
                    </div>
                  </FormInline>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <Button
                type="submit"
                variant="primary"
                className="w-full px-4 py-3 align-top xl:w-32 xl:mr-3"
              >
                {t("users.form.save")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
