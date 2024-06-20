import { useTranslation } from "react-i18next";

const Muscles = () => {
  const { t } = useTranslation();

  const biceps = t("muscles.biceps");
  const back = t("muscles.back");
  const triceps = t("muscles.triceps");
  const chest = t("muscles.chest");

  return [biceps, back, triceps, chest];
};

export default Muscles;
