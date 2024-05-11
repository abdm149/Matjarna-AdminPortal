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
  InputGroup,
} from "../../base-components/Form";
import Tippy from "../../base-components/Tippy";
import LoadingIcon from "../../base-components/LoadingIcon";
import { useTranslation, Trans } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  BASE_URL,
  DATE_RANGE_SEPARATOR,
  DATE_FORMAT,
} from "../../common/constants";
import { showFailToast, showSuccessToast } from "../../common/toasts";
import { mapToDto, mapFromDto } from "../Products/mapper";
import {
  saveProduct,
  checkUniqueness,
  getProductById,
  updateProduct,
} from "./api";
import { debounce } from "lodash";
import { FilePond } from "react-filepond";
import Litepicker from "../../base-components/Litepicker";
import {
  ACCEPTED_IMAGE_FORMATS,
  UPLOADED_FILE_SIZE,
} from "../../common/constants";
import CategorySelector from "../../components/CategorySelector/index";

let isUniqueBoolean: boolean = true;

function Main() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [createNew, setCreateNew] = useState(true);
  const { id } = useParams();
  const [subImages, setSubImages] = useState<[] | string[] | undefined>();
  const [discountsSwitches, setDiscountsSwitches] = useState({
    dollar: false,
    shekel: false,
  });
  /* This state has been used to solve triggering the validation on subImages
  after creating new product, that happened due the filepond 'onupdatefiles' method behavior
  which reads the value of the states only on initiation and doesn't notice any updates on them */
  const [subImagesTrigger, setSubImagesTrigger] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const schema = yup.object({
    parentId: yup
      .number()
      .required(t("global.requiredField"))
      .typeError(t("global.requiredField")),
    code: yup
      .string()
      .required(t("global.requiredField"))
      .test({
        name: "is-unique",
        message: t("products.form.notifications.codeNotUnique"),
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
    priceDollar: yup
      .number()
      .min(0, t("global.positiveField"))
      .typeError(t("global.numberField")),
    priceShekel: yup
      .number()
      .min(0, t("global.positiveField"))
      .typeError(t("global.numberField")),
    ...(discountsSwitches.dollar && {
      discountDollar: yup
        .number()
        .min(0, t("global.positiveField"))
        .typeError(t("global.numberField")),
    }),
    ...(discountsSwitches.shekel && {
      discountShekel: yup
        .number()
        .min(0, t("global.positiveField"))
        .typeError(t("global.numberField")),
    }),
    mainImage: yup
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
    subImages: yup
      .array()
      .min(1, t("global.requiredImage"))
      .of(
        yup.mixed().test("fileError", t("global.fileFailed"), (value: any) => {
          const imageType = value?.type || "";
          const fileSizeInBytes = value?.size;
          return (
            !imageType ||
            (ACCEPTED_IMAGE_FORMATS.includes(imageType) &&
              fileSizeInBytes <= UPLOADED_FILE_SIZE)
          );
        })
      ),
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
  const image = watchedFields.mainImage;

  // Define product initial values
  const initialValues = {
    parentId: "",
    code: "",
    sortOrder: 0,
    priceDollar: "",
    priceShekel: "",
    discountDollar: "",
    discountShekel: "",
    mainImage: undefined,
    subImages: [],
    active: true,
    englishTitle: "",
    englishDescription: "",
    arabicTitle: "",
    arabicDescription: "",
    enId: "",
    arId: "",
    dollarId: "",
    shekelId: "",
    dollarDiscountId: "",
    shekelDiscountId: "",
  };

  useEffect(() => {
    if (id) {
      if (createNew) {
        fetchProductData();
      }
    } else {
      reset(initialValues);
      setIsLoading(false);
    }
  }, [id]);

  const fetchProductData = async () => {
    const response = await getProductById(id);
    if (response.status < 300) {
      const mappedProduct = mapFromDto(response.data);
      setDiscountsSwitches({
        dollar: mappedProduct.discountDollar ? true : false,
        shekel: mappedProduct.discountShekel ? true : false,
      });
      extractImagesPaths(mappedProduct?.subImages);
      reset(mappedProduct);
      setIsLoading(false);
    } else {
      showFailToast(t("products.form.notifications.fetchingFailed"));
    }
  };

  const onSubmit = async (event: any) => {
    const obj = mapToDto(getValues());
    if (id) {
      const response: any = await updateProduct(obj, id);
      handleUpdateResponse(response);
    } else {
      const response: any = await saveProduct(obj);
      handleSaveResponse(response);
    }
  };

  const handleUpdateResponse = (response: any) => {
    if (response?.status < 300) {
      const mappedResponse = mapFromDto(response.data);
      extractImagesPaths(mappedResponse?.subImages);
      reset(mappedResponse);
      showSuccessToast(t("products.form.notifications.updateSucceeded"));
      reset(mapFromDto(response.data));
    } else {
      showFailToast(t("products.form.notifications.updateFailed"));
    }
  };

  const handleSaveResponse = (response: any) => {
    if (response?.status < 300) {
      if (!response.allSucceeded) {
        // TODO warning toast
        showFailToast(t("global.filesUploadError"));
      }
      showSuccessToast(t("products.form.notifications.addSucceeded"));
      const id = response.data.id;
      if (createNew) {
        reset(initialValues);
        setDiscountsSwitches({
          dollar: false,
          shekel: false,
        });
        setSubImagesTrigger(false);
        setSubImages(undefined);
      } else {
        const mappedResponse = mapFromDto(response.data);
        extractImagesPaths(mappedResponse?.subImages);
        reset(mappedResponse);
        const newUrl = `/products/form/${id}`;
        navigate(newUrl);
      }
    } else {
      showFailToast(t("products.form.notifications.addFailed"));
    }
  };

  /* This method has been used to sort sub images based on the sort order,
      in addition to extract images paths to be displayed on filepond */
  const extractImagesPaths = (subImages: any) => {
    const paths: any = [];
    subImages.map((subImage: any) => {
      paths.push(BASE_URL + subImage.path);
    });
    setSubImages(paths);
  };

  const handleMainImageChange = (event: any) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const binaryImageData = e.target.result;
          setValue(
            "mainImage",
            { file, binaryImageData },
            { shouldDirty: true }
          );
          trigger("mainImage");
        }
      };
      reader.readAsDataURL(file);
      fileInput.value = "";
    }
  };

  const handleRemoveMainImage = () => {
    setValue("mainImage", undefined, { shouldDirty: true });
    trigger("mainImage");
  };

  useEffect(() => {
    if (subImages !== undefined && subImagesTrigger) {
      setValue("subImages", subImages);
      trigger("subImages");
    }
  }, [subImages]);

  const handleSubImagesUploadAndOrder = (files: any) => {
    if (files.length) {
      setSubImagesTrigger(true);
    }
    let temp: any = [];

    if (files.length) {
      files.map((f: any) => {
        /* If the element is instance of File, it means that the user just uploaded it, 
           other than that it's a Blob retrieved from the server */
        if (f.file instanceof File) {
          temp.push(f.file);
        } else {
          temp.push(f.source);
        }
      });
    }
    setSubImages(temp);
  };

  const handleParentSelect = (value: any) => {
    setValue("parentId", value);
    trigger("parentId");
  };

  const handleDiscountDollarRange = (value: any) => {
    const datesExtracted = value.split(DATE_RANGE_SEPARATOR);
    setValue("startDateDollar", datesExtracted[0]);
    setValue("endDateDollar", datesExtracted[1]);
  };

  const handleDiscountShekelRange = (value: any) => {
    const datesExtracted = value.split(DATE_RANGE_SEPARATOR);
    setValue("startDateShekel", datesExtracted[0]);
    setValue("endDateShekel", datesExtracted[1]);
  };

  const onCategoriesFetchError = () => {
    showFailToast(t("products.form.notifications.noCategories"));
    navigate("/categories/");
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
                {t("products.form.create")}
              </h2>
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
                      {t("products.form.informationCard")}
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
                                {t("products.form.parent.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("products.form.parent.description")}
                            </div>
                          </div>
                        </FormLabel>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <div className="mt-3">
                            <CategorySelector
                              onChange={handleParentSelect}
                              value={getValues("parentId")}
                              onError={onCategoriesFetchError}
                            />
                            {errors.parentId && (
                              <div className="mt-2 text-danger">
                                {typeof errors.parentId.message === "string" &&
                                  errors.parentId.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </FormInline>
                      <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                        <FormLabel className="xl:w-64 xl:!mr-10" htmlFor="code">
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("products.form.code.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("products.form.code.description")}
                            </div>
                          </div>
                        </FormLabel>

                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <FormInput
                            {...register("code")}
                            id="code"
                            type="text"
                            name="code"
                            onChange={handleDebouncingCode}
                            className={clsx({
                              "border-danger": errors.code,
                            })}
                            placeholder={t("products.form.code.label")}
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
                                {t("products.form.sortOrder.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("products.form.sortOrder.description")}
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
                          htmlFor="productActive"
                        >
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("products.form.status.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              {t("products.form.status.description")}
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
                      {t("products.form.descriptionCard")}
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
                                      {t("products.form.title.label")}
                                    </div>
                                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                      {t("global.requiredIndicator")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t("products.form.title.description")}
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
                                      {t("products.form.description.label")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t("products.form.description.description")}
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
                                      {t("products.form.title.label")}
                                    </div>
                                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                      {t("global.requiredIndicator")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t("products.form.title.description")}
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
                                      {t("products.form.description.label")}
                                    </div>
                                  </div>
                                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {t("products.form.description.description")}
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

                <div className="p-5 mt-5 intro-y box " id="pricingCard">
                  <div className=" p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                      <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                      {t("products.form.pricingCard")}
                    </div>
                    <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                      <FormLabel className="xl:w-64 xl:!mr-10">
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">
                              {t("products.form.priceDollar.label")}
                            </div>
                            <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                              {t("global.requiredIndicator")}
                            </div>
                          </div>
                          <div className="mt-3 text-xs leading-relaxed text-slate-500">
                            <Trans i18nKey="products.form.priceDollar.description" />
                          </div>
                        </div>
                      </FormLabel>
                      <div className="flex-1 w-full mt-3 xl:mt-0 ">
                        <div className="flex flex-col sm:flex-row gap-2 items-start">
                          <div className="flex-1 flex flex-col">
                            <InputGroup className="flex-1">
                              <InputGroup.Text
                                className={clsx({
                                  "border-danger": errors.priceDollar,
                                  "w-9": true,
                                })}
                              >
                                $
                              </InputGroup.Text>
                              <FormInput
                                type="text"
                                placeholder={t(
                                  "products.form.priceDollar.label"
                                )}
                                {...register("priceDollar", {
                                  valueAsNumber: true,
                                })}
                                id="priceDollar"
                                name="priceDollar"
                                className={clsx({
                                  "border-danger": errors.priceDollar,
                                })}
                              />
                            </InputGroup>

                            {errors.priceDollar && (
                              <div className="mt-2 text-danger">
                                {typeof errors.priceDollar.message ===
                                  "string" && errors.priceDollar.message}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col flex-1 gap-5 pt-2">
                            <FormSwitch className="flex-1">
                              <FormSwitch.Input
                                name="discountDollarSwitch"
                                id="discountDollarSwitch"
                                checked={discountsSwitches.dollar}
                                type="checkbox"
                                onChange={(e) => {
                                  setDiscountsSwitches((prevState) => ({
                                    ...prevState,
                                    dollar: e.target.checked,
                                  }));
                                  setValue("startDateDollar", "");
                                  setValue("endDateDollar", "");
                                }}
                              />
                              <FormSwitch.Label htmlFor="discountDollarSwitch">
                                {t("products.form.discounted")}
                              </FormSwitch.Label>
                            </FormSwitch>

                            {discountsSwitches.dollar && (
                              <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                  <InputGroup>
                                    <InputGroup.Text
                                      className={clsx({
                                        "border-danger": errors.discountDollar,
                                        "w-9": true,
                                      })}
                                    >
                                      $
                                    </InputGroup.Text>
                                    <FormInput
                                      type="text"
                                      placeholder={t(
                                        "products.form.discountedPrice"
                                      )}
                                      {...register("discountDollar", {
                                        valueAsNumber: true,
                                        shouldUnregister: true,
                                      })}
                                      id="discountDollar"
                                      name="discountDollar"
                                      className={clsx({
                                        "border-danger": errors.discountDollar,
                                      })}
                                    />
                                  </InputGroup>

                                  {errors.discountDollar && (
                                    <div className="mt-2 text-danger">
                                      {typeof errors.discountDollar.message ===
                                        "string" &&
                                        errors.discountDollar.message}
                                    </div>
                                  )}
                                </div>

                                <div className="relative w-full mx-auto">
                                  <div className="absolute flex items-center justify-center w-9 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <Litepicker
                                    value={
                                      getValues("startDateDollar") &&
                                      getValues("startDateDollar") +
                                        DATE_RANGE_SEPARATOR +
                                        getValues("endDateDollar")
                                    }
                                    onChange={handleDiscountDollarRange}
                                    options={{
                                      format: DATE_FORMAT,
                                      autoApply: false,
                                      singleMode: false,
                                      numberOfColumns: 2,
                                      numberOfMonths: 2,
                                      showWeekNumbers: true,
                                      dropdowns: {
                                        minYear: 1990,
                                        maxYear: null,
                                        months: true,
                                        years: true,
                                      },
                                    }}
                                    className="block w-full mx-auto pl-11"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </FormInline>
                    <FormInline className="flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
                      <FormLabel className="xl:w-64 xl:!mr-10">
                        <div className="text-left">
                          <div className="flex items-center">
                            <div className="font-medium">
                              {t("products.form.priceShekel.label")}
                            </div>
                            <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                              {t("global.requiredIndicator")}
                            </div>
                          </div>
                          <div className="mt-3 text-xs leading-relaxed text-slate-500">
                            <Trans i18nKey="products.form.priceShekel.description" />
                          </div>
                        </div>
                      </FormLabel>
                      <div className="flex-1 w-full mt-3 xl:mt-0">
                        <div className="flex flex-col sm:flex-row gap-2 items-start">
                          <div className="flex-1 flex flex-col">
                            <InputGroup>
                              <InputGroup.Text
                                className={clsx({
                                  "border-danger": errors.priceShekel,
                                })}
                              >
                                ₪
                              </InputGroup.Text>
                              <FormInput
                                type="text"
                                placeholder={t(
                                  "products.form.priceShekel.label"
                                )}
                                {...register("priceShekel", {
                                  valueAsNumber: true,
                                })}
                                id="priceShekel"
                                name="priceShekel"
                                className={clsx({
                                  "border-danger": errors.priceShekel,
                                })}
                              />
                            </InputGroup>
                            {errors.priceShekel && (
                              <div className="mt-2 text-danger">
                                {typeof errors.priceShekel.message ===
                                  "string" && errors.priceShekel.message}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col flex-1 gap-5 pt-2">
                            <FormSwitch className="flex-1">
                              <FormSwitch.Input
                                name="discountShekelSwitch"
                                id="discountShekelSwitch"
                                checked={discountsSwitches.shekel}
                                type="checkbox"
                                onChange={(e) => {
                                  setDiscountsSwitches((prevState) => ({
                                    ...prevState,
                                    shekel: e.target.checked,
                                  }));
                                  setValue("startDateShekel", "");
                                  setValue("endDateShekel", "");
                                }}
                              />
                              <FormSwitch.Label htmlFor="discountShekelSwitch">
                                {t("products.form.discounted")}
                              </FormSwitch.Label>
                            </FormSwitch>

                            {discountsSwitches.shekel && (
                              <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                  <InputGroup>
                                    <InputGroup.Text
                                      className={clsx({
                                        "border-danger": errors.discountShekel,
                                        "w-9": true,
                                      })}
                                    >
                                      ₪
                                    </InputGroup.Text>
                                    <FormInput
                                      type="text"
                                      placeholder={t(
                                        "products.form.discountedPrice"
                                      )}
                                      {...register("discountShekel", {
                                        valueAsNumber: true,
                                        shouldUnregister: true,
                                      })}
                                      id="discountShekel"
                                      name="discountShekel"
                                      className={clsx({
                                        "border-danger": errors.discountShekel,
                                      })}
                                    />
                                  </InputGroup>

                                  {errors.discountShekel && (
                                    <div className="mt-2 text-danger">
                                      {typeof errors.discountShekel.message ===
                                        "string" &&
                                        errors.discountShekel.message}
                                    </div>
                                  )}
                                </div>

                                <div className="relative w-full mx-auto">
                                  <div className="absolute flex items-center justify-center w-9 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                                    <Lucide
                                      icon="Calendar"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                  <Litepicker
                                    value={
                                      getValues("startDateShekel") &&
                                      getValues("startDateShekel") +
                                        DATE_RANGE_SEPARATOR +
                                        getValues("endDateShekel")
                                    }
                                    onChange={handleDiscountShekelRange}
                                    options={{
                                      format: DATE_FORMAT,
                                      autoApply: false,
                                      singleMode: false,
                                      numberOfColumns: 2,
                                      numberOfMonths: 2,
                                      showWeekNumbers: true,
                                      dropdowns: {
                                        minYear: 1990,
                                        maxYear: null,
                                        months: true,
                                        years: true,
                                      },
                                    }}
                                    className="block w-full mx-auto pl-11"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </FormInline>
                  </div>
                </div>

                <div className="p-5 mt-5 intro-y box " id="imageCard">
                  <div className=" p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
                    <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                      <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />
                      {t("products.form.imagesCard")}
                    </div>
                    <div className="p-3">
                      <FormInline className="flex-col items-start mt-10 xl:flex-row">
                        <FormLabel className="w-full xl:w-64 xl:!mr-10">
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("products.form.mainImage.label")}
                              </div>
                              <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                                {t("global.requiredIndicator")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              <div>
                                {t("products.form.mainImage.description")}
                              </div>
                            </div>
                          </div>
                        </FormLabel>
                        <div className="flex-1 w-full mt-3 xl:mt-0">
                          <div>
                            <div
                              className={`pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 flex items-center justify-center ${
                                errors.mainImage
                                  ? "border-red-500"
                                  : "dark:border-darkmode-400"
                              }`}
                            >
                              <div>
                                <div className=" pl-4 pr-5">
                                  {image &&
                                    // To handle when uploading a product, not to check the file in the image (because it returns path url).
                                    // If you're creating a product , file exists in image and will be checked if accepted format.
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
                                          alt="Product Main Image"
                                        />
                                        <Tippy
                                          content={t("global.removeImageTippy")}
                                          className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                                        >
                                          <Lucide
                                            icon="X"
                                            className="w-4 h-4"
                                            onClick={handleRemoveMainImage}
                                          />
                                        </Tippy>
                                      </div>
                                    )}
                                </div>

                                <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                                  <span className="mr-1 text-primary">
                                    {t("global.uploadFile")}
                                  </span>
                                  {t("global.dragAndDrop")}
                                  <FormInput
                                    id="mainImage"
                                    accept="image/*"
                                    type="file"
                                    className={clsx(
                                      "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer "
                                    )}
                                    onChange={handleMainImageChange}
                                  />
                                </div>
                              </div>
                            </div>
                            {errors.mainImage && (
                              <div className="mt-2 text-danger">
                                {typeof errors.mainImage.message === "string" &&
                                  errors.mainImage.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </FormInline>

                      <FormInline className="flex-col items-start mt-10 xl:flex-row">
                        <FormLabel className="w-full xl:w-64 xl:!mr-10">
                          <div className="text-left">
                            <div className="flex items-center">
                              <div className="font-medium">
                                {t("products.form.subImages.label")}
                              </div>
                            </div>
                            <div className="mt-3 text-xs leading-relaxed text-slate-500">
                              <div>
                                {t("products.form.subImages.description")}
                              </div>
                            </div>
                          </div>
                        </FormLabel>
                        <div
                          className={`flex-1 w-full mt-3 xl:mt-0 ${
                            errors.subImages ? "border--error" : ""
                          }`}
                        >
                          <FilePond
                            files={subImages}
                            allowReorder={true}
                            allowMultiple={true}
                            imagePreviewMaxHeight={70}
                            maxFiles={5}
                            maxFileSize="4MB"
                            name="subImages"
                            labelIdle={t("products.form.subImages.dropZone")}
                            acceptedFileTypes={ACCEPTED_IMAGE_FORMATS}
                            onupdatefiles={(files) => {
                              handleSubImagesUploadAndOrder(files);
                            }}
                            onreorderfiles={(files) => {
                              handleSubImagesUploadAndOrder(files);
                            }}
                          />
                          <div>
                            {errors.subImages &&
                              Array.isArray(errors.subImages) &&
                              errors.subImages.length > 0 && (
                                <div className="mt-2 text-danger">
                                  {errors?.subImages[0]?.message}
                                </div>
                              )}
                            {errors.subImages && (
                              <div className="mt-2 text-danger">
                                {typeof errors.subImages.message === "string" &&
                                  errors.subImages.message}
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
                      {t("products.form.informationCard")}
                    </a>
                  </li>
                  <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                    <a href="#descriptionCard">
                      {t("products.form.descriptionCard")}
                    </a>
                  </li>
                  <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                    <a href="#pricingCard">{t("products.form.pricingCard")}</a>
                  </li>
                  <li className="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent">
                    <a href="#imageCard">{t("products.form.imagesCard")}</a>
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
