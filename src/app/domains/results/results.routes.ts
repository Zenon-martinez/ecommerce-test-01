import { MainComponent } from "./pages/main/main.component";
import { ResultsComponent } from "./pages/results/results.component";

export const RESULTS_ROUTES = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }
];
