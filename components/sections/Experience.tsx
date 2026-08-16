"use client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUpOnScroll } from "@/components/ui/FadeUp";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Award } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Deuex Solutions Pvt. Ltd.",
    period: "Jul 2022 – Present",
    location: "Mumbai, India",
    description:
      "Building production React and TypeScript applications for enterprise clients. I own features end to end, from the interface a user touches all the way down to the APIs and real time pipelines behind them.",
    clients: [
      {
        name: "Collate (OpenMetadata)",
        bullets: [
          "I own feature delivery across the Governance domain at OpenMetadata and Collate. OpenMetadata is an open source data catalog with 15k GitHub stars that enterprises use for metadata management and lineage tracking. I have merged over 250 PRs and also handle paid tier feature work on the Collate side.",
          "I built the governance workflow builder using React Flow. It is a node based canvas where admins put together triggers, conditions and actions to create custom approval workflows without writing any code. Things like glossary approvals and table or dashboard certifications all go through it. It is running over 10,000 workflows in production today and has cut manual configuration effort by around 60 to 70 percent.",
          "I also built the Ontology Explorer using Ant G6. It takes a company's entire glossary and renders it as an interactive knowledge graph where you can explore parent and child relationships, filter by relationship type, switch between hierarchical and circular layouts and export everything as PNG, SVG or RDF. It shipped to every paid client.",
          "I owned the Data Access Request feature from start to finish. That covers the request form where users pick a dataset, access type, permission level, time limit and add a business justification. Then the owner approval and rejection flow, automatic provisioning through policy agents where configured, and a complete audit trail tracking every request, approval, grant and revocation.",
        ],
      },
      {
        name: "Uber",
        bullets: [
          "I migrated a legacy codebase from React class components to TypeScript functional components with hooks and added unit test coverage as part of that work which made a real dent in the stale state bugs that kept coming back.",
          "I led a full product revamp that brought in TanStack Query for data caching and TanStack Form for form state. We also set up schema driven rendering so backend engineers could add or tweak fields just by updating a schema without touching the frontend at all.",
          "I built out the Playwright end to end test suite covering the core workflow and form management flows. It caught a number of regressions before they could make it into a release.",
          "I brought the initial load time down from around 30 seconds to 9 seconds which is roughly a 70 percent improvement. The main levers were code splitting, lazy loading routes and removing rerenders that were happening unnecessarily. I also improved accessibility across the app while going through this.",
        ],
      },
      {
        name: "StarTree",
        bullets: [
          "I owned several modules within the Data Manager product from the interface all the way down to the data flow and introduced Zustand to handle state management in a more scoped and lightweight way.",
          "I worked closely with Product and UX on a complete UI overhaul. This happened during a period when the product went from $500K to over $4M in ARR.",
          "I built out Cypress end to end coverage across the whole product which made a real difference in how many regressions were making it into releases.",
          "I defined shared React and Redux/Zustand patterns that the team eventually adopted as conventions. That reduced a lot of the back and forth we were having in code reviews around state management decisions.",
        ],
      },
      {
        name: "The 12th Men",
        bullets: [
          "I built both the React Native (Expo) frontend and the Node.js/Express backend for a live cricket scoring platform. It handled ball by ball updates and IPL style player auctions with real time bidding, purse tracking and countdown timers all running at once.",
          "I designed the WebSocket architecture to make sure scoring and auction updates hit connected screens in real time without losing anything on the backend.",
          "We later expanded the platform to cover pickleball and badminton adding tournament management, fixtures, standings and fantasy leagues. I also fixed scroll performance by switching to virtualized lists and wired up Firebase push notifications.",
        ],
      },
      {
        name: "GoodBug",
        bullets: [
          "I worked full stack on a React Native health tracking app built on Node.js/Express with PostgreSQL. I shipped several tracking modules from scratch covering water intake, sports activity, general physical activity and swimming.",
          "I also designed the RBAC model and the login and signup flow. Every API endpoint was secured with JWT based token authentication.",
        ],
      },
    ],
    tech: ["React", "TypeScript", "React Flow", "Ant G6", "React Native", "Node.js", "PostgreSQL", "WebSockets", "gRPC", "Playwright", "Cypress", "TanStack Query", "Redux", "Zustand", "Tailwind CSS", "Docker"],
    awards: ["Standout Performer — Aug 2025", "Standout Performer — Aug 2024", "Fresher of the Year — Sep 2023"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          description="4 years at Deuex Solutions building production systems across enterprise clients."
        />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F8CFF] via-[#222] to-transparent ml-[7px] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeUpOnScroll key={i} delay={0.1 * i}>
                <div className="md:pl-12 relative">
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#4F8CFF] border-2 border-[#0B0B0C] hidden md:block" />

                  <div className="bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#333] transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-[#FAFAFA] mb-1">{exp.role}</h3>
                        <p className="text-[#4F8CFF] font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1">
                        <span className="text-sm text-[#A1A1AA] font-medium">{exp.period}</span>
                        <span className="flex items-center gap-1 text-xs text-[#A1A1AA]">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#A1A1AA] leading-relaxed mb-8">{exp.description}</p>

                    <div className="space-y-8 mb-8">
                      {exp.clients.map((client) => (
                        <div key={client.name}>
                          <p className="text-sm font-semibold text-[#4F8CFF] mb-3 italic">{client.name}</p>
                          <ul className="space-y-3">
                            {client.bullets.map((bullet, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] mt-2 flex-shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <div className="border-t border-[#1a1a1a] pt-5 flex flex-wrap gap-3">
                      {exp.awards.map((award) => (
                        <span key={award} className="inline-flex items-center gap-1.5 text-xs text-[#F59E0B]">
                          <Award size={12} />
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUpOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
