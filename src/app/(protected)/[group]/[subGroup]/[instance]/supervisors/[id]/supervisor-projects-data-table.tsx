"use client";
import DataTable from "@/components/ui/data-table/data-table";

import { columns,SupervisorProjectData } from "./supervisor-projects-columns";

export function ProjectsDataTable({ data }: { data: SupervisorProjectData[] }) {
  return <DataTable className="w-full" columns={columns} data={data} />;
}
