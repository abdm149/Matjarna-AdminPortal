export const mapToDto = (from: any) => {
  const to = {
    code: "",
    sortOrder: 0,
    parentId: 0,
    active: true,
    image: "",
    numberOfChildren: 0,
    numberOfProducts: 0,
    descriptions: [
      {
        id: "",
        title: "",
        description: "",
        language: "",
      },
    ],
  };
  to.code = from.code;
  to.sortOrder = from.sortOrder;
  to.parentId = from.parentId;
  to.active = from.active;
  to.image = from.image;
  to.numberOfChildren = from.numberOfChildren;
  to.numberOfProducts = from.numberOfProducts;
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
  return to;
};

export const mapFromDto = (dto: any) => {
  const englishDescription = dto.descriptions.find(
    (desc: any) => desc.language === "en"
  );
  const arabicDescription = dto.descriptions.find(
    (desc: any) => desc.language === "ar"
  );

  const categoryData = {
    ...dto,
    englishTitle: englishDescription?.title,
    englishDescription: englishDescription?.description,
    arabicTitle: arabicDescription?.title,
    arabicDescription: arabicDescription?.description,
    enId: englishDescription?.id,
    arId: arabicDescription?.id,
    parentId: dto.parentId,
  };

  return categoryData;
};
