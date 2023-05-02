import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  let handleChange = (e) => {
    setLoginUser(() => ({
      ...loginUser,
      [e.target.name]: e.target.value,
    }));
  };
  const { username, password } = loginUser;
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      history.push("/Assessment");
    }
  }

  return (
    <div className="container h-100 d-flex justify-content-center">
        <div className="row p-3">
        <form>
            <table>
              <tr>
                <td>
                  <div className="form-group">
                    Username<br />
                    <input
                      type="text"
                      name="username"
                      autoComplete="off"
                      style={{
                        fontSize: "16px",
                        color: "#012040",
                        lineHeight: "24px",
                        fontWeight: "400",
                      }}
                      value={loginUser.username}
                      onChange={handleChange}
                      size="50"
                      className={
                        "form-control form-control-lg" +
                        (submitted && !loginUser.username ? "is-invalid" : "")
                      }
                      placeholder="Username"
                    />
                    {submitted && !loginUser.username && (
                      <div className="text-danger invalid-feedback">User Name required</div>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2"></td>
              </tr>
              <tr>
                <td>
                  <div className="form-group ">
                  Password<br />
                    
                      <input
                        type={"password"}
                        style={{
                          fontSize: "16px",
                          color: "#012040",
                          lineHeight: "24px",
                          fontWeight: "400",
                        }}
                        name="password"
                        value={loginUser.password}
                        onChange={handleChange}
                        className={
                          "form-control form-control-lg" +
                          (submitted && !loginUser.password ? "is-invalid" : "")
                        }
                        placeholder="Password"
                        maxLength="20"
                        size="50"
                      />
                    {submitted && !loginUser.password && (
                      <div className="text-danger invalid-feedback">Password is required</div>
                    )}
                     
                    </div>
                   
                 
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="form-group">
                    <button
                      className={
                        (loginUser.userName && loginUser.password) === ""
                          ? "buttonDisable  w-100"
                          : "buttonActive w-100"
                      }
                      type="submit"
                      id="login"
                      onClick={handleSubmit}
                    >
                      LOGIN
                    </button>
                  </div>
                </td>
              </tr>
             </table>
          </form>
        </div>
    </div>
  );
};
export default LoginPage;
