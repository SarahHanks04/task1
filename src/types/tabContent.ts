export interface TabFeature {
  title: string;
  description: string;
}

export interface TabAdditionalInfo {
  description: string;
  listItems: string[];
}

export interface TabContentData {
  features: TabFeature[];
  additionalInfo: TabAdditionalInfo;
}
