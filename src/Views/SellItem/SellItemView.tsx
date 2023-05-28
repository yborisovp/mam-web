import { Fragment } from "react";
import { SellItemModel } from "../../Models/SellItem/SellItem";

import styles from "./sellItem.module.scss";

type SellItemProps = {
  sellItem: SellItemModel;
};
export const SellItemView = ({ sellItem }: SellItemProps) => {
  return (
    <div className={styles["sell-item__item"] + " d-flex flex-column ms-2"}>
      <img src={""} alt={sellItem.title} className="mb-2" />
      <div className="d-flex h-100 flex-column justify-content-between ms-2 me-2">
        <div>
          <div className={styles["sell-item__item--title"] + " mb-1"}>
            {sellItem.title}
          </div>
          <div className={styles["sell-item__item--hint"]}>{sellItem.description}</div>
        </div>
        <div>
          <div className="sell-item__item--attributes d-flex align-content-center align-items-center gap-1 mb-2">
            {sellItem.attributes.slice(0, 4).map((att, i) => {
              let a = (
                <div
                  className={styles["sell-item__item--attributes__separator"]}
                ></div>
              );
              if (i === 3) {
                a = <></>;
              }
              return (
                <Fragment key={i}>
                  <div className={styles["sell-item__item--attributes__item"]}>
                    {""}
                  </div>
                  {a}
                </Fragment>
              );
            })}
          </div>
          <div className={styles["sell-item__item--price"] + " mb-2"}>
            {sellItem.price}
          </div>
        </div>
      </div>
    </div>
  );
};
