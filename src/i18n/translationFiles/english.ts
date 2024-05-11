const English = {
  pages: {
    categories: "Categories",
    products: "Products",
    users: "Users",
  },
  login: {
    matjarna: "Matjarna",
    welcomeMessage: "Welcome to Matjarna App <br /> sign in to your account.",
    form: {
      signIn: "Sign in",
      password: "Password",
      email: "Email",
      login: "Login",
      invalidCredentials: "Invalid credentials",
      somethingWentWrong: "Something went wrong",
      register: "Register",
    },
  },
  users: {
    errors: {
      invalidEmail: "Invalid email",
      password:
        "Password must contain at least one letter, one number, and be at least 6 characters long",
      confirmPasswordMatch: "Passwords must match",
    },
    view: {
      email: "Email",
      firstName: "First Name",
      lastName: "Last Name",
      addNew: "Add New User",
      searchPlaceholder: "Search by email or name...",
      deactivateMessage: "Deactivate this user?",
      deactivateWarning: "This user will no longer have access to his account.",
      deactivateError: "Could not deactivate user!",
      notifications: {
        activateSucceeded: "User activated successfully!",
        deactivateSucceeded: "User deactivated successfully!",
        activateFailed: "User couldn't be activated!",
        deactivateFailed: "User couldn't be deactivated!",
      },
    },
    form: {
      create: "Create User",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      save: "Save",
      userInformationCard: "User Information",
      notifications: {
        addFailed: "Adding user failed!",
        addSucceeded: "User added successfully!",
        fetchingFailed: "Loading user failed!",
        duplicatedUser: "User already exists!",
      },
    },
  },
  categories: {
    form: {
      create: "Create Category",
      informationCard: "Category Information",
      descriptionCard: "Category Description",
      imageCard: "Category Image",
      code: {
        label: "Code",
        description:
          "Category code is a distinct identifier assigned to each category, ensuring uniqueness across the system.",
      },
      sortOrder: {
        label: "Sort Order",
        description:
          "Sort order assigns a numerical value to each category, determining its position while rendering.",
      },
      parent: {
        label: "Parent Category ID",
        description:
          "Parent Category shows if the category you're creating has a parent category or not.",
      },
      image: {
        label: "Image",
        description:
          "The image format is .jpg .jpeg .png with maximum size of 4MB.",
      },
      status: {
        label: "Category Status",
        description:
          "Category status indicates the availability of a category for end users.",
      },
      notifications: {
        addFailed: "Adding category failed!",
        addSucceeded: "Category added successfully!",
        noImage: "Please upload category image!",
        codeNotUnique: "Category code must be unique",
        fetchingFailed: "Loading category failed!",
        updateSucceeded: "Category updated fuccessfully!",
        updateFailed: "Updating category failed!",
      },
      title: {
        label: "Title",
        description: "Name your category",
      },
      description: {
        label: "Description",
        description: "Optional, describe your category with a word or more",
      },
    },
    view: {
      addNew: "Add New Category",
      addNewSubCategory: "Add New Sub Category",
      code: "Code",
      name: "Name",
      order: "Order",
      numberOfProducts: "# Products",
      actions: "Actions",
      createSub: "Create Sub Category",
      addProduct: "Add Product",
      deleteMessage: "Delete this category?",
      searchPlaceholder: "Search for code or name...",
      deleteError: "Failed to delete category!",
      deleteParentError:
        "Category can't be deleted because it has sub categories or products.",
      deleteCategory: "Category deleted successfully!",
    },
  },
  products: {
    form: {
      create: "Add Product",
      informationCard: "Product Information",
      descriptionCard: "Product Description",
      pricingCard: "Product Pricing",
      imagesCard: "Product Images",
      code: {
        label: "Code",
        description:
          "Product code is a distinct identifier assigned to each product, ensuring uniqueness across the system.",
      },
      sortOrder: {
        label: "Sort Order",
        description:
          "Sort order assigns a numerical value to each product, determining its position while rendering.",
      },
      parent: {
        label: "Parent Category",
        description:
          "This field indicates to the parent category of the product you're creating.",
      },
      mainImage: {
        label: "Main Image",
        description:
          "The main image will be displayed first when browsing the product, image format is .jpg .jpeg .png with maximum size of 4MB.",
      },
      subImages: {
        label: "Product Images",
        description:
          "Upload up to 5 images to display when browsing the product, images format are .jpg .jpeg .png with maximum size of 4MB for each.",
        dropZone:
          '<span class="filepond--label-action">Upload files</span> or drag and drop',
      },
      status: {
        label: "Product Status",
        description:
          "Product status indicates the availability of a product for end users.",
      },
      notifications: {
        addFailed: "Adding product failed!",
        addSucceeded: "Product added successfully!",
        noImage: "Please upload product image!",
        codeNotUnique: "Product code must be unique",
        noCategories: "Please add a category before adding a product",
        fetchingFailed: "Loading Product Failed!",
        updateSucceeded: "Product Updated Successfully!",
        updateFailed: "Updating Product Failed!",
      },
      title: {
        label: "Title",
        description: "Name your product",
      },
      description: {
        label: "Description",
        description: "Optional, describe your product with a word or more",
      },
      priceDollar: {
        label: "Product price (USD)",
        description:
          "USD product price will be shown for users based in the USA or as a default price. <br /> Add product discounted price and discount duration.",
      },
      priceShekel: {
        label: "Product price (ILS)",
        description:
          "ILS product price will be shown for users based in Palestine. <br /> Add product discounted price and discount duration.",
      },
      discounted: "Discounted",
      discountedPrice: "Discount price",
    },
    view: {
      addNew: "Add New Product",
      code: "Code",
      name: "Name",
      palestinePrice: "PS Price",
      globalPrice: "Global Price",
      order: "Order",
      actions: "Actions",
      deleteMessage: "Delete this product?",
      searchPlaceholder: "Search for code or name...",
      deleteError: "Failed to delete product!",
      deleteProduct: "Product deleted successfully!",
    },
  },
  global: {
    saveAndCreateNew: "Save and Create New",
    save: "Save",
    cancel: "Cancel",
    requiredIndicator: "Required",
    uploadFile: "Upload a file",
    dragAndDrop: "or drag and drop",
    typeError: "File type not supported",
    fileFailed: "File failed to upload",
    removeImageTippy: "Remove this image?",
    requiredImage: "Image is required",
    fileSize: "File size must not exceed 4 MB",
    requiredField: "This field is required",
    numberField: "This field must be a number",
    positiveField: "This field must be zero or positive number",
    edit: "Edit",
    children: "Children",
    delete: "Delete",
    active: "Active",
    inactive: "Inactive",
    discounted: "Discounted",
    true: "True",
    false: "False",
    deleteWarning: "You will not be able to recover it",
    any: "Any",
    go: "Go",
    reset: "Reset",
    englishTitle: "English Title",
    englishDescription: "English Description",
    arabicTitle: "Arabic Title",
    arabicDescription: "Arabic Description",
    descriptionError: "Description is too long",
    filesUploadError: "Some files failed to upload",
    actions: "Actions",
    activate: "Activate",
    deactivate: "Deactivate",
  },
  errorPage: {
    oops: "Oops. This page has gone missing.",
    mistyped: "You may have mistyped the address or the page may have moved.",
    backToHome: "Back to Home",
  },
};

export default English;
