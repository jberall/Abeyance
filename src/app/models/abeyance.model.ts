export interface Abeyance {
  id: number;
  description: string;
  effective_to: Date;
  abeyance_reference: string;
  status: boolean;
  notes: Array<string>;
}
