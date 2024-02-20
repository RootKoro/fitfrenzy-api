export class Exercice {
  label: string;
  type: string; /* warmup / exercice / streching */
  level: number;
  sports: string[];
  media_path: string;
  description: string;
  chrono: boolean;
  time_in_sec: number;
  reps: number;
  rest: number;
  series: number;
}
