import { Button, Modal, Result } from "antd"
import type { PokemonErrorProps } from "../types/pokemon-error-props"


export const PokemonErrorModal = ({ error, onClose }: PokemonErrorProps) => {

    return (
        <div>
            <Modal
                open={!!error}
                onCancel={onClose}
                footer={null}
                centered
                destroyOnHidden
                styles={{
                    body: {
                        backgroundColor: '#ffffff',
                        margin: 0,
                        padding: 0,
                        borderRadius: '8px',
                    }
                }}
                width={500}

            >
                <Result
                    icon={<span className="text-7xl drop-shadow-md">😵‍💫</span>}
                    status="error"
                    title={
                        <h2 className="text-3xl text-red-600 tracking-tighter">
                            Oops! Something went wrong.
                        </h2>
                    }
                    subTitle={error}
                    extra={[
                        <Button key="close" size="large" type="text" className="text-red-600! bg-yellow-300! hover:bg-yellow-200! transition-colors" onClick={onClose}>
                            Keep Searching
                        </Button>
                    ]}
                />
            </Modal>
        </div>
    )
}