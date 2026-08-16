export type KenBurnsMotionType =
  | "zoom-in"
  | "zoom-out"
  | "pan-left"
  | "pan-right"
  | "pan-up";

export interface ScenarioMediaInfo {
  image: string;
  altImages?: string[];
  motion?: KenBurnsMotionType;
  video?: string;
}

export const SCENARIO_MEDIA: Record<string, ScenarioMediaInfo> = {
  transportation: {
    image: "/images/scenario-transportation.jpg",
    altImages: ["/images/scenario-basic-needs.jpg"],
    motion: "pan-right",
  },
  doctor: {
    image: "/images/scenario-doctor.jpg",
    altImages: ["/images/scenario-emergency.jpg"],
    motion: "zoom-in",
  },
  "job-interview": {
    image: "/images/scenario-job-interview.jpg",
    altImages: ["/images/scenario-social.jpg"],
    motion: "pan-up",
  },
  greetings: {
    image: "/images/scenario-greetings.jpg",
    altImages: ["/images/scenario-social.jpg"],
    motion: "zoom-in",
  },
  numbers: {
    image: "/images/scenario-numbers.jpg",
    motion: "pan-left",
  },
  colors: {
    image: "/images/scenario-colors.jpg",
    motion: "zoom-out",
  },
  "basic-needs": {
    image: "/images/scenario-basic-needs.jpg",
    motion: "pan-right",
  },
  restaurant: {
    image: "/images/scenario-restaurant.jpg",
    altImages: ["/images/scenario-social.jpg"],
    motion: "zoom-in",
  },
  shopping: {
    image: "/images/scenario-shopping.jpg",
    motion: "pan-left",
  },
  hotel: {
    image: "/images/scenario-hotel.jpg",
    altImages: ["/images/scenario-colors.jpg"],
    motion: "pan-up",
  },
  emergency: {
    image: "/images/scenario-emergency.jpg",
    motion: "zoom-in",
  },
  social: {
    image: "/images/scenario-social.jpg",
    altImages: ["/images/scenario-greetings.jpg"],
    motion: "pan-right",
  },
};

export function getScenarioMedia(slug: string | null | undefined): ScenarioMediaInfo {
  if (!slug) return { image: "/images/scenario-transportation.jpg", motion: "pan-right" };
  return SCENARIO_MEDIA[slug] || { image: `/images/scenario-${slug}.jpg`, motion: "zoom-in" };
}
