import FooterTwo from "@/components/footer/FooterTwo";
import HeaderOne from "@/components/header/HeaderOne";
import SearchBanner from "@/components/banner/searchBanner";

export const metadata = {
	title: 'eTrade Multipurpose eCommerce Next JS Template',
  description: 'eTrade Multipurpose eCommerce Nextjs Template',
}

const HomeOne = () => {
  return ( 
    <>
	<HeaderOne />
	<main className="main-wrapper pv-main-wrapper">
		<SearchBanner />
	</main>
  <FooterTwo />
    </>
   );
}
 
export default HomeOne;