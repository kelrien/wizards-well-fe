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

export type SocialMediaItem = {};

// "title": "Test",
// "content": "# Hallo Welt\nwww.heise.de\n\n![5786664.png](https://strapi.beedgen.net/uploads/5786664_1e512b5d0b.png)",
// "type": "Blog",
// "createdAt": "2023-04-24T10:33:24.994Z",
// "updatedAt": "2023-07-20T16:11:33.940Z",
// "publishedAt": "2023-04-24T10:33:43.763Z"
