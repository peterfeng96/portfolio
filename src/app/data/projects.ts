type Project = {
  name: string;
  site: string;
  github: string;
  description: string;
  builtWith: string[];
};

type Projects = {
  [index: string]: Project;
};

const projects: Projects = {
  watchdogs: {
    name: "WatchDogs",
    site: "https://www.watch-dogs.io/",
    github: "https://github.com/oslabs-beta/Watchdogs",
    description:
      "An open source monitoring tool for AWS Lambda functions, leveraging the AWS SDK to access user information through CloudWatch. This is the perfect tool for developers in the process of transitioning their on-site services to the cloud. Get real time metrics for your Lambda functions without struggling with the AWS console.",
    builtWith: ["TypeScript", "AWS", "React", "Node.js", "MondoDB"],
  },
  marathonTrainer: {
    name: "Marathon Trainer",
    site: "https://nft-tracker.com/",
    github: "https://github.com/peterfeng96/marathon-trainer",
    description:
      "Get ready for your first or next marathon using Marathon Trainer. Marathon Trainer is a simple application with easy-to-use and easy-to-understand training plans for anyone that wants to run a marathon. Three plans for beginners, intermediates, and advanced runners with clear instructions. Your daily progress is saved so you can keep on track!",
    builtWith: ["TypeScript", "React", "Next.js", "AWS"],
  },
  nftTracker: {
    name: "NFT Tracker",
    site: "https://nft-tracker.com/",
    github: "https://github.com/peterfeng96/nft-tracker",
    description:
      "NFT Tracker is an Ethereum Non-Fungible Token (NFT) tracking tool that provides real-time information on NFT ownership, Ethereum price, and gas fees. Get updated on the most current gas fees to optimize your Ethereum blockchain experience. This web app is completely serverless, hosted on AWS CloudFront, API Gateway, S3, and Lambda.",
    builtWith: ["Python", "TypeScript", "React", "Next.js", "AWS"],
  },
};

export default projects;
