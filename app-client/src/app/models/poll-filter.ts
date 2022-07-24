export class PollFilter {
  sortBy: string;
  timeFilter: string;
  page: number;
  author: string;
  participatedBy: string;

  sortByOptions: string[];
  timeFilterOptions: string[];

  constructor() {
    this.sortByOptions = ['New', 'Top'];
    this.timeFilterOptions = ['Day', 'Week', 'Month', 'Year'];
    this.sortBy = this.sortByOptions[1];
    this.timeFilter = this.timeFilterOptions[3];
    this.page = 1;
  }

  incrementPage() {
    this.page = this.page + 1;
  }

  reset() {
    this.sortBy = this.sortByOptions[1];
    this.timeFilter = this.timeFilterOptions[3];
    this.page = 1;
  }

  setSortBy(sortBy: string) {
    if (sortBy === 'New') {
      this.timeFilter = null;
    } else {
      this.timeFilter = 'Year';
    }

    this.sortBy = sortBy;
  }
}

