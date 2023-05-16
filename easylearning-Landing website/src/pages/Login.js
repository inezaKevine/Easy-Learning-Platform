import "./login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = "https://easylearningdashboard.vercel.app/";
  };

  return (
    <div class="containerAll">
      <div class="container1">
        <input type="checkbox" id="flip" />
        <div class="cover1">
          <div class="front1">
            <img
              class="frontImg1"
              src="https://thumbs.dreamstime.com/b/young-black-freelancer-woman-working-laptop-home-office-taking-notes-sitting-desk-near-window-looking-screen-writing-198331565.jpg"
              alt=""
            />
            <div class="text1">
              <span class="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span class="text-2">Let's get connected</span>
            </div>
          </div>
          <div class="back1">
            <img
              class="backImg1"
              src="https://img.freepik.com/premium-photo/smiling-african-american-man-sitting-desk-working-laptop-taking-notes-notebook-black-male-studying-online_116547-26697.jpg?w=2000"
              alt=""
            />
            <div class="text1">
              <span class="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span class="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div class="forms1">
          <div class="form-content1">
            <div class="login-form1">
              <div class="title1">Login</div>
              <form action="#">
                <div class="input-boxes1">
                  <div class="input-box1">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box1">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div class="text1">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div class="button1 input-box1">
                    <a
                      style={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        backgroundColor: "#007bff",
                        padding: "10px 20px",
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}
                      href="https://easylearningdashboard.vercel.app/"
                    >
                      Login
                    </a>
                  </div>
                  <div class="text1 sign-up-text1">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div class="signup-form1">
              <div class="title1">Signup</div>
              <form action="#">
                <div class="input-boxes1">
                  <div class="input-box1">
                    <i class="fas fa-user1"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div class="input-box1">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box1">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div class="button1 input-box1">
                    <input type="submit" value="Submit" onClick={handleLogin} />
                  </div>
                  <div class="text1 sign-up-text1">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
