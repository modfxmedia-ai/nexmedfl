import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildTeamSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { TeamPageBody } from "@/components/TeamPageBody";
import { TEAM_MEMBERS } from "@/lib/team-content";

const PAGE = getStaticPage("/meet-our-team/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd
        data={buildTeamSchema(
          TEAM_MEMBERS.map((member) => ({
            name: member.name,
            jobTitle: member.credentials
              ? `${member.title}, ${member.credentials}`
              : member.title,
            description: member.bio,
          })),
        )}
      />
      <TeamPageBody />
    </>
  );
}
