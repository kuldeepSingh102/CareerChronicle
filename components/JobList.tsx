'use client';
import JobCard from './JobCard';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getAllJobsAction } from '@/utils/action';
import ButtonContainer from './ComplexButtonContainer';
import { useEffect, useState } from 'react';

function JobsList() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [jobStatus, setJobStatus] = useState('all');
  const [pageNumber, setPageNumber] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setJobStatus(searchParams.get('jobStatus') || 'all');
    setPageNumber(Number(searchParams.get('page')) || 1);
    setIsMounted(true);
  }, [searchParams]);

  const { data, isPending } = useQuery({
    queryKey: ['jobs', search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({ search, jobStatus, page: pageNumber }),
    enabled: isMounted, // Ensure the query only runs after component has mounted
  });

  if (!isMounted) return null;

  const jobs = data?.jobs || [];
  const count = data?.count || 0;
  const page = data?.page || 0;
  const totalPages = data?.totalPages || 0;

  if (isPending) return <h2 className='text-xl'>Please Wait...</h2>;
  if (jobs.length < 1) return <h2 className='text-xl'>No Jobs Found...</h2>;

  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-xl font-semibold capitalize '>
          {count} jobs found
        </h2>
        {totalPages > 1 && (
          <ButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default JobsList;
