import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import {
  FormSwitch,
  FormLabel,
  FormInput,
  FormTextarea,
  FormInline,
} from "../../base-components/Form";
import Tippy from "../../base-components/Tippy";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useTranslation } from "react-i18next";
import {
  saveCategory,
  checkUniqueness,
  getCategoryById,
  updateCategory,
} from "./api";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { mapFromDto, mapToDto } from "./mapper";
import { BASE_URL } from "../../common/constants";
import { showFailToast, showSuccessToast } from "../../common/toasts";
import { debounce } from "lodash";
import {
  ACCEPTED_IMAGE_FORMATS,
  UPLOADED_FILE_SIZE,
} from "../../common/constants";

let isUniqueBoolean: boolean = true;

function Main() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [createNew, setCreateNew] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const schema = yup.object({
    code: yup
      .string()
      .required(t("global.requiredField"))
      .test({
        name: "is-unique",
        message: t("categories.form.notifications.codeNotUnique"),
        test: async function (value: any) {
          if (watchedFields.code != value) {
            isUniqueBoolean = await checkUniqueness(value, id);
          }
          return isUniqueBoolean;
        },
      }),
    sortOrder: yup
      .number()
      .integer()
      .min(0, t("global.positiveField"))
      .typeError(t("global.numberField")),
    englishTitle: yup.string().required(t("global.requiredField")),
    arabicTitle: yup.string().required(t("global.requiredField")),
    englishDescription: yup.string().max(255, t("global.descriptionError")),
    arabicDescription: yup.string().max(255, t("global.descriptionError")),
    image: yup
      .mixed()
      .required(t("global.requiredImage"))
      .test("fileType", t("global.typeError"), (value) => {
        const imageType = value?.file?.type || "";
        return !value?.file || ACCEPTED_IMAGE_FORMATS.includes(imageType);
      })
      .test("fileSize", t("global.fileSize"), async (value) => {
        const fileSizeInBytes = value?.file?.size;
        return !value?.file || fileSizeInBytes <= UPLOADED_FILE_SIZE;
      }),
  });

  const handleDebouncingCode = debounce((e: any) => {
    setValue("code", e.target.value);
    trigger("code");
  }, 500);

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    watch,
    reset,
    trigger,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // Watch for changes in form values
  const watchedFields = watch();
  const image = watchedFields.image;

  // Define category initial values
  const initialValues = {
    code: "",
    sortOrder: 0,
    parentId: new URLSearchParams(location.search).get("parentId") || undefined,
    image: undefined,
    numberOfChildren: 0,
    numberOfProducts: 0,
    active: true,
    englishTitle: "",
    englishDescription: "",
    arabicTitle: "",
    arabicDescription: "",
    enId: "",
    arId: "",
  };

  useEffect(() => {
    if (id) {
      if (createNew) {
        fetchCategoryData();
      }
    } else {
      setIsLoading(false);
      reset(initialValues);
    }
  }, [id]);

  const fetchCategoryData = async () => {
    setIsLoading(true);
    const response = await getCategoryById(id);
    if (response.status < 300) {
      const mappedCategory = mapFromDto(response.data);
      reset(mappedCategory);
    } else {
      showFailToast(t("categories.form.notifications.fetchingFailed"));
    }
    setIsLoading(false);
  };

  const onSubmit = async (event: any) => {
    const obj = mapToDto(getValues());

    if (id) {
      const response: any = await updateCategory(obj, id);
      handleUpdateResponse(response);
    } else {
      const response: any = await saveCategory(obj);
      handleSaveResponse(response);
    }
  };

  const handleUpdateResponse = (response: any) => {
    if (response?.status < 300) {
      showSuccessToast(t("categories.form.notifications.updateSucceeded"));
      reset(mapFromDto(response.data));
    } else {
      showFailToast(t("categories.form.notifications.updateFailed"));
    }
  };

  const handleSaveResponse = (response: any) => {
    if (response?.status < 300) {
      showSuccessToast(t("categories.form.notifications.addSucceeded"));
      const id = response.data.id;
      if (createNew) {
        reset(initialValues);
        navigate(`/categories/form/`);
      } else {
        reset(mapFromDto(response.data));
        const newUrl = `/categories/form/${id}`;
        navigate(newUrl);
      }
    } else {
      showFailToast(t("categories.form.notifications.addFailed"));
    }
  };

  const handleFileChange = (event: any) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const binaryImageData = e.target.result;
          setValue("image", { file, binaryImageData }, { shouldDirty: true });
          trigger("image");
        }
      };
      reader.readAsDataURL(file);
      fileInput.value = "";
    }
  };

  const handleRemoveImage = () => {
    setValue("image", undefined, { shouldDirty: true });
    trigger("image");
  };

  const handleCreateSubCategory = () => {
    const newUrl = `/categories/form?parentId=${id}`;
    navigate(newUrl);
    reset(initialValues);
  };

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-30 flex justify-center items-center z-50">
          <LoadingIcon
            icon="spinning-circles"
            className="w-11 h-11"
            color="#1e40af"
          />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-11 mt-8 intro-y gap-x-6">
            <div className="col-span-11 intro-y 2xl:col-span-9 flex">
              <h2 className="mr-auto text-lg font-medium">
                {t("categories.form.create")}
              </h2>
              {id && (
                <div className="flex gap-x-2">
                  {!getValues().numberOfChildren && (
                    <Button
                      variant="outline-primary"
                      type="button"
                      name="addProduct"
                      onClick={() => {}}
                    >
                      {t("categories.view.addProduct")}
                    </Button>
                  )}
                  {!getValues().numberOfProducts && (
                    <Button
                      variant="outline-primary"
                      type="button"
                      name="createSubCategory"
                      onClick={() => {
                        handleCreateSubCategory();
                      }}
                    >
                      {t("categories.view.createSub")}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
            <div className="col-span-11 intro-y 2xl:col-span-9">
              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="p-5 mt-5 intro-y box " id="informationCard">
                  <div className=" p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                      <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                      {t("categories.form.informationCard")}
                    </div>
                    <div className="p-3">
                      <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                        <FormLabel
                          htmlFor="parentId"
                          className="xl:w-64 xl:!mr-10"
                        >
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("categories.form.parent.label")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("categories.form.parent.description")}
                            </div>
                          </div>
                        </FormLabel>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <FormInput
                            {...register("parentId")}
                            id="parentId"
                            type="text"
                            name="parentId"
                            disabled
                            placeholder="-"
                          />
                        </div>
                      </FormInline>
                      <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                        <FormLabel className="xl:w-64 xl:!mr-10" htmlFor="code">
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("categories.form.code.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("categories.form.code.description")}
                            </div>
                          </div>
                        </FormLabel>

                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <FormInput
                            {...register("code")}
                            id="code"
                            type="text"
                            name="code"
                            className={clsx({
                              "border-danger": errors.code,
                            })}
                            placeholder={t("categories.form.code.label")}
                            onChange={handleDebouncingCode}
                          />
                          {errors.code && (
                            <div className="mt-2 text-danger">
                              {typeof errors.code.message === "string" &&
                                errors.code.message}
                            </div>
                          )}
                        </div>
                      </FormInline>

                      <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                        <FormLabel
                          htmlFor="sortOrder"
                          className="xl:w-64 xl:!mr-10"
                        >
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("categories.form.sortOrder.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("categories.form.sortOrder.description")}
                            </div>
                          </div>
                        </FormLabel>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <FormInput
                            {...register("sortOrder", { valueAsNumber: true })}
                            id="sortOrder"
                            type="text"
                            name="sortOrder"
                            className={clsx({
                              "border-danger": errors.sortOrder,
                            })}
                          />
                          {errors.sortOrder && (
                            <div className="mt-2 text-danger">
                              {typeof errors.sortOrder.message === "string" &&
                                errors.sortOrder.message}
                            </div>
                          )}
                        </div>
                      </FormInline>

                      <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                        <FormLabel
                          className="xl:w-64 xl:!mr-10"
                          htmlFor="categoryActive"
                        >
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("categories.form.status.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("categories.form.status.description")}
                            </div>
                          </div>
                        </FormLabel>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <Controller
                            name="active"
                            control={control}
                            defaultValue={true}
                            render={({ field }) => (
                              <FormSwitch>
                                <FormSwitch.Input
                                  name={field.name}
                                  checked={field.value}
                                  id="active"
                                  type="checkbox"
                                  onChange={(value) => field.onChange(value)}
                                />
                              </FormSwitch>
                            )}
                          />
                        </div>
                      </FormInline>
                    </div>
                  </div>
                </div>

                <div className="p-5 mt-5 intro-y box " id="descriptionCard">
                  <div className=" p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                      <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                      {t("categories.form.descriptionCard")}
                    </div>
                    <div className="p-3">
                      <div className="flex flex-col items-top pb-5 border-b border-slate-200/60 dark:border-darkmode-400 lg:flex-row lg:items-center">
                        <div className="font-medium lg:ml-3 xs:block xs:mb-3">
                          {t("global.englishDescription")}
                        </div>
                        <div className="flex-1 w-full mt-3 xl:mt-0 pl-5 lg:ml-3 xs:block">
                          <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                              <FormLabel
                                className="xl:w-64 xl:!mr-10"
                                htmlFor="englishTitle"
                              >
                                <div className="text-left">
                                  <div className="flex items-center">
                                    <div className="font-medium">
                                      {t("categories.form.title.label")}
                                    </div>
                                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                      {t("global.requiredIndicator")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t("categories.form.title.description")}
                                  </div>
                                </div>
                              </FormLabel>

                              <div className="flex-1 w-full mt-3 xl:mt-0">
                                <FormInput
                                  {...register("englishTitle")}
                                  id="englishTitle"
                                  type="text"
                                  name="englishTitle"
                                  className={clsx({
                                    "border-danger": errors.englishTitle,
                                  })}
                                  placeholder={t("global.englishTitle")}
                                />
                                {errors.englishTitle && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.englishTitle.message ===
                                      "string" && errors.englishTitle.message}
                                  </div>
                                )}
                              </div>
                            </FormInline>

                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                              <FormLabel
                                className="xl:w-64 xl:!mr-10"
                                htmlFor="englishDescription"
                              >
                                <div className="text-left">
                                  <div className="flex items-center">
                                    <div className="font-medium">
                                      {t("categories.form.description.label")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t(
                                      "categories.form.description.description"
                                    )}
                                  </div>
                                </div>
                              </FormLabel>

                              <div className="flex-1 w-full mt-3 xl:mt-0">
                                <FormTextarea
                                  {...register("englishDescription")}
                                  id="englishDescription"
                                  name="englishDescription"
                                  className={clsx({
                                    "border-danger": errors.englishDescription,
                                  })}
                                  placeholder={t("global.englishDescription")}
                                />
                                {errors.englishDescription && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.englishDescription
                                      .message === "string" &&
                                      errors.englishDescription.message}
                                  </div>
                                )}
                              </div>
                            </FormInline>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-top pb-5 pt-5 lg:flex-row lg:items-center">
                        <div className="font-medium lg:ml-3 xs:block xs:mb-3 xs:mt-3">
                          {t("global.arabicDescription")}
                        </div>
                        <div className="flex-1 w-full mt-3 xl:mt-0 pl-5 lg:ml-3 xs:block">
                          <div className="relative py-10 pl-5 pr-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border">
                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                              <FormLabel
                                className="xl:w-64 xl:!mr-10"
                                htmlFor="arabicTitle"
                              >
                                <div className="text-left">
                                  <div className="flex items-center">
                                    <div className="font-medium">
                                      {t("categories.form.title.label")}
                                    </div>
                                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                      {t("global.requiredIndicator")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t("categories.form.title.description")}
                                  </div>
                                </div>
                              </FormLabel>

                              <div className="flex-1 w-full mt-3 xl:mt-0">
                                <FormInput
                                  {...register("arabicTitle")}
                                  id="arabicTitle"
                                  type="text"
                                  name="arabicTitle"
                                  className={clsx({
                                    "border-danger": errors.arabicTitle,
                                  })}
                                  placeholder={t("global.arabicTitle")}
                                />
                                {errors.arabicTitle && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.arabicTitle.message ===
                                      "string" && errors.arabicTitle.message}
                                  </div>
                                )}
                              </div>
                            </FormInline>

                            <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                              <FormLabel
                                className="xl:w-64 xl:!mr-10"
                                htmlFor="arabicDescription"
                              >
                                <div className="text-left">
                                  <div className="flex items-center">
                                    <div className="font-medium">
                                      {t("categories.form.description.label")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t(
                                      "categories.form.description.description"
                                    )}
                                  </div>
                                </div>
                              </FormLabel>

                              <div className="flex-1 w-full mt-3 xl:mt-0">
                                <FormTextarea
                                  {...register("arabicDescription")}
                                  id="arabicDescription"
                                  name="arabicDescription"
                                  className={clsx({
                                    "border-danger": errors.arabicDescription,
                                  })}
                                  placeholder={t("global.arabicDescription")}
                                />
                                {errors.arabicDescription && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.arabicDescription.message ===
                                      "string" &&
                                      errors.arabicDescription.message}
                                  </div>
                                )}
                              </div>
                            </FormInline>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 mt-5 intro-y box " id="imageCard">
                  <div className=" p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                      <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                      {t("categories.form.imageCard")}
                    </div>
                    <div className="p-3">
                      <FormInline className="flex-col items-start mt-10 xl:flex-row">
                        <FormLabel className="w-full xl:w-64 xl:!mr-10">
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("categories.form.image.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              <div>
                                {t("categories.form.image.description")}
                              </div>
                            </div>
                          </div>
                        </FormLabel>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <div>
                            <div
                              className={`pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 flex items-center justify-center ${
                                errors.image
                                  ? "border-red-500"
                                  : "dark:border-darkmode-400"
                              }`}
                            >
                              <div>
                                <div className=" pl-4 pr-5">
                                  {image &&
                                    // To handle when uploading a category, not to check the file in the image (because it returns path url).
                                    // If you're creating a category , file exists in image and will be checked if accepted format.
                                    (!image?.file ||
                                      ACCEPTED_IMAGE_FORMATS.includes(
                                        image?.file?.type
                                      )) && (
                                      <div className="relative col-span-5 cursor-pointer md:col-span-2 h-28 image-fit zoom-in">
                                        <img
                                          className="rounded-md"
                                          src={
                                            id && !image?.binaryImageData
                                              ? BASE_URL + image
                                              : image.binaryImageData
                                          }
                                          alt="Category Image"
                                        />
                                        <Tippy
                                          content={t("global.removeImageTippy")}
                                          className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                                        >
                                          <Lucide
                                            icon="X"
                                            className="w-4 h-4"
                                            onClick={handleRemoveImage}
                                          />
                                        </Tippy>
                                      </div>
                                    )}
                                </div>

                                <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                                  <Lucide
                                    icon="Image"
                                    className="w-4 h-4 mr-2"
                                  />
                                  <span className="mr-1 text-primary">
                                    {t("global.uploadFile")}
                                  </span>{" "}
                                  {t("global.dragAndDrop")}
                                  <FormInput
                                    id="image"
                                    accept="image/*"
                                    type="file"
                                    className={clsx(
                                      "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer "
                                    )}
                                    onChange={handleFileChange}
                                  />
                                </div>
                              </div>
                            </div>
                            {errors.image && (
                              <div className="mt-2 text-danger">
                                {typeof errors.image.message === "string" &&
                                  errors.image.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </FormInline>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-5">
                  {!id && (
                    <Button
                      variant="outline-primary"
                      type="submit"
                      name="saveAndCreateNew"
                      onClick={() => setCreateNew(true)}
                      disabled={isSubmitting}
                    >
                      {t("global.saveAndCreateNew")}
                      {isSubmitting && createNew && (
                        <LoadingIcon
                          icon="spinning-circles"
                          color="#1e40af"
                          className="w-4 h-4 ml-2"
                        />
                      )}
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    type="submit"
                    name="save"
                    onClick={() => setCreateNew(false)}
                    disabled={isSubmitting}
                  >
                    {t("global.save")}
                    {isSubmitting && !createNew && (
                      <LoadingIcon
                        icon="spinning-circles"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* TODO: To be implemented */}
            <div className="hidden col-span-2 intro-y 2xl:block">
              <div className="sticky top-0 pt-10">
                <ul className="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]">
                  <li className="pl-5 mb-4 font-medium border-l-2 border-primary dark:border-primary text-primary">
                    <a href="#informationCard">
                      {t("categories.form.informationCard")}
                    </a>
                  </li>
                  <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                    <a href="#descriptionCard">
                      {t("categories.form.descriptionCard")}
                    </a>
                  </li>
                  <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                    <a href="#imageCard">{t("categories.form.imageCard")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
