import { useEffect, useState } from "react";
import LocationList from "../components/Location/LocationList";
import PageLayout from "../components/UI/icons/PageLayout";
import { usePokemonLocations } from "../hooks/usePokemonLocations";
import { Pagination, PaginationProps } from "antd";
import { useNavigate } from "react-router-dom";
import Loading from "../components/UI/Loader/Loading";

function LocationsScreen() {
  const [page, setPage] = useState(1);
  const { locations, isLoading } = usePokemonLocations(page);

  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const page = url.searchParams.get("page");
    if (page) {
      setPage(parseInt(page));
    }
  }, []);

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <button>Anterior</button>;
    }
    if (type === "next") {
      return <button>Próximo</button>;
    }
    return originalElement;
  };

  const handleChangePage = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
    navigate(`?page=${page}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PageLayout>
      <LocationList locations={locations?.results || []} />
      <div className="mt-16">
        <Pagination
          total={locations?.count}
          current={page}
          pageSize={20}
          showSizeChanger={false}
          itemRender={itemRender}
          onChange={handleChangePage}
        />
      </div>
    </PageLayout>
  );
}

export default LocationsScreen;
