const sampleData = {
    users: [
      {
        id: "user-1",
        name: "John Doe",
        email: "john@example.com",
        password: "yoMama69",
        picture: "john.jpg",
        mobile: "+1 123-456-7890",
        college: "Example University",
        technicalSocietyId: "society-1",
      },
      {
        id: "user-2",
        name: "Alice Smith",
        email: "alice@example.com",
        password: "JKChabra",
        picture: "alice.jpg",
        mobile: "+1 987-654-3210",
        college: "Another University",
        technicalSocietyId: "society-2",
      },
    ],
    technicalSocieties: [
      {
        id: "society-1",
        name: "Tech Society 1",
        description: "Description of Tech Society 1",
        imageUrl: "techsociety1.jpg",
        socials: {
          facebook: "facebook.com/techsociety1",
          twitter: "twitter.com/techsociety1",
        },
      
      },
      {
        id: "society-2",
        name: "Tech Society 2",
        description: "Description of Tech Society 2",
        imageUrl: "techsociety2.jpg",
        socials: {
          facebook: "facebook.com/techsociety2",
          twitter: "twitter.com/techsociety2",
        },
      },
    ],
    events: [
      {
        id: "event-1",
        name: "Tech Conference 2023",
        venue: "Conference Center",
        longdescription: "A conference on emerging technologies.",
        shortdescription: "TechConf 2023",
        timeline: {
          registrationStart: "2023-09-01T00:00:00Z",
          eventStart: "2023-10-15T09:00:00Z",
          eventEnd: "2023-10-17T17:00:00Z",
        },
        startTime: "2023-10-15T09:00:00Z",
        endTime: "2023-10-17T17:00:00Z",
        poster: "techconf2023.jpg",
        rules: ["Rule 1: Be punctual", "Rule 2: No food in the conference hall"],
        
        eventCategoriesId: "category-1",
        technicalSocietyId: "society-1",
        
      },
      {
        id: "event-2",
        name: "Hackathon 2023",
        venue: "Tech Hub",
        longdescription: "A 48-hour coding marathon.",
        shortdescription: "Hackathon 2023",
        timeline: {
          registrationStart: "2023-09-10T00:00:00Z",
          eventStart: "2023-11-05T18:00:00Z",
          eventEnd: "2023-11-07T18:00:00Z",
        },
        startTime: "2023-11-05T18:00:00Z",
        endTime: "2023-11-07T18:00:00Z",
        poster: "hackathon2023.jpg",
        rules: ["Rule 1: Bring your own laptop", "Rule 2: No sleep allowed"],
        
        eventCategoriesId: "category-2",
        technicalSocietyId: "society-2",
        
      },
    ],
    eventCategories: [
      {
        id: "category-1",
        type: "Technology",
        imgUrl: "technology.jpg",
        icon: "tech-icon.png",
      },
      {
        id: "category-2",
        type: "Coding",
        imgUrl: "coding.jpg",
        icon: "code-icon.png",
      },
    ],
    eventCoordinators: [
      {
        id: "coordinator-1",
        name: "Coordinator 1",
        email: "Iamcock@bing.cum",
        password: "Icancum69",
        technicalSocietyId: "society-1",
        
      },
    ],
    eventDoubts: [
      {
        id: "doubt-1",
        Question: "How do I register for Tech Conference 2023?",
        eventsId: "event-1",
        eventCoordinatorsId: "coordinator-1",
      },
    ],
    sponsor: [
      {
        id: "sponsor-1",
        name: "Tech Corp",
        imageUrl: "techcorp.jpg",
        sponsorWebsite: "techcorp.com",
        sponsorCategoriesId: "category-1",
      },
    ],
    sponsorCategories: [
      {
        Id: "category-1",
        category: "Technology",
      },
    ],
    lectures: [
      {
        id: "lecture-1",
        name: "Future of AI",
        longdesc: "A discussion on the future of artificial intelligence.",
        shortdesc: "AI Talk",
        imageUrl: "ai-talk.jpg",
        timeline: {
          start: "2023-09-15T15:00:00Z",
          end: "2023-09-15T16:30:00Z",
        },
        socials: {
          facebook: "facebook.com/aitalk",
          twitter: "twitter.com/aitalk",
        },
      },
    ],
    faqs: [
      {
        id: "faq-1",
        question: "How can I participate in the hackathon?",
        answer: "To participate in the hackathon, you need to register on our website.",
      },
    ],
    announcements: [
      {
        id: "announcement-2",
        content: "Important announcement for Tech Society 2 members.",
        time: "2023-08-22T10:00:00Z",
        event: "Tech Society 2 Announcement",
        technicalSocietyId: "society-2",
      },
    ],
  };


  module.exports = sampleData;
  