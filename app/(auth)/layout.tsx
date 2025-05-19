import  { ReactNode } from 'react'

const AuthLayout = ({children}: {childre: ReactNode}) => {
  return (
    <div className="auth-layout">
      {children}
    </div>
  )
}

export default AuthLayout
