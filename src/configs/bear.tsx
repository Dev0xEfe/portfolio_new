import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-icon-park-twotone:me",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
     
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "diyetle",
        title: "Arbitrum",
        file: "https://raw.githubusercontent.com/ogunkirikci/diyetle/main/README.md",
        icon: "i-tabler:apple",
        excerpt: "Layer 2 solution for scaling Ethereum",
        link: "https://arbitrum.io"
      },

      {
        id: "diyetle",
        title: "Help Steps",
        file: "https://raw.githubusercontent.com/ogunkirikci/diyetle/main/README.md",
        icon: "i-tabler:apple",
        excerpt: "Move and Earn to Charity App with 1.7M users",
        link: "https://helpsteps.io"
      },

      {
        id: "diyetle",
        title: "Cocktail Fund",
        file: "https://raw.githubusercontent.com/ogunkirikci/diyetle/main/README.md",
        icon: "i-tabler:apple",
        excerpt: "Cocktail Fund is a funding platform supported by VCs and angel investors.",
        link: "https://cocktail.fund"
      },



      {
        id: "diyetle",
        title: "IOEN Tech",
        file: "https://raw.githubusercontent.com/ogunkirikci/diyetle/main/README.md",
        icon: "i-tabler:apple",
        excerpt: " The IOEN is a renewable energy project that can use blockchain infra.",
        link: "https://ioen.tech"
      },


      {
        id: "diyetle",
        title: "Neighbourhoods",
        file: "https://raw.githubusercontent.com/ogunkirikci/diyetle/main/README.md",
        icon: "i-tabler:apple",
        excerpt: "Neighbourhoods is community hub where you can choose your algorithms, control your data, and crowdfund projects you want to build.",
        link: "https://neighbourhoods.network"
      
      },

    ]
  }
];

export default bear;
