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
    colors: ["white", "red", "orange"],
    slug: "nike-dri-fIT",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Jordan Sport DNA",
    price: "50",
    image01: product_02_image_01,
    image02: product_02_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red", "orange"],
    slug: "jordan-sport-dna",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Air Force 1 '07",
    price: "170",
    image01: product_03_image_01,
    image02: product_03_image_02,
    categorySlug: "shoes",
    colors: ["white", "red", "orange"],
    slug: "nike-air-force-1-07",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Waffle One",
    price: "200",
    image01: product_04_image_01,
    image02: product_04_image_02,
    categorySlug: "shoes",
    colors: ["white", "red", "orange"],
    slug: "nike-waffle-one",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Blazer Mid '77 SE",
    price: "320",
    image01: product_05_image_01,
    image02: product_05_image_02,
    categorySlug: "shoes",
    colors: ["white", "red", "orange"],
    slug: "nike-blazer-mid-77-se",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Dri-FIT Indy Zip-Front",
    price: "90",
    image01: product_06_image_01,
    image02: product_06_image_02,
    categorySlug: "bra",
    colors: ["white", "red", "orange"],
    slug: "nike-dri-fit-indy-zip-front",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Offcourt Duo",
    price: "85",
    image01: product_07_image_01,
    image02: product_07_image_02,
    categorySlug: "slide",
    colors: ["white", "red", "orange"],
    slug: "nike-offcourt-duo",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Sleeve Dress Sportswear",
    price: "130",
    image01: product_08_image_01,
    image02: product_08_image_02,
    categorySlug: "dress",
    colors: ["white", "red", "orange"],
    slug: "nike-sleeve-dress-sportswear",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Sportswear Icon Clash",
    price: "140",
    image01: product_09_image_01,
    image02: product_09_image_02,
    categorySlug: "dress",
    colors: ["white", "red", "orange"],
    slug: "nike-sportswear-icon-clash",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Sportswear",
    price: "90",
    image01: product_10_image_01,
    image02: product_10_image_02,
    categorySlug: "bucket-hat",
    colors: ["white", "red", "orange"],
    slug: "nike-sportswear",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Yoga Dri-FIT Indy",
    price: "95",
    image01: product_11_image_01,
    image02: product_11_image_02,
    categorySlug: "bra",
    colors: ["white", "red", "orange"],
    slug: "nike-yoga-dri-fit-indy",
    size: ["s", "m", "l", "xl"],
  },
  {
    title: "Nike Sportswear Swoosh",
    price: "120",
    image01: product_12_image_01,
    image02: product_12_image_02,
    categorySlug: "t-shirt",
    colors: ["white", "red", "orange"],
    slug: "nike-sportswear-swoosh",
    size: ["s", "m", "l", "xl"],
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const productData = {
  getAllProducts,
  getProducts,
};

export default productData;
