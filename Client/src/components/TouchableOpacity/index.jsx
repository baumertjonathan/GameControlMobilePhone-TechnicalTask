import React from 'react'

export default function TouchableOpacity({ className, children, ...rest }) {
  const [touched, setTouched] = React.useState(false)

  return (
    <button
      style={{ opacity: touched ? 0.5 : 1, transition: 'opacity 300ms ease' }}
      onMouseDown={() => setTouched(true)}
      onMouseUp={() => setTouched(false)}
      {...rest}>
      {children}
    </button>
  )
}