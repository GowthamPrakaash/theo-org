type Props = {};
export const Featured = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:p-20 p-10 gap-8">
        <div className="flex flex-col items-center justify-center md:px-36 px-10 gap-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Start Your Skincare Today
          </h1>
          <p className="text-lg text-center text-gray-500">
            Nourish and rejuvenate your skin with the finest organic soaps, made
            to bring out your natural glow. Every bar is crafted with love and
            purity to give you a spa-like experience at home.
          </p>
          <a href="/products" className="text-lg font-semibold text-center text-gray-800 underline">Shop All Products</a>
        </div>
        <div className="flex flex-row flex-wrap justify-center md:px-10 gap-20">
          {/* <div className="flex flex-col items-center gap-2"> */}
          <div className="flex flex-col items-center gap-2 w-72">
            <img
              src="/images/landing/featured/milk-bliss.png"
              alt="Velvety Milk Bliss"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
            Velvety Milk Bliss (Milk)
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* We believe in purity. No parabens, sulfates, or artificial fragrances — just clean, natural ingredients your skin will love. */}
              Indulge in the creamy richness of milk for a gentle cleanse that leaves your skin soft and hydrated. Perfect for dry and sensitive skin.
            </p>
            <a href="/products/milk-bliss" className="text-lg font-semibold text-center text-gray-800 underline">Shop Now</a>
          </div>
          <div className="flex flex-col items-center gap-2 w-72">
            <img
              src="/images/landing/featured/citrus-sunrise.png"
              alt="Citrus Sunrise"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
            Citrus Sunrise (Orange)
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* Every product is rigorously tested to meet the highest standards of quality, ensuring your skin gets only the best. */}
              Wake up your senses with the refreshing scent of fresh orange. This soap revitalizes and tones, leaving your skin feeling refreshed and radiant.
            </p>
            <a href="/products/citrus-sunrise" className="text-lg font-semibold text-center text-gray-800 underline">Shop Now</a>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-col items-center gap-2"> */}
          <div className="flex flex-col items-center gap-2 w-72">
            <img
              src="/images/landing/featured/beetroot-radiance.png"
              alt="Beetroot Radiance"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
            Beetroot Radiance (Beetroot)
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* We pride ourselves on using only the finest, non-toxic ingredients. No fillers, no harmful additives — just nature’s finest. */}
              Revitalize your skin with the natural antioxidants in beetroot. This soap helps brighten and nourish, promoting a healthy, glowing complexion.
            </p>
            <a href="/products/beetroot-radiance" className="text-lg font-semibold text-center text-gray-800 underline">Shop Now</a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
