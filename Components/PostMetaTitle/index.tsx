import Link from "next/link";
interface PostMetatitleProps {
  category: string;
  date: string;
  title: string;
  center: boolean;
}
export default function PostMetaTitle(props: PostMetatitleProps) {
  const { category, date, title, center } = props;
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h3 className={`text-2xl mt-4 ${center ? "text-center" : ""}`}>
        <Link href="/detail">
          <a>{title}</a>
        </Link>
      </h3>
    </>
  );
}
