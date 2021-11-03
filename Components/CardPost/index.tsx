import Link from "next/link";
import InfoPost from "../InfoPost";
interface cardProps {
  thumbnail: string;
  category: string;
  title: string;
  date: string;
  shortDescription: string;
  authorAvatar: string;
  authorName: string;
  authorJob: string;
}
export default function CardPost(props: cardProps) {
  const {
    thumbnail,
    category,
    title,
    date,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob,
  } = props;
  return (
    <article>
      <Link href="/detail">
        <a>
          <img src={thumbnail} className="w-full rounded mb-4" alt="" />
        </a>
      </Link>
      <InfoPost
        title={title}
        date={date}
        shortDescription={shortDescription}
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
        category={category}
      />
    </article>
  );
}
