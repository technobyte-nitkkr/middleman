// /dto/event.dto.ts

export class EventDto {
    readonly name: string;
    readonly venue: string;
    readonly longdescription: string;
    readonly shortdescription: string;
    readonly timeline: Record<string, any>;
    readonly startTime: Date;
    readonly endTime: Date;
    readonly poster: string;
    readonly rules: string[];
}

export class EventCategoryDto {
    readonly type: string;
    readonly imgUrl: string;
    readonly icon: string;
}

// You can create DTOs for other models as needed.
