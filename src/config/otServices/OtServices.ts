export const otServiceData: Record<
  string,
  {
    image: string;
    title: string;
    description: string;
  }
> = {
  "OT Digitalization Projects": {
    image: "/images/service/ot1.jpg",
    title: "OT Digitalization Projects",
    description:
      "We specialize in transforming physical operations through digitalization, enabling real-time data collection and analysis, which drives informed decision-making and improved performance.",
  },
  "Energy Management Solutions": {
    image: "/images/service/ot2.jpg",
    title: "Energy Management Solutions",
    description:
      "Our energy management solutions help businesses optimize energy usage, reduce costs, and achieve sustainability goals through advanced monitoring and control systems.",
  },
  "Building Management Systems (BMS)": {
    image: "/images/service/ot3.jpg",
    title: "Building Management Systems (BMS)",
    description:
      "We implement BMS to enhance the efficiency and comfort of buildings through integrated control of HVAC, lighting, security, and other building systems.",
  },
  "Manufacturing Execution Systems (MES)": {
    image: "/images/service/ot4.avif",
    title: "Manufacturing Execution Systems (MES)",
    description:
      "Our MES solutions streamline manufacturing processes, improve production efficiency, and ensure quality control through real-time monitoring and management of factory operations.",
  },
  "System Integration": {
    image: "/images/service/ot5.avif",
    title: "System Integration",
    description:
      "We offer system integration services that ensure seamless connectivity between various IT and OT systems, enabling unified operations and enhanced performance.",
  },
  "Automation": {
    image: "/images/service/ot6.avif",
    title: "Automation",
    description:
      "Our automation solutions help businesses automate repetitive tasks, reduce human error, and increase productivity, ultimately leading to cost savings and operational excellence.",
  },
  "Digital Transformation Consultancy": {
    image: "/images/service/ot7.jpg",
    title: "Digital Transformation Consultancy",
    description:
      "We provide expert consultancy services to guide businesses through their digital transformation journey, offering strategic insights and practical solutions to achieve their goals.",
  },
};

// Export an array of service names
export const otService = Object.keys(otServiceData);
