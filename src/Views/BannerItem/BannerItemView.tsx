import { IBannerItem } from "../../Models/BannerItem";

import styles from "./bannerItem.module.scss";

type BannerItemProps = {
  bannerItem: IBannerItem;
};
export const BannerItemView = ({ bannerItem }: BannerItemProps) => {
  return (
    <div
      className={
        styles["banner--item"] +
        " me-3 d-flex flex-column justify-content-between"
      }
    >
      <img src={bannerItem.imgUrl} className="mb-4" alt={bannerItem.title} />
      <div className={" pe-2 ps-2 pb-2"}>
        <div className={styles["banner--item__title"] + " mb-2"}>
          {bannerItem.title}
        </div>
        <div className={styles["banner--item__result"]}>
          {bannerItem.searchResult}
        </div>
      </div>
    </div>
  );
};
