"use client"

export default function MyUser() {

  const showConsole = () => {
    console.log('Client Side')
  }


  console.log('Client Side Loaded')

  
  /////// API CLOUD
  const object01 = {
    name : `Juan`,
    age : 20,
  };
  //////////////////
  const generaldata = {
    data: object01
  }

  console.log(generaldata)

  // We define a type for the data that we're expecting
  type User = {
    name : string,
    age : number,
  }
  ///////////////////////

  // Imagine this is a fetch function getting the JSON from the API
  const jsonting = JSON.stringify(object01);
  console.log('Data Received:',jsonting);
  ////////////////////////////////////

  // Convert JSON into the JavaScript object of the type you need
  // ao mean api object 
  const ao:User = JSON.parse(jsonting);
  console.log('Parsed data into User object: ',ao);

  // API OBJECT TING HOLDS ALL YOUR FETCHED DATA

  const {age, name} = ao;

  console.log('Name:',name);
  console.log('Age:',age);



  return (<section>
    <button onClick={()=>{showConsole()}}>Press me to console.log</button>
    <div>{`MY NAME IS ${ao.name}`}</div>
    <div>{`MY AGE IS ${ao.age}`}</div>
  </section>);
}