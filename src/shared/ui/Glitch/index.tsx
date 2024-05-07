import cn from 'classnames';

export const Glitch = ({
	className,
	text,
}: {
    className?: string,
    text: string,
}) => (
	<span
        className={cn(
            className,
            'glitch',
        )}
        data-text={text}
    >
        {text}
    </span>
);
