import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercice, ExerciceDocument } from '../schemas/exercice.schema';
import { ExerciceService } from '../program/exercice.service';
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

  private async selectExercices(mood: string): Promise<ExerciceDocument[]> {
    let warmups = await this.exerciceService.findByTypeNSport(
      'warmup',
      this.sport,
    );
    let workouts = await this.exerciceService.findByTypeNSport(
      'exercise',
      this.sport,
    );
    let stretches = await this.exerciceService.findByTypeNSport(
      'streching',
      this.sport,
    );

    warmups = warmups.filter((warmup) => warmup.level === this.userLevel);
    workouts = workouts.filter((workout) => workout.level === this.userLevel);
    stretches = stretches.filter((strech) => strech.level === this.userLevel);
    
    if(mood == "tired"){
      warmups = ProgramGenerator.getRandomSubset(warmups, 2);
      workouts = ProgramGenerator.getRandomSubset(workouts, 3);
      stretches = ProgramGenerator.getRandomSubset(stretches, 4);
    }
    else if (mood == "good"){
      warmups = ProgramGenerator.getRandomSubset(warmups, 3);
      workouts = ProgramGenerator.getRandomSubset(workouts, 5);
      stretches = ProgramGenerator.getRandomSubset(stretches, 5);
    }
    else{
      warmups = ProgramGenerator.getRandomSubset(warmups, 5);
      workouts = ProgramGenerator.getRandomSubset(workouts, 7);
      stretches = ProgramGenerator.getRandomSubset(stretches, 5);
    }

    let exercises = [warmups, workouts, stretches]
    return [].concat(...exercises)
  }

  public async generatePrograms(mood: string): Promise<CreateProgramDto[]> {
    const exercises = await this.selectExercices(mood);
    let programs: CreateProgramDto[] = [];
    programs.push({
      difficulty: this.userLevel,
      schedule: this.schedule,
      exercices: exercises,
      done: false
    })

    return programs;
  }
}
