import React from "react";
import Icon1 from "../../assets/icons/icon-1.svg";
import Icon2 from "../../assets/icons/icon-2.svg";
import Icon3 from "../../assets/icons/icon-3.svg";
import Icon4 from "../../assets/icons/icon-4.svg";
import Icon5 from "../../assets/icons/icon-5.svg";

const FeatureData = [
  {
    id: 1,
    icon: Icon1,
    title: "Best prices $ offers",
    description: "Orders $50 or more",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Free delivery",
    description: "24/7 amazing services",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Great daily deal",
    description: "When you sign up",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Wide assortment",
    description: "Mega Discounts",
  },
  {
    id: 5,
    icon: Icon5,
    title: "Easy returns",
    description: "Within 30 days",
  },
];

const FooterFeature = () => {
  return (
    <section className="px-5">
      <div className="mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {FeatureData.map((item) => (
            <div
              key={item.id}
              className="flex items-center group text-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mb-2 px-2 transform transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-700 mb-1">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterFeature;
