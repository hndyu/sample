<template>
  <main id="main">
    <section id="concept" class="section jumbotron-fluid">
      <InnerSection :textColor="'text-white'">
        <h2 class="display-4 my-5">Concept</h2>
        <p
          class="lead"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolorum, aspernatur, suscipit placeat deleniti vel debitis ullam asperiores molestias, repellendus nihil officiis. Molestiae illum, architecto accusamus, sint iusto ratione distinctio dicta tenetur quas vero nemo. Quae iure non quisquam voluptatem, in illum qui ullam vitae deserunt laborum. Eligendi, maiores officia?</p>
        <p
          class="my-5"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil cum nam tenetur nemo illum quibusdam harum cupiditate deserunt, sint perspiciatis odio consectetur, explicabo perferendis minus at ad. Reprehenderit, quas sit cum ex minima, et natus enim laborum at, reiciendis officia rem hic voluptate unde modi facilis libero adipisci quae mollitia necessitatibus officiis a? Labore quis ea odio magni vero atque optio fuga explicabo eaque, voluptatem repudiandae dolor, sequi ex eligendi illum repellendus, tenetur soluta assumenda eos harum quisquam mollitia maxime facilis? Magnam odit ducimus, magni sed aspernatur est incidunt necessitatibus nulla a placeat laudantium molestiae atque fugit soluta quas. Perferendis.</p>
      </InnerSection>
    </section>
    <section id="news" class="section">
      <InnerSection>
        <h2 class="my-5">News</h2>
        <div class="list-group text-left flex-row flex-wrap">
          <a
            href="https://www.gb-walker.jp/kanto/shop/redslope/?g=official"
            class="list-group-item list-group-item-action"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">★1月2日(火)の出勤情報★</h3>
              <small>2018年01月02日 22:39</small>
            </div>
            <p class="mb-1">
              ★ゆいちゃん 17～21:30
              ★ゆきちゃん 17～23
              ★つきのちゃん 17～24
              ★ましろちゃん 19～30
              ★ありすちゃん...
            </p>
          </a>
          <a
            href="https://www.gb-walker.jp/kanto/shop/redslope/?g=official"
            class="list-group-item list-group-item-action"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">★連休 ｷﾀ━━━(ﾟ∀ﾟ)━━━!!!★</h3>
              <small>2017年08月11日 02:22</small>
            </div>
            <p class="mb-1">
              待ちに待った連休！！！
              今飲まないでいつ飲むの！？って感じですよね☆
              優しくてカワイイ女の子と、超絶...
            </p>
          </a>
          <a
            href="https://www.gb-walker.jp/kanto/shop/redslope/?g=official"
            class="list-group-item list-group-item-action"
          >
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">★いい子だけを厳選採用★</h3>
              <small>2017年08月10日 23:59</small>
            </div>
            <p class="mb-1">
              厳しい基準で採用しているからこそ、可愛くて性格もいい子ばかりなんです。
              ですが、せっかく入店してく...
            </p>
          </a>
        </div>
        <a
          href="https://www.gb-walker.jp/kanto/shop/redslope/?g=official"
          class="btn btn-lg rounded-pill w-50 my-5"
          :class="['btn-' + themeColor[themeColorIndex]]"
        >More</a>
      </InnerSection>
    </section>
    <section id="cast" class="section">
      <InnerSection>
        <h2 class="my-5">Cast</h2>
        <div class="card-columns">
          <div v-for="cast in casts" :key="cast.id" class="card">
            <img :src="cast.imageURL" :alt="name" class="w-100 h-auto" />
            <div class="card-body">
              <p class="card-text">{{cast.name}}</p>
              <a
                :href="cast.linkURL"
                class="btn stretched-link"
                role="button"
                :class="['btn-outline-' + themeColor[themeColorIndex]]"
              >Profile</a>
            </div>
          </div>
        </div>
        <a
          href="https://www.gb-walker.jp/kanto/shop/redslope/?g=official"
          class="btn btn-lg rounded-pill w-50 my-5"
          :class="['btn-' + themeColor[themeColorIndex]]"
        >More</a>
      </InnerSection>
    </section>
    <section id="movie" class="section">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center">
          <div class="col-lg-8 text-center text-dark">
            <h2 class="my-5">Movie</h2>
            <div class="embed-responsive embed-responsive-16by9 my-5">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/Yx5vdB43AUo"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="system" class="section">
      <InnerSection>
        <h2 class="my-5">System</h2>
        <div class="my-5">
          <table class="table table-striped table-dark table-hover">
            <caption>基本料金</caption>
            <tbody>
              <tr>
                <th scope="row">飲み放題60分</th>
                <td>3,000円</td>
              </tr>
              <tr>
                <td colspan="2">TAX 20%</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-striped table-dark table-hover">
            <caption>オープニング記念</caption>
            <tbody>
              <tr>
                <th scope="row">90分（オールタイム）</th>
                <td>3,000円</td>
              </tr>
              <tr>
                <th scope="row">20時までに入店したお客様限定 40分</th>
                <td>1,500円</td>
              </tr>
            </tbody>
          </table>
        </div>
      </InnerSection>
    </section>
    <section id="coupon" class="section">
      <InnerSection>
        <h2 class="my-5">Coupon</h2>
        <div class="border border-muted bg-white text-dark my-5 shadow-sm rounded">
          <p class="badge badge-pill badge-dark text-left">団体のお客様</p>
          <p class="lead">
            <strong>10％OFFでご案内</strong>
          </p>
          <p class="mr-3 text-right">
            <small>有効期限：期限なし</small>
          </p>
        </div>
      </InnerSection>
    </section>
    <section id="access" class="section">
      <InnerSection>
        <h2 class="my-5">Access</h2>
        <p class="lead mb-0">東京メトロ銀座線・丸ノ内線「赤坂見附」駅10番出口から徒歩3分</p>
        <p class="lead mb-0">東京メトロ千代田線「赤坂」駅1番出口から徒歩4分</p>
        <p class="lead">赤坂駅・赤坂見附駅どちらでも行ける距離です。</p>
        <p>東京都港区赤坂3-19-8 赤坂ウエストビル４F</p>
        <div class="my-5">
          <div class="embed-responsive embed-responsive-4by3">
            <iframe
              class="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6482.108026833745!2d139.736123!3d35.675672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7f3cb26599%3A0xb20c1c78c76d1e4c!2z44CSMTA3LTAwNTIg5p2x5Lqs6YO95riv5Yy66LWk5Z2C77yT5LiB55uu77yR77yZ4oiS77yYIOi1pOWdguOCpuOCqOOCueODiOODk-ODqw!5e0!3m2!1sja!2sjp!4v1555035976188!5m2!1sja!2sjp"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="embed-responsive embed-responsive-4by3 my-5">
            <iframe
              class="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!4v1555036210552!6m8!1m7!1sJx3352JLrPJLVOQMIfG9iQ!2m2!1d35.67572099577908!2d139.7359174258652!3f126.94329134026758!4f17.938226356359095!5f1.0640859842797723"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </InnerSection>
    </section>
  </main>
</template>

<script>
import InnerSection from "./InnerSection";

export default {
  components: {
    InnerSection
  },
  data: function() {
    return {
      casts: [
        {
          id: 1,
          name: "ユキ",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1549111329-250925.jpg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/yuki/?g=official"
        },
        {
          id: 2,
          name: "ワカナ",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1544021681-770128.jpeg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/wakana/?g=official"
        },
        {
          id: 3,
          name: "アメ",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1549111495-029674.jpg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/ame/?g=official"
        },
        {
          id: 4,
          name: "ホノカ",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1543926131-711046.jpeg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/honoka/?g=official"
        },
        {
          id: 5,
          name: "カレン",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1545470010-599157.jpeg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/Karen/?g=official"
        },
        {
          id: 6,
          name: "モナ",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1557244051-057122.jpg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/MONA/?g=official"
        },
        {
          id: 7,
          name: "ノン",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1557210769-705849.jpg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/NON/?g=official"
        },
        {
          id: 8,
          name: "エナ",
          imageURL:
            "https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/cast-1557210659-500710.jpg",
          linkURL:
            "https://www.gb-walker.jp/kanto/girlscollection-detail/redslope/ENA/?g=official"
        },
        {
          id: 9,
          name: "Secret",
          imageURL:
            "https://placehold.jp/3d4070/ffffff/192x256.png?text=Secret",
          linkURL: "https://www.gb-walker.jp/kanto/shop/redslope/?g=official"
        }
      ]
    };
  },
  props: ["themeColor", "themeColorIndex"],
  filters: {
    lowercase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toLowerCase();
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin text-shadow-dark {
  text-shadow: black 1px 1px 10px, black -1px 1px 10px, black 1px -1px 10px,
    black -1px -1px 10px;
}
.section {
  background-clip: content-box;
  &:nth-of-type(even) {
    background-color: var(--theme-color-light);
  }
}
#concept {
  @include text-shadow-dark;
  background: url("https://www.gb-walker.jp/updates/mst_shops/1540267946-956315/1543391882-459052.jpg")
    center center / cover no-repeat content-box;
}
</style>
