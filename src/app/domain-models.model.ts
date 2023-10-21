export type StrapiResponse = {
  data: StrapiItem[];
  meta: {
    pagination: {
      page: Number;
      pageSize: Number;
      pageCount: Number;
      total: Number;
    };
  };
};

export type StrapiItem = {
  id: Number;
  type: string;
  attributes: {
    title: string;
    content: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    tileImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export type BlogItem = {
  id: Number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  imageUrl: string;
};

export type ImprintItem = {
  id: Number
  text: string;
}

export type SocialMediaItem = {
  id: Number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  imageUrl: string;
};
