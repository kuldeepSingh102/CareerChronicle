import CreateJobForm from "@/components/CreateJob";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default function page() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CreateJobForm />
    </HydrationBoundary>
  );
}
