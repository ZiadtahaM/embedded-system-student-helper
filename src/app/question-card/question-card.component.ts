import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, QuestionStatus, Category } from '../types';
import { CharCodePipe } from '../char-code-pipe';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CharCodePipe],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent {
  @Input() data!: Question;
  @Input() category!: Category;
  @Input() status: QuestionStatus | undefined;
  @Output() select = new EventEmitter<{ questionId: number; optionIndex: number }>();
  @Output() toggleBookmark = new EventEmitter<number>();

  get isAnswered(): boolean {
    return this.status?.selectedOption !== undefined && this.status.selectedOption !== null;
  }

  get isBookmarked(): boolean {
    return this.status?.isBookmarked || false;
  }

  onSelect(questionId: number, optionIndex: number): void {
    this.select.emit({ questionId, optionIndex });
  }

  onToggleBookmark(questionId: number): void {
    this.toggleBookmark.emit(questionId);
  }
}
