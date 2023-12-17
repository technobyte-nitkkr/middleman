// /event.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventCategoryDto, EventDto } from './dto';

@Injectable()
export class EventService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllEvents() {
        return this.prisma.events.findMany();
    }

    async createEvent(eventDto: EventDto) {
        return this.prisma.events.create({
            data: eventDto,
        });
    }

    async getAllEventCategories() {
        return this.prisma.eventCategories.findMany();
    }

    async createEventCategory(eventCategoryDto: EventCategoryDto) {
        return this.prisma.eventCategories.create({
            data: eventCategoryDto,
        });
    }

    // Implement other service methods as needed.
}
