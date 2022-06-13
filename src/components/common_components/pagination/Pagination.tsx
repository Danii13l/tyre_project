import ReactPaginate from "react-paginate";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

interface paginationInt {
  initialPage: number;
  pageCount: number;
}

export const Pagination = ({
  initialPage,
  pageCount,
}: paginationInt): JSX.Element => {
  return (
    <div className="pagination_bottom">
      <ReactPaginate
        initialPage={initialPage}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        previousLabel={<RiArrowLeftSLine />}
        nextLabel={<RiArrowRightSLine />}
      />
    </div>
  );
};
