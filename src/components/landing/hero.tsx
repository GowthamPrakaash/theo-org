type Props = {};
export const Hero = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/images/marita-kavelashvili-unsplash.jpg')] bg-cover bg-bottom bg-no-repeat bg-opacity-10">
      <div className="flex flex-col items-center justify-center text-gray-200">
        <div id="hero-text" className="bg-black bg-opacity-50 p-4 rounded-lg">
          <h1 className="text-5xl font-bold text-center">
            Pure Beauty, Naturally.
          </h1>
          <p className="text-lg text-center">
            Nourish Your Skin with the Power of Nature.
          </p>
        </div>
        <img src="/images/1A-cropped.png" alt="Hero" className="w-96 mt-4" />
      </div>
    </div>
  );
};
