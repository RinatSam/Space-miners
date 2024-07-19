export type Resource = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  value: number | null;
  quantity: number | null;
  typeField?: "Option1" | null;
  name: string | null;
};
