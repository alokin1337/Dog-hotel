//import npm package
import React from 'react';
import {Row,Input,Icon,Button,Autocomplete} from 'react-materialize';
import axios from "axios";
//import components and containers
import '../../styles/containers/UserDash.scss';
//import assets


export default class AdminDash extends React.Component {
    
        // this.handleChange = this.handleChange.bind(this);
    
        state = {
         
            username: '',
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            phone:'',
            petID:'',
            petNickname:'',
            Breeds:'',
            group1:'',
            female:'',
            on:'',
            chipID:'',
        //   islogin:false,
        //   isadmin:false,
        }
      handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("ova se zivki");
        console.log(this.state.username);
        console.log(this.state.firstName);
        
     }
     handleSubmit = event => {
        event.preventDefault();
        if(this.state.male){
            
        }
        let user =JSON.stringify( {
          username: this.state.username,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: sessionStorage.getItem("eMail"),
          password: this.state.password,
          phone: this.state.phone,
          petID: this.state.petID,
          petNickname: this.state.petNickname,
          Breeds: this.state.Breeds,
          group1: this.state.group1,
          on: this.state.on,
          chipID: this.state.chipID
          

        });
        console.log(user)
        axios.post(`http://localhost:3001/modify`, user,{headers:{'Content-Type':'application/json'}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            // if(res.data == true){
            //   window.location.href = "/login";

            // }else {
            //   window.location.href = "/reg";

            // }
          })
      }
    componentDidMount () {
        let year = $('.datepicker').pickadate('picker').get('highlight', 'yyyy');
        let day= $('.datepicker').pickadate('picker').get('highlight', 'dd');
        let month = $('.datepicker').pickadate('picker').get('highlight', 'mm');
        console.log(month);
    }

    render(){
        let today = new Date().toISOString().split("T")[0];
        let _this = this;
        return(
            <div className="userDashDiv">
                <Row>
                <form onSubmit={this.handleSubmit}>
                <Row>
                    <h5>User informations</h5>
                    <Input s={6} type="text" label="Add First Name" name="firstName" onChange={this.handleChange.bind(this)} ><Icon>account_circle</Icon></Input>
                    <Input s={6} type="text" label="Add Last Name" name="lastName" onChange={this.handleChange.bind(this)}><Icon>account_circle</Icon></Input>
                    <Input s={6} type="text" label="Add User Name" name="username" onChange={this.handleChange.bind(this)}><Icon>person</Icon></Input>
                    <Input type="password" label="Add password" s={6} name="password" onChange={this.handleChange.bind(this)}><Icon>lock</Icon></Input>
                    {/* <Input type="email" label="Change Email" s={6} ><Icon>email</Icon></Input> */}
                    <Input s={6} label="Add Telephone" validate type='number' name="phone" onChange={this.handleChange.bind(this)}><Icon>phone</Icon></Input>
                    </Row>
                    <hr/>
                    <Row>
                    <h5>User pet informations</h5>
                    <Input s={6} label="First Name in travel ID" name="petID" onChange={this.handleChange.bind(this)}/>
                    <Input s={6} label="Nickname" name="petNickname" onChange={this.handleChange.bind(this)}/>
                    {/* <Row>
                        <Input type="file" label="File" s={12} multiple placeholder="Upload images from your pet" />
                    </Row> */}

                    <Row>
                    <Input s={6} label="Chip ID" name="chipID" onChange={this.handleChange.bind(this)}/>

                    {/* </Row>
                    <Row> */}
                    
                    
                        <Input s={3} name='on' type='date' label="Pick a birthday" className='datepicker' icon=' cake'  value={today} onChange={this.handleChange.bind(this)}/>
                    </Row>
                    <Row>
                        <Input s={6} name='group1' type='radio' value='masko' label='mashko' className='with-gap'  onChange={this.handleChange.bind(this)}/>
                        <Input s={6} name='group1' type='radio' value='zensko' label='zensko' className='with-gap' onChange={this.handleChange.bind(this)}/>
                    </Row>
                    <Autocomplete
                            icon='pets'
                            s={4}
                            placeholder='Breeds'
                            
                            name="Breeds" onChange={this.handleChange.bind(this)}
                        />

                        <Button waves='light' type="submit" > Add User</Button>
                    </Row>
                </form>
                </Row>
            </div>
        );
    }
}
