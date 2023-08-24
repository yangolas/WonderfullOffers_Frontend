import { companyOffer } from "./companyOffer";


export class amazonOffer extends companyOffer {
    public Coupon?: number;
  
    constructor(
      title: string,
      timeSpan: string,
      uri: string,
      img: string | undefined,
      discount: number,
      priceWithinDiscount: number,
      priceWithoutDiscount?: number,
      coupon?:number ) 
    {
      super(title, timeSpan, uri, img, discount, priceWithinDiscount, priceWithoutDiscount);
      this.Coupon = coupon;
    }
  }