import React from "react";

const ProductListEmptyStage = () => {
  return (
    <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
      <td
        colSpan={5}
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap text-center"
      >
        There is no Product!
      </td>
    </tr>
  );
};

export default ProductListEmptyStage;
