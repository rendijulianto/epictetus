import PostAuthor from "../PostAuthor";
import PostMetaTitle from "../PostMetaTitle";
interface InfoPostProps {
  category: string;
  title: string;
  date: string;
  shortDescription: string;
  authorAvatar: string;
  authorName: string;
  authorJob: string;
}
export default function InfoPost(props: InfoPostProps) {
  const {
    category,
    title,
    date,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob,
  } = props;
  return (
    <>
      <PostMetaTitle
        category={category}
        date={date}
        title={title}
        center={false}
      />
      <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}
