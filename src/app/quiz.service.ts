import { Injectable } from '@angular/core';
import { Question, QuestionStatus, Category } from './types';
import { questions as rawQuestions } from './data/questions';

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

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions: Question[] = rawQuestions;
  private questionStatuses: Map<number, QuestionStatus> = new Map();

  constructor() {
    this.questions.forEach((q) => {
      this.questionStatuses.set(q.id, { selectedOption: null, isCorrect: false, isBookmarked: false });
    });
  }

  getQuestions(): Question[] {
    return [...this.questions];
  }

  getQuestion(id: number): Question | undefined {
    return this.questions.find((q) => q.id === id);
  }

  getQuestionStatus(id: number): QuestionStatus | undefined {
    return this.questionStatuses.get(id);
  }

  selectAnswer(questionId: number, optionIndex: number): void {
    const question = this.getQuestion(questionId);
    if (!question) return;

    const status = this.questionStatuses.get(questionId);
    if (status && status.selectedOption === null) {
      status.selectedOption = optionIndex;
      status.isCorrect = question.correctAnswer === optionIndex;
      this.questionStatuses.set(questionId, status);
    }
  }

  toggleBookmark(questionId: number): void {
    const status = this.questionStatuses.get(questionId);
    if (status) {
      status.isBookmarked = !status.isBookmarked;
      this.questionStatuses.set(questionId, status);
    }
  }

  getOverallStats(): DashboardStats {
    let total = this.questions.length;
    let answered = 0;
    let correct = 0;

    this.questionStatuses.forEach((status) => {
      if (status.selectedOption !== null) {
        answered++;
        if (status.isCorrect) {
          correct++;
        }
      }
    });

    const accuracy = answered > 0 ? (correct / answered) * 100 : 0;

    return {
      total,
      answered,
      correct,
      accuracy,
    };
  }

  getTopicStats(): TopicStat[] {
    const topicMap = new Map<Category, { total: number; correct: number }>();

    // Initialize topic map with all categories
    const categories: Category[] = ['Architecture', 'Memory', 'Protocols', 'Real-Time', 'Hardware', 'General'];
    categories.forEach(cat => topicMap.set(cat, { total: 0, correct: 0 }));


    this.questions.forEach((question) => {
      // Assuming each question has a category. If not, default to 'General'
      const category: Category = (question as any).category || 'General'; 
      const status = this.questionStatuses.get(question.id);

      const currentStats = topicMap.get(category) || { total: 0, correct: 0 };
      currentStats.total++;
      if (status?.isCorrect) {
        currentStats.correct++;
      }
      topicMap.set(category, currentStats);
    });

    const topicStats: TopicStat[] = [];
    topicMap.forEach((stats, category) => {
      const percentage = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
      topicStats.push({ category, ...stats, percentage });
    });

    return topicStats;
  }
}
