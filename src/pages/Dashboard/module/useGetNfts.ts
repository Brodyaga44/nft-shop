import { useEffect, useState } from "react";
import { INFTB } from "../../../shared/config/interfaces/INFTB.ts";
import { useParams } from "react-router";
import { AxiosResponse } from "axios";
import $api from "../../../shared/api/api.ts";
import { IGetPag } from "../../../shared/config/interfaces/IGetPag.ts";
import { IPag } from "../../../shared/config/interfaces/IPag.ts";

const useGetNfts = () => {
  const [nfts, setNfts] = useState<INFTB[]>([]);
  const [pags, setPag] = useState<IPag>({
    current_page: 1,
    total_items: 0,
    total_pages: 0,
    previous: null,
    next: null,
  });
  const { id } = useParams();

  const changePage = (page: number) =>
    setPag((prevState) => ({ ...prevState, current_page: page }));
  const getNFTS = async () => {
    const res: AxiosResponse<IGetPag<INFTB[]>> = await $api.get(`/nfts/`, {
      params: {
        nft: id,
        page: pags.current_page,
      },
    });
    if (res.data) {
      setNfts(res.data.results);
      setPag((prevState) => ({
        ...prevState,
        total_pages: res.data.total_pages,
        total_items: res.data.total_items,
        current_page: res.data.current_page,
        previous: res.data.previous,
        next: res.data.next,
      }));
    }
  };
  useEffect(() => {
    getNFTS();
  }, [pags.current_page]);

  return { nfts, pags, changePage };
};

export default useGetNfts;
