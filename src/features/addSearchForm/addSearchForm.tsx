import styles from "./addsearchform.module.scss";
import { Input } from "antd";
import { useState } from "react";
import Lens from "../../shared/assets/layout/Lens.svg?react";

const AddSearchForm = (props: any) => {
  const [value, setValue] = useState("");
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.putArt(value);
        setValue("");
      }}
    >
      <Input
        size="large"
        prefix={<Lens />}
        placeholder="Search artwork"
        className={styles.form__input}
      />
    </form>
  );
};

export default AddSearchForm;
