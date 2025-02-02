import { createClient } from 'microcms-js-sdk';
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Created ={
    name: string;
    position: string;
    profile: string;
    image:MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type Blog ={
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is reequired.");
}  

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required.");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getCreatedList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<Created>({
            endpoint: "created",
            queries,
        });
    return listData;
};

export const getBlogList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Blog>({
            endpoint: 'blog',
            queries,
        });
        console.log('message', listData)
    return listData;
};

export const getBlogDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Blog>({
        endpoint: "blog",
        contentId,
        queries,
        customRequestInit: {
            next: {
              revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    console.log("detailData", detailData)
    return detailData;
};

export const getCategoryDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "category",
        contentId,
        queries,
    });
    return detailData;
};

export const getAllBlogList = async () => {
    const listData = await client.getAllContents<Blog>({
      endpoint: 'blog',
    });
  
    return listData;
};
  
export const getAllCategoryList = async () => {
    const listData = await client.getAllContents<Category>({
      endpoint: 'category',
    });
  
    return listData;
  };