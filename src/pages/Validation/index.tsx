import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import {
  FormSwitch,
  FormLabel,
  FormInput,
  FormTextarea,
} from "../../base-components/Form";
import Button from "../../base-components/Button";
import Notification from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";
import { useForm } from "react-hook-form";
import Toastify from "toastify-js";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

function Main() {
  const schema = yup
    .object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      age: yup
        .number()
        .required()
        .test("len", "age must be less than or equal to 3", (val) =>
          val && val.toString().length <= 3 ? true : false
        ),
      url: yup.string().url(),
      comment: yup.string().required().min(10),
    })
    .required();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await trigger();
    if (!result) {
      const failedEl = document
        .querySelectorAll("#failed-notification-content")[0]
        .cloneNode(true) as HTMLElement;
      failedEl.classList.remove("hidden");
      Toastify({
        node: failedEl,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    } else {
      const successEl = document
        .querySelectorAll("#success-notification-content")[0]
        .cloneNode(true) as HTMLElement;
      successEl.classList.remove("hidden");
      Toastify({
        node: successEl,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    }
  };

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Form Validation</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Form Validation */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Implementation
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-1">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-1"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    {/* BEGIN: Validation Form */}
                    <form className="validate-form" onSubmit={onSubmit}>
                      <div className="input-form">
                        <FormLabel
                          htmlFor="validation-form-1"
                          className="flex flex-col w-full sm:flex-row"
                        >
                          Name
                          <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                            Required, at least 2 characters
                          </span>
                        </FormLabel>
                        <FormInput
                          {...register("name")}
                          id="validation-form-1"
                          type="text"
                          name="name"
                          className={clsx({
                            "border-danger": errors.name,
                          })}
                          placeholder="John Legend"
                        />
                        {errors.name && (
                          <div className="mt-2 text-danger">
                            {typeof errors.name.message === "string" &&
                              errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 input-form">
                        <FormLabel
                          htmlFor="validation-form-2"
                          className="flex flex-col w-full sm:flex-row"
                        >
                          Email
                          <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                            Required, email address format
                          </span>
                        </FormLabel>
                        <FormInput
                          {...register("email")}
                          id="validation-form-2"
                          type="email"
                          name="email"
                          className={clsx({
                            "border-danger": errors.email,
                          })}
                          placeholder="example@gmail.com"
                        />
                        {errors.email && (
                          <div className="mt-2 text-danger">
                            {typeof errors.email.message === "string" &&
                              errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 input-form">
                        <FormLabel
                          htmlFor="validation-form-3"
                          className="flex flex-col w-full sm:flex-row"
                        >
                          Password
                          <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                            Required, at least 6 characters
                          </span>
                        </FormLabel>
                        <FormInput
                          {...register("password")}
                          id="validation-form-3"
                          type="password"
                          name="password"
                          className={clsx({
                            "border-danger": errors.password,
                          })}
                          placeholder="secret"
                        />
                        {errors.password && (
                          <div className="mt-2 text-danger">
                            {typeof errors.password.message === "string" &&
                              errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 input-form">
                        <FormLabel
                          htmlFor="validation-form-4"
                          className="flex flex-col w-full sm:flex-row"
                        >
                          Age
                          <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                            Required, integer only & maximum 3 characters
                          </span>
                        </FormLabel>
                        <FormInput
                          {...register("age")}
                          id="validation-form-4"
                          type="number"
                          name="age"
                          className={clsx({
                            "border-danger": errors.age,
                          })}
                          placeholder="21"
                        />
                        {errors.age && (
                          <div className="mt-2 text-danger">
                            {typeof errors.age.message === "string" &&
                              errors.age.message}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 input-form">
                        <FormLabel
                          htmlFor="validation-form-5"
                          className="flex flex-col w-full sm:flex-row"
                        >
                          Profile URL
                          <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                            Optional, URL format
                          </span>
                        </FormLabel>
                        <FormInput
                          {...register("url")}
                          id="validation-form-5"
                          type="text"
                          name="url"
                          className={clsx({
                            "border-danger": errors.url,
                          })}
                          placeholder="https://google.com"
                        />
                        {errors.url && (
                          <div className="mt-2 text-danger">
                            {typeof errors.url.message === "string" &&
                              errors.url.message}
                          </div>
                        )}
                      </div>
                      <div className="mt-3 input-form">
                        <FormLabel
                          htmlFor="validation-form-6"
                          className="flex flex-col w-full sm:flex-row"
                        >
                          Comment
                          <span className="mt-1 text-xs sm:ml-auto sm:mt-0 text-slate-500">
                            Required, at least 10 characters
                          </span>
                        </FormLabel>
                        <FormTextarea
                          {...register("comment")}
                          id="validation-form-6"
                          name="comment"
                          className={clsx({
                            "border-danger": errors.comment,
                          })}
                          placeholder="Type your comments"
                        ></FormTextarea>
                        {errors.comment && (
                          <div className="mt-2 text-danger">
                            {typeof errors.comment.message === "string" &&
                              errors.comment.message}
                          </div>
                        )}
                      </div>
                      <Button variant="primary" type="submit" className="mt-5">
                        Register
                      </Button>
                    </form>
                    {/* END: Validation Form */}
                  </Preview>
                  <Source>
                    <Highlight type="javascript">
                      {`
                      const schema = yup
                      .object({
                        name: yup.string().required().min(2),
                        email: yup.string().required().email(),
                        password: yup.string().required().min(6),
                        age: yup
                          .number()
                          .required()
                          .test(
                            "len",
                            "age must be less than or equal to 3",
                            (val) => val.toString().length <= 3
                          ),
                        url: yup.string().url(),
                        comment: yup.string().required().min(10),
                      })
                      .required();
                  
                    const {
                      register,
                      trigger,
                      formState: { errors },
                    } = useForm({
                      mode: "onChange",
                      resolver: yupResolver(schema),
                    });
                    const onSubmit = async (event) => {
                      event.preventDefault();
                      const result = await trigger();
                      if (!result) {
                        Toastify({
                          node: dom("#failed-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      } else {
                        Toastify({
                          node: dom("#success-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      }
                    };
                      `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Form Validation */}
          {/* BEGIN: Success Notification Content */}
          <Notification
            id="success-notification-content"
            className="flex hidden"
          >
            <Lucide icon="CheckCircle" className="text-success" />
            <div className="ml-4 mr-4">
              <div className="font-medium">Registration success!</div>
              <div className="mt-1 text-slate-500">
                Please check your e-mail for further info!
              </div>
            </div>
          </Notification>
          {/* END: Success Notification Content */}
          {/* BEGIN: Failed Notification Content */}
          <Notification
            id="failed-notification-content"
            className="flex hidden"
          >
            <Lucide icon="XCircle" className="text-danger" />
            <div className="ml-4 mr-4">
              <div className="font-medium">Registration failed!</div>
              <div className="mt-1 text-slate-500">
                Please check the fileld form.
              </div>
            </div>
          </Notification>
          {/* END: Failed Notification Content */}
        </div>
      </div>
    </>
  );
}

export default Main;
