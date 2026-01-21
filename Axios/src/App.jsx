import axios from "axios";
import { useEffect } from "react";
// Endpoints: http://localhost:3000/users
const BASE_URL = "http://localhost:3000/";

function App() {
  // TODO: Tüm Verilerin çekilmesi

  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}users`);
    console.log("getAllUsers Fonksiyonu ");
    console.log(response.data);
  };

  // TODO: ID ile Veri Çekme
  const getUserByID = async (userID) => {
    const response = await axios.get(`${BASE_URL}users/${userID}`);
    console.log("getUserByID Fonksiyonu");
    console.log(response.data);
  };

  // TODO: POST İsteği ile Veri Ekleme

  const addUser = async (user) => {
    const newUser = await axios.post(BASE_URL + "users", user);
    console.log("Data Eklendi");
    console.log(newUser.data);
  };

  // TODO: PUT ile Güncelleme

  const updateUser = async (id, newUser) => {
    await axios.put(BASE_URL + "users/" + id, newUser);
    console.log(`${id}'li Kullanıcı verisi güncellenmiştir. ...`);
  };
  // TODO: DELETE ile Silme İşlemi

  const deleteUser = async (id) => {
    const deletedUser = axios.delete(BASE_URL + "users/" + id);
    console.log(id, " li eleman silinmiştir.");
    console.log(deletedUser.data);
  };
  // TODO: Fonksiyonların Render anında çalışması
  useEffect(() => {
    getAllUsers(); // ! Site Render anında 1 kez çalışacak. ( Tüm Verileri Çeker )
    getUserByID(1); // ! Site Render anında 1 kez çalışacak ( 1 idli olan veriyi çeker )

    const newData = {
      // ! POST ile eklenecek yeni kullanıcı bilgileri
      username: "new Deniz",
      password: "new Password",
    };
    addUser(newData); // ! Yeni Kullanıcının eklenmesi

    const putUser = {
      username: "put Deniz",
      password: "put Password",
    };
    updateUser("55a4", putUser);
    deleteUser("285b");
  }, []);
  return <></>;
}

export default App;
