import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import "./avatar.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { onSnapshot } from "firebase/firestore";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /*const fetchData = async () => {
      let list = [];
      try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push({ id: 2, key1: 3,  ...doc.data()});
      });
      setData(list);
    } catch (err) {
      console.log(err)
    }
    };
    fetchData();*/

    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(list);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub()
    }
  }, []);
  console.log(data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/testW" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="dataTitle">
        add new user
        <Link to="users/new" className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={100}
        rowsPerPageOptions={[100 ]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
