import "./styles.css";
import Users from "./Users";
import AddForm from "./AddForm";

export default function App() {
  return (
    <div className="App">
      <AddForm />
      <h1>-------------------</h1>
      <div>
        <Users />
      </div>
    </div>
  );
}
