import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup=()=> {
    const [fullName,setFullName] =useState("");
const [email,setEmail] = useState("");
const [phone, setPhone]= useState("");
const [aboutMe,SetAboutMe] = useState("");
const [password, setPassword]=useState("");
const [avatar,setAvatar]=useState("");
const [resume,setResume]=useState("");
const [portfolioURL,setPortfolioURL]=useState("");
const [githubURL,setGithubURL]=useState("");
const [instagramURL,setInstagramURL]=useState("");
const [twitterURL,setTwitterURL]=useState("");
const [linkedInURL,setLinkedInURL]=useState("");
const [facebookURL,setFacebookURL]=useState("");



const handleOnClick= async()=>{
 await axios.post("http://localhost:4000/api/v1/user/register",{
      fullName:fullName,
        email:email,
        phone:phone,
        aboutMe:aboutMe,
        password:password,
        avatar:avatar,
        resume:resume,
        portfolioURL:portfolioURL,
        githubURL:githubURL,
        instagramURL:instagramURL,
        twitterURL:twitterURL,
        linkedInURL:linkedInURL,
        facebookURL:facebookURL,
    });
};
    return ( 
        <div style={{textAlign:'center', textColor:"black", margin:"auto"}} className="container p-5 m-3">
        <div className="row">
            <div className="row login-form mt-4 mb-4">

                <div className="col-6 offset-3">
                    <div className="login-form-title offset-2"> Register With Us!</div>
                  <form  onSubmit={handleOnClick} novalidate className="row g-3 needs-validation" >
                    <div className="col-md-6">
                        <label for="fullName" className="form-label">FullName</label>
                        <input name="user[fullName]" value={fullName}  onChange={(e)=>setFullName(e.target.value)} type="text" className="form-control" id="inputFullName4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please enter fullname.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="email" className="form-label">Email</label>
                        <input name="user[email]" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="inputEmail4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please enter Email.
                        </div>
                      </div>
                        <div className="col-md-6">
                            <label for="phone" className="form-label">Phone</label>
                            <input name="user[phone]" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="inputPhone4" required/>
                            <div className="valid-feedback">
                              Looks good!
                            </div>
                            <div className="invalid-feedback">
                              Please  enter the Phone.
                            </div>
                          </div>
                        <div className="col-md-6">
                        <label for="aboutMe" className="form-label">about</label>
                        <input name="user[aboutMe]" type="text" value={aboutMe} onChange={(e)=>SetAboutMe(e.target.value)}  className="form-control" id="inputAboutMe4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please  enter Address.
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="password" class="form-label">Password</label>
                        <input name="user[password]" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="inputPassword4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please enter a valid password.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="portfolioURL" className="form-label">avatar</label>
                        <input name="user[portfolioURL]" type="file" value={avatar} onChange={(e)=>setAvatar(e.target.value)} className="form-control" id="inputPortfolioUrl4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please  enter avatar.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="githubURL" className="form-label">resume</label>
                        <input name="user[githubURL]" type="file" value={resume} onChange={(e)=>setResume(e.target.value)} className="form-control" id="inputGithubUrl4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please  enter Account Number.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="instagramURL" className="form-label">portfolioURL</label>
                        <input name="user[instagramURL]" type="text" value={portfolioURL} onChange={(e)=>setPortfolioURL(e.target.value)} className="form-control" id="inputInstagramUrl4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please  enter IFSC Code.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="twitterURL" class="form-label">githubURL</label>
                        <input name="user[twitterURL]" type="text" value={githubURL} onChange={(e)=>setGithubURL(e.target.value)} className="form-control" id="inputTwitterUrl4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please  enter Account Holder Name.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="linkedInURL" className="form-label">instagramURL</label>
                        <input name="user[linkedInURL]" type="text" value={instagramURL} onChange={(e)=>setInstagramURL(e.target.value)} className="form-control" id="inputLinkedInUrl4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          Please  enter Bank Name.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="twitterURL" className="form-label">twitterURL</label>
                        <input name="user[twitterURL]" type="text" value={twitterURL} onChange={(e)=>setTwitterURL(e.target.value)} className="form-control" id="inputAvatar4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          choose your profile photo.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="linkedInURL" className="form-label">linkedInURL</label>
                        <input name="user[linkedInURL]" type="text" value={linkedInURL} onChange={(e)=>setLinkedInURL(e.target.value)} className="form-control" id="inputAvatar4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          choose your profile photo.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label for="facebookURL" className="form-label">facebookURL</label>
                        <input name="user[facebookURL]" type="text" value={facebookURL} onChange={(e)=>setFacebookURL(e.target.value)} className="form-control" id="inputAvatar4" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                        <div className="invalid-feedback">
                          choose your profile photo.
                        </div>
                      </div>

                      <div className="col-12">
                        <button type='submit' className="btn btn-primary offset-4">Sign Up</button>
                      </div>
                     
                    </form>
              </div>
        </div>
           </div> 
           </div>
     );
}

export default Signup;
