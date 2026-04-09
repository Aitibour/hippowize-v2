import { MetadataRoute } from "next";

const BASE = "https://hippowize-v2.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                             lastModified: new Date(), priority: 1.0,  changeFrequency: "weekly"  },
    { url: `${BASE}/stories`,                                lastModified: new Date(), priority: 0.8,  changeFrequency: "weekly"  },
    { url: `${BASE}/careers`,                                lastModified: new Date(), priority: 0.7,  changeFrequency: "monthly" },
    // Services
    { url: `${BASE}/services/strategy-consulting`,           lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/services/digital-transformation`,        lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/services/professional-services`,         lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/services/cybersecurity-grc`,             lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/services/training-coaching`,             lastModified: new Date(), priority: 0.9,  changeFrequency: "monthly" },
    // Industries
    { url: `${BASE}/industry/it-technology`,                 lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/industry/healthcare`,                    lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/industry/financial-services`,            lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/industry/government`,                    lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/industry/energy-utilities`,              lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/industry/manufacturing`,                 lastModified: new Date(), priority: 0.85, changeFrequency: "monthly" },
    // Legal
    { url: `${BASE}/privacy-policy`,                         lastModified: new Date(), priority: 0.3,  changeFrequency: "yearly"  },
    { url: `${BASE}/terms-of-use`,                           lastModified: new Date(), priority: 0.3,  changeFrequency: "yearly"  },
  ];
}
