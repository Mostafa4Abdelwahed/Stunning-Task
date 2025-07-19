import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { IdeasService } from './ideas.service';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  async create(@Body() body: { idea: string }) {
    const chatId = await this.ideasService.storeSectionsWithTextIdea(body.idea);
    return { id: chatId };
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.ideasService.getSectionsById(id);
  }
}
