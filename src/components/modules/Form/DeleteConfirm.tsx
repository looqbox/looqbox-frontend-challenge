import { Button, Dialog } from '@/components/ui';
import { FC, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export interface DeleteConfirmProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onConfirm: () => Promise<void>;
	translationKeys?: {
		title: string;
		description: string;
	};
	translationValues?: Record<string, string>;
	title?: string;
	description?: string | ReactNode;
}

const DeleteConfirm: FC<DeleteConfirmProps> = ({
	isOpen,
	onOpenChange,
	onConfirm,
	title,
	description,
	translationKeys,
	translationValues,
}) => {
	const { t } = useTranslation();

	const handleConfirm = useCallback(async () => {
		await onConfirm();
		onOpenChange(false);
	}, [onConfirm, onOpenChange]);

	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>{translationKeys?.title ? t(translationKeys.title) : title}</Dialog.Title>
					<Dialog.Description>
						{translationKeys?.description ? t(translationKeys.description, translationValues) : description}
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Footer>
					<Button variant='outline' onClick={() => onOpenChange(false)}>
						{t('commons.button.cancel')}
					</Button>
					<Button variant='destructive' onClick={handleConfirm}>
						{t('commons.button.delete')}
					</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	);
};

DeleteConfirm.displayName = 'DeleteConfirm';

export default DeleteConfirm;
