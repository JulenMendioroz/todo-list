export function Button({ className = '', ...rest }: React.ComponentProps<'button'>) {
  return <button className={`btn ${className}`} {...rest} />
}
