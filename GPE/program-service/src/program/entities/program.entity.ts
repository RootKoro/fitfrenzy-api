import { Exercice } from "./exercice.entity";

export class Program {
    difficulty: string;
    schedule: string[];
    exercices: Exercice[];
    done: boolean;
    created_at: Date;
    updated_at: Date;
}
