import React, { useEffect, useState } from "react";
import TomSelect from "../../base-components/TomSelect";
import { showFailToast } from "../../common/toasts";
import { useNavigate } from "react-router-dom";
import { getCategoryHierarchy } from "./api";
import { useTranslation } from "react-i18next";
import LoadingIcon from "../../base-components/LoadingIcon";

interface IProps {
  onChange: (value: any) => void;
  value: any;
  onError?: () => void;
}
const index: React.FC<IProps> = ({ onChange, value, onError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions]: any = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    fetchCategoryHierarchy();
  }, []);

  const fetchCategoryHierarchy = async () => {
    const response = await getCategoryHierarchy();
    if (response?.status < 300) {
      if (response.data.length > 0) {
        setOptions(generateSelectorMenu(addParentCodeAndGroup(response.data)));
        setIsLoading(false);
      } else {
        onError && onError();
      }
    } else {
      onError && onError();
    }
  };

  /* This method has been used to re-shape the categories hierarchy
         by adding a parent code field for each item stating for its direct parent
         and to group all items by parent. */
  function addParentCodeAndGroup(data: any, parentCode = null) {
    const groupedData: any = {};

    function traverse(items: any, parent: any) {
      for (const item of items) {
        // Only categories with no sub-categories are allowed to add products in.
        if (item.children.length === 0) {
          // If the item has no parent it will be grouped under 'Main' parent.
          const newItem = { ...item, parentCode: parent || "Main" };
          (groupedData[newItem.parentCode] =
            groupedData[newItem.parentCode] || []).push(newItem);
        } else {
          traverse(item.children, item.code);
        }
      }
    }

    traverse(data, parentCode);

    return groupedData;
  }

  // Generating the TomSelect options TSX
  function generateSelectorMenu(data: any) {
    const options = Object.keys(data).map((parentCode) => (
      <optgroup key={parentCode} label={parentCode}>
        {data[parentCode].map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.code}
          </option>
        ))}
      </optgroup>
    ));
    return options;
  }

  return (
    <>
      {isLoading ? (
        <div className="w-full flex justify-start items-center z-50 mt-2">
          <LoadingIcon
            icon="spinning-circles"
            className="w-6 h-6"
            color="#1a2c79"
          />
        </div>
      ) : (
        <TomSelect
          id="parentId"
          value={value}
          onChange={onChange}
          options={{
            placeholder: t("products.form.parent.label"),
            items: [value],
          }}
          className="w-full"
        >
          {options}
        </TomSelect>
      )}
    </>
  );
};

export default index;
