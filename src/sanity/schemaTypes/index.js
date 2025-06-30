import events from "./event";
import news from "./news";
import quoteblock from "./quoteblock";
import sports from "./sports";
import spotlight from "./spotlight";
import newsletter from "./newsletter";
import announcement from "./announcementsdata";
import sugExecutives from "./sug";
import clubs from "./clubs";
import teamMembers from "./teamMembers";
import faculty from "./faculty";
import department from "./department";
import sponsorPost from "./sponsorPost";
import deans from "./deans";

export const schema = {
  types: [
    events,
    news,
    sports,
    clubs,
    spotlight,
    quoteblock,
    newsletter,
    announcement,
    sugExecutives,
    teamMembers,
    faculty,
    department,
    sponsorPost,
    deans,
  ],
};
