import jwtDecode from "jwt-decode"

// Validates that the token and any other related fields in localstorage are set and valid
function validateToken(navigate, token, user_id) {
    if (!token || !user_id) {
        alert("Session expired. Please login again")
        navigate("/")
        return
    }

    let decoded = jwtDecode(token)
  
    if (decoded.exp * 1000 < Date.now()) {
        alert("Session expired. Please login again")
        navigate("/")
        return
    }
}


export {validateToken}