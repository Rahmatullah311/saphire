import React from "react";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";

const TableSkeleton = ({
  rows = 5,
  rowHeight = 40,
  className = "",
  topButtonCount = 5,
  bottomButtonCount = 3,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Top Action Buttons */}
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2, marginTop: 2, }}>
        {[...Array(topButtonCount)].map((_, index) => (
          <Skeleton key={index} variant="rectangular" width={80} height={36} />
        ))}
      </Stack>

      {/* Table Rows */}
      {[...Array(rows)].map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width="100%"
          height={rowHeight}
          sx={{ marginBottom: 1, borderRadius: "4px" }}
        />
      ))}

      {/* Bottom Pagination Buttons */}
      <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ marginTop: 2 }}>
        {[...Array(bottomButtonCount)].map((_, index) => (
          <Skeleton key={index} variant="circular" width={36} height={36} />
        ))}
      </Stack>
    </div>
  );
};

TableSkeleton.propTypes = {
  rows: PropTypes.number,
  rowHeight: PropTypes.number,
  className: PropTypes.string,
  topButtonCount: PropTypes.number,
  bottomButtonCount: PropTypes.number,
};

export default TableSkeleton;
