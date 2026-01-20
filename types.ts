
export interface Attraction {
  id: string;
  name: string;
  description: string;
  time: string;
  image: string;
}

export interface FoodItem {
  name: string;
  description: string;
  recommendation: string;
}

export interface Accommodation {
  name: string;
  type: string;
  features: string[];
}

export interface DayPlan {
  title: string;
  morning: Attraction[];
  afternoon: Attraction[];
  evening: Attraction[];
}

export interface TravelPlan {
  days: DayPlan[];
  foods: FoodItem[];
  accommodations: Accommodation[];
}
