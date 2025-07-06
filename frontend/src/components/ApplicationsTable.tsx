
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const applications = [
  {
    id: 1,
    jobTitle: "Senior Product Manager",
    company: "Tech Innovators Inc.",
    dateApplied: "May 15, 2024",
    status: "Applied",
    nextStep: "Waiting for response"
  },
  {
    id: 2,
    jobTitle: "Software Engineer",
    company: "Global Solutions Ltd.",
    dateApplied: "May 10, 2024",
    status: "Interviewing",
    nextStep: "Technical interview on 2023-11-05"
  },
  {
    id: 3,
    jobTitle: "UX Designer",
    company: "Creative Minds Co.",
    dateApplied: "May 5, 2024",
    status: "Rejected",
    nextStep: "No further action"
  },
  {
    id: 4,
    jobTitle: "Data Analyst",
    company: "Data Dynamics Corp.",
    dateApplied: "May 1, 2024",
    status: "Offer",
    nextStep: "Negotiating salary"
  },
  {
    id: 5,
    jobTitle: "AI Researcher",
    company: "Future Systems Inc.",
    dateApplied: "April 28, 2024",
    status: "Applied",
    nextStep: "Waiting for response"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Applied":
      return <Badge variant="secondary">{status}</Badge>;
    case "Interviewing":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
    case "Offer":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
    case "Rejected":
      return <Badge variant="destructive">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export const ApplicationsTable = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Date Applied</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Next Step</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">{application.jobTitle}</TableCell>
              <TableCell className="text-gray-600">{application.company}</TableCell>
              <TableCell className="text-gray-600">{application.dateApplied}</TableCell>
              <TableCell>{getStatusBadge(application.status)}</TableCell>
              <TableCell className="text-gray-600">{application.nextStep}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
