import { Routes } from '@angular/router';
import { RoleplayComponent } from './roleplay/roleplay.component';
import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { MakingoffComponent } from './makingoff/makingoff.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'roleplay', component: RoleplayComponent },
    { path: 'credits', component: CreditsComponent },
    { path: 'makingoff', component: MakingoffComponent }
];
