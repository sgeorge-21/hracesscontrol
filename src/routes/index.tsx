import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Executive Mansion — HR & Access Control" },
      { name: "description", content: "Ministry of State Integrated HR & Access Control System for the Executive Mansion." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/mansion.html"
      title="Executive Mansion HR & Access Control"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: 0 }}
    />
  );
}
