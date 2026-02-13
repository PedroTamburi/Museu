import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';

@Controller(`usuario`)
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  listar() {
    return this.usuarioService.listar();
  }
  @Get(':id')
  poId(@Param('id') id: number) {
    return this.usuarioService.porId(id);
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
  deletar(@Param('id') id: number) {
    return this.usuarioService.delete(id);
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
