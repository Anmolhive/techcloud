import SwiperSlider from "../swiperSlider/SwiperSlider";
import ProductOne from "../product/ProductOne";
import ProductsData from "@/data/Products";
import SectionTitle from "../elements/SectionTitle";

const TopSellingProducts = () => {
  const sellingProducts = ProductsData.slice(0, 6);
  return (
    <section className="py-5">
      <div className="container">
      <SectionTitle
            title="Top Selling Products"
            subtitle="Our Products"
            subtitleIcon="far fa-shopping-basket"
            subColor="highlighter-secondary"
          />
        <SwiperSlider slidesPerView={4}>
          {sellingProducts.map((product) => (
            <ProductOne product={product} />
          ))}
        </SwiperSlider>
      </div>
    </section>
  );
};

export default TopSellingProducts;
