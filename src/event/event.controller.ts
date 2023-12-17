// /event.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventDto, EventCategoryDto } from './dto/event.dto';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) { }

    @Get()
    getAllEvents() {
        return this.eventService.getAllEvents();
    }

    // @Post()
    // createEvent(@Body() eventDto: EventDto) {
    //     return this.eventService.createEvent(eventDto);
    // }

    @Get('categories')
    getAllEventCategories() {
        return this.eventService.getAllEventCategories();
    }

    // @Post('categories')
    // createEventCategory(@Body() eventCategoryDto: EventCategoryDto) {
    //     return this.eventService.createEventCategory(eventCategoryDto);
    // }

    // You can add more endpoints for other operations.
}
