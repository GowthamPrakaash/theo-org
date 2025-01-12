import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};
export const About = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-100 bg-opacity-60">
      <div className="flex flex-col items-center justify-center md:p-20 p-10 gap-16">
        <div className="flex flex-col items-center justify-center md:px-36 px-10 gap-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Give your skin a healing feeling
          </h1>
          <p className="text-lg text-center text-gray-500">
            Experience the power of nature with every touch. TheoOrg’s organic
            skincare products are designed to nourish, hydrate, and restore your
            skin with the purest ingredients. Feel the difference of
            chemical-free, eco-friendly formulations that provide your skin with
            the care it truly deserves.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center md:px-10 gap-20">
          {/* <div className="flex flex-col items-center gap-2"> */}
          <div className="flex flex-col items-center gap-2 w-52">
            <img
              src="/images/landing/about/chemical-free.png"
              alt="Chemical Free"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
              Chemical Free
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* We believe in purity. No parabens, sulfates, or artificial fragrances — just clean, natural ingredients your skin will love. */}
              No parabens, sulfates, or artificial fragrances—only pure, natural
              ingredients.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-52">
            <img
              src="/images/landing/about/quality-assured.png"
              alt="Quality Assured"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
              Quality Assured
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* Every product is rigorously tested to meet the highest standards of quality, ensuring your skin gets only the best. */}
              Rigorously tested to meet the highest standards for your skin.
            </p>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-col items-center gap-2"> */}
          <div className="flex flex-col items-center gap-2 w-52">
            <img
              src="/images/landing/about/clean-ingredients.png"
              alt="Clean Ingredients"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
              Clean Ingredients
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* We pride ourselves on using only the finest, non-toxic ingredients. No fillers, no harmful additives — just nature’s finest. */}
              Made with non-toxic, filler-free ingredients from nature’s finest
              sources.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-52">
            <img
              src="/images/landing/about/eco-friendly.png"
              alt="Eco-Friendly"
            />
            <h2 className="text-xl font-bold text-center text-gray-800">
              Eco-Friendly
            </h2>
            <p className="text-lg text-center text-gray-500">
              {/* Our products are crafted with sustainability in mind, using recyclable packaging and responsibly sourced ingredients. */}
              Crafted sustainably with recyclable packaging and responsibly
              sourced ingredients.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
