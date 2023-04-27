export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      "new-meal": undefined;
      "meal-detail": {
        [key: string]: [value: string];
      };
      "edit-meal": {
        [key: string]: [value: string];
      };
      feedback: {
        type: "onDiet" | "offDiet";
      };
    }
  }
}
