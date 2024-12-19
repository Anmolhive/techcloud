import { mapInSlices, slugify } from "@/utils";
import Section from "../elements/Section";
import ProductsData from "@/data/Products";
import ProductOne from "../product/ProductOne";
import SliderContainer from "../sliderContainer/SliderContainer";
import SectionTitle from "../elements/SectionTitle";

const ExploreOurProduct = ({ cat = "Electronics" }) => {
  const electronicsProduct = ProductsData.filter((data) => data.pCate === cat);
  const exploreProduct = mapInSlices(electronicsProduct, 8);

  return (
    <Section>
      <SectionTitle
        title="Explore our Products"
        subtitle="Our Products"
        subtitleIcon="far fa-shopping-basket"
        subColor="highlighter-secondary"
      />
      <SliderContainer slidesToShow={1}>
        {exploreProduct.slice(0, 2).map((product, index) => (
          <div key={index}>
            <div className="row row--15">
              {product.map((data) => (
                <div
                  className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30"
                  key={data.id}
                >
                  <ProductOne product={data} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </SliderContainer>
    </Section>
  );
};

export default ExploreOurProduct;
