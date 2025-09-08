import { Flex, Image, Select } from "antd";
import { useTranslation } from "react-i18next";

import en from "/us.svg";
import pt from "/br.svg";
import es from "/es.svg";
import it from "/it.svg";
import fr from "/fr.svg";
import de from "/de.svg";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
];

export function LangSelectorLayout() {
  const { i18n } = useTranslation();

  const icons = { en, pt, es, fr, de, it };

  const onChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <Select
      className="w-40"
      defaultValue="en"
      onChange={onChangeLanguage}
      value={i18n.language.split("-")[0]}
    >
      {languages.map((lang) => (
        <Select.Option key={lang.code} value={lang.code}>
          <Flex gap={5} align="center" justify="flex-start">
            <Image
              preview={false}
              width={20}
              src={icons[lang.code as keyof typeof icons]}
            />{" "}
            {lang.label}
          </Flex>
        </Select.Option>
      ))}
    </Select>
  );
}
