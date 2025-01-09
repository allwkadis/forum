import { useTranslation } from "react-i18next";
import { Counter } from "../../../entities/Counter";

const AboutPage = () => {
  const { t } = useTranslation("about-page");

  return (
    <div>
      {t("о нас")}
      <Counter />
    </div>
  );
};

export default AboutPage;
