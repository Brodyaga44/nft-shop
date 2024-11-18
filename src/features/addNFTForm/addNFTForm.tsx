import { Button, Input, Select, Space } from "antd";
import styles from "./addnftform.module.scss";
import { Controller, useForm } from "react-hook-form";
import { INFTPost } from "../../shared/config/interfaces/INFTPost.ts";
import useCreateNFT from "./module/useCreateNFT.ts";
import { DragEvent } from "react";

const AddNftForm = ({ handleOk }: { handleOk: () => void }) => {
  const { control, handleSubmit, watch, getValues } = useForm<INFTPost>();
  const { createNFT, newNFT } = useCreateNFT();

  // Define the event handlers
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log("over");
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: DragEvent<HTMLInputElement>,
    onChange: (val: File) => void,
  ) => {
    event.preventDefault();

    const droppedFiles = Array.from(event.dataTransfer.files);

    onChange(droppedFiles[0]);
  };

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
        <img
          alt={"image"}
          src={URL.createObjectURL(new Blob([getValues("image")]))}
        />
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
          <div className={styles.addnft__dnd}>
            Choose your file
            <input
              className={styles.addnft__dndInput}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, onChange)}
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
          </div>
        )}
      />

      <Space wrap>
        <Controller
          name="cat"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue="1"
              options={[
                { value: "1", label: "Животные" },
                { value: "2", label: "Гаччи" },
                { value: "3", label: "Роботы" },
                { value: "4", label: "Люди" },
              ]}
              {...field}
              className={styles.addnft__catSelector}
            />
          )}
        />
        <Controller
          name="typePrice"
          control={control}
          render={({ field }) => (
            <Select
              defaultValue="1"
              options={[
                { value: "1", label: "Open Binding" },
                { value: "2", label: "Fixed Price" },
              ]}
              {...field}
              className={styles.addnft__catSelector}
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
