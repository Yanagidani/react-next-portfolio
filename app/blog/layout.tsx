import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props={
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Hero  title="blog" sub="ブログ" />
            <Sheet>{children}</Sheet>
        </>
    );
}