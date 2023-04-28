export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      "new-meal": undefined;
      "meal-detail": {
        id: string;
      };
      "edit-meal": {
        id: string;
      };
      feedback: {
        type: "onDiet" | "offDiet";
      };
    }
  }
}
