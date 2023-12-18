// /event.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EventDto } from './dto';

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

    async updateEvent(eventId: string, eventDto: EventDto) {
        return this.prisma.events.update({
            where: { id: eventId },
            data: eventDto,
        });
    }

    async getAllEventCategories() {
        return this.prisma.eventCategories.findMany();
    }

    async getAllEventDescriptions(eventId: string) {
        return this.prisma.events.findUnique({
            where: { id: eventId },
            select: { longdescription: true }, // Include only the 'longdescription' field
        });
    }

    async getAllEventTimeline(eventId: string) {
        return this.prisma.events.findUnique({
            where: { id: eventId },
            select: { timeline: true }, // Include only the 'timeline' field
        });
    }
}
