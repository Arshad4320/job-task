import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../redux/features/product/productApi";
import DeleteModal from "./../../components/DeleteModal";

const ListProduct = () => {
  const [open, setOpen] = useState(null);
  const [productDelete] = useDeleteProductMutation();
  const { data } = useGetProductQuery();

  // console.log(data?.data);
  const handleDelete = async () => {
    const result = await productDelete(open).unwrap();
    if (result) {
      try {
        toast.success("product deleted succefully");
        setOpen(null);
      } catch (err) {
        // toast.error("product delete Failed");
      }
    }
  };
  return (
    <div className="m-4 lg:m-10 ">
      <>
        <div>
          <div className=" bg-white  overflow-auto">
            <table className="table-auto w-full  text-gray-600">
              <thead>
                <tr>
                  <th className="p-2 border text-center">No</th>
                  <th className="p-2 border text-center">Image</th>
                  <th className="p-2 border text-center">Product Name</th>

                  <th className="p-2 border text-center">Price</th>

                  <th className="p-2 border text-center">Action</th>
                  <th className="p-2 border text-center">Date</th>
                </tr>
              </thead>
              <tbody className=" text-center">
                {data?.data?.map((item, i) => {
                  return (
                    <tr className=" duration-300 my-1" key={i}>
                      <td className="p-2 border text-center">{i + 1}</td>
                      <img
                        className="w-24 h-24 mx-auto p-1 flex justify-center"
                        src={item?.images}
                        alt=""
                      />
                      <td className="p-2 border text-center ">
                        {item?.productName}
                      </td>
                      <td className="p-2 border text-center ">{item?.price}</td>

                      <td className="p-2 border text-center">
                        <div className="flex items-center gap-2 justify-center p-3 rounded bg-secondary hover:bg-secondary2 ">
                          <Link to={`/dashboard/edit-product/${item?.id}`}>
                            <BiSolidEdit className="text-xl text-primary" />
                          </Link>
                          <RiDeleteBin6Line
                            onClick={() => {
                              setOpen(item?.id);
                            }}
                            className="text-xl text-red-600"
                          />

                          {open ? (
                            <DeleteModal
                              message={"Product"}
                              handleDelete={handleDelete}
                              setDeleted={setOpen}
                            />
                          ) : null}
                        </div>
                      </td>
                      <td className="p-2 border text-center">
                        {/* {item.updatedAt && item.updatedAt.slice(0, 10)} */}
                        {item.createdAt
                          .slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default ListProduct;
