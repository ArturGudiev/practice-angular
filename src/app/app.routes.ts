import { Routes } from '@angular/router';
import { A1 } from './components/animations/a1/a1';
import { A2 } from './components/animations/a2/a2';
import { A3Leave } from './components/animations/a3-leave/a3-leave';
import { A3LeaveAnswer } from './components/animations/a3-leave-answer/a3-leave-answer';

export const routes: Routes = [
    {
        path: 'a1',
        component: A1
    },
    { path: 'a2', component: A2 },
    { path: 'a3', component: A3Leave },
    { path: 'a3a', component: A3LeaveAnswer },
];
