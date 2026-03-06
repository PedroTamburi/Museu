import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { ResponseBuilder } from '../../commons/response/builder.response';
import { UsuarioResponse } from '../dto/response/usuario.response';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioRequest } from '../dto/request/usuario.request';

@Controller(`usuario`)
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  listar(@Req() req: Request) {
    const response = this.usuarioService.listar();
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Listagem de usuarios')
      .path(req.path)
      .metodo(req.method)
      .dados(response)
      .build();
  }
  @Get(':id')
  poId(@Param('id') id: number, @Req() req: Request) {
    const response = this.usuarioService.porId(id);
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Usuario localizado no sistema')
      .path(req.path)
      .metodo(req.method)
      .dados(response)
      .build();
  }

  @Post()
  salvar(@Body() usuarioRequest: UsuarioRequest, @Req() req: Request) {
    const response = this.usuarioService.salvar(usuarioRequest);
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Usuario registrado com sucesso')
      .path(req.path)
      .metodo(req.method)
      .dados(response)
      .build();
  }

  @Put(':id')
  ataulizar(@Param('id') id: number, @Body() usuarioRequest: UsuarioRequest, @Req() req: Request) {
    const response = this.usuarioService.atualizar(id, usuarioRequest);
    return ResponseBuilder.status<UsuarioResponse>(HttpStatus.OK)
      .mensagem('Usuario alterado com sucesso')
      .path(req.path)
      .metodo(req.method)
      .dados(response)
      .build();
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
