import counterpart from "counterpart";

const MultiLang = () => {
  counterpart.registerTranslations("en", {
    title: "Title"
  });

  counterpart.setLocale("en");
};

export default MultiLang;
