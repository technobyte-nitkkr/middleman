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

