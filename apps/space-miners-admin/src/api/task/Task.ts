export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  typeField?: "Option1" | null;
  reward: number | null;
};
