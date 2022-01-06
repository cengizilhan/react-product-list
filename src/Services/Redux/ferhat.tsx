///test ts

import React from "react";

type Props = {
  text: String;
  number: Number;
  isText?: false;
  isSection?: false;
};

const OtherHeading: React.FC<Props> = ({ text, number, isText, isSection }) => {
  var content = isText ? text : number;

const IsClass = (params) => {
    if (params) {
        return <div>
             {params.text}
        </div>
    }
    if (params) {
        return <section>
             {params.text}
        </section>
    }
}

  return (
      var params = text, number, isText, isSection 
    <IsClass params={}/>
    // isSection ? <section>{content}</section> : <div>{content}</div>
  )
};



/*
is section true >
<section>text - number</section> ? istext
*/

export default function App() {
  return (
    <OtherHeading text="text" number={1} isText={true} isSection={true}>
      ferhat
    </OtherHeading>
  );
}
