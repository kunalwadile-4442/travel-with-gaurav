"use client";

const data = [
    {
        title: "500+",
        heading: "Happy Clients",
        desc: "Trusted by hundreds of customers for safe and comfortable travel across Maharashtra.",
    },
    {
        title: "24/7",
        heading: "Customer Support",
        desc: "Always available for bookings, trip updates, and assistance anytime.",
    },
    {
        title: "5+",
        heading: "Years Experience",
        desc: "Experienced drivers and well-maintained vehicles for reliable journeys.",
    },
    {
        title: "100%",
        heading: "Transparent Pricing",
        desc: "Clear per KM pricing with no hidden charges—simple and honest service.",
    },
];

export default function WhyChooseDhanashree() {
    return (
        <section className="bg-[#F8FAFC] py-16">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-center font-manrope text-4xl font-semibold text-black">
                    Why Choose Dhanashree Tours & Travel?
                </h2>
                <p className="text-center font-manrope font-normal mt-3 text-[#333333]">
                    Safe, reliable, and affordable car rental services led by Gaurav Patil with customer satisfaction as our top priority.
                </p>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {data.map((item, index) => {
                        const isFirst = index === 0;
                        const isLast = index === data.length - 1;

                        return (
                            <div key={index}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl font-manrope font-bold text-[#333333] whitespace-nowrap">
                                        {item.title}
                                    </span>
                                    {!isLast && (
                                        <div className="w-5 h-[2px] bg-gray-200"></div>
                                    )}

                                    {!isLast && (
                                        <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
                                    )}
                                    {!isLast && (
                                        <div className="flex-1 h-[2px] bg-gray-200"></div>
                                    )}
                                </div>

                                <h4 className="text-lg font-manrope font-bold text-[#333333]">
                                    {item.heading}
                                </h4>
                                <p className="mt-2 font-manrope font-normal text-sm text-[#333333] leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
