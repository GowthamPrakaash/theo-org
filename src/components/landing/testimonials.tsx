type Props = {};
export const Testimonials = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-100 bg-opacity-60">
      <div className="flex flex-col items-center justify-center md:p-20 p-10 gap-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          TheoOrg IN THE PRESS
        </h1>
        <p className="text-3xl font-black text-center text-gray-500 max-w-2xl">
          "The perfect skincare solution with a refreshing, natural fragrance.
          Infused with organic fruit acids, it gently exfoliates rough, dry skin
          while locking in moisture for a soft, hydrated feel."
        </p>
      </div>
    </div>
  );
};
