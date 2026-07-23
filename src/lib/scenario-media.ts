export interface ScenarioMediaInfo {
  image: string;
  altImages?: string[];
  video?: string;
}

export const SCENARIO_MEDIA: Record<string, ScenarioMediaInfo> = {
  transportation: {
    image: "/images/scenario-transportation.jpg",
  },
  doctor: {
    image: "/images/scenario-doctor.jpg",
  },
  "job-interview": {
    image: "/images/scenario-job-interview.jpg",
  },
  greetings: {
    image: "/images/scenario-greetings.jpg",
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
  },
  shopping: {
    image: "/images/scenario-shopping.jpg",
  },
  hotel: {
    image: "/images/scenario-hotel.jpg",
  },
  emergency: {
    image: "/images/scenario-emergency.jpg",
  },
  social: {
    image: "/images/scenario-social.jpg",
  },
};

export function getScenarioMedia(slug: string | null | undefined): ScenarioMediaInfo {
  if (!slug) return { image: "/images/onboarding-bg.jpg" };
  return SCENARIO_MEDIA[slug] || { image: `/images/scenario-${slug}.jpg`, video: undefined };
}
