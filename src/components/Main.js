// Right side of the App, allowing the edition of CV

import React, {Component} from "react";
import Preview from "./Preview"

// import uniqid from "uniqid";

class Editing extends Component{

  constructor() {
    super();

    this.state = {
      intro: {
        name: 'Bob',
        address: 'Hey',
        mail: '',
        number: '',
        linkedin: '',
        otherLink: '',
      },
      // profile: {
      //   description: ''
      // },
      // education: {
      //   titleEdu: '',
      //   degreeEdu: '',
      //   subjectEdu: '',
      //   descriptionEdu: '',
      //   yearEdu: ''
      // },
      // workExp: {
      //   titleWork: '',
      //   descriptionWork: '',
      //   locationWork: '',
      //   startWork: '',
      //   endWork: ''
      // },
      // skills: {
      //   categorySkill: '',
      //   skillArray: []
      // }
    }

    this.nameChange = this.nameChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.mailChange = this.mailChange.bind(this)
    this.numberChange = this.numberChange.bind(this)
    this.lkdChange = this.lkdChange.bind(this)
    this.otherChange = this.otherChange.bind(this)
  }


  nameChange = (e) => { this.setState({ intro: { name: e.target.value }})};
  addressChange = (e) => { this.setState({ intro: { address: e.target.value }})};
  mailChange = (e) => { this.setState({ intro: { mail: e.target.value }})};
  numberChange = (e) => { this.setState({ intro: { number: e.target.value }})};
  lkdChange = (e) => { this.setState({ intro: { linkedin: e.target.value }})};
  otherChange = (e) => { this.setState({ intro: { otherLink: e.target.value }})};


  render(){
    const { intro } = this.state;

          return (
      <div className="main">
        
        <Preview 
                  name= {intro.name}
                  address= {intro.address}
                  mail= {intro.mail}
                  number= {intro.number}
                  linkedin= {intro.linkedin}
                  otherLink= {intro.otherLink}
        />

        <div className="editingDiv">

          <div className="introEdit">
            
            <div className="nameDiv">
              <label htmlFor="nameInput">Name</label>
              <input 
                className="nameInput" 
                value={intro.name || ''}
                onChange={this.nameChange}
                id="nameInput"
              />
            </div>

            <div className="addressDiv">
              <label htmlFor="addressInput">Address</label>
              <input 
                className="addressInput" 
                value={intro.address || ''}
                onChange={this.addressChange}
                id="addressInput"
              />    
            </div>

            <div className="mailDiv">
              <label htmlFor="mailInput">Mail</label>
              <input 
                className="mailInput" 
                value={intro.mail || ''}
                onChange={this.mailChange}
                id="mailInput"
              />    
            </div>

            <div className="numberDiv">
              <label htmlFor="numberInput">Phone number</label>
              <input 
                className="numberInput" 
                value={intro.number || ''}
                onChange={this.numberChange}
                id="numberInput"
              />    
            </div>

            <div className="linkedinDiv">
              <label htmlFor="linkedinInput">Linkedin</label>
              <input 
                className="linkedinInput" 
                value={intro.linkedin || ''}
                onChange={this.lkdChange}
                id="linkedinInput"
              />    
            </div>

            <div className="otherDiv">
              <label htmlFor="otherLinkInput">Other</label>
              <input 
                className="otherLinkInput" 
                value={intro.otherLink || ''}
                onChange={this.otherChange}
                id="otherLinkInput"
              />    
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Editing ;