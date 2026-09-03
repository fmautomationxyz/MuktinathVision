// --- 1. THE DATA DATABASE ---
const tourPackages = {
  everest: {
    title: "Everest Base Camp Trek",
    subtitle: "14 Night 15 Days - The steps to heaven",
    price: 1200,
    images: [
      "../images/Everest Base Camp.jpg",
      "../images/Everest Base Camp1.jpg",
      "../images/Everest Base Camp2.jpg",
      "../images/Everest Base Camp3.jpg",
    ],
    overview:
      "The Everest Base Camp Trek is a once-in-a-lifetime adventure that takes you to the foot of the world's highest mountain. Experience the Sherpa culture and the breathtaking Himalayas.",
    highlights: [
      "Reach Everest Base Camp at 5,364m",
      "Sunrise from Kala Patthar",
      "Explore Namche Bazaar",
      "Visit Tengboche Monastery",
    ],
    facts: [
      "Duration: 15 Days",
      "Max Altitude: 5,545m",
      "Difficulty: Hard",
      "Accommodation: Tea House",
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival in Kathmandu" },
      { day: "Day 2", desc: "Fly to Lukla and Trek to Phakding" },
      { day: "Day 3", desc: "Trek to Namche Bazaar" },
      { day: "Day 4", desc: "Acclimatization Day" },
      { day: "Day 9", desc: "Reach Everest Base Camp" },
      { day: "Day 15", desc: "Departure" },
    ],
    included: [
      "All Permits",
      "Guide & Porter",
      "Meals on Trek",
      "Kathmandu-Lukla Flights",
    ],
    excluded: ["International Flights", "Visa Fees", "Personal Expenses"],
    terms: [
      "<strong>Booking & Payment:</strong> 30% advance payment required at the time of booking. Full payment must be made 15 days before trek start date.",
      "<strong>Cancellation Policy:</strong> Cancellations made 30+ days before departure: 25% fee. 15-30 days: 50% fee. Less than 15 days: 100% fee.",
      "<strong>Travel Insurance:</strong> Comprehensive travel insurance covering high-altitude trekking (up to 6000m) is mandatory for all participants.",
      "<strong>Health Requirements:</strong> Participants must be in good physical condition. Medical certificate may be required for travelers above 65 years.",
      "<strong>Weather Conditions:</strong> Itinerary may be modified due to weather conditions, natural disasters, or unforeseen circumstances beyond our control.",
      "<strong>Liability:</strong> Honest Travel Tours acts only as an agent and shall not be liable for any injury, damage, loss, accident, or delay that may occur during the trip.",
    ],
    videoUrl: "https://www.youtube.com/embed/SLmvTfiG2lo",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28261.438857363827!2d86.82520945!3d27.9880556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sEverest%20Base%20Camp%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890",
  },

  kailash: {
    title: "Kailash Mansarovar Yatra",
    subtitle: "12 Night 13 Days - By Road - The Ultimate Pilgrimage",
    price: 2000,
    images: [
      "../images/Kailash Mansarovar.jpg",
      "../images/Kailash Mansarovar1.jpg",
      "../images/Kailash Mansarovar2.jpg",
      "../images/Kailash Mansarovar3.jpg",
    ],
    overview: [
      "Mount Kailash, revered as the sacred abode of Lord Shiva, and Lake Mansarovar, believed to have been created from the mind of Lord Brahma, hold immense spiritual significance in Indian culture. This sacred journey is more than just a pilgrimage—it is a profound opportunity for devotees to reconnect with their faith, traditions, and inner self.",
      "<strong>Kailash Mansarovar Overland Tour via Kathmandu (Naylam/Kerung Border)</strong>",
      "This carefully designed 12 Night 13 Days overland journey takes you through the breathtaking landscapes of Nepal and Tibet, offering a complete spiritual experience with the sacred Kailash Parikrama and holy dip in Lake Mansarovar.",
      "<strong>Route Highlights:</strong> The journey begins in Kathmandu, travels through the Kerung border into Tibet, proceeds to the pristine Lake Mansarovar at 4,500m, and culminates in the challenging yet rewarding 3-day Kailash Parikrama (circumambulation) covering approximately 52 kilometers.",
      "<strong>Fixed Departure Dates Available:</strong> We offer multiple departures from May through September 2026, including special Full Moon dates at Mansarovar for an enhanced spiritual experience. Monthly departures ensure flexibility for pilgrims to choose dates that suit their schedule.",
    ],
    highlights: [
      "<strong>Holy Kailash Parikrama:</strong> Complete the sacred 52km circuit around Mount Kailash (6,638m), passing through Yamdhwar, Deraphuk (4,890m), and Zhuthulphuk (4,790m)",
      "<strong>Lake Mansarovar Holy Dip:</strong> Take a purifying plunge and perform Puja at the world's highest freshwater lake at 4,500m",
      "<strong>Gauri Kund:</strong> Trek to this sacred emerald lake at the highest point of the Parikrama, believed to be where Goddess Parvati bathed",
      "<strong>Darchen Base:</strong> Acclimatize at the traditional starting point of Kailash Kora at 4,600m",
      "<strong>Scenic Tibet Journey:</strong> Drive through stunning landscapes from Kerung (3,700m) to Saga (4,450m) covering the vast Tibetan plateau",
      "<strong>Full Moon Experience:</strong> Special departures timed with full moon at Mansarovar for enhanced spiritual significance",
    ],
    facts: [
      "<strong>Duration:</strong> 12 Nights 13 Days",
      "<strong>Maximum Altitude:</strong> 5,630m (Dolma La Pass during Kailash Parikrama)",
      "<strong>Difficulty Level:</strong> Strenuous (High altitude trek with challenging terrain)",
      "<strong>Trek Distance:</strong> 52km Kailash Parikrama over 3 days",
      "<strong>Best Season:</strong> May to September",
      "<strong>Accommodation:</strong> 3 Nights in Nepal Hotels + Best available Hotels/Guest Houses in Tibet",
      "<strong>Route Type:</strong> Overland journey via Kerung/Naylam Border",
      "<strong>Group Size:</strong> Fixed departure dates with organized groups",
    ],
    itinerary: [
      {
        day: "Day 1",
        desc: "Arrival in Kathmandu - Pickup from airport/bus station and transfer to hotel",
      },
      {
        day: "Day 2",
        desc: "Kathmandu sightseeing after breakfast and preparation for Kailash Tours (permits, briefing, last-minute shopping)",
      },
      {
        day: "Day 3",
        desc: "Drive from Kathmandu to Timmure Nepal Border (165km, 8 hours) - Begin journey towards Tibet",
      },
      {
        day: "Day 4",
        desc: "Drive to Kerung (40km, 3,700m) - Rest day for acclimatization after crossing border formalities",
      },
      {
        day: "Day 5",
        desc: "Drive to Saga (180km, 4,450m, 4 hours) - Continue journey across Tibetan plateau",
      },
      {
        day: "Day 6",
        desc: "Drive to Lake Mansarovar (280km, 4,500m, 6 hours) - Holy dip and Puja at the sacred lake",
      },
      {
        day: "Day 7",
        desc: "After lunch, drive to Darchen (46km, 4,600m, 2 hours) - Base camp for Kailash Parikrama preparation",
      },
      {
        day: "Day 8",
        desc: "Drive to Tarboche/Yamdhwar (8km) and trek to Deraphuk (12km, 4,890m, 6 hours) - First day of Kailash Kora with North Face darshan",
      },
      {
        day: "Day 9",
        desc: "Trek to Zhuthulphuk (22km, 4,790m, approximately 10 hours) via Dolma La Pass (5,630m) and Gauri Kund - Most challenging day crossing the highest point",
      },
      {
        day: "Day 10",
        desc: "Complete Parikrama: Trek to Chandu (3 hours) and drive to Saga/Dongpa (6 hours via Darchen) - Completion of sacred circumambulation",
      },
      {
        day: "Day 11",
        desc: "Drive back to Kerung (3,700m, 5 hours) - Return journey begins",
      },
      {
        day: "Day 12",
        desc: "Drive back to Kathmandu and transfer to hotel - Cross back into Nepal",
      },
      {
        day: "Day 13",
        desc: "Departure onwards your journey - Transfer to airport for onward travel",
      },
    ],
    included: [
      "3 Nights accommodation in Nepal hotels (choice of 3/4/5 star based on package)",
      "Best available hotels/guest houses in Tibet with full board vegetarian meals",
      "Tibet visa, entry permits, and Kailash Parikrama entry fees",
      "All transportation as per itinerary (Super Luxury Bus and supporting truck for luggage)",
      "Pack lunch during drive and Parikrama trek",
      "Experienced Indian cook providing pure vegetarian meals",
      "English and Hindi speaking Nepalese guide",
      "English speaking Chinese guide in Tibet",
      "Required Nepalese Sherpa support staff",
      "Yak and Yak-man services during Parikrama for carrying kitchen gear",
      "First aid kit and Oxygen gas cylinder",
      "Holy Lake Mansarovar Parikrama (circuit) by drive",
      "Complimentary gifts: Duffle Bag, Down Jacket, and Day Pack",
    ],
    excluded: [
      "International flight tickets to/from Kathmandu",
      "Travel insurance (mandatory and must cover high altitude trekking)",
      "Tips for guides, drivers, and support staff",
      "Personal expenses (beverages, cold drinks, phone calls, mineral water)",
      "Personal use riding horse during Parikrama",
      "Personal porter services",
      "Medical and hospital expenses (if sick during the Yatra)",
      "Rescue and emergency evacuation costs",
      "Any expenses not mentioned in the itinerary",
      "Additional expenses due to flight delays, landslides, political unrest, or natural disasters",
    ],
    costTable: {
      packageOptions: [
        {
          category: "3 Star Package",
          usdPrice: "2000 + 60000 INR",
          inrPrice: "239,200",
          inrDeposit: "60,000",
        },
        {
          category: "4 Star Package",
          usdPrice: "2000 + 65000 INR",
          inrPrice: "244,200",
          inrDeposit: "65,000",
        },
        {
          category: "5 Star Package",
          usdPrice: "2000 + 70000 INR",
          inrPrice: "249,200",
          inrDeposit: "70,000",
        },
      ],
      departureDates: [
        {
          month: "May",
          arrivalDates: "May 2, 18, 26",
          departureDates: "May 19, May 30, June 07",
          fullMoon: "May 31",
        },
        {
          month: "June",
          arrivalDates: "June 6, 17, 24",
          departureDates: "June 18, June 29, July 06",
          fullMoon: "June 29",
        },
        {
          month: "July",
          arrivalDates: "July 5, 16, 24",
          departureDates: "July 17, July 28, August 05",
          fullMoon: "July 29",
        },
        {
          month: "August",
          arrivalDates: "August 4, 15, 23",
          departureDates: "August 16, August 27, September 04",
          fullMoon: "August 28",
        },
        {
          month: "September",
          arrivalDates: "September 2, 13, 21",
          departureDates: "Sept. 14, Sept. 25, October 02",
          fullMoon: "September 26",
        },
      ],
      muktinathaAddon: {
        description:
          "Additional Muktinath Tour Along With Kailash Tours (5 Days / 4 Nights)",
        prices: [
          { category: "3 Star", inrPrice: "40,000" },
          { category: "4 Star", inrPrice: "45,000" },
          { category: "5 Star", inrPrice: "50,000" },
        ],
        highlights: [
          "Day 1: Drive to Pokhara via Manakamana Temple cable car",
          "Day 2: Flight to Jomsom, drive to Muktinath Temple, return to Jomsom",
          "Day 3: Flight back to Pokhara, afternoon sightseeing",
          "Day 4: Drive back to Kathmandu",
          "Day 5: Departure",
        ],
      },
    },
    terms: [
      "<strong>Health & Fitness:</strong> Good health and physical fitness are required for all trips. We advise you to check your health condition before booking.",
      "<strong>Travel Insurance:</strong> Travelers and trekkers must have travel insurance which covers accidents and emergency evacuation in case you need to be rescued.",
      "<strong>Booking & Payment:</strong> 30% advance of the total trip cost and a passport copy are required for flight, hotel, and Kailash permit reservations. Balance payment is due upon receipt of permits.",
      "<strong>Payment Methods & Confirmation:</strong> Payments can be made via Western Union, Bank Transfer, Visa, or Mastercard. Final confirmation will be emailed after receiving the passport copy and 30% deposit.",
      "<strong>Unforeseen Circumstances:</strong> Additional expenses due to weather, natural disasters, political movements, or permit delays must be paid by the client on the spot.",
      "<strong>Cancellation Policy:</strong> 30% fee for cancellations 4 weeks prior to departure; 60% fee 2 weeks prior. No refund thereafter or for no-shows and delayed arrivals for any reason.",
      "<strong>Trip Extension:</strong> You may extend your trip for up to one year without cancellation charges if notified 4 weeks before departure. Clients must pay any increased costs due to local price increments.",
    ],
    videoUrl: "https://www.youtube.com/embed/jYFjBDfWONE",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57014.123456789!2d81.3111!3d30.9675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997776f2b7b20cb%3A0x4e4b2b5b3b4b4b4b!2sMount%20Kailash!5e0!3m2!1sen!2snp!4v1234567890",
  },

  kathmandu: {
    title: "Kathmandu Valley Cultural Tour",
    subtitle: "7 Night 8 Days - City of Temples",
    price: 800,
    images: [
      "../images/Kathmandu.jpg",
      "../images/Kathmandu1.jpg",
      "../images/Kathmandu2.jpg",
      "../images/Kathmandu3.jpg",
    ],
    overview:
      "Explore the ancient heritage sites of Kathmandu, Patan, and Bhaktapur. A perfect blend of history, culture, and architecture.",
    highlights: ["Swayambhunath", "Pashupatinath", "Bhaktapur Durbar Square"],
    facts: [
      "Duration: 8 Days",
      "Max Altitude: 2,100m",
      "Difficulty: Easy",
      "Type: Cultural",
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival" },
      { day: "Day 2-4", desc: "Sightseeing in Valley" },
      { day: "Day 5", desc: "Nagarkot Sunrise" },
      { day: "Day 8", desc: "Departure" },
    ],
    included: ["3 Star Hotel", "Private Guide", "Entrance Fees", "Transport"],
    excluded: ["Lunch & Dinner", "Personal expenses"],
    terms: [
      "<strong>Health & Fitness:</strong> Good health and physical fitness are required for all trips. We advise you to check your health condition before booking.",
      "<strong>Travel Insurance:</strong> Travelers and trekkers must have travel insurance which covers accidents and emergency evacuation in case you need to be rescued.",
      "<strong>Booking & Payment:</strong> 30% advance of the total trip cost and a passport copy are required for flight, hotel, and Kailash permit reservations. Balance payment is due upon receipt of permits.",
      "<strong>Payment Methods & Confirmation:</strong> Payments can be made via Western Union, Bank Transfer, Visa, or Mastercard. Final confirmation will be emailed after receiving the passport copy and 30% deposit.",
      "<strong>Unforeseen Circumstances:</strong> Additional expenses due to weather, natural disasters, political movements, or permit delays must be paid by the client on the spot.",
      "<strong>Cancellation Policy:</strong> 30% fee for cancellations 4 weeks prior to departure; 60% fee 2 weeks prior. No refund thereafter or for no-shows and delayed arrivals for any reason.",
      "<strong>Trip Extension:</strong> You may extend your trip for up to one year without cancellation charges if notified 4 weeks before departure. Clients must pay any increased costs due to local price increments.",
    ],
    videoUrl: "https://www.youtube.com/embed/cIHmz4hU8S4",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64045590584!2d85.2911!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1234567890",
  },

  annapurna: {
    title: "Annapurna Circuit Trek",
    subtitle: "14 Night 15 Days - Around the Mountains",
    price: 1100,
    images: [
      "../images/Annapurna.jpg",
      "../images/Annapurna1.jpeg",
      "../images/Annapurna2.jpg",
      "../images/Annapurna3.jpeg",
    ],
    overview:
      "One of the most diverse treks in Nepal, taking you from subtropical jungles to the high arid landscape of Manang and Mustang.",
    highlights: [
      "Thorong La Pass (5416m)",
      "Muktinath Temple",
      "Diverse landscapes",
    ],
    facts: [
      "Duration: 15 Days",
      "Max Altitude: 5,416m",
      "Difficulty: Strenuous",
    ],
    itinerary: [
      { day: "Day 1", desc: "Drive to Dharapani" },
      { day: "Day 10", desc: "Cross Thorong La Pass" },
      { day: "Day 15", desc: "Back to Pokhara" },
    ],
    included: ["ACAP Permit", "TIMS Card", "Guide", "Lodges"],
    excluded: ["Drinks", "WiFi", "Battery Charging"],
    terms: [
      "<strong>Health & Fitness:</strong> Good health and physical fitness are required for all trips. We advise you to check your health condition before booking.",
      "<strong>Travel Insurance:</strong> Travelers and trekkers must have travel insurance which covers accidents and emergency evacuation in case you need to be rescued.",
      "<strong>Booking & Payment:</strong> 30% advance of the total trip cost and a passport copy are required for flight, hotel, and Kailash permit reservations. Balance payment is due upon receipt of permits.",
      "<strong>Payment Methods & Confirmation:</strong> Payments can be made via Western Union, Bank Transfer, Visa, or Mastercard. Final confirmation will be emailed after receiving the passport copy and 30% deposit.",
      "<strong>Unforeseen Circumstances:</strong> Additional expenses due to weather, natural disasters, political movements, or permit delays must be paid by the client on the spot.",
      "<strong>Cancellation Policy:</strong> 30% fee for cancellations 4 weeks prior to departure; 60% fee 2 weeks prior. No refund thereafter or for no-shows and delayed arrivals for any reason.",
      "<strong>Trip Extension:</strong> You may extend your trip for up to one year without cancellation charges if notified 4 weeks before departure. Clients must pay any increased costs due to local price increments.",
    ],
    videoUrl: "https://www.youtube.com/embed/Tp8dCAC7xJY",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3820493595!2d83.9856!3d28.5965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0x6ad7ad8c904e5f1d!2sAnnapurna%20Circuit!5e0!3m2!1sen!2snp!4v1234567890",
  },

  muktinath: {
    title: "Muktinath Pilgrimage Tour",
    subtitle: "6 Night 7 Days - Salvation Journey",
    price: 950,
    images: [
      "../images/Muktinath.jpg",
      "../images/Muktinath1.jpg",
      "../images/Muktinath2.jpeg",
      "../images/Muktinath3.jpg",
    ],
    overview:
      "A holy journey to the temple of Muktinath, sacred to both Hindus and Buddhists.",
    highlights: ["Muktinath Temple", "108 Water Spouts", "Jomsom Valley"],
    facts: ["Duration: 7 Days", "Type: Pilgrimage", "Mode: Flight/Jeep"],
    itinerary: [
      { day: "Day 1", desc: "Kathmandu to Pokhara" },
      { day: "Day 2", desc: "Fly to Jomsom" },
      { day: "Day 3", desc: "Muktinath Darshan" },
      { day: "Day 7", desc: "Return" },
    ],
    included: ["Domestic Flights", "Hotels", "Permits", "Jeep"],
    excluded: ["Horse Ride", "Donations"],
    terms: [
      "<strong>Health & Fitness:</strong> Good health and physical fitness are required for all trips. We advise you to check your health condition before booking.",
      "<strong>Travel Insurance:</strong> Travelers and trekkers must have travel insurance which covers accidents and emergency evacuation in case you need to be rescued.",
      "<strong>Booking & Payment:</strong> 30% advance of the total trip cost and a passport copy are required for flight, hotel, and Kailash permit reservations. Balance payment is due upon receipt of permits.",
      "<strong>Payment Methods & Confirmation:</strong> Payments can be made via Western Union, Bank Transfer, Visa, or Mastercard. Final confirmation will be emailed after receiving the passport copy and 30% deposit.",
      "<strong>Unforeseen Circumstances:</strong> Additional expenses due to weather, natural disasters, political movements, or permit delays must be paid by the client on the spot.",
      "<strong>Cancellation Policy:</strong> 30% fee for cancellations 4 weeks prior to departure; 60% fee 2 weeks prior. No refund thereafter or for no-shows and delayed arrivals for any reason.",
      "<strong>Trip Extension:</strong> You may extend your trip for up to one year without cancellation charges if notified 4 weeks before departure. Clients must pay any increased costs due to local price increments.",
    ],
    videoUrl: "https://www.youtube.com/embed/nHdN7Mb5tCE",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14237.123456789!2d83.8697!3d28.8176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995ee84cd817d5f%3A0xbf5b52e3f6f6f6f6!2sMuktinath%20Temple!5e0!3m2!1sen!2snp!4v1234567890",
  },

  adventure: {
    title: "Adventure Sports Package",
    subtitle: "13 Night 14 Days - Adrenaline Rush",
    price: 1500,
    images: [
      "../images/Adventure.jpg",
      "../images/Adventure1.jpg",
      "../images/Adventure2.jpg",
      "../images/Adventure3.jpg",
    ],
    overview:
      "For the thrill-seekers! Combine Rafting, Bungee Jumping, Paragliding and Jungle Safari in one trip.",
    highlights: [
      "Bungee Jump",
      "White Water Rafting",
      "Paragliding",
      "Chitwan Safari",
    ],
    facts: ["Duration: 14 Days", "Type: Adventure", "Difficulty: Moderate"],
    itinerary: [
      { day: "Day 1", desc: "Arrival" },
      { day: "Day 3", desc: "Bungee Jump" },
      { day: "Day 5", desc: "Rafting" },
      { day: "Day 8", desc: "Paragliding" },
      { day: "Day 14", desc: "Departure" },
    ],
    included: ["All Activities", "Equipment", "Instructors", "Transport"],
    excluded: ["Video/Photo Charges", "Extra Drinks"],
    terms: [
      "<strong>Health & Fitness:</strong> Good health and physical fitness are required for all trips. We advise you to check your health condition before booking.",
      "<strong>Travel Insurance:</strong> Travelers and trekkers must have travel insurance which covers accidents and emergency evacuation in case you need to be rescued.",
      "<strong>Booking & Payment:</strong> 30% advance of the total trip cost and a passport copy are required for flight, hotel, and Kailash permit reservations. Balance payment is due upon receipt of permits.",
      "<strong>Payment Methods & Confirmation:</strong> Payments can be made via Western Union, Bank Transfer, Visa, or Mastercard. Final confirmation will be emailed after receiving the passport copy and 30% deposit.",
      "<strong>Unforeseen Circumstances:</strong> Additional expenses due to weather, natural disasters, political movements, or permit delays must be paid by the client on the spot.",
      "<strong>Cancellation Policy:</strong> 30% fee for cancellations 4 weeks prior to departure; 60% fee 2 weeks prior. No refund thereafter or for no-shows and delayed arrivals for any reason.",
      "<strong>Trip Extension:</strong> You may extend your trip for up to one year without cancellation charges if notified 4 weeks before departure. Clients must pay any increased costs due to local price increments.",
    ],
    videoUrl: "https://www.youtube.com/embed/WvZn-K_CMmw",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113574.123456789!2d85.3240!3d27.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sNepal%20Adventure%20Zone!5e0!3m2!1sen!2snp!4v1234567890",
  },
};

// --- 2. GLOBAL VARIABLES ---
let basePrice = 0;
let quantity = 1;
let currentImage = 0;
let galleryImages = [];
let galleryIndicators = [];
let currentTour = null;

// --- 3. TAB CONFIGURATION ---
const tabConfig = {
  overview: {
    label: "Overview",
    isRequired: true,
    hasContent: (tour) => true,
  },
  itinerary: {
    label: "Itinerary",
    isRequired: true,
    hasContent: (tour) => tour.itinerary && tour.itinerary.length > 0,
  },
  costdates: {
    label: "Cost & Dates",
    isRequired: false,
    hasContent: (tour) => tour.costTable !== undefined,
  },
  included: {
    label: "Included",
    isRequired: true,
    hasContent: (tour) => tour.included && tour.included.length > 0,
  },
  gear: {
    label: "Gear List",
    isRequired: false,
    hasContent: (tour) => tour.gearList && tour.gearList.length > 0,
  },
  terms: {
    label: "Terms & Conditions",
    isRequired: true,
    hasContent: (tour) => true,
  },
  videos: {
    label: "Videos & Maps",
    isRequired: true,
    hasContent: (tour) => true,
  },
  enquiry: {
    label: "Enquiry",
    isRequired: true,
    hasContent: (tour) => true,
  },
};

// --- 4. INITIALIZATION ON LOAD ---
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tourId = urlParams.get("id");

  if (tourId && tourPackages[tourId]) {
    loadTourData(tourPackages[tourId]);
  } else {
    loadTourData(tourPackages["everest"]);
  }
};

// --- 5. RENDER DYNAMIC TABS ---
function renderTabs(tour) {
  const tabsContainer = document.querySelector(".info-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = "";

  let firstTabId = null;
  Object.keys(tabConfig).forEach((tabId, index) => {
    const config = tabConfig[tabId];

    if (config.isRequired || config.hasContent(tour)) {
      if (firstTabId === null) firstTabId = tabId;

      const button = document.createElement("button");
      button.className = index === 0 ? "tab active" : "tab";
      button.textContent = config.label;
      button.onclick = () => showTab(tabId);
      tabsContainer.appendChild(button);
    }
  });

  if (firstTabId) {
    showTab(firstTabId);
  }
}

// --- 6. LOAD TOUR DATA ---
function loadTourData(tour) {
  currentTour = tour;

  // Title Injection
  document.getElementById("tourTitle").textContent = tour.title;
  document.getElementById("tourSubtitle").textContent = tour.subtitle;

  // Overview Injection (Handles both Strings and Arrays)
  const overviewEl = document.getElementById("overviewText");
  if (Array.isArray(tour.overview)) {
    overviewEl.innerHTML = tour.overview
      .map(
        (paragraph) =>
          `<p style="margin-bottom: 15px; line-height: 1.6;">${paragraph}</p>`
      )
      .join("");
  } else {
    overviewEl.textContent = tour.overview;
  }

  // Price Injection
  basePrice = tour.price;
  updatePrice();

  // Gallery Injection
  const galleryContainer = document.getElementById("galleryContainer");
  const indicatorContainer = document.getElementById("galleryIndicators");

  const oldImages = galleryContainer.querySelectorAll(".gallery-image");
  oldImages.forEach((img) => img.remove());
  indicatorContainer.innerHTML = "";

  tour.images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = index === 0 ? "gallery-image active" : "gallery-image";
    img.onerror = function () {
      this.src = "https://placehold.co/600x400?text=No+Image";
    };
    const nav = galleryContainer.querySelector(".gallery-nav");
    galleryContainer.insertBefore(img, nav);

    const dot = document.createElement("div");
    dot.className = index === 0 ? "indicator active" : "indicator";
    dot.onclick = () => setImage(index);
    indicatorContainer.appendChild(dot);
  });

  galleryImages = document.querySelectorAll(".gallery-image");
  galleryIndicators = document.querySelectorAll(".indicator");

  // Lists Injection
  document.getElementById("highlightsList").innerHTML = tour.highlights
    .map((i) => `<li>${i}</li>`)
    .join("");
  document.getElementById("tripFacts").innerHTML = tour.facts
    .map((i) => `<li>${i}</li>`)
    .join("");
  document.getElementById("includedList").innerHTML = tour.included
    .map((i) => `<li>${i}</li>`)
    .join("");
  document.getElementById("excludedList").innerHTML = tour.excluded
    .map((i) => `<li>${i}</li>`)
    .join("");

  // Itinerary Injection
  document.getElementById("itineraryContent").innerHTML = tour.itinerary
    .map(
      (item) => `
        <div class="highlight-box">
            <h4 style="color: #5865f2">${item.day}</h4>
            <p>${item.desc}</p>
        </div>
    `
    )
    .join("");

  // Load optional sections
  loadCostTable(tour);
  loadGearList(tour);
  loadTerms(tour);
  loadVideosAndMaps(tour);
  loadEnquiryForm(tour);

  // Render dynamic tabs
  renderTabs(tour);
}

// --- 7. LOAD COST TABLE ---
function loadCostTable(tour) {
  if (!tour.costTable) return;

  const costData = tour.costTable;

  // Populate Package Options Table
  const costTableBody = document.getElementById("costTableBody");
  if (costTableBody) {
    costTableBody.innerHTML = costData.packageOptions
      .map(
        (pkg, index) => `
      <tr style="border-bottom: 1px solid #eee; ${
        index % 2 === 0 ? "background: #f9f9f9;" : ""
      }">
        <td style="padding: 15px; font-weight: 500;">
          <i class="fas fa-star" style="color: #ffc107;"></i> ${pkg.category}
        </td>
        <td style="padding: 15px; text-align: center; font-weight: 600; color: #5865f2;">
          ${pkg.usdPrice}
        </td>
        <td style="padding: 15px; text-align: center; font-weight: 600;">
          ₹${pkg.inrPrice}
        </td>
        <td style="padding: 15px; text-align: center; color: #28a745; font-weight: 600;">
          ₹${pkg.inrDeposit}
        </td>
      </tr>
    `
      )
      .join("");
  }

  // Populate Departure Dates Table
  const datesTableBody = document.getElementById("datesTableBody");
  if (datesTableBody) {
    datesTableBody.innerHTML = costData.departureDates
      .map(
        (date, index) => `
      <tr style="border-bottom: 1px solid #eee; ${
        index % 2 === 0 ? "background: #f9f9f9;" : ""
      }">
        <td style="padding: 15px; font-weight: 600; color: #5865f2;">
          <i class="fas fa-calendar-alt"></i> ${date.month}
        </td>
        <td style="padding: 15px; text-align: center;">
          ${date.arrivalDates}
        </td>
        <td style="padding: 15px; text-align: center;">
          ${date.departureDates}
        </td>
        <td style="padding: 15px; text-align: center; font-weight: 600;">
          <i class="fas fa-moon" style="color: #ffd700;"></i> ${date.fullMoon}
        </td>
      </tr>
    `
      )
      .join("");
  }

  // Populate Muktinath Add-on Information
  if (costData.muktinathaAddon) {
    const muktinathaDesc = document.getElementById("muktinathaDesc");
    if (muktinathaDesc) {
      muktinathaDesc.textContent = costData.muktinathaAddon.description;
    }

    const muktinathaOptions = document.getElementById("muktinathaOptions");
    if (muktinathaOptions) {
      muktinathaOptions.innerHTML = costData.muktinathaAddon.prices
        .map(
          (option) => `
        <div style="background: white; padding: 1rem; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-weight: 600; color: #5865f2; margin-bottom: 0.5rem;">
            ${option.category}
          </div>
          <div style="font-size: 1.2rem; font-weight: 700; color: #28a745;">
            ₹${option.inrPrice}
          </div>
        </div>
      `
        )
        .join("");
    }

    const muktinathaHighlights = document.getElementById(
      "muktinathaHighlights"
    );
    if (muktinathaHighlights) {
      muktinathaHighlights.innerHTML = costData.muktinathaAddon.highlights
        .map((highlight) => `<li>${highlight}</li>`)
        .join("");
    }
  }
}

// --- 8. LOAD GEAR LIST ---
function loadGearList(tour) {
  const gearListEl = document.getElementById("gearListContent");
  if (!gearListEl) return;

  if (tour.gearList && tour.gearList.length > 0) {
    gearListEl.innerHTML = tour.gearList
      .map((item) => `<li>${item}</li>`)
      .join("");
  } else {
    gearListEl.innerHTML = `
      <li>Moisture-wicking base layers</li>
      <li>Insulated down jacket</li>
      <li>Waterproof and windproof jacket</li>
      <li>Trekking pants (quick-dry)</li>
      <li>Sleeping bag (-15°C rated)</li>
      <li>Sunscreen & Sunglasses</li>
    `;
  }
}

// --- 9. LOAD TERMS & CONDITIONS ---
function loadTerms(tour) {
  const termsEl = document.getElementById("termsContent");
  if (!termsEl) return;

  const terms = tour.terms || [
    "<strong>Booking & Payment:</strong> Advance payment required at the time of booking.",
    "<strong>Cancellation Policy:</strong> Cancellation charges apply as per the number of days before departure.",
    "<strong>Travel Insurance:</strong> Comprehensive travel insurance is mandatory for all participants.",
    "<strong>Health Requirements:</strong> Participants must be in good physical condition.",
    "<strong>Weather Conditions:</strong> Itinerary may be modified due to weather or unforeseen circumstances.",
    "<strong>Liability:</strong> Company acts as an agent and is not liable for accidents or delays.",
  ];

  termsEl.innerHTML = `
    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #5865f2;">
      <ul class="info-list" style="list-style-type: none; padding-left: 0;">
        ${terms
          .map(
            (term) =>
              `<li style="margin-bottom: 1rem; line-height: 1.6;">${term}</li>`
          )
          .join("")}
      </ul>
      <div style="margin-top: 1.5rem; padding: 1rem; background: #fff3cd; border-radius: 4px;">
        <p style="margin: 0; color: #856404; font-size: 0.9rem;">
          <i class="fas fa-info-circle"></i> <strong>Note:</strong> By booking this tour, you agree to all the terms and conditions listed above. 
          For detailed terms, please contact our office or refer to our complete terms document.
        </p>
      </div>
    </div>
  `;
}

// --- 10. LOAD VIDEOS AND MAPS ---
function loadVideosAndMaps(tour) {
  const videoEl = document.getElementById("tourVideo");
  const mapEl = document.getElementById("tourMap");

  if (videoEl && tour.videoUrl) {
    videoEl.src = tour.videoUrl;
  }

  if (mapEl && tour.mapUrl) {
    mapEl.src = tour.mapUrl;
  }
}

// --- 11. LOAD ENQUIRY FORM ---
function loadEnquiryForm(tour) {
  const tripNameEl = document.getElementById("tripName");
  if (tripNameEl) {
    tripNameEl.value = tour.title;
  }
}

// --- 12. HANDLE ENQUIRY FORM SUBMISSION ---
function handleEnquirySubmit(event) {
  event.preventDefault();

  // Validate antispam
  const antispam = document.getElementById("antispam").value;
  if (antispam !== "5") {
    alert("Please answer the anti-spam question correctly.");
    return false;
  }

  // Validate dates
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (endDate <= startDate) {
    alert("Trip Finished Date must be after Trip Start Date.");
    return false;
  }

  // Validate contact method
  const contactMethods = document.querySelectorAll(
    'input[name="contactMethod"]:checked'
  );
  if (contactMethods.length === 0) {
    alert("Please select at least one contact method.");
    return false;
  }

  // Get form data
  const formData = {
    tripName: document.getElementById("tripName").value,
    adults: document.getElementById("adults").value,
    children: document.getElementById("children").value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    arrivalDate: document.getElementById("arrivalDate").value,
    arrivalTime: document.getElementById("arrivalTime").value,
    airline: document.getElementById("airline").value,
    flightNumber: document.getElementById("flightNumber").value,
    message: document.getElementById("message").value,
    contactMethods: Array.from(contactMethods)
      .map((cb) => cb.value)
      .join(", "),
  };

  // Here you would normally send the data to your server
  console.log("Form submitted:", formData);

  // Show success message
  document.getElementById("formSuccess").style.display = "block";
  document.getElementById("enquiryForm").reset();
  document.getElementById("tripName").value = currentTour.title;

  // Scroll to success message
  document
    .getElementById("formSuccess")
    .scrollIntoView({ behavior: "smooth", block: "nearest" });

  // Hide success message after 5 seconds
  setTimeout(() => {
    document.getElementById("formSuccess").style.display = "none";
  }, 5000);

  return false;
}

// --- 13. INTERACTION LOGIC ---

function increaseQty() {
  quantity++;
  updatePrice();
}

function decreaseQty() {
  if (quantity > 1) {
    quantity--;
    updatePrice();
  }
}

function updatePrice() {
  document.getElementById("quantity").textContent = quantity;
  document.getElementById("qtyText").textContent = quantity;
  document.getElementById("displayPrice").textContent = basePrice;

  const total = basePrice * quantity;
  document.getElementById("subtotal").textContent = total;
  document.getElementById("total").textContent = total;
}

function showTab(tabName) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    if (tab.textContent === tabConfig[tabName]?.label) {
      tab.classList.add("active");
    }
  });

  const contentEl = document.getElementById(tabName);
  if (contentEl) {
    contentEl.classList.add("active");
  }
}

function changeImage(direction) {
  if (!galleryImages.length) return;
  galleryImages[currentImage].classList.remove("active");
  galleryIndicators[currentImage].classList.remove("active");

  currentImage += direction;
  if (currentImage >= galleryImages.length) currentImage = 0;
  if (currentImage < 0) currentImage = galleryImages.length - 1;

  galleryImages[currentImage].classList.add("active");
  galleryIndicators[currentImage].classList.add("active");
}

function setImage(index) {
  if (!galleryImages.length) return;
  galleryImages[currentImage].classList.remove("active");
  galleryIndicators[currentImage].classList.remove("active");
  currentImage = index;
  galleryImages[currentImage].classList.add("active");
  galleryIndicators[currentImage].classList.add("active");
}

setInterval(() => {
  changeImage(1);
}, 5000);
