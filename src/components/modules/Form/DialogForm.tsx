import { Dialog } from '@/components/ui';
import { FC, ReactNode } from 'react';

export interface DialogFormProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	title?: string;
	description?: string | ReactNode;
	children: ReactNode;
	formId?: string;
}

const DialogForm: FC<DialogFormProps> = ({ isOpen, onOpenChange, title, description, children }) => {
	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>{title}</Dialog.Title>
					<Dialog.Description>{description}</Dialog.Description>
				</Dialog.Header>
				{children}
			</Dialog.Content>
		</Dialog.Root>
	);
};

DialogForm.displayName = 'DialogForm';

export default DialogForm;
