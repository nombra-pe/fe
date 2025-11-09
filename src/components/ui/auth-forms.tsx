import { useState } from "react"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"

export function AuthForms() {
    const [isLogin, setIsLogin] = useState(true)

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically validate credentials and authenticate
        // For now, we'll just navigate to the app
        window.location.href = "/app"
    }

    const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically create the account
        // For now, we'll just navigate to the app
        window.location.href = "/app"
    }

    return (
        <div className="w-full">
            {isLogin ? (
                <LoginForm
                    onSubmit={handleLoginSubmit}
                    onSwitchToSignup={() => setIsLogin(false)}
                />
            ) : (
                <SignupForm
                    onSubmit={handleSignupSubmit}
                    onSwitchToLogin={() => setIsLogin(true)}
                />
            )}
        </div>
    )
}
