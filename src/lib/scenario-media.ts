export interface ScenarioMediaInfo {
  image: string;
  altImages?: string[];
  video?: string;
}

export const SCENARIO_MEDIA: Record<string, ScenarioMediaInfo> = {
  transportation: {
    image: "/images/scenario-transportation.jpg",
    altImages: ["/images/scenario-basic-needs.jpg"],
    video: "/videos/scenario-transportation.mp4",
  },
  doctor: {
    image: "/images/scenario-doctor.jpg",
    altImages: ["/images/scenario-emergency.jpg"],
  },
  "job-interview": {
    image: "/images/scenario-job-interview.jpg",
    altImages: ["/images/scenario-social.jpg"],
  },
  greetings: {
    image: "/images/scenario-greetings.jpg",
    altImages: ["/images/scenario-social.jpg"],
  },
  numbers: {
    image: "/images/scenario-numbers.jpg",
  },
  colors: {
    image: "/images/scenario-colors.jpg",
  },
  "basic-needs": {
    image: "/images/scenario-basic-needs.jpg",
  },
  restaurant: {
    image: "/images/scenario-restaurant.jpg",
    altImages: ["/images/scenario-social.jpg"],
  },
  shopping: {
    image: "/images/scenario-shopping.jpg",
  },
  hotel: {
    image: "/images/scenario-hotel.jpg",
    altImages: ["/images/scenario-colors.jpg"],
  },
  emergency: {
    image: "/images/scenario-emergency.jpg",
  },
  social: {
    image: "/images/scenario-social.jpg",
    altImages: ["/images/scenario-greetings.jpg"],
  },
};

export function getScenarioMedia(slug: string | null | undefined): ScenarioMediaInfo {
  if (!slug) return { image: "/images/scenario-transportation.jpg" };
  return SCENARIO_MEDIA[slug] || { image: `/images/scenario-${slug}.jpg` };
}
