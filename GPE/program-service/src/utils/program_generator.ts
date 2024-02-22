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
  id_user: string;
  exerciceService: ExerciceService;

  constructor(
    @InjectModel(Exercice.name)
    schedule: string[],
    sport: string,
    exerciceService: ExerciceService,
    userLevel: string,
    id_user: string,
  ) {
    this.schedule = schedule;
    this.sport = sport;
    this.userLevel = userLevel;
    this.exerciceService = exerciceService;
    this.id_user = id_user;
  }

  private static getRandomSubset<T>(array: T[], count: number): T[] {
    // Shuffle the array and take the specified number of elements
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  private async selectExercices(): Promise<ExerciceDocument[]> {
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
    
    warmups = ProgramGenerator.getRandomSubset(warmups, 4);
    workouts = ProgramGenerator.getRandomSubset(workouts, 4);
    stretches = ProgramGenerator.getRandomSubset(stretches, 5);
    
    let exercises = [warmups, workouts, stretches]
    return [].concat(...exercises)
  }

  public async selectExerciceByMood(mood: string): Promise<ExerciceDocument[]> {
    let warmups: ExerciceDocument[] = await this.exerciceService.findByTypeNSport(
      'warmup',
      this.sport,
    );
    let workouts: ExerciceDocument[] = await this.exerciceService.findByTypeNSport(
      'exercise',
      this.sport,
    );
    let stretches: ExerciceDocument[] = await this.exerciceService.findByTypeNSport(
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
    else{
      warmups = ProgramGenerator.getRandomSubset(warmups, 5);
      workouts = ProgramGenerator.getRandomSubset(workouts, 7);
      stretches = ProgramGenerator.getRandomSubset(stretches, 5);
    }

    let exercises = [warmups, workouts, stretches]
    return <ExerciceDocument[]>[].concat(...exercises)
  }

  public async generatePrograms(): Promise<CreateProgramDto[]> {
    const exercises = await this.selectExercices();
    let programs: CreateProgramDto[] = [];
    programs.push({
      id_user: this.id_user,
      difficulty: this.userLevel,
      schedule: this.schedule,
      exercices: exercises,
      done: false,
    })

    return programs;
  }
}
