interface ApiResponse<T> {
  data: T[];
  links?: {
    current: string;
    last: string;
    next: string;
    self: string;
  };
  meta: {
    pagination: {
      current: number;
      last: number;
      next: number;
      records: number;
    };
  };
}
interface Dog {
  id: string;
  type: "breed";
  attributes: {
    name: string;
    description?: string;
    life?: {
      min?: number;
      max?: number;
    };
    male_weight?: {
      min: number;
      max: number;
    };
    female_weight?: {
      min: number;
      max: number;
    };
    hypoallergenic?: boolean;
  };
}
