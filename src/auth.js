
export function validateLogin(email, password) {
    if (!email.trim() || !password) {
        return {
            success: false,
            message: "Please enter your email and password.",
        };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return {
            success: false,
            message: "Please enter a valid email address.",
        };
    }

    return {
        success: true,
        message: "Demo login submitted successfully!",
    };
}
