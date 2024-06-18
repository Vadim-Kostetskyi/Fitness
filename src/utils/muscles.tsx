import { useTranslation } from "react-i18next";

const Muscles = () => {
  const { t } = useTranslation();

  const biceps = t("muscles.biceps");
  const back = t("muscles.biceps");

  return [biceps, back];
};

export default Muscles;
