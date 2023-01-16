import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/yandmch/DEX-price-handling" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title=" Dex"
        subTitle="Dex Github"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
