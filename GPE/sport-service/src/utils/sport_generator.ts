import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sport, SportDocument } from 'src/schemas/sport.schema';
import { SportsService } from 'src/sports/sports.service';

@Injectable()
export class SportGenerator {
  sportsService: SportsService;
  answers: string[];

  constructor(
    @InjectModel(Sport.name)
    sportsService: SportsService,
    answers: string[],
  ) {
    this.answers = answers;
    this.sportsService = sportsService;
  }

  private static getRandomSubset<T>(array: T[], count: number): T[] {
    // Shuffle the array and take the specified number of elements
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  private async getSports(): Promise<SportDocument[]> {
    let matching_sports = await this.sportsService.findByTypeNDifficulty(
      this.answers[0],
      this.answers[1],
    );
    return matching_sports;
  }

  public async generateSport(): Promise<SportDocument> {
    let matching_sports = await this.getSports();
    let result = SportGenerator.getRandomSubset(matching_sports, 1)[0];

    return result;
  }
}
