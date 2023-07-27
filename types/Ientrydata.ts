export interface PageItems {
  code: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
interface MetaData {
  page: number;
  limit: number;
  pages: number;
  total: number;
}
export interface Ientrydata {
  pages: {
    items: PageItems[];
    meta: MetaData;
  }[];
  pageParams: number[];
}
