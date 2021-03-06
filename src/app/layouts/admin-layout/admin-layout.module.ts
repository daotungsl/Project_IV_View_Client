import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { VoucherModule } from 'src/app/modules/shop-view/vouchers/vouchers.module';
import { ShopsModule } from 'src/app/modules/shop-view/shops/shops.module';
import { ShopAuthGuard } from 'src/app/auth/auth-shop.guard';

@NgModule({
  imports: [
    SharedModule,
    // CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    // FormsModule,
    // HttpClientModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    NgbModule,
    VoucherModule,
    ShopsModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent
  ],
  providers: [
    ShopAuthGuard
  ],
})

export class AdminLayoutModule {}
