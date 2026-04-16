// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import risk from "./../risk.png";
// import orbyte from "./../688e5e2cbd231604762009.jpg";
// import MissionControl from "./../MissionControl .png";
// import bikes from "./../bikes.png";
// import busPlanner from "./../BusPlanner.png";
// import StableappCloud from "./../StableappCloud.png";
// import throttlehaus from "./../ThrottleHaus.png";
// import wmza from "./../wmza.png"


// const projects = [
//   {
//     id: 1,
//     name: "Mission Control ",
//     imageSrc: MissionControl ,
//     href: "https://missioncontrol.co/",
//     used: "ReactJS, Next.js, Sanity",
//     description: "A branding agency and creative capital partner for high-growth startups",
//     flip: "flip-left",
//   },
//   {
//     id: 2,
//     name: "ORBYTE-Design & development Studio ",
//     imageSrc: orbyte ,
//     href: "https://orbyte.studio/",
//     used: "ReactJS, Next.js, Sanity, redux",
//     description: "Global Design & development Studio",
//     flip: "flip-left",
//   },
//   {
//     id: 4,
//     name: "Risk Solved",
//     imageSrc: risk,
//     href: "https://www.risksolved.com/",
//     used: "ReactJS, TailwindCSS, Styled-components",
//     description: "Risk Solved is a global provider of insurance risk engineering management and data analytics software",
//     flip: "flip-right",
//   },
//   {
//     id: 5,
//     name: "Bastion Cycles",
//     imageSrc: bikes,
//     href: "https://bastioncycles.com/",
//     used: "WordPress Core, CSS3",
//     description: "Bastion Cycles Manufacturing",
//     flip: "flip-left",
//   },
//   {
//     id: 6,
//     name: "Stable",
//     imageSrc: StableappCloud,
//     href: "https://www.stableapp.cloud/",
//     used: "WordPress Core, CSS3",
//     description: "Discover Stable, your go-to solution for AWS cloud savings.",
//     flip: "flip-right",
//   },
//   {
//     id: 7,
//     name: "busplanner",
//     imageSrc: busPlanner,
//     href: "https://busplanner.com/",
//     used: "WordPress Core, CSS3",
//     description: "A school bus service platform.",
//     flip: "flip-right",
//   },
//   {
//     id: 8,
//     name: "Throttle Haus",
//     imageSrc: throttlehaus,
//     href: "https://throttlehaus.ca/",
//     used: "WordPress,WooCommerce,PHP,MySQL,Stripe API,Vanilla JS,BEM CSS",
//     description: "Custom WooCommerce theme with advanced product filtering, payment integration.",
//     flip: "flip-right",
//   },
//   {
//     id: 9,
//     name: "WMZA",
//     imageSrc: wmza,
//     href: "https://www.wmza.co.nz/",
//     used: "WordPress,PHP,MySQL,Google Maps API,AJAX,Custom Plugin",
//     description: "Custom real estate plugin and theme with advanced property search, map integration, and mortgage calculator functionality",
//     flip: "flip-right",
//   },
// ];

// export default function Projects() {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);
//   return (
//     <div id="projects">
//       <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
//         <p className="mt-2 text-4xl text-center font-bold tracking-tight sm:text-6xl underline">
//           Browse my recent Projects
//         </p>
//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
//               data-aos={
//                 project.flip === "flip-left" ? "flip-left" : "flip-right"
//               }
//             >
//               <div className="relative h-64 overflow-y-scroll scrollbar-hide rounded-md rounded-t-2xl">
//                 <img
//                   src={project.imageSrc}
//                   alt={project.name}
//                   className="w-full object-contain"
//                 />

//                 <button className="fixed top-[45%] left-[45%] border-2 font-bold text-2xl text-black animate-bounce  border-black rounded-full w-10 h-10">
//                   ↓
//                 </button>
//               </div>

//               <div className="mt-4 flex justify-between p-4">
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold">
//                     <a href={project.href}>
//                       <span aria-hidden="true" className="absolute" />
//                       {project.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 mb-5 text-sm">{project.description}</p>
//                   <p className="text-sm font-medium">{project.used}</p>
//                 </div>
//               </div>
//               <a
//                 href={project.href}
//                 target="_blank"
//                 className="text-sm font-medium absolute right-2 bottom-2 animate-pulse"
//                 rel="noreferrer"
//               >
//                 Visit Here!
//               </a>
//             </div>
//           ))}
//         </div>
//         {/* <div className="mt-16 flex justify-center">
//           <button className="btn btn-outline">View More</button>
//         </div> */}
//       </div>
//     </div>
//   );
// }
