import { Controller, Delete, Get, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ResponseBuilder } from '../../commons/response/builder.response';
import { UsuarioResponse } from '../dto/response/usuario.response';
import { UsuarioService } from '../service/usuario.service';

@Controller(`usuario`)
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  listar(@Req() req: Request) {
    const response = this.usuarioService.listar();
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Listagem de usuarios')
      .path(req.path)
      .dados(response)
      .build();
  }
  @Get(':id')
  poId(@Param('id') id: number, @Req() req: Request) {
    const response = this.usuarioService.porId(id);
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Listagem de usuarios')
      .path(req.path)
      .dados(response)
      .build();
  }

  @Post()
  salvar() {
    return this.usuarioService.salvar();
  }

  @Put(':id')
  update(@Param('id') id: number) {
    return this.usuarioService.atualizar(id);
  }

  @Delete(':id')
  deletar(@Param('id') id: number, @Req() req: Request) {
    const response = this.usuarioService.excluir(id);
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.NO_CONTENT).mensagem(response).path(req.path).build();
  }
}

/*
 controller - criar a rota do recurso - usuario define o prefixo
 get - mapear para /usuario - listar tudo
 get (`id`) - mapear para /usuario/id - listar o objeto especifico 
 Post() - criar o objeto usuario na rota /usuario
 Put(`id`) - atualizar o usuario na rota /usuario/id
 Patch()
 delete(`id`) excluir o objeto usuario na rota /usuario/id 
*/
