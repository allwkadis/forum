import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about-page");

  useEffect(() => {
    throw new Error("abasdffd");
  }, []);

  return <div>{t("о нас")}</div>;
};

export default AboutPage;
