import { IpfsService } from './../../../services/ipfs.service';
import { EthercontractService } from './../../../services/ethercontract.service';
import { ProductsTableComponent } from './../../show-all-products/products-table/products-table.component';
import { ShowAllProductsComponent } from './../../show-all-products/show-all-products.component';
import { AddedProductComponent } from './../../added-product/added-product.component';
import { ImageCropDialogComponent } from './../../image-crop-dialog/image-crop-dialog.component';
import { AddNewProductComponent } from './../../add-new-product/add-new-product.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ImageCropperModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    NotificationsComponent,
    AddNewProductComponent,
    ImageCropDialogComponent,
    AddedProductComponent,
    ShowAllProductsComponent,
    ProductsTableComponent
  ],
  providers: [ EthercontractService, IpfsService ]
})

export class AdminLayoutModule {}
