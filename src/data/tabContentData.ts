import { TabContentData } from "@/types/tabContent";


export const tabContentData: Record<string, TabContentData> = {
  "Business Growth": {
    features: [
      {
        title: "Highest Success Rates",
        description:
          "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
      {
        title: "We Build Experience",
        description:
          "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      },
    ],
    additionalInfo: {
      description:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
      listItems: [
        "If you are going to use a passage",
        "Lorem ipsum you need to be sure",
        "There isn't anything embarrassing",
        "Hidden in the middle of text",
      ],
    },
  },
};
