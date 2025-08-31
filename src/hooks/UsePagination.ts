import {useMemo, useState} from "react";

const usePagination = <T>(items: T[], offset: number) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(items.length / offset);

    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * offset;
        return items.slice(startIndex, startIndex + offset);
    }, [items, currentPage, offset]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const pageNumbers = useMemo(() => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, '...', totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [1, '...', totalPages - 2, totalPages - 1, totalPages];
        }

        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }, [currentPage, totalPages]);

    return {
        currentPage,
        totalPages,
        currentItems,
        pageNumbers,
        handlePageChange
    };
}

export default usePagination;