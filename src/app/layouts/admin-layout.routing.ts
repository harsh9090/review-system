import { Routes } from '@angular/router';
import { AddNewProductComponent } from 'app/product/add-new-product/add-new-product.component';
import { AddedProductComponent } from 'app/product/added-product/added-product.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'add-product',  component: AddNewProductComponent },
    { path: 'show-products',  component: ShowAllProductsComponent },
    {path: 'added-product',component:AddedProductComponent},
    {path:'view-product',component:ViewProductComponent}
];
