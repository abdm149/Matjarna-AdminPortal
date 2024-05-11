export const mapToDto = (from: any) => {
  const to = {
    parentId: "",
    code: "",
    sortOrder: 0,
    active: true,
    mainImage: "",
    subImages: [],
    descriptions: [{}],
    prices: [{}],
  };
  to.code = from.code;
  to.sortOrder = from.sortOrder;
  to.parentId = from.parentId;
  to.active = from.active;
  to.mainImage = from.mainImage;
  to.subImages = from.subImages;
  to.descriptions = [
    {
      id: from.enId,
      title: from.englishTitle,
      description: from.englishDescription,
      language: "en",
    },
    {
      id: from.arId,
      title: from.arabicTitle,
      description: from.arabicDescription,
      language: "ar",
    },
  ];
  to.prices = [
    {
      id: from.dollarId,
      countryCode: "US",
      currencyCode: "USD",
      price: from.priceDollar,
      ...(from.discountDollar && {
        discount: {
          id: from.dollarDiscountId,
          startDate: from.startDateDollar,
          endDate: from.endDateDollar,
          value: from.discountDollar,
        },
      }),
    },
    {
      id: from.shekelId,
      countryCode: "PS",
      currencyCode: "ILS",
      price: from.priceShekel,
      ...(from.discountShekel && {
        discount: {
          id: from.shekelDiscountId,
          startDate: from.startDateShekel,
          endDate: from.endDateShekel,
          value: from.discountShekel,
        },
      }),
    },
  ];

  return to;
};

export const mapFromDto = (dto: any) => {
  const englishDescription = dto.descriptions.find(
    (desc: any) => desc.language === "en"
  );
  const arabicDescription = dto.descriptions.find(
    (desc: any) => desc.language === "ar"
  );

  const shekelPrice = dto.prices.find(
    (price: any) => price.currencyCode === "ILS"
  );
  const dollarPrice = dto.prices.find(
    (price: any) => price.currencyCode === "USD"
  );

  const productData = {
    ...dto,
    englishTitle: englishDescription?.title,
    englishDescription: englishDescription?.description,
    arabicTitle: arabicDescription?.title,
    arabicDescription: arabicDescription?.description,
    enId: englishDescription?.id,
    arId: arabicDescription?.id,
    startDateDollar: dollarPrice?.discount?.startDate,
    endDateDollar: dollarPrice?.discount?.endDate,
    startDateShekel: shekelPrice?.discount?.startDate,
    endDateShekel: shekelPrice?.discount?.endDate,
    priceDollar: dollarPrice?.price,
    priceShekel: shekelPrice?.price,
    discountDollar: dollarPrice?.discount?.value,
    discountShekel: shekelPrice?.discount?.value,
    parentId: dto.parentId,
    dollarId: dollarPrice?.id,
    shekelId: shekelPrice?.id,
    dollarDiscountId: dollarPrice?.discount?.id,
    shekelDiscountId: shekelPrice?.discount?.id,
  };

  return productData;
};
