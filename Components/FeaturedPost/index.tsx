import InfoPost from "../InfoPost";

import Link from "next/link";
export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-6  lg:items-center items-start flex-wrap">
        <div className="lg:w-8/12 md:w-7/12 w-full px-4">
          <Link href="/detail">
            <a>
              <img
                src="featured-thumbnail.png"
                className="rounded-xl w-full"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="author1.png"
            authorName="Cindy Alexander"
            authorJob="Ui Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
