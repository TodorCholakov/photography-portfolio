import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleriesComponent } from "./galleries/galleries.component";
import { HomePageComponent } from "./home-page/home-page.component";

const appRoutes: Routes =[
    {path: '/', component: HomePageComponent},
    {path: '/gallery', component: GalleriesComponent},
    {path: '/contact', component: GalleriesComponent},
    {path: '/about-me', component: GalleriesComponent},

]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}