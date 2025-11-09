import { Button } from "./button"

type BaseButtonProps = Parameters<typeof Button>[0]
type ButtonProps = Omit<BaseButtonProps, "asChild"> // it wouldn't make sense to pass asChild to Link

interface LinkProps extends ButtonProps {
    href: string
    children: React.ReactNode
    class?: string // Support Astro's class prop
    className?: string
}

export default function Link({ href, children, class: classFromAstro, className, ...props }: LinkProps) {
    // Merge class and className (prefer className if both are provided)
    const finalClassName = className || classFromAstro

    return (
        <Button asChild className={finalClassName} {...props}>
            <a href={href}>{children}</a>
        </Button>
    )
}