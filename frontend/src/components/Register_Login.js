import React, { useState } from "react";
import "../CSS/Login_Register.css";
import { registerService } from "../services/authService";

function LoginForm() {
  const [activeTab, setActiveTab] = useState("login");

  // Đăng nhập
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Đăng ký
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);

  const handleLogin = () => {
    alert("Đăng nhập thành công (giả lập)");
  };

  const handleRegister = async () => {
    if (!phone || !otp || !regPassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    let Email = "sdcsfgfes@gmail.com";
    let Username = "hoaif";
    let Password = regPassword;
    let data = { Email, Username, Password };
    await register(data);
  };

  const register = async (information) => {
    try {
      let data = await registerService(information);
      console.log("🚀 ~ register ~ data:", data);
    } catch (e) {
      console.log("❌ Lỗi đăng ký:", e.response?.data || e.message);
    }
  };

  const sendOtp = () => {
    if (!phone) {
      alert("Vui lòng nhập số điện thoại!");
      return;
    }
    alert(`✅ Mã OTP đã được gửi tới ${phone}`);
  };

  return (
    <div className="login-wrapper">
      <div className="tab-menu">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          Đăng nhập
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => setActiveTab("register")}
        >
          Đăng ký
        </button>
      </div>

      {activeTab === "login" && (
        <div className="login-container">
          <label>Số điện thoại/Email</label>
          <input
            type="text"
            placeholder="Nhập số điện thoại hoặc email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Mật khẩu</label>
          <div className="password-wrapper">
            <input
              type={showLoginPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? "Ẩn" : "Hiện"}
            </span>
          </div>

          <div className="forgot-password">
            <a href="#">Quên mật khẩu?</a>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
      )}

      {activeTab === "register" && (
        <div className="login-container">
          <label>Số điện thoại</label>
          <div className="otp-wrapper">
            <input
              className={phone === "" ? "error-input" : ""}
              type="text"
              placeholder="Nhập số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="otp-btn" onClick={sendOtp}>
              Gửi mã OTP
            </button>
          </div>
          {phone === "" && (
            <p className="error-text">Thông tin này không thể để trống</p>
          )}

          <label>Mã xác nhận OTP</label>
          <input
            type="text"
            placeholder="6 ký tự"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <label>Mật khẩu</label>
          <div className="password-wrapper">
            <input
              type={showRegPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
            />
            <span
              className="toggle-password"
              onClick={() => setShowRegPassword(!showRegPassword)}
            >
              {showRegPassword ? "Ẩn" : "Hiện"}
            </span>
          </div>

          <button
            className="login-btn"
            onClick={handleRegister}
            disabled={!phone || !otp || !regPassword}
          >
            Đăng ký
          </button>

          <p className="register-note">
            Bằng việc đăng ký, bạn đã đồng ý với Fahasa.com về
            <br />
            <a href="#">Điều khoản dịch vụ</a> &{" "}
            <a href="#">Chính sách bảo mật</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
