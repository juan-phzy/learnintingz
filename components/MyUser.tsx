"use client";
import { UserData } from "@/types";

interface Props {
  sampleuser: UserData;
  name: string;
  email: string;
}

const MyUser = ({ sampleuser }: Props) => {
  console.log("USER DATA: ", sampleuser);

	const arr = sampleuser.preferences.languages;

	console.log("Array: ",arr)

  const v = arr.map(
		
		(lang, index) => 
		  {

				return <div key={lang+index} className="border-2 border-solid border-white min-w-[300px]">{`lang: ${lang} at index: ${index}`}</div>;
			}
	
	);


  return (
    <section>
      <div>{`My name is ${sampleuser.name}`}</div>
      <div>{`My name is ${sampleuser.email}`}</div>

      <div className="mappeditems">
        {v}
      </div>
    </section>
  );
};

export default MyUser;
