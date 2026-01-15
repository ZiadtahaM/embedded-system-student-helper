import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../types';

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
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() stats!: DashboardStats;
  @Input() topicStats!: TopicStat[];

  incorrect: number = 0;

  ngOnInit(): void {
    this.incorrect = this.stats.answered - this.stats.correct;
  }
}
