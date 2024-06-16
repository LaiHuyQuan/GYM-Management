// src/domain/repositories/feedback.repository.interface.ts
import { Feedback } from '../entities/feedback.entity';
import { CreateFeedbackDto } from 'src/application/dtos/create-feedback.dto';
import { UpdateFeedbackDto } from 'src/application/dtos/update-feedback.dto';

export interface IFeedbackRepository {
  createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback>;
  getAllFeedback(): Promise<Feedback[]>;
  getFeedbackById(id: string): Promise<Feedback>;
  updateFeedback(
    id: string,
    updateFeedbackDto: UpdateFeedbackDto,
  ): Promise<Feedback>;
  deleteFeedback(id: string): Promise<void>;
}
