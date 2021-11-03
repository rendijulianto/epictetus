import Link from "next/link";
import InfoPost from "../InfoPost";

export default function CardPost({ thumbnail, ...CardPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img src={thumbnail} className="w-full rounded mb-4" alt="" />
        </a>
      </Link>
      <InfoPost {...CardPost} />
    </article>
  );
}
