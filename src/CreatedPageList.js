import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { EyeOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import creator_list from "./creator_list";
import "./PaginatedItems.css";
// Example items, to simulate fetching from another resources.
export default function CreatedPageItems() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const [val, setVal] = useState(creator_list.slice(itemOffset, endOffset));
  useEffect(() => {
    // Fetch items from another resources.
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(creator_list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(creator_list.length / itemsPerPage));
    setVal(creator_list.slice(itemOffset, endOffset));
    console.log(itemsPerPage);
    console.log(val);
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(event);
    const newOffset = (event.selected * itemsPerPage) % creator_list.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(parseInt(newOffset));
  };
  if (itemOffset === 0) {
    setItemOffset(1);
  }

  return (
    <div className="App">
      <table class=" table table-bordered" border="1px">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Stars</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Paypal Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {
          // Fetch items from another resources.
          val.map((data, id) => {
            return (
              <tbody>
                <tr id={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.userdetail}</td>
                  <td>{data.item}</td>
                  <td>{data.callprice}</td>
                  <td>{data.callprice}</td>
                  <button
                    className="btn bg-primary"
                    style={{
                      backgroundColor: "red",
                      marginTop: 10,
                      color: "white",
                      fontSize: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    Paypal
                  </button>
                  <div></div>
                  <button
                    className="btn "
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      marginBottom: 10,
                      fontSize: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    Decline
                  </button>
                </tr>
              </tbody>
            );
          })
        }
      </table>
      <Row>
        <Col>
          <ReactPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="Previous"
            previousLinkClassName="btn  previous bg-primary"
            nextLinkClassName="btn next  bg-primary"
            containerClassName="paginateButtons"
          />
        </Col>
        <Col>
          <span>
            Rows:
            <select
              id="rows"
              className="w-auto select"
              onChange={() => {
                setItemsPerPage(
                  parseInt(document.getElementById("rows").value)
                );
                setVal(creator_list.slice(itemOffset, endOffset));
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </span>
        </Col>
      </Row>
    </div>
  );
}
