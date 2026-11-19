/* VACANCIES: edit this file to add, change or remove vacant positions.
   1. VACANCIES_SHOW = true shows the vacancies slider and the Vacancies page. false hides them.
   2. Each position is one block between { } with a comma after it.
   3. poster = the flyer picture (put the picture in the "flyers" folder, e.g. "flyers/my-flyer.jpg").
   4. cta/route are optional: use them for a button that is not "Apply now" (route "tutorial" opens the tutor form).
   5. Save this file and upload it to your site. No other file needs to change.
   Fields: title, city, chips (small labels), summary, poster, posted (YYYY-MM-DD), deadlineISO (optional),
           employment (optional), salary {min,max,unit} (optional). */
window.VACANCIES_SHOW = true;
window.VACANCIES = [
  { title: "Part-time Teachers Needed at iCONTEACH", city: "Ilorin", poster: "flyers/teachers-hiring.jpg", posted: "2026-11-16", employment: "PART_TIME",
    chips: ["Part-time", "3 to 4 hrs/day", "2 to 3 days/week", "₦30,000 to ₦100,000 by level"],
    summary: "Mathematics, English, Physics, Chemistry and Biology teachers are urgently needed at iCONTEACH. Salary: Level 1 ₦30,000 to ₦35,000, Level 2 ₦40,000 to ₦50,000, Level 3 ₦50,000 to ₦100,000. Chat 09034251696 or 09159923346." },
  { title: "Security Guards", city: "Ilorin", poster: "flyers/security-guards.jpg", posted: "2026-11-16", employment: ["PART_TIME", "FULL_TIME"], salary: { min: 40000, max: 60000, unit: "MONTH" },
    chips: ["Ilorin", "Night (PT) ₦50,000/month", "Day (PT) ₦40,000/month", "Full-time ₦60,000/month"],
    summary: "Requirements: minimum SSCE/WAEC, good health and physical fitness, honesty and responsibility. Security experience is an advantage. Office: 30 Western Reservoir Road, As-salam Shopping Complex, beside Kiddies Hospital, Olorunsogo, Ilorin. Call/WhatsApp 09159923346." },
  { title: "Smart Sales Girls/Boys at Mandate", city: "Ilorin", poster: "flyers/sales-mandate.jpg", posted: "2026-11-16",
    chips: ["Mandate, Ilorin", "Immediate employment", "Attractive salary and commission"],
    summary: "Smart sales girls and boys are urgently needed at Mandate for immediate employment. You should be smart and presentable, with good communication skills, target driven and ready to work and earn. We offer attractive salary and commission, performance incentives, career growth and a friendly environment. Call/WhatsApp 09159923346." },
  { title: "iCONTEACH ALL: Qualified Home Tutors", poster: "flyers/icon-teach-all.jpg", cta: "Request a tutor", route: "tutorial",
    chips: ["Home tuition", "All parts of Nigeria"],
    summary: "Qualified and experienced private tutors for Mathematics, English, Further Mathematics, Physics, Chemistry, Biology, Basic Science, Computer Studies, Social Studies and more. Chat 09159923346." },
  { title: "Open Applications", city: "Ilorin", chips: ["Ilorin, Kwara State"],
    summary: "Send us your application today. We match verified candidates to current and upcoming vacancies." }
];
