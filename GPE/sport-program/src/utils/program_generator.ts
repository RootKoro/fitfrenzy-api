import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercice, ExerciceDocument } from '../schemas/exercice.schema';
import { ExerciceService } from '../exercices/exercice.service';
import { CreateProgramDto } from '../program/dto/create-program.dto';

@Injectable()
export class ProgramGenerator {
  schedule: string[];
  sport: string;
  exercices: Promise<ExerciceDocument[]>;
  userLevel: string;
  exerciceService: ExerciceService;

  constructor(
    @InjectModel(Exercice.name)
    schedule: string[],
    sport: string,
    exerciceService: ExerciceService,
    userLevel: string,
  ) {
    this.schedule = schedule;
    this.sport = sport;
    this.userLevel = userLevel;
    this.exerciceService = exerciceService;
  }

  private static getRandomSubset<T>(array: T[], count: number): T[] {
    // Shuffle the array and take the specified number of elements
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  private async selectExercices(): Promise<any> {
    let warmups = await this.exerciceService.findByTypeNSport(
        'warmup',
        this.sport,
      );
    warmups = warmups.filter((warmup) => warmup.level === this.userLevel);
    warmups = ProgramGenerator.getRandomSubset(warmups, 2);

    let exs = await this.exerciceService.findByTypeNSport(
      'exercise',
      this.sport,
    );
    exs = exs.filter((exercice) => exercice.level === this.userLevel);
    exs = ProgramGenerator.getRandomSubset(
      exs,
      Math.floor(Math.random() * (6 - 3 + 1)) + 3,
    );

    let strs = await this.exerciceService.findByTypeNSport(
      'strchings',
      this.sport,
    );
    strs = strs.filter((streching) => streching.level === this.userLevel);
    strs = ProgramGenerator.getRandomSubset(strs, 5);

    return {
      warmups: warmups,
      exs: exs,
      strs: strs,
    };
  }

  public async generatePrograms(): Promise<CreateProgramDto[]> {
    const exercices = await this.selectExercices();
    let programs: CreateProgramDto[] = [];
    this.schedule.forEach((time) => {
      programs.push({
        type: this.userLevel,
        program: JSON.stringify({
          time: time,
          exercices: exercices,
        }),
      });
    });

    return programs;
  }
}
