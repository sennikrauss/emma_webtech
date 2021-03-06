export interface Article {
  id:number;
  articleDescription:string;
  producerName:string;
  unit:string;
  items:number;
  category:number;
  location:number;
  purchaseDate:string;
  expirationDate:string;
  purchasingPrice_net:number;
}

export interface Category{
  id:number;
  category:string;
  description:string;
  picUrl:string;
}

export interface StorageLocation{
  id:number;
  location:string;
  description:string;
  picUrl:string;
}
