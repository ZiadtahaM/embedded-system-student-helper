import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Question, QuestionStatus, Category } from './types';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { CommonModule } from '@angular/common';

interface TopicStat {
  category: Category;
  total: number;
  correct: number;
  percentage: number;
}

interface DashboardStats {
  total: number;
  answered: number;
  correct: number;
  accuracy: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent, QuestionCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'embedded-systems-academic-exam';
  allQuestions: Question[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: Question | undefined;
  currentQuestionStatus: QuestionStatus | undefined;
  overallStats: DashboardStats | undefined;
  topicStats: TopicStat[] | undefined;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.allQuestions = this.quizService.getQuestions();
    this.loadCurrentQuestion();
    this.updateStats();
  }

  loadCurrentQuestion(): void {
    this.currentQuestion = this.allQuestions[this.currentQuestionIndex];
    this.currentQuestionStatus = this.quizService.getQuestionStatus(this.currentQuestion.id);
  }

  updateStats(): void {
    this.overallStats = this.quizService.getOverallStats();
    this.topicStats = this.quizService.getTopicStats();
  }

  onSelectAnswer(event: { questionId: number; optionIndex: number }): void {
    this.quizService.selectAnswer(event.questionId, event.optionIndex);
    this.updateStats();
    this.loadCurrentQuestion(); // Reload to update status in card
  }

  onToggleBookmark(questionId: number): void {
    this.quizService.toggleBookmark(questionId);
    this.loadCurrentQuestion(); // Reload to update status in card
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.allQuestions.length - 1) {
      this.currentQuestionIndex++;
      this.loadCurrentQuestion();
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.loadCurrentQuestion();
    }
  }
}
