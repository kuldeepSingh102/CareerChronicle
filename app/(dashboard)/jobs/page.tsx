import CreateJobForm from '@/components/CreateJob'
import JobsList from '@/components/JobList'
import SearchForm from '@/components/SearchForm'
import { getAllJobsAction } from '@/utils/action'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

export default async function JobsPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['jobs', '', 'all', 1],
    queryFn : () => getAllJobsAction({})
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobsList />
    </HydrationBoundary>
  )
}
