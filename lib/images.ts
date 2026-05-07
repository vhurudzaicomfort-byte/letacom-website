// Local media assets curated for Letacom — see public/media/.
// Filenames are semantic so context stays readable in the JSX.
// External Unsplash URLs are preserved as fallbacks for routes not yet
// updated to local imagery.

export const images = {
  // Heroes
  heroMain: "/media/hero-kilimanjaro.jpg", // Built for Africa — Kilimanjaro + acacia
  heroAbout: "/media/about-worker.jpg", // African industrial worker, hard hat
  heroIndustries: "/media/heritage-savanna.jpg", // Savanna sunset — Cape-to-Cairo evocation
  heroSolutions: "/media/industry-manufacturing.jpg", // Factory assembly line
  heroProducts: "/media/industry-breweries.jpg", // Brewery tanks
  heroContact: "/media/engagement-meeting.jpg", // Conference room, African team
  heroRFQ: "/media/team-meeting.jpg", // Diverse team in glass-walled meeting room

  // Industry cards (home grid)
  brewery: "/media/industry-breweries.jpg",
  manufacturing: "/media/industry-manufacturing.jpg",
  logistics: "/media/industry-transport.jpg", // Doosan forklift + worker
  distribution: "/media/industry-distribution.jpg", // POS terminal — point-of-sale

  // Featured solution
  draughtSystem: "/media/featured-draught-poster.jpg", // B&W bar glasses, moody
  draughtPourVideo: "/media/video/draught-pour.mp4", // Close-up barman pouring lager
  heritageBarrelsVideo: "/media/video/heritage-barrels.mp4", // Wooden barrels lined up

  // Heritage / About
  heritageSavanna: "/media/heritage-savanna.jpg",
  heritageAfricaFlags: "/media/heritage-africa-flags.jpg",
  aboutWorker: "/media/about-worker.jpg",

  // Partners / Engagement
  partnersHandshake: "/media/partners-handshake.jpg",
  engagementMeeting: "/media/engagement-meeting.jpg",
  teamMeeting: "/media/team-meeting.jpg",
  itCollaboration: "/media/it-collaboration.jpg",

  // Product / consumable imagery
  consumableGlassware: "/media/consumable-glassware.jpg", // Stack of beer mugs
  consumableGlasses: "/media/consumable-glasses.jpg",
  breweriesKegs: "/media/breweries-kegs.jpg",
  equipmentExcavator: "/media/equipment-excavator.jpg",
  lifestyleFamily: "/media/lifestyle-family.jpg",

  // Product categories — fallback Unsplash for items without local imagery yet
  equipment: "/media/industry-manufacturing.jpg",
  accessories: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
  spareParts: "https://images.unsplash.com/photo-1530124566582-a45a7e9a028e?w=800&q=80&auto=format&fit=crop",
  tools: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&q=80&auto=format&fit=crop",
  systems: "/media/featured-draught-poster.jpg",
  itHardware: "/media/it-collaboration.jpg",
  brandedConsumables: "/media/consumable-glassware.jpg",

  // Product items — generic industrial fallback grid
  productGeneric: [
    "/media/industry-manufacturing.jpg",
    "/media/equipment-excavator.jpg",
    "/media/industry-breweries.jpg",
    "/media/breweries-kegs.jpg",
    "/media/industry-transport.jpg",
    "/media/industry-distribution.jpg",
    "/media/it-collaboration.jpg",
    "/media/consumable-glassware.jpg",
  ],

  // About page
  aboutTeam: "/media/team-meeting.jpg",
} as const;
