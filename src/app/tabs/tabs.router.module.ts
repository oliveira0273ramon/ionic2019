import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'listUsuario',
        children: [
          {
            path: '',
            loadChildren: '../pages/list-usuario/list-usuario.module#ListUsuarioPageModule'
          }
        ]
      },
      {
        path: 'listEvento',
        children: [
          {
            path: '',
            loadChildren: '../pages/list-evento/list-evento.module#ListEventoPageModule'
          }
        ]
      },
      {
        path: 'addUsuario',
        children: [
          {
            path: '',
            loadChildren: '../pages/add-usuario/add-usuario.module#AddUsuarioPageModule'
          }
        ]
      },
      {
        path: 'addUsuario/:key',
        children: [
          {
            path: '',
            loadChildren: '../pages/add-usuario/add-usuario.module#AddUsuarioPageModule'
          }
        ]
      },
      {
        path: 'addEvento',
        children: [
          {
            path: '',
            loadChildren: '../pages/add-evento/add-evento.module#AddEventoPageModule'
          }
        ]
      },
      {
        path: 'perfilUsuario/:key',
        children: [
          {
            path: '',
            loadChildren: '../pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule'
          }
        ]
      },
      {
        path: 'perfilEvento/:key',
        children: [
          {
            path: '',
            loadChildren: '../pages/perfil-evento/perfil-evento.module#PerfilEventoPageModule'
          }
        ]
      },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: '../tab3/tab3.module#Tab3PageModule'
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
