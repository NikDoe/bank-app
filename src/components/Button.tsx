import { CSSProperties, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
	disabled: boolean;
}

const defaultButtonStyles: CSSProperties = {
	padding: '5px 10px'
};

function Button(props: ButtonProps) {
	const {
		children,
		onClick,
		disabled
	} = props;
    
	return (
		<button 
			style={defaultButtonStyles}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
