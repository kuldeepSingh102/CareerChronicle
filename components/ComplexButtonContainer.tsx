"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};

type ButtonProps = {
  page: number;
  activeClass: boolean;
};

function ButtonContainer({ currentPage, totalPages }: ButtonContainerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get("search") || "",
      jobStatus: searchParams.get("jobStatus") || "",
      page: String(page),
    };

    let params = new URLSearchParams(defaultParams);

    router.push(`${pathname}?${params.toString()}`);
  };

  const addPageButton = ({ page, activeClass }: ButtonProps) => (
    <Button
      key={page}
      size="icon"
      variant={activeClass ? "default" : "outline"}
      onClick={() => handlePageChange(page)}
    >
      {page}
    </Button>
  );

  const renderPageButtons = () => {
    const pageButtons = [];
    // First page
    pageButtons.push(
      addPageButton({ page: 1, activeClass: currentPage === 1 })
    );
    // Dots
    if (currentPage > 3) {
      pageButtons.push(
        <Button size="icon" variant="outline" key="dots-1">
          ...
        </Button>
      );
    }
    // One before current page
    if (currentPage > 2) {
      pageButtons.push(
        addPageButton({
          page: currentPage - 1,
          activeClass: false,
        })
      );
    }
    // Current page
    if (currentPage > 1 && currentPage < totalPages) {
      pageButtons.push(
        addPageButton({
          page: currentPage,
          activeClass: true,
        })
      );
    }
    // One after current page
    if (currentPage < totalPages - 1) {
      pageButtons.push(
        addPageButton({
          page: currentPage + 1,
          activeClass: false,
        })
      );
    }
    // Dots
    if (currentPage < totalPages - 2) {
      pageButtons.push(
        <Button size="icon" variant="outline" key="dots-2">
          ...
        </Button>
      );
    }
    // Last page
    pageButtons.push(
      addPageButton({
        page: totalPages,
        activeClass: currentPage === totalPages,
      })
    );
    return pageButtons;
  };

  return (
    <div className="flex gap-x-2">
      {/* Prev */}
      <Button
        className="flex items-center gap-x-2"
        variant="outline"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = totalPages;
          handlePageChange(prevPage);
        }}
      >
        <ChevronLeft />
        prev
      </Button>
      {renderPageButtons()}
      {/* Next */}
      <Button
        className="flex items-center gap-x-2"
        variant="outline"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > totalPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <ChevronRight />
      </Button>
    </div>
  );
}

export default ButtonContainer;
