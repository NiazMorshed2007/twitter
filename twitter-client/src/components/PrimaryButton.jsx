const PrimaryButton = ({ children, style }) => {
    return <button className={`bg-primary text-white ${style} flex items-center justify-center transition-all hover:bg-primary/80`}>{children}</button>
}

export default PrimaryButton