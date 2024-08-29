import { Button, Input, Select, Space } from "antd";
import styles from "./addnftform.module.scss";
import { Controller, useForm } from "react-hook-form";
import { INFTPost } from "../../shared/config/interfaces/INFTPost.ts";
import useCreateNFT from "./module/useCreateNFT.ts";

const AddNftForm = ({ handleOk }: { handleOk: () => void }) => {
  const { control, handleSubmit, watch, getValues } = useForm<INFTPost>();
  const { createNFT, newNFT } = useCreateNFT();

  console.log(newNFT);

  const onSubmit = async (data: INFTPost) => {
    console.log(data.image);
    handleOk();
    await createNFT(data);
  };

  watch("image");

  return (
    <form className={styles.addnft__form} onSubmit={handleSubmit(onSubmit)}>
      {getValues("image") && (
        <img src={URL.createObjectURL(new Blob([getValues("image")]))} />
      )}
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            size="middle"
            showCount
            maxLength={20}
            placeholder={"title"}
            required
            {...field}
            className={styles.addnft__input}
          />
        )}
      />
      <Controller
        name="autor"
        control={control}
        render={({ field }) => (
          <Input
            size="middle"
            showCount
            maxLength={20}
            placeholder="author"
            required
            {...field}
            className={styles.addnft__input}
          />
        )}
      />
      <Controller
        name="image"
        control={control}
        render={({ field: { onChange } }) => (
          <input
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            required
            onChange={(event) => {
              if (event.target.files && event.target.files[0]) {
                onChange(event.target.files[0]);
              }
            }}
          />
        )}
      />

      <Space wrap>
        <Controller
          name="cat"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue="1"
              style={{ width: 220 }}
              options={[
                { value: "1", label: "Животные" },
                { value: "2", label: "Гаччи" },
                { value: "3", label: "Роботы" },
                { value: "4", label: "Люди" },
              ]}
              {...field}
              className={styles.addnft__input}
            />
          )}
        />
        <Controller
          name="typePrice"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue="1"
              style={{ width: 220 }}
              options={[
                { value: "1", label: "Open Binding" },
                { value: "2", label: "Fixed Price" },
              ]}
              {...field}
              className={styles.addnft__input}
            />
          )}
        />
      </Space>
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <Input
            type="number"
            size="middle"
            showCount
            maxLength={8}
            min={0}
            max={8}
            placeholder="price"
            required
            {...field}
            className={styles.addnft__input}
          />
        )}
      />

      <Button type={"primary"} htmlType={"submit"}>
        Создать
      </Button>
    </form>
  );
};

export default AddNftForm;
