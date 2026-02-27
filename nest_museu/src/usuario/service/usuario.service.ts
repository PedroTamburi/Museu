import { Injectable } from '@nestjs/common';
import { UsuarioConverter } from '../dto/converter/usuario.converter';
import { UsuarioResponse } from '../dto/response/usuario.response';
import { TABELA_USUARIO } from './tabela.usuario';

@Injectable()
export class UsuarioService {
  listar(): UsuarioResponse[] {
    return UsuarioConverter.toListarUsuarioResponse(TABELA_USUARIO);
  }

  porId(id: number): UsuarioResponse | null {
    const usuarioCadastrado = TABELA_USUARIO.find((usuario) => usuario.idUsuario === id);
    if (usuarioCadastrado) {
      return UsuarioConverter.toUsuarioResponse(usuarioCadastrado);
    }

    return null;
  }

  salvar() {
    return 'salvando o registro de usuario';
  }

  atualizar(id: number) {
    return `alterando o registro do usuario ${id}`;
  }

  excluir(id: number): string | null {
    const usuarioCadastrado = TABELA_USUARIO.findIndex((usuario) => usuario.idUsuario === id);
    TABELA_USUARIO.splice(usuarioCadastrado, 1);
    if (usuarioCadastrado > -1) {
      return 'Usuario excluido com sucesso';
    }
    return null;
  }
}
