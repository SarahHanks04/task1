import { tabContentData } from "@/data/tabContentData";
import { TabContentData } from "@/types/tabContent";
import { CircleCheckBig } from "lucide-react";


interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const content: TabContentData = tabContentData[activeTab] || {
    features: [],
    additionalInfo: { description: "", listItems: [] },
  };

  return (
    <div className="container bg-white w-full mx-auto px-4 pt-8 md:pt-[7rem] pb-6 md:pb-[4rem] flex flex-col md:flex-row gap-6">
      {/* Features List */}
      <div className="md:w-1/2 flex flex-col gap-4 pl-4 md:pl-[4rem]">
        {content.features.map((feature, index) => (
          <div key={index} className="flex items-start pt-6">
            <div className="flex items-center text-gray-700 p-4 md:p-4">
              <CircleCheckBig
                className="text-[#3C72FC] p-1 bg-[#EBF1FF]"
                size={24}
              />
            </div>
            <div className="pt-3">
              <h4 className="text-lg font-semibold text-[#0F0D1D]">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 pt-3">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px md:w-px md:h-[255px] bg-gray-300 mx-4 my-4 md:my-0"></div>

      {/* Additional Information */}
      <div className="md:w-1/2 flex flex-col gap-4 pt-8 pl-4 md:pl-6">
        <p className="text-sm text-gray-600">
          {content.additionalInfo.description}
        </p>
        <ul className="text-sm text-gray-600 space-y-2">
          {content.additionalInfo.listItems.map((item, index) => (
            <li key={index} className="relative pl-4">
              <span className="absolute left-0 text-gray-600">-</span>
              <span className="ml-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
