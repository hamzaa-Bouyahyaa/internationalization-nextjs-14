import { useTranslations } from "next-intl";
import React from "react";

const Blog = () => {
  const t = useTranslations("Blog");
  return <div>{t("title")}</div>;
};

export default Blog;
