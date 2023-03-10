import React from 'react';
import './App.css';
import { marked } from "marked"
import Badge from "react-bootstrap/Badge";

marked.setOptions({
  breaks: true,
  gfm: true,
});
const defaultMarkdown = `# My React Markdown and Heading
-----
##  Sub Heading
<br>

### List  Check 

- *Italic text for Markdown Check*
-  **Testing bold are working**
<br>

\`\`\`javascript
const numbers = [1,2,3,4,5];
for(let num of numbers) {
  console.log(num);
}
\`\`\`
<br>

> “If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.”
― Nikola Tesla

<br>

### \`BONUS: Use <br> for line breaks\` ###
<br>

![FCC Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Coded by **Jonão**, 2023 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: defaultMarkdown
    };
  };
  updateMarkdown(markdown) {
    this.setState({ markdown })
  }
  render() {
    let inputStyle = {
      width: "650px",
      height: "70vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    let outputStyle = {
      width: "650px",
      height: "70vh",
      backgroundColor: "#FFFFFF",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
    };

    return(
    <div className="App">
     <div className='fluid-container'>
     <div className="row mt-4">
     <div className="col text-center">
      <h1>
      {" "}
      <Badge className="badge" id='headerBadge' bg='primary' >Markdown Previewer</Badge></h1>
      </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
        {" "}
        <div className="col text-center">
        <h4 id='h4Corretion'>
        <Badge className="badge" id='sameBadge' variant="secondary">Markdown Input</Badge>
        </h4>
        </div>
     <div className='input' style={inputStyle}>
     <textarea style={{...inputStyle, resize: 'none'}} id='editor' className='input'
     value={this.state.markdown}
     onChange={(e) => {
    this.updateMarkdown(e.target.value)}}
     > {" "}</textarea>
     </div>
     </div>

     <div className="col-md-6">
     {" "}
      <div className="col text-center">
      <h4>
        <Badge className="badge" id='sameBadge' variant="secondary">Preview</Badge>
        </h4>
        </div>
     <div id='preview' style={outputStyle}
     dangerouslySetInnerHTML={{ 
      __html: marked.parse(this.state.markdown) 
    }}
      ></div>
      </div>
      </div>
      </div>
      </div>
    );
}
}