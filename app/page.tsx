import { sampleuser } from "@/constants";
import JsonEx from "@/components/JsonEx";
import MyUser from "@/components/MyUser";

export default function HomePage() {
  // imagine the following:
  // fetch data
  // const { data, error } = await fetch("https://api.example.com/user/123");

  // Our "data here is sampleuser"

  // the example code would be:

  // console.log(data)    make sure this is parsed into an actual object and not JSON
  // const sampleuser:User = data

  console.log("Server Side Log");

  return (
    <section className="home-container">
      <div className="wrapper-container">
        <div className="apiexample">
          <MyUser sampleuser={sampleuser} name={sampleuser.name} email={sampleuser.email} />
        </div>


        <div className="jsonexample hidden">
          <JsonEx />
        </div>
      </div>
    </section>
  );
}
