// /event.controller.ts
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) { }

    @Get()
    getAllEvents() {
        return this.eventService.getAllEvents();
    }

    @Post()
    createEvent(@Body() eventDto: EventDto) {
        return this.eventService.createEvent(eventDto);
    }

    @Put('/:id')
    updateEvent(@Param('id') eventId: string, @Body() eventDto: EventDto) {
        return this.eventService.updateEvent(eventId, eventDto);
    }

    @Get('categories')
    getAllEventCategories() {
        return this.eventService.getAllEventCategories();
    }

    @Get('description/:id')
    getAllEventDescriptions(@Param('id') eventId: string) {
        return this.eventService.getAllEventDescriptions(eventId);
    }

    @Get('timeline/:id')
    getEventTimeline(@Param('id') eventId: string) {
        return this.eventService.getAllEventTimeline(eventId);
    }
}
