import { useTranslation } from "react-i18next";
import { Input } from "../../../shared/ui/Input";
import { useState } from "react";

const MainPage = () => {
  const { t } = useTranslation("main-page");

  const [value, setValue] = useState("");

  const changeInputHandler = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t("главная")}
      <Input onChange={changeInputHandler} type="number"/>
    </div>
  );
};

export default MainPage;
