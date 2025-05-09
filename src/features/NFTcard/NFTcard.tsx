import { NFTprops } from "./interfaces/NFTprops.ts";
import CardGrid from "../../entity/CardGrid/ui/CardGrid.tsx";
import CardList from "../../entity/CardList/ui/CardList.tsx";

const NFTcard = ({ nft, sort }: NFTprops) => {
  if (sort === "grid") {
    return <CardGrid nft={nft} />;
  }
  return <CardList nft={nft} />;
};

export default NFTcard;
