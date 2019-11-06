import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
// import { ViewMembershipDataComponent } from './view-membership-data/view-membership-data.component';
// import { PayrollApplicationComponent } from './payroll-application/payroll-application.component';
// import { CreditWithdrawalComponent } from './credit-withdrawal/credit-withdrawal.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule
  ],
  declarations: [
    PagesComponent,
    //  ViewMembershipDataComponent,
    // PayrollApplicationComponent,
    // CreditWithdrawalComponent
  ],
})
export class PagesModule {
}
