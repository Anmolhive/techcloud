import Image from "next/image";
import SliderContainer from "../sliderContainer/SliderContainer";

const Ads = () => {
  return (
    <SliderContainer slidesToShow={1}>
      <a href="#">
        <Image
          src="/images/home/ads/VeeamDataCloudHeroBanner.png"
          class="img-fluid rounded-3 w-100 drop-shadow"
          alt=""
          width={1260}
          height={300}
        />
      </a>
      <a href="#">
        <Image
          src="/images/home/ads/Herobanner_web_EngageHRMS.png"
          class="img-fluid rounded-3 w-100 drop-shadow"
          alt=""
          width={1260}
          height={300}
        />
      </a>
      <a href="#">
        <Image
          src="/images/home/ads/StarterPackageHeroWebBanner2.png"
          class="img-fluid rounded-3 w-100 drop-shadow"
          alt=""
          width={1260}
          height={300}
        />
      </a>
      <a href="#">
        <Image
          src="/images/home/ads/Microsoft365BusinessBasicBanner_HeroWebBanner5.png"
          class="img-fluid rounded-3 w-100 drop-shadow"
          alt=""
          width={1260}
          height={300}
        />
      </a>
    </SliderContainer>
  );
};

export default Ads;
