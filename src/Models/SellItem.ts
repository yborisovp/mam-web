export interface ISellItem {
  title: string;
  hint: string;
  price: string;
  body: string;
  postedAt: Date;
  imgUrl: string;
  attributes: string[];
}

/* 
export class SellItemDto implements ISellItem {
  title = "";
  price = "";
  body = "";
  imgUrl = "";

  postedAt = new Date();

  constructor(
    title: string,
    price: string,
    body: string,
    postDate: Date,
    imgUrl: string
  ) {
    this.title = title;
    this.price = price;
    this.body = body;
    this.postedAt = postDate;
    this.imgUrl = imgUrl;
  }
} */
