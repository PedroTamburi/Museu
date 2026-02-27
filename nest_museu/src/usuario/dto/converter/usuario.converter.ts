import { plainToInstance } from 'class-transformer';
import { Usuario } from '../../entities/usuario.entity';
import { TABELA_USUARIO } from '../../service/tabela.usuario';
import { UsuarioResponse } from '../response/usuario.response';

export class UsuarioConverter {
  static toUsuarioResponse(usuario: Usuario): UsuarioResponse {
    return plainToInstance(UsuarioResponse, usuario, {
      excludeExtraneousValues: true,
    });
  }

  static toListarUsuarioResponse(listaUsuario: typeof TABELA_USUARIO = []): UsuarioResponse[] {
    return plainToInstance(UsuarioResponse, listaUsuario, {
      excludeExtraneousValues: true,
    });
  }
}
