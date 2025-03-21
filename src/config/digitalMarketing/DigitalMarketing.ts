export const digitalMarketingData: Record<
  string,
  {
    image: string;
    title: string;
    description: string;
    subImage?: string;
    video?: string;
  }
> = {
  "SEO": {
    image: "/images/digitalMarketing/seo.jpg",
    title: "SEO",
    description:
      "Tailored SEO solutions designed to achieve higher rankings and increase online authority.As the foundation of our services, Search Engine Optimization (SEO) is supported by in-depth expertise in Google and other top search engines. Despite the ever-changing search algorithms, our outstanding SEO skills are demonstrated by our consistent results. Every SEO campaign we create is tailored to increase our clients' revenue and brand authority.",
    video: "/images/digitalMarketing/SEO.mp4"
  },
  "SMM": {
    image: "/images/digitalMarketing/smm.jpg",
    title: "SMM",
    description:
      "Social media is a vital part of corporate success in today's trend-driven digital environment. It takes a lot of imagination, persistence, and an effective content plan to manage your social media accounts effectively. Genpixels, a social media marketing firm, can handle all of this for you on Facebook, Instagram, LinkedIn, and other social media sites. Genpixels can use innovative and effective social media tactics to help you advance your business.",
    subImage: "/images/digitalMarketing/smm-flow.jpg"
  },
  "Branding": {
    image: "/images/digitalMarketing/branding.jpg",
    title: "Branding",
    description:
      "Our branding service is intended to assist companies in developing a powerful, enduring identity that appeals to their target market. To make sure your brand stands out in a crowded market, we collaborate closely with you to fully grasp your vision, beliefs, and objectives. We create unified strategies that represent your distinct story and improve your market visibility, from logo design to brand messaging and positioning. Our experience allows us to create a strong emotional bond between your business and its target audience in addition to creating a visual identity. Our branding services are designed to increase recognition, trust, and loyalty for both new and established businesses.",
    video: "/images/digitalMarketing/checklist.mp4"
  },
  "Email Marketing": {
    image: "/images/digitalMarketing/em.jpg",
    title: "Email Marketing",
    description:
      "We transform your digital marketing efforts with cutting-edge automations and tried-and-true email marketing tactics. Using our flows will enable you to onboard, nurture, and convert leads more effectively than ever before. Our conversion-optimized funnels have been shown to provide exceptional results, so you can build emails that are more intense than ever and achieve astounding results.",
    subImage: "/images/digitalMarketing/em-flow.jpg"
  },
  "Performane Marketing": {
    image: "/images/digitalMarketing/pm.jpg",
    title: "Performane Marketing",
    description:
      "By improving your brand's performance through ROI-driven tactics, our Performance Marketing experience assists you in achieving quantifiable outcomes. To guarantee the most possible return on your marketing investment, we optimize campaigns across important channels, such as paid search, social media, and display advertisements, with an emphasis on conversions, leads, and sales.",
    video:"/images/digitalMarketing/performacemarketing.mp4"
  },
  "Website Design": {
    image: "/images/digitalMarketing/wd.jpg",
    title: "Website Design",
    description:
      "Website design services aim to create visually beautiful, user-friendly, and functioning websites.  These services involve creating the layout, structure, visuals, and navigation so that visitors have an interesting and intuitive experience.  They frequently include responsive design, SEO optimization, and the incorporation of corporate identity to improve user interaction and achieve business objectives.  A professional website design service, whether for a small or large organization, attempts to ",
    video: "/images/digitalMarketing/Blue Corporate Development Process Steps Graph.mp4"
  },
};

// Export an array of service names
export const digitalMarketing = Object.keys(digitalMarketingData);
