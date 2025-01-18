import { getCategoryDetail, getBlogList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import BlogList from "@/app/_components/BlogList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: blog, totalCount } = await getBlogList({
        filters: `category[equals]${category.id}`,
    })

    return (
        <>
            <p>
                <Category category={category} /> の一覧
            </p>
            <BlogList blog={blog} />
            <Pagination
                totalCount={totalCount}
                basePath={`/blog/category/${category.id}`}
            />
        </>
    );
}