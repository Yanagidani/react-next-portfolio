import { notFound } from "next/navigation";
import { getCategoryDetail, getBlogList }from "@/app/_libs/microcms";
import BlogList from "@/app/_components/BlogList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { BLOG_LIST_LIMIT } from "@/app//_constants";


type Props ={
    params:{
        id: string;
        current: string;
    };
};

export default async function Page({ params }: Props) {
const current = parseInt(params.current, 10);

    const { contents: blog, totalCount } =await getBlogList({

        limit: BLOG_LIST_LIMIT,
        offset: BLOG_LIST_LIMIT*(current -1),
    });

    return (
        <>
            <SearchField />
            <BlogList blog={blog} />
            <Pagination totalCount={ totalCount } current={current} />
        </>
    );
}