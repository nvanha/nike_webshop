const product_01_image_01 =
  require("../images/products/product-01 (1).jfif").default;
const product_01_image_02 =
  require("../images/products/product-01 (2).jfif").default;

const product_02_image_01 =
  require("../images/products/product-02 (1).jfif").default;
const product_02_image_02 =
  require("../images/products/product-02 (2).jfif").default;

const product_03_image_01 =
  require("../images/products/product-03 (1).jfif").default;
const product_03_image_02 =
  require("../images/products/product-03 (2).jfif").default;

const product_04_image_01 =
  require("../images/products/product-04 (1).jfif").default;
const product_04_image_02 =
  require("../images/products/product-04 (2).jfif").default;

const product_05_image_01 =
  require("../images/products/product-05 (1).jfif").default;
const product_05_image_02 =
  require("../images/products/product-05 (2).jfif").default;

const product_06_image_01 =
  require("../images/products/product-06 (1).jfif").default;
const product_06_image_02 =
  require("../images/products/product-06 (2).jfif").default;

const product_07_image_01 =
  require("../images/products/product-07 (1).jfif").default;
const product_07_image_02 =
  require("../images/products/product-07 (2).jfif").default;

const product_08_image_01 =
  require("../images/products/product-08 (1).jfif").default;
const product_08_image_02 =
  require("../images/products/product-08 (2).jfif").default;

const product_09_image_01 =
  require("../images/products/product-09 (1).jfif").default;
const product_09_image_02 =
  require("../images/products/product-09 (2).jfif").default;

const product_10_image_01 =
  require("../images/products/product-10 (1).jfif").default;
const product_10_image_02 =
  require("../images/products/product-10 (2).jfif").default;

const product_11_image_01 =
  require("../images/products/product-11 (1).jfif").default;
const product_11_image_02 =
  require("../images/products/product-11 (2).jfif").default;

const product_12_image_01 =
  require("../images/products/product-12 (1).jfif").default;
const product_12_image_02 =
  require("../images/products/product-12 (2).jfif").default;

const products = [
  {
    title: "Nike Dri-FIT",
    price: "44",
    image01: product_01_image_01,
    image02: product_01_image_02,
    categorySlug: "shorts",
    colors: ["white", "red"],
    slug: "nike-dri-fit",
    size: ["m", "l", "xl"],
    description:
      "CLASSIC COMFORT. BOLD STYLE.<br /><br />The Nike Sportswear Club Shorts blend classic comfort with a bold graphic for street-ready style. Crafted from soft fleece, they've got you covered for all-day wear.<br /><br />Secure Fit<br />Elastic waistband with drawcord offers a secure, personalized fit.<br /><br />Soft Comfort<br />Brushed-back fabric is soft and comfortable.",
  },
  {
    title: "Jordan Sport DNA",
    price: "50",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red", "black"],
    slug: "jordan-sport-dna",
    size: ["l", "xl"],
    description:
      "ICONIC IDENTITY.<br /><br />Flight meets Force in the Jordan Sport DNA Crew. Made on soft fabric with an easy, relaxed fit, it features a large graphic in letters inspired by the classic Force logo.<br /><br />Benefits<br />- Everyday midweight fabric feels soft and comfortable.<br />-The fit feels relaxed and easy to wear with a versatile shape.",
  },
  {
    title: "Nike Air Force 1 '07",
    price: "170",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "shoes",
    colors: ["red", "blue"],
    slug: "nike-air-force-1-07",
    size: ["s", "m", "l", "xl"],
    description:
      'LEGENDARY STYLE CELEBRATES THE SWOOSH.<br /><br />The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that celebrates 50 years of the Swoosh. Keeping what you know best: stitched overlays, bold colors and the perfect amount of flash to make you shine, it now features a throwback, woven tongue label with original Swoosh and "nike". Color-matched stitching adds to the fun.<br /><br />Air Force 1 Origins<br />Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker history.<br /><br />Swoosh 50<br />In 1971 the legend of the Swoosh was born when it was stitched to a pair of soccer boots. The Swoosh draws inspiration from the Greek Goddess Nike. Embodying the spirit of sport and its power to unify, the Swoosh symbolizes progress from the tracks to the fields to the streets.',
  },
  {
    title: "Nike Waffle One",
    price: "200",
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "shoes",
    colors: ["white", "red", "black", "blue", "orange"],
    slug: "nike-waffle-one",
    size: ["s", "m", "l", "xl"],
    description:
      "INSPIRATION FROM THE ORIGINAL.<br /><br />Cooked up on our founder’s waffle iron. Still fresh today. The iconic Waffle sole dishes out durable traction for days on the Nike Waffle One. Supersoft foam provides lightweight cushion and mesh gives little feet breathable comfort so they can play all day.<br /><br />All-Day Traction<br />The studs on the rubber sole are inspired by the iconic Waffle design—first developed by Nike co-founder Bill Bowerman from a waffle iron in the early '70s—to provide durable traction.<br /><br />Cool Comfort<br />See-through mesh (for breathability) has suede overlays around the toe and heel to add support.",
  },
  {
    title: "Nike Blazer Mid '77 SE",
    price: "320",
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "shoes",
    colors: ["white", "red", "black"],
    slug: "nike-blazer-mid-77-se",
    size: ["s", "m", "l", "xl"],
    description:
      "VINTAGE VIBES. UNDENIABLE COMFORT.<br /><br />The Nike Blazer Mid '77 channels the old-school look of Nike basketball with a vintage midsole finish. Throwback style with modern materials means you can run, skip and jump in comfort.<br /><br />Product Details<br />-Foam cushioning feels soft and lightweight with every step<br />Herringbone rubber sole is flexible with pods under the forefoot that provide durable traction<br />Shown: White/White/Black/Team Red<br />Style: DA4086-102",
  },
  {
    title: "Nike Dri-FIT Indy Zip-Front",
    price: "90",
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "bra",
    colors: ["blue"],
    slug: "nike-dri-fit-indy-zip-front",
    size: ["s", "m", "l"],
    description:
      "EASY-ON, EASY-OFF COMFORT.<br /><br />The Nike Dri-FIT Indy Zip-Front Sports Bra takes the lightweight fabric to the next level with at least 50% recycled polyester fibers. It's easy to get on and off, while the semi-auto lock zipper helps keep it from coming unzipped. Ideal for low-impact activities, like yoga, biking or even just day-to-day wear, it also helps keep you cool with breathable mesh on the back. Thin, adjustable straps let you get the perfect fit.<br /><br />Easy On and Off<br />The semi-auto lock zipper on the front helps prevent unwanted unzipping yet still makes it easy to get in and out—it stays in place when you press down on it, but zips up easily. It also has an inner buckle that doubles up on safety.<br /><br />Cool and Dry<br />Nike Dri-FIT technology moves sweat away from your skin for quicker evaporation, helping you stay dry and comfortable. Thin straps and mesh on back let your skin breathe.<br /><br />No Empty Cups<br />Stretch fabric and an elastic chest band provide a comfortable, compressive feel while shaping to prevent the sensation of empty space in your cups.",
  },
  {
    title: "Nike Offcourt Duo",
    price: "85",
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "slide",
    colors: ["white", "blue"],
    slug: "nike-offcourt-duo",
    size: ["s", "m", "l", "xl"],
    description:
      "CLOUD-LIKE COMFORT. EFFORTLESS FASHION.<br /><br />Bringing a fresh look to the classic slide, the Nike Offcourt Duo features twin straps for a chic look you can wear with jeans or leggings and everything in between. Its Revive foam footbed feels unbelievably soft while its plush straps are lined with cloud-like fabric that rolls over the top to help eliminate hotspots. The micro-textured footbed helps keep your foot in place while the sole adds traction that lasts.",
  },
  {
    title: "Nike Sleeve Dress Sportswear",
    price: "130",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "dress",
    colors: ["black"],
    slug: "nike-sleeve-dress-sportswear",
    size: ["s", "m"],
    description:
      "TRY A TALLER CALLER.<br /><br />The Nike Sportswear Swoosh Dress is a slim silhouette with a sophisticated, modern design. Long sleeves and a mock neck design keeps you covered while a stretch knit fabric helps you move without restriction.<br /><br />Stretch Knit<br />This smooth blend has a soft, stretchy feel.<br /><br />Simple Swoosh<br />An embroidered Swoosh design at the chest lets you rep the brand in style.",
  },
  {
    title: "Nike Sportswear Icon Clash",
    price: "140",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "dress",
    colors: ["blue", "black"],
    slug: "nike-sportswear-icon-clash",
    size: ["m", "l"],
    description:
      "FUNCTIONAL IS FLATTERING.<br /><br />Designed around your favorite bike shorts, the Nike Sportswear Icon Clash 1-Piece is perfect for layering and everyday wear. This confident silhouette features soft knit fabric and contouring seam details for a flattering and sporty feel.<br /><br />Contouring Details<br />Seam details promote a natural shape and effortless style.<br /><br />Knit Fabric<br />This lightweight fabric has a soft, stretchy feel.<br /><br />Shine with a Swoosh<br />A simple Swoosh design printed in pearlescent ink gives your style a bright shine.",
  },
  {
    title: "Nike Sportswear",
    price: "90",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "bucket-hat",
    colors: ["blue"],
    slug: "nike-sportswear",
    size: ["m"],
    description:
      "COMFORTABLE COVERAGE FOR SUNNY WEATHER.<br /><br />The Nike Bucket Hat delivers a 360° shade and features UPF 40+ fabric to shield little ones from the sun. The chin strap features an easy hook-and-loop tape closure for a stay-put fit.<br /><br />Benefits<br />-A sweatband inside is made with comfortable cotton to help keep little ones dry.<br />The chinstrap features a hook-and-loop tape closure that makes it easy to put on and take off.",
  },
  {
    title: "Nike Yoga Dri-FIT Indy",
    price: "95",
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "bra",
    colors: ["red"],
    slug: "nike-yoga-dri-fit-indy",
    size: ["m", "l"],
    description:
      "IRRESISTIBLY SOFT COVERAGE.<br /><br />The Nike Yoga Dri-FIT Indy Sports Bra blends smooth and ribbed Infinalon fabrics that feel incredibly soft and gently compressive through every stretch and hold.<br /><br />Infinite Comfort<br />Infinalon fabric is an infinitely comfortable and incredibly stretchy material that feels so good you’ll want to wear it everywhere. Thinner, lighter and even stronger than our traditional yarns, Infinalon feels irresistibly soft and smooth while providing a gently compressive feel that hugs your body so you can stretch and move without limits.<br /><br />Dry, Cool Design<br />Nike Dri-FIT technology moves sweat away from your body for quicker evaporation, helping you stay dry and comfortable. The strappy design helps keep you cool.<br /><br />Easy Adjustment<br />Thin straps easily adjust from the front. Removable pads slip in from the top so you can make quick adjustments.",
  },
  {
    title: "Nike Sportswear Swoosh",
    price: "120",
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "black"],
    slug: "nike-sportswear-swoosh",
    size: ["s", "m", "l", "xl"],
    description:
      "OVERSIZED WITH A PREMIUM FEEL.<br /><br />Ready for cooler weather, the Nike Sportswear Swoosh T-Shirt is a go-to styling piece you can pair with your favorite leggings and sneakers. Heavyweight cotton gives it a relaxed, comfortable feel.<br /><br />Roomy and Stylish<br />Cropped to stop at your waistline, this oversized fit is relaxed through the body and features dropped shoulders and armholes for a relaxed look, without feeling too big.<br /><br />Heavyweight Cotton<br />Heavyweight cotton fabric feels structured and premium.<br /><br />Mirrored Swooshes<br />Screen printed Swoosh graphics have a smooth, soft feel.",
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsDetail = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      res.push({
        ...e,
        product: getProductBySlug(e.slug),
      });
    });
  }
  return res;
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsDetail,
};

export default productData;
