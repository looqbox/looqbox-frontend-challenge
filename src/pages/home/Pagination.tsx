import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PER_PAGE } from '@/requests/get-pokemons-name-and-count';

type PaginationProps = {
  currentPage: number;
  totalCount: number;
  onPageChange: (newPage: number) => Promise<void> | void;
};

export function Pagination({
  currentPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / PER_PAGE) || 1;

  return (
    <div className="flex flex-col items-center justify-between gap-2 lg:flex-row lg:gap-0">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} Pokémons
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {currentPage} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= currentPage}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            onClick={() => onPageChange(pages)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= currentPage}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
