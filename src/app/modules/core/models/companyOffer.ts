export abstract class companyOffer 
{
  public Title: string;
  public TimeSpan: string; 
  public Uri: string; 
  public Img?: string; 
  public Disccount: number;
  public PriceWithinDisccount: number;
  public PriceWithoutDisccount?: number; 

  constructor(
    title: string,
    timeSpan: string,
    uri: string,
    img: string | undefined,
    disccount: number,
    priceWithinDisccount: number,
    priceWithoutDisccount?: number
  ) {
    this.Title = title;
    this.TimeSpan = timeSpan;
    this.Uri = uri;
    this.Img = img;
    this.Disccount = disccount;
    this.PriceWithinDisccount = priceWithinDisccount;
    this.PriceWithoutDisccount = priceWithoutDisccount;
  }
}