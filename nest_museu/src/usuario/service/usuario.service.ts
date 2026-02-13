import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  listar() {
    return `meu primeiro servico no nest `;
  }

  porId(id: number) {
    return `o usuario com id= ${id} foi localizado com sucesso`;
  }

  salvar() {
    return 'salvando o registro de usuario';
  }

  atualizar(id: number) {
    return `alterando o registro do usuario ${id}`;
  }

  delete(id: number) {
    return `o usuario com id= ${id} foi deletado`;
  }
}
