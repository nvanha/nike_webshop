import React from "react";

import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";

import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.png";
import banner3 from "../assets/images/banner-3.jpg";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={4500}
      />
      {/* end hero slider */}

      {/* banner */}
      <Section>
        <SectionBody>
          {/* <Link to="/nike_webshop/catalog"> */}
          <Link to="/nike_webshop">
            <img src={banner1} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              // <Link key={index} to="/nike_webshop/policy">
              <Link key={index} to="/nike_webshop">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        <SectionTitle>The Latest And Greatest</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* banner */}
      <Section>
        <SectionBody>
          {/* <Link to="/nike_webshop/catalog"> */}
          <Link to="/nike_webshop">
            <img src={banner3} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}
      <Section>
        <SectionTitle>More to Explore</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}

      {/* banner */}
      <Section>
        <SectionBody>
          {/* <Link to="/nike_webshop/catalog"> */}
          <Link to="/nike_webshop">
            <img src={banner2} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}
    </Helmet>
  );
};

export default Home;
