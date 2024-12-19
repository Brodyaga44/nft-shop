import { Button, Input, Select, Space } from 'antd';
import styles from './addnftform.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { INFTPost } from '../../shared/config/interfaces/INFTPost.ts';
import useCreateNFT from './model/useCreateNFT.ts';
import { DragEvent, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { clsx } from 'clsx';

const AddNFTForm = ({ onClose }: { onClose: () => void }) => {
  const { control, handleSubmit, watch, getValues, reset } = useForm<INFTPost>({
    defaultValues: {
      cat: '1',
      typePrice: '1',
    },
  });
  const { createNFT, newNFT } = useCreateNFT();
  const [isExist, setIsExist] = useState(false);
  const [isHover, setIsHover] = useState(false);
  // const imageRef = useRef<HTMLInputElement | null>(null);
  const blob = URL.createObjectURL(new Blob([getValues('image')]));

  // useEffect(() => {
  //   // event.target.value = '';
  //   // if (imageRef.current?.value === event.target.value) {
  //   //   console.log('same file');
  //   // }
  //   imageRef.current?.value === '';
  // }, [imageRef]);
  // Define the event handlers
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('over');
    setIsHover(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHover(false);
  };

  const handleDrop = (
    event: DragEvent<HTMLInputElement>,
    onChange: (val: File) => void,
  ) => {
    event.preventDefault();
    // event.target.value = '';

    console.log(event.dataTransfer.files);
    const droppedFiles = Array.from(event.dataTransfer.files);

    onChange(droppedFiles[0]);
    setIsExist(true);
    return event;
  };
  // const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.target.value = '';
  // };

  console.log(newNFT);

  const onSubmit = async (data: INFTPost) => {
    console.log(data.image);
    console.log('onSubmit');

    try {
      await createNFT(data);
      console.log('Try');
      onClose();
      clear();
    } catch (e) {
      console.log('Catch');
      clear();
    }
    console.log(data);
    setIsExist(false);
    setIsHover(false);
  };
  const clear = () => {
    reset({
      name: undefined,
      autor: undefined,
      image: undefined,
      cat: undefined,
      typePrice: undefined,
      price: 0,
    });
  };

  const resetPhoto = () => {
    // reset({ image: undefined });
    URL.revokeObjectURL(blob);
    // event.target.value = '';
    console.log(blob);
    setIsExist(false);
    setIsHover(false);
  };

  watch('image');
  console.log(' photo exist? ' + isExist);

  return (
    <form className={styles.addnft__form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            size="middle"
            showCount
            maxLength={20}
            placeholder={'title'}
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
        rules={{
          required: true,
        }}
        render={({ field: { value, onChange } }) => (
          <div>
            <div
              className={clsx(styles.addnft__dnd, {
                [styles.addnft__hideDnd]: isExist,
                [styles.addnft__hoverDnd]: isHover,
              })}
            >
              Choose your file
              <input
                className={styles.addnft__dndInput} //yo
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={e => handleDrop(e, onChange)}
                type="file"
                id="image-input"
                accept="image/png, image/jpeg"
                // ref={imageRef}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    const currImage = event.target.files[0];
                    event.target.value = '';
                    // сюда не заходит

                    console.log('hui');
                    console.log(currImage);
                    // onChange(event?.target?.files?.[0]);
                    onChange(currImage);
                    setIsExist(true);
                  }
                }}
              />
            </div>
            {value && (
              <div className={styles.addnft__previewContainer}>
                <div className={styles.addnft__photoPreview}>
                  <div
                    className={styles.addnft__close}
                    onClick={() => {
                      onChange();
                      resetPhoto();
                    }}
                  >
                    <CloseOutlined />
                  </div>
                  <img
                    alt={'image'}
                    src={URL.createObjectURL(new Blob([value]))}
                    className={styles.addnft__photo}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      />

      <Space wrap>
        <Controller
          name="cat"
          control={control}
          render={({ field }) => (
            <Select
              options={[
                { value: '1', label: 'Животные' },
                { value: '2', label: 'Гаччи' },
                { value: '3', label: 'Роботы' },
                { value: '4', label: 'Люди' },
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
              options={[
                { value: '1', label: 'Open Binding' },
                { value: '2', label: 'Fixed Price' },
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
            placeholder="price"
            required
            {...field}
            className={styles.addnft__input}
          />
        )}
      />

      <Button type={'primary'} htmlType={'submit'}>
        Создать
      </Button>
    </form>
  );
};

export default AddNFTForm;
