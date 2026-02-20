"use client";

import FeatureRow from "./FeatureRow";

const featuresData = [
    {
        title: "The connectivity that matters",
        description: "Consult with expert lab doctors remotely to understand your results and get personalized health advice from the comfort of your home.",
        img: "/portal-chat.jpg", // placeholder
        reverse: false,
    },
    {
        title: "Tests records collected right in one app",
        description: "No more paper trails. Securely access, download, and share your complete medical testing history directly through our encrypted patient portal.",
        img: "/portal-records.jpg",
        reverse: true,
    }
];

export default function FeaturesSection() {
    return (
        <section id="services" className="py-24 px-8 max-w-7xl mx-auto border-t border-slate-100">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Features designed for your health journey</h2>
                <p className="text-slate-600 max-w-xl mx-auto text-lg">
                    Experience seamless healthcare management with our intuitive digital tools and patient-first approach.
                </p>
            </div>

            <div className="space-y-12">
                {featuresData.map((feature, idx) => (
                    <FeatureRow
                        key={idx}
                        title={feature.title}
                        desc={feature.description}
                        img={feature.img}
                        reverse={feature.reverse}
                    />
                ))}
            </div>
        </section>
    );
}
