/** @format */
import React from "react";
import "../css/Login.css";
import {auth,provider} from "../firebase"

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => {
      alert(err)
    })
  }

  return (
    <div className="login">
      <div className="loginz">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX///82xfAutn3ssi7gHlrfAFEds3frrx0ow++p4/f12qen3MPvo7XssCYmtXrfE1beAEkAsHDrrADeAE3eAEbrrhXD59YSwO/q+P256Pm34s7N7vv86u/99+v34Lfc8/zb8Oad3/dr0fNcwpWL0rHytMP78NzmXoLlU3rvv1zzz4v+/fnF7PrP7N7r9/F81fRGvYp4y6VUzPKO2vX2ydT52uH56MnsjKPwwmfulqv01ZvkRnLuvFDobIvxxnPjOmv2zNfpd5Pttj399ffyr7/yyn7lZ025AAAIK0lEQVR4nO2caVuiUBSAFQWZDBCRsLSyzBbby/a9Zv7/XxrIhfUeLnII4jnv187w8Hruxr3nTqVCEARBEARBEARBEARBEARBEARBEARBEES3d3Jyss0ROFhbWzs9y/x9kOmdy5ZsY1lXO10g7qx5oeuSjS5drv3Y26VnvWrJ1Tmydc5yPLvUJVWYoerCxo++5fJ0r6yqD9n6ExnY1Bd6U6SLX9FYe7JcDSLvRgQOJSGIKp3++Psm5sQK+TmKV6HAi7CgjV743rgdKRiRxYgMThUHebx2AsItdK6444trMgTtlprTm3NyzjSsWt4R9UxnCQrSZW5vz0GX0UZD7XSoMg0FvcgDKpBCO4nuAmfATqHdTIucREiwKl8v4vaYvfA7iTkaxHACGlari0DIz+6JxZ0xrmHDxVgDjDPfhnu5WkDswoZybxZ3CjZSQR3magEBt9GqvD6L24ANBSFXC4iYbijPF+Ds6X6WxFwtIOJy+PsNr0pvCE74pTDcKb0h69OpPIYxQ00ZDP/AC9MSGMYsvctguA71xFIYgkvTchhWrtiKJTGsVNmbUSUxrOyy+mJpDCvrEbve5TJ0lm9W1N5+iQwrld7OblUOYJXKEIQMybD4kCEZFh8yzNXw5Do8k7Op7l6fRDxkGcNB8/JCUIXhXqbHNt3z79dOgLOSOQ8VRiU3bAq6pDqnqqok6ZeZHaGeW4nsFpbWeUrDDdX3D1Q9mzPU7WTZ82ey53tUQsNh6DBOUgf4gtF1MrxY695nJTOMLLzBr7vppRK0Fb0jTiLDi+iiBh25eqq7dAtdKHrGmySGrMoiQcIdb4D9JW6WMtxgHoirF5iC4DYoJ7JboJjAEIiUMIs10/s5iksYwpF4gmmHmZnhYjzlNwRKp1DH05iTT17DRdkXt+EpWJaCWDyFImgPp4kN4dopQcIShOrxEhnOJwxuQ6jAT0Cs8esh5VCez/rchnCYgFYzHVeuxm04H2q4DWPi0Arg0AwT7wj/OsPEVV8/ZRhTYsFvmLhyL8YQr+odayxNXH0ZZ4glGFfNxc3igfAk4Da+mFzjrb1jap044a+CPuYzlJpohjhT/hKV7LAhZlE/xsKU/zbCgM8QtaYfI4nej3woid4Xhxsz6kd++p7o6YUO7J4oHbtRkCFiL/wmpkg9XjB4eY2xweTfYYK+8NHL3dPt1MjV0AOjFXXf1gTbUELdpZmSJosR1w8j90FVvyDbED+DDjvLbeo72/rXkQ/cC9+SHfgjGIaqjtwH53R3l3GUrV3WnfXBUHcdVEkNvXekoaQPs7vdtn1dtfjP1r5raKrX0J38wZ76fVld0vVhxObg9G8+dGFvkJXelG5v/Q836z3oMv6Us9ON5sZa9Fs3g2z8vv+agCAIgigl/cno72qAyMCb0Wh1NOnHPnDzdmuFm63bTWyhwFvf1VuGIQZohQNHBx0nzjBa2t0N8MD9sdI2G/yYZrs23s/Mr3/QErV6GDEYuKoZbpzYOmQ57h+1lVpiGu37jBL50InSCxve1A3/37XOXeQDx8v4OSjtxywED41ov6DhqBX+IYynr9Dzjp8by/k5mEf4gm8iS9BvOOpEhWhvQcXjzyUTOKXxjC14wBb0Gb5HCtqKT4EHPqcStBXvcQVXmU3Ub/jF/CEMf18cp2iiU0zUvthnZCZk+MIYjGw63hF1v51WsFZrY46owIv7DG9a7Cjt0PPAo5Rt1EF5xRPsAy/uMwR/iZabRIwUoibxARhmvIZf4C8huj1xjJBCe7DB64lvYCN1DUfQeGS308UDUQRryieW4Bc4zngM7+Bct+bL8E2URmo302PGGyflBk6Na3gI59qYzOJuTRxDE2sNPuE1rMcYjmZxW6knw5nhLZJhTPdyDWHBujj/kFzBMtwqqiFaDrEM32MM64kNsfohViuNmfDdxQqv4T6SId6UHzPhL2ZyXsMK0mxhYgnGLEuN98SGGMtS1IUpPF24SxVuQ5yOiNYNK/BEJz4kN0RatuEJgvOF6O5P8BuuICQRba745on58q2/bhS/YSXdLo2DgrtT02clUTzwRCUwTP+FaCJvmk6ivy+0N29QAsPKVkrFNuIwM1OM2Aatiz7BRIYpFfEF7W8oLTTxtw78IYkMK7eNpftiQ8nm7OLDl0ZN1EaBgGSGlePX5bb1lfY/rE/fIP0PwxA120PTxFY9fKiW0NAeb17bppLIUmmY5r9MT9gmd4f29P/2shp1npTY0M7j1viopnDzeTS+zSp/PCxh+MsgQzIsPmRIhsWHDBc7wu1gnUzt6DGDpTQ+Kfa87dWY8pjnaoWPlLv6jQbqvkQWpD63MJELLNBJfzLT+Cx2S0U4e8I7180EjNM17EogXFDOD3G3QZHBOSFVcnWAwTFsrOQqAYJ1yp2rBAiSYTu7Mue0IBki1jphg2SIWZKHDJZhcWd9tHqaXC0g4gznR41xhsWdEbmrvmJOgIvbSpEq95QMrhoggVR92RjnagERV8S4CIQbKWYVCTagobcKGhxqzAJ/BX9gVLIr/3I0iAOq8dO8R+L3wLEo6j0KdD7YY03He9kSGGsaRU6hjcZqp8aDL+6ROWEoBe6FDqxbM+JhIPCIMdgU+NNpRnRpUaDwxiH6+mEWdTLYTIxwQzUOIgLvww1VKfJU6NJ/CjhqnYfIwJVgOY35XOhh1MOo7jpqYuuFdWV987Xt1kUpZq3I+4hBJi9iy3DovD1AV/I3Hz/bpkPbfP0VDdRL/300mtyEbzgHOd6/3cr8PxIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiF/Bf5SB855FBhnrAAAAAElFTkSuQmCC"
          alt=""
        />
        <h1>Sign in into Slack-Clone</h1>
        <p>built-by-oladips-korede</p>
        <button onClick={handleLogin}>Sing in with Google</button>
      </div>
    </div>
  );
};

export default Login;
