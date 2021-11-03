import Container from "../Components/Container";
import Layout from "../Components/Layout";
import PostAuthor from "../Components/PostAuthor";
import PostMetaTitle from "../Components/PostMetaTitle";
import Head from "next/head";
export default function detail() {
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-6/12 mx-auto flex items-center flex-col">
          <PostMetaTitle
            category="UI Design"
            date="July 17, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            center={true}
          />
          <PostAuthor
            authorAvatar="author2.png"
            authorJob="Ui Designer"
            authorName="Rendi Julianto"
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img
            src="featured-thumbnail.png"
            className="w-full rounded-lg"
            alt=""
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto">
          <p className="text-2xl mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            cupiditate unde id nesciunt labore ullam earum dicta, corporis, esse
            ducimus voluptatibus. Provident expedita ad assumenda impedit beatae
            deleniti quo dignissimos.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quos necessitatibus distinctio, cupiditate ipsum quidem! Soluta id
            voluptate aspernatur rerum nemo fuga? Nisi voluptatem nemo ipsa
            maiores aliquid sapiente recusandae at excepturi, fugiat explicabo
            ut tempore tempora necessitatibus culpa vel iste perspiciatis. Sequi
            voluptate repellat soluta, qui omnis consequatur libero corrupti
            eius iste labore numquam? Reprehenderit temporibus atque porro,
            nihil eius culpa voluptates dolor labore hic. Eaque sequi aliquid
            repellendus. Vero, ipsa veritatis architecto voluptas recusandae,
            qui aliquam reiciendis possimus quibusdam repudiandae quasi
            laboriosam explicabo velit totam nemo sit libero rem sunt? Suscipit
            facilis quibusdam repellat non ad tenetur, repudiandae sed aperiam,
            incidunt quis atque corporis sit itaque quaerat ipsa veritatis a hic
            ut possimus deserunt fugiat similique? Ad, dolores aperiam
            repudiandae aspernatur, at omnis obcaecati facere quae excepturi qui
            fugiat, illum eos saepe officia voluptate esse! Error quis incidunt
            voluptatem fuga aliquid architecto sequi, ut, tempora excepturi
            fugit exercitationem repudiandae nobis ad? Tempore tempora
            perspiciatis reiciendis facere ea! Quaerat assumenda explicabo
            repellat rem laboriosam magnam, molestiae sunt delectus quam
            obcaecati consectetur minus aliquam dolorem voluptatibus minima
            eaque qui veniam culpa unde? Ea maiores atque voluptate sapiente
            perferendis a nemo voluptates asperiores, reprehenderit possimus,
            repellat facilis et, consequuntur eius ex?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ad. Ea provident assumenda nihil quis, omnis quod non perferendis
            impedit a eligendi. Harum mollitia consectetur adipisci quidem
            dolorem similique tenetur optio laudantium placeat fugit maxime in,
            repellendus inventore rerum quo temporibus blanditiis, dicta
            accusantium, delectus a? Quod commodi magni quam corporis ipsam
            dolores! In, modi, accusamus obcaecati officia voluptas aspernatur
            at dolorum facere iusto ab harum dolore nam impedit cupiditate
            soluta ducimus nemo. Quibusdam hic a illo eos voluptates fugit ad
            enim ab! Illum quas expedita quidem, eos sint quaerat itaque
            reprehenderit ut numquam architecto esse illo molestiae excepturi
            obcaecati!
          </p>
        </div>
      </Container>
    </Layout>
  );
}
