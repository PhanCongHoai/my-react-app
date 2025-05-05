import React from 'react';
import '../CSS/Dieu_Khoan_Su_Dung.css'; // File CSS để định dạng giao diện

const TermsOfService = () => {
  return (
    <div className="terms-container">
      {/* Tiêu đề chính */}
      <h1 className="main-title">Điều Khoản Sử Dụng</h1>

      {/* Phần giới thiệu */}
      <p className="intro">
        Chào mừng quý khách đến mua sắm tại website FAHASA. Vui lòng xem kỹ các quy định và hợp tác với chúng tôi để xây dựng 1 website FAHASA ngày càng thân thiện và phục vụ tốt những yêu cầu của quý khách hàng FAHASA. Sau khi quý khách đã hoàn tất việc đăng ký tài khoản FAHASA thì mọi thông tin, tài khoản của quý khách sẽ được quản lý theo chính sách của FAHASA. Ngay sau khi quý khách có bất kỳ hoạt động nào trên website FAHASA bao gồm đăng ký, đăng nhập, mua hàng,..., quý khách vui lòng liên hệ với FAHASA theo số điện thoại hotline 1900636467 hoặc email chính thức của FAHASA là <a href="mailto:cskh@fahasa.com.vn">cskh@fahasa.com.vn</a>.
      </p>

      {/* Tiêu đề phụ và nội dung */}
      <h2 className="section-title">Tài Khoản của khách hàng</h2>
      <p>
        Một số dịch vụ, tính năng tại đây yêu cầu quý khách cần phải đăng ký tài khoản FAHASA thì mới có thể sử dụng. Do đó, để hỗ trợ người dùng dễ dàng tiếp cận các dịch vụ và tính năng ngay, quý khách vui lòng cho phép FAHASA thực hiện xử lý các dữ liệu của mình theo các điều khoản sau:
      </p>
      <ul>
        <li>
          <strong>Dữ liệu của khách hàng cơ bản bắt buộc phải cung cấp:</strong> Là các thông tin giúp xác định thông tin đối với từng tài khoản FAHASA, bao gồm họ tên, địa chỉ email, số điện thoại...
        </li>
        <li>
          <strong>Trước hợp quý khách đăng ký tài khoản FAHASA thông qua tài khoản Facebook hoặc Google:</strong> Các dữ liệu của bạn bao gồm họ tên, địa chỉ email, số điện thoại,... sẽ được gửi đến FAHASA ngay khi quý khách cho phép FAHASA tiếp cận các thông tin của quý khách trên các nền tảng này để quý khách có thể sử dụng các thông tin của quý khách trên các nền tảng này để đăng nhập vào website của FAHASA.
        </li>
        <li>
          <strong>Dữ liệu của khách hàng cơ bản tự nguyện cung cấp:</strong> Là các thông tin thiết kế để phục vụ một số dịch vụ đặc biệt, địa chỉ giao hàng, địa chỉ thanh toán, phương thức thanh toán,... của quý khách.
        </li>
        <li>
          <strong>Dữ liệu của khách hàng cơ bản truy cập trên website:</strong> Là các thông tin mà quý khách có thể chia sẻ (không bắt buộc) để FAHASA có thể hỗ trợ hoặc trải nghiệm sử dụng dịch vụ tại FAHASA, bao gồm ngày tháng năm sinh, giới tính, sở thích, nghề nghiệp,... của quý khách.
        </li>
      </ul>

      <p>
        Việc sử dụng dịch vụ và bảo mật thông tin tại FAHASA là trách nhiệm rất quan trọng đối với FAHASA. Quý khách cần giữ mật khẩu tài khoản FAHASA, hoặc nếu có bất kỳ hành vi nào từ các đối tượng không rõ nguồn gốc có thể gây ảnh hưởng đến tài khoản FAHASA của quý khách, quý khách cần đảm bảo tài khoản FAHASA của quý khách ngay khi phát hiện sự cố để tránh các thiệt hại không đáng có.
      </p>

      {/* Quyền lợi khách hàng */}
      <h2 className="section-title">Quyền lợi và bảo mật dữ liệu của khách hàng</h2>
      <p>
        Trong trường hợp phát sinh các dữ liệu khách hàng bất kỳ không đúng hoặc sai sót đến từ phía FAHASA, FAHASA sẽ thông báo và cập nhật lại thông tin để đảm bảo quyền lợi của khách hàng. Khi cần thiết, FAHASA sẽ thông báo với khách hàng về việc xử lý dữ liệu và các thay đổi trong tài khoản FAHASA của quý khách, vui lòng cập nhật lại thông tin trong tài khoản FAHASA.
      </p>

      {/* Tiêu đề cuối cùng */}
      <h2 className="section-title">Quyền lợi và bảo mật dữ liệu của khách hàng</h2>
      <p>
        Quý khách vui lòng đọc kỹ các điều khoản sử dụng tại FAHASA để hiểu rõ quyền lợi và trách nhiệm của mình trong việc sử dụng dịch vụ tại FAHASA. Quý khách cần đảm bảo tài khoản FAHASA sau mỗi lần sử dụng để đảm bảo tài khoản của mình.
      </p>
    </div>
  );
};

export default TermsOfService;