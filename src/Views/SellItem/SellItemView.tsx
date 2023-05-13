import { Fragment } from "react";
import { ISellItem } from "../../Models/SellItem";

import styles from "./sellItem.module.scss";

type SellItemProps = {
  sellItem: ISellItem;
};
export const SellItemView = ({ sellItem }: SellItemProps) => {
  return (
    <div className={styles["sell-item__item"] + "d-flex flex-column ms-2"}>
      <img src={sellItem.imgUrl} alt={sellItem.title} className="mb-2" />
      <div className="d-flex h-100 flex-column justify-content-between ms-2 me-2">
        <div>
          <div className="sell-item__item--title mb-1">{sellItem.title}</div>
          <div className="sell-item__item--hint">{sellItem.hint}</div>
        </div>
        <div>
          <div className="sell-item__item--attributes d-flex align-content-center align-items-center gap-1 mb-2">
            {sellItem.attributes.slice(0, 4).map((att, i) => {
              let a = (
                <div className="sell-item__item--attributes__separator"></div>
              );
              if (i === 3) {
                a = <></>;
              }
              return (
                <Fragment key={i}>
                  <div className="sell-item__item--attributes__item">{att}</div>
                  {a}
                </Fragment>
              );
            })}
          </div>
          <div className="sell-item__item--price mb-2">{sellItem.price}</div>
        </div>
      </div>
    </div>
  );
};
