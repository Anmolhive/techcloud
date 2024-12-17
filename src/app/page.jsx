import FooterTwo from "@/components/footer/FooterTwo";
import HeaderOne from "@/components/header/HeaderOne";
import SearchBanner from "@/components/banner/searchBanner";
import HomeCategory from "@/components/HomeCategory/HomeCategory";
import Ads from "@/components/ads/Ads";
import TopSellingProducts from "@/components/topSellingProducts/TopSellingProducts";
import ClientSlider from "@/components/ClientSlider/ClientSlider";


export const metadata = {
  title: "eTrade Multipurpose eCommerce Next JS Template",
  description: "eTrade Multipurpose eCommerce Nextjs Template",
};

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main className="main-wrapper pv-main-wrapper">
        <SearchBanner />
        <HomeCategory />
        <Ads />
        <TopSellingProducts />
        <ClientSlider />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeOne;
