import { useEffect, useState } from "react";
import { INFTPost } from "../../../shared/config/interfaces/INFTPost.ts";
import { useParams } from "react-router";
import $api from "../../../shared/api/api.ts";
import { AxiosResponse } from "axios";

const useGetNftSelector = () => {
  const [selector, setSelector] = useState<INFTPost[]>([]);
  const { id } = useParams();
  const getData = async () => {
    const res: AxiosResponse<INFTPost[]> = await $api.get(`/nfts/`, {
      params: {
        cat: id,
        pType: id,
      },
    });
    setSelector(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return { selector };
};

//тут надо запрос на (словарь?), жду антоху

export default useGetNftSelector;
