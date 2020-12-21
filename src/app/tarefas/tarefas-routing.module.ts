import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefasComponent,
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefasComponent,
  },
];
