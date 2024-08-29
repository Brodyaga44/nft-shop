import styles from "./topfilters.module.scss";
import { Select } from "antd";
import ArrowFilters from "../../shared/assets/arrow.svg?react";

const TopFilters = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.filters__filters}>
      <Select
        defaultValue="recent"
        style={{ width: 78, height: 37 }}
        onChange={handleChange}
        options={[
          { value: "recent", label: "Recent" }, // файлик конфига впихнуть надо
          { value: "earlier", label: "Earlier" },
        ]}
        suffixIcon={<ArrowFilters className={styles.filters__arrow} />}
      />
      <Select
        defaultValue="lowtohigh"
        style={{ width: 101, height: 37 }}
        onChange={handleChange}
        options={[
          { value: "lowtohigh", label: "Low to high" },
          { value: "hightolow", label: "High to low" },
        ]}
        suffixIcon={<ArrowFilters className={styles.filters__arrow} />}
      />
      <Select
        defaultValue="all"
        style={{ width: "auto", height: 37 }}
        onChange={handleChange}
        options={[
          { value: "all", label: "All" },
          { value: "none", label: "None" },
        ]}
        suffixIcon={<ArrowFilters className={styles.filters__arrow} />}
      />
    </div>
  );
};

export default TopFilters;
