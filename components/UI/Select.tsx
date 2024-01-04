"use client";
import { options } from "@/lib/constants";
import React from "react";
import { Image } from "react-bootstrap";
import Select, { StylesConfig } from "react-select";
import styles from "./Select.module.css";

const CustomSelect: React.FC = () => {
  const customStyles: StylesConfig = {
    option: (provided) => ({
      ...provided,
      padding: "0.5rem 1rem",
      background: "none",
      color: "white",
      maxWidth: "auto",
      cursor: "pointer",
      textAlign: "center",

      ":active": {
        background: "none",
      },
    }),
    input: (provided) => ({
      ...provided,
      background: "none",
    }),
    control: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      border: "0.1rem solid white",
      color: "white",
      background: "none",
      maxHeight: "auto",
      minWidth: "10rem",
      position: "relative",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",
      textAlign: "center",
      paddingInline: "0.5rem",
    }),
    menu: (provided) => ({
      ...provided,
      color: "gray",
      backgroundColor: "transparent",
      border: "none",
      maxWidth: "100%",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
      textAlign: "center",
      paddingInline: ".5rem",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provider) => ({
      ...provider,
      color: "white !important",
    }),
  };
  return (
    <div className="position-relative">
      <Select options={options} styles={customStyles} />
      <span className={`${styles.lang_icon} bi bi-translate`} />
    </div>
  );
};

export default CustomSelect;
