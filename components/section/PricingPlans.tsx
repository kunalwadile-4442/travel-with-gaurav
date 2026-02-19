import PackageCard from "@/components/cards/package-card";
import {
  CircleStar,
  CircleUserRound,
  Crown,
  Gem
} from "lucide-react";

const plans = [
  {
    title: "Local Rental",
    icon: <CircleUserRound className=" text-[#4A86E8]" size={20} />,
    price: "₹2000",
    price_description: "8 Hours / 80 KM",
    features: [
      "Swift Dzire (5 Seater)",
      "Driver Included",
      "Extra KM Charges Applicable"
    ],
    description: "Perfect for city rides and business travel in Pune.",
    btn_title: "Book Now"
  },
  {
    title: "Outstation Trip",
    icon: <CircleStar className=" text-[#4A86E8]" size={20} />,
    price: "₹12 / KM",
    price_description: "Minimum 300 KM",
    features: [
      "Dzire – ₹12/KM",
      "Ertiga – ₹15/KM",
      "Toll & Parking Extra"
    ],
    description: "Affordable trips across Maharashtra.",
    btn_title: "Book Trip"
  },
  {
    title: "Airport Transfer",
    icon: <Gem className=" text-[#4A86E8]" size={20} />,
    price: "₹3000",
    price_description: "Starting Price",
    features: [
      "Pune to Mumbai Drop",
      "On-time Pickup",
      "Professional Drivers"
    ],
    description: "Reliable airport pickup & drop service.",
    btn_title: "Book Airport"
  },
];

interface IPlan {
  title: string;
  icon: React.ReactNode,
  features: string[],
}

interface IPricePlans {
  heading: string,
  description: string;
}

export default function PricingPlans({ heading, description }: IPricePlans) {
  return (
    <section className="bg-[#F8FAFC] py-14">
      <div className="lg:mx-10 px-6">
        <div className="flex flex-col md:flex-row md:justify-between mb-14">
          <h2 className="text-3xl capitalize font-manrope font-bold text-[#000000]">
            {heading}
          </h2>
          <p className="text-slate_gray font-medium font-manrope text-md max-w-xl mt-4 md:mt-0">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans?.map((plan, index) => (
            <PackageCard plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
