import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props={
    children: React.ReactNode;
};

export default function BlogLayout({ children }: Props) {
    return (
        <>
            <Hero title="Blog" sub="ブログ" />
            <Sheet>{children}</Sheet>
        </>
    );
}