interface PostAuthorProps {
  authorAvatar: string;
  authorName: string;
  authorJob: string;
}
export default function PostAuthor(props: PostAuthorProps) {
  const { authorAvatar, authorName, authorJob } = props;
  return (
    <>
      <div className="flex items-center mt-4">
        <img
          src={authorAvatar}
          className="w-14 h-14 mt-5 rounded-full object-cover"
          alt=""
        />
        <div className="ml-4">
          <h3>{authorName}</h3>
          <div className="text-white/60 text-sm mt-1">{authorJob}</div>
        </div>
      </div>
    </>
  );
}
