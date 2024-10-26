export function Background({children, style}:{children: React.ReactNode; style?:React.CSSProperties}) {
    const styles: React.CSSProperties = {
        top: '0',
        left: '0',
        padding: '20px 0px',
        width: '100vw',
        overflowY: 'auto',
        minHeight: '100vh',
        boxSizing: 'border-box',
    }
    return (
        <div style = {{...styles,...style}} >
            {children}
        </div>
    )
}